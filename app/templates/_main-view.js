/*global require, module */
'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

var template = require('hbars!src/templates/helloworld');

module.exports = Backbone.View.extend({
  className: '<%= name %>'
  , template: template
  , events: {

  }

  , initialize: function(opts) {
    var self = this;

    Backbone.trigger('Studio:Request:Permissions', function(permissions) {
      self.permissions = {
        domainOwner: permissions.get('domain_owner'),
        domainModerator: permissions.get('domain_moderator')
      };
    });

    Backbone.trigger('Studio:Request:Network', function(domain) {
      self.domain = domain;
      self.domain.isCustomNetwork = (self.domain.id !== 1);
      self.domain.livefyreHost = self.endpoints.zor;
    });

    Backbone.trigger('Studio:Request:Endpoints', function(endpoints) {
      self.tokens = endpoints.get('tokens');
      //TODO: See if studio can pass all endpoints like token
      self.endpoints = {
        admin: endpoints.get('admin'),
        bootstrap: endpoints.get('bootstrap'),
        quill: endpoints.get('quill'),
        search: endpoints.get('search'),
        zor: endpoints.get('zor'),
        domain: endpoints.get('domain'),
        environment: endpoints.get('environment'),
        socialproxy: endpoints.get('socialproxy')
      };
    });

    console.log('Everything looks good!');
  }

  , render: function() {
    var el = this.$el;
    var json = {
      world: 'World'
    }

    // templates support translations with {{$ value }}
    el.html(this.template(json));
    el.addClass(this.className);

    return this;
  }
});

module.exports.TITLE = '<%= _.slugify(name) %>';

// Setup custom url routes
module.exports.ROUTES = {
  '*': function(){
    this.render();
  }
};
