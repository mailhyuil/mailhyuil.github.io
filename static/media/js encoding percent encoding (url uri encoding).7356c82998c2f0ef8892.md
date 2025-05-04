# js encodeURI vs encodeURIComponent

```sh
# &?@=+를 제외하고 퍼센트인코딩
encodeURI
# &?@=+를 포함해서 퍼센트인코딩
encodeURIComponent
```

```js
const str = "&?@=+";

const encodeURIStr = encodeURI(str);
console.log(encodeURIStr); // &?@=+

const encodeURIComponentStr = encodeURIComponent(str);
console.log(encodeURIComponentStr); // %26%3F%40%3D%2B
```
