# nest file upload update 로직

```sh
1. delete된 파일의 entity와 저장된 파일을 바로 삭제
2. delete된 파일의 entity의 참조를 끊고 (set null), 주기적인 배치작업으로 참조가 없는 entity를 저장된 파일과 함께 삭제
3. delete된 파일의 entity의 연결을 deleted_files 테이블로 옮기고, 주기적인 배치작업으로 deleted_files에 있는 파일을 저장된 파일과 함께 삭제
```
