# wordpress post field 추가

```php
function notices_post_type(){
	register_post_type('notices', array(
        'supports' => array('title', 'editor', 'comments'), // title, editor(content) 외에 필드를 추가
		'public' => true,
		'labels' => array(
			'name' => '공지사항',
			'singular_name' => '공지사항',
			'add_new_item' => '새 공지사항 추가',
			'edit_item' => '공지사항 수정',
			'all_items' => '모든 공지사항',
		),
		'menu_icon' => 'dashicons-admin-tools',
		'show_in_rest' => true,
	));
}
```