# lodash object mergeWith

```js
import mergeWith from "lodash/mergeWith";
import isArray from "lodash/isArray";
import concat from "lodash/concat";

// array일 경우 concat하는 함수
function customizer(src, dst) {
  if (isArray(src)) {
    return concat(src, dst);
  }
}

const contact1 = {
  name: "Sherlock Holmes",
  phone: ["555-123-456"],
};

const contact2 = {
  address: "221B Baker Street",
  phone: ["555-654-321"],
};

const newContact = mergeWith(customizer, contact1, contact2);

console.log(newContact);
// {
//   name: 'Sherlock Holmes',
//   address: '221B Baker Street',
//   phone: ['555-123-456', '555-654-321']
// }
```
