# x algorithm 샘플링

> 대상 집합에서 일부 요소를 선택하는 알고리즘

## randomSampling

```js
function randomSampling(arr, sampleSize) {
  const sampledItems = [];

  // 배열의 길이가 샘플 크기보다 작거나 같은 경우, 모든 요소를 반환
  if (arr.length <= sampleSize) {
    return arr;
  }

  // 배열에서 무작위로 샘플링
  while (sampledItems.length < sampleSize) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];

    if (!sampledItems.includes(randomItem)) {
      sampledItems.push(randomItem);
    }
  }

  return sampledItems;
}

// 예시 사용법
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sampleSize = 3;

const sampledArray = randomSampling(array, sampleSize);
console.log(sampledArray);
```

## 계통 샘플링

```js
function systematicSampling(arr, sampleSize) {
  const sampledItems = [];
  const interval = Math.floor(arr.length / sampleSize);
  let startIndex = Math.floor(Math.random() * interval); // 시작 인덱스 무작위 설정

  for (let i = startIndex; i < arr.length; i += interval) {
    sampledItems.push(arr[i]);
  }

  return sampledItems;
}

// 예시 사용법
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sampleSize = 3;

const sampledArray = systematicSampling(array, sampleSize);
console.log(sampledArray);
```
