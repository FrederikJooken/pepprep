jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoEmergencyDataCollapsedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlPersonalInfoEmergencyDataContainer = this.byId("ctrlPersonalInfoEmergencyDataHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		if (!_oGroupedPersonalInfoData || !_oGroupedPersonalInfoData.EMERGENCY_DATA) {
			_oCtrlPersonalInfoEmergencyDataContainer.setVisible(false);
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText(
				"PERSONAL_INFO_EMERGENCY_DATA_NO_DATA"));
			this.byId("dispStatusMsg").setVisible(true);
		} else {
			var _oPersonalInfoEmergencyDataGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedPersonalInfoData.EMERGENCY_DATA).vals);

			if (_oPersonalInfoEmergencyDataGroupedBySeqNr && Object.keys(_oPersonalInfoEmergencyDataGroupedBySeqNr).length > 1) {
				var subSecPersonalInfoEmergency = _oUIHelper.getSubSecPersonalInfoEmergency();
				subSecPersonalInfoEmergency.getBlocks()[0].setShowSubSectionMore(true);
			}
			var count = 0;

			for (var key in _oPersonalInfoEmergencyDataGroupedBySeqNr) {
				if (count < 1) {

					var emergencyDataObj = _oPersonalInfoEmergencyDataGroupedBySeqNr[key].vals;

					var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
						layoutData: new sap.ui.layout.GridData({
							span: "L12 M12 S12"
						}),
						allowWrapping: true
					});

					emergencyDataObj.forEach(function(personalInfoEmergencyItem) {
						var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
							layoutData: new sap.ui.layout.GridData({}),
							width: "250px"
						});
						var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
							layout: "ResponsiveGridLayout"
						});
						ctrlSimpleForm.addContent(new sap.m.Label({
							text: personalInfoEmergencyItem.Fieldlabel
						}));
						ctrlSimpleForm.addContent(new sap.m.Text({
							text: personalInfoEmergencyItem.Fieldvalue,
							wrapping: true
						}));

						ctrlVerticalLayout.addContent(ctrlSimpleForm);
						ctrlHorizontalLayout.addContent(ctrlVerticalLayout);
					});
					_oCtrlPersonalInfoEmergencyDataContainer.addContent(ctrlHorizontalLayout);
					count++;
				}
			}

		}
	},

	onExit: function() {

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	}

});