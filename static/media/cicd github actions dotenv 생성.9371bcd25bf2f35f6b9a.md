# github actions .env 파일 생성

> github setting에서 secret으로 저장해 두기

```yaml
- name: Generate .env for Production
  run: |
    echo "SERVER_PORT=${{ secrets.SERVER_PORT }}" >> .env.production
    echo "JWT_SECRET_KEY=${{ secrets.JWT_SECRET_KEY }}" >> .env.production
```
