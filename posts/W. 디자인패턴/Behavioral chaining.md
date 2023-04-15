# chain of responsibility (chaining)

> this를 리턴시켜 체이닝하는 패턴

```ts
class Calc(){
    constructor(){
        this.value = 0;
    }
    plus(num){
        this.value += num;
        return this; // return this
    }
    minus(num){
        this.value -= num;
        return this; // return this
    }
    print(){
    	console.log(this.value);
    }
}
```
