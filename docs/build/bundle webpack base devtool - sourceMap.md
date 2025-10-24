# webpack devtool (sourceMap)

> 미니파이, 어글리파이된 번들링 파일은 디버깅하기 어렵다 sourceMap은 번들링 파일과 원본 파일을 매핑해서 디버깅을 도와준다
>
> > 디버깅 과정 향상을 위해 source mapping 스타일을 선택합니다. 이 값은 빌드 및 리빌드 속도에 큰 영향을 미칠 수 있습니다.

```js
module.exports = {
  // production 용
  devtool: false, // 소스맵을 내보내지 않습니다.
  devtool: "source-map", // 전체 소스맵을 별도의 파일로 내보냅니다. 번들에 참조 주석을 추가하여 개발 도구에서 찾을 수 있도록 합니다. 일반 사용자가 소스맵 파일에 접근 할 수 없도록 서버를 구성해야합니다!

  // development 용
  devtool: "eval", // 빌드 속도가 빠르고 디버깅이 가능,
  devtool: "eval-cheap-source-map", // 빌드 속도가 빠르고 디버깅이 가능,

  // special case
  devtool: "inline-source-map", // 소스맵을 DataUrl로 번들에 추가합니다.
};
```
