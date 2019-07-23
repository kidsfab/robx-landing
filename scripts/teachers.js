function add_elements_teachers() {
}

function add_elements_computer_teachers() {
	$('.teachers > ul > li:first-child').addClass('current');

    var current = $('.teachers > ul > li:first-child');
    for (var i = 0; i < 2; i++) {
        current = current.next();
    }
    current.css("opacity", 0.5);

	$('.teachers > h1').append('<div>' +
        '<a class = "left"></a><a class = "right"></a>' +
        '</div>');

	if($('.teachers ul > li.current').nextAll().length < 2) {
        $('.teachers > h1 a.right').css("opacity", "0.5");
	}

	if($('.teachers ul > li.current').prevAll().length < 2) {
		$('.teachers > h1 a.left').css("opacity", "0.5");
	}


	$('.teachers > h1 a.right').click(function() {
        if($('.teachers ul > li.current').nextAll().length >= 2) {

            $('.teachers > ul > li').css("opacity", 1);

            var current = $('.teachers > ul > li.current');
            for (var i = 0; i < 2; i++) {
                current = current.next();
            }
            $('.teachers > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < 2; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$('.teachers > ul li').css('left', "-=100%");

    		if($('.teachers ul > li.current').nextAll().length < 2) {
    			$('.teachers > h1 a.right').css("opacity", "0.5");
    		}

    		$('.teachers > h1 a.left').css("opacity", "1");
        }
	});

    $('.teachers > h1 a.left').click(function() {
        if($('.teachers ul > li.current').prevAll().length >= 2) {

            $('.teachers > ul > li').css("opacity", 1);

            var current = $('.teachers > ul > li.current');
            for (var i = 0; i < 2; i++) {
                current = current.prev();
            }
            $('.teachers > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < 2; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$('.teachers > ul li').css('left', "+=100%");

    		if($('.teachers ul > li.current').prevAll().length < 2) {
    			$('.teachers > h1 a.left').css("opacity", "0.5");
    		}

    		$('.teachers > h1 a.right').css("opacity", "1");
        }
	});
};



function remove_elements_teachers() {
}

function init_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.teachers').get(0).mobile = true;

		add_elements_teachers();
		init_computer_slider('.teachers .list');
	} else {
		$('.teachers').get(0).mobile = false;
        add_elements_computer_teachers();
        $('.teachers ul, .teachers h1 div').css("visibility", "visible");
	}
}

function resize_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.teachers').get(0).mobile == false) {
			$('.teachers').get(0).mobile = true;
			add_elements_teachers();
			init_computer_slider('.teachers .list');
		} else if($('.teachers').get(0).mobile == true) {
			update_computer_slider('.teachers .list');
		}
	} else {
		if($('.teachers').get(0).mobile == true) {
			$('.teachers').get(0).mobile = false;
			remove_elements_teachers();
			delete_slider('.teachers .list');
            add_elements_computer_reviews();
		}
	}

}
