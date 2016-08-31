jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoEmergencyDataController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlPersonalInfoEmergencyDataContainer = this.byId("ctrlPersonalInfoEmergencyDataHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		if (_oGroupedPersonalInfoData && _oGroupedPersonalInfoData.EMERGENCY_DATA) {

			// for each item in the personal info person data array
			_oGroupedPersonalInfoData.EMERGENCY_DATA.vals.forEach(function(personalInfoEmergencyDataItem) {

					var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
						maxContainerCols: 2,
						editable: false,
						layout: "ResponsiveGridLayout"
					});
					ctrlSimpleForm.addContent(new sap.m.Label({
						text: personalInfoEmergencyDataItem.Fieldlabel
					}));
					ctrlSimpleForm.addContent(new sap.m.Text({
						text: personalInfoEmergencyDataItem.Fieldvalue
					}));
					_oCtrlPersonalInfoEmergencyDataContainer.addContent(ctrlSimpleForm);

			});

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("PERSONAL_INFO_EMERGENCY_DATA_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		}

	},

	onExit: function() {

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	}

});