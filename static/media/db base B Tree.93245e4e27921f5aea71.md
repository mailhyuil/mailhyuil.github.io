# db base B Tree

## B Tree

> Node = Disk Page
>
> > node degree - 1 = maximum element count
> >
> > > Data Pointer는 primary key 또는 tuple id를 가리킨다 있음 (mysql = primary key, postgres = tuple id)
> > >
> > > mysql은 primary key를 가리키기 때문에 primary key가 uuid처럼 크다면 메모리에 올릴 수 있는 양이 적기 때문에 비효율
> > >
> > > postgres는 tuple id를 가리키기 때문에 primary key가 uuid처럼 커도 상관 없음
> > >
> > > > 문제: 범위 쿼리를 하기 위해 data에 여러번 접근해야함

```sh
        Node:element,element               # element:key,value (key is index, value is tuple id)
        /         |         \
Node:element Node:element Node:element
```

## B+ Tree

> 각 노드에는 오직 key만 저장
>
> > value는 leaf node에만 저장
> >
> > > leaf node는 doubly linked list로 연결되어 있음

```sh

```
