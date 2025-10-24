# cicd github actions scp-action

> rename 불가능 (mv 커맨드를 통해서 rename 해라)
>
> > 파일의 상위 디렉토리가 존재하면 strip_components 옵션을 사용하여 제거
> >
> > > 여러 파일을 한번에 옮길 때는 , 사용

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
