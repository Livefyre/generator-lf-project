({
  mainConfigFile: './requirejs.conf.js'
  , baseUrl: './'
  , name: '<%= _.slugify(name) %>'
  , out: 'dist/<%= _.slugify(name) %>.js'
  , paths: {
    '<%= _.slugify(name) %>': 'src/js/main-view'
    , jquery: 'empty:'
    , lodash: 'empty:'
    , backbone: 'empty:'
    , 'nls/i18n': 'empty:'
    , moment: 'empty:'
    , 'livefyre-bootstrap': 'empty:'
  }
  , inlineText: false
  , optimize: 'none'//, optimize: 'uglify2'
  , generateSourceMaps: true
  , preserveLicenseComments: false
  , cjsTranslate: true
  , stubModules: ['hgn', 'css']
  , onBuildRead: function(moduleName, path, contents) {
    switch (moduleName) {
      case 'Handlebars':
        contents = "define('Handlebars', [], function(require, exports, module) { "+ contents + " return Handlebars; });";
        break;
    }
    return contents;
  }
  // onBuildWrite is used to write the actual optimized file.
  , onBuildWrite: function(moduleName, path, contents) {
    switch (moduleName) {
      // Handlebars is an external dependency, so don't actually include it
      // onBuildRead included it so it could be used by hbars, this is what we actually
      // write to the file.
      case 'Handlebars':
        contents = '';
        break;
    }
    return contents;
  }
})