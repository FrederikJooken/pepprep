jQuery.sap.declare("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo");

jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo", {
    metadata: {
        views: {
            Collapsed: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo",
                type: "XML"
            },
            Expanded: {
                viewName: "hcm.people.profile.ZHCM_PEP_PROFILEExt.blocks.CarreerInfo",
                type: "XML"
            }
        },
        properties: {
           "columnLayout" : {type: "sap.uxap.BlockBaseColumnLayout", group: "Behavior", defaultValue: "2"}
        }
    }
});