eventsApp.factory('eventData', function ($http, $log) {
    return {
        getEvent: function (successcb) {
            $http({
                method: 'GET',
                url: 'http://localhost:8000/data/event/1'
            }).success(function (data, status, headers, config) {
                successcb(data);
            }).error(function (data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });
        }
    };

});