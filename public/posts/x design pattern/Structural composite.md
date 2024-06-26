# composite

> 여러 개의 객체들로 구성된 복합 객체와 단일 객체를 클라이언트에서 구별없이 다루게 해주는 패턴
>
> > 트리 구조로 이루어진 객체들을 재귀적으로 구조화하여 표현할 수 있음

## 구조

```ts
interface Component {
  operation(): void;
}

class Leaf implements Component {
  operation(): void {
    console.log("Leaf operation");
  }
}

class Composite implements Component {
  children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }

  operation(): void {
    console.log("Composite operation");
    this.children.forEach((child) => {
      child.operation();
    });
  }
}

// 예시 코드
const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);
composite.operation();
```

## usage

```ts
public abstract class ComputerDevice {
  public abstract int getPrice();
  public abstract int getPower();
}
public class Keyboard extends ComputerDevice {
  private int price;
  private int power;
  public Keyboard(int power, int price) {
    this.power = power;
    this.price = price;
  }
  public int getPrice() { return price; }
  public int getPower() { return power; }
}
public class Body { 동일한 구조 }
public class Monitor { 동일한 구조 }
public class Computer extends ComputerDevice {
  // 복수 개의 ComputerDevice 객체를 가리킴
  private List<ComputerDevice> components = new ArrayList<ComputerDevice>();

  // ComputerDevice 객체를 Computer 클래스에 추가
  public addComponent(ComputerDevice component) { components.add(component); }
  // ComputerDevice 객체를 Computer 클래스에서 제거
  public removeComponent(ComputerDevice component) { components.remove(component); }

  // 전체 가격을 포함하는 각 부품의 가격을 합산
  public int getPrice() {
    int price = 0;
    for(ComputerDevice component : components) {
      price += component.getPrice();
    }
    return price;
  }
  // 전체 소비 전력량을 포함하는 각 부품의 소비 전력량을 합산
  public int getPower() {
    int power = 0;
    for(ComputerDevice component : components) {
      price += component.getPower();
    }
    return power;
  }
}
public class Client {
  public static void main(String[] args) {
    // 컴퓨터의 부품으로 Keyboard, Body, Monitor 객체를 생성
    Keyboard keyboard = new Keyboard(5, 2);
    Body body = new Body(100, 70);
    Monitor monitor = new Monitor(20, 30);

    // Computer 객체를 생성하고 addComponent()를 통해 부품 객체들을 설정
    Computer computer = new Computer();
    computer.addComponent(keyboard);
    computer.addComponent(body);
    computer.addComponent(monitor);

    // 컴퓨터의 가격과 전력 소비량을 구함
    int computerPrice = computer.getPrice();
    int computerPower = computer.getPower();
    System.out.println("Computer Price: " + computerPrice + "만원");
    System.out.println("Computer Power: " + computerPower + "W");
  }
}
```
