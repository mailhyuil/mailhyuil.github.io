# vue vue-table

매우 복잡한 테이블/그리드 로직(정렬, 필터링 등)을 처리하기 위한 헤드리스(스타일은 없고 로직만 있는) 라이브러리입니다.

## install

```sh
pnpm i @tanstack/vue-table
```

## usage

```vue
<script setup lang="ts">
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  useVueTable,
  type ColumnPinningState,
} from "@tanstack/vue-table";
import { ref } from "vue";

// 1. 데이터 정의
const data = ref([
  { id: 1, name: "유상백", role: "Developer", status: "Active", email: "yusangbaek@example.com" },
  { id: 2, name: "테스트", role: "Developer", status: "Active", email: "test@example.com" },
  { id: 3, name: "테스트2", role: "Developer", status: "Active", email: "test2@example.com" },
  { id: 4, name: "테스트3", role: "Developer", status: "Active", email: "test3@example.com" },
  { id: 5, name: "가로스크롤 확인용1", role: "Designer", status: "Inactive", email: "scroll1@example.com" },
  { id: 6, name: "가로스크롤 확인용2", role: "Manager", status: "Active", email: "scroll2@example.com" },
]);

// 2. 컬럼 설정
const columnHelper = createColumnHelper<(typeof data.value)[0]>();

const columns = [
  columnHelper.accessor("id", { header: "ID", size: 50 }),
  columnHelper.accessor("name", { header: "이름", size: 150 }),
  columnHelper.accessor("role", { header: "역할", size: 150 }),
  columnHelper.accessor("status", { header: "상태", size: 100 }),
  columnHelper.accessor("email", { header: "이메일", size: 250 }), // 길이를 줘서 스크롤 유도
];

// 3. 고정(Pinning) 상태 관리
const columnPinning = ref<ColumnPinningState>({
  left: ["id", "name"], // 왼쪽에 고정할 컬럼 ID들
  right: [],
});

// 4. 테이블 인스턴스 생성
const table = useVueTable({
  data: data.value,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    get columnPinning() {
      return columnPinning.value;
    },
  },
  onColumnPinningChange: updater => {
    if (typeof updater === "function") {
      columnPinning.value = updater(columnPinning.value);
    } else {
      columnPinning.value = updater;
    }
  },
  columnResizeMode: "onChange",
});

// 5. Pinning 스타일 계산 함수 (핵심)
const getCommonPinningStyles = (column: any): any => {
  const isPinned = column.getIsPinned(); // 'left', 'right' 또는 false
  const isLastLeftPinnedColumn = isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn = isPinned === "right" && column.getIsFirstColumn("right");

  return {
    position: isPinned ? "sticky" : "relative",
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    zIndex: isPinned ? 1 : 0,
    // 배경색이 없으면 스크롤 시 뒤의 글자가 비쳐 보입니다.
    backgroundColor: isPinned ? "white" : "transparent",
    // 고정된 컬럼 끝에 그림자를 주어 경계 구분 (선택사항)
    boxShadow: isLastLeftPinnedColumn
      ? "inset -8px 0 8px -8px rgba(0,0,0,0.15)"
      : isFirstRightPinnedColumn
      ? "inset 8px 0 8px -8px rgba(0,0,0,0.15)"
      : undefined,
  };
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">TanStack Table Column Pinning</h2>

    <div class="overflow-x-auto border rounded-lg shadow">
      <table class="min-w-full border-collapse" :style="{ width: table.getTotalSize() + 'px' }">
        <thead class="bg-gray-50">
          <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :style="getCommonPinningStyles(header.column)"
              class="border-b border-r p-3 text-left text-sm font-semibold text-gray-700"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table.getRowModel().rows" :key="row.id" class="hover:bg-gray-50">
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              :style="getCommonPinningStyles(cell.column)"
              class="border-b border-r p-3 text-sm text-gray-600"
            >
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-4 text-sm text-gray-500">* ID와 이름 컬럼이 가로 스크롤 시 왼쪽에 고정됩니다.</div>
  </div>
</template>

<style scoped>
/* Table Layout을 고정하여 컬럼 사이즈(size)가 잘 먹히도록 설정 */
table {
  table-layout: fixed;
}

/* 스크롤 시 Sticky 엘리먼트가 상단 헤더보다 위에 오지 않도록 z-index 조절 */
thead {
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
```
