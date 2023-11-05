# nest SOLID Principle

> 항상 '변화'를 염두에 두고 코드를 작성하라
>
> > 같은 이유로 변화하는 것끼리 묶고, 다른 이유로 변화하는 것끼리는 분리하라.

## SRP - Single Responsibility Principle

> 서비스에 대한 책임은 하나여야 한다.
>
> > "같은 수준의 서비스"를 서로의 서비스에 내에서 주입하지 말아라
> > order 과 email 은 같은 저수준의 서비스
> > 만약 shopping-mall이라는 고수준의 서비스가 있다면 이 서비스 내에서는 order, email 서비스를 주입할 수 있다.
> >
> > > 어떤 클래스를 변경해야 하는 이유는 오직 하나뿐 이어야 한다. 같은 이유로 변화하는 것끼리 묶고, 다른 이유로 변화하는 것끼리는 분리하라.

```ts
@Controller("/orders")
export class OrdersController {
  constructor(private ordersService: OrdersService, private emailsService: EmailsService) {}

  @Post()
  public async submitOrder(@Body() submitOrderDto: SubmitOrderDto) {
    const createdOrder = await this.ordersService.submitOrder({
      products: { connect: [{ productId: submitOrderDto.productId }] },
    });

    //✅ Good
    //Services should allow us to share code between modules easily and effortlessly
    //Each Service method should follow a SRP
    await this.emailsService.sendOrderEmail(createdOrder.orderId);

    return {
      message: "Thanks for you order!",
      orderNumber: createdOrder.orderId,
    };
  }
}
```

## OCP - Open Closed Principle

> 확장에는 열려있고, 변경에는 닫혀있어야 한다.
>
> > 새로운 기능이 추가되면, 기존의 코드를 변경하지 않고 확장할 수 있어야 한다.

```ts
@Injectable()
export class PaymentService {
  //❌ Bad
  //Everytime we add a new payment method we need to modify the code
  //새로운 결제 방법이 추가될 때마다 코드를 수정해야 한다.
  public badProcessPayment(order: Order, paymentMethod: string): void {
    if (paymentMethod === "creditCard") {
      // Process credit card payment
    } else if (paymentMethod === "paypal") {
      // Process PayPal payment
    } else if (paymentMethod === "bitcoin") {
      // Process Bitcoin payment
    } else {
      // Handle other payment methods
    }
  }

  //--------------------------------------------------------------------------

  //✅ Good
  // 새로운 결제 방법이 추가되면 PaymentGateway를 수정하면 된다.
  private paymentGateways: Record<string, PaymentGateway> = {};

  public registerPaymentGateway(paymentMethod: PAYMENT_METHOD, gateway: PaymentGateway) {
    this.paymentGateways[paymentMethod] = gateway;
  }

  public async processPayment(order: Order, paymentMethod: PAYMENT_METHOD) {
    const gateway = this.paymentGateways[paymentMethod];
    if (gateway) {
      await gateway.processPayment(order);
    } else {
      throw new Error("Unsupported payment method!");
    }
  }
}

// ✅ Good
//Extending the payment service without modifying existing code (Open-Closed Principle)
export abstract class PaymentGateway {
  abstract processPayment(order: Order): void;
}

export class CreditCardGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process credit card payment
  }
}

export class PayPalGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process PayPal payment
  }
}

export class BitcoinGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process Bitcoin payment
  }
}

//Maybe you want to add support for a new payment Method 🤔 👇
export class ApplePayGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process ApplePay payment
  }
}

export enum PAYMENT_METHOD {
  CREDIT_CARD = "credit-card",
  PAYPAL = "paypal",
  Bitcoin = "bitcoin",
}
```

## LSP - Liskov Substitution Principle

> 부모 객체와 이를 상속한 자식 객체가 있을 때,
> 부모의 메소드는 자식 객체가 완전히 대체할 수 있다는 원칙
>
> > abstract class를 extends하지말고 implements하라

