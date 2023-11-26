# kube Helm Plugin diff

## install

```sh
helm plugin install <helm_diff_plugin_url>
```

## 사용

```sh
helm diff upgrade [release name] [chart] [flags] # helm diff upgrade revision <release name> 1
helm diff rollback [release name] [revision number] [flags]
```
