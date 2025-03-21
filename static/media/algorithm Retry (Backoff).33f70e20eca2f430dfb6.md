# algorithm Retry (Backoff)

> Backoff: 실패 시 즉시 재시도하지 않고 일정 시간 대기 후 재시도하는 알고리즘
>
> > maxRetryCount: 최대 재시도 횟수
> >
> > retryCount: 현재 재시도 횟수

## 즉시 재시도 (Immediate Retry)

> 지체 없이 즉시 재시도하므로, 신속하게 해결할 수 있는 문제에 이상적입니다.

## 무작위 재시도 (Randomized Retry)

> 시도를 분산하고 시스템 부하를 줄이기 위해 재시도 전임의 대기 시간을 선택합니다.

## 고정 지연 (Fixed Delay)

> 시도 횟수와 상관없이 재시도 간 대기 시간을 일정하게 유지합니다.

## 지수 백오프 (Exponential Backoff)

> 시스템 로드와 실패 가능성을 줄이기 위해 각 재시도 후 대기 시간을 두 배로 늘립니다.

```ts
function exponentialBackoff(retryCount: number): number {
  return Math.pow(2, retryCount) * 1000; // 대기 시간 (ms)
}

// 사용 예시
const maxRetries = 5;
let retryCount = 0;
let success = false;
while (retryCount < maxRetries && !success) {
  try {
    // 작업 수행
    success = true; // 성공적으로 작업을 수행한 경우
  } catch (error) {
    const waitTime = exponentialBackoff(retryCount);
    console.log(`Retrying in ${waitTime}ms...`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
    retryCount++;
  }
}
```

## 선형 백오프 (Linear Backoff)

> 예측할 수 있는 지연 시간에 대해 매번 재시도 후 일정한 양만큼 대기 시간을 늘립니다.

## 피보나치 백오프 (Fibonacci Backoff)

> 피보나치 수열을 사용하여 급격하거나 완화된 지연 사이의 균형을 유지하며 대기 시간을 결정합니다.
