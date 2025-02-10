# .dockerignore

> context 에 위치 eg) docker build . 에서 .에 위치
>
> > .dockerignore 파일이 잘못 작성되어 있으면 transfer context가 엄청 느려질 수 있다.
> >
> > > 앞에 !를 붙이면 허용된다.

## example

```sh
.angular
.git
.github
.gitignore
.nx
.dockerignore
.vscode
*.md
node_modules
dist
docker
**/some_other_dir_that_you_dont_need
```
