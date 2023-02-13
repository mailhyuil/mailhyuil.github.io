# prisma date

> prisma는 UTC만 지원한다. (@createdAt @updatedAt을 사용하면 UTC 시간으로 생성)
>
> > 한국시간인 KTC는 9시간을 더해줘야한다. (dayjs 사용)
> >
> > > UTC + 9 hours === KTC
