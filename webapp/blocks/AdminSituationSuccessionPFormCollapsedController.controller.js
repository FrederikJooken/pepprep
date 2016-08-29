jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPFormCollapsedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlAdminSituationSuccessionPFormContainer = this.byId("ctrlAdminSituationSuccessionPFormHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		if (_oGroupedAdminSituationData && (!_oGroupedAdminSituationData.ADMIN_PFORM || _oGroupedAdminSituationData.ADMIN_PFORM.vals.length ===
				0)) {
			_oCtrlAdminSituationSuccessionPFormContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText(
				"ADMINSITUATION_SUCCESSION_PFORM_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		} else {
			if (_oGroupedAdminSituationData && _oGroupedAdminSituationData.ADMIN_PFORM && _oGroupedAdminSituationData.ADMIN_PFORM.vals.length > 3) {
				var subSecAdminSituationSuccessionPForm = _oUIHelper.getSubSecAdminSituationSuccessionPForm();
				subSecAdminSituationSuccessionPForm.getBlocks()[0].setShowSubSectionMore(true);
			}
			var count = 0;

			_oGroupedAdminSituationData.ADMIN_PFORM.vals.forEach(function(adminSituationSuccessionPFormItem) {
				if (count < 3) {
					var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
					ctrlVertLayout.addContent(new sap.m.Label({
						text: adminSituationSuccessionPFormItem.Fieldlabel,
						design: "Bold"
					}));
					ctrlVertLayout.addContent(new sap.m.Text({
						text: adminSituationSuccessionPFormItem.Fieldvalue,
						wrapping: true
					}));

					_oCtrlAdminSituationSuccessionPFormContainer.addContent(ctrlVertLayout);
					count++;
				}
			});
		}

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});