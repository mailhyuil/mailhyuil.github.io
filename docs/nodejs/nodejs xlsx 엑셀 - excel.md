# nodejs xlsx 엑셀 - excel

## install

```sh
npm i xlsx
```

## usage

```ts
import { Injectable } from "@angular/core";
import { ClassRegistrationDto, PaymentDto } from "@lcrs/api";
import { PaymentStatusMap, ProductTypeMap } from "@lcrs/common";
import * as XLSX from "xlsx";

@Injectable({
  providedIn: "root",
})
export class ExcelService {
  exportPaymentsAsExcelFile(json: PaymentDto[], excelFileName: string): void {
    console.log(json);
    const newJson = json.map((payment) => ({
      ID: payment.id,
      구분: ProductTypeMap[payment.productType],
      상태: PaymentStatusMap[payment.status],
      상품명: payment.registration?.class?.name,
      구매자: payment.registration?.user?.name,
      결제일: payment.paidAt,
      결제금액: payment.amount,
      "줌링크 클릭 여부": payment.registration?.isLinkClicked ? "O" : "X",
      "결제자 이메일": payment.registration?.user?.email,
    }));
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(newJson);
    const workbook: XLSX.WorkBook = {
      SheetNames: [excelFileName],
      Sheets: { [excelFileName]: worksheet },
    };
    XLSX.writeFile(workbook, `${excelFileName}-${new Date().toISOString()}.xlsx`);
  }
  exportRegistrationsAsExcelFile(json: ClassRegistrationDto[], excelFileName: string): void {
    const newJson = json.map((registration) => ({
      id: registration.id,
      이름: registration.user.name,
      이메일: registration.user.email,
      지역: registration.user.region,
      직종: registration.user.occupation,
      "강의에 바라는 점": registration.message,
    }));
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(newJson);
    const workbook: XLSX.WorkBook = {
      SheetNames: [excelFileName],
      Sheets: { [excelFileName]: worksheet },
    };
    XLSX.writeFile(workbook, `${excelFileName}-${new Date().toISOString()}.xlsx`);
  }
}
```

## xlsx to json

```ts
import * as XLSX from 'xlsx';

async createByExcel(userId: string, file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer', cellDates: true }); // cellDates:true DateTime format

    const sheet = workbook.Sheets['시트1']; // 시트 이름

    const data = XLSX.utils.sheet_to_json(sheet);
}
```
