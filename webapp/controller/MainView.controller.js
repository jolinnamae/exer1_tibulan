sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.training.exer1tibulan.controller.MainView", {

        onInit: function () {
            // Initialization code (if any)
        },

        onAddItem: function () {
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },
        

        fnDisplayMsg: function (sMsg) {
            MessageToast.show(sMsg);
        },

        onPressCheckout: function () {
            var oView = this.getView();

            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            var oInputFName = oView.byId("idInptFName");
            var oInputLName = oView.byId("idInptLName");
            var oSelMOP = oView.byId("idSelMOP");

            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oSelMOPValue = oSelMOP.getSelectedKey();

            var oInputCC = oView.byId("idInptCreditCard");
            var oInputExp = oView.byId("idInptExpDate");
            var oInputCVV = oView.byId("idInptCVV");

            // Basic required fields
             if (oInputFNameValue === "" || oInputLNameValue === "" || oSelMOPValue === "") {
                MessageToast.show(oTextBundle.getText("requiredFieldsMsg"));
             }
            // Credit card validation
            else if (oSelMOPValue === "CC" && (
                oInputCC.getValue() === "" ||
                oInputExp.getValue() === "" ||
                oInputCVV.getValue() === "")) {
                MessageToast.show(oTextBundle.getText("creditCardDetailsMsg"));
            }
            else {
                MessageToast.show(oTextBundle.getText("proceedingCheckoutMsg"));
            }
        },

        onChangeMOP: function () {
            var oView = this.getView();
            var oSelMOP = oView.byId("idSelMOP");
    
            var oSelMOPValue = this.getView().byId("idSelMOP").getSelectedKey();
            var oSelMOPText = this.getView().byId("idSelMOP").getSelectedItem().getText();
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            MessageToast.show(oTextBundle.getText("selectedModeOfPaymentMsg", [oSelMOPText]));

            var oCreditCardFields = this.getView().byId("idCreditCardFields");
            oCreditCardFields.setVisible(oSelMOPValue === "CC");
        }

    });
});
