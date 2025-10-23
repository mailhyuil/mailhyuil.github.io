# compile ng-morph

> ts-morph를 angular 용으로 추상화한 라이브러리
>
> > 내부에서 ts-morph를 사용한다.

## install

```sh
npm i -D ng-morph
```

## usage

```ts
import { createProject, getClasses, NgMorphTree, saveActiveProject, setActiveProject, SyntaxKind } from "ng-morph";

setActiveProject(createProject(new NgMorphTree(), "/", ["**/*.ts"]));

const components = getClasses("**/*.ts");

const componentToRemove = "LepiButton";
const componentToAdd = "ButtonComponent";

components.forEach(component => {
  const namedImports = component
    .getSourceFile()
    .getImportDeclaration(decl => {
      return decl.getModuleSpecifier().getText() === "'@lepisode-ui/components'";
    })
    ?.getNamedImports();

  namedImports?.forEach(namedImport => {
    if (namedImport.getName() === componentToRemove) {
      namedImport.remove();
      component.getSourceFile().addImportDeclaration({
        moduleSpecifier: "@mailhyuil/ng-libs/admin",
        namedImports: [componentToAdd],
      });
      // remove the import of the Component decorator
      const decorator = component.getDecorator("Component");
      const arg = decorator?.getArguments()[0];

      if (!arg || !arg.asKind(SyntaxKind.ObjectLiteralExpression)) return;

      const obj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
      const importsProp = obj.getProperty("imports");

      if (importsProp && importsProp.getKind() === SyntaxKind.PropertyAssignment) {
        const initializer = (importsProp as any).getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!initializer) return;

        initializer.getElements().forEach(el => {
          if (el.getText() === componentToRemove) {
            el.replaceWithText(componentToAdd);
          }
        });
      }
    }
  });
});

saveActiveProject();
```
