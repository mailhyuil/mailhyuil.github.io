# flyweight

> 다른 성격을 가진 같은 객체가 여러개 필요 시 객체의 공통 부분만을 뽑아내어 객체를 공유하는 패턴
>
> e.g. 키보드의 자판은 다 같은 자판이지만 글자만 다르다. 이때 자판은 공유하고 글자만 다르게 하는 것이 flyweight 패턴이다.
>
> > There should be only one Singleton instance, whereas a Flyweight class can have multiple instances with different intrinsic states. The Singleton object can be mutable. Flyweight objects are immutable.
> >
> > Singleton 패턴은 하나의 인스턴스만 존재하지만 Flyweight 패턴은 여러 인스턴스를 가질 수 있다. Singleton 객체는 변경 가능하지만 Flyweight 객체는 변경 불가능하다.
> >
> > > 부분 공유를 통해 메모리 낭비를 줄일 수 있는 방식
> > >
> > > > js에서는 기본으로 프로토타입 패턴을 사용하기 때문에 필요없다.

```ts
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const isbnNumbers = new Set();
const bookList = [];

const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availibility,
    isbn,
  };

  bookList.push(book);
  return book;
};

const createBook = (title, author, isbn) => {
  const book = isbnNumbers.has(isbn);
  if (book) {
    return book;
  } else {
    const book = new Book(title, author, isbn);
    isbnNumbers.add(isbn);
    return book;
  }
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", isbnNumbers.size);
```
