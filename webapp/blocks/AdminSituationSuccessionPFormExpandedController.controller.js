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

		var _oAdminSituationSuccessionPFormGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedAdminSituationData.ADMIN_PFORM).vals);

		for (var key in _oAdminSituationSuccessionPFormGroupedBySeqNr) {

			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});
			
			var successionPFormObj = _oAdminSituationSuccessionPFormGroupedBySeqNr[key].vals;
			successionPFormObj.forEach(function(adminSituationSuccessionPFormItem) {

				var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
					layoutData: new sap.ui.layout.GridData({}),
					width: "250px"
				});

				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: adminSituationSuccessionPFormItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: adminSituationSuccessionPFormItem.Fieldvalue,
					wrapping: true
				}));
				ctrlVerticalLayout.addContent(ctrlSimpleForm);
				ctrlHorizontalLayout.addContent(ctrlVerticalLayout);

			});
			_oCtrlAdminSituationSuccessionPFormContainer.addContent(ctrlHorizontalLayout);
		}

	},

/*	buildUI: function() {
		var _oCtrlAdminSituationSuccessionPFormContainer = this.byId("ctrlAdminSituationSuccessionPFormHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		_oGroupedAdminSituationData.ADMIN_PFORM.vals.forEach(function(adminSituationSuccessionPFormItem) {
			var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
			ctrlVertLayout.addContent(new sap.m.Label({
				text: adminSituationSuccessionPFormItem.Fieldlabel
			}));
			ctrlVertLayout.addContent(new sap.m.Text({
				text: adminSituationSuccessionPFormItem.Fieldvalue,
				wrapping: true
			}));

			//		_oCtrlAdminSituationSuccessionPFormContainer.removeContent();
			_oCtrlAdminSituationSuccessionPFormContainer.addContent(ctrlVertLayout);
		});

	},*/

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});