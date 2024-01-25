# prisma middleware soft delete

```js
prisma.$use(async (params, next) => {
  // model이 Post이고
  if (params.model == "Post") {
    // action이 delete이면
    if (params.action == "delete") {
      params.action = "update"; // action을 update로 변경
      params.args["data"] = { deleted: true }; // data에 deleted: true 추가
    }

    // action이 deleteMany이면
    if (params.action == "deleteMany") {
      params.action = "updateMany"; // action을 updateMany로 변경
      if (params.args.data != undefined) {
        params.args.data["deleted"] = true;
      } else {
        params.args["data"] = { deleted: true };
      }
    }
  }
  return next(params);
});
```
