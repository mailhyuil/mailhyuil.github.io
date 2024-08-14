# tailwindcss background 요소 크기를 백그라운드 크기에 맞추기

> background-image를 넣을 때는 항상 이미지의 크기와 비율이 몇인지 확인해야한다!

## css

```css
div {
  background-image: url("http://www.pets4homes.co.uk/images/articles/1111/large/feline-influenza-all-about-cat-flu-5239fffd61ddf.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: calc((853 / 1280 * 100));
  /* padding-top */
  /* (img-height / img-width * container-width) */
  /* (853 / 1280 * 100) */
}
```

## tainwindcss

```
<div
    class="w-full h-0 bg-no-repeat bg-cover"
    style="background-image: url('assets/images/background.webp');
    padding-top: calc(853 / 1280 * 100%);"
>
</div>
```
