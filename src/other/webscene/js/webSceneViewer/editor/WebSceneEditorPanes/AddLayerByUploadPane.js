// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("esri/core/declare dojo/_base/lang dojo/dom-construct dojo/on ./WebSceneEditorPaneBase dijit/form/TextBox dijit/form/Textarea".split(" "),function(h,g,b,d,k,e,l){return h(k,{constructor:function(){g.mixin(this,{id:"addLayerByUpload",title:"Upload Data",actionButton:{title:"Done",action:"_navBackBtnNodeClickHandler"}});this._updateContent()},_updateContent:function(){var m=this,a=b.create("div",{className:"addLayerByUploadPane"});b.create("h4",{className:"paneSectionTitle"},a).textContent="File";
this._uploadInput=b.create("input",{type:"file","class":"editorWideGrayButton",style:"display:none"},a);d(this._uploadInput,"change",function(a){f.textContent=0<a.target.files.length?a.target.files[0].name:"";f.title=f.textContent});var c=b.create("button",{"class":"editorWideGrayButton"},a);c.textContent="Select file to upload ...";d(c,"click",function(){m._uploadInput.click()});var f=b.create("p",{className:"smallText"},a);b.create("h4",{className:"paneSectionTitle"},a).textContent="Title";this._titleTextBox=
new e({className:"paneTextBox",placeHolder:"Enter a title ...",required:!0});this._titleTextBox.placeAt(a);b.create("h4",{className:"paneSectionTitle"},a).textContent="Summary";this._summaryTextBox=new e({className:"paneTextBox",placeHolder:"Enter a title (optional)",required:!1});this._summaryTextBox.placeAt(a);b.create("h4",{className:"paneSectionTitle"},a).textContent="Description";this._descriptionTextBox=new l({className:"descriptionTextArea",placeholder:"Enter a description (optional)",required:!1});
this._descriptionTextBox.placeAt(a);b.create("h4",{className:"paneSectionTitle"},a).textContent="Tags";this._tagsTextBox=new e({className:"paneTextBox",placeHolder:"Enter tags (optional)",required:!1});this._tagsTextBox.placeAt(a);c=b.create("button",{className:"blueButton"},b.create("p",{},a));c.textContent="Upload File";d(c,"click",g.hitch(this,function(){this._doUploadFile()}));this._addToContentNode(a)},_doUploadFile:function(){if(0!==this._uploadInput.files.length){var b=this._uploadInput.files[0],
a=0<b.type.indexOf("zip")?"Shapefile":b.type.indexOf("csv")?"CSV":b.type,a={title:this._titleTextBox.get("value"),thumbnailUrl:"",type:a,description:this._descriptionTextBox.get("value"),tags:this._tagsTextBox.get("value"),summary:this._summaryTextBox.get("value")};this.editor.uploadItem(a,{data:b,identifier:"file",name:a.title})}}})});