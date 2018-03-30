<?php
function addScripts() {
  wp_register_script('inline', get_template_directory_uri() . '/dist/inline.bundle.js', array(), false, true);
  wp_register_script('polyfills', get_template_directory_uri() . '/dist/polyfills.bundle.js', array(), false, true);
  wp_register_script('main', get_template_directory_uri() . '/dist/main.bundle.js', array(), false, true);

  wp_localize_script('wp-api', 'wpApiSettings', array(
    'root' => esc_url_raw(rest_url()),
    'nonce' => wp_create_nonce('wp_rest'),
  ));

  wp_enqueue_script('inline');
  wp_enqueue_script('polyfills');
  wp_enqueue_script('main');

  wp_enqueue_script('wp-api');
  wp_add_inline_script('wp-api', 'initAngular()');
}

add_action('wp_enqueue_scripts', 'addScripts');
?>
