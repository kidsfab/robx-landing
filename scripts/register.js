var backgroundImageInterval;
var currentSlide = 1;
var slidesNumber;
function nextSlide() {
    var imagePath;
    if ($("main > .register > nav > .current").is(":last-child")) {
        $("main > .register > nav > .current").removeClass("current");
        imagePath = $("main > .register > nav > div:first-child").addClass("current").attr("src");
    } else {
        imagePath = $("main > .register > nav > .current").removeClass("current").next().addClass("current").attr("src");
    }
    $("main > .register > .background-images").stop().animate({opacity: 0.1},1000,function(){
        $(this).css({'background-image': "url('" + imagePath + "')"})
               .animate({opacity: 1},{duration:3000});
    });
}

function init_computer_register() {
    slidesNumber = $("main > .register > .background-images > img").length;
    $("main > .register > .background-images").before('<nav></nav>');
	for (var i = 0; i < $("main > .register > .background-images img").length; i++) {
		$("main > .register > nav").append(
            '<div src = "' +
            $($("main > .register > .background-images > img")[i]).attr("src") +
            '"></div>'
        );
	}
    $("main > .register > nav > div:first-child").addClass("current");

    $("main > .register > nav > div").click(function(){
        $("main > .register > nav > .current").removeClass("current");
        var imagePath = $( this ).addClass("current").attr("src");
        $("main > .register > .background-images").stop().animate({opacity: 0.1}, 1000, function(){
            $(this).css({'background-image': "url('" + imagePath + "')"})
                   .animate({opacity: 1},{duration:3000});
        });
        clearInterval(backgroundImageInterval);
        backgroundImageInterval = setInterval(nextSlide, 10000);
    });

    backgroundImageInterval = setInterval(nextSlide, 10000);
}

function delete_computer_register() {
    $("main > .register > nav").remove();
    $("main > .register > .background-images").attr("style", "");
	clearInterval(backgroundImageInterval);
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
        init_computer_register();
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
            delete_computer_register();
		} else if($('.register').get(0).mobile == true) {
			update_phone_slider('.register > .background-images');
		}
	} else {
		if($('.register').get(0).mobile == true) {
			$('.register').get(0).mobile = false;
			delete_phone_slider('.register > .background-images');
            init_computer_register();
		}
	}
}
