# github actions .env 파일 생성

> github setting에서 secret으로 저장해 두기

```yaml
- name: Generate .env
  run: |
    touch .env
    echo "SERVER_PORT=${{ secrets.SERVER_PORT }}" >> .env
    echo "DATABASE_URL=${{ secrets.DATABASE_URL }}" >> .env
    echo "JWT_SECRET_KEY=${{ secrets.JWT_SECRET_KEY }}" >> .env
```
