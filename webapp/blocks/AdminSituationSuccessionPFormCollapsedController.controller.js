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

		var _oAdminSituationSuccessionPFormGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedAdminSituationData.ADMIN_PFORM).vals);

		if (_oAdminSituationSuccessionPFormGroupedBySeqNr && Object.keys(_oAdminSituationSuccessionPFormGroupedBySeqNr).length === 0) {
			_oCtrlAdminSituationSuccessionPFormContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText(
				"ADMINSITUATION_SUCCESSION_PFORM_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		} else {
			if (_oAdminSituationSuccessionPFormGroupedBySeqNr && Object.keys(_oAdminSituationSuccessionPFormGroupedBySeqNr).length > 1) {
				var subSecAdminSituationSuccessionPForm = _oUIHelper.getSubSecAdminSituationSuccessionPForm();
				subSecAdminSituationSuccessionPForm.getBlocks()[0].setShowSubSectionMore(true);
			}

			var count = 0;
			//for each sequence nr
			for (var key in _oAdminSituationSuccessionPFormGroupedBySeqNr) {
				if (count < 2) {
					var successionPFormObj = _oAdminSituationSuccessionPFormGroupedBySeqNr[key].vals;
				//	var ctrlHorizLayout = new sap.ui.layout.HorizontalLayout();
					/*var ctrlHorizLayout = new sap.ui.layout.HorizontalLayout({
						layoutData: new sap.ui.layout.GridData({
							span: "L12 M12 S12"
						})
					});*/

					// for each label/value pair in the sequence
						var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
					successionPFormObj.forEach(function(adminSituationSuccessionPFormItem) {
					
						/*var ctrlVertLayout = new sap.ui.layout.VerticalLayout({
							layoutData: new sap.ui.layout.GridData({
								span: "L12 M12 S12"
							})
						});*/
						ctrlVertLayout.addContent(new sap.m.Label({
							text: adminSituationSuccessionPFormItem.Fieldlabel
						}));
						ctrlVertLayout.addContent(new sap.m.Text({
							text: adminSituationSuccessionPFormItem.Fieldvalue,
							wrapping: true
						}));
				//		ctrlHorizLayout.addContent(ctrlVertLayout);
					});
					_oCtrlAdminSituationSuccessionPFormContainer.addContent(ctrlVertLayout);
					count++;

				}
			}
		}
	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});