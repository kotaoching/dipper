// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/JoinIDP",["dijit","dojo","dojox","dojo/i18n!arcgisonline/nls/arcgisonline","dojo/require!dijit/_Widget,dijit/_Templated,dijit/layout/ContentPane,arcgisonline/sharing/util,arcgisonline/sharing/dijit/dialog/GeneralDlg,arcgisonline/sharing/dijit/dialog/TermsOfUseDlg,arcgisonline/sharing/geow/Geow,arcgisonline/sharing/geow/Account"],function(e,b,f){b.provide("arcgisonline.sharing.dijit.JoinIDP");b.require("dijit._Widget");b.require("dijit._Templated");b.require("dijit.layout.ContentPane");
b.require("arcgisonline.sharing.util");b.require("arcgisonline.sharing.dijit.dialog.GeneralDlg");b.require("arcgisonline.sharing.dijit.dialog.TermsOfUseDlg");b.require("arcgisonline.sharing.geow.Geow");b.require("arcgisonline.sharing.geow.Account");b.requireLocalization("arcgisonline","arcgisonline");b.declare("arcgisonline.sharing.dijit.JoinIDP",[e._Widget,e._Templated],{widgetsInTemplate:!0,templateString:'\x3cdiv dojoType\x3d"dijit.layout.ContentPane" dojoAttachPoint\x3d"containerNode" style\x3d"display:none;"\x3e\r\n    \x3cdiv id\x3d"right" class\x3d"grid_7 omega last esriFloatLeading" style\x3d"width:600px;padding-left: 30%;padding-top:5%;"\x3e\r\n    \x3ch1 dojoAttachPoint\x3d"_welcomeHeader"\x3e\x3c/h1\x3e\r\n    \x3c!--\x3cp dojoAttachPoint\x3d"_instructions" class\x3d"section"\x3e\x3c/p\x3e--\x3e\r\n    \x3cbr /\x3e\r\n    \x3cdiv id\x3d"sign-in-error"\x3e\x3c/div\x3e\r\n    \x3ciframe dojoAttachPoint\x3d"_idpLink" id\x3d"oAuthFrame" scrolling\x3d"no" style\x3d"border:0" marginheight\x3d"0" marginwidth\x3d"0" frameborder\x3d"0" width\x3d"100%" height\x3d"600"\x3e\r\n      Your browser does not support iframes.\r\n    \x3c/iframe\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n',
baseClass:"joinIdp",_util:arcgisonline.sharing.util,_geow:arcgisonline.sharing.geow.Geow,_account:arcgisonline.sharing.geow.Account,constructor:function(){this.inherited(arguments);this._util.getCookie("esri_auth")&&this._geow.signout(window.location.href)},postMixInProperties:function(){this.inherited(arguments);this.i18n=b.i18n.getLocalization("arcgisonline","arcgisonline").common;b.mixin(this.i18n,b.i18n.getLocalization("arcgisonline","arcgisonline").signIn);b.mixin(this.i18n,b.i18n.getLocalization("arcgisonline",
"arcgisonline").joinIDP);this._errorDlg=arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();this._svcUrl=esriGeowConfig.restBaseUrl+(esriGeowConfig.restBaseUrl.lastIndexOf("/")===esriGeowConfig.restBaseUrl.length-1?"":"/");this._communityUri=this._svcUrl+"community/";this._usersUri=this._communityUri+"users/";this._accountsUri=this._svcUrl+"portals/";this._requestParams={f:"json"};b.mixin(this,b.queryToObject(window.location.search.slice(1)));this._oAuthInfo={url:esriGeowConfig.restBaseUrl+
"oauth2/authorize",clientId:"arcgisonline",redirectUri:esriGeowConfig.baseUrl+"postsignin.html",parent:window.location.protocol+"//"+window.location.host,expiration:20160,locale:b.locale,invitationId:this.invitation}},postCreate:function(){this.inherited(arguments)},startup:function(){this._account.getSelf(b.hitch(this,function(){window.onOAuthSignIn=b.hitch(this,"onOAuthSignIn");window.checkOAuthResponse=b.hitch(this,"checkOAuthResponse");window.onOAuthSignInError=b.hitch(this,"onOAuthSignInError");
this._oAuthInfo.url=arcgisonline.sharing.util.getSecureUrl(this._oAuthInfo.url);this._authorizeUrl=esri.substitute(this._oAuthInfo,"${url}?join\x3d${invitationId}\x26client_id\x3d${clientId}\x26redirect_uri\x3d${redirectUri}\x26response_type\x3dtoken\x26display\x3diframe\x26parent\x3d${parent}\x26expiration\x3d${expiration}\x26locale\x3d${locale}");return this._fetchInvitation().then(b.hitch(this,function(a){b.attr(this._idpLink,"src",this._authorizeUrl);b.connect(this._idpLink,"onload",b.hitch(this,
function(){b.attr(this._welcomeHeader,"innerHTML",esri.substitute({orgName:a.account.name},this.i18n.header));esri.show(this.domNode)}))}))}))},onOAuthSignIn:function(){-1!==b.byId("sign-in-error").className.indexOf("error")&&(b.byId("sign-in-error").innerHTML="\x26nbsp;",b.removeClass("sign-in-error","error"))},checkOAuthResponse:function(a){a=new b._Url(a);a=a.fragment?b.queryToObject(a.fragment):null;if(a.error)return this._showError({message:a.error_description});this._user=b.mixin(this._user||
{},b.mixin(a,{token:a.access_token}));this._requestParams.token=this._user.token;this.onJoinOrganization()},onOAuthSignInError:function(a){a&&a.length&&-1!==a[0].toLowerCase().indexOf("not a member")?(b.addClass("sign-in-error","error"),b.attr(b.byId("sign-in-error"),"innerHTML",this.i18n.error.notOrgMember+"\x3cbr/\x3e\x3cbr/\x3e")):this.signInError({code:400})},onJoinOrganization:function(){return this._redirectToProfile()},signInError:function(a){b.addClass("sign-in-error","error");b.attr(b.byId("sign-in-error"),
"innerHTML",a)},showTermsAndConditions:function(){var a=new b.Deferred;b.subscribe("registerUser",b.hitch(this,function(){a.resolve(!0)}));b.subscribe("declineTermsOfUse",b.hitch(this,function(){this._deleteUser(this._user.username).then(b.hitch(this,"_redirectToIndex"))}));arcgisonline.sharing.dijit.dialog.TermsOfUseDlg.prototype.statics.getInstance().show();return a},_deleteUser:function(a){return this._request(esriGeowConfig.restBaseUrl+"community/users/"+a+"/delete",{},{usePost:!0})},_redirectToProfile:function(){var a=
window.location.protocol+"//"+(this._invitation&&this._invitation.account&&this._invitation.account.customUrl||null||window.location.host)+"/home/user.html",c=new Date,d=!this._user.persist?Math.min(7200,Number(this._user.expires_in)):Number(this._user.expires_in),c=new Date(c.setSeconds(c.getSeconds()+Number(d)));user={username:this._user.username,token:this._user.token,expires_in:c.getTime()};this._geow.signInHandler2(user).then(b.hitch(this,function(){window.location=this._allSSL?a.replace("http:",
"https:"):a.replace("https:","http:")}))},_redirectToIndex:function(){var a=esriGeowConfig.baseUrl+"index.html";window.location=esriGeowConfig.allSSL?a.replace("http:","https:"):a.replace("https:","http:")},_fetchInvitation:function(){return this._request(this._communityUri+"invitations/"+this.invitation,{}).then(b.hitch(this,function(a){return this._invitation=a}))},_acceptInvitation:function(a){return this._request(esriGeowConfig.restBaseUrl+"community/invitations/"+a+"/accept",{},{usePost:!0})},
_request:function(a,c,d){c=b.mixin(c||{},this._requestParams);return this._util.request({url:a,content:c},d||{}).then(b.hitch(this,function(a){return a.error?this._showError(a.error):a}),b.hitch(this,function(a){this._showError(a);throw a;}))},_showError:function(a){a=a.error||a||{};a.code=a.messageCode||a.code||0;a=this.i18n.errors[a.code]||a;a.details=a.details&&a.details.length?b.filter(a.details,"return item !\x3d\x3d null"):null;a.details&&a.details.length&&(a.details=a.details.join("\x3cbr /\x3e"),
a.message=a.message?a.message+"\x3cbr /\x3e"+a.details:a.details);a=b.mixin(b.mixin({},this.i18n.errors.error),a);this._errorDlg.show(a);return!0}})});