# google analytics

[google cloud 콘솔](https://console.cloud.google.com/)
[google analytics 콘솔](https://analytics.google.com/)

> google analytics access client에 ga.json의 client_email 추가
>
> > .env에 GOOGLE_APPLICATION_CREDENTIALS=ga.json 추가

## gtag

> install 'vue-gtag-next'

```ts
import VueGtag, { trackRouter } from 'vue-gtag-next';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-4YD25RKEWM',
    },
  });
  trackRouter(useRouter());
});
```

## google analytics data api

> 서버사이드에서 동작

```ts
import dayjs from 'dayjs';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

@ApiTags('구글 애널리틱스')
@Controller({ version: '1' })
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('users')
  @ApiQuery({
    name: 'startDate',
    example: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
  })
  @ApiQuery({ name: 'endDate', example: dayjs().format('YYYY-MM-DD') })
  async getUserAnalytics(@Query('startDate') startDate: Date, @Query('endDate') endDate: Date) {
    const analyticsDataClient = new BetaAnalyticsDataClient();
    const propertyId = '356586171';
    console.log(analyticsDataClient);
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: dayjs(startDate).format('YYYY-MM-DD'),
          endDate: dayjs(endDate).format('YYYY-MM-DD'),
        },
      ],
      dimensions: [
        {
          name: 'date',
        },
      ],
      metrics: [{ name: 'totalUsers' }, { name: 'newUsers' }],
    });
    if (response) {
      const sum = response.rows.reduce<number>((sum, curr) => sum + +curr.metricValues[0].value, 0);

      const averageVisits = sum / response.rowCount;

      return response.rows.map((row) => {
        return {
          date: dayjs(row.dimensionValues[0].value).toDate(),
          totalUsers: +row.metricValues[0].value,
          newUsers: +row.metricValues[1].value,
          revisitedUsers: +row.metricValues[0].value - +row.metricValues[1].value,
          averageVisits,
        };
      });
    }
  }

  @Get('pageView')
  @ApiQuery({
    name: 'startDate',
    example: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
  })
  @ApiQuery({ name: 'endDate', example: dayjs().format('YYYY-MM-DD') })
  async getPageViewAnalytics(@Query('startDate') startDate: Date, @Query('endDate') endDate: Date) {
    const analyticsDataClient = new BetaAnalyticsDataClient();
    const propertyId = '356586171';
    console.log(analyticsDataClient);
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: dayjs(startDate).format('YYYY-MM-DD'),
          endDate: dayjs(endDate).format('YYYY-MM-DD'),
        },
      ],
      dimensions: [
        {
          name: 'date',
        },
      ],
      metrics: [{ name: 'screenPageViews' }],
    });
    if (response) {
      return response.rows.map((row) => {
        return {
          date: dayjs(row.dimensionValues[0].value).toDate(),
          pageview: +row.metricValues[0].value,
        };
      });
    }
  }
}
```
