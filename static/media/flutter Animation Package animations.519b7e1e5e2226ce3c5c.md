# flutter Animation Package animations

## OpenContainer

> list나 grid를 클릭 시 tile이 확장되는 애니메이션

```dart
import 'package:animations/animations.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Home'),
        ),
        body: ListView.separated(
            separatorBuilder: (context, index) => const SizedBox(height: 20),
            itemBuilder: (context, index) {
              return OpenContainer(
                openBuilder: (context, action) => const DetailScreen(),
                closedBuilder: (context, action) => const ListTile(
                  title: Text('Hello World'),
                ),
              );
            },
            itemCount: 20));
  }
}

class DetailScreen extends StatelessWidget {
  const DetailScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Detail'),
      ),
      body: const Center(
        child: Text('Hello World'),
      ),
    );
  }
}
```

## PageTransitionSwitcher & SharedAxisTransition
