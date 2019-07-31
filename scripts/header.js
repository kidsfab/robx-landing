function add_elements_header() {
	$('header a').click(function() {
		$('header').toggleClass('open');

		return true;
	});
}


function remove_elements_header() {
}

function init_header() {
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
		}
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
	} else {
		if($('header').get(0).mobile) {
			$('header').get(0).mobile = false;
			remove_elements_header();
		}
	}

}
