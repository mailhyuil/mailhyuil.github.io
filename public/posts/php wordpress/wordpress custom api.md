# wordpress custom api

```php
add_action('rest_api_init', 'create_inquiry');

function create_inquiry() {
	register_rest_route('custom/v1', 'inquiries', array(
		'methods' => WP_REST_Server::CREATABLE, // 'POST'와 같음
		'callback' => 'create_inquiry_item',
		'permission_callback' => '__return_true',
	));
}

function create_inquiry_item($request) {
	$inquiry = array(
		'post_title' => $request->get_param('title'),
		'post_content' => $request->get_param('content'),
		'post_password' => $request->get_param('password'),
		'post_status' => 'publish',
		'post_type' => 'inquiries',
	);

	$post_id = wp_insert_post($inquiry);

	if ($post_id === 0) {
		return new WP_Error('cant-create', 'Can\'t create inquiry', array('status' => 500));
	}

	return $post_id;
}
```