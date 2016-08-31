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

		/*
			var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
		    					maxContainerCols: 2,
		    					editable: false,
		    					layout: "ResponsiveGridLayout"
		    				});
		    
		    				groupColl[grpName].vals.forEach(function(fieldObj) {
		    					ctrlSimpleForm.addContent(new sap.m.Label({
		    						text: fieldObj.Fieldlabel
		    					}));
		    					ctrlSimpleForm.addContent(new sap.m.Text({
		    						text: fieldObj.Fieldvalue
		    					}));
		    				});


		*/
		//loop over the fields and values
		var counter = 1;
		for (var key in _oCarreerInfoDisciplinaryGroupedBySeqNr) {
		//	console.log("now handling object nr " + counter);
			var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();
			var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
		//		maxContainerCols: 4,
				editable: false
				/*,
				layout: "ResponsiveGridLayout"*/
			});
			var obj1 = _oCarreerInfoDisciplinaryGroupedBySeqNr[key].vals;
			obj1.forEach(function(carreerDisciplinaryItem) {

				ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerDisciplinaryItem.Fieldlabel + ": "+carreerDisciplinaryItem.Fieldvalue
				}));
				/*ctrlSimpleForm.addContent(new sap.m.Text({
					text: carreerDisciplinaryItem.Fieldvalue
				}));*/

	//			console.log(carreerDisciplinaryItem.Fieldlabel + " : " + carreerDisciplinaryItem.Fieldvalue);
			});
			counter++;
			ctrlHoriLayout.addContent(ctrlSimpleForm);
			_oCtrlCarreerDisciplinaryContainer.addContent(ctrlHoriLayout);
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