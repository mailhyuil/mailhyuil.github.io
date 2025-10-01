## commander ts-morph

## install

```sh
npm i -D commander

# exec
node <filename>.js <args>
ts-node <filename>.ts <args>
```

## usage

```ts
const { Command } = require("commander");
const program = new Command();

program.name("string-util").description("CLI to some JavaScript string utilities").version("0.8.0");

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
```
