'use strict';

eventsApp.directive('eventThumbnail' ,function($compile){
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/eventThumbnail.html',
        replace: true,
        scope: {
            event: "=event"
        }
    };

});