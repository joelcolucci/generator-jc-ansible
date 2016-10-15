'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the posh ' + chalk.red('generator-jc-ansible') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    // Copy Ansible host template files
    this.fs.copy(
      this.templatePath('development'),
      this.destinationPath('development')
    );

    this.fs.copy(
      this.templatePath('staging'),
      this.destinationPath('staging')
    );

    this.fs.copy(
      this.templatePath('production'),
      this.destinationPath('production')
    );

  },

  install: function () {
    this.installDependencies();
  }
});
