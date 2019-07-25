function add_elements_addresses() {
	$('main > .addresses > .list >  ul').before(
        $('main > .addresses > .list > ul > h2')
    );

	$('main > .addresses > .list > ul > li').each(function() {
		url = 'https://yandex.ru/maps/2/saint-petersburg/?mode=search&text=' + encodeURIComponent($(this).children('div:first-child').text()) + ',+Санкт-Петербург'

		$(this).append('<a class = "circled" href = "' + url + '">Посмотреть на карте</a>');
	});
}


function remove_elements_addresses() {
	$('main > .addresses > .list > ul').prepend(
        $('main > .addresses > .list > h2')
);
	$('main > .addresses > .list > ul > li > a').remove();
}

function init_addresses() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.addresses').get(0).mobile = true;

		add_elements_addresses();
	} else {
		$('.addresses').get(0).mobile = false;
	}
}

function resize_addresses() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.addresses').get(0).mobile == false) {
			$('.addresses').get(0).mobile = true;
			add_elements_addresses();
			init_phone_slider('.addresses ul');
		} else if($('.addresses').get(0).mobile == true) {
			update_computer_slider('.addresses ul');
		}
	} else {
		if($('.addresses').get(0).mobile == true) {
			$('.addresses').get(0).mobile = false;
			remove_elements_addresses();
		}
	}
}
