jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoMedicalRestrictionsCollapsedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlPersonalInfoMedicalRestrictionsContainer = this.byId("ctrlPersonalInfoMedicalRestrictionsHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		if (!_oGroupedPersonalInfoData || !_oGroupedPersonalInfoData.MEDIC_RESTRICTIONS) {
			_oCtrlPersonalInfoMedicalRestrictionsContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("PERSONAL_INFO_MEDICAL_RESTRICT_NO_DATA"));
			this.byId("dispStatusMsgGrid").setVisible(true);
		} else {
			var _oPersonalInfoMedicalRestrictionsGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedPersonalInfoData.MEDIC_RESTRICTIONS).vals);

			if (_oPersonalInfoMedicalRestrictionsGroupedBySeqNr && Object.keys(_oPersonalInfoMedicalRestrictionsGroupedBySeqNr).length > 1) {
				var subSecPersonalInfoMedicalRestriction = _oUIHelper.getSubSecPersonalInfoMedicalRestriction();
				subSecPersonalInfoMedicalRestriction.getBlocks()[0].setShowSubSectionMore(true);
			}
			var count = 0;

			for (var key in _oPersonalInfoMedicalRestrictionsGroupedBySeqNr) {
				if (count < 1) {
					var medicalRestrictionObj = _oPersonalInfoMedicalRestrictionsGroupedBySeqNr[key].vals;
					var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
						layoutData: new sap.ui.layout.GridData({
							span: "L12 M12 S12"
						}),
						allowWrapping: true
					});

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
					count++;
					_oCtrlPersonalInfoMedicalRestrictionsContainer.addContent(ctrlHorizontalLayout);
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