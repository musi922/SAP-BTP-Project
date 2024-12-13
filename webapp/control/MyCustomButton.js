sap.ui.define([
    "sap/m/Button",
    "sap/ui/core/Control",
    "sap/ui/core/library"
], function(Button, Control, coreLibrary) {
    "use strict";

    var CustomButton = Button.extend("sapbtpproject.control.CustomButton", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "" },
                icon: { type: "sap.ui.core.URI", defaultValue: "" },
                borderColor: { type: "sap.ui.core.CSSColor", defaultValue: "#ccc" },
                borderWidth: { type: "sap.ui.core.CSSSize", defaultValue: "1px" },
                borderStyle: { type: "sap.ui.core.Style", defaultValue: "solid" },
                backgroundColor: { type: "sap.ui.core.CSSColor", defaultValue: "#f2f2f2" },
                height: { type: "sap.ui.core.CSSSize", defaultValue: "2.75rem" }
            }
        },
        renderer: {
            apiVersion: 2,
            render: function(oRm, oControl) {
                oRm.openStart("button", oControl);
                oRm.class("customButton");
                oRm.style("height", oControl.getHeight());
                oRm.style("border", oControl.getBorderWidth() + " " + oControl.getBorderStyle() + " " + oControl.getBorderColor());
                oRm.style("background-color", oControl.getBackgroundColor());
                oRm.openEnd();
                if (oControl.getIcon()) {
                    oRm.icon(oControl.getIcon(), "sapUiBtn");
                }
                oRm.text(oControl.getText());
                oRm.close("button");
            }
        }
    });

    return CustomButton;
});