# nodejs CPU Bound 작업 처리

> cpu bound 작업을 main thread에서 처리하면 모든 작업이 블로킹된다.
>
> > 비즈니스앱의 대표적인 cpu bound 작업과 처리 방법을 소개
> >
> > > nodejs에서 cpu bound 작업 처리는 worker_threads, libuv thread pool, native addon이 있다
> > >
> > > > 브라우저 서포트를 하는 npm 패키지들은 대부분 main thread에서 처리한다. worker_threads를 반드시 사용해서 분리해주자

## 🔐 암호화 및 인증

> bcrypt 해싱, 암호화/복호화(AES 등), JWT 생성 및 검증
>
> > bcrypt 라이브러리 (native addon) 사용

## 🗜️ 압축 / 해제

> 파일 압축/해제(zip, gzip),
>
> > zlib (libuv thread pool) 사용

## 📊 데이터 변환 (Parsing)

> JSON, XML, HTML 파싱, CSV 변환
>
> > fast-json-stringify 사용
> >
> > fast-xml-parser 사용

## 🗃️ 파일 생성

> 엑셀(Excel), PDF 생성·변환
>
> > puppeteer (HTML to PDF) native addon 사용

## 🔍 검색 및 필터링 작업

> 복잡한 문자열 처리(정규표현식), 자연어 처리(NLP), 텍스트 분석
>
> > re2 (native addon) 사용 (정규표현식)

## 📸 미디어 처리

> 동영상 인코딩(FFmpeg 등), 이미지 처리
>
> > sharp 라이브러리 (native addon) 사용
> >
> > ffmpeg (native addon) 사용

## 📈 데이터 분석 및 계산

> 통계 계산, 정렬, 통계 처리, 머신러닝 연산
>
> > worker_threads 사용
