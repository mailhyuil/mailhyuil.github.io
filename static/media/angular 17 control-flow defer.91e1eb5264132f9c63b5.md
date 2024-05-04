# angular control flow defer

> 큰 컴포넌트를 특정 컨디션을 만족할 때 로드하도록 하는 기능

```ts
@defer {
  <comment-list />
}

@defer (on viewport) {
  <comment-list />
} @placeholder {
  <!-- A placeholder content to show until the comments load -->
  <img src="comments-placeholder.png">
}

@defer (on viewport) {
  <comment-list/>
} @loading {
  Loading…
} @error {
  Loading failed :(
} @placeholder {
  <img src="comments-placeholder.png">
}

@defer (on viewport; prefetch on idle) {
  <comment-list />
}
```

## defer on

```sh
on idle # lazily load the block when the browser is not doing any heavy lifting
on immediate # start lazily loading automatically, without blocking the browser
on timer(<time>) # delay loading with a timer
on viewport and on viewport(<ref>) # viewport also allows to specify a reference for an anchor element. When the anchor element is visible, Angular will lazily load the component and render it
on interaction and on interaction(<ref>) # enables you to initiate lazy loading when the user interacts with a particular element
on hover and on hover(<ref>) # triggers lazy loading when the user hovers an element
when <expr> # enables you to specify your own condition via an expression that returns a promise
```
