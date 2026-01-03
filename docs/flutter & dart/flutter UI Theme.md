# flutter UI Theme

## ThemeData

```dart
theme: ThemeData(
    textTheme: TextTheme(
        titleLarge: TextStyle(color: Colors.white),
    ),
    primaryColor: Colors.blue,
    accentColor: Colors.blueAccent,
    scaffoldBackgroundColor: Colors.white,
    splashColor: Colors.transparent,
    appBarTheme: AppBarTheme(
        color: Colors.white,
        elevation: 0,
        iconTheme: IconThemeData(color: Colors.black),
        textTheme: TextTheme(
            headline6: TextStyle(
                color: Colors.black,
                fontSize: 18,
                fontWeight: FontWeight.bold,
            ),
        ),
    ),
    bottomNavigationBarTheme: BottomNavigationBarThemeData(
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.grey,
    ),
    inputDecorationTheme: InputDecorationTheme(
        border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
        ),
    ),
)
```

```dart
Theme.of(context).primaryColor
```
