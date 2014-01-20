// Generated by CoffeeScript 1.6.3
var TransferInterface;

TransferInterface = {
  prepayment1: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.pspname', 'payment.pspcode', 'payment.pspnumber', 'payment.pspdate', 'payment.purse', 'payment.price']
    },
    output: {
      container: 'payment'
    }
  },
  payment1: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.$id', 'payment.$test', 'payment.pspname', 'payment.pspcode', 'payment.pspnumber', 'payment.pspdate', 'payment.purse', 'payment.price', 'payment.cheque', 'payment.date', 'payment.kiosk_id']
    },
    output: {
      container: 'payment'
    }
  },
  history: {
    input: {
      order: ['wmid', 'datestart', 'dateend']
    },
    output: {
      container: 'history'
    }
  },
  PrePayment1: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.$currency', 'payment.purse', 'payment.phone', 'payment.price']
    },
    output: {
      container: 'payment'
    }
  },
  Payment1: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.$id', 'payment.$currency', 'payment.$test', 'payment.purse', 'payment.phone', 'payment.price', 'payment.date', 'payment.point']
    },
    output: {
      container: 'payment'
    }
  },
  History1: {
    input: {
      order: ['wmid', 'datestart', 'dateend', 'wmtranid']
    },
    output: {
      container: 'history'
    }
  },
  RetPayment1: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.remark', 'payment.wmtranid']
    },
    output: {
      container: 'payment'
    }
  },
  PrePayment2: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.$currency', 'payment.purse', 'payment.price']
    },
    output: {
      container: 'payment'
    }
  },
  Payment2: {
    input: {
      container: 'payment',
      order: ['wmid', 'payment.$id', 'payment.$currency', 'payment.$test', 'payment.purse', 'payment.price', 'payment.date', 'payment.point']
    },
    output: {
      container: 'payment'
    }
  }
};

module.exports = TransferInterface;