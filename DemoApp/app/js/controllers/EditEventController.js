'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope){

        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if (event == null){
                event = {};
            }
            if (event.name == null){
                return;
            }

            window.alert(`event ${event.name} saved!`);
        }
        $scope.cancelEdit = function(){
            window.location = "EventDetails.html";
        }
});