```ts
//✅ Good
//Either class or an interface
//Class is better since it's a javascript object
export abstract class PricingService {
  //This allows us to have different implementations
  //Thus substitute implementations very easily
  public calculatePrice(basePrice: number) {
    return basePrice;
  }
}

/* Regular Pricing */
@Injectable()
//Bad ❌
//extends
export class BadRegularPricingStrategy extends PricingService {
  //You can just rely on the base implementation from PricingService
  //Without being forced to have a specific implementation for RegularPricing
}

@Injectable()
//Good ✅
//implements
export class RegularPricingStrategy implements PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the regular price
    return basePrice;
  }

  public fetchInternalPricing(): void {}
}

/* Sale Pricing */
@Injectable()
//Bad ❌
//extends
export class BadSalePricingStrategy extends PricingService {
  //You can just rely on the base implementation from PricingService
  //Without being forced to have a specific implementation for SalePricing
}

@Injectable()
//Good ✅
//implements
export class SalePricingStrategy implements PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the sale price
    return basePrice * 0.8; // 20% discount
  }
}

/* Orders Controller */
/* Dependency Injection */
@Controller("orders")
export class OrdersController {
  constructor(
    @Inject(SalePricingStrategy)
    private pricingService: PricingService,
    private ordersService: OrdersService
  ) {}

  @Get("/pricing/:id")
  public async calculateOrderPrice(@Param("id") id: string): Promise<{ price: number }> {
    const order = await this.ordersService.findOne(parseInt(id));
    return { price: this.pricingService.calculatePrice(order.totalPrice) };
  }
}
```

## ISP - Interface Segregation Principle

> 클라이언트는 자신이 사용하지 않는 메소드에 의존하지 않아야 한다.
>
> > interface를 용도에 맞게 나눠라

```ts
//Bad ❌
//Not seperating the concerns
export interface Notification {
  to?: string; //< for email
  subject?: string; //< for email
  body?: string; //< for email & push
  phoneNumber?: string; //< for sms
  message?: string; //< for sms
  userId?: string; //< for push
  title?: string; //< for push
}

//Good ✅
export interface EmailNotification {
  to: string;
  subject: string;
  body: string;
}

export interface SMSNotification {
  phoneNumber: string;
  message: string;
}

export interface PushNotification {
  userId: string;
  title: string;
  body: string;
}

import { EmailNotification, SMSNotification, PushNotification, Notification } from "./notification.interfaces";
```

```ts
//AMAZON Simple Email Service Instance
const ses: any = {};

@Injectable()
export class NotificationService {
  //Bad ❌
  //interface(DTO)가 사용하지도 않는 property를 가지고 있다.
  async badSendEmail(notification: Notification) {
    // Define the parameters for the email
    const params = {
      Source: "no-reply@coderone.io",
      Destination: {
        ToAddresses: [notification.to],
      },
      Message: {
        Subject: {
          Data: notification.subject,
        },
        Body: {
          Text: {
            Data: notification.body,
          },
        },
      },
    };

    await ses.sendEmail(params);
  }
  //Bad ❌
  badSendSMS(notification: Notification) {
    // Logic to send SMS notification
  }
  //Bad ❌
  badSendPushNotification(notification: Notification) {
    // Logic to send push notification
  }

  //--------------------------------------------------------------------------

  //Good ✅
  sendEmail(notification: EmailNotification) {
    // Logic to send email notification
  }
  //Good ✅
  sendSMS(notification: SMSNotification): void {
    // Logic to send SMS notification
  }
  //Good ✅
  sendPushNotification(notification: PushNotification): void {
    // Logic to send push notification
  }
}

/* Controllers */
@Controller("email")
export class EmailController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendEmail(notification: EmailNotification): void {
    this.notificationService.sendEmail(notification);
  }
}

@Controller("push-notification")
export class PushNotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendPushNotification(notification: PushNotification): void {
    this.notificationService.sendPushNotification(notification);
  }
}

@Controller("sms")
export class SMSController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendSMS(notification: SMSNotification): void {
    this.notificationService.sendSMS(notification);
  }
}
```

