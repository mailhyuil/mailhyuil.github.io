# js pagination offset

> 다양한 정렬 방식을 사용 가능
>
> > 뒤로 갈 수록 느린 쿼리

## front-end

```ts
const option = ref<IPaginationOptionDTO>({
  pageNo: 1,
  pageSize: 10,
  startDate: dayjs().subtract(10, "year").format("YYYY-MM-DD"),
  endDate: dayjs().format("YYYY-MM-DD HH:mm"),
  query: "",
  type: "ALL",
});

const { data: result } = await useApiFetch.get<IPaginationDTO<IPostDTO>>("/post/search", {
  method: "GET",
  query: option.value,
});
```

## controller

```ts
export class SomeController {
  async search(@Query() option: PaginationOption) {
    const [entities, count] = await this.someService.search(option);
    return {
      entities,
      pageInfo: {
        currentPage: option.pageNo,
        itemsCount: entities.length,
        itemsPerPage: option.pageSize,
        totalItems: count,
        totalPages: Math.ceil(count / option.pageSize),
      },
    };
  }
}
```

## service

```ts
export class SomeService {
  async search(option: PaginationOptionDTO): Promise<[Post[], number]> {
    const where: Prisma.PostWhereInput = {
      title: { contains: option.query },
      createdAt: {
        lte: dayjs(option.endDate).subtract(9, "hour").toDate(),
        gte: dayjs(option.startDate).subtract(9, "hour").toDate(),
      },
    };
    const count = await this.prismaService.post.count({ where });
    const entities = await this.prismaService.post.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      take: option.pageSize,
      skip: (option.pageNo - 1) * option.pageSize,
    });
    return [entities, count];
  }
}
```

## html

```html
<script lang="ts" setup>
  import _ from "lodash";
  import { PageInfo } from "~/src/interface/type/page-info.type";

  const props = defineProps<{
    pageInfo: PageInfo;
  }>();

  const emit = defineEmits(["update:modelValue"]);

  const pages = ref<number[]>([]);

  const generateRange = (pageInfo: PageInfo): void => {
    if (pageInfo) {
      if (typeof pageInfo.currentPage === "string") {
        pageInfo.currentPage = parseInt(pageInfo.currentPage as unknown as string, 10);
      }

      if (typeof pageInfo.totalPages === "string") {
        pageInfo.totalPages = parseInt(pageInfo.totalPages as unknown as string, 10);
      }

      if (pageInfo.totalPages <= 5) {
        pages.value = [];
        for (let i = 1; i <= pageInfo.totalPages; i++) {
          pages.value.push(i);
        }
      } else if (pageInfo.currentPage > pageInfo.totalPages - 3) {
        pages.value = [];
        for (let i = pageInfo.totalPages - 4; i <= pageInfo.totalPages; i++) {
          pages.value.push(i);
        }
      } else if (pageInfo.currentPage >= 3) {
        pages.value = [];
        for (let i = pageInfo.currentPage - 2; i <= pageInfo.currentPage + 2; i++) {
          pages.value.push(i);
        }
      } else if (pageInfo.currentPage < 3) {
        pages.value = [1, 2, 3, 4, 5];
      }
    }
  };

  watch(
    props,
    (value) => {
      generateRange(value.pageInfo);
    },
    { deep: true, immediate: true }
  );

  onMounted(() => generateRange(props.pageInfo));
</script>

<template>
  <div class="relative flex gap-1">
    <div
      v-if="pageInfo.currentPage > 1"
      class="flex h-8 w-8 cursor-pointer select-none items-center justify-center gap-2.5 rounded px-2 py-1 text-gray-600 shadow-sm transition-colors hover:bg-gray-300 hover:text-white"
      @click="emit('update:modelValue', 1)">
      <Icon class="h-3 w-3" name="ic:baseline-keyboard-double-arrow-left" />
    </div>
    <div
      v-if="pageInfo.currentPage > 1"
      class="flex h-8 w-8 cursor-pointer select-none items-center justify-center gap-2.5 rounded px-2 py-1 text-gray-600 shadow-sm transition-colors hover:bg-gray-300 hover:text-white"
      @click="emit('update:modelValue', pageInfo.currentPage - 1)">
      <Icon class="h-3 w-3" name="ic:baseline-keyboard-arrow-left" />
    </div>
    <div
      v-for="page in pages"
      class="flex h-8 w-8 cursor-pointer select-none items-center justify-center gap-2.5 rounded px-2 py-1 shadow-sm transition-colors"
      :class="pageInfo.currentPage === page ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-400 hover:text-white'"
      @click="emit('update:modelValue', page)">
      {{ page }}
    </div>
    <div
      v-if="pageInfo.currentPage < pageInfo.totalPages"
      class="flex h-8 w-8 cursor-pointer select-none items-center justify-center gap-2.5 rounded px-2 py-1 text-gray-600 shadow-sm transition-colors hover:bg-gray-300 hover:text-white"
      @click="emit('update:modelValue', pageInfo.currentPage + 1)">
      <Icon class="h-3 w-3" name="ic:baseline-keyboard-arrow-right" />
    </div>
    <div
      v-if="pageInfo.currentPage < pageInfo.totalPages"
      class="flex h-8 w-8 cursor-pointer select-none items-center justify-center gap-2.5 rounded px-2 py-1 text-gray-600 shadow-sm transition-colors hover:bg-gray-300 hover:text-white"
      @click="emit('update:modelValue', pageInfo.totalPages)">
      <Icon class="h-3 w-3" name="ic:baseline-keyboard-double-arrow-right" />
    </div>
  </div>
</template>
```
