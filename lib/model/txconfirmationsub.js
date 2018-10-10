'use strict';

function TxConfirmationSub() {};

TxConfirmationSub.create = function(opts) {
  opts = opts || {};

  var x = new TxConfirmationSub();

  x.version = 1;
  x.createdOn = Math.floor(Date.now() / 1000);
  x.walletId = opts.walletId;
  x.FcashPayId = opts.FcashPayId;
  x.txid = opts.txid;
  x.isActive = true;
  return x;
};

TxConfirmationSub.fromObj = function(obj) {
  var x = new TxConfirmationSub();

  x.version = obj.version;
  x.createdOn = obj.createdOn;
  x.walletId = obj.walletId;
  x.FcashPayId = obj.FcashPayId;
  x.txid = obj.txid;
  x.isActive = obj.isActive;
  return x;
};


module.exports = TxConfirmationSub;
