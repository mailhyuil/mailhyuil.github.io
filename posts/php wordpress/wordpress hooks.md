# wordpress hooks
> action: 특정 이벤트가 발생할 때 실행됩니다. 예: 게시물 저장, 페이지 로드 등.
>
> filter: 데이터를 수정하거나 조작할 때 사용됩니다. 예: 콘텐츠 수정, 제목 포맷팅 등.

## action

> add_action(), do_action(), remove_action(), has_action(), did_action() 함수를 사용하여 action을 관리합니다.

```sh
# 초기화 및 설정
init: WordPress가 초기화될 때 실행.
wp_loaded: 모든 PHP 파일이 로드된 후 실행.
plugins_loaded: 플러그인이 모두 로드된 후 실행.

# 테마와 플러그인 관련
after_setup_theme: 테마가 초기화된 직후 실행.
switch_theme: 테마가 변경될 때 실행.
enqueue_scripts: 스타일 및 스크립트 로드.

# 사용자와 인증
wp_login: 사용자가 로그인한 후 실행.
wp_logout: 사용자가 로그아웃한 후 실행.
user_register: 새 사용자가 등록될 때 실행.

# 게시물 및 페이지
save_post: 게시물이 저장될 때 실행.
transition_post_status: 게시물 상태가 변경될 때 실행.
delete_post: 게시물이 삭제될 때 실행.
```

## filter

> add_filter(), apply_filters(), remove_filter(), has_filter(), current_filter() 함수를 사용하여 filter를 관리합니다.

```sh
# 콘텐츠와 제목
the_content: 게시물 콘텐츠를 수정.
the_title: 게시물 제목을 수정.
excerpt_length: 요약문의 길이를 수정.

# URL과 링크
home_url: 홈 URL을 수정.
site_url: 사이트 URL을 수정.
post_link: 게시물 링크를 수정.

# 메뉴와 위젯
wp_nav_menu_items: 내비게이션 메뉴의 항목을 수정.
widget_title: 위젯 제목을 수정.

# 미디어
upload_mimes: 업로드 가능한 MIME 유형을 추가/수정.
image_size_names_choose: 사용자 정의 이미지 크기 추가.
```