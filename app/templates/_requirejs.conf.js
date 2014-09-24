require.config({
  baseUrl: '/',
  paths: {
    jquery: 'lib/jquery/jquery'
    , lodash: 'lib/lodash/dist/lodash'
    , backbone: 'lib/backbone/backbone'
    , text: 'lib/requirejs-text/text'
    , i18n: 'lib/requirejs-i18n/i18n'
    , json: 'lib/requirejs-plugins/src/json'
    , css: 'lib/require-css/css'
    , Handlebars: 'lib/handlebars/handlebars'
    , hbars: 'lib/requirejs-handlebars/hbars'
    , moment: 'lib/moment/moment'
    , 'livefyre-bootstrap': 'lib/livefyre-bootstrap/dist/main'
  }
  , shim: {
    jquery: {
      exports: '$'
    }
    , lodash: {
      exports: '_'
    }
    , backbone: {
      deps: ['jquery', 'lodash']
    }
    , 'livefyre-bootstrap': {
      deps: ['jquery']
    }
    , hbars: {
      deps: ['i18n', 'Handlebars']
    }
  }
  , hbars: {
    extension: '.handlebars'
  }
  , map: {
    '*': {
      underscore: 'lodash'
    }
  }
});
