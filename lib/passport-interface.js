// Generated by CoffeeScript 1.6.3
var BaseService, PassportService, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

BaseService = require('./base');

PassportService = (function(_super) {
  __extends(PassportService, _super);

  function PassportService() {
    _ref = PassportService.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PassportService.DEFAULT_HOST = 'passport.webmoney.ru';

  PassportService.DEFAULT_HOST_1 = 'apipassport.webmoney.ru';

  return PassportService;

})(BaseService);

module.exports = PassportService;
