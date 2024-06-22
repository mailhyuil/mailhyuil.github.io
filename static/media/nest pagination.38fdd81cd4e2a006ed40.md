# nest pagination

## pagination.dto.ts

```ts
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class PageInfoDTO {
  @ApiProperty({ description: "현재 페이지" })
  pageIndex: number;
  @ApiProperty({ description: "페이지 크기" })
  pageSize: number;
  @ApiProperty({ description: "현재 페이지 아이템 개수" })
  pageItemsCount: number;
  @ApiProperty({ description: "총 페이지" })
  totalPageCount: number;
  @ApiProperty({ description: "전체 아이템 개수" })
  totalItemsCount: number;
}

export class PaginationDTO<T> {
  @ApiProperty({ type: Object, isArray: true })
  items: T[];
  @ApiProperty({ type: PageInfoDTO })
  pageInfo: PageInfoDTO;
}

export class PaginationOptionDTO {
  @ApiProperty({ description: "페이지 번호", required: false, nullable: true })
  @IsOptional()
  pageIndex?: number;
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
async search(
  options: PaginationOptionDTO
): Promise<PaginationDTO<ExampleDTO>> {
  const { items, count } = await this.prisma.$transaction(async (tx) => {
    const where: Prisma.ExampleWhereInput = {
        title: {
          contains: options.query,
        },
    };
    const items = await tx.example.findMany({
      where,
      orderBy: {
        [options.orderBy]: options.align,
      },
      skip: (options.pageIndex - 1) * options.pageSize,
      take: options.pageSize,
    });

    const count = await tx.example.count({ where });

    const itemsWithRowNumber = items.map((item, index) => {
      const rowNumber = count - options.pageSize * (options.pageIndex - 1) - index;
      return { ...item, rowNumber };
    });

    return { items: itemsWithRowNumber, count };
  });

  return {
    items: plainToInstance(ExampleDTO, items),
    pageInfo: {
      pageIndex: options.pageIndex,
      pageSize: options.pageSize,
      totalPageCount: Math.ceil(count / options.pageSize),
      itemsOnPageCount: items.length,
      totalItemsCount: count,
    },
  };
}
```

## controller

```ts
@Get('search')
@ApiOperation({
  summary: 'JobPosting 검색',
})
@ApiOkResponse({ type: PaginationDTO<ExampleDTO> })
async search(@Query() query: PaginationOptionDTO) {
  return await this.jobPostingService.search(query);
}
```
