# cafe24 setting 세팅

## install

```sh
npm i -D tailwindcss
npm i -D puppeteer
npm i -D chokidar

npx tailwindcss init # tailwindcss intellisense를 위한 설정 파일 생성
```

## .vscode/sftp.json

```json
{
  "name": "depdep Server",
  "protocol": "sftp",
  "remotePath": "/",
  "useTempFile": false,
  "openSsh": true,
  "uploadOnSave": true,
  "ignore": ["**/ec_orderform"],
  "username": "depdep",
  "host": "ecimg-ftp-c01.cafe24img.com",
  "port": 8002,
  "password": "******"
}
```

## layout/basic/layout.html

```html
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      important: true,
    };
  </script>
</html>
```

## watch.js

```js
const child_process = require("child_process");
const chokidarRes = child_process.execSync("npm list chokidar || npm i -D chokidar");
console.log(chokidarRes.toString());
const puppeteerRes = child_process.execSync("npm list puppeteer-core || npm i -D puppeteer-core");
console.log(puppeteerRes.toString());

const chokidar = require("chokidar");
const puppeteer = require("puppeteer-core");

const os = require("os");
const isWindow = os.platform().includes("win");

const executablePath = isWindow
  ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
  : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// 나의 프로필을 사용하고 싶을 시 밑의 설정을 사용하세요
const userDataDir = "C:/Users/sangb/AppData/Local/Google/Chrome/User Data";
const profileDirectory = "Profile 1";

// 스킨 폴더의 이름을 입력하세요
const projectDir = "skin4";
// 최초로 이동할 페이지의 URL을 설정하세요
const startUrl = "https://depdep.cafe24.com/skin-skin4";
// 파일 변경 후 리로드까지의 딜레이(ms)를 설정하세요
const reloadDelay = 1000;

let timeoutId = null;
async function watch() {
  // 브라우저 실행
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath,
    // userDataDir,
    // args: [`--profile-directory=${profileDirectory}`],
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.goto(startUrl);

  // 감시할 디렉토리 및 파일 설정
  const watcher = chokidar.watch(`./${projectDir}`, {
    ignored: /(^|[\/\\])\../, // 숨김 파일 무시
    persistent: true,
  });

  // 파일 저장(변경) 감지 시 로그 출력
  watcher.on("change", path => {
    console.log("👀 파일이 변경되었습니다. 페이지를 새로고침합니다. :)");
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const currentUrl = await page.url().split("?random=")[0];
      await page.goto(`${currentUrl}?random=${new Date().getTime()}`);
    }, reloadDelay);
  });

  console.log("🚀 파일 변경을 감지합니다. ;)");
}

watch();
```

# 마무리!

> tailwindcss를 생성해줍시다.

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./skin4/**/*.{js,html}"],
  important: true,
};
```

## ./input.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ./package.json

```json
{
  "name": "dep",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node watch.js",
    "style": "tailwindcss -i ./input.css -o ./skin4/layout/basic/css/global.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chokidar": "^3.6.0",
    "puppeteer": "^23.1.1",
    "tailwindcss": "^3.4.10"
  }
}
```

## layout/basic/layout.html

> 가장 위에 추가

```html
<!--@css(/layout/basic/css/global.css)-->
```
