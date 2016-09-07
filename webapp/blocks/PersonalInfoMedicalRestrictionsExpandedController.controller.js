jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoMedicalRestrictionsExpandedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlPersonalInfoMedicalRestrictionsContainer = this.byId("ctrlPersonalInfoMedicalRestrictionsHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		var _oPersonalInfoMedicalRestrictionsGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedPersonalInfoData.MEDIC_RESTRICTIONS).vals);

		for (var key in _oPersonalInfoMedicalRestrictionsGroupedBySeqNr) {
			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});

			var medicalRestrictionObj = _oPersonalInfoMedicalRestrictionsGroupedBySeqNr[key].vals;
			medicalRestrictionObj.forEach(function(personalInfoMedicRestrictionItem) {

				var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
					layoutData: new sap.ui.layout.GridData({}),
					width: "250px"
				});

				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: personalInfoMedicRestrictionItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: personalInfoMedicRestrictionItem.Fieldvalue,
					wrapping: true
				}));
				ctrlVerticalLayout.addContent(ctrlSimpleForm);
				ctrlHorizontalLayout.addContent(ctrlVerticalLayout);
			});
			_oCtrlPersonalInfoMedicalRestrictionsContainer.addContent(ctrlHorizontalLayout);
					
			var nmbsSeparator = new sap.ui.core.HTML({content: "<hr class='subSectionSeparator'>"});
			_oCtrlPersonalInfoMedicalRestrictionsContainer.addContent(nmbsSeparator);
		}

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}
});