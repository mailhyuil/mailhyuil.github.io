# nest email @react-email

## install

```sh
npm install @react-email/render -E
```

## template

```js
import * as React from "react";
import { Button } from "@react-email/button";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";

export function MyTemplate(props) {
  return (
    <Html lang="en">
      <Text>Some title</Text>
      <Hr />
      <Button href="https://example.com">Click me</Button>
    </Html>
  );
}

export default MyTemplate;
```

## ts.config.json

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```
