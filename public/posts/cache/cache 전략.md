# cache 전략

## 자주 사용되며 자주 변경되지 않는 데이터를 캐시하라

> 자주 사용되는 정보 20%만 캐싱해도 80%의 성능 향상을 가져온다. (파레토 법칙)

## 중요한 정보, 민감 정보 등은 캐시하지 말라

## 항상 기본 만료 정책을 설정하라 (TTL)

> 캐시 만료 주기가 너무 짧으면 데이터는 너무 빨리 제거되고 캐시를 사용하는 이점은 줄어든다.
>
> > 캐시 만료 주기가 너무 길면 데이터가 변경될 가능성과 메모리 부족 현상이 발생하거나, 자주 사용되어야 하는 데이터가 제거되는 등의 역효과

## 캐시는 데이터가 최신 상태인지 확인하는 방법이 필요하다. 혹은 TTL을 짧게 설정하라
