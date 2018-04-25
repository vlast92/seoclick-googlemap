var map, markerPath = '/modules/mod_seoclick_googlemap/assets/marker/red.png',
    places = [
        ['Барановичская горрайинспекция',
            53.135690,
            26.012979,
            '<div class="markerContent">' +
            '225409 Барановичская горрайинспекция <br>' +
            'г. Барановичи, ул. Красноармейская 6<br>' +
            'E-mail: <a href="mailto:nature%40brest.by">nature@brest.by</a><br>' +
            'тел. 8-01634<br>' +
            '</div>'],
        ['Березовская райинспекция',
            52.531918,
            24.973049,
            '<div class="markerContent">' +
            '225210 Березовская райинспекция <br>' +
            'г. Береза, ул. Пушкина, 23«Б»<br>' +
            'E-mail: <a href="mailto:ecobereza%40brest.by">ecobereza@brest.by</a><br>' +
            'тел. 8-01643<br>' +
            '</div>'],
        ['Брестская горрайинспекция',
            52.091071,
            23.690548,
            '<div class="markerContent">' +
            'Брестская городская и районная инспекция<br>' +
            '224030, г. Брест, пл. Свободы, 11А, 3-ий этаж <br>' +
            'Время работы:<br>' +
            'понедельник-пятница с 8.30 до17.30 (обед с 13.00 до 14.00)<br>' +
            'Выходной: суббота, воскресенье<br>' +
            'E-mail: <a href="mailto:inspr%40brest.by">inspr@brest.by</a>' +
            '</div>'],
        ['Ганцевичская райинспекция',
            52.761560,
            26.426100,
            '<div class="markerContent">' +
            '225440 Ганцевичская райинспекция <br>' +
            'г. Ганцевичи, ул. Октябрьская, 5«Б»<br>' +
            'E-mail: <a href="mailto:oosgnc%40brest.by">oosgnc@brest.by</a><br>' +
            'тел. 8-01646<br>' +
            '</div>'],
        ['Дрогичинская райинспекция',
            52.185385,
            25.159328,
            '<div class="markerContent">' +
            '225830 Дрогичинская райинспекция<br>' +
            'г. Дрогичин, ул. Ленина, 138<br>' +
            'E-mail: <a href="mailto:drgprir%40brest.by">drgprir@brest.by</a><br>' +
            'тел. 8-01644<br>' +
            '</div>'],
        ['Жабинковская райинспекция',
            52.189540,
            24.031241,
            '<div class="markerContent">' +
            '225110 Жабинковская райинспекция<br>' +
            'г. Жабинка, ул. Кирова 97<br>' +
            'E-mail: <a href="mailto:ohrana%40brest.by">ohrana@brest.by</a><br>' +
            'тел. 8-01641<br>' +
            '</div>'],
        ['Ивановская райинспекция',
            52.147702,
            25.534804,
            '<div class="markerContent">' +
            '225800 Ивановская райинспекция<br>' +
            'г. Иваново, пл. Октября 2<br>' +
            'E-mail: <a href="mailto:prirodaivn%40brest.by">prirodaivn@brest.by</a><br>' +
            'тел. 8-01652<br>' +
            '</div>'],
        ['Ивацевичкая райинспекция',
            52.687751,
            25.322189,
            '<div class="markerContent">' +
            '225295 Ивацевичкая райинспекция<br>' +
            'г. Ивацевичи, ул. Сикорского 5<br>' +
            'E-mail: <a href="mailto:oks%40brest.by">oks@brest.by</a><br>' +
            'тел. 8-01645<br>' +
            '</div>'],
        ['Каменецкая райинспекция',
            52.400657,
            23.822689,
            '<div class="markerContent">' +
            '225050 Каменецкая райинспекция<br>' +
            'г. Каменец, ул. Брестская 9<br>' +
            'E-mail: <a href="mailto:kmn_oos%40brest.by">kmn_oos@brest.by</a><br>' +
            'тел. 8-01631<br>' +
            '</div>'],
        ['Кобринская райинспекция',
            52.208761,
            24.355950,
            '<div class="markerContent">' +
            '225860 Кобринская райинспекция<br>' +
            'г. Кобрин, ул. Суворова 25<br>' +
            'E-mail: <a href="mailto:prioos%40brest.by">prioos@brest.by</a><br>' +
            'тел. 8-01642<br>' +
            '</div>'],
        ['Лунинецкая райинспекция',
            52.260956,
            26.803230,
            '<div class="markerContent">' +
            '225650 Лунинецкая райинспекция<br>' +
            'г. Лунинец, ул. Баженовой 1«А»<br>' +
            'E-mail: <a href="mailto:priroda%40brest.by">priroda@brest.by</a><br>' +
            'тел. 8-01647<br>' +
            '</div>'],
        ['Ляховичская райинспекция',
            53.037011,
            26.270188,
            '<div class="markerContent">' +
            '225370 Ляховичская райинспекция<br>' +
            'г. Ляховичи, ул. Южакова 19<br>' +
            'E-mail: <a href="mailto:prirodalhv%40brest.by">prirodalhv@brest.by</a><br>' +
            'тел. 8-01633<br>' +
            '</div>'],
        ['Малоритская райинспекция',
            51.791602,
            24.084321,
            '<div class="markerContent">' +
            '225910 Малоритская райинспекция<br>' +
            'г. Малорита, ул. Красноармейская 1<br>' +
            'E-mail: <a href="mailto:mrimp%40brest.by">mrimp@brest.by</a><br>' +
            'тел. 8-01651<br>' +
            '</div>'],
        ['Пинская горрайинспекция',
            52.116216,
            26.116751,
            '<div class="markerContent">' +
            '225710 Пинская горрайинспекция<br>' +
            'г. Пинск, ул.Ольховских 8, помещение 1<br>' +
            'E-mail: <a href="mailto:insppns%40brest.by">insppns@brest.by</a><br>' +
            'тел. 8-01653<br>' +
            '</div>'],
        ['Пружанская райинспекция',
            52.556667,
            24.464455,
            '<div class="markerContent">' +
            '225133 Пружанская райинспекция<br>' +
            'г. Пружаны, ул. Красноармейская 78<br>' +
            'E-mail: <a href="mailto:ecopruz%40brest.by">ecopruz@brest.by</a><br>' +
            'тел. 8-01632<br>' +
            '</div>'],
        ['Столинская райинспекция',
            51.890109,
            26.852144,
            '<div class="markerContent">' +
            '225510 Столинская райинспекция<br>' +
            'г. Столин, ул. Советская 77<br>' +
            'E-mail: <a href="mailto:stolin%40priroda.brest.by">stolin@priroda.brest.by</a><br>' +
            'тел. 8-01655<br>' +
            '</div>']
    ],
    all_markers = [], infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.090868, lng: 23.699472},
        scrollwheel: false,
        zoom: 15,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });

    var controls = document.createElement('div');
    controls.id = 'controls';
    controls.innerHTML = '<p>Левый клик по маркеру - приблизить</p><p>Правый клик по маркеру - отдалить</p>';
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controls);
    infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.close();
    clearMarkers();

    for (var i = 0; i < places.length; i++) {
        markers(i);
    }
}

function drop() {
    //document.getElementById("drop").disabled = true;
    map.setZoom(8);
    map.setCenter({lat: 52.598942, lng: 25.349901});
    clearMarkers();
    for (var i = 0; i < places.length; i++) {
        markers(i);
    }
}

function clearMarkers() {
    for (var i = 0; i < all_markers.length; i++) {
        all_markers[i].setMap(null);
    }
    all_markers = [];
}

function markers(i) {
    window.setTimeout(function () {
        var place = places[i];
        all_markers.push(new google.maps.Marker({
            position: {lat: place[1], lng: place[2]},
            animation: google.maps.Animation.DROP,
            map: map,
            icon: markerPath,
            title: place[0]
        }));
        if (i == places.length - 1) {
            //document.getElementById("drop").disabled = false;
        }
        all_markers[i].addListener('click', function () {

            map.setZoom(16);
            map.setCenter(all_markers[i].getPosition());

            infoWindow.close();
            infoWindow.open(map, all_markers[i]);
            infoWindow.setContent(place[3]);
        });
        all_markers[i].addListener('rightclick', function () {
            infoWindow.close();
            map.setZoom(7);
            map.setCenter(all_markers[i].getPosition());
        });
    }, 200 * i);
}