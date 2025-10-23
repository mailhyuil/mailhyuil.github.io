# browser event loop

> libuv의 역할을 브라우저의 Web API가 대신한다
>
> > Web API가 처리한 콜백은 전부 macrotask queue에 들어간다

## 단계

```md
1. microtask queue에서 main thread로 작업을 가져와서 처리
2. macrotask queue에서 main thread로 작업을 가져와서 처리 (setTimeout, Network I/O, Event, script...)
3. (macrotask내에 있는 microtask를 queue에 넣음)
4. microtask queue 처리 (promise.then, catch, finally, async/await, MutationObserver, queueMicrotask)
5. 렌더링: layout → paint → composite (requestAnimationFrame callback은 repaint 이전에 실행된다)
6. 반복
```
