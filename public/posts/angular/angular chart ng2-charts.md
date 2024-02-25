# angular chart ng2-charts

## install

```sh
npm i chart.js
npm i ng2-charts
```

## ts

```ts
import { NgChartsModule } from "ng2-charts";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [NgChartsModule],
})
export class AppComponent {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];
  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
  ];
}
```

## html

```html
<canvas baseChart [data]="barChartData" [options]="barChartOptions" [type]="'bar'"> </canvas>
```
