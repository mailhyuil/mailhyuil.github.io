# angular 페이지 head 추가

```ts
export class Component {
  ngOnInit() {
    addScript();
  }

  addScript() {
    const script = document.createElement("script"); // creates the script tag
    script.src = ""; // sets the source (insert url in between quotes)
    script.type = "text/javascript"; // set the script type
    script.async = true; // makes script run asynchronously
    script.charset = "utf-8";
    // append to head of document
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
```
