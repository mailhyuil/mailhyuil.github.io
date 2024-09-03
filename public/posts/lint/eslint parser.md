# eslint parser

> abstract syntax tree를 분석하여 코드를 검사하는 도구

## custom parser

```ts
const espree = require("espree");

// Logs the duration it takes to parse each file.
function parse(code, options) {
  const label = `Parsing file "${options.filePath}"`;
  console.time(label);
  const ast = espree.parse(code, options);
  console.timeEnd(label);
  return ast; // Only the AST is returned.
}

module.exports = { parse };
```
