# polling pattern

```
function fetchData() {
  // 서버로부터 데이터를 가져오는 비동기 함수 호출
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      // 가져온 데이터 처리
      console.log(data);
    })
    .catch(error => {
      // 오류 처리
      console.error('Error fetching data:', error);
    });
}

// 1초마다 fetchData() 함수 호출
setInterval(fetchData, 1000);
```
