function init_blog() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.blog').get(0).mobile = true;
		init_phone_slider('.blog > ul');
        delete_phone_slider('.blog');
	} else {
		$('.blog').get(0).mobile = false;
		init_computer_slider('.blog', 3);
	}
}

function resize_blog() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.blog').get(0).mobile == false) {
			$('.blog').get(0).mobile = true;
			init_phone_slider('.blog > ul');
            delete_phone_slider('.blog');
		} else if($('.blog').get(0).mobile == true) {
			update_phone_slider('.blog > ul');
		}
	} else {
		if($('.blog').get(0).mobile == true) {
			$('.blog').get(0).mobile = false;
			delete_phone_slider('.blog > ul');
			init_computer_slider('.blog', 3);
		}
	}

}
