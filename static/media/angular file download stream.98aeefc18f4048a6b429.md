# angular file download stream

> Content-Type: application/octet-stream 으로 보내진다.
>
> > responseType: "blob" 으로 설정
> >
> > > blob 파일을 다운로드 하는 로직 작성 또는 FileReader를 이용하여 string으로 변환

## ts

```ts
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [],
})
export default class HomeComponent {
  constructor(private readonly httpClient: HttpClient) {}
  /// blob을 받아서 다운로드
  downloadStreamFile() {
    this.httpClient.get("http://localhost:3000/api/v1/stream", { responseType: "blob" }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "hello.txt";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  /// blob을 받아서 string으로 변환
  getStreamString() {
    this.httpClient.get("http://localhost:3000/api/v1/stream", { responseType: "blob" }).subscribe((blob) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.stream = event.target.result;
      };
      reader.readAsText(blob); // blob을 string으로 변환 onload 이벤트 발생
    });
  }
}
```
