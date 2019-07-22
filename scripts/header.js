function add_elements_header() {
	$('header a').click(function() {
		$('header').toggleClass('open');
	
		return true;
	});
}


function remove_elements_header() {
}

function init_header() {
	$('header').each (function () {
		var node = $(this);
		node.html (node.find ('> *').detach ());
	});

	if(window.matchMedia('(max-width: 800px)').matches) {
		$('header').get(0).mobile = true;
		add_elements_header();
	} else {
		$('header').get(0).mobile = false;
	}
}

function resize_header() {
	if(window.matchMedia('(max-width: 800px)').matches) {
		if(!$('header').get(0).mobile) { 
			$('header').get(0).mobile = true;
			add_elements_header();
		} else {
		}
	} else {
		if($('header').get(0).mobile) { 
			$('header').get(0).mobile = false;
			remove_elements_header();
		}
	}

}
