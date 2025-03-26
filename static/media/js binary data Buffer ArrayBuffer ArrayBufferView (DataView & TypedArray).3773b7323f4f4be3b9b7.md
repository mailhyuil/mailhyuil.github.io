# ArrayBuffer ArrayBufferView

> ArrayBuffer는 브라우저와 Node.js 모두에서 사용할 수 있는 원시 바이너리 데이터 버퍼 (Buffer는 Nodejs에서만 사용 가능)
>
> > ArrayBuffer에 접근하기 위한 객체를 통해서 접근

## ArrayBufferView

> ArrayBuffer에 접근하기 위한 객체

## TypedArrays

> ArrayBufferView의 한종류
>
> > for reading and writing raw binary data in memory buffers.

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

> ArrayBufferView의 한종류

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
