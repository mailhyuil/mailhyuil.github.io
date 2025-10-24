# nodejs module fs watch chokidar

> fs.watch의 문제점을 해결한 라이브러리

```ts
const childProcess = require("child_process");
childProcess.execSync("npm list chokidar || npm i chokidar");
childProcess.execSync("npm list puppeteer || npm i puppeteer");

const chokidar = require("chokidar");
const puppeteer = require("puppeteer");

async function watch() {
  // 브라우저 실행
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    // 내 컴퓨터의 크롬 실행을 원할 시
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });

  const page = await browser.newPage();

  // 감시할 디렉토리 및 파일 설정
  const watcher = chokidar.watch(".", {
    ignored: /(^|[\/\\])\../, // 숨김 파일 무시
    persistent: true,
  });

  // 파일 저장(변경) 감지 시 로그 출력
  watcher.on("change", (path) => {
    page.reload().then(() => {
      console.log("파일 변경이 감지되었습니다. 브라우저를 새로고침합니다. :)");
    });
  });

  console.log("파일 변경을 감지합니다. ;)");
}

watch();
```
