# vue.js
## install
```
npm init vue@latest
```
## text
> {{}} 로 사용
```
<span>Message: {{ msg }}</span>
```
## html
> v-html Built-in Directives 사용
```
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
## bind
```
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div> <!-- shorthand -->
```