# aws IAM

> 보안, 인증, 인가를 담당하는 서비스
>
> > 사용자, 그룹, 역할을 생성하고 그것들을 AWS Account에 연결하여 권한을 부여한다.
> >
> > AWS Account는 root 계정을 가지고 있으며 AWS Organization을 통해 다른 계정을 추가할 수 있다.
> >
> > > 개발을 위한 권한(Read & Write), Billing Viewer(예산 관리)(Read), Log Viewer 등의 권한(Read)을 부여할 수 있다.
> > >
> > > > 항상 root 계정을 사용하지 않고, IAM 사용자를 생성하여 사용하는 것이 좋다.

## Access Control

```txt
user-based: 각 사용자에게 직접 권한을 부여하여 접근을 제어하는 방식이다.
group-based: 사용자를 그룹으로 묶고, 해당 그룹에 권한을 부여하여 관리하는 방식이다.
role-based: 역할을 통해 권한을 부여받고, 그 역할을 맡은 엔터티가 해당 권한을 사용하는 방식이다. 서비스나 다른 AWS 계정에도 적용된다.
attribute-based: 사용자의 속성이나 리소스의 태그에 기반하여 권한을 부여하는 방식으로, 정책에 조건을 추가하여 접근을 제어한다.
```

## user

```txt

```

## role

```txt

```

## group

```txt

```
