# yarn monorepo

## root package

```json
"workspaces": [
  "client","server", "interface"
]
```

## sub package

```json
"name": "client",
```

## command

```sh
yarn workspace client add
```

## nohoist

```json
"workspaces": {
  "packages": [
    "client",
    "server",
    "interface"
  ],
  "nohoist": [
    "**/apexcharts"
  ]
},
```
