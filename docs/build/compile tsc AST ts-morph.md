# compile tsc AST ts-morph

## install

```sh
npm i -D ts-morph
```

## usage

```ts
import { SyntaxKind } from "ts-morph";
import { Context } from "../model/context";

export default function migrateUseRecoilValue({ sourceFile }: Context) {
  // 1. 소스 파일에서 useRecoilValue 호출 부분만 찾아내기
  const declarations = sourceFile
    .getDescendants()
    .filter((node) => node.isKind(SyntaxKind.CallExpression) && node.getFirstChildByKind(SyntaxKind.Identifier)?.getText() === "useRecoilValue")
    .map((node) => node.asKind(SyntaxKind.CallExpression));

  // 2. 찾은 부분을 모두 useAtomValue로 변경하기
  for (const declaration of declarations) {
    declaration.getExpression().replaceWithText("useAtomValue");
  }
}
```

```ts
import ts from "ts-morph";

const project = new ts.Project({
  tsConfigFilePath: "./tsconfig.json",
});
const sourceFile = project.getSourceFile("./src/main.ts");
if (!sourceFile) throw new Error("Source file not found");
const declaration = sourceFile.getDescendants().filter((node: any) => node.isKind(ts.SyntaxKind.Identifier));
console.log(declaration);
```
