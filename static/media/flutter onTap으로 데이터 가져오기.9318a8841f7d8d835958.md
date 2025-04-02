# flutter onTap으로 데이터 가져오기

> index로 데이터를 가져와야한다.

```dart
List<String> _dataList = [];

///////////////////////////////////////////////////////

void _handleTap(int index) {
    if (index >= 0 && index < _dataList.length) {
      String data = _dataList[index].data;
      print("Clicked Circle: $data");
    }
  }

///////////////////////////////////////////////////////

children: [
    for (int i = 0; i < _dataList.length; i++)
        GestureDetector(
            onTap: () => _handleTap(i),
            child: Text(
                _dataList[i].data,
            ),
        )
],
```
