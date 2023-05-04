# angular google map

## install

```
npm i @angular/google-maps
```

## import

```ts
@Component({
  standalone: true,
  imports: [GoogleMapsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: "nx-root",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  mapOptions: google.maps.MapOptions = {};
  isLocationLoaded = false;

  constructor() {}

  ngOnInit(): void {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.mapOptions.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.isLocationLoaded = true;
      },
      () => {
        this.isLocationLoaded = true;
      }
    );
  }
}
```

## html

```html
<div class="h-40" *ngIf="isLocationLoaded">
  <google-map width="100%" height="100%" [options]="mapOptions" />
</div>
```
