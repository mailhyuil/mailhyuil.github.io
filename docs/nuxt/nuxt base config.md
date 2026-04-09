# nuxt base config

## nuxt.config.ts

- 프로젝트 빌드 및 서버 설정 파일
- 빌드 타임에 읽힘
- 수정 시 재시작 필요
- runtimeConfig를 통해 서버에서 런타임에 읽을 수 있음 (비공개 정보 (시크릿) 포함 가능)
- runtimeConfig.public은 클라이언트앱에 공개되는 설정
- useRuntimeConfig()

## app.config.ts

- Nuxt provides an app/app.config.ts config file to expose reactive configuration within your application with the ability to update it at runtime within lifecycle or using a nuxt plugin and editing it with HMR (hot-module-replacement).
- 앱 UI 및 테마 관련 설정
- 런타임에 읽힘
- 클라이언트 번들에 포함
- HMR 즉시 반영
- useAppConfig()
