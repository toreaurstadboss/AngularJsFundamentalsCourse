eventsApp.factory('eventData', function ($http) {
    return {
        getEvent: function () {
            return $http({ method: 'GET', url: 'http://localhost:8000/data/event/1' });
        }
    };

});