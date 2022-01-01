'use strict';

eventsApp.directive('greeting', function() {
   return {
     restrict: 'E',
     replace: true,
     transclude: true,
     template: "<button class='btn' ng-click='sayHello()'>Say hello</button><div ng-transclude></div>",
     controller: function($scope) {
         var greetings = ['hello'];
         $scope.sayHello = function() {
             alert(greetings.join());
         };

         this.addGreeting = function(greeting) {
             greetings.push(greeting);
         }
     }
   };
}).directive('finnish', function() {
    return {
        restrict: 'A',
        priority:-1,
        terminal: true,
        require: 'greeting',
        link: function(scope, element, attrs, controller) {
            controller.addGreeting('hei');

        }
    }
}).directive('hindi', function() {
    return {
        restrict: 'A',
        require: 'greeting',
        priority: -2,
        link: function(scope, element, attr, controller) {
            controller.addGreeting('ugga bugga');
        }
    }
})

