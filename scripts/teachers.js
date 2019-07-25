function init_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.teachers').get(0).mobile = true;
        delete_computer_slider('.teachers');
		init_phone_slider('.teachers ul');
	} else {
		$('.teachers').get(0).mobile = false;
        init_computer_slider('.teachers', 2);
	}
}

function resize_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.teachers').get(0).mobile == false) {
			$('.teachers').get(0).mobile = true;
            delete_computer_slider('.teachers');
			init_phone_slider('.teachers ul');
		} else if($('.teachers').get(0).mobile == true) {
			update_phone_slider('.teachers ul');
		}
	} else {
		if($('.teachers').get(0).mobile == true) {
			$('.teachers').get(0).mobile = false;
			delete_phone_slider('.teachers ul');
            init_computer_slider('.teachers', 2);
		}
	}
}
