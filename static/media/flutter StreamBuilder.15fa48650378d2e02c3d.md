# flutter StreamBuilder

> Stream를 가지고 간단히 UI 업데이트 에러처리를 하기 위해서 사용
>
> > snapshot.data / snapshot.hasData / snapshot.error / snapshot.connectionState

```dart
StreamBuilder(
    stream: _streamController.stream,
    builder: (BuildContext context, AsyncSnapshot snapshot){
        if(snapshot.hasData){
            return Text(snapshot.data.toString());
        }else{
            return CircularProgressIndicator();
        }
    }
)
```
