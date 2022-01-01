'use strict';

eventsApp.directive('dateKeys', function() {

    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
          debugger
          element.on('keydown', function(event) {
             if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeyCode(event.keyCode)){
                 return true;
             }
             else {
                 return false;
             }
          });
      }
    };

    function isNumericKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
        || (event.keyCode >= 96 && event.keyCode <= 105);
    }

    function isForwardSlashKeyCode(keyCode) {
        return event.keyCode == 191;
    }

    function isNavigationKeyCode(keyCode) {
        switch (keyCode){
            case 8:
            case 35:
            case 36:
            case 37:
            case 38:
            case 40:
            case 45:
            case 46:
                return true;
            default:
                return false;
        }
    }


});