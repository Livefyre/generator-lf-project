/*global require, module */

var root = require('i18n!nls/root');
var Handlebars = require('Handlebars');

// Translate str, if str is not in the translation returns __str__ instead.
// [ignoredFailed] if true, it just returns str if there is no translation. defaults to false.
function translate(str, ignoreFailed) {
  ignoreFailed = ignoreFailed || false;
  var translation = root[str];

  // if we don't ignore failures, then mark the str
  if (!translation && !ignoreFailed) {
    translation = '¿?¿' + str + '¿?¿';
  }

  // if we still can't translate, return the original
  if (!translation) {
    translation = str;
  }

  return translation;
}

// Register $ as a helper
//  {{$ "UserName" }}
//  {{$ name }}
Handlebars.registerHelper('$', function(string) {
  return translate(string);
});

module.exports = {
  translate: function(string, ignore, params) {
    var template;

    if (arguments.length === 2) {
      if (typeof ignore !== 'boolean') {
        params = ignore;
      }
    }

    if (typeof params === 'object') {
      // get the string with normal translations first. Ignore anything we don't understand yet.
      template = Handlebars.compile(translate(string, true));
      return template(params);
    }

    return translate(string, ignore);
  }
  , i18n: root
}