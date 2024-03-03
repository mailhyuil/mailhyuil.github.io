# lodash object merge

```js
import merge from "lodash/merge";

const contact1 = {
  name: "Sherlock Holmes",
  phone: ["555-123-456"],
};

const contact2 = {
  address: "221B Baker Street",
  phone: ["555-654-321"],
};

const newContact = merge(contact1, contact2);

console.log(newContact);
// {
//   name: 'Sherlock Holmes',
//   address: '221B Baker Street',
//   phone: ['555-654-321'] // 뒤에 있는 값으로 덮어씌워짐
// }
```
