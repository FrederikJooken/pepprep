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

		var _oPersonalInfoMedicalRestrictionsGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedPersonalInfoData.MEDIC_RESTRICTIONS).vals);

		if (_oPersonalInfoMedicalRestrictionsGroupedBySeqNr && Object.keys(_oPersonalInfoMedicalRestrictionsGroupedBySeqNr).length === 0) {
			_oCtrlPersonalInfoMedicalRestrictionsContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("MEDIC_RESTRICTIONS_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		} else {
			if (_oPersonalInfoMedicalRestrictionsGroupedBySeqNr && Object.keys(_oPersonalInfoMedicalRestrictionsGroupedBySeqNr).length > 1) {
				var subSecPersonalInfoMedicalRestriction = _oUIHelper.getSubSecPersonalInfoMedicalRestriction();
				subSecPersonalInfoMedicalRestriction.getBlocks()[0].setShowSubSectionMore(true);
			}
			var count = 0;

			for (var key in _oPersonalInfoMedicalRestrictionsGroupedBySeqNr) {
				if (count < 1) {
					var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();
					var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({});

					var disciplinaryObj = _oPersonalInfoMedicalRestrictionsGroupedBySeqNr[key].vals;
					disciplinaryObj.forEach(function(personalInfoMedicRestrictionItem) {
						if (personalInfoMedicRestrictionItem.Fieldlabel !== "") {
							ctrlSimpleForm.addContent(new sap.m.Text({
								text: personalInfoMedicRestrictionItem.Fieldlabel + ": " + personalInfoMedicRestrictionItem.Fieldvalue
							}));
						}
					});
					count++;
					ctrlHoriLayout.addContent(ctrlSimpleForm);
					_oCtrlPersonalInfoMedicalRestrictionsContainer.addContent(ctrlHoriLayout);
				}
			}
		}
	},

	/*buildUI: function() {
		var _oCtrlCarreerDisciplinaryContainer = this.byId("ctrlCarreerDisciplinaryHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		if (_oGroupedCarreerInfoData && _oGroupedCarreerInfoData.CARR_DISCIPLINARY && _oGroupedCarreerInfoData.CARR_DISCIPLINARY.vals.length ===
			0) {
			_oCtrlCarreerDisciplinaryContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_DISCIPLINARY_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		} else {
			if (_oGroupedCarreerInfoData && _oGroupedCarreerInfoData.CARR_DISCIPLINARY && _oGroupedCarreerInfoData.CARR_DISCIPLINARY.vals.length >
				3) {
				var subSecCarreerDisciplinary = _oUIHelper.getSubSecCarreerDisciplinary();
				subSecCarreerDisciplinary.getBlocks()[0].setShowSubSectionMore(true);
			}
			var count = 0;

			_oGroupedCarreerInfoData.CARR_DISCIPLINARY.vals.forEach(function(carreerDisciplinaryItem) {
				if (count < 3) {
					var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
					ctrlVertLayout.addContent(new sap.m.Label({
						text: carreerDisciplinaryItem.Fieldlabel,
						design: "Bold"
					}));
					ctrlVertLayout.addContent(new sap.m.Text({
						text: carreerDisciplinaryItem.Fieldvalue,
						wrapping: true
					}));

					_oCtrlCarreerDisciplinaryContainer.addContent(ctrlVertLayout);
					count++;
				}
			});

		}

	},*/

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});