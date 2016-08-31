jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilizationController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlAdminSituationUtilizationContainer = this.byId("ctrlAdminSituationUtilizationHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		if (_oGroupedAdminSituationData && _oGroupedAdminSituationData.ADMIN_UTILIZATION) {

			// for each item in the carreer remuneration array
			_oGroupedAdminSituationData.ADMIN_UTILIZATION.vals.forEach(function(adminSituationUtilizationItem) {
				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					maxContainerCols: 2,
					editable: false,
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: adminSituationUtilizationItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: adminSituationUtilizationItem.Fieldvalue
				}));
				_oCtrlAdminSituationUtilizationContainer.addContent(ctrlSimpleForm);
			});

			
	
		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("ADMINSITUATION_UTILIZATION_NO_DATA"));
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