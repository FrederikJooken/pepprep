jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPFormExpandedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlAdminSituationSuccessionPFormContainer = this.byId("ctrlAdminSituationSuccessionPFormHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		_oGroupedAdminSituationData.ADMIN_PFORM.vals.forEach(function(adminSituationSuccessionPFormItem) {
				var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
				ctrlVertLayout.addContent(new sap.m.Label({
					text: adminSituationSuccessionPFormItem.Fieldlabel,
					design: "Bold"
				}));
				ctrlVertLayout.addContent(new sap.m.Text({
					text: adminSituationSuccessionPFormItem.Fieldvalue,
					wrapping: true
				}));

		//		_oCtrlAdminSituationSuccessionPFormContainer.removeContent();
				_oCtrlAdminSituationSuccessionPFormContainer.addContent(ctrlVertLayout);
		});

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});