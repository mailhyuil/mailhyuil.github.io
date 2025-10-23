# js object native object vs host object

## native object

> 자바스크립트 언어 규약(ECMAScript)으로 정의되어진 객체들
>
> > 애플리케이션 전역의 공통 기능을 제공한다. 네이티브 객체는 애플리케이션의 환경과 관계없이 언제나 사용할 수 있다.
> >
> > > e.g. built-in object

```js
Object
String
Number
Boolean
Array
Function
Date
RegExp
Error
...
```

## host object

> 실행 환경에서 제공하는 객체 (e.g. OS, Web browser..)
>
> > window, XmlHttpRequest, HTMLElement 등의 DOM 노드 객체와 같이 호스트 환경에 정의된 객체.

```js
window
global
document
location
history
XMLHttpRequest
HTMLElement
...
```
