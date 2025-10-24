# html input file json to FormData

```js
export function jsonToFormData(jsonObject: any, parentKey?: any, carryFormData?: any) {
  const formData = carryFormData || new FormData();
  let index = 0;

  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      if (jsonObject[key] !== null && jsonObject[key] !== undefined) {
        let propName = parentKey || key;
        if (parentKey && isObject(jsonObject)) {
          propName = parentKey + "[" + key + "]";
        }

        if (parentKey && isArray(jsonObject)) {
          propName = parentKey + "[" + index + "]";
        }
        if (jsonObject[key] instanceof Date) {
          formData.append(propName, jsonObject[key].toISOString());
        } else if (jsonObject[key] instanceof File) {
          formData.append(propName, jsonObject[key]);
        } else if (jsonObject[key][0] instanceof File && isArray(jsonObject[key])) {
          for (let j = 0; j < jsonObject[key].length; j++) {
            formData.append(propName, jsonObject[key][j]);
          }
        } else if (isArray(jsonObject[key]) || isObject(jsonObject[key])) {
          jsonToFormData(jsonObject[key], propName, formData);
        } else if (typeof jsonObject[key] === "boolean") {
          formData.append(propName, jsonObject[key]);
        } else {
          formData.append(propName, jsonObject[key]);
        }
      }
    }
    index++;
  }
  return formData;
}

function isArray(val: any) {
  const toString = {}.toString;
  return toString.call(val) === "[object Array]";
}

function isObject(val: any) {
  return !isArray(val) && typeof val === "object" && !!val;
}
```
