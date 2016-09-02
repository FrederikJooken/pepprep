jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationMedicalRestrictionsController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlAdminSituationMedicalRestrictionsContainer = this.byId("ctrlAdminSituationMedicalRestrictionsHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		if (_oGroupedAdminSituationData && _oGroupedAdminSituationData.MEDIC_RESTRICTIONS) {

			// for each item in the carreer remuneration array
			_oGroupedAdminSituationData.MEDIC_RESTRICTIONS.vals.forEach(function(adminSituationMedicalRestrictionsItem) {
				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					maxContainerCols: 2,
					editable: false,
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: adminSituationMedicalRestrictionsItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: adminSituationMedicalRestrictionsItem.Fieldvalue
				}));
				_oCtrlAdminSituationMedicalRestrictionsContainer.addContent(ctrlSimpleForm);
			});

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("ADMINSITUATION_MEDICAL_RESTRICT_NO_DATA"));
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