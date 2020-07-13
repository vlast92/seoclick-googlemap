"use strict";

function YandexMap(params) {

    var map = new ymaps.Map(params.id, {
        center: params.centerCoord,
        zoom: params.zoom,
        controls: []
    });

    if (!params.wheel_zoom) map.behaviors.disable('scrollZoom');

    this.addPlace = function (params) {

        for (var i = 0; i < params.length; i++) {

            var icon = params[i].icon ? params[i].icon : {},
                placemark = new ymaps.Placemark([params[i].position.lat, params[i].position.lng], {
                hintContent: params[i].name,
                balloonContent: params[i].infoWindowContent
            }, icon);
            map.geoObjects.add(placemark);
        }
    };

    this.addControl = function (params) {

        switch (params) {
            case "search_control":
                map.controls.add(new ymaps.control.SearchControl({
                    options: {
                        // Пусть элемент управления будет
                        // в виде поисковой строки.
                        size: 'large',
                        // Включим возможность искать
                        // не только топонимы, но и организации.
                        provider: 'yandex#search'
                    }
                }));
                break;
            default:
                map.controls.add(params);
        }
    };

    /** открываем функции и переменные, назначая их свойствам объекта */
    return {
        addControl: this.addControl,
        addPlace: this.addPlace /*,
                                clearMarkers: this.clearMarkers*/
    };
}
//# sourceMappingURL=yandex.js.map