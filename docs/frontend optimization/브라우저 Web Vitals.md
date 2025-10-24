# Web Vitals

## FCP (First Contentful Paint)

> 의미 있는 콘텐츠(텍스트, 이미지, SVG 등)"를 화면에 렌더링한 시점
>
> `<div></div>` 같은 빈 태그는 포함되지 않음
>
> > 서버 응답 시간 개선 (가까운 CDN 서버를 사용)
> >
> > 리소스 용량 줄이기
> >
> > css 축소, 지연, 즉시 처리
> >
> > 서비스 워커로 리소스 캐싱

## LCP (Largest Contentful Paint)

> Above the fold에서 가장 큰 콘텐츠(이미지, 텍스트, 비디오...)가 로드되는 시점
>
> > 서버 응답 시간 개선 (가까운 CDN 서버를 사용)
> >
> > 리소스 용량 줄이기, preload, poster image 등을 통해 미리 로드하여 최적화
> >
> > css 축소, 지연, 즉시 처리
> >
> > 서비스 워커로 리소스 캐싱`

## CLS (Cumulative Layout Shift)

> 사용자가 예상치 못한 레이아웃 변화를 경험하는 시점 (시각적 안정성)
>
> 요소가 추가되면서 레이아웃이 변화되는 것
>
> > 동적 리소스(이미지, 비디오 등)의 크기를 미리 설정
> >
> > FOUT/FOIT 방지 (폰트가 나중에 적용되는 현상)
> >
> > 광고를 위한 공간은 미리 확보

## TBT (Total Blocking Time)

> 메인 스레드가 사용자 입력에 반응할 수 없었던 시간의 총합
>
> > long task 분리 (requestIdleCallback, requestAnimationFrame 사용)
> >
> > 웹워커로 작업을 분리
> >
> > code splitting, lazy load

## Speed Index

> Above the fold의 콘텐츠가 완전히 로드되는 데 걸리는 시간
>
> > 움직이는 webp 등의 무거운 이미지는 먼저 가벼운 static 이미지로 보여주고 난 후에 바꿔치기

## INP (Interaction to Next Paint)

> 사용자가 인터랙션(클릭, 탭, 키입력 등)을 했을 때, 브라우저가 실제 반응(UI 업데이트)을 렌더링하기까지 걸리는 시간
>
> > lazy load된 컴포넌트를 preload, prefetch, pre-hydrate
> >
> > 웹워커로 작업을 미리 연산
