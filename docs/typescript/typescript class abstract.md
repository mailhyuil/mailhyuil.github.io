# typescript abstract

> abstract class는 인스턴스를 생성할 수 없다.
>
> > abstract 메소드는 하위 클래스에서 반드시 구현해야한다.
> >
> > interface는 아무것도 구현할 수 없지만 추상 클래스는 구현할 수도 있다.
> >
> > > abstract class는 extends, implements가 둘다 가능
> > >
> > > extends하지말고 implements하라!!
> > >
> > > extends 하면 super를 사용(부모가 abstract class), implements하면 부모가 Object
> > >
> > > > 필드변수가 있는 abstract를 implements하려면 필드도 abstract 붙여주기
> > > >
> > > > implements 시 abstract class에 구현된 메소드도 재 구현해야한다.
