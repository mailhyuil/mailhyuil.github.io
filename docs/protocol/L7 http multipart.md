# L7 http multipart

> smtp 프로토콜과 유사하게 MIME을 사용하여 여러 종류의 데이터를 하나의 메시지에 담아 전송할 수 있다.
>
> > Content-Type에 multipart/form-data를 명시한다.
> >
> > > boundary를 사용하여 각 데이터를 구분한다.

```sh
HTTP/1.1 200 OK
Content-Type: multipart/form-data; boundary=---------------------------9051914041544843365972754266
Content-Length: 68109

-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="text"

text default
-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="file1"; filename="a.jpg"
Content-Type: image/jpeg

... binary data of a.jpg ...
-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="file2"; filename="a.pdf"
Content-Type: application/pdf

... binary data of a.pdf ...
-----------------------------9051914041544843365972754266--
```
