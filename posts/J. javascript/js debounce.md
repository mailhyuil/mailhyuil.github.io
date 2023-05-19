# js debounce

```ts
searchTimer: NodeJS.Timeout | undefined;

queryChange() {
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.getAdmins(), 300);
}
```
