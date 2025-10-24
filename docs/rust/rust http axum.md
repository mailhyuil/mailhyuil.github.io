# rust http axum

## Cargo.toml

```toml
[dependencies]
axum = "0.7"
tokio = { version = "1", features = ["full"] }
```

## main.rs

```rs
use axum::{
    routing::get,
    Router,
};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // 라우터 생성: "/" 경로에 대한 요청을 `hello_world` 핸들러에 연결
    let app = Router::new().route("/", get(hello_world));

    // 서버를 바인딩할 주소 설정
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("서버가 {}에서 실행 중입니다.", addr);

    // 서버 실행
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

// 핸들러 함수 정의
async fn hello_world() -> &'static str {
    "Hello, World!"
}
```
