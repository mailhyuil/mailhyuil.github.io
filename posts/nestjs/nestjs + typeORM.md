# nestjs + typeORM

## /src/orm.config.ts
```ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: false, // true는 테이블 자동 생성
    ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    MIGRATIONS_RUN: false,
  };

  return {
    name: 'default',
    type: 'mysql',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    logging: true,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export { ormConfig };
```

## /src/app.module.ts
```ts
....
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';

@Module({
    imports: [
    	TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    ]
....
```

## /.env
> yarn add @nestjs/config (.env 파일을 읽을 수 있다)
```ts
NODE_ENV=local
DB_HOST=localhost
DB_PORT=3306
DB_USER=slider
DB_PASS=1234
DB_NAME=slider
```

## /src/app.module.ts
```ts
import { ConfigModule } from '@nestjs/config';
...

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ....]
...
```

## entity
### user.entity.ts
```ts
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {UserAuthority} from "./user-authority.entity";

@Entity('user', { schema: 'slider' })
export class User {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'kakao_id', length: 45 })
    kakaoId: string;

    @Column('varchar', { name: 'email', length: 100 })
    email: string;

    @Column('varchar', { name: 'name', nullable: true, length: 45 })
    name: string | null;

    @Column('varchar', { name: 'gender', length: 10 })
    gender: string;

    @Column('varchar', { name: 'phone', length: 20 })
    phone: string;

    @Column('varchar', { name: 'birth', length: 10 })
    birth: string;

    @Column('varchar', { name: 'profile_image', nullable: true, length: 200 })
    profileImage: string | null;

    @Column('timestamp', {
        name: 'created_at',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date | null;

    @Column('timestamp', {
        name: 'updated_at',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date | null;

    @OneToMany(() => UserAuthority, (userAuthority) => userAuthority.user, {
        eager: true,
    })
    authorities?: any[];
}
```
### user-authority.entity.ts
```ts
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_authority')
export class UserAuthority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar',{name: 'authority_name'})
  authorityName: string;

  @ManyToOne(() => User, (user) => user.authorities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
```