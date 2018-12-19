"use strict";

function YandexMap(params) {

    let map = new ymaps.Map(params.id, {
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