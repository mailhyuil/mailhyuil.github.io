# rust http server

> tcp 통신으로 주소에 바인딩해서 듣기
>
> > tcp 연결이 되면 stream이 들어온다
> >
> > > stream을 통해서 HTTP 문법으로 데이터 전달

```fs
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::fs::File;

fn main() {
    let listener = TcpListener::bind("localhost:7878").unwrap(); // TcpListener로 localhost:7878의 tcp 연결 듣기

    for stream in listener.incoming(){ // TcpListener가 들은 연결에서 TcpStream을 뽑는다
        let stream = stream.unwrap();

        handle_connection(stream) // TcpStream을 통해서 데이터를 전달
    }

    fn handle_connection(mut stream: TcpStream) {
        let mut file = File::open("index.html").unwrap(); // index.html파일 열기

        let mut contents = String::new(); // contents 변수 생성 String 타입
        file.read_to_string(&mut contents).unwrap(); // 열어놓은 index.html을 string으로 읽어서 contents에 저장

        let response = format!( // response로 포멧팅
            "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}", // HTTP 프로토콜 문법에 맞춰서 contenst 길이와 콘텐츠 바디에 넣기
            contents.len(),
            contents
        );

        stream.write(response.as_bytes()).unwrap(); // stream으로 response를 bytes로 브라우저에 전달(쓰기)
        stream.flush().unwrap(); // 스트림 자원 해제
    }
}
```

## 버퍼 사용

```rs
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::fs::File;

fn main() {
    let listener = TcpListener::bind("localhost:7878").unwrap(); // TcpListener로 localhost:7878의 tcp 연결 듣기

    for stream in listener.incoming(){ // TcpListener가 들은 연결에서 TcpStream을 뽑는다
        let stream = stream.unwrap();

        handle_connection(stream) // TcpStream을 통해서 데이터를 전달
    }

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 512]; // 512byte의 버퍼 인스턴스
    stream.read(&mut buffer).unwrap(); // 요청 데이터를 읽어서 버퍼에 저장

    let get = b"GET / HTTP/1.1\r\n";

    if buffer.starts_with(get) { // buffer안에 있는 요청 데이터가 get으로 시작하면 index.html 전송
        let mut file = File::open("index.html").unwrap(); // index.html파일 열기

        let mut contents = String::new(); // contents 변수 생성 String 타입
        file.read_to_string(&mut contents).unwrap(); // 열어놓은 index.html을 string으로 읽어서 contents에 저장

        let response = format!( // response로 포멧팅
            "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}", // HTTP 프로토콜 문법에 맞춰서 contenst 길이와 콘텐츠 바디에 넣기
            contents.len(),
            contents
        );

        stream.write(response.as_bytes()).unwrap(); // stream으로 response를 bytes로 브라우저에 전달(쓰기)
        stream.flush().unwrap(); // 스트림 자원 해제
    } else { // /요청이 아닐시 404 페이지 전달
        let status_line = "HTTP/1.1 404 NOT FOUND";
        let mut file = File::open("404.html").unwrap();
        let mut contents = String::new();

        file.read_to_string(&mut contents).unwrap();

        let response = format!(
            "{}\r\nContent-Length: {}\r\n\r\n{}",
            status_line,
            contents.len(),
            contents
        );

        stream.write(response.as_bytes()).unwrap();
        stream.flush().unwrap();
    }
}
```
