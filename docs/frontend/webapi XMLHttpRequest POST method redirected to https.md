# webapi XMLHttpRequest POST method redirected to https

> browser는 Post 메소드를 무조건 https로 리다이렉트 시켜서 보낸다.
>
> > 따라서 서버가 http를 사용하고 있다면 에러가 발생한다. (나의 경우 서버가 잠시 마비되는 문제가 발생했다.)
> >
> > > 이를 우회하는 방법은 없으며 반드시 tls를 사용해야 한다.
