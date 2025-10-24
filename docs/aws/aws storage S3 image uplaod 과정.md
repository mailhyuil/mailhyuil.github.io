# aws storage S3 image uplaod 과정

1. temp/image_name으로 업로드 (presigned url 사용)
2. 서버에 요청해서 entity 생성
3. 서버에서 entity를 생성 후 바로 temp/image_name을 original/image_name으로 이동
4. temp 폴더는 expire_time이 지나면 삭제
5. 서버에서 entity를 삭제하면 original/image_name도 삭제 또는 temp로 이동
