// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/ManageSubscriptionDlg",["dijit","dojo","dojox","dojo/require!dijit/Dialog,dijit/_Widget,dijit/_Templated,dijit/form/Button,dijit/form/RadioButton,arcgisonline/sharing/util,arcgisonline/sharing/geow/Geow,arcgisonline/sharing/dijit/dialog/ChoiceDlg,arcgisonline/sharing/dijit/dialog/GeneralDlg"],function(c,a,d){a.provide("arcgisonline.sharing.dijit.dialog.ManageSubscriptionDlg");a.require("dijit.Dialog");a.require("dijit._Widget");a.require("dijit._Templated");
a.require("dijit.form.Button");a.require("dijit.form.RadioButton");a.require("arcgisonline.sharing.util");a.require("arcgisonline.sharing.geow.Geow");a.require("arcgisonline.sharing.dijit.dialog.ChoiceDlg");a.require("arcgisonline.sharing.dijit.dialog.GeneralDlg");a.declare("arcgisonline.sharing.dijit.dialog.ManageSubscriptionDlg",[c._Widget,c._Templated],{widgetsInTemplate:!0,templateString:'\x3cdiv class\x3d"widgetContent" \x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit.Dialog" id\x3d"manage-subscription-dialog" data-dojo-attach-point\x3d"_manageSubscriptionDlg" title\x3d"${i18n.manageSubscriptionTitle}" execute\x3d"" style\x3d"width:400px;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_upgradeSubscriptionDiv" style\x3d"display:none;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_inUSDiv"\x3e\x3c/div\x3e\x3cbr/\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_outsideUSDiv"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_manageSubscriptionDiv" style\x3d"display:none;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_manageSubscriptionContainer"\x3e\r\n        \x3cp\x3e${i18n.manageSubscriptionDesc}\x3c/p\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit.form.RadioButton" type\x3d"radio" name\x3d"manageOption" data-dojo-attach-point\x3d"_upgradeRadioBtn" id\x3d"upgrade-radio-button" value\x3d"upgrade" checked\x3d"true"\x3e\r\n        \x3cspan\x3e\x3clabel for\x3d"upgrade-radio-button"\x3e\x3cb\x3e${i18n.upgradeOption}\x3c/b\x3e\x3c/label\x3e\x3c/span\x3e\x3cbr/\x3e\r\n        \x3cdiv class\x3d"esriLeadingMargin15"\x3e${i18n.upgradeDesc}\x3c/div\x3e\x3cbr/\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_convertOptionDiv"\x3e\r\n          \x3cinput data-dojo-type\x3d"dijit.form.RadioButton" type\x3d"radio" name\x3d"manageOption" data-dojo-attach-point\x3d"_convertRadioBtn" id\x3d"convert-radio-button" value\x3d"convert"\x3e\r\n          \x3cspan\x3e\x3clabel for\x3d"convert-radio-button"\x3e\x3cb\x3e${i18n.convertOption}\x3c/b\x3e\x3c/label\x3e\x3c/span\x3e\x3cbr/\x3e\r\n          \x3cdiv class\x3d"esriLeadingMargin15"\x3e${i18n.convertDesc}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_evalSubscriptionContainer" style\x3d"display: none;"\x3e\r\n        \x3cp\x3e${i18n.upgradeOption} ${i18n.upgradeDesc}\x3c/p\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_purchaseInUSDiv"\x3e\x3c/div\x3e\x3cbr/\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_purchaseOutsideUSDiv"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_convertSubscriptionDiv" style\x3d"display:none;"\x3e\r\n      \x3cp\x3e${i18n.convertSubscriptionDesc}\x3c/p\x3e\r\n      \x3cp\x3e\x3cb\x3e${i18n.deleteHostedMsg}\x3c/b\x3e\x3cbr/\x3e${i18n.notAvailableMsg}\x3c/p\x3e\r\n      \x3cdiv\x3e\x3cb\x3e${i18n.importantMsg}\x3c/b\x3e\x3cdiv data-dojo-attach-point\x3d"_importantMsgDiv"\x3e\x3c/div\x3e\x3c/div\x3e\r\n      \x3cp\x3e\x3cb\x3e${i18n.intendToUpgradeMsg}\x3c/b\x3e\x3c/p\x3e\r\n    \x3c/div\x3e\r\n    \x3cbr/\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_buttonDiv" class\x3d"esriFloatTrailing"\x3e\r\n      \x3cbutton data-dojo-attach-point\x3d"_okBtn" data-dojo-attach-event\x3d"onClick:onCancel" class\x3d"jevent cancel" type\x3d"button" data-dojo-type\x3d"dijit.form.Button"\x3e${i18n.ok}\x3c/button\x3e\r\n      \x3cbutton data-dojo-attach-point\x3d"_nextBtn" data-dojo-attach-event\x3d"onClick:onNext" class\x3d"jevent primary" type\x3d"button" data-dojo-type\x3d"dijit.form.Button"\x3e${i18n.next}\x3c/button\x3e\r\n      \x3cbutton data-dojo-attach-point\x3d"_convertBtn" data-dojo-attach-event\x3d"onClick:onConvert" class\x3d"jevent primary" type\x3d"button" data-dojo-type\x3d"dijit.form.Button"\x3e${i18n.convertLabel}\x3c/button\x3e\r\n      \x3cbutton data-dojo-attach-point\x3d"_cancelBtn" data-dojo-attach-event\x3d"onClick:onCancel" class\x3d"jevent cancel" type\x3d"button" data-dojo-type\x3d"dijit.form.Button"\x3e${i18n.cancel}\x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cbr style\x3d"clear:both;"/\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
util:arcgisonline.sharing.util,geow:arcgisonline.sharing.geow.Geow,statics:{_instance:null,getInstance:function(){null==this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.ManageSubscriptionDlg);return this._instance}},_converting:!1,_choiceDlg:null,_selfResource:null,postMixInProperties:function(){this.inherited(arguments);this.i18n=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").manageSubscriptionDlg)},
postCreate:function(){this.inherited(arguments);this.loadConnections()},show:function(a){this.selfResource=a;this._showManageView()},showManage:function(a){this.selfResource=a;this.clear();this._showManageView();this._manageSubscriptionDlg.show()},showUpgrade:function(a){this.selfResource=a;this.clear();this._showUpgradeView();this._manageSubscriptionDlg.show()},_showUpgradeView:function(){this._manageSubscriptionDlg.set("title",this.i18n.upgradeSubscriptionTitle);("Trial"===this.selfResource.subscriptionInfo.type||
"Trial Press"===this.selfResource.subscriptionInfo.type||"Evaluation"===this.selfResource.subscriptionInfo.type)&&this._manageSubscriptionDlg.set("title",this.i18n.manageSubscriptionTitle);a.attr(this._inUSDiv,"innerHTML",esri.substitute({officeLinkStart:'\x3cspan class\x3d"esriItemLinks"\x3e\x3ca target\x3d"_blank" href\x3d"http://www.esri.com/about-esri/offices/"\x3e',officeLinkEnd:"\x3c/a\x3e\x3c/span\x3e"},this.i18n.upgradeInsideUS));a.attr(this._outsideUSDiv,"innerHTML",esri.substitute({officeLinkStart:'\x3cspan class\x3d"esriItemLinks"\x3e\x3ca target\x3d"_blank" href\x3d"http://www.esri.com/about-esri/offices/"\x3e',
officeLinkEnd:"\x3c/a\x3e\x3c/span\x3e"},this.i18n.upgradeOutsideUS));a.style(this._manageSubscriptionDiv,"display","none");a.style(this._convertSubscriptionDiv,"display","none");a.style(this._nextBtn.domNode,"display","none");a.style(this._convertBtn.domNode,"display","none");a.style(this._cancelBtn.domNode,"display","none");"active"===this.selfResource.subscriptionInfo.state&&("Trial"===this.selfResource.subscriptionInfo.type||"Trial Press"===this.selfResource.subscriptionInfo.type||"Evaluation"===
this.selfResource.subscriptionInfo.type)&&this._manageSubscriptionDlg.set("title",this.i18n.manageSubscriptionTitle);a.style(this._upgradeSubscriptionDiv,"display","");a.style(this._okBtn.domNode,"display","")},_showManageView:function(){this._manageSubscriptionDlg.set("title",this.i18n.manageSubscriptionTitle);a.style(this._upgradeSubscriptionDiv,"display","none");a.style(this._convertSubscriptionDiv,"display","none");a.style(this._okBtn.domNode,"display","none");a.style(this._convertBtn.domNode,
"display","none");this.selfResource.subscriptionInfo&&"Evaluation"===this.selfResource.subscriptionInfo.type?(a.style(this._convertOptionDiv,"display","none"),a.style(this._manageSubscriptionContainer,"display","none"),a.style(this._evalSubscriptionContainer,"display",""),a.attr(this._purchaseInUSDiv,"innerHTML",esri.substitute({officeLinkStart:'\x3cspan class\x3d"esriItemLinks"\x3e\x3ca target\x3d"_blank" href\x3d"http://www.esri.com/about-esri/offices/"\x3e',officeLinkEnd:"\x3c/a\x3e\x3c/span\x3e"},
this.i18n.upgradeInsideUS)),a.attr(this._purchaseOutsideUSDiv,"innerHTML",esri.substitute({officeLinkStart:'\x3cspan class\x3d"esriItemLinks"\x3e\x3ca target\x3d"_blank" href\x3d"http://www.esri.com/about-esri/offices/"\x3e',officeLinkEnd:"\x3c/a\x3e\x3c/span\x3e"},this.i18n.upgradeOutsideUS)),a.style(this._okBtn.domNode,"display",""),a.style(this._nextBtn.domNode,"display","none"),a.style(this._cancelBtn.domNode,"display","none")):(a.style(this._nextBtn.domNode,"display",""),a.style(this._cancelBtn.domNode,
"display",""));a.style(this._manageSubscriptionDiv,"display","")},_showConvertView:function(){this._manageSubscriptionDlg.set("title",this.i18n.convertToPersonalTitle);a.attr(this._importantMsgDiv,"innerHTML",esri.substitute({helpLinkStart:'\x3cspan class\x3d"esriItemLinks"\x3e\x3ca target\x3d"_blank" href\x3d"'+(this.selfResource.helpBase+this.selfResource.helpMap.m["120000592"])+'"\x3e',helpLinkEnd:"\x3c/a\x3e"},this.i18n.completeDetailsWithLinkMsg));a.style(this._upgradeSubscriptionDiv,"display",
"none");a.style(this._manageSubscriptionDiv,"display","none");a.style(this._okBtn.domNode,"display","none");a.style(this._nextBtn.domNode,"display","none");a.style(this._convertSubscriptionDiv,"display","");a.style(this._convertBtn.domNode,"display","");a.style(this._cancelBtn.domNode,"display","")},loadConnections:function(){a.query(".jevent").connect("onclick",function(a){a.preventDefault()})},clear:function(){this._converting=!1;this._choiceDlg=arcgisonline.sharing.dijit.dialog.ChoiceDlg.prototype.statics.getInstance();
this._manageSubscriptionDlg.set("title","");a.style(this._upgradeSubscriptionDiv,"display","none");a.style(this._manageSubscriptionDiv,"display","none");a.style(this._convertSubscriptionDiv,"display","none");a.style(this._convertOptionDiv,"display","");a.style(this._manageSubscriptionContainer,"display","");a.style(this._evalSubscriptionContainer,"display","none");this._upgradeRadioBtn.set("checked",!0)},hide:function(){this._manageSubscriptionDlg.hide()},onNext:function(a){this._convertRadioBtn.get("checked")?
this._showConvertView():this._showUpgradeView()},onConvert:function(b){this._converting||(b={title:this.i18n.convertToPersonalTitle,message:this.i18n.noReturnMsg,choiceOneTitle:this.i18n.yesLabel,choiceTwoTitle:this.i18n.noLabel,choiceOneHandler:a.hitch(this,this.doConvert)},this._choiceDlg.show(b))},doConvert:function(){if(!this._converting&&esriGeowConfig.self&&esriGeowConfig.self.id){this._converting=!0;this._convertBtn.set("disabled",!0);var b=esriGeowConfig.baseUrl.replace(location.host,esriGeowConfig.self.portalHostname)+
esriGeowConfig.signin,b=b.replace("http:","https:");this.util.request({url:esriGeowConfig.restBaseUrl+"portals/self/convert",content:{target:"personal",timeout:12E4}},{usePost:!0}).then(a.hitch(this,function(a){this.geow.signout(b)}),a.hitch(this,function(b){console.log("error converting account: ",b);this._converting=!1;this._convertBtn.set("disabled",!1);var c=arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();c.onOkClick=a.hitch(this,function(){c.hide();this._manageSubscriptionDlg.hide()});
c.show({title:this.i18n.errorTitle,message:this.i18n.unableToConvert})}))}},onCancel:function(a){c.byId("manage-subscription-dialog").hide()},onHide:function(){}})});