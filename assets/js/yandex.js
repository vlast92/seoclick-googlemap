"use strict";

function YandexMap(params) {

    var map = new ymaps.Map(params.id, {
        center: params.centerCoord,
        zoom: params.zoom,
        controls: []
    });

    /** открываем функции и переменные, назначая их свойствам объекта */
    return {
        /*addControl: this.addControl,
        addPlace: this.addPlace,
        clearMarkers: this.clearMarkers*/
    };
}
//# sourceMappingURL=yandex.js.map