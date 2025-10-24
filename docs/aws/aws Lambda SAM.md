# aws Lambda SAM

> AWS Lambda 함수와 관련 리소스를 정의하고 배포하기 위한 오픈 소스 프레임워크
>
> > SAM은 내부적으로 CloudFormation을 사용해서 실제 배포를 수행

## cli

```sh
sam init # SAM 프로젝트 초기화
sam build # 빌드 (코드 변경 시 반드시 수행)
sam deploy --guided # 배포 (최초 배포 시 --guided 옵션 사용)
```

## template.yaml

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31
Description: Schedule App with EventBridge

Globals:
  Function:
    Timeout: 30
    Runtime: nodejs22.x
    Architectures:
      - x86_64
    Environment:
      Variables:
        DATABASE_URL: !Ref DatabaseUrl

Resources:
  # Prisma Layer
  PrismaLayer:
    Type: AWS::Serverless::LayerVersion
    Properties:
      LayerName: prisma-client
      Description: Prisma Client Layer
      ContentUri: prisma-layer/
      CompatibleRuntimes:
        - nodejs22.x
      RetentionPolicy: Delete

  # Lambda 함수 1: Open Class
  OpenClassFunction:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: open-class
      CodeUri: open-class/
      Handler: app.lambdaHandler
      Description: Open a class when scheduled
      Layers:
        - !Ref PrismaLayer
    Metadata:
      BuildMethod: esbuild
      BuildProperties:
        Minify: true
        Target: es2020
        Sourcemap: true
        EntryPoints:
          - app.ts
        External:
          - ".prisma/client"

  # Lambda 함수 2: Close Class
  CloseClassFunction:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: close-class
      CodeUri: close-class/
      Handler: app.lambdaHandler
      Description: Close a class when scheduled
      Layers:
        - !Ref PrismaLayer
    Metadata:
      BuildMethod: esbuild
      BuildProperties:
        Minify: true
        Target: es2020
        Sourcemap: true
        EntryPoints:
          - app.ts
        External:
          - ".prisma/client"

  # EventBridge Scheduler 실행 역할 (두 Lambda 모두 포함)
  SchedulerExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Principal:
              Service: scheduler.amazonaws.com
            Action: sts:AssumeRole
      Policies:
        - PolicyName: InvokeLambdaFunctions
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Effect: Allow
                Action: lambda:InvokeFunction
                Resource:
                  - !GetAtt OpenClassFunction.Arn
                  - !GetAtt CloseClassFunction.Arn

Parameters:
  DatabaseUrl:
    Type: String
    Description: Database connection URL
    NoEcho: true

Outputs:
  OpenClassFunctionArn:
    Description: Lambda Function ARN for EventBridge (Open)
    Value: !GetAtt OpenClassFunction.Arn
    Export:
      Name: !Sub "${AWS::StackName}-OpenClassFunctionArn"

  CloseClassFunctionArn:
    Description: Lambda Function ARN for EventBridge (Close)
    Value: !GetAtt CloseClassFunction.Arn
    Export:
      Name: !Sub "${AWS::StackName}-CloseClassFunctionArn"

  SchedulerRoleArn:
    Description: IAM Role ARN for EventBridge Scheduler
    Value: !GetAtt SchedulerExecutionRole.Arn
    Export:
      Name: !Sub "${AWS::StackName}-SchedulerRoleArn"
```

## samconfig.toml

> sam cli 명령어의 기본 옵션 설정 파일

```toml
# More information about the configuration file can be found here:
# https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-config.html
version = 0.1

[default.global.parameters]
stack_name = "schedule-app"

[default.build.parameters]
cached = true
parallel = true

[default.validate.parameters]
lint = true

[default.deploy.parameters]
capabilities = "CAPABILITY_IAM"
confirm_changeset = true
resolve_s3 = true
stack_name = "class-scheduler"
s3_prefix = "class-scheduler"
region = "ap-northeast-2"
disable_rollback = true
image_repositories = []

[default.package.parameters]
resolve_s3 = true

[default.sync.parameters]
watch = true

[default.local_start_api.parameters]
warm_containers = "EAGER"

[default.local_start_lambda.parameters]
warm_containers = "EAGER"
```
