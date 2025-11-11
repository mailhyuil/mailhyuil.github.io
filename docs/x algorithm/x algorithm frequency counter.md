# algorithm frequency counter

두 문자열, 배열의 요소의 개수가 같은지 확인하는 알고리즘 O(n)

> 주문 요청한 상품 목록과 실제 결제된 상품이 같은지 확인

```ts
function validAnagram(a, b) {
  if (a.length !== b.length) return false;
  if (a === b) return true;
  const freq = {};
  for (const ch of a) freq[ch] = (freq[ch] || 0) + 1;
  for (const ch of b) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }
  return true;
}

console.log(validAnagram("ㅋ", "ㅋㅁㅁㅁ"));
```
