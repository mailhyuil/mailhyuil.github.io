# cicd github actions pem 권한

> self-host 사용 시 권한 문제 해결

```yaml
- name: Create PEM File
  env:
    SSH_KEY: ${{ secrets.SSH_KEY }}
  run: |
    echo "$SSH_KEY" >> key.pem
    chmod 400 key.pem
```
