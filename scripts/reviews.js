function update_reviews() {
}

function add_elements_computer_reviews() {
	$('.reviews .list > div:first-child').addClass('current');

	$('.reviews .list').append('<a class = "left"></a>');
	$('.reviews .list').append('<a class = "right"></a>');

	if($('.reviews .list > div.current~div').length < 2) {
		$('.reviews .list a.right').hide();
	}

	if($('.reviews .list > div~div.current').length < 2) {
		$('.reviews .list a.left').hide();
	}


	$('.reviews .list a.right').click(function() {
		$('.reviews .list div.current').removeClass('current').next().next().addClass('current');
		$('.reviews .list div').css('left', "-" + $('.reviews .list > div.current').prevAll().length + "00%");

		if($('.reviews .list > div.current').nextAll('div').length < 2) {
			$('.reviews .list a.right').hide();
		}

		$('.reviews .list a.left').show();
	});

	$('.reviews .list a.left').click(function() {
		$('.reviews .list div.current').removeClass('current').prev().prev().addClass('current');
		$('.reviews .list div').css('left', "-" + $('.reviews .list > div.current').prevAll().length + "00%");
	
		if($('.reviews .list > div.current').prevAll('div').length < 2) {
			$('.reviews .list a.left').hide();
		}

		$('.reviews .list a.right').show();
	});

};


function remove_elements_computer_reviews() {
}

function add_elements_phone_reviews() {
}


function remove_elements_phone_reviews() {
}

function init_reviews() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.reviews').get(0).mobile = true;
		add_elements_phone_reviews();
		init_computer_slider('.reviews .list');
	} else {
		$('.reviews').get(0).mobile = false;
		add_elements_computer_reviews();
	}
}

function resize_reviews() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.reviews').get(0).mobile == false) { 
			$('.reviews').get(0).mobile = true;
			remove_elements_computer_reviews();
			add_elements_phone_reviews();
			init_computer_slider('.reviews .list');
		} else if($('.reviews').get(0).mobile == true) {
			update_computer_slider('.reviews .list');
		}
	} else {
		if($('.reviews').get(0).mobile == true) { 
			$('.reviews').get(0).mobile = false;
			remove_elements_phone_reviews();
			delete_slider('.reviews .list');
			add_elements_computer_reviews();
		}
	}

}
