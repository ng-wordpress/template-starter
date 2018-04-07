<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri() ?>/dist/favicon.ico">
    <link href="<?php echo get_template_directory_uri() ?>/dist/styles.bundle.css" rel="stylesheet" />
    <?php wp_head(); ?>
</head>
<body>
<app-root>Loading...</app-root>
<script>var siteUrl = '<?php echo get_site_url(); ?>/';</script>
<?php wp_footer(); ?>
</body>
</html>