## DIP - Dependency Inversion Principle

> 의존성 역전 원칙
>
> > "고수준 모듈"은 "저수준 모듈"의 구현에 의존해서는 안된다.
> > "저수준 모듈"이 "고수준 모듈"에서 정의한 추상 타입에 의존해야 한다.
> >
> > > 저수준 모듈을 위한 메소드를 따로 만들지 말아라!

```ts
const s3: any = {};
const cloudStorage: any = {};

@Injectable()
//Bad ❌
export class StorageService {
  public findAmazonS3File(filename: string) {
    //Custom S3 Implementation here
    // Set up S3 getObject parameters
    const params = {
      Bucket: "STORAGE",
      Key: process.env.AWS_key,
    };

    // Fetch the file from S3
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error(err);
        throw new Error("Error fetching the file from S3");
      } else {
        return data.Body; // Return the file data in the response
      }
    });
  }

  public async findGoogleCloudStorageFile(filename: string) {
    //Google Cloud Storage specific implementation
    //To adhere to DIP
    // Get the file reference
    const bucket = cloudStorage.bucket("STORAGE");
    const file = bucket.file(filename);

    // Download the file
    const [fileContent] = await file.download();

    return fileContent;
  }
}

//-------------------------------------------------------------------------------------

//Good ✅
//Use an abstract class to provide a common structure for different implementations
//You have to implement each Storage Service using this
export abstract class StorageFetcher {
  abstract findFile(filename: string): any;
}

import { StorageFetcher } from "./storage.service";
//Your Google Cloud Storage instance
const cloudStorage: any = {};

//Good ✅
//This implements the Google Cloud Storage fetching API
@Injectable()
export class StorageCSFetcherService implements StorageFetcher {
  public async findFile(filename: string) {
    //Google Cloud Storage specific implementation
    //To adhere to DIP
    // Get the file reference
    const bucket = cloudStorage.bucket("STORAGE");
    const file = bucket.file(filename);

    // Download the file
    const [fileContent] = await file.download();

    return fileContent;
  }
}

import { StorageFetcher } from "./storage.service";
//Your S3 Store instance
const s3: any = {};

//Good ✅
//This implements S3 API for the StorageFetcher
//Allows us to adhere to DIP
@Injectable()
export class StorageS3FetcherService implements StorageFetcher {
  public findFile(filename: string) {
    //Custom S3 Implementation here
    // Set up S3 getObject parameters
    const params = {
      Bucket: "STORAGE",
      Key: process.env.AWS_key,
    };

    // Fetch the file from S3
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error(err);
        throw new Error("Error fetching the file from S3");
      } else {
        return data.Body; // Return the file data in the response
      }
    });
  }
}

/* Controllers */

import { Controller, Get, Param } from "@nestjs/common";
import { StorageFetcher, StorageService } from "./storage.service";
import { StorageS3FetcherService } from "./storage-s3-fetcher.service";
import { StorageCSFetcherService } from "./storage-cs-fetcher.service";

@Controller("/storage")
export class StorageController {
  constructor(private storageService: StorageFetcher) {}

  //Bad ❌
  @Get("/file/:filename")
  public badGetFile(@Param("filename") filename: string) {
    return this.storageService.findAmazonS3File(filename);
  }

  //Good ✅
  @Get("/file/:filename")
  public getFile(@Param("filename") filename: string) {
    return this.storageService.findFile(filename);
  }
}

/* Module */
@Module({
  controllers: [StorageController],
  providers: [
    { provide: StorageFetcher, useClass: StorageCSFetcherService },
    // StorageS3FetcherService,
  ],
})
export class StorageModule {}
```
