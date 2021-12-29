'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch (duration){
            case 1:
                return "Half hour";
            case 2:
                return "1 hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }

});

eventsApp
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);