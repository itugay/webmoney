# WebMoney merchant service
#
# August, 2013 year
#
# Author - Vladimir Andreev
#
# E-Mail: volodya@netfolder.ru

# Supported interfaces: X18, X20 - X22

# Required modules

BaseService = require('./base')

# WebMoney merchant service

class MerchantService extends BaseService
	# Default hosts for requests

	@DEFAULT_HOST: 'merchant.webmoney.ru'	# Host for md5 hash and secret key auth
	@CLASIC_HOST: 'merchant.webmoney.ru'	# Host for classic auth
	@LIGHT_HOST: 'merchant.wmtransfer.com'	# Host for light auth

	# Method definitions

	@METHODS:
		TransGet:
			sign: true
			md5: true
			secret: true
			order: [
				'wmid'
				'lmi_payee_purse'
				'lmi_payment_no'
			]
		TransRequest:
			sign: true
			md5: true
			secret: true
			json: true
			order: [
				'wmid'
				'lmi_payee_purse'
				'lmi_payment_no'
				'lmi_clientnumber'
				'lmi_clientnumber_type'
			]
		TransConfirm:
			sign: true
			md5: true
			secret: true
			json: true
			order: [
				'wmid'
				'lmi_payee_purse'
				'lmi_wminvoiceid'
				'lmi_clientnumber_code'
			]
		TrustRequest:
			sign: true
			light: true
			order: [
				'wmid'
				'lmi_payee_purse'
				'lmi_clientnumber'
				'lmi_clientnumber_type'
				'lmi_sms_type'
			]
		TrustConfirm:
			sign: true
			light: true
			order: [
				'wmid'
				'lmi_purseid'
				'lmi_clientnumber_code'
			]
		TransSave:
			sign: true
			md5: true
			secret: true
			order: [
				'wmid'
				'lmi_payee_purse'
				'lmi_payment_no'
				'validityperiodinhours'
			]

	#

	constructor: (host, port, cred) ->

	# Returns URL path for given method

	_path: (options) -> '/conf/xml/XML' + options.method + '.asp'

	#

	_prepare: (options) ->
		envelope = wmid: @wmid, sign: '12345'
		extend(envelope, options.data)

		'merchant.request': envelope

	#

	_prepare: (options) ->
		envelope =
			signtags: wmid: @wmid, sign: '12345'
			paymenttags: options.data

		'merchant.request': envelope

# Exported objects

module.exports = MerchantService
