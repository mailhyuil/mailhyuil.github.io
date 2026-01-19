# flutter Webview settings

## android/app/src/main/AndroidManifest.xml

```xml
<application
  android:usesCleartextTraffic="true">
</application>
```

## ios/Runner/Info.plist

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```
