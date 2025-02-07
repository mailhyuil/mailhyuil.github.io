# aws-sdk s3 if-exists

> head 요청을 통해서 object가 존재하는지 확인

```ts
try {
  await s3.headObject(params).promise();
  const signedUrl = s3.getSignedUrl("getObject", params);
  // Do stuff with signedUrl
} catch (error) {
  if (error.name === "NotFound") {
    // Note with v2 AWS-SDK use error.code, v3 uses error.name
    // Handle no object on cloud here...
  } else {
    // Handle other errors here....
  }
}
```
