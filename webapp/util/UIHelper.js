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
		}
	};
}());