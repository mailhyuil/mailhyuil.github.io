# vueuse useFileDialog

[link](https://vueuse.org/core/useFileDialog/)

> file upload에 사용
>
> > files, open, reset 리턴

```
open // 파일 업로드창 열기
files // 업로드된 파일을 담은 배열을 담은 ref
reset // 업로드된 파일을 리셋
```

## files to Array

```
const _files = Array.from(files);
```
