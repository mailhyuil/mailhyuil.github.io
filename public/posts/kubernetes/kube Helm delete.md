# kube Helm delete

```sh
# 관련 모든 리소스 삭제
helm delete <release name>

# 관련 모든 리소스 삭제 그러나 history는 남김 다시 rollback 가능
helm delete <release name> --keep-history
```
