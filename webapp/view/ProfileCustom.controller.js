jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationDesignation");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationAffectation");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilization");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPForm");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerAdminData");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerRemuneration");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerGrade");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinary");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.view.ProfileCustom", {

	initializeView: function() {

		var that = this;

		//Get the logged on user ID and name, to add it to the PiwikDataSet later on...
		var _oUserInfoService = sap.ushell.Container.getService("UserInfo");
		var sUserId = _oUserInfoService.getUser().getId(); //only works when deployed on ABAP stacked Front-end server		
		var sUserName = _oUserInfoService.getUser().getFullName();

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

		//Get the active applicatins
		this.getView().getModel().read("/ActiveAppsListSet", null, null, false, function(oData, oResponse) {
			//var activeAppsDataModel = new sap.ui.model.json.JSONModel(oData.results);
			//that.getView().setModel(activeAppsDataModel, "activeAppsModel");
			var activeAppsJSON = {
				"activeApps": [{}]
			};
			activeAppsJSON.activeApps = activeAppsJSON.activeApps.concat(oData.results);
			var activeAppsDataModel = new sap.ui.model.json.JSONModel(activeAppsJSON);
			that.getView().setModel(activeAppsDataModel, "activeAppsModel");

		}, function(err) {
			jQuery.sap.log.getLogger().error("Data fetch failed" + err.toString());
		});

		Object.getPrototypeOf(this).initializeView.call(this);

	},

	buildByConfiguration: function(configObj) {

		Object.getPrototypeOf(this).buildByConfiguration.call(this, configObj);

		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;

		if (configObj.ZzshowAdminSituation === "X") {
			//get Administrative Situation data
			var queryPathAdminSituation = "AdministrativeSituationSet";
			this.getView().getModel().read(queryPathAdminSituation, null, null, true, function(response) {

				var _oAdminSituationColl = response.results;

				//set CarreerInfo data in UIHelper
				_oUIHelper.setAdminSituationData(_oAdminSituationColl);

				//get sorted carreerinfo collection 
				var groupedAdminSituationData = _oUIHelper.groupCollectionItems(_oAdminSituationColl);
				_oUIHelper.setGroupedAdminSituationData(groupedAdminSituationData);

			}, function(response) {
				jQuery.sap.log.getLogger().error("Data fetch failed" + response.toString());
			});

			//create top level menu section CARREER
			var oSectionAdminSituation = new sap.uxap.ObjectPageSection({
				title: this.resourseBundle.getText("ADMIN_SITUATION")
			});

			//create ADMIN SITUATION sub sections

			/*********************************************/
			/* ADMIN SITUATION -> DESIGNATION subsection */
			/*********************************************/
			var oSubSectionAdminSituationDesignation = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("ADMINSITUATION_DESIGNATION")
			});
			oSubSectionAdminSituationDesignation.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationDesignation());
			oSectionAdminSituation.addSubSection(oSubSectionAdminSituationDesignation);

			/*********************************************/
			/* ADMIN SITUATION -> AFFECTATION subsection */
			/*********************************************/
			var oSubSectionAdminSituationAffectation = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("ADMINSITUATION_AFFECTATION")
			});
			oSubSectionAdminSituationAffectation.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationAffectation());
			oSectionAdminSituation.addSubSection(oSubSectionAdminSituationAffectation);

			/*********************************************/
			/* ADMIN SITUATION -> AFFECTATION subsection */
			/*********************************************/
			var oSubSectionAdminSituationUtilization = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("ADMINSITUATION_UTILIZATION")
			});
			oSubSectionAdminSituationUtilization.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilization());
			oSectionAdminSituation.addSubSection(oSubSectionAdminSituationUtilization);

			/****************************************/
			/* ADMIN SITUATION -> SUCCESSION P-FORM */
			/****************************************/
			var oSubSectionAdminSituationSuccessionPForm = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("ADMINSITUATION_SUCCESSION_PFORM")
			});
			_oUIHelper.setSubSecAdminSituationSuccessionPForm(oSubSectionAdminSituationSuccessionPForm);
			oSubSectionAdminSituationSuccessionPForm.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPForm());
			oSectionAdminSituation.addSubSection(oSubSectionAdminSituationSuccessionPForm);

			// Add Admin situation section to page layout
			this.ctrlObjectPageLayout.addSection(oSectionAdminSituation);
		}

		if (configObj.ZzshowCareer === "X") {
			//get CarreerInfo data
			var queryPathCarreerInfo = "CarreerInfoSet";
			this.getView().getModel().read(queryPathCarreerInfo, null, null, true, function(response) {

				var carreerInfoColl = response.results;

				//set CarreerInfo data in UIHelper
				_oUIHelper.setCarreerInfoData(carreerInfoColl);

				//get sorted carreerinfo collection 
				var groupedCarreerInfoData = _oUIHelper.groupCollectionItems(carreerInfoColl);
				_oUIHelper.setGroupedCarreerInfoData(groupedCarreerInfoData);

			}, function(response) {
				jQuery.sap.log.getLogger().error("Data fetch failed" + response.toString());
			});

			//create top level menu section CARREER
			var oSectionCarreer = new sap.uxap.ObjectPageSection({
				title: this.resourseBundle.getText("CARREER_INFO")
			});

			//create CARREER sub sections

			/*********************************************/
			/* CARREER -> ADMINISTRATIVE_DATA subsection */
			/*********************************************/
			var oSubSectionCarreerAdminData = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_ADMIN_DATA")
			});
			oSubSectionCarreerAdminData.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerAdminData());
			oSectionCarreer.addSubSection(oSubSectionCarreerAdminData);

			/**************************************/
			/* CARREER -> REMUNERATION subsection */
			/**************************************/
			var oSubSectionCarreerRemuneration = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_REMUNERATION")
			});
			oSubSectionCarreerRemuneration.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerRemuneration());
			oSectionCarreer.addSubSection(oSubSectionCarreerRemuneration);

			/*******************************/
			/* CARREER -> GRADE subsection */
			/*******************************/
			var oSubSectionCarreerGrade = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_GRADE")
			});
			oSubSectionCarreerGrade.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerGrade());
			oSectionCarreer.addSubSection(oSubSectionCarreerGrade);

			/***********************************************/
			/* CARREER -> DISCIPLINARY MEASURES subsection */
			/***********************************************/
			var oSubSectionCarreerDisciplinary = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_DISCIPLINARY")
			});
			_oUIHelper.setSubSecCarreerDisciplinary(oSubSectionCarreerDisciplinary);
			oSubSectionCarreerDisciplinary.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinary());
			oSectionCarreer.addSubSection(oSubSectionCarreerDisciplinary);

			// Add carreer section to page layout
			this.ctrlObjectPageLayout.addSection(oSectionCarreer);
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

		/*	var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		_oUIHelper.sendEmail("a","b","c");
*/
		if (!this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("hcm.people.profile.ZHCM_PEP_PROFILEExt.view.EmailForm", this);
		}
		this.getView().addDependent(this._oDialog);
		this._oDialog.open();

	},

	onCancelPress: function() {
		this._oDialog.close();
	},

	onSubmitForm: function(oEvent) {
		var supportAanvraagModel = this.getView().getModel("piwikDataModel");
		var activeAppErr = sap.ui.getCore().byId("appNameSelect").getSelectedItem().getBindingContext("activeAppsModel").getProperty("Appname");
		var errDescription = sap.ui.getCore().byId("descriptionTextArea").getValue();
		supportAanvraagModel.getData().Appname = activeAppErr;
		supportAanvraagModel.getData().Description = errDescription;

		var oModel = this.getView().getModel();
		oModel.create('/PiwikDatasetSet', supportAanvraagModel.getData(), null, function() {
			sap.m.MessageToast.show(this.resourseBundle.getText("EMAIL_FORM_SUBMIT_OK"));
		}, function(errMsg) { 
			sap.m.MessageToast.show(this.resourseBundle.getText("EMAIL_FORM_SUBMIT_NOK"));
		});

	},

	_handleBeforeOpen: function() {},

	_handleAfterClose: function() {},

	_handleBeforeClose: function(oEvent) {
		var a = oEvent;
	},

	onAfterRendering: function() {
		// FJK - Hide EMPLOYEE_HIERARCHY button in top right - Obsolete because View was replaced afterwards and modification has been done there
		/*var _oCtrlObjHeader = this.byId("ctlrObjHeaderEmp");
		_oCtrlObjHeader.getActions()[0].setVisible(false);*/
	}
});