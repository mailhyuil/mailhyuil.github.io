# typescript Reflect class metadata 사용하기

> typescript는 정적 타입 언어이기 때문에 런타임에 타입 정보를 사용할 수 없다 (런타임시에는 단순히 자바스크립트이다.)
>
> java같은 언어는 컴파일 시, 런타임 시에도 정적 타입 언어이기 때문에 런타임에도 타입 정보를 사용할 수 있다. (Java의 Reflection API)
>
> > 그렇기 때문에 런타임에 동적으로 메타데이터를 저장하여 사용하는 방식으로 접근해야한다.

## payment.service.ts (namespace 사용)

```ts
import { Injectable } from "@angular/core";

export type Lecture = {
  id: number;
  title: string;
  type: "free" | "paid";
  price: number;
};

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  paymentStrategy: Record<Lecture["type"], PaymentStrategy>;

  constructor() {
    const strategies = PaymentStrategy.getImplementations();
    this.paymentStrategy = strategies.reduce((acc, cur) => {
      const instance = new cur();
      acc[instance.type] = instance;
      return acc;
    }, {} as typeof this.paymentStrategy);
  }

  payment(lecture: Lecture) {
    this.paymentStrategy[lecture.type].payment(lecture);
  }
}

export interface PaymentStrategy {
  readonly type: Lecture["type"];
  payment(lecture: Lecture): void;
}

export namespace PaymentStrategy {
  type Constructor<T> = {
    new (...args: any[]): T;
    readonly prototype: T;
  };

  const implementations: Constructor<PaymentStrategy>[] = [];

  export function getImplementations(): Constructor<PaymentStrategy>[] {
    return implementations;
  }

  export function register<T extends Constructor<PaymentStrategy>>(constructor: T) {
    implementations.push(constructor);
  }
}

@PaymentStrategy.register
export class FreePayment implements PaymentStrategy {
  type: Lecture["type"] = "free";
  constructor() {
    console.log("FreePayment init");
  }
  payment(lecture: Lecture) {
    console.log("FreePayment.payment", lecture);
  }
}

@PaymentStrategy.register
export class PaidPayment implements PaymentStrategy {
  type: Lecture["type"] = "paid";
  constructor() {
    console.log("PaidPayment init");
  }
  payment(lecture: Lecture) {
    console.log("PaidPayment.payment", lecture);
  }
}
```

## payment.service.ts (reflect-metadata 사용)

```ts
import { Injectable } from "@angular/core";
import "reflect-metadata";

export type Lecture = {
  id: number;
  title: string;
  type: "free" | "paid";
  price: number;
};

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  paymentStrategy: Record<Lecture["type"], PaymentStrategy>;

  constructor() {
    const strategies = PaymentStrategy.getStrategies();
    this.paymentStrategy = strategies.reduce((acc, cur) => {
      const instance = new cur();
      const type = Reflect.getMetadata("strategy:payment", cur) as Lecture["type"];
      acc[type] = instance;
      return acc;
    }, {} as typeof this.paymentStrategy);
  }

  payment(lecture: Lecture) {
    this.paymentStrategy[lecture.type].payment(lecture);
  }
}

namespace PaymentStrategy {
  type Constructor<T> = {
    new (...args: any[]): T;
    readonly prototype: T;
  };

  const strategyRegistry: Constructor<PaymentStrategy>[] = [];
  export function getStrategies() {
    return strategyRegistry;
  }

  export function register(type: Lecture["type"]): ClassDecorator {
    return (target: any) => {
      Reflect.defineMetadata("strategy:payment", type, target);
      strategyRegistry.push(target);
    };
  }
}

export interface PaymentStrategy {
  payment(lecture: Lecture): void;
}

@PaymentStrategy.register("free")
export class FreePayment implements PaymentStrategy {
  constructor() {
    console.log("FreePayment init");
  }
  payment(lecture: Lecture) {
    console.log("FreePayment.payment", lecture);
  }
}

@PaymentStrategy.register("paid")
export class PaidPayment implements PaymentStrategy {
  constructor() {
    console.log("PaidPayment init");
  }
  payment(lecture: Lecture) {
    console.log("PaidPayment.payment", lecture);
  }
}
```

## payment-button.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { PaymentService } from "../../pages/home/payment.service";

@Component({
  selector: "app-payment-button",
  templateUrl: "./payment-button.component.html",
  styleUrls: ["./payment-button.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class PaymentButtonComponent {
  @Input() lecture: Lecture;
  paymentService = inject(PaymentService);
  submit() {
    this.paymentService.payment(this.lecture);
  }
}
```
