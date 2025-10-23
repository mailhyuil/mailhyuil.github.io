# flutter CustomScrollView

> Scaffold 대신에 사용!
>
> > 자식으로 Slivers를 가진다.

```dart
CustomScrollView(
    slivers:[
        SliverAppBar(
            title: Text('SliverAppBar'),
            expandedHeight: 200,
            flexibleSpace: FlexibleSpaceBar(
                background: Image.network(
                    'https://picsum.photos/250?image=9',
                    fit: BoxFit.cover,
                ),
            ),
        ),
        SliverList(
            delegate: SliverChildBuilderDelegate(
                (context, index) => ListTile(
                    title: Text('Item #$index'),
                ),
                childCount: 1000,
            ),
        ),
        SliverGrid(
            gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 200.0,
                mainAxisSpacing: 10.0,
                crossAxisSpacing: 10.0,
                childAspectRatio: 4.0,
            ),
            delegate: SliverChildBuilderDelegate(
                (BuildContext context, int index) {
                    return Container(
                        alignment: Alignment.center,
                        color: Colors.teal[100 * (index % 9)],
                        child: Text('Grid Item $index'),
                    );
                },
                childCount: 20,
            ),
        )
    ]
)
```
