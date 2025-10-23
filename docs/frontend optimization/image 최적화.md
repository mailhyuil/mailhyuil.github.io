# 이미지 최적화

## 이미지 폭을 조절하라.

> 페이지에서 사용하는 이미지는 보통 가로폭이 1,000px이 넘지 않는다. 블로그 처럼 좌측 우측 메뉴가 존재한다면 800px로도 충분하다.

## 최적화된 이미지 포맷을 사용하라.

> JPG : 카메라로 찍은 실제 사진 (e.g. 실제 사진)
>
> > PNG : 만들어진 이미지 (e.g. 일러스트)

## <img>에 width, height 값을 선언해 Reflow를 방지하라.

## 여러 버전의 이미지를 제공하라.

```html
# Before
<img src="flower-large.jpg" />

# After
<img src="flower-large.jpg" srcset="flower-small.jpg 480w, flower-large.jpg 1080w" sizes="50vw" />
```

## 이미지 크기 조절 툴을 사용하라.

> sharp, squoosh, imagemin, svgo 등

## Image CDNs을 사용하라

> 가까운 CDN 서버에서 이미지를 불러오기 때문에 빠르게 이미지를 불러올 수 있다.

## CSS Sprite 기법을 사용하라.

> 다음과 같이 한 이미지를 불러와서 background-position값을 조절하여 원하는 이미지를 가져오는 것이 CSS Sprite 기법이다.
>
> > 서버에 요청을 한번만

```css
div#sprite {
  background: url(/images/sprite.png) no-repeat;
} //한 이미지를 불러옴

// position으로 각 이미지를 불러옴
div#sprite > .first {
  background-position: 0 0;
}
div#sprite > .second {
  background-position: 0 -15px;
}
div#sprite > .third {
  background-position: 0 -30px;
}
```

## lazy loading을 활용하라.

```html
<img loading="lazy" />
```

## 적절한 이미지 해상도

> 공통 디자인 그리드 기준 본문폭: 1280 px
>
> > 가로 영역 확장 시: 1920 px
> >
> > > 모바일 전용 가로 크기: 768 px
