# nest base provider

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

```ts
providers: [
  {
    provide: SomeService, // Token -> string | symbol | Type | Abstract | Function
    useClass: SomeService,
  },
];

// shorthand
providers: [SomeService];
```

## custom providers

### useValue

> library같은 constant value를 제공할 때 사용
>
> > 인스턴스도 값이다.
> >
> > > new로 생성하면 useValue를 사용해야한다.

### useClass

> @Injectable() 데코레이터가 붙은 클래스를 제공할 때 사용

### useFactory

> provider를 "동적으로" 생성하여 등록할 때 사용

### useExisting

> 기존에 등록된 provider를 사용할 때 사용
>
> > 이 방식은 이미 존재하는 다른 의존성을 사용하도록 지정합니다. (i.e. 이미 등록된 다른 클래스나 토큰을 가리키게 되며, 해당 의존성을 주입받을 수 있습니다.)
