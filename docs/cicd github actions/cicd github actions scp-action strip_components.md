# cicd github actions scp-action strip_components

> source의 상위 디렉토리를 제거하는 옵션
>
> > /a/b/directory 일 시에는 strip_components: 2로 설정
> >
> > > /a/b/file 일 시에는 strip_components 없이

```sh
# 디렉토리 통째로 옮길 때
source: "a/b/c/output"
target: "/apps/path/output"
strip_components: 4

# 디렉토리 내용물만 옮길 때
source: "a/b/c/output"
target: "/apps/path"
strip_components: 4

# 파일을 옮길 때
source: "a/b/c/file.txt"
target: "/apps/path"
strip_components: 3

source: "a/b/c/file.txt,a/b/c/file-2.txt"
target: "/apps/path"
strip_components: 3
```
