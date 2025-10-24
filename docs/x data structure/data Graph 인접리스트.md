# data Graph 인접리스트

> 인접 리스트 방식은 각 노드마다 인접한 노드의 연결 정보를 리스트(List)에 저장합니다.
>
> > 노드 간의 연결 정보를 찾는데 걸리는 시간 느림
> >
> > > > 각 Node 안에 배열(엣지(to))에 참조 노드를 저장

```ts
class City {
  name: string;
  roads: City[];
  constructor(name: string) {
    this.name = name;
    this.roads = [];
  }
}
class Country {
  cities: City[];
  constructor() {
    this.cities = [];
  }
  addCity(name: string) {
    this.cities.push(new City(name));
  }
  addRoad(from: string, to: string) {
    const fromCity = this.cities.find((city) => city.name === from);
    const toCity = this.cities.find((city) => city.name === to);
    if (fromCity && toCity) {
      fromCity.roads.push(toCity);
    }
  }
  display() {
    console.log(this.cities);
  }
}
const country = new Country();
country.addCity("Seoul");
country.addCity("Busan");

country.addRoad("Seoul", "Busan");

country.display();
```
