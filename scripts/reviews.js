function update_reviews() {
}

function add_elements_computer_reviews() {
	$('.reviews > ul > li:first-child').addClass('current');

    var current = $('.reviews > ul > li:first-child');
    for (var i = 0; i < 3; i++) {
        current = current.next();
    }
    current.css("opacity", 0.5);

	$('.reviews > h1').append('<div>' +
        '<a class = "left"></a><a class = "right"></a>' +
        '</div>');

	if($('.reviews ul > li.current').nextAll().length < 3) {
        $('.reviews > h1 a.right').css("opacity", "0.5");
	}

	if($('.reviews ul > li.current').prevAll().length < 3) {
		$('.reviews > h1 a.left').css("opacity", "0.5");
	}


	$('.reviews > h1 a.right').click(function() {
        if($('.reviews ul > li.current').nextAll().length >= 3) {

            $('.reviews > ul > li').css("opacity", 1);

            var current = $('.reviews > ul > li.current');
            for (var i = 0; i < 3; i++) {
                current = current.next();
            }
            $('.reviews > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < 3; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$('.reviews > ul li').css('left', "-=102%");

    		if($('.reviews ul > li.current').nextAll().length < 3) {
    			$('.reviews > h1 a.right').css("opacity", "0.5");
    		}

    		$('.reviews > h1 a.left').css("opacity", "1");
        }
	});

    $('.reviews > h1 a.left').click(function() {
        if($('.reviews ul > li.current').prevAll().length >= 3) {

            $('.reviews > ul > li').css("opacity", 1);

            var current = $('.reviews > ul > li.current');
            for (var i = 0; i < 3; i++) {
                current = current.prev();
            }
            $('.reviews > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < 3; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$('.reviews > ul li').css('left', "+=102%");

    		if($('.reviews ul > li.current').prevAll().length < 3) {
    			$('.reviews > h1 a.left').css("opacity", "0.5");
    		}

    		$('.reviews > h1 a.right').css("opacity", "1");
        }
	});
};


function remove_elements_computer_reviews() {
    $('.reviews > h1 > div').remove();
}

function add_elements_phone_reviews() {
}


function remove_elements_phone_reviews() {
}

function init_reviews() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.reviews').get(0).mobile = true;
		add_elements_phone_reviews();
		init_phone_slider('.reviews > ul');
	} else {
		$('.reviews').get(0).mobile = false;
		add_elements_computer_reviews();
        $('.reviews ul, .reviews h1 div').css("visibility", "visible");
	}
}

function resize_reviews() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.reviews').get(0).mobile == false) {
			$('.reviews').get(0).mobile = true;
			remove_elements_computer_reviews();
			add_elements_phone_reviews();
			init_phone_slider('.reviews > ul');
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
