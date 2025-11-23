# data graph 인접행렬

- 인접 행렬 방식은 이차원 배열로 각 노드 간의 연결 여부를 저장합니다.
- 노드 간 연결 정보를 찾는데 걸리는 시간 빠름
- "연결 관계만" 나타내는 Matrix 테이블이 사용된다.
- 접근 가능 여부만 알 수 있다. 참조를 저장하지 않는다 (인접리스트를 사용해라)
- Matrix내에서 연결여부는 true false 혹은 0 1로 표현 (객체를 넣는 것도 가능)
- a에서 노드 b로 이동하는 경로가 있는지 확인하려면 matrix[a][b] 값을 확인

```ts
class City {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Country {
  cities: City[];
  roadMatrix: boolean[][];

  constructor() {
    this.cities = [];
    this.roadMatrix = [];
  }

  addCity(name: string) {
    const city = new City(name);
    this.cities.push(city);

    const cityCount = this.cities.length;

    for (let i = 0; i < cityCount - 1; i++) {
      this.roadMatrix[i].push(false);
    }

    const newRow = Array(cityCount).fill(false);
    this.roadMatrix.push(newRow);
  }

  addRoad(from: string, to: string) {
    const fromIndex = this.cities.findIndex(city => city.name === from);
    const toIndex = this.cities.findIndex(city => city.name === to);
    if (fromIndex >= 0 && toIndex >= 0) {
      this.roadMatrix[fromIndex][toIndex] = true;
      this.roadMatrix[toIndex][fromIndex] = true;
    }
  }

  display() {
    console.log(this.roadMatrix);
  }
}

const country = new Country();
country.addCity("Seoul");
country.addCity("Busan");

country.addRoad("Seoul", "Busan");

country.display();
```
