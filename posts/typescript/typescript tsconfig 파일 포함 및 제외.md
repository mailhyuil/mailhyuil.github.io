# typescript tsconfig.json 파일 포함 또는 제외

```json
{
  "files": ["src/index.ts"], // 읽을 파일 목록
  "include": ["src"], // 읽을 ts 파일 경로 **/*.ts로 하면 전부 읽음
  "exclude": ["node_modules"] // 제외할 디렉토리
}
```
