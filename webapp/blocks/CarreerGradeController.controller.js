jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerGradeController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlCarreerGradeContainer = this.byId("ctrlCarreerGradeHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		if (_oGroupedCarreerInfoData && _oGroupedCarreerInfoData.CARR_GRADE) {

			// for each item in the carreer Grade array
			_oGroupedCarreerInfoData.CARR_GRADE.vals.forEach(function(carreerGradeItem) {
				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					maxContainerCols: 2,
					editable: false,
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: carreerGradeItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerGradeItem.Fieldvalue
				}));
				_oCtrlCarreerGradeContainer.addContent(ctrlSimpleForm);
			});

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_GRADE_NO_DATA"));
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