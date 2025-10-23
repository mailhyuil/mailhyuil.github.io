# base ad-hoc

> for this particular purpose
>
> > 특정 상황에서만 정답이 되고 일반화될 수 없는 해답을 말한다
> >
> > > 그러므로 재사용되는 것이 거의 불가능하다
> > >
> > > > 개발 기간이 촉박할 때 급하게 요구사항을 맞추는데 사용된다.
> > > >
> > > > > 베스트 프랙티스가 아니며, 장기간 사용을 위해 최적화가 필요하다.
> > > > >
> > > > > > e.g. 소위 '하드코딩' 이라 불리는 방법으로 코딩하여 만든 솔루션이다.

## ad-hoc environment variable

> 한번 실행시킬 때만 적용되는 환경변수

```sh
DEBUG=express:* node app.js
TEST_VAR=123 node app.js
...
```
