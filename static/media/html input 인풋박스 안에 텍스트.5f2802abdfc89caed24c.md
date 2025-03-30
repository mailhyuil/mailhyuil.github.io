# 인풋 박스 안에 텍스트

> after:: 텍스트 생성 위치 조정

> > 인풋 박스의 padding을 이용하여 커서가 안닿게

## tailwindcss

```html
<label
  className="relative after:content-['원'] after:absolute after:top-2 after:right-3 after:block after:text-sm w-[120px]"
>
  <input
    className="relative border pr-8 border-gray-200 drop-shadow-sm py-2 px-3 h-[37px] rounded-lg text-sm w-[120px]"
  />
</label>
```
