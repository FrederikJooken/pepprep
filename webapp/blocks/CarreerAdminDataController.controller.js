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
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		if (_oGroupedCarreerInfoData && _oGroupedCarreerInfoData.CARR_ADMIN_DATA) {

			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});

			// for each item in the carreer admin data array
			_oGroupedCarreerInfoData.CARR_ADMIN_DATA.vals.forEach(function(carreerAdminDataItem) {
				var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
					layoutData: new sap.ui.layout.GridData({}),
					width: "250px"
				});
				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: carreerAdminDataItem.Fieldlabel,
					textAlign: sap.ui.core.TextAlign.Left
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerAdminDataItem.Fieldvalue
				}));

				ctrlVerticalLayout.addContent(ctrlSimpleForm);
				ctrlHorizontalLayout.addContent(ctrlVerticalLayout);

			});
			_oCtrlCarreerAdminContainer.addContent(ctrlHorizontalLayout);

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_ADMIN_DATA_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		}
	},

	onExit: function() {},

	onBeforeRendering: function() {},

	onAfterRendering: function() {}
});