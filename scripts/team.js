function add_elements_team() {}


function remove_elements_team() {}

function init_team() {
	if (window.matchMedia('(max-width: 480px)').matches) {
		$('.team').get(0).mobile = true;

		add_elements_team();
		init_computer_slider('.team .list');
	} else {
		$('.team').get(0).mobile = false;
	}
}

function resize_team() {
	if (window.matchMedia('(max-width: 480px)').matches) {
		if ($('.team').get(0).mobile == false) {
			$('.team').get(0).mobile = true;
			add_elements_team();
			init_computer_slider('.team .list');
		} else if ($('.team').get(0).mobile == true) {
			update_computer_slider('.team .list');
		}
	} else {
		if ($('.team').get(0).mobile == true) {
			$('.team').get(0).mobile = false;
			remove_elements_team();
			delete_slider('.team .list');
		}
	}

}