"use strict";

function GoogleMap(mapParams) {
    var _this = this;

    var map = new google.maps.Map(document.getElementById(mapParams.id), {
        center: mapParams.centerCoord,
        zoom: mapParams.zoom,
        zoomControl: mapParams.zoomControl,
        mapTypeControl: mapParams.mapTypeControl,
        streetViewControl: mapParams.streetViewControl,
        fullscreenControl: mapParams.fullscreenControl
    }),
        markerConfig = mapParams.marker;

    var infoWindow = null;

    if (mapParams.info_window) {
        infoWindow = new google.maps.InfoWindow({ map: map });
        infoWindow.close();
    }

    var markers = [];

    this.addPlace = function (params) {
        var _loop = function _loop(i) {
            window.setTimeout(function () {

                _this.addMarker(params[i]);
                _this.addMarkerListeners({ index: i, infoWindowContent: params[i].infoWindowContent });
            }, 500 * (i + 1));
        };

        for (var i = 0; i < params.length; i++) {
            _loop(i);
        }
    };
    this.addMarker = function (params) {

        markers.push(new google.maps.Marker({
            position: params.position,
            animation: markerConfig.animation,
            icon: markerConfig.icon,
            title: params.name,
            map: map
        }));
    };
    this.addMarkerListeners = function (params) {

        markers[params.index].addListener('click', function () {
            map.setZoom(mapParams.mapZoomMarkerClick);
            map.setCenter(this.getPosition());

            if (infoWindow !== null && params.infoWindowContent !== undefined) {
                infoWindow.close();
                infoWindow.open(map, this);
                infoWindow.setContent(params.infoWindowContent);
            }

            if (this.getAnimation() !== null) {
                this.setAnimation(null);
            } else {
                this.setAnimation(google.maps.Animation.BOUNCE);
            }

            this.setAnimation(google.maps.Animation.BOUNCE);
        });
        markers[params.index].addListener('rightclick', function () {

            if (infoWindow !== null) {
                infoWindow.close();
            }
            map.setZoom(mapParams.zoom);
            map.setCenter(this.getPosition());
        });
    };
    this.addControl = function (params) {

        var controls = document.createElement('div');

        controls.classList.add(params.class);
        controls.innerHTML = params.content;

        map.controls[google.maps.ControlPosition[params.position]].push(controls);
    };
    this.clearMarkers = function () {

        for (var i = 0; i < markers.length; i++) {

            markers[i].setMap(null);
        }
        markers = [];
    };

    /** открываем функции и переменные, назначая их свойствам объекта */
    return {
        addControl: this.addControl,
        addPlace: this.addPlace,
        clearMarkers: this.clearMarkers
    };
}
//# sourceMappingURL=google.js.map