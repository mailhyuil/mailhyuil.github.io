# webapi navigation

## navigating

```js
navigation.addEventListener("navigate", (navigateEvent) => {
  if (shouldNotIntercept(navigateEvent)) return;

  const url = new URL(navigateEvent.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    navigateEvent.intercept({
      async handler() {
        renderArticlePagePlaceholder();
        const articleContentURL = new URL("/get-article-content", location.href);
        articleContentURL.searchParams.set("path", url.pathname);
        const response = await fetch(articleContentURL, {
          signal: navigateEvent.signal,
        });
        const articleContent = await response.json();
        renderArticlePage(articleContent);
      },
    });
  }
});
```

## scrolling

```js
navigation.addEventListener("navigate", (navigateEvent) => {
  if (shouldNotIntercept(navigateEvent)) return;

  const url = new URL(navigateEvent.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    navigateEvent.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        navigateEvent.scroll();
        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
      },
    });
  }
});
```
