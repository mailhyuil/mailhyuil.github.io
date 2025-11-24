# algorithm base 비트 연산

## 기본 연산

```js
a & b; // AND 연산
a | b; // OR 연산
a ^ b; // XOR 연산
~a; // NOT 연산
a << b; // 왼쪽 시프트 (곱하기 2)
a >> b; // 오른쪽 시프트 (나누기 2)
```

## 마스크 연산

> 특정 비트만 추출, 설정 플래그

```js
const FLAG_READ = 1 << 0; // 0001
const FLAG_WRITE = 1 << 1; // 0010
const FLAG_EXEC = 1 << 2; // 0100

const permission = FLAG_READ | FLAG_EXEC; // 0001 | 0100 = 0101

// 읽기 권한 있는지 확인
console.log(permission & FLAG_READ ? "읽기 가능" : "읽기 불가"); // ✅ 읽기 가능

// 쓰기 권한 있는지 확인
console.log(permission & FLAG_WRITE ? "쓰기 가능" : "쓰기 불가"); // ❌ 쓰기 불가
```

## 플래그 처리

```js
const STATE_ACTIVE = 1 << 0; // 0001
const STATE_FOCUSED = 1 << 1; // 0010
const STATE_DISABLED = 1 << 2; // 0100

let buttonState = STATE_ACTIVE | STATE_FOCUSED; // 0011

// 포커스만 해제
buttonState &= ~STATE_FOCUSED; // 0011 & ~(0010) = 0001
```

## 빠른 연산 (\*2, /2)

```js
a << 1; // a * 2
a >> 1; // a / 2
```

## XOR 스왑

- 임시 변수 없이 스왑

```js
let a = 5; // 0101
let b = 3; // 0011

a = a ^ b; // a = 0101 ^ 0011 = 0110
b = a ^ b; // b = 0110 ^ 0011 = 0101 (a)
a = a ^ b; // a = 0110 ^ 0101 = 0011 (b)

console.log(a, b); // 3 5
```

## 소수점 버리기

- 32-bit signed integer로 잘림
- 큰수에 Math.floor()가 안전

```js
3.14 >> 0; // 3
3.14 | 0; // 3
```
