'use strict';

eventsApp.controller('EventController', function EventController($scope, $log, $timeout, $anchorScroll, eventData) {

    $scope.boolValue = true;

    $scope.mystyle = {color:'red',fontFamily:'Comic Sans MS', backgroundColor: 'moccasin'};

    $scope.buttonDisabled = true;

    $scope.sortOrder = '-upVoteCount';

    $scope.myclass = 'blue';

    eventData.getEvent()
        .success(function(event) { $scope.eventDetail = event; })
        .error(function(data, status, headers, config) {
            $log.warn(data, status, headers(), config);
        });

    $log.info('Inside EventController of AngularJs course for Pluralsight!. The time is now: ' + new Date());
    $log.warn($scope.eventDetail);

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

    $scope.scrollToSession = function() {
        $anchorScroll();
    }

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }


    $scope.snippet = '<span style="color:red">hi there</span>';



})