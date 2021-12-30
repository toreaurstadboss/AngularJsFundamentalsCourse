'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $compile, $parse, $locale) {
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        $scope.myMoney = 1.32;

        // throw new Error('monkey error!');
});