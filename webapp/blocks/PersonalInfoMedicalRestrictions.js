jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoMedicalRestrictions");

jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoMedicalRestrictions", {
    metadata: {
        views: {
            Collapsed: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoMedicalRestrictionsCollapsed",
                type: "XML"
            },
            Expanded: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoMedicalRestrictionsExpanded",
                type: "XML"
            }
        },
        properties: {
           "columnLayout" : {type: "sap.uxap.BlockBaseColumnLayout", group: "Behavior", defaultValue: "3"}
        }
    }
});