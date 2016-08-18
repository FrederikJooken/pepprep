jQuery.sap.require("hcm.people.profile.util.UIHelper");
jQuery.sap.require("hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.controller("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfoController", {

	onInit: function() {
		this.buildUI();
	},

	buildUI: function() {

		var that = this;
		var isSubSectionUsed = false;
		var _oUIHelper = hcm.people.profile.ZHCM_PEP_PROFILEExt.util.UIHelper;

		var oDataModel = hcm.people.profile.util.UIHelper.getODataModel();
		var queryPath = "CarreerInfoSet";
		oDataModel.read(queryPath, null, null, true, function(response) {

			var carreerInfoColl = response.results;
			var groupNameList = [];
			var groupColl = [];
			var secCarreerInfo = _oUIHelper.getSecCarreerInfo();
			
			if(carreerInfoColl.length>0){

    			carreerInfoColl.forEach(function(carreerInfoItem) {
    			
    				if (groupColl[carreerInfoItem.Groupname]) {
    					groupColl[carreerInfoItem.Groupname].vals.push({
    						"Fieldlabel": carreerInfoItem.Fieldlabel,
    						"Fieldvalue": carreerInfoItem.Fieldvalue
    					});
    				} else {
    					groupNameList.push(carreerInfoItem.Groupname);
    					groupColl[carreerInfoItem.Groupname] = {
    						"groupName": carreerInfoItem.Groupname,
    						vals: []
    					};
    					groupColl[carreerInfoItem.Groupname].vals.push({
    						"Fieldlabel": carreerInfoItem.Fieldlabel,
    						"Fieldvalue": carreerInfoItem.Fieldvalue
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
    
    					var subSection = _oUIHelper.getSubSecCarreerInfo();
    					subSection.setTitle(grpName);
    					subSection.insertBlock(ctrlSimpleForm);
    					isSubSectionUsed = true;
    
    				} else {
    
    					var oNewSubSection = new sap.uxap.ObjectPageSubSection({
    						title: grpName
    					});
    					oNewSubSection.insertBlock(ctrlSimpleForm);
    					secCarreerInfo.addSubSection(oNewSubSection);
    
    				}
    
    			});
    			
			}else{
			    that.byId("dispStatusMsg").setText(hcm.people.profile.util.UIHelper.getResourceBundle().getText("CARREER_INFO_NO_DATA"));
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