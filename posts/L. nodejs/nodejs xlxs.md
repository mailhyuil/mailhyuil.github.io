# xlxs

```
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
