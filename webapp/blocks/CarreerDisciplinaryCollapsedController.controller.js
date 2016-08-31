jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinaryCollapsedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlCarreerDisciplinaryContainer = this.byId("ctrlCarreerDisciplinaryHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		var _oCarreerInfoDisciplinaryGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedCarreerInfoData.CARR_DISCIPLINARY).vals);

		if (_oCarreerInfoDisciplinaryGroupedBySeqNr && Object.keys(_oCarreerInfoDisciplinaryGroupedBySeqNr).length === 0) {
			_oCtrlCarreerDisciplinaryContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_DISCIPLINARY_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		} else {
			if (_oCarreerInfoDisciplinaryGroupedBySeqNr && Object.keys(_oCarreerInfoDisciplinaryGroupedBySeqNr).length > 1) {
				var subSecCarreerDisciplinary = _oUIHelper.getSubSecCarreerDisciplinary();
				subSecCarreerDisciplinary.getBlocks()[0].setShowSubSectionMore(true);
			}
			var count = 0;

			for (var key in _oCarreerInfoDisciplinaryGroupedBySeqNr) {
				if (count < 1) {
					var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();
					var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({});

					var disciplinaryObj = _oCarreerInfoDisciplinaryGroupedBySeqNr[key].vals;
					disciplinaryObj.forEach(function(carreerDisciplinaryItem) {
						if (carreerDisciplinaryItem.Fieldlabel !== "") {
							ctrlSimpleForm.addContent(new sap.m.Text({
								text: carreerDisciplinaryItem.Fieldlabel + ": " + carreerDisciplinaryItem.Fieldvalue
							}));
						}
					});
					count++;
					ctrlHoriLayout.addContent(ctrlSimpleForm);
					_oCtrlCarreerDisciplinaryContainer.addContent(ctrlHoriLayout);
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