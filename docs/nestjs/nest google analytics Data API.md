# nest google analytics Data API

[document](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport?hl=ko)

## install

```sh
npm install @google-analytics/data
```

## main.js

```ts
process.env.GOOGLE_APPLICATION_CREDENTIALS = join(__dirname, "assets", "ga.json");

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /** Static Assets */
  app.useStaticAssets(join(__dirname, "assets"));
}
```

## service

```ts
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { Injectable, NotFoundException } from "@nestjs/common";
import { GoogleAnalyticsDTO } from "./google-analytics.dto";
const propertyId = process.env.GA_PROPERTY_ID;

@Injectable()
export class GoogleAnalyticsService {
  client = new BetaAnalyticsDataClient();
  async getReport() {
    const [res] = await this.client.runReport(
      {
        property: `properties/${propertyId}`,
        dateRanges: [
          {
            startDate: "2024-05-01",
            endDate: "today",
          },
        ],
        dimensions: [
          {
            name: "date", // 날짜
          },
        ],
        metrics: [
          {
            name: "totalUsers", // 전체 사용자 수
          },
          {
            name: "newUsers", // 신규 사용자 수
          },
          { name: "screenPageViews" }, // 페이지 조회 수
        ],
      },
      {}
    );

    if (!res.rows) {
      throw new NotFoundException("Google Analytics data을 찾을 수 없습니다.");
    }

    const dimensionValues = res.rows[0]?.dimensionValues;
    // [ { value: '20240508', oneValue: 'value' } ] // date

    const metricValues = res.rows[0]?.metricValues;
    // [
    //   { value: '3', oneValue: 'value' }, // totalUsers
    //   { value: '2', oneValue: 'value' }, // newUsers
    //   { value: '24', oneValue: 'value' } // screenPageViews
    // ]

    const totalUsers = metricValues?.[0]?.value || 0;
    const newUsers = metricValues?.[1]?.value || 0;
    const screenPageViews = metricValues?.[2]?.value || 0;

    return {
      totalUsers,
      newUsers,
      screenPageViews,
    } as GoogleAnalyticsDTO;
  }
}
```
