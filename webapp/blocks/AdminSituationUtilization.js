jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilization");

jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilization", {
    metadata: {
        views: {
            Collapsed: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilization",
                type: "XML"
            },
            Expanded: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationUtilization",
                type: "XML"
            }
        },
        properties: {
           "columnLayout" : {type: "sap.uxap.BlockBaseColumnLayout", group: "Behavior", defaultValue: "3"}
        }
    }
});