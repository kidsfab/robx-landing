function add_elements_register() {
}


function remove_elements_register() {
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function updateRequired() {
	if ($(".form .required input").filter(function() {
		if($(this).val() == '') {
			return true;
		} else {
			return false;
		}
	}).length == 0) {
		$('.form input[type=submit]').css('opacity', '1').prop( "disabled", false);
	} else {
		$('.form input[type=submit]').css('opacity', '0.5').prop( "disabled", true);
	}
}

function focusDate() {
	$(this).attr('type', 'date');
}

function focusoutDate() {
	$(this).attr('type', 'text');
}

function init_register() {
    if(window.matchMedia('(max-width: 800px)').matches) {
		$('.register').get(0).mobile = true;
		init_phone_slider('.register > .background-images');
	} else {
		$('.register').get(0).mobile = false;
	}

	$( ".form .required input" ).change(updateRequired).on('input', updateRequired);
	$(".form .mobile-phone input").mask("+7 (999) 9999999");
	$('.form .date input').focus(focusDate).focusout(focusoutDate);

	$('.form form').submit(function() {
		var $form = $(this);
		var data =  $form.serializeObject();

		if(findGetParameter('utm_medium') !== null) {
			data['medium'] = findGetParameter('utm_medium')
		}
		if(findGetParameter('utm_source') !== null) {
			data['source'] = findGetParameter('utm_source')
		}
		if(findGetParameter('utm_campaign') !== null) {
			data['campaign'] = findGetParameter('utm_campaign')
		}
		if(findGetParameter('utm_term') !== null) {
			data['term'] = findGetParameter('utm_term')
		}
		if(findGetParameter('utm_content') !== null) {
			data['content'] = findGetParameter('utm_content')
		}

		data['phone'] = data['phone'].replace(/(\(|\)|\s)/g, '');



		$.ajax({
			url: $form.attr('action'),
			data: data,
			type: "POST",
			dataType: 'xml',
			statusCode: {
				0: function (){
					$('.form').addClass('sent');
          $('.form .notification').text('Ошибка.');
          console.log("Not sent");
				},
				200: function (){
					$('.form').addClass('sent');
          console.log("Sent");
 				}
			}
		});
		return false;
   	});
}

function resize_register() {

    if(window.matchMedia('(max-width: 800px)').matches) {
		if($('.register').get(0).mobile == false) {
			$('.register').get(0).mobile = true;
			init_phone_slider('.register > .background-images');
		} else if($('.register').get(0).mobile == true) {
			update_phone_slider('.register > .background-images');
		}
	} else {
		if($('.register').get(0).mobile == true) {
			$('.register').get(0).mobile = false;
			delete_phone_slider('.register > .background-images');
		}
	}
}
