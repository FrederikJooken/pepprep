jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation");
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

		Object.getPrototypeOf(this).initializeView.call(this);

	},

	buildByConfiguration: function(configObj) {

		Object.getPrototypeOf(this).buildByConfiguration.call(this, configObj);

		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;

		if (configObj.ZzshowCareer === "X") {
			//get CarreerInfo data
			var queryPath = "CarreerInfoSet";
			this.getView().getModel().read(queryPath, null, null, true, function(response) {

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

			//CARREER -> ADMINISTRATIVE_DATA subsection
			var oSubSectionCarreerAdminData = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_ADMIN_DATA")
			});
			oSubSectionCarreerAdminData.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerAdminData());
			oSectionCarreer.addSubSection(oSubSectionCarreerAdminData);

			//CARREER -> REMUNERATION subsection
			var oSubSectionCarreerRemuneration = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_REMUNERATION")
			});
			oSubSectionCarreerRemuneration.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerRemuneration());
			oSectionCarreer.addSubSection(oSubSectionCarreerRemuneration);
			
			//CARREER -> GRADE subsection
			var oSubSectionCarreerGrade = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_GRADE")
			});
			oSubSectionCarreerGrade.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerGrade());
			oSectionCarreer.addSubSection(oSubSectionCarreerGrade);
			//CARREER -> DISCIPLINARY MEASURES subsection
			var oSubSectionCarreerDisciplinary = new sap.uxap.ObjectPageSubSection({
				title: this.resourseBundle.getText("CARREER_DISCIPLINARY")
			});
			_oUIHelper.setSubSecCarreerDisciplinary(oSubSectionCarreerDisciplinary);
			oSubSectionCarreerDisciplinary.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinary());
			oSectionCarreer.addSubSection(oSubSectionCarreerDisciplinary);

			this.ctrlObjectPageLayout.addSection(oSectionCarreer);
		}
		/*	if (configObj.ZzshowAdminSituation === "X") {
				var oSectionAdminSituation = new sap.uxap.ObjectPageSection({
					title: that.resourseBundle.getText("ADMIN_SITUATION")
				});
				_oUIHelper.setSecAdminSituation(oSectionAdminSituation);

				var oSubSectionAdminSituation = new sap.uxap.ObjectPageSubSection({
					id: "subSecAdminSituation",
					title: "TEST"
						//showSubSectionMore: true
				});
				_oUIHelper.setSubSecAdminSituation(oSubSectionAdminSituation);

				oSubSectionAdminSituation.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituation());
				oSectionAdminSituation.addSubSection(oSubSectionAdminSituation);

				that.ctrlObjectPageLayout.addSection(oSectionAdminSituation);

			}*/

		//Working on Carreer Info first //TODO remove comment
		/*	if (configObj.ZzshowCareer === "X") {
				//Prepare the Carreer Info section
				var oSectionCarreerInfo = new sap.uxap.ObjectPageSection({
					title: that.resourseBundle.getText("CARREER_INFO")
				});
				//	_oUIHelper.setSecCarreerInfo(oSectionCarreerInfo); //TODO check if needed ? 

				//Get all CarreerInfo set data
				var queryPath = "CarreerInfoSet";
				this.getView().getModel().read(queryPath, null, null, true, function(response) {

					var carreerInfoColl = response.results;

					//set CarreerInfo data in UIHelper
					_oUIHelper.setCarreerInfoData(carreerInfoColl);

					//get sorted carreerinfo collection 
					var groupedCarreerInfoData = _oUIHelper.groupCollectionItems(carreerInfoColl);
					_oUIHelper.setGroupedCarreerInfoData(groupedCarreerInfoData);

				}, function(response) {
					jQuery.sap.log.getLogger().error("Data fetch failed" + response.toString());
				});*/

		/**************************************************/
		/* Add all POSSIBLE CARREER INFO subsections here */
		/**************************************************/

		/**************************************/
		/*  SUBSECTION - Administrative Data  */
		/**************************************/
		/*		var oSubSectionCarreerAdminData = new sap.uxap.ObjectPageSubSection({
				title: "Administratieve data"
			});
			//	_oUIHelper.setSubSecCarreerAdminData(oSubSectionCarreerAdminData);  
			oSubSectionCarreerAdminData.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerAdminData());
			oSectionCarreerInfo.addSubSection(oSubSectionCarreerAdminData);
*/
		/*******************************/
		/*  SUBSECTION - Remuneration  */
		/*******************************/
		/*		var oSubSectionCarreerRemuneration = new sap.uxap.ObjectPageSubSection({
				//	TODO remove empty items - logica change
			});
			//				_oUIHelper.setSubSecCarreerRemuneration(oSubSectionCarreerRemuneration);  
			oSubSectionCarreerRemuneration.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerRemuneration());
			oSectionCarreerInfo.addSubSection(oSubSectionCarreerRemuneration);
*/
		/************************/
		/*  SUBSECTION - Grade  */
		/************************/
		/*			var oSubSectionCarreerGrade = new sap.uxap.ObjectPageSubSection({
						//	TODO remove empty items - logica change
					});
					_oUIHelper.setSubSecCarreerGrade(oSubSectionCarreerGrade);  
					oSubSectionCarreerGrade.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerGrade());
					oSectionCarreerInfo.addSubSection(oSubSectionCarreerGrade); 
		*/
		/******************************************************/
		/*  SUBSECTION - Disciplinary Measures - collapsable  */
		/******************************************************/
		/*	var oSubSectionCarreerDisciplinary = new sap.uxap.ObjectPageSubSection({
				//	TODO remove empty items - logica change
			});
			_oUIHelper.setSubSecCarreerDisciplinary(oSubSectionCarreerDisciplinary);  
			oSubSectionCarreerDisciplinary.insertBlock(new hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinary());
			oSectionCarreerInfo.addSubSection(oSubSectionCarreerDisciplinary); 
*/

		// Add carreer info section to Object Page layout*/
		//		that.ctrlObjectPageLayout.addSection(oSectionCarreerInfo);
		//	}

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

	_handleBeforeOpen: function() {
		var a = this.getView().getModel();
	},

	_handleAfterClose: function() {
		var a = this.getView().getModel();
	},

	onAfterRendering: function() {
		// FJK - Hide EMPLOYEE_HIERARCHY button in top right - Obsolete because View was replaced afterwards and modification has been done there
		/*var _oCtrlObjHeader = this.byId("ctlrObjHeaderEmp");
		_oCtrlObjHeader.getActions()[0].setVisible(false);*/
	}
});