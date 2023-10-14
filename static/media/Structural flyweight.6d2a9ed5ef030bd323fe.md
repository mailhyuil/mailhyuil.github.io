# flyweight

> 생성하는 객체에 중복이 있을 시 있던걸 반환
>
> > 없을 시 새로 생성
> >
> > > 쓸데없이 new 연산자를 통한 메모리 낭비를 줄일 수 있는 방식
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

addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100);
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50);
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10);
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567', false, 20);

console.log('Total amount of copies: ', bookList.length);
console.log('Total amount of books: ', isbnNumbers.size);
```
