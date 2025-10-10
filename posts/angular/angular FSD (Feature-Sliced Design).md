# angular FSD (Feature-Sliced Design)

## app/

> app을 초기화 및 설정
>
> > 전역에서 한번만 사용되는 컴포넌트 (store, router, layout...)

## pages/

> 라우팅 단위, 페이지 단위 (list, detail, edit...)

## widgets/

> 여러 페이지 내에서 사용되는 재사용 가능한 컴포넌트

## features/

> 여러 페이지와 위젯에서 사용되는 비즈니스 로직

## shared/

> Reusable functionality (lib, ui, util...)
>
> > 비즈니스 로직이 없는 컴포넌트, 유틸, 타입, 스타일 등

## entities/

> 비즈니스 도메인 모델 (user, post, comment...)
>
> > model(user.type.ts), ui(user-card.component.ts...), api(user.api.ts) 포함
