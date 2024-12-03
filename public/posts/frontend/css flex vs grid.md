# css flex vs grid

> If we want a FLEXIBLE layout (the layout adapts to fit the content), we use flex.
>
> If we want a more fixed layout (the content adapts to fit the layout), we use grid.

```css
.flex {
  display: flex;
  flex-direction: row; /* default 가로로 정렬됨 */

  flex-wrap
  flex-basis
  flex-grow
  flex-shrink
}

.grid {
  display: grid;
  grid-auto-flow: row; /* default 세로로 정렬됨 */
  grid-template-columns: repeat(3, 1fr); /* 3개의 열을 1fr로 나눔 (1fr 1fr 1fr 과 같음) */
  grid-template-rows
  grid-auto-rows
  grid-auto-columns

  grid-row
  grid-row-start
  grid-row-end
  grid-column
  grid-column-start
  grid-column-end

  grid-template-areas
}
```
