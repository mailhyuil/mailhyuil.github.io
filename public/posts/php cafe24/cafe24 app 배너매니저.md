# cafe24 app 배너매니저

## logo.html

```html
<div df-banner-code="logo">
  <a href="{#href}" df-banner-clone>{#item}</a>
</div>
```

## banner-manager.html

> 배너매니저 관리에서 프로젝트 코드 버튼을 누르면 아래와 같은 코드가 나온다
>
> > 이 코드를 layout의 body 아래 붙여넣기 하면 된다

```html
<style>
  [df-banner-code][hidden] {
    display: none !important;
  }
</style>
<script>
  if (!document.getElementById("dfbm-script-45d1")) {
    var dfbm_src =
      "https://ecimg.cafe24img.com/pg117asdasdsd9075/depdep/web/upload/appfiles/ZaReJam3QasdeGGkMG/bdd324b3ae2dsf64ec6d1349.js";
    document.write('<script id="dfbm-script-45d1" src="' + dfbm_src + "?v=" + Date.now() + '"><\/script>');
  }
</script>
```
