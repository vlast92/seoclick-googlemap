"use strict";

function GoogleMap(params){

    const map = new google.maps.Map(document.getElementById(params.id), {
        center: params.centerCoord,
        zoom: params.zoom,
        zoomControl: params.zoomControl,
        mapTypeControl: params.mapTypeControl,
        streetViewControl: params.streetViewControl,
        fullscreenControl: params.fullscreenControl
    }),
    markerConfig = params.marker;

    let infoWindow = null;

    if(params.info_window) {
        infoWindow = new google.maps.InfoWindow({map: map});
        infoWindow.close();
    }

    let markers = [];

    this.addPlace = (params) => {

        for(let i = 0; i < params.length; i++){
            window.setTimeout(()=>{

                this.addMarker(params[i]);
                this.addMarkerListeners({index: i, infoWindowContent: params[i].infoWindowContent});
            }, 500 * (i + 1));
        }
    };
    this.addMarker = (params) => {

        markers.push(new google.maps.Marker({
            position: params.position,
            animation: markerConfig.animation,
            icon: markerConfig.icon,
            title: params.name,
            map: map
        }));
    };
    this.addMarkerListeners = (params) => {

        markers[params.index].addListener('click', function () {
            map.setZoom(16);
            map.setCenter(this.getPosition());

            if(infoWindow !== null && params.infoWindowContent !== undefined){
                console.log("params.infoWindowContent ", params.infoWindowContent)
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

            if(infoWindow !== null){
                infoWindow.close();
            }
            map.setZoom(7);
            map.setCenter(this.getPosition());
        });
    };
    this.addControl = (params) => {

        let controls = document.createElement('div');

        controls.classList.add(params.class);
        controls.innerHTML = params.content;

        map.controls[google.maps.ControlPosition[params.position]].push(controls);
    };
    this.clearMarkers = () => {

        for(let i = 0; i < markers.length; i++){

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