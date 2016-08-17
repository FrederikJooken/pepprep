jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper"); 

hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper = (function() {

	var _objSubSecAdminSituation = null;
	var _objSecAdminSituation = null;

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
		}
	};
}());