# linux cmd tee

> sudo 권한을 써도 Redirection 되는 순간 sudo 권한이 사라지고 사용자 권한으로 변경됨
>
> > 이때 | tee 를 사용하면 sudo 권한을 유지하면서 Redirection 가능
> >
> > > tee 는 표준 입력에서 읽은 내용을 표준 출력에도 쓰므로 화면에도 표준 입력에서 읽은 내용이 표시됩니다. > /dev/null을 사용해서 가리기

```sh
sudo cat test.txt > test2.txt # test2.txt 파일은 사용자 권한으로 생성됨

sudo cat test.txt | tee test2.txt # test2.txt 파일은 sudo 권한으로 생성됨

sudo cat test.txt | tee test2.txt > /dev/null # 터미널 출력 가리기
```
