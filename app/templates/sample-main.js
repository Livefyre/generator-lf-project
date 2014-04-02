/*global require */
require([
  'jquery'
  , 'lodash'
  , 'backbone'
  , 'src/js/main-view'
  , 'livefyre-bootstrap'
  , 'nls/i18n'
  , 'src/js/polyfill'
  , 'css!lib/livefyre-bootstrap/dist/all.css'
  , 'css!lib/collection-manager/dist/all.css'
  , 'css!dev/css/main.css'
], function(
  $
  , _
  , Backbone
  , MainView
  , lfBootstrap
) {

  var main = new MainView({
    el: $('#content')
  });
});