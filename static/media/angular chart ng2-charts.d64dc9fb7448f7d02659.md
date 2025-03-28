# angular chart ng2-charts

## install

```sh
npm i chart.js
npm i ng2-charts
```

## chart.component.ts

```ts
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ChartConfiguration } from "chart.js";
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from "ng2-charts";
@Component({
  selector: "app-chart-view",
  templateUrl: "./chart-view.component.html",
  styleUrls: ["./chart-view.component.scss"],
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
})
export default class ChartViewComponent implements AfterViewInit {
  @ViewChild("container") container?: ElementRef<HTMLDivElement>;
  @ViewChild(BaseChartDirective) baseChart?: BaseChartDirective;
  chartOptions: ChartConfiguration<"line">["options"] = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  chartData: ChartConfiguration<"line">["data"] = {
    xLabels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        data: [
          { x: 0, y: 10 },
          { x: 0, y: 100 },
          { x: 0, y: 200 },
          { x: 0, y: 150 },
          { x: 0, y: 300 },
          { x: 0, y: 40 },
          { x: 0, y: 400 },
        ],
      },
    ],
  };
  ngAfterViewInit(): void {
    this.initWidth();
  }
  initWidth() {
    if (this.container?.nativeElement) {
      const width = this.container.nativeElement.scrollHeight;
      if (!width) return;
      if (!this.baseChart?.chart) return;
      this.baseChart.chart.resize(width);
    }
  }
}
```

## chart.component.html

> 차트의 width가 줄어들지 않는 문제를 absolute로 해결

```html
<div #container class="relative h-96">
  <canvas class="absolute inset-0 w-full h-full" baseChart type="line" [data]="chartData" [options]="chartOptions"> </canvas>
</div>
```
