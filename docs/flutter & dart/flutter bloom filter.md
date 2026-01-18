# flutter bloom filter

## install

```sh
dart pub add dart_bloom_filter
```

## usage

```dart
import 'package:dart_bloom_filter/dart_bloom_filter.dart';

final bloom = BloomFilter(
  numberOfItems: 10000,
  falsePositiveRate: 0.01,
);

bloom.add('targetUid');

if (bloom.contains('targetUid')) {
  // reacted 가능성 있음
}

// save to local storage
final bitsBase64 = base64Encode(bloom.bits);

// load from local storage
final bits = base64Decode(bitsBase64);
final bloom = BloomFilter(
  numberOfItems: 10000,
  falsePositiveRate: 0.01,
  bits: bits,
);
```
