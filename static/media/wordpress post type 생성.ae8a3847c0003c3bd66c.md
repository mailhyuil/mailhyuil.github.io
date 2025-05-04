# wordpress post type 생성
> /wp-content/mu-plugins/ 에 `post-type.php` 파일을 생성하고 아래 코드를 추가합니다.

```php
function custom_service_post_type(){
	register_post_type('custom_service', array(
		'public' => true,
		'labels' => array(
			'name' => '공지사항',
			'add_new_item' => '공지사항 추가',
			'edit_item' => '공지사항 수정',
			'all_items' => '전체 공지사항',
			'singular_name' => '공지사항'
		),
		'menu_icon' => 'dashicons-admin-tools', // https://developer.wordpress.org/resource/dashicons/
        'supports' => array('title', 'editor', 'comments'),
        'show_in_rest' => true,
	));
}

add_action( 'init', 'custom_service_post_type' );
```
