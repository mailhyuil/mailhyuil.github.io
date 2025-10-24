# testing angular HttpClient

```ts
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

describe("HttpClient testing", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("can test HttpClient.get", () => {
    const testData: Data = { name: "Test Data" };

    httpClient.get<Data>(testUrl).subscribe((data) => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne("/data");

    expect(req.request.method).toEqual("GET");

    req.flush(testData); // subscribe에 data를 넣어줌

    httpTestingController.verify();
  });
});
```
