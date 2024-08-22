# linux cmd set

## set -e

> 명령어가 하나라도 실패하면 그 즉시 스크립트는 종료된다.
>
> > if문을 사용할 필요가 없어진다.

```sh
#!/bin/bash

set -e
```

## set -x

> 각각의 명령어가 실행되기 전에 그 명령어가 어떻게 해석되어 실행될 것인지를 출력

```sh
#!/bin/bash

set -x
```

## set -o

> 쉘 옵션을 설정하거나 해제하기 위해 사용하는 명령어

```sh
#!/bin/bash

set -o pipefail
```
