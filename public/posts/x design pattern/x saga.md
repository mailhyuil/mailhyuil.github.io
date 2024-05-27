# saga

> sharding과 같은 아키텍쳐에서는 트랜잭션 처리가 어렵다
>
> > 이를 해결하기 위해 분산 트랜잭션을 사용하는데 saga는 이 분산 트랜잭션을 구현하는 패턴 중 하나이다

```ts
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const userServiceUrl = "http://localhost:3001/users";
const orderServiceUrl = "http://localhost:3002/orders";

// 유저를 생성하고 주문을 생성하는 SAGA
app.post("/buy", async (req, res) => {
  const { userId, orderId } = req.body;

  try {
    // Step 1: Create User
    await axios.post(userServiceUrl, { userId });

    try {
      // Step 2: Create Order
      await axios.post(orderServiceUrl, { orderId });
    } catch (orderError) {
      // Compensate Step 1: Delete User if order creation fails
      await axios.delete(`${userServiceUrl}/${userId}`);
      return res.status(500).send({ message: "Order creation failed, user creation compensated" });
    }

    res.send({ message: "SAGA completed successfully" });
  } catch (userError) {
    res.status(500).send({ message: "User creation failed" });
  }
});

app.listen(3000, () => console.log("SAGA Coordinator listening on port 3000"));
```
