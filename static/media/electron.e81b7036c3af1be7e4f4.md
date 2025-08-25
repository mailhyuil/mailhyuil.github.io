# electron

> angular프로젝트를 빌드 -> electron으로 빌드파일을 읽어서 실행

## install

```sh
npm i -D electron
npm i -D electron-builder
```

## package.json

```json
{
  "name": "electron",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "deploy:xos": "electron-builder --mac",
    "deploy:win32": "electron-builder --win --ia32",
    "deploy:win64": "electron-builder --win --x64",
    "deploy:win": "yarn deploy:win32 && yarn deploy:win64"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^28.0.0",
    "electron-builder": "^24.9.1"
  }
}
```
