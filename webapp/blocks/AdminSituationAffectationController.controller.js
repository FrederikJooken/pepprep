jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationAffectationController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var _oCtrlAdminSituationAffectationContainer = this.byId("ctrlAdminSituationAffectationHolder");
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;
		var _oGroupedAdminSituationData = _oUIHelper.getGroupedAdminSituationData();

		if (_oGroupedAdminSituationData && _oGroupedAdminSituationData.ADMIN_AFFECTATION) {

			// for each item in the affectation  array
			_oGroupedAdminSituationData.ADMIN_AFFECTATION.vals.forEach(function(adminSituationAffectationItem) {
				//optie 1

					var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
						maxContainerCols: 2,
						editable: false,
						layout: "ResponsiveGridLayout"
					});
					ctrlSimpleForm.addContent(new sap.m.Label({
						text: adminSituationAffectationItem.Fieldlabel
					}));
					ctrlSimpleForm.addContent(new sap.m.Text({
						text: adminSituationAffectationItem.Fieldvalue
					}));
					_oCtrlAdminSituationAffectationContainer.addContent(ctrlSimpleForm);
				//end optie 1

				//optie 2
				/*		var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
						ctrlVertLayout.addContent(new sap.m.Text({
							text: adminSituationAffectationItem.Fieldlabel + ": " + adminSituationAffectationItem.Fieldvalue,
							wrapping: false
						}));
						_oCtrlAdminSituationAffectationContainer.addContent(ctrlVertLayout);*/
				//end optie 2 -> tot nu toe beste

				//optie 3

				/*	var ctrlHorizLayout = new sap.ui.layout.HorizontalLayout({
						content: [
							new sap.ui.layout.VerticalLayout({
								content: [
									new sap.m.Label({
										text: adminSituationAffectationItem.Fieldlabel+":"
									})
								
								]
							}).addStyleClass("sapUiLargeMarginEnd"),
							new sap.ui.layout.VerticalLayout({
								content: [
									new sap.m.Text({
										text: adminSituationAffectationItem.Fieldvalue
									})
								]
							})
						]
					});
					_oCtrlAdminSituationAffectationContainer.addContent(ctrlHorizLayout);*/

				//end optie 3

				//optie 4
				/*	var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
					var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();
					ctrlHoriLayout.addContent(new sap.m.Label({
							text: adminSituationAffectationItem.Fieldlabel+": ",
							wrapping: true,
							design: "Bold"
						}));
					
					ctrlHoriLayout.addContent(new sap.m.Text({
							text: adminSituationAffectationItem.Fieldvalue,
							wrapping: true
						}));
						
					ctrlVertLayout.addContent(ctrlHoriLayout);
					_oCtrlAdminSituationAffectationContainer.addContent(ctrlVertLayout); */
				//end optie 4

				//optie 5
				/*		var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
						var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();

						var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
							maxContainerCols: 2,
							editable: false,
							layout: "ResponsiveGridLayout"
						});
						ctrlSimpleForm.addContent(new sap.m.Label({
							text: adminSituationAffectationItem.Fieldlabel
						}));
						ctrlSimpleForm.addContent(new sap.m.Text({
							text: adminSituationAffectationItem.Fieldvalue
						}));
						ctrlVertLayout.addContent(ctrlSimpleForm);
					//	ctrlSimpleForm.addContent(ctrlHoriLayout);
						_oCtrlAdminSituationAffectationContainer.addContent(ctrlSimpleForm);*/
				//end optie 5

				//optie 6
			/*	var ctrlVertLayout = new sap.ui.layout.VerticalLayout();
				var ctrlHoriLayout = new sap.ui.layout.HorizontalLayout();
				var ctrlSimpleForm = new sap.ui.layout.form.SimpleForm({
					maxContainerCols: 1,
					editable: false,
					layout: "ResponsiveGridLayout"
				});
				ctrlSimpleForm.addContent(new sap.m.Label({
					text: adminSituationAffectationItem.Fieldlabel
				}));
				ctrlSimpleForm.addContent(new sap.m.Text({
					text: adminSituationAffectationItem.Fieldvalue
				}));
				ctrlVertLayout.addContent(ctrlSimpleForm);
				_oCtrlAdminSituationAffectationContainer.addContent(ctrlVertLayout);*/
				//end optie 6

			});

			//		

		} else {
			this.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("ADMINSITUATION_AFFECTATION_NO_DATA"));
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