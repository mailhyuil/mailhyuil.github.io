# wordpress built-in functions
1. 액션 및 필터 관련 함수
```
add_action: 특정 액션 훅에 커스텀 기능을 추가합니다.
do_action: 액션 훅을 실행합니다. 사용자가 add_action으로 추가한 함수가 실행됩니다.
add_filter: 특정 필터 훅에 커스텀 기능을 추가합니다.
apply_filters: 필터 훅을 실행합니다. 사용자가 add_filter로 추가한 함수가 실행됩니다.
remove_action: 특정 액션 훅에서 함수를 제거합니다.
remove_filter: 특정 필터 훅에서 함수를 제거합니다.
```
2. 게시글 관련 함수
```
wp_insert_post: 새로운 게시글을 추가합니다.
get_post: 특정 게시글 데이터를 가져옵니다.
update_post_meta: 게시글의 메타데이터를 추가하거나 업데이트합니다.
get_post_meta: 게시글의 메타데이터를 가져옵니다.
delete_post_meta: 게시글의 메타데이터를 삭제합니다.
wp_delete_post: 게시글을 삭제합니다.
get_posts: 게시글 목록을 가져옵니다.
wp_trash_post: 게시글을 휴지통으로 보냅니다.
```
3. 사용자 관련 함수
```
wp_create_user: 새로운 사용자를 생성합니다.
wp_update_user: 사용자 정보를 업데이트합니다.
get_user_meta: 사용자의 메타데이터를 가져옵니다.
update_user_meta: 사용자의 메타데이터를 업데이트합니다.
delete_user_meta: 사용자의 메타데이터를 삭제합니다.
get_users: 사용자를 쿼리하여 가져옵니다.
get_current_user_id: 현재 로그인한 사용자의 ID를 반환합니다.
is_user_logged_in: 사용자가 로그인 상태인지 확인합니다.
wp_get_current_user: 현재 로그인한 사용자의 정보를 반환합니다.
```
4. 데이터베이스 관련 함수
```
wpdb: WordPress의 데이터베이스 클래스. 커스텀 쿼리를 실행하거나 데이터를 가져오는 데 사용됩니다.
php
Copy code
global $wpdb;
$results = $wpdb->get_results("SELECT * FROM wp_posts WHERE post_status = 'publish'");
$wpdb->insert: 테이블에 데이터를 삽입합니다.
$wpdb->update: 테이블 데이터를 업데이트합니다.
$wpdb->delete: 테이블 데이터를 삭제합니다.
$wpdb->get_results: 여러 행의 결과를 가져옵니다.
$wpdb->get_row: 단일 행의 결과를 가져옵니다.
$wpdb->get_var: 단일 값을 반환합니다.
```
5. 테마와 템플릿 관련 함수
```
get_template_part: 템플릿 파일을 포함합니다. (예: get_template_part('header'))
locate_template: 특정 템플릿 파일의 경로를 반환합니다.
get_header, get_footer, get_sidebar: 테마의 헤더, 푸터, 사이드바를 가져옵니다.
get_template_directory_uri: 현재 테마 디렉토리의 URL을 반환합니다.
get_stylesheet_directory_uri: 자식 테마의 디렉토리 URL을 반환합니다.
is_front_page, is_home, is_single, is_page, is_category: 현재 페이지 유형을 확인합니다.
```
6. 미디어 및 업로드 관련 함수
```
wp_upload_dir: 업로드 디렉토리 경로를 가져옵니다.
wp_get_attachment_url: 특정 첨부 파일의 URL을 반환합니다.
wp_get_attachment_metadata: 첨부 파일의 메타데이터를 가져옵니다.
wp_insert_attachment: 새 첨부 파일을 등록합니다.
wp_delete_attachment: 첨부 파일을 삭제합니다.
```
7. 옵션 및 설정 관련 함수
```
get_option: 옵션 값을 가져옵니다.
update_option: 옵션 값을 업데이트합니다.
delete_option: 옵션 값을 삭제합니다.
add_option: 새 옵션을 추가합니다.
```
8. 커스텀 필드 관련 함수
```
add_post_meta: 게시글에 새로운 메타데이터를 추가합니다.
update_post_meta: 기존 메타데이터를 업데이트하거나 새로 추가합니다.
get_post_meta: 메타데이터를 가져옵니다.
delete_post_meta: 메타데이터를 삭제합니다.
```
9. URL 및 경로 관련 함수
```
home_url: 사이트의 홈 URL을 반환합니다.
site_url: 사이트 URL을 반환합니다.
admin_url: 관리자 페이지 URL을 반환합니다.
wp_redirect: 페이지를 리다이렉트합니다.
wp_safe_redirect: 보안 리다이렉트입니다.
10. REST API 관련 함수
register_rest_route: REST API 엔드포인트를 등록합니다.
rest_ensure_response: REST API 응답 객체를 생성합니다.
is_rest_request: 현재 요청이 REST 요청인지 확인합니다.
```
11. 스크립트와 스타일 관련 함수
```
wp_enqueue_script: JavaScript 파일을 큐에 추가합니다.
wp_enqueue_style: CSS 파일을 큐에 추가합니다.
wp_register_script: JavaScript 파일을 등록합니다.
wp_register_style: CSS 파일을 등록합니다.
wp_deregister_script: 등록된 JavaScript 파일을 제거합니다.
```