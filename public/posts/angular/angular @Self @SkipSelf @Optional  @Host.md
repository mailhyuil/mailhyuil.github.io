# angular @Optional @Self @SkipSelf @Host

> 의존성 주입(Dependency Injection) Decorators

## @Optional

> 해당 의존성이 반드시 필요하지 않음을 나타냅니다. 의존성이 찾아지지 않는 경우, Angular는 에러를 발생시키지 않고 null 값을 제공

## @Self

> 현재 컴포넌트의 범위 내에서만 의존성을 찾도록 지정

## @SkipSelf

> 현재 컴포넌트나 프로바이더의 범위를 건너뛰고 부모 컴포넌트나 컨테이너에서 의존성을 찾도록 지정

## @Host

> 현재 컴포넌트나 프로바이더의 상위 계층 중에서 가장 가까운 호스트(host) 요소에서 의존성을 찾도록 지정
