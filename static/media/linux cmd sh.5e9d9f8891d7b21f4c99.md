# linux cmd sh

> 기본 쉘(bash, zsh...)로 스크립트를 실행하는 명령어
>
> > 쉘스크립트에 #!/bin/bash를 적어주면 해당 쉘(bash)로 실행
> >
> > > 그냥 hello.sh를 실행하면 기본 쉘로 실행

```sh
hello.sh      # 스크립트에 shebang(#!/bin/bash)이 있을 시 shebang에 적힌 쉘로 실행
sh hello.sh   # 기본쉘로 실행
bash hello.sh # 기본쉘로 실행

# string을 읽어서 기본쉘로 실행
sh -c 'echo "hello world"'
sh -c 'npm run start'
```
