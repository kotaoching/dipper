// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/ComboBox",["dijit","dojo","dojox","dojo/require!dijit/form/ComboBox"],function(b,a,c){a.provide("arcgisonline.sharing.dijit.ComboBox");a.require("dijit.form.ComboBox");a.declare("arcgisonline.sharing.dijit.ComboBox",b.form.ComboBox,{autoComplete:!1,templateString:a.cache("arcgisonline.sharing.dijit","templates/ComboBox.html",'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\r\n     id\x3d"widget_${id}"\r\n     role\x3d"combobox"\r\n     aria-haspopup\x3d"true"\r\n     data-dojo-attach-point\x3d"_popupStateNode"\r\n    \x3e\x3cdiv class\x3d\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\r\n          data-dojo-attach-point\x3d"_buttonNode" role\x3d"presentation"\r\n    \x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"button presentation" aria-hidden\x3d"true"\r\n  ${_buttonInputDisabled}\r\n  /\x3e\x3c/div\r\n    \x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\r\n    \x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\r\n    /\x3e\x3c/div\r\n    \x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\r\n    \x3e\x3cinput class\x3d\'dijitReset dijitInputInner\' readonly\x3d"readonly" ${!nameAttrSetting} type\x3d"text" autocomplete\x3d"off"\r\n  data-dojo-attach-point\x3d"textbox,focusNode" role\x3d"textbox"\r\n  /\x3e\x3c/div\r\n\x3e\x3c/div\x3e')})});