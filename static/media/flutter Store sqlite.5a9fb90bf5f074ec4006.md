# flutter sqlite

> sqlite를 사용하기 위한 패키지
>
> > shared_preferences는 key value 형태로 원시값을 저장하는데 반해 sqlite는 내장 SQL 데이터베이스를 사용한다.

## install

```sh
flutter pub add sqflite
```

## generate database

```dart
Future _openDb() async {
  final databasePath = await getDatabasesPath();
  String path = join(databasePath, 'my_database.db');

  final db = await openDatabase(
    path,
    version: 1,
    onConfigure: (Database db) => {},
    onCreate: (Database db, int version) => {},
    onUpgrade: (Database db, int oldVersion, int newVersion) => {},
  );
}

// db 닫기
// await db.close();
```

## generate table

> sql query로 작성

```dart
Future _onCreate(Database db, int version) async {
  await db.execute('''
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  ''');
}
```

## CRUD

### create

```
Future add(item) async {
  final db = await _openDb();
  item.id = await db.insert(
    'posts',  // table name
    {
      'title': 'new post ...',
      'content': 'this is add method',
      'created_at': '2022-01-01 00:00:00',
    },  // new post row data
    conflictAlgorithm: ConflictAlgorithm.replace,
  );
  return item;
}
```

### read

```dart
await db.rawQuery(
  'SELECT id, name, age FROM dogs',
);
```

### update

```dart
Future update(item) async {
  final db = await _openDb();
  await db.update(
    'posts',  // table name
    {
      'title': 'changed post title ...',
      'content': 'changed post content ...',
    },  // update post row data
    where: 'id = ?',
    whereArgs: [item.id],
  );
  return item;
}
```

### delete

```dart
Future<int> remove(int id) async {
  final db = await _openDb();
  await db.delete(
    'posts', // table name
    where: 'id = ?',
    whereArgs: [id],
  );
  return id;
}
```
