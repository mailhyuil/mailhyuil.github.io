# nest base module dynamic module register & forRoot & forFeature

> 기능은 같지만 사용하는 방법에 따른 컨벤션일 뿐이다
>
> > 단 global: true로 설정해줘야 forRoot와 forFeature의 동작방식으로 사용할 수 있다.

## register & forRoot & forFeature

> module을 여러번 호출할 지, 그리고 config를 어떻게 사용할지에 따라 컨벤션을 달리한다.
>
> > register : dynamic module을 여러곳에서 호출할꺼고 호출되는 곳마다 config를 다르게 가져감
> >
> > > forRoot : 한번 호출하고 다른 곳에서 config까지 다 공유할 때
> > >
> > > > forFeature : forRoot와 비슷하지만 config를 조금 수정할 때

## registerAsync & forRootAsync & forFeatureAsync

> 위와 같지만 nestjs의 configService를 주입받아 config를 가져올 때
>
> > useFactory를 사용할 때

```ts
@Module({
  imports: [
    ConfigModule.register({ folder: './config' }),
    // or alternatively:
    ConfigModule.registerAsync({
      useFactory: () => {
        return {
          folder: './config',
        }
      },
      inject: [...any extra dependencies...]
    }),
  ],
})
export class AppModule {}
```
