# db cardinality 카디널리티

> 카디널리티 : 값의 고유성을 나타내는 척도
>
> > 중복도가 낮으면 카디널리티가 높다고 표현합니다
> >
> > > 중복도가 높으면 카디널리티가 낮다고 표현합니다
> > >
> > > > INDEX를 선정할 때 카디널리티가 높은 컬럼을 선정하는 것이 좋습니다.

```sh
성별   이름      주민등록번호
남     임꺽정    123456-1234561
남     홍길동    123456-1234562
여     김지수    223456-1234563
남     이몽룡    123456-1234564
여     성춘향    223456-1234565
여     김지수    223456-1234566
남     김지수    123456-1234567
남     홍길동    123456-1234568
남     홍길동    123456-1234569

# 주민등록번호의 카디널리티가 가장 높다.
```
