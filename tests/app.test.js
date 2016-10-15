'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');


describe('generator-jc-ansible:app', function () {

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise();
  });

  it('creates host files', function () {
    assert.file([
      'production',
      'staging',
      'development'
    ]);
  });

  it('creates vanilla playbook files', function () {
    assert.file([
      'site.yml',
      'webservers.yml',
      'dbservers.yml'
    ]);
  });

});
