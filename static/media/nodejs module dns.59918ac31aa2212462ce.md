# nodejs module dns

> 지정된 도메인의 dns 정보를 알아올 수 있는 모듈입니다.
>
> > 지정된 도메인의 ip 주소 등의 정보를 파악할 수 있습니다.
> >
> > > lookup : 지정된 도메인의 정보를 가져온다.

```js
const dns = require("node:dns");

dns.lookup("example.org", (err, address, family) => {
  console.log("address: %j family: IPv%s", address, family);
});
// address: "93.184.216.34" family: IPv4
```
