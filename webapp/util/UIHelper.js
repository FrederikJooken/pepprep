jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper = (function() {

	// oData collection results
	var _oAdminSituationData = null;
	var _oCarreerInfoData = null;
	var _oPersonalInfoData = null;

	// Grouped oData collection results
	var _oGroupedCarreerInfoData;
	var _oGroupedAdminSituationData;
	var _oGroupedPersonalInfoData;

	var _objSecCarreerInfo = null;

	// Carreer info sub sections
	var _objSubSecCarreerInfo = null;

	var _objSubSecCarreerAdminData = null;
	var _objSubSecCarreerRemuneration = null;
	var _objSubSecCarreerGrade = null;
	var _objSubSecCarreerDisciplinary = null;
	var _objSubSecAdminSituationSuccessionPForm = null;

	var _objSubSecAdminSituation = null;
	var _objSecAdminSituation = null;

	return {

		setSubSecCarreerAdminData: function(objSubSecCarreerAdminData) {
			_objSubSecCarreerAdminData = objSubSecCarreerAdminData;
		},

		getSubSecCarreerAdminData: function() {
			return _objSubSecCarreerAdminData;
		},

		setSubSecCarreerRemuneration: function(objSubSecCarreerRemuneration) {
			_objSubSecCarreerRemuneration = objSubSecCarreerRemuneration;
		},

		getSubSecCarreerRemuneration: function() {
			return _objSubSecCarreerRemuneration;
		},

		setSubSecCarreerGrade: function(objSubSecCarreerGrade) {
			_objSubSecCarreerGrade = objSubSecCarreerGrade;
		},

		getSubSecCarreerGrade: function() {
			return _objSubSecCarreerGrade;
		},

		setSubSecCarreerDisciplinary: function(objSubSecCarreerDisciplinary) {
			_objSubSecCarreerDisciplinary = objSubSecCarreerDisciplinary;
		},

		getSubSecCarreerDisciplinary: function() {
			return _objSubSecCarreerDisciplinary;
		},

		setSubSecAdminSituationSuccessionPForm: function(objSubSecAdminSituationSuccessionPForm) {
			_objSubSecAdminSituationSuccessionPForm = objSubSecAdminSituationSuccessionPForm;
		},

		getSubSecAdminSituationSuccessionPForm: function() {
			return _objSubSecAdminSituationSuccessionPForm;
		},

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

		setAdminSituationData: function(oAdminSituationData) {
			_oAdminSituationData = oAdminSituationData;
		},

		getAdminSituationData: function() {
			return _oAdminSituationData;
		},

		setPersonalInfoData: function(oPersonalInfoData) {
			_oPersonalInfoData = oPersonalInfoData;
		},

		getPersonalInfoData: function() {
			return _oPersonalInfoData;
		},

		setCarreerInfoData: function(oCarreerInfoData) {
			_oCarreerInfoData = oCarreerInfoData;
		},

		getCarreerInfoData: function() {
			return _oCarreerInfoData;
		},

		setGroupedCarreerInfoData: function(oGroupedCarreerInfoData) {
			_oGroupedCarreerInfoData = oGroupedCarreerInfoData;
		},

		getGroupedCarreerInfoData: function() {
			return _oGroupedCarreerInfoData;
		},

		setGroupedAdminSituationData: function(oGroupedAdminSituationData) {
			_oGroupedAdminSituationData = oGroupedAdminSituationData;
		},

		getGroupedAdminSituationData: function() {
			return _oGroupedAdminSituationData;
		},

		setGroupedPersonalInfoData: function(oGroupedPersonalInfoData) {
			_oGroupedPersonalInfoData = oGroupedPersonalInfoData;
		},

		getGroupedPersonalInfoData: function() {
			return _oGroupedPersonalInfoData;
		},

		groupCollectionItems: function(collectionToBeSorted) {
			var groupedColl = [];
			if (collectionToBeSorted.length > 0) {

				collectionToBeSorted.forEach(function(collectionItem) {

					if (groupedColl[collectionItem.Zzpos]) {
						groupedColl[collectionItem.Zzpos].vals.push({
							"Fieldlabel": collectionItem.Fieldlabel,
							"Fieldvalue": collectionItem.Fieldvalue,
							"GroupName": collectionItem.Groupname,
							"Zzseqnr": collectionItem.Zzseqnr
						});
					} else {
						groupedColl[collectionItem.Zzpos] = {
							"Zzpos": collectionItem.Zzpos,
							vals: []
						};
						groupedColl[collectionItem.Zzpos].vals.push({
							"Fieldlabel": collectionItem.Fieldlabel,
							"Fieldvalue": collectionItem.Fieldvalue,
							"GroupName": collectionItem.Groupname,
							"Zzseqnr": collectionItem.Zzseqnr
						});
					}
				});
			}
			return groupedColl;
		},

		groupItemsPerSeqNr: function(collecionToBeGroupedPerSeqNr) {
			var groupedCollPerSeqNr = [];
			if (collecionToBeGroupedPerSeqNr.length > 0) {
				collecionToBeGroupedPerSeqNr.forEach(function(collectItem) {
			
					if (groupedCollPerSeqNr[collectItem.Zzseqnr]) {
						groupedCollPerSeqNr[collectItem.Zzseqnr].vals.push({
							"Fieldlabel": collectItem.Fieldlabel,
							"Fieldvalue": collectItem.Fieldvalue,
							"GroupName": collectItem.Groupname,
							"Zzpos": collectItem.Zzpos
						});
					} else {
						groupedCollPerSeqNr[collectItem.Zzseqnr] = {
							Zzseqnr: collectItem.Zzseqnr,
							vals: []
						};
						groupedCollPerSeqNr[collectItem.Zzseqnr].vals.push({
							"Fieldlabel": collectItem.Fieldlabel,
							"Fieldvalue": collectItem.Fieldvalue,
							"GroupName": collectItem.Groupname,
							"Zzpos": collectItem.Zzpos
						});
					}
				});
			}
			return groupedCollPerSeqNr;
		},

		//might become obsolete, they want to send the mails using SAP SOST inbox
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