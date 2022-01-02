module.exports = function(config){
  config.set({

    basePath : '../app',

    preprocessors: {
      '**/*.html': 'ng-html2js'
    },

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular-mocks.js',
      '../test/lib/sinon-1.15.0.js',
      'js/**/*.js',
      '../test/unit/**/*.js',
      'partials/directives/*.html'
    ],

    client: {
      clearContext: true
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    reporters: ['kjhtml'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
