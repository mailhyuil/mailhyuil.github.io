# mongodb crud

## create

```ts
db.user.insertOne({
  name: "sb",
  password: "1234",
});
```

## read

```ts
db.user.find(); // findAll
db.user.findOne({ name: "sb" }); // findOne

// 객체 속성 조회는 속성의 순서까지 맞춰줘야 하기에 점으로 접근
db.sales.findOne({
  "customer.name": "sangbaek",
});
// 배열의 순서를 맞춰 줘야 하기에 $all로 전부 가지고 있는지 확인
db.inventory.find({
  tags: { $all: ["red", "black"] },
});
db.inventory.find({
  tags: { $in: ["red", "black"] },
});
```

## update

```ts
db.user.updateOne(
  {
    name: "sb",
  },
  {
    $set: {
      password: "4321",
    },
  }
);

/* 필드 제거
$unset:{
  some:''
}
*/
```

## delete

```ts
db.user.deleteOne({
  name: "sb",
});
```
