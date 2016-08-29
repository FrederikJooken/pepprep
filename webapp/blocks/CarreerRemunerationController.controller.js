jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerRemunerationController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlCarreerRemunerationContainer = this.byId("ctrlCarreerRemunerationHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		if (_oGroupedCarreerInfoData && _oGroupedCarreerInfoData.CARR_REMUNERATION) {

			var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
				maxContainerCols: 2,
				editable: false,
				layout: "ResponsiveGridLayout"
			});

			// for each item in the carreer remuneration array
			_oGroupedCarreerInfoData.CARR_REMUNERATION.vals.forEach(function(carreerRemunerationItem) {
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: carreerRemunerationItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerRemunerationItem.Fieldvalue
				}));

			});

			_oCtrlCarreerRemunerationContainer.addContent(ctrlSimpleForm);

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_REMUNERATION_NO_DATA"));
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