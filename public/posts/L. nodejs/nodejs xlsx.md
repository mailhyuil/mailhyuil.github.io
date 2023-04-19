# xlxs

```ts
const XLSX = require('xlsx');

// 1. 엑셀 파일 읽기
const workbook = XLSX.readFile('path/to/excel/file.xlsx');

// 2. 시트 선택하기
const sheet = workbook.Sheets['Sheet1'];

// 3. 셀 값 가져오기
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
console.log(rows);

// 4. 셀 값 변경하기
sheet['A1'].v = 'New Value';

// 5. 엑셀 파일 쓰기
XLSX.writeFile(workbook, 'path/to/new/excel/file.xlsx');
```

## backend에서 사용

```ts
import * as XLSX from 'xlsx';

async createByExcel(userId: string, file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer', cellDates: true }); // cellDates:true DateTime format

    const sheet = workbook.Sheets['시트1']; // 시트 이름

    const datas = XLSX.utils.sheet_to_json(sheet);

    await this.prismaService.$transaction(async (tx) => {
        const promise = datas.map(async (data) => {
        await tx.webCivil.create({
            data: {
            category: WebCivilCategory['CIVIL'],
            title: data['토목명'],
            orderFrom: data['발주처'],
            completedAt: data['준공일(xxxx-xx-xx)'],
            area: data['면적'] + '',
            auth: { connect: { id: userId } },
            },
        });
        });
        await Promise.all(promise);
    });
}
```
