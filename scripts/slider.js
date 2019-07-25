function init_phone_slider(name) {
	$(name).children().addClass('slide');

	$(name).append('<nav></nav>');
	for (var i = 0; i < $(name).children('.slide').length; i++) {
		$(name).children('nav').append('<div number = "' + i + '"></div>');
	}

	$(name).find('> nav div:first-child').addClass('current');

	$(name).attr('current_number', 0);

	$(name).children('.left').click(function() {
		$(name).attr('current_number', parseInt($(name).attr('current_number')) - 1);
		if (parseInt($(name).attr('current_number')) == 0) {
			$(name).attr('current_number', $(name).children('.slide').length - 1);
			go_to(name, $(name).children('.slide').length - 1, false);
		}
		go_to(name, parseInt($(name).attr('current_number')), true);
	});

	$(name).children('.right').click(function() {
		$(name).attr('current_number', parseInt($(name).attr('current_number')) + 1);
		if (parseInt($(name).attr('current_number'))  == $( ".galery img" ).length - 2) {
			$(name).attr('current_number', 2);
			go_to(name, 1, false);
		}
		go_to(name, parseInt($(name).attr('current_number')) , true);
	});

	$(name).find('> nav > div').click(function() {
		num = $(this).attr('number');
		if (parseInt($(name).attr('current_number')) != num) {
			$(name).attr('current_number', num);
			go_to(name, num, true);
		}
		return false;
	});

	$(name).on('touchstart', function(event) {
		this.touchstartx =  event.originalEvent.touches[0].pageX;
		this.touchstartx =  event.originalEvent.touches[0].pageX;
	});

	$(name).on('touchmove', function(event) {
		this.longTouch = false;
		setTimeout(function() {
			$(name).get(0).longTouch = true;
		}, 250);

		this.touchmovex =  event.originalEvent.touches[0].pageX;
		var sum_width = 0;
		for(var i = 0; i < parseInt($(name).attr('current_number')); i++) {
			sum_width += $($(name).children('.slide')[i]).outerWidth(true);
		}
		this.movex = sum_width + (this.touchstartx - this.touchmovex);
		$(name).children('.slide').css('left', -this.movex);
	});

	$(name).on('touchend', function(event) {
		var absMove = Math.abs(this.touchstartx - this.touchmovex);
		if (absMove > 3 * $(name).outerWidth(true) / 4 || this.longTouch === false) {
			var sum_width = 0;
			for(var i = 0; i < parseInt($(name).attr('current_number')); i++) {
				sum_width += $($(name).children('.slide')[i]).outerWidth(true);
			}

			if (this.movex > sum_width && parseInt($(name).attr('current_number')) < $(name).children('.slide').length - 1) {
				$(name).attr('current_number', parseInt($(name).attr('current_number')) + 1);
			} else if (this.movex < sum_width && parseInt($(name).attr('current_number')) > 0) {
				$(name).attr('current_number', parseInt($(name).attr('current_number')) - 1);
			}
		}
		go_to(name, parseInt($(name).attr('current_number')), true);

	})

	go_to(name, 0, false);
}

function go_to(name, num, animate) {
	$(name).children('.slide').removeClass('current');
	$($(name).children('.slide')[num]).addClass('current');
	$(name).find('> nav > div').removeClass('current');
	$(name).find('> nav > div[number = "' + num + '"]').addClass('current');

	var sum_width = 0;
	for (var i = 0; i < num; i++) {
		sum_width += $($(name).children('.slide')[i]).outerWidth(true);
	}

	var width = $(name).width();
	var shift = -sum_width;
	if (animate) {
		left = parseInt($(name).children('.slide').css('left'));
		$(name).children('.slide').animate({'left': '-='+ (left - shift)}, function() {});
	} else {
		$(name).children('.slide').css('left', shift);
	}
}

function update_phone_slider(name) {
	go_to(name, $(name).attr('current_number'), false);
}

function delete_phone_slider(name) {
	$(name).children('nav').remove();
	$(name).children('.left').remove();
	$(name).children('.right').remove();
	$(name).children('.additional').remove();

	$(name).children('').removeClass('slide');
	$(name).children('').removeClass('current');
}

function init_computer_slider(name, num) {
    $(name + ' > ul > li:first-child').addClass('current');

    var current = $(name + ' > ul > li:first-child');
    for (var i = 0; i < num; i++) {
        current = current.next();
    }
    current.css("opacity", 0.5);

	$(name + ' > h1').append('<div>' +
        '<a class = "left"></a><a class = "right"></a>' +
        '</div>');

	if($(name + ' > ul > li.current').nextAll().length < num) {
        $(name + ' > h1 a.right').css("opacity", "0.5");
	}

	if($(name + ' > ul > li.current').prevAll().length < num) {
		$(name + ' > h1 a.left').css("opacity", "0.5");
	}


	$(name + ' > h1 a.right').click(function() {
        if($(name + ' > ul > li.current').nextAll().length >= num) {

            $(name + ' > ul > li').css("opacity", 1);

            var current = $(name + ' > ul > li.current');
            for (var i = 0; i < num; i++) {
                current = current.next();
            }
            $(name + ' > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < num; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$(name + ' > ul li').css('left', "-=100%");

    		if($(name + ' > ul > li.current').nextAll().length < num) {
    			$(name + ' > h1 a.right').css("opacity", "0.5");
    		}

    		$(name + ' > h1 a.left').css("opacity", "1");
        }
	});

    $(name + ' > h1 a.left').click(function() {
        if($(name + ' > ul > li.current').prevAll().length >= num) {

            $(name + ' > ul > li').css("opacity", 1);

            var current = $(name + ' > ul > li.current');
            for (var i = 0; i < num; i++) {
                current = current.prev();
            }
            $(name + ' > ul > li.current').removeClass('current');
    		current.addClass('current');
            current.prev().css("opacity", 0.5);
            for (var i = 0; i < num; i++) {
                current = current.next();
            }
            current.css("opacity", 0.5);
    		$(name + ' > ul li').css('left', "+=100%");

    		if($(name + ' > ul > li.current').prevAll().length < num) {
    			$(name + ' > h1 a.left').css("opacity", "0.5");
    		}

    		$(name + ' > h1 a.right').css("opacity", "1");
        }
	});

    $(name + ' > ul, ' + name + ' > h1 div').css("visibility", "visible");
}

function delete_computer_slider(name) {
    $(name + ' > h1 > div').remove();
}
