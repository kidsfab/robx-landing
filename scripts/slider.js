function init_computer_slider(name) {
	$(name).children('*:nth-child(1)')
		.before($(name).children('*:nth-last-child(2)').clone().addClass('additional'))
		.before($(name).children('*:nth-last-child(1)').clone().addClass('additional'));

	$(name).children('*:nth-last-child(1)')
		.after($(name).children('*:nth-child(4)').clone().addClass('additional'))
		.after($(name).children('*:nth-child(3)').clone().addClass('additional'));

	$(name).children().addClass('slide');

	$(name).prepend('<a class = "left"></a>');
	$(name).prepend('<a class = "right"></a>');

	$(name).append('<nav></nav>');
	for (var i = 2; i < $(name).children('.slide').length - 2; i++) {
		$(name).children('nav').append('<div number = "' + i + '"></div>');
	}

	$(name).find('> nav div:first-child').addClass('current');
	$(name).find('> nav').css('left', ($(name).width() - $(name).children('nav').width()) / 2);

	$(name).attr('current_number', 2);

	$(name).children('.left').click(function () {
		$(name).attr('current_number', parseInt($(name).attr('current_number')) - 1);
		if (parseInt($(name).attr('current_number')) == 1) {
			$(name).attr('current_number', $(name).children('.slide').length - 3);
			go_to(name, $(name).children('.slide').length - 2, false);
		}
		go_to(name, parseInt($(name).attr('current_number')), true);
	});

	$(name).children('.right').click(function () {
		$(name).attr('current_number', parseInt($(name).attr('current_number')) + 1);
		if (parseInt($(name).attr('current_number')) == $(".gallery img").length - 2) {
			$(name).attr('current_number', 2);
			go_to(name, 1, false);
		}
		go_to(name, parseInt($(name).attr('current_number')), true);
	});

	$(name).find('> nav > div').click(function () {
		num = $(this).attr('number');
		if (parseInt($(name).attr('current_number')) != num) {
			$(name).attr('current_number', num);
			go_to(name, num, true);
		}
		return false;
	});

	$(name).on('touchstart', function (event) {
		this.touchstartx = event.originalEvent.touches[0].pageX;
		this.touchstartx = event.originalEvent.touches[0].pageX;
	});

	$(name).on('touchmove', function (event) {
		this.longTouch = false;
		setTimeout(function () {
			$(name).get(0).longTouch = true;
		}, 250);

		this.touchmovex = event.originalEvent.touches[0].pageX;
		var sum_width = 0;
		for (var i = 0; i < parseInt($(name).attr('current_number')); i++) {
			sum_width += $($(name).children('.slide')[i]).outerWidth();
		}
		this.movex = sum_width + (this.touchstartx - this.touchmovex);
		$(name).children('.slide').css('left', -this.movex);
	});

	$(name).on('touchend', function (event) {
		var absMove = Math.abs(this.touchstartx - this.touchmovex);
		if (absMove > 3 * $(name).outerWidth() / 4 || this.longTouch === false) {
			var sum_width = 0;
			for (var i = 0; i < parseInt($(name).attr('current_number')); i++) {
				sum_width += $($(name).children('.slide')[i]).outerWidth();
			}

			if (this.movex > sum_width && parseInt($(name).attr('current_number')) < $(name).children('.slide').length - 3) {
				$(name).attr('current_number', parseInt($(name).attr('current_number')) + 1);
			} else if (this.movex < sum_width && parseInt($(name).attr('current_number')) > 2) {
				$(name).attr('current_number', parseInt($(name).attr('current_number')) - 1);
			}
		}
		go_to(name, parseInt($(name).attr('current_number')), true);

	})

	go_to(name, 2, false);
}

function go_to(name, num, animate) {
	$(name).children('.slide').removeClass('current');
	$($(name).children('.slide')[num]).addClass('current');
	$(name).find('> nav > div').removeClass('current');
	$(name).find('> nav > div[number = "' + num + '"]').addClass('current');

	var sum_width = 0;
	for (var i = 0; i < num; i++) {
		sum_width += $($(name).children('.slide')[i]).outerWidth();
	}

	var width = $(name).width();
	var shift = (width - $(name).children('.slide.current').outerWidth()) / 2 - sum_width;
	if (animate) {
		left = parseInt($(name).children('.slide').css('left'));
		$(name).children('.slide').animate({
			'left': '-=' + (left - shift)
		}, function () {});
	} else {
		$(name).children('.slide').css('left', shift);
	}
}


function update_computer_slider(name) {
	go_to(name, $(name).attr('current_number'), false);
	$(name).find('> nav').css('left', ($(name).width() - $(name).children('nav').width()) / 2);
}

function delete_slider(name) {
	$(name).children('nav').remove();
	$(name).children('.left').remove();
	$(name).children('.right').remove();
	$(name).children('.additional').remove();

	$(name).children('').removeClass('slide');
	$(name).children('').removeClass('current');
}