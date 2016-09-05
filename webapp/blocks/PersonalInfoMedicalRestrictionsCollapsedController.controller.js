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
			this.byId("dispStatusMsg").setVisible(true);
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