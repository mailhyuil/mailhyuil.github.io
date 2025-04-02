# flutter 앱 이름

## android/app/src/main/AndroidManifest.xml

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">
    <application
        android:label="[앱 이름]"
        android:icon="@mipmap/launcher_icon">
    ...
    </application>
</manifest>
```

## ios/Runner/Info.plist

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    ...
    <key>CFBundleDisplayName</key>
    <string>[앱 이름]</string>
    ...
  </dict>
</plist>
```
