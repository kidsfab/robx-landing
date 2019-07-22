function add_elements_addresses() {
	$('main > .addresses > .list').before($('main > .addresses > .list > h2'));

	$('main > .addresses > .list > div').each(function() {
		url = 'https://yandex.ru/maps/2/saint-petersburg/?mode=search&text=' + encodeURIComponent($(this).children('div:first-child').text()) + ',+Санкт-Петербург'

		$(this).append('<a class = "circled" href = "' + url + '">Посмотреть на карте</a>');
	});
}


function remove_elements_addresses() {
	$('main > .addresses > .list').prepend($('main > .addresses > h2'));
	$('main > .addresses > .list > .address > a').remove();
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
			init_computer_slider('.addresses .list');
		} else if($('.addresses').get(0).mobile == true) {
			update_computer_slider('.addresses .list');
		}
	} else {
		if($('.addresses').get(0).mobile == true) {
			$('.addresses').get(0).mobile = false;
			remove_elements_addresses();
		}
	}
}
