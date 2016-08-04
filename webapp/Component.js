jQuery.sap.registerModulePath("sap.hcm.lib.common", "/sap/bc/ui5_ui5/sap/hcm_common/sap/hcm/lib/common");
jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.Component");
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
			}
		},
		customizing: {}
	}
});