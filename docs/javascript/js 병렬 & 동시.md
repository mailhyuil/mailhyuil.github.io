# js 병렬 & 동시

- 자바스크립트는 싱글스레드이기 때문에 병렬처리가 불가능, 하지만 v8 엔진의 event loop를 통해 비동기 처리를 통해 동시성을 지원한다.
- 비동기 함수는 async & await (또는 promise chaining)을 활용하여 처리하지 않는 이상 동시 처리가 된다.
- javascript는 싱글 스레드지만 javascript가 돌아가는 환경 (e.g. 브라우저, nodejs는 멀티 스레드기 때문에 동시 처리가 가능하다.)
- 만약 병렬 처리를 원한다면 nodejs 프로세스를 하나 더 생성하여 멀티프로세싱을 구현해야한다. (nodejs cluster 모듈)
