function add_elements_teachers() {
}


function remove_elements_teachers() {
}

function init_teachers() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.teachers').get(0).mobile = true;

		add_elements_teachers();
		init_computer_slider('.teachers .list');
	} else {
		$('.teachers').get(0).mobile = false;
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
		}
	}

}
