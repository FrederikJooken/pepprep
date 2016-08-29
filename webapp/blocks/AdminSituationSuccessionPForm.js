jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPForm");

jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPForm", {
    metadata: {
        views: {
            Collapsed: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPFormCollapsed",
                type: "XML"
            },
            Expanded: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.AdminSituationSuccessionPFormExpanded",
                type: "XML"
            }
        },
        properties: {
           "columnLayout" : {type: "sap.uxap.BlockBaseColumnLayout", group: "Behavior", defaultValue: "2"}
        }
    }
});