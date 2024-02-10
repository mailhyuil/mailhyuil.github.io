# Swagger Codegen

## install

```sh
npm install @openapitools/openapi-generator-cli -D
```

## openapi.json

```json
{
  "modelPackage": "src/model",
  "apiPackage": "src/api",
  "withSeparateModelsAndApi": true
}
```

## package.json

```json
"scripts":{
  "openapi": "openapi-generator generate -i https://dev.yourapiserver.com/openapi.json -g typescript-axios -o ./models -c ./openapi.json --skip-validate-spec"
}
```
