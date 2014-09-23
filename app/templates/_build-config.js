({
  mainConfigFile: './requirejs.conf.js'
  , baseUrl: './'
  , name: 'src/js/main-view'
  , out: 'dist/<%= _.slugify(name) %>.js'
  , paths: {
    jquery: 'empty:'
    , lodash: 'empty:'
    , backbone: 'empty:'
    , 'nls/i18n': 'empty:'
    , moment: 'empty:'
    , 'livefyre-bootstrap': 'empty:'
  }
  , inlineText: true
  , optimize: 'uglify2'
  , generateSourceMaps: true
  , preserveLicenseComments: false
  , cjsTranslate: true
  , stubModules: ['text', 'hgn', 'css']
})