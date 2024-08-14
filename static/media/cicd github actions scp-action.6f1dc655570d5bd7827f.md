# cicd github actions scp

```yaml
 - name: Upload dist content via scp
      uses: appleboy/scp-action@master
      env:
        HOST: ${{ secrets.HOST }}
        USERNAME: ${{ secrets.USERNAME }}
        PORT: ${{ secrets.PORT }}
        KEY: ${{ secrets.SSHKEY }}
      with:
        source: "documentation/"
        target: ${{ secrets.TARGETDIR }}
        strip_components: 1
```
