# data Tree Trie

> 단어 검색, 자동 완성, 문자열 정렬, 철자 검사, 사전 등에 사용

```ts
// TrieNode 클래스 정의
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

// Trie 클래스 정의
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // 단어를 Trie에 삽입하는 함수
  insert(word) {
    let currentNode = this.root;

    // 단어의 각 문자에 대해 TrieNode를 생성하거나 가져옴
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }

      currentNode = currentNode.children.get(char);
    }

    // 단어의 마지막 문자를 가리키는 TrieNode에 마지막임을 표시
    currentNode.isEndOfWord = true;
  }

  // Trie에서 단어를 검색하는 함수
  search(word) {
    let currentNode = this.root;

    // 단어의 각 문자를 따라가며 TrieNode를 탐색
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    // 마지막 문자의 TrieNode가 단어의 끝임을 나타내는지 확인
    return currentNode.isEndOfWord;
  }

  // Trie에서 주어진 접두사로 시작하는 단어를 찾는 함수
  startsWith(prefix) {
    let currentNode = this.root;

    // 접두사의 각 문자를 따라가며 TrieNode를 탐색
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    // 주어진 접두사로 시작하는 단어가 있는지 확인
    return true;
  }
}

// Trie 사용 예제
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple")); // true
console.log(trie.search("grape")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("ora")); // true
console.log(trie.startsWith("grape")); // false
```
