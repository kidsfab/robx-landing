function initMap() {
    var locations = [{
        lat: 59.9701,
        lng: 30.3158
    }, {
        lat: 59.928,
        lng: 30.4255
    }, {
        lat: 59.8547,
        lng: 30.2715
    }, {
        lat: 60.0487,
        lng: 30.314
    }, {
        lat: 60.030,
        lng: 30.415
    }, {
        lat: 59.851,
        lng: 30.3014
    }, {
        lat: 60.009,
        lng: 30.254
    }];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: locations[0],
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
        }
    });




    var marker0 = new google.maps.Marker({
        position: locations[0],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Класс на Медиков (третий этаж, налево)'
    });
    var marker1 = new google.maps.Marker({
        position: locations[1],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Класс на Заневском (школа)'
    });
    var marker2 = new google.maps.Marker({
        position: locations[2],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Класс на Трамвайном '
    });
    var marker3 = new google.maps.Marker({
        position: locations[3],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Выборгское шоссе'
    });
    var marker4 = new google.maps.Marker({
        position: locations[4],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Класс на Гражданском проспекте'
    });
    var marker5 = new google.maps.Marker({
        position: locations[5],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Класс на Ленинском проспекте'
    });
    var marker5 = new google.maps.Marker({
        position: locations[6],
        map: map,
        icon: 'icons/location-small.png',
        title: 'Класс на Комендантском проспекте'
    });

}
