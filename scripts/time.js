$(function() {
    var today = new Date();
    var sunday = new Date();
    var days_left = 7 - today.getDay();
    sunday.setDate(days_left + today.getDate());
    sunday.setHours(23,59,59,0);

    var test = sunday - today;

    var hours = Math.floor(test / 3.6e+6);
    var minutes = Math.floor((test - hours * 3.6e+6) / 60000);
    var seconds = Math.floor((test - hours * 3.6e+6 - minutes * 60000) / 1000);

    if(minutes < 10) {
    	minutes = "0" + minutes;
    }
    if(seconds < 10) {
    	seconds = "0" + seconds;
    }
    var day_string;
    switch(days_left){
    	case 0: day_string = "всего ничего"; break;
    	case 1: day_string = "1 день"; break;
    	case 2:
    	case 3:
    	case 4: day_string = "4 дня"; break;
    	case 5:
    	case 6: day_string = "6 дней"; break;
    	case 7: day_string = "неделя"; break;
    	default: day_string = hours + ':' + minutes + ':' + seconds
    }
    $('.rest div').text(day_string);
});
