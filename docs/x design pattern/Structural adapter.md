# Structural adapter

> 클래스를 호환시켜주고 재사용하기 위해 사용
>
> > 기존 코드를 현재의 인터페이스에 맞게 변환시켜줌

```ts
interface Printer {
  pushText(text);
  print();
}

// Printer 인터페이스를 구현한 기존의 프린터
class Printer implements Printer {
  textArr = [];
  pushText(text) {
    this.textArr.push(text);
  }
  print() {
    this.textArr.map(text => console.log(text));
  }
}

// 다른 메소드를 가진 새로운 프린터의 등장!
class HashTagPrinter {
  textArr = [];
  pushText(text) {
    this.textArr.push(text);
  }
  //!! 이 부분이 기존의 Printer와 호환되지 않는다.
  printWithHash() {
    return this.textArr.map(text => `#${text}`).join(" ");
  }
}

// Adapter를 만들어서 호환이 될 수 있도록 한다.!
class HashTagPrinterAdapter {
  constructor(hashTagPrinter) {
    this.printer = hashTagPrinter;
  }

  pushText(text) {
    this.printer.pushText(text);
  }

  print() {
    return this.printer.printWithHash();
  }
}

const printer = new HashTagPrinterAdapter(new HashTagPrinter());

printer.pushText("Hello");
printer.pushText("Design");
printer.pushText("Pattern");

console.log(printer.print()); // #Hello #Design #Pattern
```
