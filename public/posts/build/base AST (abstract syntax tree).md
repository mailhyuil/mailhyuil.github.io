# AST (abstract syntax tree)

> parsing된 코드를 설명하는 data structure
>
> > node들은 트리 구조로 연결되어 있으며, 각각의 node는 특정한 역할을 한다.
> >
> > > node란 AST의 각각의 요소를 의미한다. (ex. function, variable, expression 등)

## code

```ts
function square(n) {
  return n * n;
}
```

## AST

```json
{
  "type": "FunctionDeclaration", // Node
  "id": {
    "type": "Identifier", // Node
    "name": "square"
  },
  "params": [
    {
      "type": "Identifier", // Node
      "name": "n"
    }
  ],
  "body": {
    "type": "BlockStatement", // Node
    "body": [
      {
        "type": "ReturnStatement", // Node
        "argument": {
          "type": "BinaryExpression", // Node
          "operator": "*",
          "left": {
            "type": "Identifier", // Node
            "name": "n"
          },
          "right": {
            "type": "Identifier", // Node
            "name": "n"
          }
        }
      }
    ]
  }
}
```

## Node

```ts
interface Node {
  type: string;
}
```
