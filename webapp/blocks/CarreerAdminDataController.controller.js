jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerAdminDataController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlCarreerAdminContainer = this.byId("ctrlCarreerAdminHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oResBundle = hcm.people.profile.util.UIHelper.getResourceBundle();
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		if (_oGroupedCarreerInfoData && _oGroupedCarreerInfoData.CARR_ADMIN_DATA) {

			var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
				maxContainerCols: 4,
				editable: false,
				layout: "ResponsiveGridLayout"
			});

			// for each item in the carreer admin data array
			_oGroupedCarreerInfoData.CARR_ADMIN_DATA.vals.forEach(function(carreerAdminDataItem) {
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: carreerAdminDataItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerAdminDataItem.Fieldvalue
				}));

			});
			_oCtrlCarreerAdminContainer.addContent(ctrlSimpleForm);
		}
		else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_ADMIN_DATA_NO_DATA"));
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