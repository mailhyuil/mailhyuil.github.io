# prisma data type

> postgresql 기준

## Bytes type

> default = bytea

```prisma
bytea	@db.ByteA // 1바이트
```

## Int type

> default = integer

```prisma
integer | int, int4	    @db.Integer  // 4바이트
smallint | int2	        @db.SmallInt // 2바이트
smallserial | serial2	@db.SmallInt @default(autoincrement()) // 2바이트
serial | serial4	    @db.Int @default(autoincrement()) // 4바이트
oid	                    @db.Oid // 4바이트
```

## BigInt type

> default = bigint

```prisma
bigint | int8	        @db.BigInt // 8바이트
bigserial | serial8	    @db.BigInt @default(autoincrement()) // 8바이트
```

## Float type

> default = double precision

```prisma
double precision	@db.DoublePrecision // 8바이트
real	            @db.Real // 4바이트
```

## Decimal type

> default = decimal(65,30)

```prisma
decimal | numeric	@db.Decimal(p, s)† // 4바이트
money	            @db.Money // 8바이트
```

## String type

> default = text
>
> > char는 n만큼의 고정된 길이를 갖는다.
> >
> > > varchar는 최대 n만큼의 가변길이를 갖는다.
> > >
> > > > text와 varchar는 동일하지만 text는 길이 제한이 없다.

```prisma
bit(x)	    @db.Bit(x)
char(x)	    @db.Char(x)
varbit	    @db.VarBit
varchar(x)	@db.VarChar(x)
text	    @db.Text
citext	    @db.Citext	Only available if Citext extension is enabled.
xml	        @db.Xml
inet	    @db.Inet
uuid	    @db.Uuid
```

## Boolean type

> default = boolean

```prisma
boolean	@db.Boolean
```

## DateTime type

> default = timestamp(3)

```prisma
timestamp(x)	@db.Timestamp(x)
timestamptz(x)	@db.Timestamptz(x)
date	        @db.Date
time(x)      	@db.Time(x)
timetz(x)	    @db.Timetz(x)
```

## Json type

> default = jsonb

```prisma
json	@db.Json
jsonb	@db.JsonB
```
