# x algorithm isSubsequence

- 두 문자열이 주어졌을 때 첫번째 문자열이 두번째 문자열의 부분 문자열인지 단, 순서가 바뀌지 않아야 한다. O(n+m)

```js
function isSubsequence(str1, str2) {
  // 빈 문자열 처리: "" 는 어떤 문자열의 subsequence 로 볼 수도 있고,
  // 문제 조건에 따라 false 로 할 수도 있음. 여기선 str1 이 비면 false 로 처리.
  if (!str1.length) return false;

  let i = 0; // str1 포인터
  let j = 0; // str2 포인터

  while (j < str2.length && i < str1.length) {
    if (str1[i] === str2[j]) {
      i++; // 같은 문자면 str1 쪽 한 칸 전진
    }
    j++; // str2 는 무조건 한 칸 전진
  }

  // str1 의 모든 문자를 순서대로 찾았는지
  return i === str1.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
```
