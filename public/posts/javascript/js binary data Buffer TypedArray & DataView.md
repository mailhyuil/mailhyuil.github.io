# js TypedArray & DataView

> ArrayBuffer를 읽기, 쓰기 위해서는 TypedArray 또는 DataView를 사용해야 한다.

## TypedArray

> UnitArray 8 16 32 // Uint8ClampedArray (Unsigned Int)
>
> > IntArray 8 16 32 (Signed Int)
> >
> > > FloatArray 8 16 32 (Float)

```js
const buf = new ArrayBuffer(4); /// 4 bytes

const unit8 = new Uint8Array(buf); /// Uint === Unsigned Int (0 ~ 255)
const unit16 = new Uint16Array(buf); /// Uint === Unsigned Int (0 ~ 65535)

console.log(unit8); // Uint8Array(4) [ 0, 0, 0, 0 ]
console.log(unit16); // Uint16Array(2) [ 0, 0 ]

unit8[0] = 1;
unit8[1] = 1;

console.log(unit8); // Uint8Array(4) [ 1, 1, 0, 0 ]
console.log(unit16); // Uint16Array(2) [ 257, 0 ]
```

## DataView

```js
const buf = new ArrayBuffer(4); // 4 bytes

// buf의 첫번째에 127을 할당하라. => 0000 0000 0111 1111
new DataView(buf).setInt16(0, 127, true); // little endian.

// 그러면 little endian에 의해 0111 1111이 앞에, 0000 0000이 뒤에 할당되어
// [0111 1111 0000 0000]이 된다.
// 결과적으로 [0111 1111 / 0000 0000 / 0000 0000 / 0000 0000]
// 8비트로 쪼개서 4조각을 내서 출력해보면 다음과 같다.
console.log(new Uint8Array(buf)); // [127, 0, 0, 0]
```

## String to ArrayBuffer

```js
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
```
