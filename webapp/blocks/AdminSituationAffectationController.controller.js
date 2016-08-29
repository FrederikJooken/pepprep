jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationAffectationController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlAdminSituationAffectationContainer = this.byId("ctrlAdminSituationAffectationHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		if (_oGroupedAdminSituationData && _oGroupedAdminSituationData.ADMIN_AFFECTATION) {

			var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
				maxContainerCols: 2,
				editable: false,
				layout: "ResponsiveGridLayout"
			});

			// for each item in the carreer remuneration array
			_oGroupedAdminSituationData.ADMIN_AFFECTATION.vals.forEach(function(adminSituationAffectationItem) {
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: adminSituationAffectationItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: adminSituationAffectationItem.Fieldvalue
				}));

			});

			_oCtrlAdminSituationAffectationContainer.addContent(ctrlSimpleForm);

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("ADMINSITUATION_AFFECTATION_NO_DATA"));
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