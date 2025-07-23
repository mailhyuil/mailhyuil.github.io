# nest pagination cursor

## cursor.dto.ts

```ts
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

export class CursorResponseDTO<T> {
  @ApiProperty({ type: Object, isArray: true })
  @IsArray()
  items: T[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  nextCursor?: string;
}

export class CursorOptionsDTO {
  @ApiProperty({ description: "페이지 크기", required: false, nullable: true })
  @IsOptional()
  @IsNumber()
  pageSize?: number;
  @ApiProperty({ description: "정렬 기준", required: false, nullable: true })
  @IsOptional()
  @IsString()
  orderBy?: string;
  @ApiProperty({ description: "정렬 방향", required: false, nullable: true })
  @IsOptional()
  @IsEnum(["asc", "desc"])
  align?: "asc" | "desc";
  @ApiProperty({ description: "검색어", required: false, nullable: true })
  @IsOptional()
  @IsString()
  query?: string;
  @ApiProperty({ description: "커서", required: false, nullable: true })
  @IsOptional()
  @IsString()
  cursor?: string;
}
```

## controller

```ts
  @Get("feed")
  @ApiOperation({
    summary: "News 피드",
  })
  @ApiOkResponse({ type: CursorResponseDTO<NewsDTO> })
  async feed(@Query() query: NewsCursorOptionsDTO) {
    return await this.newsService.feed(query);
  }
```

## service

```ts
  async feed(options: NewsCursorOptionsDTO) {
    const { pageSize, query, orderBy, align, cursor } = options;

    const where: Prisma.NewsWhereInput = {
      title: { contains: query },
      type: options.type === "ALL" ? undefined : options.type,
    };

    const found = await this.prisma.news.findMany({
      where,
      orderBy: { [orderBy || "createdAt"]: align || "desc" },
      take: pageSize,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = found[pageSize - 1]?.id;

    return plainToInstance(CursorResponseDTO<NewsDTO>, {
      items: found,
      nextCursor,
    });
  }
```

## angular

```ts
import { NewsDto } from "@/api";
import NormalButtonComponent from "@/client/app/components/normal-button/normal-button.component";
import SearchComponent from "@/client/app/components/search/search.component";
import { SegmentGroupComponent } from "@/client/app/components/segment/segment-group/segment-group.component";
import { SegmentItemComponent } from "@/client/app/components/segment/segment-item/segment-item.component";
import { NewsApiService } from "@/client/app/services/news-api.service";
import { NewsTypeMap } from "@/common";
import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NewsControllerFeed$Params } from "api/src/lib/fn/news/news-controller-feed";
import { switchMap } from "rxjs";
@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NormalButtonComponent,
    SegmentGroupComponent,
    SegmentItemComponent,
    FormsModule,
    SearchComponent,
  ],
})
export default class NewsListComponent {
  newsApi = inject(NewsApiService);

  options = signal<NewsControllerFeed$Params>({
    align: "desc",
    orderBy: "createdAt",
    pageSize: 4,
    query: "",
    type: "ALL",
    cursor: undefined,
  });

  data = signal<NewsDto[]>([]);
  cursor = signal<string | undefined>(undefined);

  NewsTypeMap = NewsTypeMap;

  constructor() {
    toObservable(this.options)
      .pipe(
        switchMap(options =>
          this.newsApi.feed({
            ...options,
          }),
        ),
      )
      .subscribe(res => {
        this.data.update(prev => [...prev, ...(res.items as NewsDto[])]);
        this.cursor.set(res.nextCursor);
      });
  }

  optionsChange(options: Partial<NewsControllerFeed$Params>) {
    this.options.update(prev => {
      if (options.type) {
        this.data.set([]);
        prev.cursor = undefined;
      }
      return {
        ...prev,
        ...options,
      };
    });
  }
}
```

```html
@if (cursor()) {
<button
  (click)="
            optionsChange({
              cursor: cursor()
            })
          "
>
  더보기
</button>
}
```
