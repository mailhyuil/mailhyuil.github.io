# L7 http headers MIME

> SMTP의 MIME을 일부 차용했다. (전부 사용하지 않는다, 또한 다른 방법으로 사용하는 것도 있다.)
>
> > 필수는 아니다 하지만 명시해서 클라이언트나 서버가 어떻게 처리할지 결정할 수 있도록 해주는 것이 좋다.
> >
> > > 명시하지 않을 시 브라우저는 기본으로 Content-type: text/plain; charset=us-ascii로 인식한다.
> > >
> > > > 브라우저는 Content-Type을 보고 어떻게 처리할지 결정한다.
> > > >
> > > > > ajax를 사용할 때는 코드로 처리를 해줘도 딱히 상관없지만 명시해주는게 best practice
