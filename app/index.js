'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LfProjectGenerator = module.exports = function LfProjectGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LfProjectGenerator, yeoman.generators.Base);

LfProjectGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'name'
      , message: 'What is the project name?'
    }
    , {
      name: 'desc'
      , message: 'Describe the project:'
    }
  ];

  this.prompt(prompts, function (props) {
    this.name = props.name;
    this.desc = props.desc;

    cb();
  }.bind(this));
};

LfProjectGenerator.prototype.app = function app() {
  this.copy('MakeFile', 'Makefile');
  this.mkdir('bin');
  this.template('_server.js', 'bin/server.js');


  this.mkdir('dev');
  this.mkdir('dev/css');
};


LfProjectGenerator.prototype.srcFiles = function srcFiles() {
  this.mkdir('src');
  this.mkdir('src/images');
  this.mkdir('src/js');
  this.mkdir('src/less');
  this.mkdir('src/templates');

  this.copy('_main.less', 'src/less/main.less');
  this.copy('mixins.less', 'src/less/mixins.less');
  this.copy('variables.less', 'src/less/variables.less');

  this.copy('_main-view.js', 'src/js/main-view.js');
  this.copy('helloworld.handlebars', 'src/templates/helloworld.handlebars');
  this.copy('polyfill.js', 'src/js/polyfill.js');
};

LfProjectGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('_jshintrc', '.jshintrc');
  this.copy('_gitignore', '.gitignore');
  this.template('_README.md', 'README.md');
  this.template('_requirejs.conf.js', 'requirejs.conf.js');
};

LfProjectGenerator.prototype.testFiles = function testFiles() {
  this.mkdir('tests');
  this.mkdir('tests/fixtures');
  this.mkdir('tests/spec');

  this.copy('tests-main.js', 'tests/tests-main.js');
  this.copy('karma.conf.js', 'karma.conf.js');
  this.copy('helloSpec.js', 'tests/spec/helloSpec.js');
};

LfProjectGenerator.prototype.nlsFiles = function nlsFiles() {
  this.mkdir('nls');

  this.copy('root.js', 'nls/root.js');
  this.copy('i18n.js', 'nls/i18n.js');
};

LfProjectGenerator.prototype.sampleFiles = function sampleFiles() {
  this.mkdir('sample');
  this.template('_sample.html', 'sample/sample.html');
  this.copy('sample-main.js', 'sample/sample-main.js');
};

LfProjectGenerator.prototype.package = function nlsFiles() {
  this.copy('r.js', 'r.js');
  this.copy('_build-config.js', 'build-config.js');
  this.copy('build.sh', 'bin/build.sh');
};