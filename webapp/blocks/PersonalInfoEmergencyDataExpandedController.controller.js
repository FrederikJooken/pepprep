jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoEmergencyDataExpandedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlPersonalInfoEmergencyDataContainer = this.byId("ctrlPersonalInfoEmergencyDataHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		var _oPersonalInfoEmergencyDataGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedPersonalInfoData.EMERGENCY_DATA).vals);

		for (var key in _oPersonalInfoEmergencyDataGroupedBySeqNr) {

			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});

			var emergencyDataObj = _oPersonalInfoEmergencyDataGroupedBySeqNr[key].vals;

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
			
			var nmbsSeparator = new sap.ui.core.HTML({content: "<hr class='subSectionSeparator'>"});
			_oCtrlPersonalInfoEmergencyDataContainer.addContent(nmbsSeparator);
		}

	},

	onExit: function() {

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	}

});