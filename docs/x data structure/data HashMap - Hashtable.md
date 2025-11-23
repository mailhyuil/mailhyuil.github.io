# data HashMap - Hashtable

1. key와 value를 입력
2. key를 해시해서 무작위 이진 해시값을 리턴하면 그 값을 정수로 변환 (이진 해시 값을 16진수로 변환 -> 16진수 문자열을 정수로 변환)
3. 해시값과 인덱싱 배열의 크기를 모듈러 연산 (e.g. 129389018273 % 10 === 3)
4. 모듈러 연산한 값을 index로 사용

```js
class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // 충돌 처리용 체인
  }
}

class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size).fill(null); // 해시 테이블
    this.size = size;
  }

  // 간단한 해시 함수
  _hash(key) {
    let hash = 0;
    const strKey = key.toString();
    for (let i = 0; i < strKey.length; i++) {
      hash = (hash * 31 + strKey.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    let node = this.buckets[index];

    if (!node) {
      this.buckets[index] = new HashNode(key, value);
      return;
    }

    let prev = null;
    while (node) {
      if (node.key === key) {
        node.value = value; // 기존 키 업데이트
        return;
      }
      prev = node;
      node = node.next;
    }

    prev.next = new HashNode(key, value); // 체이닝으로 삽입
  }

  get(key) {
    const index = this._hash(key);
    let node = this.buckets[index];

    while (node) {
      if (node.key === key) return node.value;
      node = node.next;
    }

    return undefined; // 없는 키
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  delete(key) {
    const index = this._hash(key);
    let node = this.buckets[index];
    let prev = null;

    while (node) {
      if (node.key === key) {
        if (prev) prev.next = node.next;
        else this.buckets[index] = node.next;
        return true;
      }
      prev = node;
      node = node.next;
    }
    return false;
  }
}

const map = new HashMap();
map.set("apple", 100);
map.set("banana", 200);

console.log(map.get("apple")); // 100
console.log(map.has("banana")); // true
map.delete("apple");
console.log(map.get("apple")); // undefined
```
