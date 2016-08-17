//jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.Affectation");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.view.ProfileCustom", {

	buildByConfiguration: function(configObj) {

		var that = this;
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;

		Object.getPrototypeOf(this).buildByConfiguration.call(this, configObj);

		if (configObj.ZzshowAdminSituation === "X") {
			/*	var oSectionAdminSituation = new sap.uxap.ObjectPageSection({
					title: that.resourseBundle.getText("ADMIN_SITUATION")
				});
				
				var oSubSectionAffectation = new sap.uxap.ObjectPageSubSection({
					title: that.resourseBundle.getText("AFFECTATION")
				});
				
				oSubSectionAffectation.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.Affectation());
				
				oSectionAdminSituation.addSubSection(oSubSectionAffectation);
				
				that.ctrlObjectPageLayout.addSection(oSectionAdminSituation);
				*/

			var oSectionAdminSituation = new sap.uxap.ObjectPageSection({
				title: that.resourseBundle.getText("ADMIN_SITUATION")
			});
			_oUIHelper.setSecAdminSituation(oSectionAdminSituation);
			//hcm.people.profile.util.UIHelper.setSecPersInfo(oSectionAdminSituation);  //TODO needed ? 

			var oSubSectionAdminSituation = new sap.uxap.ObjectPageSubSection({
				id: "subSecAdminSituation",
				title: ""
			});
			_oUIHelper.setSubSecAdminSituation(oSubSectionAdminSituation);
			//hcm.people.profile.util.UIHelper.setSubSecPersInfo(oSubSectionAdminSituation);  //TODO needed ?

			oSubSectionAdminSituation.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation());
			oSectionAdminSituation.addSubSection(oSubSectionAdminSituation);

			that.ctrlObjectPageLayout.addSection(oSectionAdminSituation);

		}

	}

});