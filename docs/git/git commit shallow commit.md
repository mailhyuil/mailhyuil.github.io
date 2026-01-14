# git commit shallow commit

- 커밋 히스토리가 많이 쌓인 저장소를 clone하면 오랜 시간이 걸리는 문제가 있음
- shallow commit을 사용하면 커밋 히스토리를 줄여서 clone 시간을 줄일 수 있음

```sh
git clone --depth=1 <repository_url>
```

## shallow commit 옵션

- --depth=1: 커밋 히스토리를 1개만 가져옴
- --depth=2: 커밋 히스토리를 2개만 가져옴
- --depth=3: 커밋 히스토리를 3개만 가져옴
