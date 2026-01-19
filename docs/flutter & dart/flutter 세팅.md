# flutter 세팅 settings

## install

```sh
# env
dart pub add flutter_dotenv

# logging
dart pub add logger

# lint
dart pub add flutter_lints --dev

# router
dart pub add go_router

# state management
dart pub add hooks_riverpod
dart pub add flutter_hooks
dart pub add riverpod_annotation
dart pub add riverpod_generator --dev
dart pub add riverpod_devtools
dart pub add rxdart

# http
dart pub add dio

# local storage (simple)
dart pub add shared_preferences

# secure storage (tokens etc.)
dart pub add flutter_secure_storage

# json_serializable + freezed
dart pub add json_annotation
dart pub add freezed_annotation
dart pub add json_serializable --dev
dart pub add freezed --dev
dart pub add build_runner --dev

# image
dart pub add cached_network_image

# svg
dart pub add flutter_svg

# skeleton
dart pub add shimmer

# animation
dart pub add animations

# form & validation
dart pub add flutter_form_builder
dart pub add form_builder_validators

# util
dart pub add collection # firstOrNull, mapIndexed, groupBy

# 권한
dart pub add permission_handler

################################ optional packages #################################

# uuid
dart pub add uuid

# scroll
dart pub add scrollable_positioned_list # 특정 index로 이동 가능
dart pub add flutter_slidable # 👉 리스트 아이템 옆으로 밀어서 액션
dart pub add pull_to_refresh # 당겨서 새로고침 기본 RefreshIndicator보다 커스터마이징 쉬움
dart pub add infinite_scroll_pagination # 무한 스크롤 기능 (커서 기반 페이지네이션)

# picker
dart pub add image_picker
dart pub add file_picker

# 외부 URL 실행
dart pub add url_launcher

# 네트워크 상태 감지
dart pub add connectivity_plus

# local sql
dart pub add sqflite

# local no-sql
dart pub add hive
dart pub add isar

# supabase (backend & database)
dart pub add supabase_flutter

# revenuecat (in-app purchases)
dart pub add purchases_flutter

# firebase
dart pub add firebase_core
dart pub add firebase_auth # auth
dart pub add cloud_firestore # firestore
dart pub add firebase_database # realtime database
dart pub add firebase_messaging # push notification
dart pub add firebase_storage # storage
dart pub add firebase_crashlytics # crashlytics
dart pub add geoflutterfire_plus # location
dart pub add firebase_in_app_messaging # in-app messaging

# location
dart pub add geolocator

# 앱 내부 디렉토리 경로 제공 documents / cache / temp (파일 저장 / 이미지 캐시 직접 관리)
dart pub add path_provider

# 국제 전화번호
dart pub add intl_phone_number_input

```
