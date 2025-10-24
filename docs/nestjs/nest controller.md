# nest controller

> Get(), Post(), Delete(), Patch(), Put() 데코레이터를 사용하여 매핑
>
> > @Param("id:) "/:id", @Query, @Body 데코레이터를 사용하여 값 바인딩
> >
> > > @Render() 렌더링
> > >
> > > > @Redirect() 리다이렉트

## Get("something")은 Get(":id")보다 위에 있어야한다! // 'something'을 id로 알아먹어버린다!

```js
@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("search") // 쿼리스트링으로 받는 핸들러메소드가 id param을 받는 메소드보다 위에 있어야한다
    searchOne(@Query("year") searchingYear: string) {

        return `we are searching for a movie made after ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string): Movie {

        const movie = this.moviesService.getOne(movieId)
        if (!movie) {
            throw new NotFoundException("the movie doesn't exist")
        } else {
            return movie
        }

    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return this.moviesService.create(movieData)
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string) {
        return this.moviesService.deleteOne(movieId)
    }

    // @Put("/:id") 모든 리소스를 업데이트
    @Patch("/:id")
    update(@Param("id") movieId: string, @Body() updateData) {
        return `this will update a movie with the id : ${movieId}`
    }
}

```
