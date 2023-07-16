# flutter FutureBuilder

> Future를 통해 비동기 작업을 수행하고, 수행한 작업의 결과값을 다른 위젯에 전달할 때 사용한다.
>
> > Future만 사용하게 되면 Future가 수행되는 동안 다른 작업을 할 수 없다. FutureBuilder를 사용하면 Future가 수행되는 동안 다른 작업을 할 수 있다.
> >
> > > 서버에서 데이터를 모두 받아오기전 화면을 그려줄수 있게 되는 장점을 가질수가 있다.

```dart
FutureBuilder(
    future: res, // Future<T> 타입
    builder: (BuildContext context, AsyncSnapshot snapshot) {
        if (snapshot.connectionState == ConnectionState.done) {
        if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
        } else {
            return Text('Result: ${snapshot.data}');
        }
        } else {
        return CircularProgressIndicator();
        }
    },
)
```
