# x event sourcing quill-delta

> quill-delta는 최종 값이 아닌 operation을 저장하는 방식으로 event sourcing을 구현한다.
>
> > 이를 통해 최종 값이 아닌 변경된 과정을 저장하고, 이를 replay하여 최종 값을 얻을 수 있다.

```json
[{ "insert": "Hello" }, { "insert": " world" }, { "retain": 5 }, { "insert": "!!!" }]
// Hello world!!!
```
