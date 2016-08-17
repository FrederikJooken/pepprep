/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var that = this;
		//var pernr = hcm.people.profile.util.UIHelper.getPernr();
		var isSubSectionUsed = false;
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;

		var oDataModel = hcm.people.profile.util.UIHelper.getODataModel();
		var queryPath = "AdministrativeSituationSet";
		oDataModel.read(queryPath, null, null, true, function(response) {

			var adminSituationColl = response.results;
			var groupNameList = [];
			var groupColl = [];
			var secAdminSituation = _oUIHelper.getSecAdminSituation();
			
			if(adminSituationColl.length>0){

    			adminSituationColl.forEach(function(adminSituationItem) {
    				// if (Date.parse(persInfoItem.Fieldvalue)) {
    				//     var formattedVal = hcm.people.profile.util.UIHelper.formatDate(persInfoItem.Fieldvalue);
    				//     if(formattedVal.toString().indexOf('NaN')===-1){
    				//         persInfoItem.Fieldvalue = formattedVal;
    				//     }
    				// }
    
    				if (groupColl[adminSituationItem.Groupname]) {
    					groupColl[adminSituationItem.Groupname].vals.push({
    						"Fieldlabel": adminSituationItem.Fieldlabel,
    						"Fieldvalue": adminSituationItem.Fieldvalue
    					});
    				} else {
    					groupNameList.push(adminSituationItem.Groupname);
    					groupColl[adminSituationItem.Groupname] = {
    						"groupName": adminSituationItem.Groupname,
    						vals: []
    					};
    					groupColl[adminSituationItem.Groupname].vals.push({
    						"Fieldlabel": adminSituationItem.Fieldlabel,
    						"Fieldvalue": adminSituationItem.Fieldvalue
    					});
    				}
    			});
    
    			groupNameList.forEach(function(grpName) {
    
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
    
    				if (!isSubSectionUsed) {
    
    					var subSection = _oUIHelper.getSubSecAdminSituation();
    					subSection.setTitle(grpName);
    					subSection.insertBlock(ctrlSimpleForm);
    					isSubSectionUsed = true;
    
    				} else {
    
    					var oNewSubSection = new sap.uxap.ObjectPageSubSection({
    						title: grpName
    					});
    					oNewSubSection.insertBlock(ctrlSimpleForm);
    					secAdminSituation.addSubSection(oNewSubSection);
    
    				}
    
    			});
    			
			}else{
			    that.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("ADMIN_SITUATION_NO_DATA"));
			    that.byId("dispStatusMsg").setVisible(true);
			}

		}, function(response) {
			jQuery.sap.log.getLogger().error("Data fetch failed" + response.toString());
		});

	},

	onExit: function() {

	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	}

});