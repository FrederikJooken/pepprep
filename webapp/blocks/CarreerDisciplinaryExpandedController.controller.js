jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinaryExpandedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlCarreerDisciplinaryContainer = this.byId("ctrlCarreerDisciplinaryHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		_oGroupedCarreerInfoData.CARR_DISCIPLINARY.vals.forEach(function(carreerDisciplinaryItem) {
				var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
				ctrlVertLayout.addContent(new sap.m.Label({
					text: carreerDisciplinaryItem.Fieldlabel,
					design: "Bold"
				}));
				ctrlVertLayout.addContent(new sap.m.Text({
					text: carreerDisciplinaryItem.Fieldvalue,
					wrapping: true
				}));

		//		_oCtrlCarreerDisciplinaryContainer.removeContent();
				_oCtrlCarreerDisciplinaryContainer.addContent(ctrlVertLayout);
		});

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});