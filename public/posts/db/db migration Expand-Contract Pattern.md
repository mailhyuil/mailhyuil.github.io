# db migration Expand-Contract Pattern

> database를 migration할 때 사용하는 패턴
>
> > 스키마 추가(확장)는 아무리 해도 에러가 발생하지 않는다
> >
> > > 확장을 하고 데이터를 옮기고 앱의 로직을 변경하고나서
> > >
> > > > 더 이상 쓰지 않는 기존 스키마를 제거(수축)
> > > >
> > > > > blue/green, canary와 함께 downtime이 발생하지 않는 배포 방식

```sh
# Expand
새로운 컬럼을 추가

# Migration
새로운 컬럼에 기존에 있던 데이터를 추가
새로운 컬럼을 바라보도록 로직을 변경하고

# Contract
사용하지 않는 이전 컬럼을 제거
```
