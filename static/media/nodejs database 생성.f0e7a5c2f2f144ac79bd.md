# nodejs database 생성

```ts
const { Pool } = require("pg");

// PostgreSQL 연결 정보
const dbConfig = {
  user: "your_username",
  password: "your_password",
  host: "localhost",
  port: 5432,
  database: "your_database_name",
};

// PostgreSQL Pool 생성
const pool = new Pool(dbConfig);

// 데이터베이스 생성 함수
async function createDatabase() {
  const client = await pool.connect();

  try {
    // 새로운 데이터베이스 생성 쿼리
    const createDatabaseQuery = "CREATE DATABASE your_new_database";

    // 쿼리 실행
    await client.query(createDatabaseQuery);

    console.log("데이터베이스가 성공적으로 생성되었습니다.");
  } catch (error) {
    console.error("데이터베이스 생성 중 오류 발생:", error);
  } finally {
    // 클라이언트 반환
    client.release();
  }
}

// 데이터베이스 생성 함수 호출
createDatabase();
```
