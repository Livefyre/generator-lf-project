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

  var prompts = [{
    name: 'projectName',
    message: 'What is the project name?',
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;

    cb();
  }.bind(this));
};

LfProjectGenerator.prototype.app = function app() {
  this.mkdir('bin');
  this.mkdir('src');
  this.mkdir('tests');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('_jshint', '.jshint');
  this.copy('_gitignore', '.gitignore');
  this.copy('server.js', 'bin/server.js');
  this.copy('test', 'bin/test');
};

LfProjectGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
