# httpClient HttpRequest upload progress

> HttpRequest 객체를 사용하여 upload progress를 구현할 수 있다.

```ts
@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export default class UploadComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  upload(files: FileList) {
    const file = files[0];
    const req = new HttpRequest("POST", "/upload/file", file, {
      reportProgress: true,
    });

    this.httpClient.request(req).pipe(
      map((event) => this.getEventMessage(event, file)),
      tap((message) => this.showProgress(message)),
      last() // return last (completed) message to caller
    );
  }

  /** Return distinct message for sent, upload progress, & response events */
  getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  showProgress(message: string) {
    console.log(message);
  }
}
```
