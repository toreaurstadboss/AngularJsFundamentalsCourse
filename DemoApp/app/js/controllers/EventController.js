'use strict';

eventsApp.controller('EventController', function EventController($scope, $log, $sce) {

    $scope.boolValue = true;

    $scope.mystyle = {color:'red',fontFamily:'Comic Sans MS', backgroundColor: 'moccasin'};

    $scope.buttonDisabled = true;

    $scope.sortOrder = '-upVoteCount';

    $scope.myclass = 'blue';

    $scope.eventDetail = {
        name: 'Angular Boot Camp',
        date :'1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: 'img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives masterclass',
                upVoteCount: 0,
                duration: 1,
                level: 'intermediate'
            },
            {
                name: 'Scopes for fun and profit',
                upVoteCount: 0,
                duration: 2,
                level: 'introductory'
            },
            {
                name: 'Well behaved controllers',
                upVoteCount: 0,
                duration: 1,
                level: 'advanced'
            }
        ]
    };

    $log.info('Inside EventController of AngularJs course for Pluralsight!. The time is now: ' + new Date());
    $log.warn($scope.eventDetail);

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }


    $scope.snippet = '<span style="color:red">hi there</span>';



})