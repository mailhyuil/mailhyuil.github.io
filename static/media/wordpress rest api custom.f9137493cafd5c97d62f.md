# wordpress rest api custom

```php
<?php

add_action('rest_api_init', 'register_inquiry_routes');

function register_inquiry_routes() {
    // Create Inquiry
    register_rest_route('custom/v1', 'inquiries', array(
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'create_inquiry_item',
        'permission_callback' => '__return_true',
    ));

    // Get All Inquiries
    register_rest_route('custom/v1', 'inquiries', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'get_inquiries',
        'permission_callback' => '__return_true',
    ));

    // Get Single Inquiry
    register_rest_route('custom/v1', 'inquiries/(?P<id>\d+)', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'get_inquiry',
        'permission_callback' => '__return_true',
    ));

    // Update Inquiry
    register_rest_route('custom/v1', 'inquiries/(?P<id>\d+)', array(
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'update_inquiry_item',
        'permission_callback' => '__return_true',
    ));

    // Delete Inquiry
    register_rest_route('custom/v1', 'inquiries/(?P<id>\d+)', array(
        'methods' => WP_REST_Server::DELETABLE,
        'callback' => 'delete_inquiry_item',
        'permission_callback' => '__return_true',
    ));
}

// CREATE - Inquiry 생성
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

    return rest_ensure_response(array(
        'id' => $post_id,
        'title' => $inquiry['post_title'],
        'content' => $inquiry['post_content'],
    ));
}

// READ - 모든 Inquiry 조회
function get_inquiries($request) {
    $args = array(
        'post_type' => 'inquiries',
        'posts_per_page' => -1,
    );
    $query = new WP_Query($args);
    $inquiries = array();

    while ($query->have_posts()) {
        $query->the_post();
        $inquiries[] = array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
        );
    }

    return rest_ensure_response($inquiries);
}

// READ - 단일 Inquiry 조회
function get_inquiry($request) {
    $post_id = $request->get_param('id');
    $post = get_post($post_id);

    if (empty($post) || $post->post_type !== 'inquiries') {
        return new WP_Error('no_inquiry', 'Inquiry not found', array('status' => 404));
    }

    return rest_ensure_response(array(
        'id' => $post->ID,
        'title' => $post->post_title,
        'content' => $post->post_content,
    ));
}

// UPDATE - Inquiry 수정
function update_inquiry_item($request) {
    $post_id = $request->get_param('id');
    $post = get_post($post_id);

    if (empty($post) || $post->post_type !== 'inquiries') {
        return new WP_Error('no_inquiry', 'Inquiry not found', array('status' => 404));
    }

    $inquiry_data = array(
        'ID' => $post_id,
        'post_title' => $request->get_param('title'),
        'post_content' => $request->get_param('content'),
    );

    $updated_post_id = wp_update_post($inquiry_data);

    if (is_wp_error($updated_post_id)) {
        return new WP_Error('cant-update', 'Can\'t update inquiry', array('status' => 500));
    }

    return rest_ensure_response(array(
        'id' => $updated_post_id,
        'title' => $request->get_param('title'),
        'content' => $request->get_param('content'),
    ));
}

// DELETE - Inquiry 삭제
function delete_inquiry_item($request) {
    $post_id = $request->get_param('id');
    $post = get_post($post_id);

    if (empty($post) || $post->post_type !== 'inquiries') {
        return new WP_Error('no_inquiry', 'Inquiry not found', array('status' => 404));
    }

    $deleted = wp_delete_post($post_id, true);

    if (!$deleted) {
        return new WP_Error('cant-delete', 'Can\'t delete inquiry', array('status' => 500));
    }

    return rest_ensure_response(array('message' => 'Inquiry deleted successfully.'));
}
```