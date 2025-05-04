# angular base logic 분리

## service

> 비동기 처리 (api 통신, timer...)
>
> > 전역 상태 관리 (memory, rxjs, localStorage..)
> >
> > > 전역에서 사용되는 상태를 가지고 있어야 한다. (stateful)

```txt
작은 규모의 프로젝트에서는 service로 밑의 2가지 역할을 모두 수행

store : 전역 상태 관리
effect : 비동기 처리
```

## component

> service나 자체 로직을 이용한 컴포넌트 관련 기능 구현 (value validation, file upload...)
>
> > service나 자체 로직을 이용한 컴포넌트 관련 view UI 구현 (input, button...)
> >
> > > 상태를 가지고 있으면 안된다. (stateless)

## page

> 비즈니스 로직의 집합 (service, component...)
>
> > service, component나 자체 로직을 이용한 비즈니스 관련 기능 구현 (form data, form validation, submit... )
> >
> > > service, component나 자체 로직을 이용한 비즈니스 관련 view UI 구현 (toast, modal, process bar...)
> > >
> > > > 비즈니스 로직을 위한 상태를 가지고 있어야 한다. (stateful)
