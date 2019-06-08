$(function () {
	init_videos();
	init_team();
	init_addresses();
	init_gallery();
	init_header();
	init_reviews();
	init_register();
});

$(window).on('load', function () {
	resize_videos();
	resize_team();
	resize_addresses();
	resize_gallery();
	resize_header();
	resize_reviews();

});

$(window).resize(function () {
	resize_videos();
	resize_team();
	resize_addresses();
	resize_gallery();
	resize_header();
	resize_reviews();
});