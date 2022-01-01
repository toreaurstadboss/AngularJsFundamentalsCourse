module.exports = function(config){
  config.set({

    basePath : '../app',

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular-mocks.js',
      '../test/lib/sinon-1.15.0.js',
      'js/**/*.js',
      '../test/unit/**/*.js'
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
      'karma-jasmine-html-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
