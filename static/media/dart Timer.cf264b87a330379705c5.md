# flutter Timer

> Timer(Duration()) // setTimeout
>
> > Timer.periodic(Duration(), (timer) => {}) // setInterval

## Timer

```dart
int totalSecond = 1500;
bool isRunning = false;
late Timer timer;

void onTick(Timer timer){
    setState(() {
        totalSecond--;
    });
}

void onStartPressed() {
  timer = Timer.periodic(
    Duration(seconds: 1),
    onTick,
    )
}
```
