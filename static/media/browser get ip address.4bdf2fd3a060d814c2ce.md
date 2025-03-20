# browser get ip address

> 개인 정보 보호 관련 이슈로 브라우저가 클라이언트의 IP 주소를 직접 노출하지 않는다.
>
> > 따라서 브라우저API는 ip주소 기능이 없다.
> >
> > > 대신 ip를 리턴해주는 api를 사용해라

```ts
this.ipAddress: any

getIpAddress(){
  this.http.get("http://api.ipify.org/?format=json").subscribe(
    (res:any)=>{
      this.ipAddress = res.ip;
    });
}
```
