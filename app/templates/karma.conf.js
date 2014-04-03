// Karma configuration
// Generated on Mon Jan 13 2014 14:35:56 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'cajon', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'requirejs.conf.js',
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'nls/**/*.js', included: false},
      {pattern: 'src/templates/**/*', included: false},
      {pattern: 'tests/fixtures/*.js', included: false},
      {pattern: 'tests/spec/*.js', included: false},
      {pattern: 'tests/spec/**/*.js', included: false},
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'tests/tests-main.js', included: true}
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    //browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'Safari', 'PhantomJS'],
    //browsers: ['ChromeCanary', 'PhantomJS'],
    browsers: ['ChromeCanary', 'PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
