# 3-tier architecture

> layered architecture의 일종
>
> > presentation layer, business layer, data layer로 구성
> >
> > > controller, service, repository로 구성

```
presentation layer (controller)
    - UI
    - 사용자의 요청을 받아서 처리
    - 사용자에게 결과를 보여줌
business layer (service)
    - 비즈니스 로직을 처리
    - presentation layer로부터 요청을 받아서 처리
    - data layer로부터 데이터를 받아서 처리
    - presentation layer에게 결과를 보냄
data layer (repository)
    - 데이터를 저장하고 관리
    - business layer로부터 요청을 받아서 처리
    - business layer에게 결과를 보냄
```
