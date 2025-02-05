# angular google-maps

## install

```sh
npm i @angular/google-maps
```

## google-maps.component.ts

```ts
import { Component, computed, input, viewChild } from "@angular/core";
import { GoogleMap, MapMarker } from "@angular/google-maps";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"],
  standalone: true,
  imports: [GoogleMap, MapMarker],
})
export class GoogleMapsComponent {
  mapMarker = viewChild<MapMarker>(MapMarker);
  position = input<google.maps.LatLngLiteral>({ lat: 0, lng: 0 });
  googleMapOptions = input<google.maps.MapOptions>({
    center: { lat: 0, lng: 0 },
    zoom: 17,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    rotateControl: false,
    scrollwheel: false,
  });

  computedGoogleMapOptions = computed(() => {
    const position = this.position();
    const options = this.googleMapOptions();
    return {
      ...options,
      center: {
        lat: position.lat - 0.0015,
        lng: position.lng,
      },
    };
  });

  markerOptions = input<google.maps.MarkerOptions>({});
  width = input<number | string | null>(null);
  height = input<number | string | null>(null);
}
```

## google-maps.component.html

```html
<google-map [options]="computedGoogleMapOptions()" [width]="width()" [height]="height()">
  <map-marker [position]="position()" [options]="markerOptions()"></map-marker>
</google-map>
```
