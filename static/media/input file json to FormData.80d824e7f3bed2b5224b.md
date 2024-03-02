# input file json to FormData

```js
export function jsonToFormData(jsonObject, parentKey, carryFormData) {
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

        if (jsonObject[key] instanceof File) {
          formData.append(propName, jsonObject[key]);
        } else if (jsonObject[key] instanceof FileList) {
          for (let j = 0; j < jsonObject[key].length; j++) {
            formData.append(propName + "[" + j + "]", jsonObject[key].item(j));
          }
        } else if (isArray(jsonObject[key]) || isObject(jsonObject[key])) {
          jsonToFormData(jsonObject[key], propName, formData);
        } else if (typeof jsonObject[key] === "boolean") {
          formData.append(propName, +jsonObject[key] ? "1" : "0");
        } else {
          formData.append(propName, jsonObject[key]);
        }
      }
    }
    index++;
  }
  return formData;
}

function isArray(val) {
  const toString = {}.toString;
  return toString.call(val) === "[object Array]";
}

function isObject(val) {
  return !isArray(val) && typeof val === "object" && !!val;
}
```
