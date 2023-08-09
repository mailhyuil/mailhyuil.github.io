# nestjs multer encoding 문제

> multer의 구문분석기(parser)인 busboy의 논리 이슈
>
> > Buffer.from(file.originalname, 'latin1').toString('utf8');
