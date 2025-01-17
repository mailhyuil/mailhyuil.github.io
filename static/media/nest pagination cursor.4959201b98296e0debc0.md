# nest pagination cursor

## pagination.dto.ts

```ts
export class PageInfoDTO {
  @ApiProperty()
  nextCursor: string;
  @ApiProperty()
  hasNext: boolean;
}

export class PaginationDTO<T, Cursor> {
  @ApiProperty()
  items: T[];
  @ApiProperty()
  pageInfo: PageInfoDTO<Cursor>;
}

export class PostCursorDTO {
  createdAt_id: {
    id: string;
    createdAt: Date;
  };
}

export class PaginationOptionDTO<Cursor> {
  @ApiProperty({ description: "커서", required: false, nullable: true })
  @IsOptional()
  cursor?: Cursor;
  @ApiProperty({ description: "페이지 크기", required: false, nullable: true })
  @IsOptional()
  pageSize?: number;
  @ApiProperty({ description: "정렬 기준", required: false, nullable: true })
  @IsOptional()
  orderBy?: string;
  @ApiProperty({ description: "정렬 방향", required: false, nullable: true })
  @IsOptional()
  align?: "asc" | "desc";
  @ApiProperty({ description: "검색어", required: false, nullable: true })
  @IsOptional()
  query?: string;
}
```

## service

```ts
async cursorPagination(option: PaginationOptionDTO<PostCursorDTO>) {
  const { pageSize, query, orderBy, align, cursor } = option;

  const found = await this.prisma.example.findMany({
    where: {
      title: { contains: query },
    },
    orderBy: { [orderBy || 'createdAt']: align || 'desc' },
    take: pageSize + 1,
    cursor,
    skip: cursor ? 1 : 0,
  });

  const items = found.slice(0, pageSize);
  const nextCursor = found.slice(pageSize)[0];

  return {
    items: plainToInstance(ExampleDTO, items),
    pageInfo: {
      nextCursor: nextCursor ? {
        createdAt_id: {
          id: nextCursor.id,
          createdAt: nextCursor.createdAt,
        }
      } : undefined,
      hasNext: nextCursor ? true : false,
    }
  };
}
```
