// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:arcgisonline/sharing/dijit/templates/GroupSelector.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"marginTop1" data-dojo-attach-point\x3d"_searchControls"\x3e\r\n    \x3clabel data-dojo-attach-point\x3d"_searchLabel"\x3e${i18n.searchByName}\x3c/label\x3e\x3cbr/\x3e\r\n    \x3cspan class\x3d"searchControls"\x3e\r\n      \x3cinput type\x3d"text" class\x3d"groupSearch"\r\n             data-dojo-attach-point\x3d"_searchBox"\r\n             data-dojo-type\x3d"dijit/form/TextBox"\x3e\r\n      \x3cbutton class\x3d"clearSearchBtn" data-dojo-attach-point\x3d"_clearSearchBtn"\r\n              style\x3d"display:none;"\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x3c/button\x3e\r\n      \x3cbutton class\x3d"searchBtn" data-dojo-attach-point\x3d"_searchBtn" title\x3d"${i18n.search}"\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x3c/button\x3e\r\n    \x3c/span\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_restrictSearchControl" style\x3d"display:none;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_restrictSearch"\r\n           data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"type:\'checkbox\', checked:true"\x3e\x3c/div\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_restrictSearchLabel"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"marginTop1"\x3e\r\n    \x3ctable class\x3d"marginTop1" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"column270"\x3e\x3clabel data-dojo-attach-point\x3d"_groupsClickLabel"\x3e${i18n.clickToAdd}\x3c/label\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"column10"\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"column270"\x3e\x3clabel data-dojo-attach-point\x3d"_selectedGroupsClickLabel"\x3e${i18n.clickToRemove}\x3c/label\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"column270"\x3e\r\n            \x3cdiv class\x3d"groupListLabel"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"_groupListLabel"\x3e${i18n.groups}\x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing actionLink" data-dojo-attach-point\x3d"_addAllContainer"\x3e\r\n                \x3cspan class\x3d"esriItemLinks"\x3e\x3ca data-dojo-attach-point\x3d"_addAll" class\x3d"pointer"\x3e${i18n.addAll}\x3c/a\x3e\x3c/span\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"groupListContainer" data-dojo-type\x3d"dijit/layout/BorderContainer"\r\n                data-dojo-props\x3d"gutters:false,splitters:false,design:\'headline\'"\x3e\r\n              \x3cdiv class\x3d"groupListInnerContainer"\r\n                   data-dojo-type\x3d"dijit/layout/ContentPane"\r\n                   data-dojo-props\x3d"region:\'middle\',splitter:false"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_groupsPane"\x3e\r\n                  \x3c!-- group list is populated here --\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"column10"\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"column270"\x3e\r\n            \x3cdiv class\x3d"groupListLabel selectedGroupListLabel"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"_selectedGroupListLabel"\x3e${i18n.selectedGroups}\x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing actionLink" data-dojo-attach-point\x3d"_clearAllContainer"\x3e\r\n                \x3cspan class\x3d"esriItemLinks"\x3e\x3ca data-dojo-attach-point\x3d"_clearAll" class\x3d"pointer"\x3e${i18n.clear}\x3c/a\x3e\x3c/span\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"selectedGroupListContainer" data-dojo-type\x3d"dijit/layout/BorderContainer"\r\n                 data-dojo-props\x3d"gutters:false,splitters:false,design:\'headline\'"\x3e\r\n              \x3cdiv class\x3d"groupListInnerContainer"\r\n                   data-dojo-type\x3d"dijit/layout/ContentPane"\r\n                   data-dojo-props\x3d"region:\'middle\',splitter:false"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_selectedGroupsPane"\x3e\r\n                  \x3c!-- selected group list is populated here --\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("arcgisonline/sharing/dijit/GroupSelector","require dojo/_base/declare dojo/_base/lang dojo/keys dojo/on dojo/dom-attr dojo/dom-construct dojo/dom-style dijit/a11yclick dojo/sniff dojo/Deferred dojo/promise/all dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/Button dijit/form/CheckBox dijit/form/TextBox dijit/layout/BorderContainer dijit/layout/ContentPane esri/lang arcgisonline/sharing/util arcgisonline/sharing/geow/Account dojo/i18n!arcgisonline/nls/arcgisonline dojo/text!arcgisonline/sharing/dijit/templates/GroupSelector.html".split(" "),
function(w,x,d,y,m,k,l,h,r,u,z,A,B,C,D,G,H,I,J,K,g,t,E,v,F){return x("arcgisonline.sharing.dijit.GroupSelector",[B,C,D],{declaredClass:"arcgisonline.sharing.dijit.GroupSelector",baseClass:"esriGroupSelector",basePath:w.toUrl("arcgisonline/sharing/dijit"),templateString:F,widgetsInTemplate:!0,constructor:function(a){this._setConstructorProperties(a)},postMixInProperties:function(){this.inherited(arguments);this._mixinI18N()},postCreate:function(){this.inherited(arguments);this._createConnections();
this._setIntializationProperties()},startup:function(){this.inherited(arguments);this._initialize()},_mixinI18N:function(){var a={};d.mixin(a,v.common);d.mixin(a,v.groupSelector);this._set("i18n",a)},_setConstructorProperties:function(a){a.groups&&this._set("groups",a.groups);a.selectedGroups&&this._set("selectedGroups",a.selectedGroups);g.isDefined(a.autoLoad)?this._set("autoLoad",a.autoLoad):this._set("autoLoad",!0);g.isDefined(a.restrictSearch)?this._set("restrictSearch",a.restrictSearch):this._set("restrictSearch",
!0);g.isDefined(a.enableRestrict)?this._set("enableRestrict",a.enableRestrict):this._set("enableRestrict",!1);g.isDefined(a.enableSearch)?this._set("enableSearch",a.enableSearch):this._set("enableSearch",!0);g.isDefined(a.enableListActions)&&this._set("enableListActions",a.enableListActions);g.isDefined(a.excludeEnterpriseGroups)?this._set("excludeEnterpriseGroups",a.excludeEnterpriseGroups):this._set("excludeEnterpriseGroups",!1)},_createConnections:function(){this.own(r(this._searchBtn,d.hitch(this,
this._searchClick)),r(this._clearSearchBtn,d.hitch(this,this._clearSearch)),m(this._searchBox,"blur",d.hitch(this,function(a){a&&a.preventDefault()})),m(this._restrictSearch,"change",d.hitch(this,this._restrictSearchChange)),m(this._groupsPane,"click",d.hitch(this,this._selectGroup)),m(this._selectedGroupsPane,"click",d.hitch(this,this._removeGroup)),r(this._addAll,d.hitch(this,this._addAllClick)),r(this._clearAll,d.hitch(this,this._clearAllClick)));10>=u("ie")||7>u("trident")?this.own(m(this._searchBox,
"keydown",d.hitch(this,this._searchKeyup))):this.own(m(this._searchBox,"keyup",d.hitch(this,this._searchKeyup)))},_setIntializationProperties:function(){this._set("user",t.getUser());this._searchBox.set("value","")},_initializeUI:function(){this._toggleClearSearchButton();this._toggleRestrictSearch();this._toggleEnableSearch();this._toggleEnableRestrict();this._toggleEnableListActions()},_setSelfDependentProperties:function(a){k.set(this._restrictSearchLabel,"innerHTML",g.substitute({name:a.name},
this.i18n.onlySearch))},_initialize:function(){var a=this;this._initializeUI();E.getSelf(function(b){a._setSelfDependentProperties(b);b=a._get("autoLoad");var c=a._get("groups");b&&(!c||0===c.length)?a._doSearch(null).then(function(){a._refreshGroups()}):a._refreshGroups();a._refreshSelectedGroups()})},_searchKeyup:function(a){a.keyCode===y.ENTER&&this._searchClick(a);this._toggleClearSearchButton()},_toggleClearSearchButton:function(){var a=d.trim(this._searchBox.get("value"));a&&0<a.length?h.set(this._clearSearchBtn,
"display",""):h.set(this._clearSearchBtn,"display","none")},_toggleEnableSearch:function(){this._get("enableSearch")?h.set(this._searchControls,"display",""):h.set(this._searchControls,"display","none")},_toggleEnableRestrict:function(){this._get("enableRestrict")?h.set(this._restrictSearchControl,"display",""):h.set(this._restrictSearchControl,"display","none")},_toggleRestrictSearch:function(){this._restrictSearch.set("checked",this._get("restrictSearch"))},_toggleEnableListActions:function(){this._get("enableListActions")?
(h.set(this._addAllContainer,"display",""),h.set(this._clearAllContainer,"display","")):(h.set(this._addAllContainer,"display","none"),h.set(this._clearAllContainer,"display","none"))},_searchClick:function(a){a&&a.preventDefault();var b=this;a=d.trim(b._searchBox.get("value"));g.isDefined(a)&&0<a.length?b._doSearch(a).then(function(){b._refreshGroups()}):(b._set("groupResults",null),b._refreshGroups())},_searchGroups:function(a){return t.request({url:esriGeowConfig.restBaseUrl+"community/groups",
content:a})},_configureSearchParams:function(a,b,c){var f=this._get("user"),e=this._get("restrictSearch"),f=f&&f.accountId&&e?"orgid:"+f.accountId:"",e=g.isDefined(c)&&0<c.length;return{start:a,num:b,sortField:"title",sortOrder:"asc",q:e?"("+c+" "+f+")":f}},_doSearch:function(a){var b=this,c=new z,f=[],e=0,d=-1,h=0,k=0,n=[],m=g.isDefined(a)&&0<a.length,l=b._configureSearchParams(1,100,a),r=b._get("excludeEnterpriseGroups"),s,p,q;g.isDefined(l.q)&&0===l.q.length?(b._processGroups(m,[]),c.resolve()):
b._searchGroups(l).then(function(a){if(a.code&&a.message)c.reject(a);else{if(t.isPortal()&&r)for(q=0;q<a.results.length;q++)p=a.results[q],!g.isDefined(p.provider)&&!g.isDefined(p.providerGroupName)&&n.push(p);else n=n.concat(a.results);if(0<a.nextStart){h=a.total-a.results.length;k=Math.ceil(h/100);for(d=a.nextStart;e<k;e++)l.start=d+100*e,f.push(b._searchGroups(l));A(f).then(function(a){for(e=0;e<a.length;e++)if(s=a[e],!s.code&&!s.message)if(t.isPortal()&&r)for(q=0;q<s.results.length;q++)p=s.results[q],
!g.isDefined(p.provider)&&!p.providerGroupName&&n.push(p);else n=n.concat(s.results);b._processGroups(m,n);c.resolve()},function(a){console.log("Error retrieving the rest of the groups.",a);c.resolve()})}else b._processGroups(m,n),c.resolve()}},function(a){console.log("Error searching for groups.",a);c.reject(a)});return c},_clearSearch:function(){var a=this;a._searchBox.set("value","");a._toggleClearSearchButton();a._doSearch(null).then(function(){a._refreshGroups()})},_restrictSearchChange:function(){this._set("restrictSearch",
this._restrictSearch.get("checked"));this._searchClick(null)},_processGroups:function(a,b){this._distinguishGroupTitles(b);a?this._set("groupResults",b):(this._set("groups",b),this._set("groupResults",null));this._emitResult(b)},_distinguishGroupTitles:function(a){if(g.isDefined(a)){for(var b=esriGeowConfig.isRightToLeft?" \x26#8207;":" ",c={},f=0,e,d;f<a.length;f++)e=a[f],d=c[e.title],c[e.title]=d?d+1:1;for(f=0;f<a.length;f++)e=a[f],d=c[e.title],1<d&&(e.altTitle=e.title+b+"("+e.owner+")")}},_retrieveCurrentGroups:function(){var a=
this._get("groupResults");return g.isDefined(a)?a:this._get("groups")},_retrieveSelectedGroups:function(){return this._get("selectedGroups")||[]},_emitSelect:function(a){this.emit("select",{selectedGroup:a})},_emitRemove:function(a){this.emit("remove",{removedGroup:a})},_emitSelectionChange:function(){this.emit("selection-change",{selectedGroups:this._retrieveSelectedGroups()})},_emitResult:function(a){this.emit("result",{groups:a})},_selectGroup:function(a){if(a&&a.target&&a.target.id){var b=a.target.id.indexOf("group-"),
c=!1,f,e;if(-1<b&&(a=parseInt(a.target.id.substring(b+6),10),b=this._retrieveCurrentGroups()))if(f=b[a]){a=this._retrieveSelectedGroups();for(b=0;b<a.length;b++)if(e=a[b],e.id===f.id||e.title===f.title&&e.owner===f.owner){c=!0;break}c||(c=d.clone(f),a.push(c),this._set("selectedGroups",a),this._emitSelect(c),this._emitSelectionChange(),this._refreshSelectedGroups())}}},_removeGroup:function(a){if(a&&a.target&&a.target.id){var b;-1<a.target.id.indexOf("selected-group-")&&(b=parseInt(a.target.id.substring(15),
10),a=this._retrieveSelectedGroups(),a.length>b&&(b=a.splice(b,1)[0],this._set("selectedGroups",a),this._emitRemove(b),this._emitSelectionChange(),this._refreshSelectedGroups()))}},_refreshSelectedGroups:function(){k.set(this._selectedGroupsPane,"innerHTML","");var a=this._retrieveSelectedGroups(),b,c;if(a)for(b=0;b<a.length;b++)c=a[b],l.create("a",{id:"selected-group-"+b,innerHTML:c.altTitle||c.title,className:"linkNoHref","data-id":c.id,"data-title":c.title,"data-owner":c.owner},this._selectedGroupsPane),
l.create("br",null,this._selectedGroupsPane)},_refreshGroups:function(){k.set(this._groupsPane,"innerHTML","");var a=this._retrieveCurrentGroups(),b,c;if(a&&0<a.length)for(c=0;c<a.length;c++)b=a[c],l.create("a",{id:"group-"+c,innerHTML:b.altTitle||b.title,className:"linkNoHref","data-id":b.id,"data-title":b.title,"data-owner":b.owner},this._groupsPane),l.create("br",null,this._groupsPane);else a&&0===a.length&&l.create("span",{innerHTML:this._get("i18n").noSearchResults},this._groupsPane)},_addAllClick:function(a){a=
this._retrieveCurrentGroups();var b=this._retrieveSelectedGroups(),b=b?b.length:0;this._set("selectedGroups",d.clone(a));this._refreshSelectedGroups();a.length!==b&&this._emitSelectionChange()},_clearAllClick:function(a){a=this._retrieveSelectedGroups();this._set("selectedGroups",[]);this._refreshSelectedGroups();0<a.length&&this._emitSelectionChange()},enableSearchUI:function(a){this._set("enableSearch",a);this._toggleEnableSearch()},enableRestrictSearchUI:function(a){this._set("enableRestrict",
a);this._toggleEnableRestrict()},restrictSearchToOrg:function(a){this._set("restrictSearch",a);this._toggleRestrictSearch();this._searchClick(null)},enableListActionsUI:function(a){this._set("enableListActions",a);this._toggleEnableListActions()},reset:function(){this._clearSearch();this._clearAllClick()},focusSearch:function(){this._searchBox&&this._searchBox.focus()},_setSearchLabelAttr:function(a){this._searchLabel&&k.set(this._searchLabel,"innerHTML",a)},_setGroupsLabelAttr:function(a){this._groupListLabel&&
k.set(this._groupListLabel,"innerHTML",a)},_setGroupsClickLabelAttr:function(a){this._groupsClickLabel&&k.set(this._groupsClickLabel,"innerHTML",a)},_setSelectedGroupsLabelAttr:function(a){this._selectedGroupListLabel&&k.set(this._selectedGroupListLabel,"innerHTML",a)},_setSelectedGroupsClickLabelAttr:function(a){this._selectedGroupsClickLabel&&k.set(this._selectedGroupsClickLabel,"innerHTML",a)},_setGroupsAttr:function(a){this._set("groups",a);this._set("groupResults",null);this._refreshGroups()},
_getGroupsAttr:function(){return this._retrieveCurrentGroups()},_setSelectedGroupsAttr:function(a){this._set("selectedGroups",a);this._emitSelectionChange();this._refreshSelectedGroups()},_getSelectedGroupsAttr:function(){return this._retrieveSelectedGroups()},_setValueAttr:function(a){this._set("selectedGroups",a);this._emitSelectionChange();this._refreshSelectedGroups()},_getValueAttr:function(){return this._retrieveSelectedGroups()}})});