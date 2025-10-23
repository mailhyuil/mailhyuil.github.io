# email SMTP Server

> 메일의 발신과 수신을 담당하는 서버
>
> > 25, 587, 465 포트 사용
> >
> > > SMTP, IMAP, POP3 프로토콜을 사용하여 메일을 송수신
> > >
> > > > 메일을 다른 SMTP 서버로 전송 (SMTP 사용)
> > > >
> > > > 외부에서 오는 메일을 받아서 Mailbox에 저장 (IMAP, POP3 사용)
> > > >
> > > > > MX 레코드에 등록하여 메일을 다른 SMTP 서버로 전파할 수 있다.

```txt
mailhyuil@dep.team -> cloudflare SMTP server -> mailhyuil@gmail.com
```
