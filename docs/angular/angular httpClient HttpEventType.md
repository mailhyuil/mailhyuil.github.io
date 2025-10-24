# angular httpClient HttpEventType

> angular에서 제공하는 Response 객체

```sh
Sent
# The request was sent out over the wire.

UploadProgress
# An upload progress event was received.
# Note: The FetchBackend doesn't support progress report on uploads.

ResponseHeader
# The response status code and headers were received.

DownloadProgress
# A download progress event was received.

Response
# The full response including the body was received.

User
# A custom event from an interceptor or a backend.
```
