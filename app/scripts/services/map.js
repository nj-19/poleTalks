'use strict';

  angular.module("poleTechApp").service('Map', function() {

    this.init = function() {
        var options = {
            center: new google.maps.LatLng(11.321973, 75.935386),
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},
            disableDefaultUI: true    
        };
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
        this.circles = [];
    };
   
});