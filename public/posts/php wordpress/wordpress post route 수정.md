# wordpress post route 수정
```php
function notices_post_type(){
	register_post_type('notices', array(
		'rewrite' => array('slug' => 'notices'),
	));
}

add_action( 'init', 'notices_post_type' );
```