# nx electron packaging options

## .\apps\<electron-app-name>\src\app\options\maker.options.json

```json
{
  "$schema": "../../../../../node_modules/nx-electron/src/validation/maker.schema.json",
  "productName": "Awesome App",
  "copyright": "Copyright © 2020 Benny Megidish",
  "electronCompile": false,
  "npmRebuild": false,
  "asar": true,
  "win": {
    "target": "appx",
    "icon": "relative\\path\\to\\app_icon.ico",
    "certificateFile": "relative\\path\\to\\certificate.pfx",
    "publisherName": "Benny Megidish"
  },
  "appx": {
    "displayName": "Awesome App",
    "publisherDisplayName": "Benny Megidish",
    "backgroundColor": "transparent"
  }
}
```
