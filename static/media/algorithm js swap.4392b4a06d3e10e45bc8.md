# swap

## 기존 방식

```
let temp = arr[j];
arr[j] = arr[i];
arr[i] = temp;
```

## es6 방식

```
[arr[j], arr[i]] = [arr[i], arr[j]];
```
