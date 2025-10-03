# nest pagination offset

## pagination.dto.ts

```ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PageInfoDTO {
  @ApiProperty({ description: "현재 페이지" })
  @IsNumber()
  pageIndex: number;
  @ApiProperty({ description: "페이지 크기" })
  @IsNumber()
  pageSize: number;
  @ApiProperty({ description: "현재 페이지 아이템 개수" })
  @IsNumber()
  itemsOnPageCount: number;
  @ApiProperty({ description: "총 페이지" })
  @IsNumber()
  totalPageCount: number;
  @ApiProperty({ description: "전체 아이템 개수" })
  @IsNumber()
  totalItemsCount: number;
}

export class PaginationResponseDTO<T> {
  @ApiProperty({ type: Object, isArray: true })
  items: T[];
  @ApiProperty({ type: PageInfoDTO })
  @Type(() => PageInfoDTO)
  pageInfo: PageInfoDTO;
}

export class PaginationOptionsDTO {
  @ApiProperty({ description: "페이지 번호" })
  @IsNotEmpty()
  @IsNumber()
  pageIndex: number;
  @ApiProperty({ description: "페이지 크기" })
  @IsNotEmpty()
  @IsNumber()
  pageSize: number;
  @ApiProperty({ description: "정렬 기준" })
  @IsNotEmpty()
  @IsString()
  orderBy: string;
  @ApiProperty({ description: "정렬 방향", enum: ["asc", "desc"] })
  @IsNotEmpty()
  @IsEnum(["asc", "desc"])
  align: "asc" | "desc";
  @ApiPropertyOptional({ description: "검색어" })
  @IsOptional()
  @IsString()
  query?: string;
}
```

## service

```ts
async search(
  options: PaginationOptionsDTO
): Promise<PaginationResponseDTO<ExampleDTO>> {
  const { items, count } = await this.prisma.$transaction(async (tx) => {
    const where: Prisma.ExampleWhereInput = {
        title: {
          contains: options.query,
        },
    };
    const items = await tx.example.findMany({
      where,
      orderBy: {
        [options.orderBy || 'createdAt']: options.align || 'desc',
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
@ApiOkResponse({ type: PaginationResponseDTO<ExampleDTO> })
async search(@Query() query: PaginationOptionsDTO) {
  return await this.jobPostingService.search(query);
}
```
