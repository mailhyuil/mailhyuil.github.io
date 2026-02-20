# flutter UI Overlay

- Overlay는 화면 위에 ‘겹쳐서’ 그릴 수 있는 레이어(스택)  
- 일반 위젯 트리처럼 부모-자식 배치만으로는 만들기 어려운 UI(예: 드롭다운, 툴팁, 팝업 메뉴, 다이얼로그, 토스트/스낵바 비슷한 것)를 현재 화면 위에 덮어 그리기 위해 존재
- Overlay는 보통 Navigator가 내부적으로 들고 있는 Overlay를 말한다.
- OverlayEntry: Overlay 안의 “한 장의 레이어”를 나타내는 객체

```txt
MaterialApp
  └─ Navigator
       └─ Overlay   ← 여기!
            ├─ OverlayEntry(현재 라우트 페이지들)
            ├─ OverlayEntry(다이얼로그/팝업)
            └─ OverlayEntry(툴팁/메뉴 등)
```
