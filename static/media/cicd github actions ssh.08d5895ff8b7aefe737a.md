# cicd github actions ssh

> appleboy/ssh-action@v1.0.0 사용

```yaml
name: remote ssh command
on: [push]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: executing remote ssh commands using password
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          port: ${{ secrets.PORT }}
          key: ${{ secrets.KEY }}
          script: |
            whoami
            git pull origin master
          #   username: ${{ secrets.USERNAME }}
          #   password: ${{ secrets.PASSWORD }}
```
