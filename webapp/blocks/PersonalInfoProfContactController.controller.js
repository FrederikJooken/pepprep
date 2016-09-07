jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoProfContactController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlPersonalInfoProfContactContainer = this.byId("ctrlPersonalInfoProfContactHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedPersonalInfoData = _oUIHelper.getGroupedPersonalInfoData();

		if (_oGroupedPersonalInfoData && _oGroupedPersonalInfoData.PROF_CONTACT) {

			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});

			// for each item in the personal info person data array
			_oGroupedPersonalInfoData.PROF_CONTACT.vals.forEach(function(personalInfoProfContactItem) {

				var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
					layoutData: new sap.ui.layout.GridData({}),
					width: "250px"
				});

				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: personalInfoProfContactItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: personalInfoProfContactItem.Fieldvalue
				}));

				ctrlVerticalLayout.addContent(ctrlSimpleForm);
				ctrlHorizontalLayout.addContent(ctrlVerticalLayout);
			});
			_oCtrlPersonalInfoProfContactContainer.addContent(ctrlHorizontalLayout);

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("PERSONAL_INFO_PERS_CONTACT_NO_DATA"));
			this.byId("dispStatusMsgGrid").setVisible(true);
		}

	},

	onExit: function() {

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	}

});