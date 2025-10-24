# html shadow DOM

> dom을 캡슐화
>
> > slot과 같은 기능이 포함
> >
> > > style 태그를 template 내에 넣어서 css를 캡슐화 할 수 있다.

```js
ele.attachShadow({ mode: "open" }); // open 상태면 shadowRoot로 접근 가능
customElements.define("custom-button", CustomButton);
ele.shadowRoot; // shadow DOM에 접근
```

## template / slot

> `template : HTML <template>` 요소는 페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공합니다.
>
> > `slot : HTML <slot>` 요소는 웹 컴포넌트 사용자가 자신만의 마크업으로 채워 별도의 DOM 트리를 생성하고, 컴포넌트와 함께 표현할 수 있는 웹 컴포넌트 내부의 플레이스홀더입니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Shadow DOM 예제</title>
  </head>
  <body>
    <!-- 버튼 컴포넌트 정의 -->
    <template id="custom-button-template">
      <style>
        button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    </template>

    <!-- 페이지에서 버튼 사용 -->
    <h1>Shadow DOM 버튼 예제</h1>
    <div id="app">
      <custom-button>Hello, Shadow DOM!</custom-button>
    </div>

    <script>
      // 컴포넌트 클래스 정의
      class CustomButton extends HTMLElement {
        constructor() {
          super();

          // Shadow DOM 생성
          const shadowRoot = this.attachShadow({ mode: "open" });
          const template = document.querySelector("#custom-button-template");
          shadowRoot.appendChild(template.content.cloneNode(true));
        }
      }

      // 컴포넌트 등록
      customElements.define("custom-button", CustomButton);
    </script>
  </body>
</html>
```

## style

> part attribute를 html 요소에 추가하면 ::part()로 접근 가능
