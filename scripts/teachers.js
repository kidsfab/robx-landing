function init_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.teachers').get(0).mobile = true;
        delete_computer_slider('.teachers');
		init_phone_slider('.teachers ul');
	} else {
		$('.teachers').get(0).mobile = false;
        init_computer_slider('.teachers', 2);
        var maxHeight = 0;
        for (i = 0; i < $('.teachers .info .bio').length; i++) {
            maxHeight = Math.max(maxHeight, $($('.teachers .info .bio')[i]).height());
        }
        $('.teachers > ul').css("height", maxHeight);
        $('.teachers > ul > li').css("height", maxHeight);
        $('.teachers > ul > li > .bio').css("height", "100%");
	}
}

function resize_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.teachers').get(0).mobile == false) {
			$('.teachers').get(0).mobile = true;
            delete_computer_slider('.teachers');
			init_phone_slider('.teachers ul');
            $('.teachers > ul').css("height", "");
            $('.teachers > ul > li').css("height", "");
            $('.teachers > ul > li > .bio').css("height", "");
		} else if($('.teachers').get(0).mobile == true) {
			update_phone_slider('.teachers ul');
		}
	} else {
		if($('.teachers').get(0).mobile == true) {
			$('.teachers').get(0).mobile = false;
			delete_phone_slider('.teachers ul');
            init_computer_slider('.teachers', 2);
		}
        var maxHeight = 0;
        for (i = 0; i < $('.teachers .info .bio').length; i++) {
            maxHeight = Math.max(maxHeight, $($('.teachers .info .bio')[i]).height());
        }
        $('.teachers > ul').css("height", maxHeight);
        $('.teachers > ul > li').css("height", maxHeight);
        $('.teachers > ul > li > .bio').css("height", "100%");
	}
}
