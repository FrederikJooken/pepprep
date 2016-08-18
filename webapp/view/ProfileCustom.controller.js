jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.view.ProfileCustom", {

	buildByConfiguration: function(configObj) {

		var that = this;
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;

		Object.getPrototypeOf(this).buildByConfiguration.call(this, configObj);

		if (configObj.ZzshowAdminSituation === "X") {
			var oSectionAdminSituation = new sap.uxap.ObjectPageSection({
				title: that.resourseBundle.getText("ADMIN_SITUATION")
			});
			_oUIHelper.setSecAdminSituation(oSectionAdminSituation);

			var oSubSectionAdminSituation = new sap.uxap.ObjectPageSubSection({
				id: "subSecAdminSituation",
				title: ""
			});
			_oUIHelper.setSubSecAdminSituation(oSubSectionAdminSituation);

			oSubSectionAdminSituation.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation());
			oSectionAdminSituation.addSubSection(oSubSectionAdminSituation);

			that.ctrlObjectPageLayout.addSection(oSectionAdminSituation);

		}
		
		if (configObj.ZzshowCareer === "X"){
			var oSectionCarreerInfo = new sap.uxap.ObjectPageSection({
				title: that.resourseBundle.getText("CARREER_INFO")
			});
			_oUIHelper.setSecCarreerInfo(oSectionCarreerInfo);

			var oSubSectionCarreerInfo = new sap.uxap.ObjectPageSubSection({
				id: "subSecCarreerInfo",
				title: ""
			});
			_oUIHelper.setSubSecCarreerInfo(oSubSectionCarreerInfo);
			
			oSubSectionCarreerInfo.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo());
			oSectionCarreerInfo.addSubSection(oSubSectionCarreerInfo);

			that.ctrlObjectPageLayout.addSection(oSectionCarreerInfo);
		}

	},
	
	onAfterRendering: function() {
		// FJK - Hide EMPLOYEE_HIERARCHY button in top right
		var _oCtrlObjHeader = this.byId("ctlrObjHeaderEmp");
		_oCtrlObjHeader.getActions()[0].setVisible(false);
	}

});