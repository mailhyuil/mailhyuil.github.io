# typescript typedoc

## install

```sh
npm i -D typedoc

npx typedoc index.ts
```

## error.ts

````ts
export type ERROR = {
  type: "business" | "system"; // client에서 type을 확인하여 user-friendly 에러를 보여줄지 결정
  code: number; // client에서 code를 확인하여 user-friendly 에러 메세지로 맵핑합니다.
  message: string; // 개발자를 위한 에러 메세지입니다.
  data?: any; // 개발자를 위한 추가적인 정보를 담을 수 있습니다.
};

export namespace ERROR {
  /**
   * @code
   * ```txt
   * 1001
   * ```
   * @message
   * ```txt
   * 유저를 찾지 못했습니다.
   * 유저 데이터베이스는 매일 00:00에 레플리카 데이터베이스에서 동기화됩니다.
   * 수동으로 동기화하려면 관리자에게 문의하십시오. tel: 02-1234-5678
   * ```
   */
  export const USER_NOT_FOUND: ERROR = {
    type: "business",
    code: 1001,
    message: `
유저를 찾지 못했습니다.
유저 데이터베이스는 매일 00:00에 레플리카 데이터베이스에서 동기화됩니다.
수동으로 동기화하려면 관리자에게 문의하십시오. tel: 02-1234-5678
`,
  };
  /**
   * @code
   * ```txt
   * 1002
   * ```
   * @message
   * ```txt
   * 유저가 이미 존재합니다.
   * 이메일을 다시 확인하고 가입하려는 이메일이 이미 존재하는지 확인하십시오.
   * ```
   */
  export const USER_ALREADY_EXISTS: ERROR = {
    type: "business",
    code: 1002,
    message: `
유저가 이미 존재합니다.
이메일을 다시 확인하고 가입하려는 이메일이 이미 존재하는지 확인하십시오.
`,
  };
}

export const createError = (error: ERROR, data?: any): ERROR => ({
  ...error,
  data,
});

export function isERROR(error: any): error is ERROR {
  if (typeof error !== "object") {
    return false;
  }
  const keys = Object.keys(error);
  return keys.every(key => key in ["type", "code", "message"]);
}
````
