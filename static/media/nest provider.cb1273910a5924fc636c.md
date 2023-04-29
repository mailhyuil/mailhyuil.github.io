# nest provider

> service, repository, factory... 비즈니스 로직을 처리하는 클래스
>
> > @Injectable() 데코레이터 사용

## provider class

```ts
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }
  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id === +id);
    return true;
  }
  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
```

## module에 등록

> providers:[]에 넣어주기

### basic

```
providers:[SomeService]
```

### custom providers

> useValue, useClass, useFactory, useExisting

```ts
providers: [
  {
    provide: SomeService, // Token -> string | symbol | Type | Abstract | Function
    useClass: {},
  },
];
```
