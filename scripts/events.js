$(function() {
	init_videos();
	init_teachers();
	init_addresses();
	init_gallery();
	init_header();
    init_blog();
    init_bonuses();
	init_reviews();
	init_register();
});

$( window ).on('load', function() {
	resize_videos();
	resize_teachers();
	resize_addresses();
	resize_gallery();
	resize_header();
    resize_blog();
    resize_bonuses();
	resize_reviews();
    resize_register();
});

$( window ).resize(function() {
	resize_videos();
	resize_teachers();
	resize_addresses();
	resize_gallery();
	resize_header();
    resize_blog();
    resize_bonuses();
	resize_reviews();
    resize_register();
});
