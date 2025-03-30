# github actions step 실패 시 다음 step

```yaml
steps:
  - name: First command
    run: some_command
  - name: on Fail
    if: failure()
    run: another_command
  - name: on Success
    if: success()
    run: another_command
```
