'use strict';

describe('EventListController', function() {

    var $controllerConstructor;
    var scope;
    var mockEventData;

    beforeEach(module("eventsApp"));
    beforeEach(inject(function($controller, $rootScope){
        // debugger
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function() {} });
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function() {
        //debugger
        var mockEvents = {};
          debugger
        mockEventData.getAllEvents.returns(mockEvents);
        $controllerConstructor("EventListController", {'$scope': scope, eventData: mockEventData });
        expect(scope.events).toBe(mockEvents);
    });

});