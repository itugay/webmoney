// Generated by CoffeeScript 1.6.3
var Deposition, List, Operation, OperationList, Payment, _ref, _ref1, _ref2,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

List = require('./list');

Operation = (function() {
  function Operation() {}

  return Operation;

})();

Payment = (function(_super) {
  __extends(Payment, _super);

  function Payment() {
    _ref = Payment.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Payment.prototype.process = function(callback) {
    this._service.createOperation(this.data, function() {
      if (typeof callback === "function") {
        callback(null);
      }
      return void 0;
    });
    return this;
  };

  return Payment;

})(Operation);

Deposition = (function(_super) {
  __extends(Deposition, _super);

  function Deposition() {
    _ref1 = Deposition.__super__.constructor.apply(this, arguments);
    return _ref1;
  }

  Deposition.prototype.finish = function(code, callback) {
    this._service.finishOperation({
      wmtranid: this._id,
      pcode: code
    }, function(error) {
      if (typeof callback === "function") {
        callback(null);
      }
      return void 0;
    });
    return this;
  };

  Deposition.prototype.reject = function(callback) {
    this._service.rejectOperation({
      wmtranid: this._id
    }, function(error) {
      if (typeof callback === "function") {
        callback(null);
      }
      return void 0;
    });
    return this;
  };

  Deposition.prototype.reverse = function(amount, callback) {
    this._service.rejectOperation({
      inwmtranid: this._id,
      amount: amount
    }, function(error) {
      if (typeof callback === "function") {
        callback(null);
      }
      return void 0;
    });
    return this;
  };

  return Deposition;

})(Operation);

OperationList = (function(_super) {
  __extends(OperationList, _super);

  function OperationList() {
    _ref2 = OperationList.__super__.constructor.apply(this, arguments);
    return _ref2;
  }

  OperationList.prototype.toArray = function(callback) {
    this._service.operations({
      purse: this.purse
    }, function(error, list) {
      if (typeof callback === "function") {
        callback(null);
      }
      return void 0;
    });
    return this;
  };

  return OperationList;

})(List);

module.exports = Operation;