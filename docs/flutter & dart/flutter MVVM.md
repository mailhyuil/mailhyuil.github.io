# flutter MVVM

## MODEL

> User라는 MODEL을 정의
>
> > MODEL에는 Service도 포함될 수 있음
> >
> > > angular의 DTO

```dart
class MemoModel {
  String content;
  DateTime createdAt;

  MemoModel({
    required this.content,
    required this.createdAt,
  });

  MemoModel.fromJson(Map<String, dynamic> json)
      : content = json['content'],
        createdAt = DateTime.parse(json['createdAt']);

  Map<String, dynamic> toJson() => {
        'content': content,
        'createdAt': createdAt.toIso8601String(),
      };
}
```

## VIEW MODEL

> MODEL과 Service를 사용하여 VIEW에 보여질 데이터
>
> > MODEL과 VIEW의 중간다리 역할
> >
> > > angular의 TS파일
> > >
> > > > Notifier

```dart
import 'dart:async';
import 'dart:convert';

import 'package:flutter_my_test/features/memo/models/memo_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

class MemoViewModel extends AsyncNotifier<List<MemoModel>> {
  late SharedPreferences sp;
  @override
  FutureOr<List<MemoModel>> build() async {
    sp = await SharedPreferences.getInstance();
    return await getMemos();
  }

  Future<List<MemoModel>> getMemos() async {
    List<String> memoStrings = sp.getStringList('memos') ?? [];
    if (memoStrings.isNotEmpty) {
      final List<Map<String, dynamic>> decodedJsonList = memoStrings
          .map((e) => jsonDecode(e) as Map<String, dynamic>)
          .toList();
      final List<MemoModel> memos =
          decodedJsonList.map((e) => MemoModel.fromJson(e)).toList();
      print(memos);
      return memos;
    } else {
      return [];
    }
  }

  Future<void> createMemo(MemoModel memo) async {
    List<String> memoStrings = sp.getStringList('memos') ?? [];
    memoStrings.add(json.encode(memo));
    sp.setStringList('memos', memoStrings);

    state = AsyncValue.data(await getMemos());
  }
}

final memoViewModelProvider =
    AsyncNotifierProvider<MemoViewModel, List<MemoModel>>(
  () => MemoViewModel(),
);
```

## VIEW

> angular의 template.html
>
> > ConsumerWidget

```dart
import 'package:flutter/material.dart';
import 'package:flutter_my_test/features/memo/models/memo_model.dart';
import 'package:flutter_my_test/features/memo/view_models/memo_view_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class MemoScreen extends ConsumerStatefulWidget {
  const MemoScreen({Key? key}) : super(key: key);
  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _MemoScreenState();
}

class _MemoScreenState extends ConsumerState<MemoScreen> {
  final TextEditingController _memoController = TextEditingController();
  void _openUpdateMemo(BuildContext context, WidgetRef ref) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Update Memo'),
          content: Form(
            child: TextFormField(
              controller: _memoController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Memo',
              ),
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () async {
                print(_memoController.text);
                final memo = MemoModel(
                  content: _memoController.text,
                  createdAt: DateTime.now(),
                );
                await ref.read(memoViewModelProvider.notifier).createMemo(memo);
                setState(() {});
                Navigator.pop(context);
              },
              child: const Text('Update'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return ref.watch(memoViewModelProvider).when(
          error: (error, stackTrace) => Center(
            child: Text(error.toString()),
          ),
          loading: () {
            print('loading!!');
            return const Center(
              child: CircularProgressIndicator.adaptive(),
            );
          },
          data: (data) {
            print(data);
            print('data!!');
            return Scaffold(
              appBar: AppBar(
                title: const Text('Memo'),
              ),
              floatingActionButton: FloatingActionButton(
                onPressed: () {
                  _openUpdateMemo(context, ref);
                },
                child: const Icon(Icons.add),
              ),
              body: Center(
                child: ListView.separated(
                  separatorBuilder: (context, index) {
                    return const Divider(
                      height: 1,
                      color: Colors.black,
                    );
                  },
                  itemCount: data.length,
                  itemBuilder: (context, index) {
                    print("build!!");
                    return SizedBox(
                      height: 50,
                      child: Center(
                        child: Text(
                          data[index].content,
                          style: const TextStyle(
                            fontSize: 20,
                            color: Colors.black,
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
            );
          },
        );
  }
}
```
