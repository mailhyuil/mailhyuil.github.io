# express trust proxy

```ts
app.set("trust proxy", true); // If true, the client’s IP address is understood as the left-most entry in the X-Forwarded-For header.
app.set("trust proxy", "loopback"); // specify a single subnet
app.set("trust proxy", "loopback, 123.123.123.123"); // specify a subnet and an address
app.set("trust proxy", "loopback, linklocal, uniquelocal"); // specify multiple subnets as CSV
app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]); // specify multiple subnets as an array

app.set("trust proxy", (ip) => {
  if (ip === "127.0.0.1" || ip === "123.123.123.123") return true; // trusted IPs
  else return false;
});
```
