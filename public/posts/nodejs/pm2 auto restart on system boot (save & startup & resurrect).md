# pm2 save (auto restart)

> pm2 로 프로그램을 실행 시킨 후, pm2 save 명령어를 실행
>
> > pm2 startup 명령어로 서버 재시작 시 자동으로 save된 프로그램들을 재시작
> >
> > > 또는 pm2 resurrect 명령어를 실행하여 save된 프로그램들을 수동으로 재시작할 수 있다.

```sh
# 실행된 프로그램들을 저장
pm2 save
# 커맨드 실행 시 save된 프로그램을 재시작 등록할 수 있는 명령어가 출력된다.
# 그 명령어를 직접 실행하면 된다.
pm2 startup
# save된 프로그램들을 재시작
pm2 resurrect
```
