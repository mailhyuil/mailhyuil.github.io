# flutter feature Image Picker

> XFile은 os 독립적인 File
>
> > 안될시에는 flutter clean

## install

```sh
flutter pub add image_picker
```

## android

> 설정 필요 없음

## ios/Runner/info.plist

```xml
<key>NSCameraUsageDescription</key>
<string>Used to demonstrate image picker plugin</string>
<key>NSMicrophoneUsageDescription</key>
<string>Used to capture audio for image picker plugin</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Used to demonstrate image picker plugin</string>
```

## usage

```dart
class CameraScreen extends StatefulWidget {
  const CameraScreen({Key? key}) : super(key: key);

  @override
  State<CameraScreen> createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen> {
  XFile? _image; // 이미지를 담을 변수 선언
  final ImagePicker picker = ImagePicker(); // ImagePicker 초기화

  // 이미지를 가져오는 함수
  Future getImage(ImageSource imageSource) async {
    // pickedFile에 ImagePicker로 가져온 이미지가 담긴다.
    final XFile? pickedFile = await picker.pickImage(source: imageSource);
    if (pickedFile != null) {
      setState(() {
        _image = XFile(pickedFile.path); // 가져온 이미지를 _image에 저장
      });
    }
  }
  @override
  Widget build(BuildContext context){
    return Scaffold(
      body:ElevatedButton(
        onPressed: () {
            getImage(ImageSource.gallery); // 사진첩에서 이미지 가져오기
          // getImage(ImageSource.camera); // 카메라에서 이미지 가져오기
        },
        child: Text('카메라'),
      ),
    );
  }
}
```
