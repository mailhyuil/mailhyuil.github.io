# algorithm sort 기수정렬 - radix sort

“큰 숫자는 자릿수가 많다”는 특성을 이용해서, 숫자를 ‘자릿수별(digit by digit)’로 정렬하는 방식

- 비교연산이 없어서 퀵/병합보다 이론적으로 더 빠를 수 있다.
- 안정정렬

```js
// Helper: 특정 자리의 숫자 추출
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper: 숫자의 자리수 계산
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper: 가장 큰 자리수 찾기
function mostDigits(nums) {
  return Math.max(...nums.map(n => digitCount(n)));
}

// 메인 기수 정렬
function radixSort(nums) {
  const maxDigit = mostDigits(nums);
  for (let k = 0; k < maxDigit; k++) {
    const buckets = Array.from({ length: 10 }, () => []); // 0~9 버킷
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets); // 버킷 합치기 (안정정렬 유지)
  }
  return nums;
}

// 테스트
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
// [2, 24, 45, 66, 75, 90, 170, 802]
```
