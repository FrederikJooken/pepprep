jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper = (function() {

	var _objSubSecAdminSituation = null;
	var _objSecAdminSituation = null;

	var _objSubSecCarreerInfo = null;
	var _objSecCarreerInfo = null;

	return {

		setSubSecAdminSituation: function(objSubSecAdminSituation) {
			_objSubSecAdminSituation = objSubSecAdminSituation;
		},

		getSubSecAdminSituation: function() {
			return _objSubSecAdminSituation;
		},

		setSecAdminSituation: function(objSecAdminSituation) {
			_objSecAdminSituation = objSecAdminSituation;
		},

		getSecAdminSituation: function() {
			return _objSecAdminSituation;
		},

		setSubSecCarreerInfo: function(objSubSecCarreerInfo) {
			_objSubSecCarreerInfo = objSubSecCarreerInfo;
		},

		getSubSecCarreerInfo: function() {
			return _objSubSecCarreerInfo;
		},

		setSecCarreerInfo: function(objSecCarreerInfo) {
			_objSecCarreerInfo = objSecCarreerInfo;
		},

		getSecCarreerInfo: function() {
			return _objSecCarreerInfo;
		},

		sendEmail: function(subject, body, cc) {

			var wsRes = "";

			//Check if the user has a valid email address otherwise CC is not an option
			/*		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (!re.test(window.nmbs_workplace.userEmail)) {
						cc = false;
					}*/

			var liBehindFirstDot = location.hostname.indexOf(".") + 1;
			if (liBehindFirstDot > 0) {
				document.domain = location.hostname.substr(liBehindFirstDot);
			}

			var soapReq = '<?xml version="1.0" encoding="utf-8"?>' +
				'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ejb="http://nmbs.be/portal/email/ejb/">' +
				'<soapenv:Header/>' +
				'<soapenv:Body>' +
				'<ejb:sendEmailUsingEmailAddresses>' +
				'<from>frederik.jooken@ypto.be</from>' +
				'<to>frederik.jooken@b-rail.be</to>';
			/*	'<from>' + window.nmbs_workplace.contactEmailAlias + '</from>' +
				'<to>' + window.nmbs_workplace.contactEmailAlias + '</to>';*/

			/*	if (cc) {
					soapReq += '<cc>' + window.nmbs_workplace.userEmail + '</cc>';
				} else {
					soapReq += '<cc></cc>';
				}*/

			//	var environmentID = window.location.hostname.substring(0, window.location.hostname.indexOf(".")).replace("p", "P");
			soapReq += '<subject>testsbuject</subject>' +
				'<body>testbody</body>' +
				'</ejb:sendEmailUsingEmailAddresses>' +
				'</soapenv:Body>' +
				'</soapenv:Envelope>';

			//	var URL = "/EmailFacadeService/EmailFacade"
			//TODO make URL parameter dynamic
			var URL = "http://bdportal.belgianrail.be:8081/EmailFacadeService/EmailFacade";
			var nocache = new Date().getTime();
			URL += "?cache=" + nocache;
			$.ajax({
				url: URL,
				type: 'POST',
				dataType: 'text',
				contentType: 'text/xml;charset=UTF-8',
				data: soapReq,
				async: false,
				beforeSend: function(xhr) {
					xhr.setRequestHeader('contentType', 'text/xml;charset=UTF-8');
				},
				success: function(result) {
					jQuery.sap.log.getLogger().info("Mail sent");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					jQuery.sap.log.getLogger().error("Sending mail failed - " + errorThrown.toString());
				}
			});

			return wsRes;

		}

	};
}());