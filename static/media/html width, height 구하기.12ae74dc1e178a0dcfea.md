# width, height 구하기

## browser

### inner-

> 브라우저 내 화면 영역의 크기

### outer-

> 브라우저 전체 창의 크기

## element

### offset-

> offset된 크기까지 포함
>
> > 패딩, 보더, 스크롤바 사이즈를 포함한 값

### client-

> client에게 보여지는
>
> > 실제로 보여지고 있는 컨텐츠의 크기

### scroll-

> 스크롤바에 가려진 크기까지 포함
>
> > 보이는 것과 상관없이 컨텐츠 전체 크기

### getBoundingClientRect()

> '렌더링 된'(transformed된) 크기를 리턴

# 사용자 이름이 한글이라 문제가 생길 시

> 프로젝트 폴더를 C드라이브 내 workspace에 위치시키기

# scroll 위치값 구하기

## scrollY, scrollX === pageYOffset, pageXOffset

> pageYOffset은 옛날 버전

## Y축 상단값

> scrollY

## Y축 하단값

> scrollY + innerHeight
