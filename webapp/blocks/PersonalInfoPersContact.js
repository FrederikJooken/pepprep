jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoPersContact");

jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoPersContact", {
    metadata: {
        views: {
            Collapsed: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoPersContact",
                type: "XML"
            },
            Expanded: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.PersonalInfoPersContact",
                type: "XML"
            }
        },
        properties: {
           "columnLayout" : {type: "sap.uxap.BlockBaseColumnLayout", group: "Behavior", defaultValue: "3"}
        }
    }
});