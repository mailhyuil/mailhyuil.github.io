# nodejs mac address

## install

```sh
npm i getmac
```

## usage

```js
import getMAC, { isMAC } from "getmac";

// Fetch the computer's MAC address
console.log(getMAC());

// Fetch the computer's MAC address for a specific interface
console.log(getMAC("eth0"));

// Validate that an address is a MAC address
if (isMAC("e4:ce:8f:5b:a7:fc")) {
  console.log("valid MAC");
} else {
  console.log("invalid MAC");
}
```
