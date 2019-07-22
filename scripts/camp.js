function add_elements_camp() {
}


function remove_elements_camp() {
}


function init_camp() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.camp .projects').get(0).mobile = true;

		add_elements_camp();
		init_computer_slider('.camp .projects .list');
		init_computer_slider('.camp-pros .list');
	} else {
		$('.camp .projects').get(0).mobile = false;
	}
}

function resize_camp() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.camp .projects').get(0).mobile == false) { 
			$('.camp .projects').get(0).mobile = true;
			add_elements_camp();
			init_computer_slider('.camp .projects .list');
			init_computer_slider('.camp-pros .list');
		} else if($('.camp').get(0).mobile == true) {
			update_computer_slider('.camp .projects .list');
			update_computer_slider('.camp-pros .list');
		}
	} else {
		if($('.camp .projects').get(0).mobile == true) { 
			$('.camp .projects').get(0).mobile = false;
			remove_elements_camp();
			delete_slider('.camp-pros .list');
		}
	}

}
