// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/UserSelector","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/mouse dojo/on dojo/Deferred dijit/registry dojo/dom-attr dojo/dom-construct dijit/Tooltip esri/lang arcgisonline/sharing/util arcgisonline/sharing/dijit/GroupSelector arcgisonline/sharing/geow/Community dojo/i18n!arcgisonline/nls/arcgisonline".split(" "),function(u,v,p,l,w,x,C,y,r,s,z,g,m,A,B,q){return v("arcgisonline.sharing.dijit.UserSelector",[A],{declaredClass:"arcgisonline.sharing.dijit.UserSelector",
basePath:u.toUrl("arcgisonline/sharing/dijit"),profiles:[],constructor:function(a){this._setConstructorProperties(a)},postMixInProperties:function(){this._mixinI18N()},destroy:function(){this.inherited(arguments);this._clearProfilePopups()},_mixinI18N:function(){var a={};p.mixin(a,q.common);p.mixin(a,q.groupSelector);p.mixin(a,q.userSelector);this._set("i18n",a)},_setConstructorProperties:function(a){a.users&&this._set("groups",a.users);a.selectedUsers&&this._set("selectedGroups",a.selectedUsers);
g.isDefined(a.autoLoad)?this._set("autoLoad",a.autoLoad):this._set("autoLoad",!0);g.isDefined(a.restrictSearch)?this._set("restrictSearch",a.restrictSearch):this._set("restrictSearch",!0);g.isDefined(a.enableRestrict)?this._set("enableRestrict",a.enableRestrict):this._set("enableRestrict",!1);g.isDefined(a.enableSearch)?this._set("enableSearch",a.enableSearch):this._set("enableSearch",!0);g.isDefined(a.enableListActions)&&this._set("enableListActions",a.enableListActions);g.isDefined(a.enableProfilePopup)?
this._set("enableProfilePopup",a.enableProfilePopup):this._set("enableProfilePopup",!0);g.isDefined(a.excludeCurrentUser)&&this._set("excludeCurrentUser",a.excludeCurrentUser)},_searchGroups:function(a){return m.request({url:esriGeowConfig.restBaseUrl+"community/users",content:a})},_configureSearchParams:function(a,d,b){var c=this._get("user"),n=m.isPortal(),e=this._get("restrictSearch"),h=this._get("excludeCurrentUser"),t=c&&c.accountId&&e?"orgid:"+c.accountId:"",k=g.isDefined(b)&&0<b.length,f;f=
n?k?"("+b+")":"":c&&c.accountId?e?k?"("+b+") AND "+t:t:k?"(("+b+") +(orgid:[0 TO \\{]))":"+(orgid:[0 TO \\{])":k?"(("+b+") -(orgid:[0 TO \\{]))":"-(orgid:[0 TO \\{])";h&&(c&&c.username)&&(n&&(c.accountId&&""===f)&&(f+="orgid:"+c.accountId),f+=' -username:"'+c.username+'"');n&&(esriGeowConfig.systemUsers&&0<esriGeowConfig.systemUsers.length)&&(c.accountId&&""===f&&(f+="orgid:"+c.accountId),l.forEach(esriGeowConfig.systemUsers,function(a){f+=" -username:"+a}));!n&&(c&&!c.accountId&&!k)&&(f="");return{start:a,
num:d,sortField:"fullname",sortOrder:"asc",q:f}},_distinguishGroupTitles:function(a){if(g.isDefined(a)){var d,b,c=esriGeowConfig.isRightToLeft?" \x26#8207;":" ";for(d=0;d<a.length;d++)b=a[d],b.id=b.username,b.owner=b.username,b.title=b.fullName,b.altTitle=b.fullName+c+"("+b.username+")"}},_emitSelect:function(a){this.emit("select",{selectedUser:a})},_emitRemove:function(a){this.emit("remove",{removedUser:a})},_emitSelectionChange:function(){this.emit("selection-change",{selectedUsers:this._retrieveSelectedGroups()})},
_emitResult:function(a){this.emit("result",{users:a})},_emitProfileLoad:function(a){this.emit("profile-load",{profile:a})},_clearProfilePopups:function(){var a=this._get("profileConnections"),d=this._get("profileTooltips");a&&0<a.length&&l.forEach(a,function(a){a&&a.remove()});d&&0<d.length&&l.forEach(d,function(a){a&&a.destroy()})},_showProfilePopup:function(a){if(a.currentTarget){var d=this,b=y.byId("tooltip_"+a.currentTarget.id),c;0===b.get("label").length&&(c=r.get(a.currentTarget,"data-id"),
(a=l.filter(d.profiles,function(a){return a.username===c}))&&0<a.length?d._populateTooltip(b,a[0]):B.getProfile(c,function(a){d.profiles.push(a);d._populateTooltip(b,a)}))}},_populateTooltip:function(a,d){var b,c;this._emitProfileLoad(d);b='\x3cspan class\x3d"esriItemTitle" style\x3d"line-height:20px;"\x3e'+d.fullName+"\x3c/span\x3e";d.thumbnail&&(b+="\x3cbr\x3e\x3cbr\x3e\x3cimg src\x3d'"+this._getThumbnailUrl(d)+'\' width\x3d"65" height\x3d"65"\x3e');if(c=m.removeHTMLTags(d.description))c=0<c.length?
c:"",b=150<c.length?b+("\x3cbr\x3e\x3cbr\x3e"+c.substring(0,150)+this._get("i18n").continueLabel):b+("\x3cbr\x3e\x3cbr\x3e"+c);a.set("label",b+"\x3cbr\x3e\x26nbsp;")},_getThumbnailUrl:function(a){var d=m.getToken();return esriGeowConfig.restBaseUrl+"community/users/"+a.username+"/info/"+a.thumbnail+(d?"?token\x3d"+d:"")},_refreshGroups:function(){var a=this,d=a._retrieveCurrentGroups(),b=this._get("enableProfilePopup"),c=[],g=[],e,h;a._clearProfilePopups();r.set(a._groupsPane,"innerHTML","");if(d)for(h=
0;h<d.length;h++)e=d[h],e=s.create("a",{id:"group-"+h,innerHTML:e.altTitle||e.title,className:"linkNoHref","data-id":e.id,"data-title":e.title,"data-owner":e.owner},a._groupsPane),s.create("br",null,a._groupsPane),b&&(e=x(e,w.enter,function(b){a._showProfilePopup(b)}),c.push(e),e=new z({label:"",connectId:["group-"+h],id:"tooltip_group-"+h}),g.push(e),a._set("profileConnections",c),a._set("profileTooltips",g))},enableProfilePopup:function(a){this._set("enableProfilePopup",a)},_setUsersLabelAttr:function(a){this.set("groupsLabel",
a)},_setUsersClickLabelAttr:function(a){this.set("groupsClickLabel",a)},_setSelectedUsersLabelAttr:function(a){this.set("selectedGroupsLabel",a)},_setSelectedUsersClickLabelAttr:function(a){this.set("selectedGroupsClickLabel",a)},_setUsersAttr:function(a){this._distinguishGroupTitles(a);this._set("groups",a);this._set("groupResults",null);this._refreshGroups()},_getUsersAttr:function(){return this._retrieveCurrentGroups()},_setSelectedUsersAttr:function(a){this._distinguishGroupTitles(a);this._set("selectedGroups",
a);this._emitSelectionChange();this._refreshSelectedGroups()},_getSelectedUsersAttr:function(){return this._retrieveSelectedGroups()},_setValueAttr:function(a){this._distinguishGroupTitles(a);this._set("selectedGroups",a);this._emitSelectionChange();this._refreshSelectedGroups()},_getValueAttr:function(){return this._retrieveSelectedGroups()}})});