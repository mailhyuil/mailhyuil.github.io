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

  public barChartData: ChartData = {
    datasets: [
      {
        data: [
          { x: 10, y: 20 },
          { x: 20, y: 10 },
        ],
      },
    ],
  };
}
```

## html

```html
<canvas baseChart [data]="barChartData" [options]="barChartOptions" [type]="'bar'"> </canvas>
```
