# db Data Warehouse & Data Lake & Data Mart

## Data Warehouse

- 대량의 데이터를 일반 RDBMS보다 더 빠르게 집계할 수 있는 엔진을 집계하여 제공하는 서비스
- 일반 DB로 수백만 ~ 수억 row를 집계하면 CPU 사용량 100% 찍음
- OLTP: 일반 서비스용 crud DB
- OLAP: 데이터 분석용 DB (집계/리포트)
- snowflake의 핵심 기능 중 하나는 데이터를 직접 공유하는게 아니라 소비자가 직접 쿼리를 하도록하여 보안, 비용에 강점을 갖는다.

## Data Lake

- 가공하지 않은 모든 데이터를 그대로 저장하는 저장소
- 정형 + 비정형 다 저장
- CSV, JSON, log, image 등
- schema 없음 (schema-on-read)
- raw 데이터 중심
- Data Lake = S3 + 메타데이터 + 쿼리 엔진

## Data Mart

- 특정 팀/목적에 맞게 잘라놓은 작은 데이터 웨어하우스
- 부서별/도메인별
- 마케팅 mart / sales mart / product mart
- 이미 정제된 데이터
