# aws Cloudformation aws-cdk

> cloud development kit
>
> > 익숙한 프로그래밍 언어(javascript...)를 사용하여 클라우드 리소스를 정의할 수 있는 오픈소스 개발 프레임워크
> >
> > > 작성한 코드를 cloudformation 템플릿로 변환되어 인프라를 생성

## install

```sh
npm install -g aws-cdk-lib
```

## usage

```ts
import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";

class MyStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    // S3 버킷 생성 (CDK 방식)
    new s3.Bucket(this, "MyBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

const app = new cdk.App();
new MyStack(app, "MyStack");
```
