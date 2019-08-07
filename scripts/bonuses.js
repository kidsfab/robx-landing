function update_bonuses() {
}

function add_elements_computer_bonuses() {
}


function remove_elements_computer_bonuses() {
}

function add_elements_phone_bonuses() {
}


function remove_elements_phone_bonuses() {
}

function init_bonuses() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		$('.bonuses').get(0).mobile = true;
		add_elements_phone_bonuses();
		init_phone_slider('.bonuses > ul');
	}
}

function resize_bonuses() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.bonuses').get(0).mobile == false) {
			$('.bonuses').get(0).mobile = true;
			remove_elements_computer_bonuses();
			add_elements_phone_bonuses();
			init_phone_slider('.bonuses > ul');
		} else if($('.bonuses').get(0).mobile == true) {
			update_phone_slider('.bonuses > ul');
		}
	} else {
		if($('.bonuses').get(0).mobile == true) {
			$('.bonuses').get(0).mobile = false;
			remove_elements_phone_bonuses();
			delete_phone_slider('.bonuses > ul');
			add_elements_computer_bonuses();
		}
	}

}
