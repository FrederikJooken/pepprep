jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoPersonDataController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlPersonalInfoPersonDataContainer = this.byId("ctrlPersonalInfoPersonDataHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		if (_oGroupedPersonalInfoData && _oGroupedPersonalInfoData.PERS_DATA) {

			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});

			// for each item in the personal info person data array
			_oGroupedPersonalInfoData.PERS_DATA.vals.forEach(function(personalInfoPersonDataItem) {

				var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
					layoutData: new sap.ui.layout.GridData({}),
					width: "250px"
				});
				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: personalInfoPersonDataItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: personalInfoPersonDataItem.Fieldvalue
				}));

				ctrlVerticalLayout.addContent(ctrlSimpleForm);
				ctrlHorizontalLayout.addContent(ctrlVerticalLayout);
			});
			_oCtrlPersonalInfoPersonDataContainer.addContent(ctrlHorizontalLayout);

			//		

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("PERSONAL_INFO_PERSON_DATA_NO_DATA"));
			this.byId("dispStatusMsgGrid").setVisible(true);
		}

	},

	onExit: function() {

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	}

});