# angular @Inject @Injectable

> 앵귤러는 Injector라는 것을 사용해서 의존성을 제공하는 쪽과 사용하는 쪽을 연결한다.
>
> > 인젝터는 인스턴스 저장소를 탐색하여 인스턴스를 찾아서 주입해준다.
> >
> > > 인스턴스 저장소에 인스턴스가 없으면 인스턴스를 생성해서 저장소에 저장한다.
> > >
> > > > 인젝터는 부트스트랩 시에 최상위 인젝터가 생성되고 필요할 때마다 하위 계층에 인젝터를 생성한다.

## @Injectable

> providedIn:'root'를 상용하면 최상위 인젝터에 등록된다.
>
> > 앵귤러에게 클래스가 의존성 주입 가능한 클래스임을 알려준다.

## @Inject

> 기본으로 Class명을 키로 사용해서 의존성을 주입한다.
>
> > token을 사용해서 클래스를 지정하고 싶을 때 사용
