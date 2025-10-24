# linux shellscript exit & return

> return 과 같다
>
> > 0 ~ 255 까지의 값만 반환할 수 있다.
> >
> > > $? 는 가장 최근 명령어의 종료 상태

## exit 0

> Success // 성공!

## exit 1 ~ 255

> General errors // 실패!

```sh
echo "🛠️ 패키지를 빌드합니다."
nx build server # 명령어 수행

if [ $? -ne 0 ] # 위의 명령어 수행 exit값이 0이 아니라면 (실패했다면)
then
    echo "⛔ 패키지 빌드에 실패했습니다. 배포 스크립트 실행을 종료합니다."
    exit 1
else
    echo "✅ 패키지 빌드가 완료되었습니다."
fi
```
