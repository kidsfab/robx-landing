function update_reviews() {
}

function add_elements_computer_reviews() {
	$('.reviews > ul > li:first-child').addClass('current');

	// $('.reviews > ul').append('<a class = "left"></a>');
	// $('.reviews > ul').append('<a class = "right"></a>');

	// if($('.reviews > ul > li.current~li').length < 2) {
	// 	$('.reviews > ul a.right').hide();
	// }
    //
	// if($('.reviews ul > li~li.current').length < 2) {
	// 	$('.reviews > ul a.left').hide();
	// }


	// $('.reviews > ul a.right').click(function() {
	// 	$('.reviews > ul div.current').removeClass('current').next().next().addClass('current');
	// 	$('.reviews > ul div').css('left', "-" + $('.reviews > ul > div.current').prevAll().length + "00%");
    //
	// 	if($('.reviews > ul > div.current').nextAll('div').length < 2) {
	// 		$('.reviews > ul a.right').hide();
	// 	}
    //
	// 	$('.reviews > ul a.left').show();
	// });

	// $('.reviews > ul a.left').click(function() {
	// 	$('.reviews > ul div.current').removeClass('current').prev().prev().addClass('current');
	// 	$('.reviews > ul div').css('left', "-" + $('.reviews > ul > div.current').prevAll().length + "00%");
    //
	// 	if($('.reviews > ul > div.current').prevAll('div').length < 2) {
	// 		$('.reviews > ul a.left').hide();
	// 	}
    //
	// 	$('.reviews > ul a.right').show();
	// });

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
		init_computer_slider('.reviews > ul');
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
			init_computer_slider('.reviews > ul');
		} else if($('.reviews').get(0).mobile == true) {
			update_computer_slider('.reviews > ul');
		}
	} else {
		if($('.reviews').get(0).mobile == true) {
			$('.reviews').get(0).mobile = false;
			remove_elements_phone_reviews();
			delete_slider('.reviews > ul');
			add_elements_computer_reviews();
		}
	}

}
