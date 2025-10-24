# angular worker web worker

## generate

```sh
ng generate web-worker <name>
```

## name.worker.ts

```ts
/// <reference lib="webworker" />

addEventListener("message", ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
```

## tsconfig.worker.json

```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/worker",
    "lib": ["es2018", "webworker"],
    "types": []
  },
  "include": ["src/**/*.worker.ts"]
}
```

## angular.json

```ts
"webWorkerTsConfig": "tsconfig.worker.json"
```

## usage

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  factorialResult!: number;
  factorialInput: number = 1;

  constructor() {
    this.calculateFactorial();
  }

  calculateFactorial() {
    if (typeof Worker !== "undefined") {
      // Create a new
      const worker = new Worker(new URL("./app.worker", import.meta.url));
      worker.onmessage = ({ data }) => {
        this.factorialResult = data;
      };
      worker.postMessage(this.factorialInput);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
```
