jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerDisciplinaryExpandedController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {
		var _oCtrlCarreerDisciplinaryContainer = this.byId("ctrlCarreerDisciplinaryHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedCarreerInfoData = _oUIHelper.getGroupedCarreerInfoData();

		var _oCarreerInfoDisciplinaryGroupedBySeqNr = _oUIHelper.groupItemsPerSeqNr((_oGroupedCarreerInfoData.CARR_DISCIPLINARY).vals);

		//loop over the fields and values
		for (var key in _oCarreerInfoDisciplinaryGroupedBySeqNr) {
			var ctrlHorizontalLayout = new sap.ui.layout.HorizontalLayout({
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
				allowWrapping: true
			});
			var carreerDisciplinaryObj = _oCarreerInfoDisciplinaryGroupedBySeqNr[key].vals;
			carreerDisciplinaryObj.forEach(function(carreerDisciplinaryItem) {
				var ctrlVerticalLayout = new sap.ui.layout.VerticalLayout({
					layoutData: new sap.ui.layout.GridData({}),
					width: "250px"
				});

				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: carreerDisciplinaryItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerDisciplinaryItem.Fieldvalue,
					wrapping: true
				}));
				ctrlVerticalLayout.addContent(ctrlSimpleForm);
				ctrlHorizontalLayout.addContent(ctrlVerticalLayout);

			});
			_oCtrlCarreerDisciplinaryContainer.addContent(ctrlHorizontalLayout);
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