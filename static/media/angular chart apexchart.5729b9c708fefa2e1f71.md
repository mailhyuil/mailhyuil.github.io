# angular apexchart

> props는 constructor에서는 들어가지 않는다.

## ts

```ts
import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartType,
  NgApexchartsModule,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  responsive: ApexResponsive[];
};

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  @Input() xaxis: ApexXAxis | undefined;
  @Input() yaxis: ApexYAxis | undefined;
  @Input() label: string | undefined;
  @Input() chart: ApexChart | undefined;
  @Input() labels: ApexDataLabels | undefined;
  @Input() chartOptions!: Partial<ChartOptions>;

  @Input() type: ChartType = "line";
  @Input() categories: ApexXAxis["categories"] = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  @Input() series?: ApexAxisChartSeries;
  isLoading: boolean = true;

  @HostBinding("class") class = "block w-full h-full";

  constructor() {}

  ngOnInit() {
    if (!this.chartOptions) {
      this.chartOptions = {
        series: this.series,
        responsive: [{ breakpoint: undefined, options: {} }],
        chart: {
          type: this.type,
          fontFamily: "Pretendard Variable",
          width: "100%",
          height: "100%",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: 2,
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        labels: ["labels"],
        xaxis: {
          categories: this.categories,
        },
        yaxis: {
          opposite: false,
        },
        legend: {
          show: false,
        },
      };
    }
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
```

## html

```html
<apx-chart
  class="block w-full h-full"
  [series]="series ?? chartOptions.series!"
  [chart]="chart ?? chartOptions.chart!"
  [xaxis]="xaxis ?? chartOptions.xaxis!"
  [dataLabels]="labels ?? chartOptions.dataLabels!"
  [stroke]="chartOptions.stroke!"
  [yaxis]="yaxis ?? chartOptions.yaxis!"
  [responsive]="chartOptions.responsive!"
  [legend]="chartOptions.legend ?? {}"
  *ngIf="!isLoading"></apx-chart>
```
