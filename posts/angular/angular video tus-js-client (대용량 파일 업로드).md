# tus-js-client

> resumable upload protocol를 구현한 라이브러리
>
> > 대용량 파일을 업로드할 때 중간에 끊겼을 때 이어서 업로드할 수 있는 기능을 제공
> >
> > > 서버로부터 받은 upload_url을 이용하여 클라이언트에서 파일을 업로드

## install

```sh
npm i tus-js-client
```

## resumable uploads

```ts
export class UploadService {
  upload(uploadUrl: string, file: File) {
    // Create a new tus upload
    const upload = new tus.Upload(file, {
      uploadUrl,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      chunkSize: 5 * 1024 * 1024, // 5MB
      storeFingerprintForResuming: true,
      removeFingerprintOnSuccess: true,
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onError: function (error) {
        console.log("Failed because: " + error);
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + "%");
      },
      onSuccess: function () {
        console.log("Download %s from %s", upload.file.name, upload.url);
      },
    });

    // Check if there are any previous uploads to continue.
    upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }

      // Start the upload
      upload.start();
    });
  }
}
```
