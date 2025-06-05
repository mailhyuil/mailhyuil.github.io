# MapReduce Pattern

> input text를 단어별로 카운트하는 예시

```js
const sentences = ["hello world", "hello AI", "world of AI"];

// Map 단계: 단어들을 쪼개고 (word, 1) 형태로 출력
const mapped = sentences.flatMap(line => line.split(" ").map(word => [word, 1]));
// 예시 출력: [['hello', 1], ['world', 1], ['hello', 1], ['AI', 1], ...]

// Shuffle 단계: 같은 단어끼리 그룹화
const grouped = mapped.reduce((acc, [word, count]) => {
  if (!acc[word]) acc[word] = [];
  acc[word].push(count);
  return acc;
}, {});
// 예시 출력: { hello: [1, 1], world: [1, 1], AI: [1, 1], of: [1] }

// Reduce 단계: count 합산
const reduced = Object.fromEntries(
  Object.entries(grouped).map(([word, counts]) => [word, counts.reduce((sum, c) => sum + c, 0)]),
);

console.log(reduced);
```
