/*global requirejs */
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\/base\/tests\/spec/.test(file)) {
      tests.push(file);
    }

    if (/\/base\/tests\/fixtures/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    mainConfigFile: 'requirejs.conf.js',
    // Karma serves files from '/base'
    baseUrl: '/base/',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});