# algorithm isMatch

```js
function isMatch(s: string, p: string): boolean {
  const strLen = s.length;
  const patternLen = p.length;
  const dp: boolean[][] = Array.from({ length: strLen + 1 }, () => Array(patternLen + 1).fill(false));
  // 0번째 인덱스는 사용 안함 true 용도로 사용
  // 1-based index
  dp[0][0] = true;

  // 빈 문자열 vs 패턴: 앞에서부터 * 이어지면 계속 true
  for (let j = 1; j <= patternLen; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= strLen; i++) {
    for (let j = 1; j <= patternLen; j++) {
      // 문자 동일 or '?'
      if (p[j - 1] === s[i - 1] || p[j - 1] === "?") {
        dp[i][j] = dp[i - 1][j - 1];
      }

      // '*' → (빈 문자열 매칭) or (한 글자 이상 소비)
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[strLen][patternLen];
}
```
