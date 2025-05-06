# image DPR (devicePixelRatio)

> 1px을 표현하기 위해 필요한 pixel 수 (1x, 2x, 3x 등으로 표현)
>
> > DPR이 높은 디바이스에서는 1px을 표현하기 위해 더 많은 pixel이 필요하다.
> >
> > 따라서 더 고해상도 이미지를 사용해야한다. e.g. 300px 이미지를 표현하기 위해 600px 이미지를 사용해야한다.

| 디바이스                   | DPR | 설명               |
| -------------------------- | --- | ------------------ |
| 일반 데스크탑 모니터       | `1` | CSS 1px = 실제 1px |
| iPhone Retina 디스플레이   | `2` | CSS 1px = 실제 2px |
| 갤럭시 최신기종 (고해상도) | `3` | CSS 1px = 실제 3px |

## img

```html
<img
  srcset="/img/logo_1x.png 1x, /img/logo_2x.png 2x, /img/logo_3x.png 3x"
  src="/img/logo_1x.png"
  width="300"
  height="100"
  alt="logo"
/>
```
