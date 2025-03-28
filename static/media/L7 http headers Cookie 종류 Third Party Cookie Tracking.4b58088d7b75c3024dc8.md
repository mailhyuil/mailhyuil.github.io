# browser Cookie 종류 Third Party Cookie Tracking

## scenario

```txt
1. 사용자가 example.com 에 접속한다.
   (example.com 내에는 광고나 분석을 위해 doubleclick.net(Google 광고 서비스) 같은 서드파티 스크립트가 포함되어 있다.)
2. example.com 또는 doubleclick.net은 사용자의 브라우저에 쿠키를 저장한다.
   (example.com 쿠키(퍼스트파티 쿠키) doubleclick.net 쿠키(서드파티 쿠키))
3. 이후 사용자가 shopping-mall.com(다른 사이트)에 접속한다.
4. shopping-mall.com 역시 광고·분석 목적으로 doubleclick.net 스크립트를 사용 중이다.
5. 이때 브라우저는 이미 가지고 있던 doubleclick.net 쿠키를 자동으로 포함하여 shopping-mall.com에서 가져온 doubleclick.net 스크립트에 요청을 보낸다.
6. doubleclick.net은 “example.com을 방문했던 사용자가 shopping-mall.com에도 방문했다”는 사실을 쿠키 식별자로 매칭해 추적한다.
7. 이렇게 모인 사용자 관심사·취향 정보를 바탕으로, 광고 플랫폼은 맞춤형 광고(Behavioral Targeting)를 사용자에게 노출한다.
```
