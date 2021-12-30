'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngCookies'])
    .factory('myCache', function($cacheFactory){
        return $cacheFactory('myCache', { capacity: 3 });
    })
    .config(['$provide', function($provide) {

        //debugger

        // monkey-patches $templateCache to have a getKeys() method
        $provide.decorator('$templateCache', [
            '$delegate', function($delegate) {

            // debugger

                var keys = [], origPut = $delegate.put;

                $delegate.put = function(key, value) {
                    origPut(key, value);
                    debugger
                    keys.push(key);
                };

                // we would need cache.peek() to get all keys from $templateCache, but this features was never
                // integrated into Angular: https://github.com/angular/angular.js/pull/3760
                // please note: this is not feature complete, removing templates is NOT considered
                $delegate.getKeys = function() {
                    return keys;
                };

                return $delegate;
            }
        ]);
    }]);
