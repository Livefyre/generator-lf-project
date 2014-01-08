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
  this.mkdir('bin');
  this.copy('server.js', 'bin/server.js');
  this.copy('test', 'bin/test');

  this.mkdir('tests');
  this.mkdir('sample');

  this.mkdir('dev');
  this.mkdir('dev/css');
  // this.mkdir('dev/fonts');
  // this.copy('fycons.eot', 'dev/fonts/fycons.eot');
  // this.copy('fycons.svg', 'dev/fonts/fycons.svg');
  // this.copy('fycons.ttf', 'dev/fonts/fycons.ttf');
  // this.copty('fycons.woff', 'dev/fonts/fycons.woff');
};


LfProjectGenerator.prototype.srcFiles = function srcFiles() {
  this.mkdir('src');
  this.mkdir('src/images');
  this.mkdir('src/js');
  this.mkdir('src/less');
  this.copy('main.less', 'src/less/main.less');
  this.copy('mixins.less', 'src/less/mixins.less');
  this.mkdir('src/templates');
};

LfProjectGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('_jshintrc', '.jshintrc');
  this.copy('_gitignore', '.gitignore');
  this.template('_README.md', 'README.md');
};
