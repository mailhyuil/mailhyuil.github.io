# github actions .env 파일 생성

> github setting에서 secret으로 저장해 두기

```yaml
- name: Generate .env
  run: |
    # Variables
    echo "${{ vars.development }}" > .env
    # Secrets
    echo "AWS_ACCESS_KEY_ID=${{ secrets.AWS_ACCESS_KEY_ID }}" >> .env
    echo "AWS_SECRET_ACCESS_KEY=${{ secrets.AWS_SECRET_ACCESS_KEY }}" >> .env
    echo "JWT_ID_TOKEN_SECRET=${{ secrets.JWT_ID_TOKEN_SECRET }}" >> .env
    echo "JWT_REFRESH_TOKEN_SECRET=${{ secrets.JWT_REFRESH_TOKEN_SECRET }}" >> .env
    # 따옴표로 감싸기
    echo 'DATABASE_URL="${{ secrets.DATABASE_URL }}"' >> .env
```
