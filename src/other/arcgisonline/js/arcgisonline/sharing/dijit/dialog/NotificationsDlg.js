// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/NotificationsDlg",["dijit","dojo","dojox","dojo/require!dijit/Dialog,dijit/_Widget,dijit/_Templated,arcgisonline/sharing/dijit/NotificationsList"],function(b,a,c){a.provide("arcgisonline.sharing.dijit.dialog.NotificationsDlg");a.require("dijit.Dialog");a.require("dijit._Widget");a.require("dijit._Templated");a.require("arcgisonline.sharing.dijit.NotificationsList");a.declare("arcgisonline.sharing.dijit.dialog.NotificationsDlg",[b._Widget,b._Templated],{widgetsInTemplate:!0,
templateString:'\x3cdiv class\x3d"widgetContent" \x3e\r\n  \t\x3cdiv dojotype\x3d"dijit.Dialog" dojoAttachPoint\x3d"_notificationDlg" title\x3d"${i18n.notificationDlgTitle}" style\x3d"width:435px;" execute\x3d""\x3e\r\n\t\t\x3clabel \x3e${i18n.notificationMsg}\x3c/label\x3e\r\n\t\t\x3cbr /\x3e\r\n\t\t\x3cbr /\x3e\r\n        \x3cdiv dojotype\x3d"dijit.layout.BorderContainer" id\x3d"notificationsContainer" region\x3d"center" jsid\x3d"container" gutters\x3d"false" design\x3d"headline" style\x3d"height: 180px;"\x3e\r\n            \x3cdiv dojotype\x3d"dijit.layout.ContentPane" region\x3d"top" splitter\x3d"false"\x3e\r\n\t\t\t\t\x3cdiv dojoType\x3d"arcgisonline.sharing.dijit.NotificationsList" jsid\x3d"notificationsList" id\x3d"notificationsList"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\t\t\t\r\n\t  \t\x3cbr /\x3e \t \t\r\n\t  \t\x3cdiv style\x3d"float: right; padding-top:0px; padding-bottom:5px;"\x3e\r\n\t\t  \t\x3cbutton id\x3d"button_notifications-close" dojoType\x3d"dijit.form.Button" class\x3d"primary" dojoAttachEvent\x3d"onClick:_handleCloseBtn"\x3e${i18n.close}\x3c/button\x3e\r\n\t  \t\x3c/div\x3e\r\n\t  \t\x3cbr /\x3e\x26nbsp;\x3cbr /\x3e \r\n  \t\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
i18n:null,_notificationDlg:null,statics:{_instance:null,getInstance:function(){null==this._instance&&(this._instance=new arcgisonline.sharing.dijit.dialog.NotificationsDlg);return this._instance}},postMixInProperties:function(){this.inherited(arguments);this.i18n=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(this.i18n,a.i18n.getLocalization("arcgisonline","arcgisonline").notificationsDlg)},postCreate:function(){this.loadConnections()},show:function(){notificationsList.loadList();
this._notificationDlg.show()},loadConnections:function(){a.subscribe("onNotificationDelete",this,"onNotificationDelete")},_handleCloseBtn:function(a){a.preventDefault();this._notificationDlg.hide()},onNotificationDelete:function(){notificationsList.updateList()},hide:function(){this._notificationDlg.hide()}})});