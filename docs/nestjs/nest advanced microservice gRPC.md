# nest advanced microservice gRPC

## install

```sh
npm i @nestjs/microservices
npm i @grpc/grpc-js
npm i @grpc/proto-loader
```

## main.ts

```ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: "hero",
    protoPath: join(__dirname, "hero/hero.proto"),
  },
});
```

## nest-cli.json

```json
{
  "compilerOptions": {
    "assets": ["**/*.proto"],
    "watchAssets": true
  }
}
```

## hero/hero.proto

```proto
syntax = "proto3"; // proto 버전

package hero; // 패키지 이름

service HeroesService { // 서비스 이름
  rpc FindOne (HeroById) returns (Hero) {} // 메서드 이름
}

message HeroById { // 메시지 이름
  int32 id = 1;
}

message Hero { // 메시지 이름
  int32 id = 1;
  string name = 2;
}
```

## controller

```ts
@Controller()
export class HeroesController {
  @GrpcMethod("HeroesService", "FindOne") /// proto (서비스 이름, 메서드 이름)
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const items = [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
```

## service

> Client를 모듈에 import하는 방법도 가능

```ts
@Injectable()
export class AppService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: "hero",
      protoPath: join(__dirname, "hero/hero.proto"),
    },
  })
  client: ClientGrpc;

  private heroesService: HeroesService;

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>("HeroesService");
  }

  getHero(): Observable<string> {
    return this.heroesService.findOne({ id: 1 });
  }
}
```
