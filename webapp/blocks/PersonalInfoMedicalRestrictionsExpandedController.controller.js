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
	
		//loop over the fields and values
		for (var key in _oPersonalInfoMedicalRestrictionsGroupedBySeqNr) {
			var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();
			var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
		//		maxContainerCols: 4,
				editable: false
				/*,
				layout: "ResponsiveGridLayout"*/
			});
			var obj1 = _oPersonalInfoMedicalRestrictionsGroupedBySeqNr[key].vals;
			obj1.forEach(function(personalInfoMedicRestrictionItem) {

				ctrlSimpleForm.addContent(new sap.m.Text({
					text: personalInfoMedicRestrictionItem.Fieldlabel + ": "+personalInfoMedicRestrictionItem.Fieldvalue
				}));
				/*ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerDisciplinaryItem.Fieldvalue
				}));*/

	//			console.log(carreerDisciplinaryItem.Fieldlabel + " : " + carreerDisciplinaryItem.Fieldvalue);
			});
			ctrlHoriLayout.addContent(ctrlSimpleForm);
			_oCtrlPersonalInfoMedicalRestrictionsContainer.addContent(ctrlHoriLayout);
		}
	},

	/*	buildUI: function() {
			var _oCtrlCarreerDisciplinaryContainer = this.byId("ctrlCarreerDisciplinaryHolder");
			var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
			var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

			_oGroupedCarreerInfoData.CARR_DISCIPLINARY.vals.forEach(function(carreerDisciplinaryItem) {
					var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
					ctrlVertLayout.addContent(new sap.m.Label({
						text: carreerDisciplinaryItem.Fieldlabel,
						design: "Bold"
					}));
					ctrlVertLayout.addContent(new sap.m.Text({
						text: carreerDisciplinaryItem.Fieldvalue,
						wrapping: true
					}));

			//		_oCtrlCarreerDisciplinaryContainer.removeContent();
					_oCtrlCarreerDisciplinaryContainer.addContent(ctrlVertLayout);
			});

		},*/

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	}

});