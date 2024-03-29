# js buffer

> 자바스크립트의 버퍼란 "특정 크기의 메모리 공간"에 "바이너리 데이터"를 저장해두는 객체
>
> > 자바스크립트의 용도가 다양해지면서 오디오, 비디오 및 웹소켓 통신에서 사용하는 "Raw Binary Data"를 직접 다룰 필요가 생겼기 때문에 등장
> >
> > > "Raw Binary Data"들을 원시타입으로 저장한다면 엄청난 메모리 손실이 발생하기 때문에 버퍼를 사용한다.
> > >
> > > > (e.g. [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] => 10개의 원시타입을 저장하는데 40byte가 필요하다. 하지만 버퍼를 사용하면 10byte만 필요하다.)
> > > >
> > > > > 데이터를 "1Byte"씩 나누어 저장한다.

## 바이너리 데이터

> 네트워크 content-type 중 application/octet-stream, image/jpeg, image/png, video/mp4 등이 바이너리 데이터이다.
>
> > 바이너리 데이터는 용량이 크기 때문에 메모리에 인코딩된 상태로 저장해두면 메모리를 많이 차지하게 된다.
> >
> > > 따라서 용량이 큰 데이터를 다룰 때는 버퍼를 이용해서 바이너리 데이터 상태로 저장해두고 필요할 때만 인코딩해서 사용한다.
