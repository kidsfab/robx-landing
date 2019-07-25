function update_blog() {
}

function add_elements_computer_blog() {
	$('.blog > ul > li:first-child').addClass('current');

    var current = $('.blog > ul > li:first-child');
    for (var i = 0; i < 3; i++) {
        current = current.next();
    }
    current.css("opacity", 0.5);

	$('.blog > h1').append('<div>' +
        '<a class = "left"></a><a class = "right"></a>' +
        '</div>');

	if($('.blog ul > li.current').nextAll().length < 3) {
        $('.blog > h1 a.right').css("opacity", "0.5");
	}

	if($('.blog ul > li.current').prevAll().length < 3) {
		$('.blog > h1 a.left').css("opacity", "0.5");
	}


	$('.blog > h1 a.right').click(function() {
        if($('.blog ul > li.current').nextAll().length >= 3) {

            $('.blog > ul > li').css("opacity", 1);

            var current = $('.blog > ul > li.current');
            for (var i = 0; i < 3; i++) {
                current = current.next();
            }
            $('.blog > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < 3; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$('.blog > ul li').css('left', "-=102%");

    		if($('.blog ul > li.current').nextAll().length < 3) {
    			$('.blog > h1 a.right').css("opacity", "0.5");
    		}

    		$('.blog > h1 a.left').css("opacity", "1");
        }
	});

    $('.blog > h1 a.left').click(function() {
        if($('.blog ul > li.current').prevAll().length >= 3) {

            $('.blog > ul > li').css("opacity", 1);

            var current = $('.blog > ul > li.current');
            for (var i = 0; i < 3; i++) {
                current = current.prev();
            }
            $('.blog > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < 3; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$('.blog > ul li').css('left', "+=102%");

    		if($('.blog ul > li.current').prevAll().length < 3) {
    			$('.blog > h1 a.left').css("opacity", "0.5");
    		}

    		$('.blog > h1 a.right').css("opacity", "1");
        }
	});
};


function remove_elements_computer_blog() {
    $('.blog > h1 > div').remove();
}

function add_elements_phone_blog() {
}


function remove_elements_phone_blog() {
}

function init_blog() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.blog').get(0).mobile = true;
		add_elements_phone_blog();
		init_phone_slider('.blog > ul');
	} else {
		$('.blog').get(0).mobile = false;
		add_elements_computer_blog();
        $('.blog ul, .blog h1 div').css("visibility", "visible");
	}
}

function resize_blog() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.blog').get(0).mobile == false) {
			$('.blog').get(0).mobile = true;
			remove_elements_computer_blog();
			add_elements_phone_blog();
			init_phone_slider('.blog > ul');
		} else if($('.blog').get(0).mobile == true) {
			update_computer_slider('.blog > ul');
		}
	} else {
		if($('.blog').get(0).mobile == true) {
			$('.blog').get(0).mobile = false;
			remove_elements_phone_blog();
			delete_slider('.blog > ul');
			add_elements_computer_blog();
		}
	}

}
