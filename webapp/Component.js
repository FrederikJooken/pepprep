jQuery.sap.registerModulePath("sap.hcm.lib.common", "/sap/bc/ui5_ui5/sap/hcm_common/sap/hcm/lib/common");
jQuery.sap.registerModulePath("be.nmbs.Z_UI5_GENERIC", "/sap/bc/ui5_ui5/sap/zui5_gen");
jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.Component");
/*global beNmbsUrlInterceptorObj:true*/

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.people.profile",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCM_PEP_PROFILE" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.hcm.people.profile.Component.extend("hcm.people.profile.ZHCM_PEP_PROFILEExt.Component", {
	metadata: {
		version: "1.0",
		config: {
			"sap.ca.i18Nconfigs": {
				"bundleName": "hcm.people.profile.ZHCM_PEP_PROFILEExt.i18n.i18n"
			},
			"sap.ca.serviceConfigs": [{
				"name": "HCM_PEOPLE_PROFILE_SRV",
				"serviceUrl": "/sap/opu/odata/sap/ZBM2_PEOPLE_PROFILE_SRV/",
				"isDefault": true,
				"mockedDataSource": "./localService/metadata.xml"
			}]
		},
		customizing: {
			"sap.ui.controllerExtensions": {
				"hcm.people.profile.view.Profile": {
					"controllerName": "hcm.people.profile.ZHCM_PEP_PROFILEExt.view.ProfileCustom"
				}
			},
			"sap.ui.viewReplacements": {
				"hcm.people.profile.view.Profile": {
					"viewName": "hcm.people.profile.ZHCM_PEP_PROFILEExt.view.ProfileCustom",
					"type": "XML"
				}
			}
		}
	}
	,

	init: function() {
		sap.ui.core.UIComponent.prototype.init.apply(this);

		//CRxx (mail do 25/08/2016 11:31 & meeting 25/08 1pm)
		var oComponentData = this.getComponentData(),
			oStartUpParameters = oComponentData.startupParameters;


		if (oStartUpParameters && (oStartUpParameters.hasOwnProperty("UNAME_SUBST") || oStartUpParameters.hasOwnProperty("PERNR_SEL_SUBST"))) { 
			jQuery.sap.require('be.nmbs.Z_UI5_GENERIC.utils.URLInterceptor');
			var atLeastOneParamSet = false, sParamStringToPass="";
			
			if (oStartUpParameters.hasOwnProperty("UNAME_SUBST")){
				sParamStringToPass+="UNAME_SUBST="+ oStartUpParameters.UNAME_SUBST[0];
				atLeastOneParamSet = true;
			}
			
			if (oStartUpParameters.hasOwnProperty("PERNR_SEL_SUBST")){
				if (atLeastOneParamSet){
					sParamStringToPass+="&";
				}
				sParamStringToPass+="PERNR_SEL_SUBST="+ oStartUpParameters.PERNR_SEL_SUBST[0];
			}
			
			beNmbsUrlInterceptorObj.setParams(sParamStringToPass);
		}
	}
});