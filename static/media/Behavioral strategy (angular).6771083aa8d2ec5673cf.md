# angular strategy pattern

## payment.service.ts

```ts
import { Injectable, inject } from "@angular/core";
import { Lecture } from "./home.component";
export type Lecture = {
  id: number;
  title: string;
  type: "free" | "premium";
  amount: number;
};

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  paymentStrategy: Record<Lecture["type"], PaymentStrategy> = {
    free: inject(FreePayment),
    premium: inject(PremiumPayment),
  };
  payment(lecture: Lecture) {
    this.paymentStrategy[lecture.type].payment(lecture);
  }
}

export interface PaymentStrategy {
  payment(lecture: Lecture): void;
}

@Injectable({
  providedIn: "root",
})
export class PremiumPayment implements PaymentStrategy {
  constructor() {
    console.log("Premium payment initialized");
  }
  payment(lecture: Lecture) {
    console.log("Premium payment", lecture);
  }
}

@Injectable({
  providedIn: "root",
})
export class FreePayment implements PaymentStrategy {
  constructor() {
    console.log("Free payment initialized");
  }
  payment(lecture: Lecture) {
    console.log("Free payment", lecture);
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
