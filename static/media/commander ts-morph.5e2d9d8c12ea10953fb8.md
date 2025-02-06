## commander ts-morph

## install

```sh
npm i -D commander
npm i -D ts-morph
```

## usage

```ts
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const { Project, SyntaxKind } = require("ts-morph");
const program = new Command();

program
  .version("1.0.0")
  .description("Custom NestJS project initializer")
  .action(() => {
    const newModuleName = "DiscoveryModule";
    // ts-morph project 설정
    const project = new Project();
    const appModulePath = path.join(__dirname, "guards/app.module.ts");

    // 프로젝트에 app.module.ts 파일 추가
    const sourceFile = project.addSourceFileAtPath(appModulePath);

    // AppModule 클래스 선언 찾기
    const appModuleClass = sourceFile.getClass("AppModule");
    if (!appModuleClass) {
      throw new Error("AppModule class not found");
    }

    // AppModule 데코레이터 찾기
    const decorator = appModuleClass.getDecorator("Module");
    if (!decorator) {
      throw new Error("Module decorator not found");
    }

    // 데코레이터의 인수(객체 리터럴) 가져오기
    const decoratorArgument = decorator.getArguments()[0];
    if (!decoratorArgument || !decoratorArgument.isKind(SyntaxKind.ObjectLiteralExpression)) {
      throw new Error("Module decorator argument is not an object literal");
    }

    const importsProperty = decoratorArgument.asKindOrThrow(SyntaxKind.ObjectLiteralExpression).getProperty("imports");

    if (importsProperty && importsProperty.isKind(SyntaxKind.PropertyAssignment)) {
      const importsArray = importsProperty.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

      // 중복 여부 체크
      const isModuleAlreadyImported = importsArray.getElements().some((el: any) => el.getText() === newModuleName);

      if (!isModuleAlreadyImported) {
        importsArray.addElement(newModuleName);
        sourceFile.addImportDeclaration({
          namedImports: [newModuleName],
          moduleSpecifier: "./path/to/your-module", // 실제 모듈 경로로 바꾸세요
        });

        console.log(`${newModuleName} has been added to imports array.`);
      } else {
        console.log(`${newModuleName} is already in the imports array.`);
      }
    } else {
      console.error("Imports array not found or not properly formatted.");
    }

    // 변경 사항 저장
    sourceFile.saveSync();
  });

program.parse();
```
