function update_video() {
	$('.videos > .video > iframe').attr('src', $('.videos > .names > div.current').attr('link'));
}

function add_elements_computer_videos() {
	$('.videos > .names > div:first-of-type').addClass('current');

	$('.videos > .names > div > h2').click(function() {
		$('.videos > .names > div').removeClass('current');
		$(this).parent().addClass('current');

		update_video();
	});

	update_video();
};


function remove_elements_computer_videos() {
	$('.videos > .names > div').removeClass('current');
	$('.videos > .names > div > h2').off('click');
}

function add_elements_phone_videos() {
	$('main > .videos > .names').before($('main > .videos > .names > h1'));

	$('.videos > .names > div').prepend($('.videos > .video > iframe').clone());
	$('.videos > .names > div').each(function(){
		$(this).children('iframe').attr('src', $(this).attr('link'));
	});
}


function remove_elements_phone_videos() {
	delete_slider('.videos .names');
	$('main > .videos > .names').prepend($('main > .videos > h1'));
	$('.videos > .names > div > iframe').remove();
}

function init_videos() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.videos').get(0).mobile = true;
		add_elements_phone_videos();
		init_phone_slider('.videos .names');
	} else {
		$('.videos').get(0).mobile = false;
		add_elements_computer_videos();
	}
}

function resize_videos() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.videos').get(0).mobile == false) {
			$('.videos').get(0).mobile = true;
			remove_elements_computer_videos();
			add_elements_phone_videos();
			init_phone_slider('.videos .names');
		} else if($('.videos').get(0).mobile == true) {
			update_computer_slider('.videos .names');
		}
	} else {
		if($('.videos').get(0).mobile == true) {
			$('.videos').get(0).mobile = false;
			remove_elements_phone_videos();
			delete_slider('.videos .names');
			add_elements_computer_videos();
		}
	}

}
