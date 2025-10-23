# svg filter

> defs 내에 필터를 정의
>
> > 필터에 아이디를 지정하고 css에서 적용

```
.blobs {
  filter: url("#goo");
}
```

## feGaussianBlur

> 가우시안 블러

```
<defs>
    <filter id="f1" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
</defs>
```

## feOffset

```
  <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
    </filter>
  </defs>
```

### 그림자

> feOffset으로 뒤로 보내고
>
> > 가우시안 블러

```
  <defs>
    <filter id="f2" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
```
