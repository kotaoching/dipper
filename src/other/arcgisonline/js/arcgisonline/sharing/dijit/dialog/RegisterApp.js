// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/dialog/RegisterApp",["dijit","dojo","dojox","dojo/require!dijit/_WidgetBase,dijit/registry,dijit/form/MultiSelect,arcgisonline/sharing/util,arcgisonline/sharing/dijit/dialog/GeneralDlg,dgrid/OnDemandList,dojo/store/Memory,dgrid/Selection"],function(d,a,e){a.provide("arcgisonline.sharing.dijit.dialog.RegisterApp");a.require("dijit._WidgetBase");a.require("dijit.registry");a.require("dijit.form.MultiSelect");a.require("arcgisonline.sharing.util");a.require("arcgisonline.sharing.dijit.dialog.GeneralDlg");
a.require("dgrid.OnDemandList");a.require("dojo.store.Memory");a.require("dgrid.Selection");a.declare("arcgisonline.sharing.dijit.dialog.RegisterApp",[d._WidgetBase],{baseClass:"esriRegisterApp",onRegister:function(){},onCancel:function(){},postMixInProperties:function(){this._util=arcgisonline.sharing.util;this._errorDlg=arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();this.i18n=a.mixin({},a.i18n.getLocalization("arcgisonline","arcgisonline").common);this.i18n=a.mixin(this.i18n,
a.i18n.getLocalization("arcgisonline","arcgisonline").registerApp)},buildRendering:function(){var b=document.createDocumentFragment({}),c=[{value:"browser",label:this.i18n.browser},{value:"native",label:this.i18n.nativeLabel},{value:"server",label:this.i18n.server},{value:"multiple",label:this.i18n.multiple}];this.fieldSet=a.create("fieldset",{"class":"esriItemLinks"},b);this.roFieldSet=a.create("fieldset",{"class":"readOnly esriItemLinks",style:{display:"none"}},b);a.create("label",{"for":"appType",
innerHTML:this.i18n.appType},this.fieldSet);this._appType=new d.form.Select({name:"appType",options:c,style:{width:"405px"}},a.create("input",{},this.fieldSet));a.create("br",{},this.fieldSet);c=a.create("div",{"class":"redirects"},this.fieldSet);a.create("label",{"for":"redirectUri",innerHTML:this.i18n.redirectUri},c);this._redirectUriTextBox=new d.form.TextBox({name:"redirectUri",trim:"true",placeHolder:this.i18n.urlPlaceHolder},a.create("input",{},c));this._addBtn=new d.form.Button({"class":"calcite small",
label:this.i18n.add},a.create("button",{},c));this._delBtn=new d.form.Button({"class":"calcite small",label:this.i18n.del,disabled:!0},a.create("button",{},c));this._redirectUrisStore=new a.store.Observable(a.store.Memory());this._redirectUrisSelect=new (a.declare([dgrid.OnDemandList,dgrid.Selection]))({selectionMode:"toggle",store:this._redirectUrisStore,sort:"id",showHeader:!1,renderRow:function(b,c){return a.create("div",{innerHTML:b.value})}},a.create("div",{"class":"esriLeadingMargin105"},c));
this._redirectUrisNew=c;a.create("label",{innerHTML:this.i18n.app_id},this.roFieldSet);this._appId=a.create("span",{},this.roFieldSet);a.create("br",{},this.roFieldSet);a.create("label",{innerHTML:this.i18n.app_secret},this.roFieldSet);this._showSecretLink=a.create("a",{innerHTML:this.i18n.showSecret,href:"#",style:{display:"inline-block"}},this.roFieldSet);this._appSecret=a.create("span",{style:{display:"none"}},this.roFieldSet);a.create("br",{},this.roFieldSet);a.create("label",{innerHTML:this.i18n.appType},
this.roFieldSet);this._appTypeValue=a.create("span",{},this.roFieldSet);a.create("br",{},this.roFieldSet);a.create("label",{"class":"readMode",innerHTML:this.i18n.redirectUris},this.roFieldSet);this._redirectUris=a.create("span",{"class":"readMode"},this.roFieldSet);a.create("br",{"class":"readMode"},this.roFieldSet);this._redirectUrisEdit=a.create("div",{"class":"editMode",style:{display:"none"}},this.roFieldSet);this.inherited(arguments);this.domNode.appendChild(b)},postCreate:function(){this.connect(this._showSecretLink,
"onclick",function(b){b.preventDefault();a.style(this._appSecret,"display","inline-block");esri.hide(this._showSecretLink)});this.connect(this._addBtn,"onClick",a.hitch(this,function(){var a=this._redirectUriTextBox.get("value").split(/[ ,]+/);this._addRedirectUrl(a);this._redirectUriTextBox.set("value","")}));this.connect(this._delBtn,"onClick",a.hitch(this,function(){var a=this._redirectUrisSelect.get("selection"),c;for(c in a)a.hasOwnProperty(c)&&this._redirectUrisStore.remove(c);this._delBtn.set("disabled",
!0)}));a.on(this._redirectUrisSelect,"dgrid-select, dgrid-deselect",a.hitch(this,function(){var a=this._redirectUrisSelect.get("selection"),c=0,d;for(d in a)a.hasOwnProperty(d)&&++c;this._delBtn.set("disabled",!c)}))},_addRedirectUrl:function(b){a.forEach(b,a.hitch(this,function(a){this._redirectUrisStore.add({id:a,value:a})}))},_setRegisteredAppInfoAttr:function(b){a.style(this._appSecret,"display","none");a.style(this._showSecretLink,"display","inline-block");if(this.registeredAppInfo=b)a.attr(this._appId,
"innerHTML",b.client_id),a.attr(this._appSecret,"innerHTML",b.client_secret),this._redirectUrisStore.setData([]),this._addRedirectUrl(b.redirect_uris),a.attr(this._redirectUris,"innerHTML",b.redirect_uris.join(", ")),a.attr(this._appTypeValue,"innerHTML",b.appType),esri.hide(this.fieldSet),esri.show(this.roFieldSet)},_setEditModeAttr:function(){a.place(this._redirectUrisNew,this._redirectUrisEdit);a.query(".readMode",this.domNode).forEach(esri.hide);a.query(".editMode",this.domNode).forEach(esri.show)},
_setDisabledAttr:function(b){a.forEach(d.registry.findWidgets(this.domNode),function(a){a.set("disabled",b)})},_getValueAttr:function(){var a={appType:this._appType.get("value"),redirect_uris:[]};this._redirectUrisStore.query({}).forEach(function(c){a.redirect_uris.push(c.value)});return a}})});