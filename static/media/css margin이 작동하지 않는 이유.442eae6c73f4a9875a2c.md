# css margin이 작동하지 않는 이유

1. 인라인 요소

```
margin: auto;는 블록 또는 플렉스 컨테이너에서만 작동합니다.
해결 방법: 요소를 display: block;, flex, 또는 grid로 변경.

추가로 child의 display가 table-cell일 경우 margin: auto;는 작동하지 않습니다.
```

2. 절대 위치 요소 (position: absolute;)

```
margin: auto;는 정적 또는 상대 위치에서만 완전히 작동합니다.
해결 방법: position을 static이나 relative로 설정하거나, absolute 상태에서 수평 중심 맞춤은 left, right를 활용.
```

3. 너비가 설정되지 않은 블록 요소

```
블록 요소는 너비(width)가 설정되어 있어야 수평 정렬에서 margin-left: auto;와 margin-right: auto;가 작동합니다.
해결 방법: 너비를 지정 (width: 50%; 등).
```

4. 부모 컨테이너가 인라인 요소

```
부모 컨테이너가 인라인 요소(display: inline;)라면 margin: auto;는 작동하지 않습니다.
해결 방법: 부모 컨테이너를 block, flex, 또는 grid로 설정.
```

5. 플로트 요소 (float)

```
요소가 float 속성을 가지면 margin: auto;가 무시됩니다.
해결 방법: float 제거 (float: none;).
```

6. 컨테이너가 정렬 컨텍스트를 제공하지 않는 경우

```
부모 컨테이너가 flex 또는 grid가 아닌 경우, margin: auto;는 수직 정렬에서 작동하지 않을 수 있습니다.
해결 방법: 부모 컨테이너에 display: flex; 또는 grid 추가.
```

7. 수직 방향 마진과 내용 높이

```
margin-top: auto;와 margin-bottom: auto;는 flex 또는 grid 레이아웃에서만 작동.
```
