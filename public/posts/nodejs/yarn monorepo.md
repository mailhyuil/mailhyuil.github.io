# MonoRepo

## root package

```
"workspaces": [
  "client","server", "interface"
]
```

## sub package

```
"name": "client",
```

## command

```
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
