'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {

    $scope.appendDivToElement = function(markup) {
        return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    }

    $scope.evaluateParseExpression = function(){
        debugger
        if ($scope.parseExpression) {
            var fn = $parse($scope.parseExpression);
            $scope.parseExpressionResult = fn();
        }
    }

});