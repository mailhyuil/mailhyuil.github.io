# html element insertAdjacentHTML

> HTML을 삽입하는 메소드
>
> > innerHTML과 비슷하지만, innerHTML은 기존의 HTML을 덮어쓰지만, insertAdjacentHTML은 기존의 HTML을 덮어쓰지 않고, 추가한다.

```js
ele.insertAdjacentHTML(position, text);
/* position
 * beforebegin: ele 앞에
 * afterbegin: ele 안의 첫번째 자식 앞에
 * beforeend: ele 안의 마지막 자식 뒤에
 * afterend: ele 뒤에
 */
```
