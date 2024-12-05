# wordpress custom field 추가

```php
function add_email_meta_box_to_inquiries() {
    add_meta_box(
        'inquiries_email_meta_box', // 메타박스 ID
        '이메일 주소',              // 메타박스 제목
        'render_inquiries_email_meta_box', // 렌더링 함수
        'inquiries',               // 적용할 포스트 타입
        'normal',                  // 위치 (normal, side, advanced)
        'high'                     // 우선순위 (high, low)
    );
}

add_action('add_meta_boxes', 'add_email_meta_box_to_inquiries');

function render_inquiries_email_meta_box($post) {
    // 기존 이메일 메타값을 가져오기
    $email = get_post_meta($post->ID, '_inquiries_email', true);

    // 보안: nonce 추가
    wp_nonce_field('save_inquiries_email', 'inquiries_email_nonce');

    echo '<label for="inquiries_email">이메일 주소: </label>';
    echo '<input type="email" id="inquiries_email" name="inquiries_email" value="' . esc_attr($email) . '" style="width: 100%;">';
}

function save_inquiries_email_meta($post_id) {
    // 자동 저장 방지
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // 권한 확인
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // nonce 확인
    if (!isset($_POST['inquiries_email_nonce']) || !wp_verify_nonce($_POST['inquiries_email_nonce'], 'save_inquiries_email')) {
        return;
    }

    // 이메일 값 저장
    if (isset($_POST['inquiries_email'])) {
        $email = sanitize_email($_POST['inquiries_email']);
        update_post_meta($post_id, '_inquiries_email', $email);
    }
}
add_action('save_post', 'save_inquiries_email_meta');

function add_inquiries_email_column($columns) {
    $columns['inquiries_email'] = '이메일 주소'; // 새로운 컬럼 추가
    return $columns;
}
add_filter('manage_inquiries_posts_columns', 'add_inquiries_email_column');

function render_inquiries_email_column($column, $post_id) {
    if ($column === 'inquiries_email') {
        $email = get_post_meta($post_id, '_inquiries_email', true);
        echo esc_html($email ? $email : '--'); // 이메일 표시
    }
}
add_action('manage_inquiries_posts_custom_column', 'render_inquiries_email_column', 10, 2);
```