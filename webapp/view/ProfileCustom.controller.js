jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.view.ProfileCustom", {

	initializeView: function() {
		Object.getPrototypeOf(this).initializeView.call(this);
		
		var that = this;
		
		//Get the logged on user ID and name, to add it to the PiwikDataSet later on...
		var _oUserInfoService = sap.ushell.Container.getService("UserInfo");
		var sUserId = _oUserInfoService.getUser().getId(); //only works when deployed on ABAP stacked Front-end server		
		var sUserName =_oUserInfoService.getUser().getFullName();

		//Get the piwik data from the OData service
		this.getView().getModel().read("/PiwikDatasetSet", null, null, false, function(oData, oResponse) {
			//add the logged on user ID ot the OData data
			oData.results[0].LoggedUserId = sUserId;
			oData.results[0].LoggedUserName = sUserName;
			var piwikDataModel = new sap.ui.model.json.JSONModel(oData.results[0]);
			that.getView().setModel(piwikDataModel, "piwikDataModel"); 

		}, function(err) {
			jQuery.sap.log.getLogger().error("Data fetch failed" + err.toString());
		});

	},

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

		if (configObj.ZzshowCareer === "X") {
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

	// FJK - Need to override parts of this function to add field value mappings 
	buildHeaderUI: function(objEmployeeData) {
		Object.getPrototypeOf(this).buildHeaderUI.call(this, objEmployeeData);

		if (objEmployeeData.Zzidf) {
			this.byId("lblIDF").setText(objEmployeeData.Zzidf);
		} else {
			this.byId("lblIDF").setVisible(false);
		}
	},

	onIncorrectDataLinkPress: function(oEvent) {
		//TODO open form for sending a mail

		//var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		//_oUIHelper.sendEmail("a","b","c");

		if (!this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("hcm.people.profile.ZHCM_PEP_PROFILEExt.view.EmailForm", this);
		}
		this.getView().addDependent(this._oDialog);
		this._oDialog.open();

	},

	onCancelPress: function(){
		this._oDialog.close();	
	},

	
	_handleBeforeOpen: function(){
		var a = this.getView().getModel();
	},


	_handleAfterClose: function(){
		var a = this.getView().getModel();
	},

	onAfterRendering: function() {
		// FJK - Hide EMPLOYEE_HIERARCHY button in top right - Obsolete because View was replaced afterwards and modification has been done there
		/*var _oCtrlObjHeader = this.byId("ctlrObjHeaderEmp");
		_oCtrlObjHeader.getActions()[0].setVisible(false);*/
	}
});