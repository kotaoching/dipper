// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define({"webSceneViewer/widgets/nls/widgets":{settings:{sceneNav:"Default",proNav:"ArcGIS Pro",navigation:"3D Navigation",mouseImage:"Assignment of mouse buttons for 3D navigation"},moveUp:"Move up",showInMapLayers:"Show in Layers",basemapGallery:{tilingSchemeTileSize:"Incompatible tiling scheme: only tiles with width and height 256 are supported.",basemapLayerTypeWMS:"OGC Web Map Service (WMS) is not supported as basemap.",basemapLayerTypeWMTS:"OGC Web Tile Map Service (WMTS) is not supported as basemap.",
basemapLayerTypeIS:"Image Service Layer is not supported as basemap.",basemapLayerTypeWTL:"Web Tiled Layer is not supported as basemap.",basemapLayerTypeDMS:"Dynamic Map Service Layer is not supported as basemap.",SRMismatch:"Spatial reference is incompatible with the scene",tiledMapServiceSRGCS:"Tiled Map Layers in geographic coordinate systems are not supported.",tilingSchemePowerOfTwo:"Incompatible tiling scheme: each scale must be exactly half of the scale of the preceding level.",TSMismatch:"Tiling scheme is incompatible with the scene",
SRMismatchGlobal:"Spatial reference is not supported in global scenes",tiledMapServicesMinVersion:"Tiled Map Layers on servers prior to 10.2.2 are not supported.",TilingScheme:"Tiling scheme does not adhere to ArcGIS Online Tiling Scheme.",noBasemap:"No basemap"},symbologyEditor:{feet:"feet",outlineColor:"Outline Color",reset:"Reset",originalSymbology:"Original symbols",rangeMsg:"Value out of range. Please enter a value between ${minSize} and ${maxSize}",points:"points",modifySymbology:"Change symbols",
fill:"Fill",color:"Color",transparency:"Transparency (%)",path3d:"3D Path",shapes:{tetrahedron:"Tetrahedron",square:"Square",cross:"Cross",x:"X",cylinder:"Cylinder",cone:"Cone",sphere:"Sphere",kite:"Kite",cube:"Cube",circle:"Circle",diamond:"Diamond"},colorOverride:"Color override",size:"Size",px:"px",customize:"Customize",ok:"OK",line3d:"3D Line",symbologyShieldWarning:"This layer's symbology can not be modified. Click ok to remove the existing symbology and define new symbology.",extrusion:"Extrusion (meters)",
polygon3d:"3D Extrusion",outline:"Outline",fillColor:"Fill Color",outlineSize:"Outline Size",icon2d:"2D Icon",object3D:"3D Object",meters:"meters",type:"Type",line2d:"2D Line",shape:"Shape",symbols:"Symbols",polygon2d:"2D Polygon"},slideDeckEditable:{deleteSlide:"Remove Slide",updateSlide:"Update Slide",addSlide:"Capture Slide",slide:"Slide"},header:{esriCommunity:"Community and Forums",signOut:"Sign Out",map:"Map",groups:"Groups",plans:"Plans",newGlobal:"New Global Scene",help:"Help",home_link:"Home",
spatialRef:"Spatial Reference",newScene:"New Scene",signIn:"Sign In",localScene:"Local Scene",myAccount:"My Organization",fullScreen:"Explore in Full Viewer",myEsri:"My Esri",support:"Help",newLocal:"New Local Scene",globalScene:"Global Scene",training:"Training",simpleHome:"Home",trialDownloads:"Trial Downloads",features:"Features",myContent:"My Content",adminGuide:"Administrator Guide",myProfile:"My Profile",gallery:"Gallery"},share:{smallSize:"Small",text:"Select one of the options below to share this scene.",
shareEmailTxt1:"Have a look at this Web Scene:",shareEmailTxt2:"You can create and share your own 3D Web Scenes with Esri Scene Viewer. Visit http://www.arcgis.com and click 'Scene' to try it for free.",changeShareSettings:"Change Share Settings",link:"Share a link to this scene",shareNotPublic:"This scene is not shared with the public. People might not be able to view it.",more:"Embed Options",embed:"Embed this scene in a website",customSize:"Custom",shortenLink:"Short Link",shareNotPublicLayer:"At least one layer in this scene is not public. People might not be able to view all layers.",
largeSize:"Large",mediumSize:"Medium",shareUnsaved:"This scene contains unsaved changes. In order to share it, you need to save those changes.",shareEmailSubject:"${sceneName}  in 3D (Scene Viewer)",shareTwitterTxt:"Explore '${sceneName}'  in 3D with your browser:\n"},_localized:{},underground:{seeThroughGround:"See through ground"},mapControls:{zoomIn:"Zoom In",home:"Initial View",pan:"Pan",rotate:"Rotate",panRotateToggle:"Toggle to pan or rotate in 3D",zoomOut:"Zoom Out"},environmentSettings:{dragSunSliderText:"Drag the slider to change the time of day.",
dragSunSliderHint:"Drag Slider",shadowing:"Shadowing",directShadow:"Direct Shadow (cast by sunlight)",sunrise:"sunrise",sunset:"sunset",diffuseShadow:"Diffuse Shadows (ambient occlusion)",sunLight:"Sunlight"},switchControl:{off:"off",on:"on"},moveDown:"Move down",rename:"Rename",hideInMapLayers:"Hide in Layers",invalidTitle:"The title cannot contain any of these characters: \x3c or \x3e.",layerItemEditable:{groupTypeHide:"Hide",changeGroupType:"Change Group Type",configureLayer:"Configure Layer",
dragHere:"Drag Layer here",groupTypeCheckbox:"Checkbox",groupTypeRadio:"Radio",zoomToLayer:"Zoom to",deleteLayer:"Remove",groupTypeCompact:"Merge"},compass:{compass:"Compass"}},"webSceneViewer/editor/nls/editor":{confirmDialog:{cancelButton:"Cancel",confirm:"Confirm"},addLayerByUrlPane:{addingLayer:"Adding layer to map...",placeholderLayerName:"e.g. Waterways",layerUrl:"Layer URL",layerName:"Layer Name",placeholderLayerUrl:"e.g. http://server.esri.com/water/MapServer"},panes:{enterLayerUrl:"Enter Layer URL",
addLayers:"Add Layers",advancedSettings:"Advanced Settings",contents:"Contents",slides:"Slides",properties:"Properties",configureLayer:"Configure Layer",modifyScene:"Modify"},contentsPane:{newGroup:"New group"},buttons:{cancel:"Cancel",add:"Add",saveScene:"Save Scene",save:"Save",importLayer:"Import",remove:"Remove",done:"Done",saveTooltip:"Save Scene (Ctrl+S)",addGroup:"Create Layer Group..."},sceneProperties:{tags:"Tags",elevation:"Elevation",title:"Title",elevationUnsupported:"Default elevation layer does not match the basemap spatial reference and tiling scheme.",
summary:"Summary",placeholderEnterTitle:"Enter a title...",currentView:"Update To Current View",copyTitle:"Copy of ${scenetitle} by ${sceneauthor}",placeholderEnterTags:"Add tag(s)",placeholderEnterSummary:"Summary of the scene (optional)",clipping:"Clip to Extent",updateThumbnail:"Update Thumbnail",thumbnail:"Thumbnail"},navigationContainer:{back:"Back",closeOpen:"Close Editor",open:"Open"},saveDialog:{confirmOverwriteCancel:"Cancel",saveInitialViewpoint:"Save current as initial viewpoint",confirmOverwriteYes:"Yes, Overwrite",
confirmOverwriteNo:"No",saveAsNewScene:"Scene needs to be saved as new item.",confirmOverwriteQuestion:"Do you want to overwrite it?",ownerMe:"owned by me",saveInitialState:"Save current state as initial scene state",confirmOverwrite2:"A scene with the same name already exists and will be overwritten.",choseLocation:"Please choose a location",copyScene:"This will create a new item",overwriteScene:"This will overwrite the existing item",invalidSummary:"The summary cannot contain any of these characters: \x3c or \x3e.",
confirmOverwrite:"A scene with the same name already exists.",invalidTitle:"The title cannot contain any of these characters: \x3c or \x3e.",websceneTitleExists:"A Scene with this title already exists.",myContent:"My Content",saveAs:"Save as new scene",otherContent:"${sceneowner}",location:"Save at",owner:"owned by ${ownerName}"},addLayerPane:{by:"by",noResult:"No matching results found.",content:"Content",featuredContent:"Esri Featured Content",searchForLayer:"Search for layer...",search:"Search",
myContent:"My Content",more:"More..."},_localized:{},messages:{addLayerFailed:"Layer cannot be added",pendingChangesConfirm:"Your unsaved scene changes will be lost.",webSceneSavedShared:"Web Scene saved successfully to content of ${sceneowner}.",webSceneSaved:"Web Scene saved successfully to 'My Content'.",viewItemDetails:"View item details"},editBasemapPane:{elevationOff:"Elevation off",elevation:"Elevation",elevationInBasemap:"Elevation in basemap",basemap:"Basemap",elevationOn:"Elevation on"},
dialogs:{webSceneSaveOk:"Web Scene Saved",webSceneSaveFailed:"Saving Web Scene failed",addLayer:"Add Layer"},editLayerPane:{labelsOff:"Labels off",labels:"Labels",relativeToGround:"Relative to ground",elevationOffsetMeters:"Elevation offset (meters)",offsetMeters:"Offset (meters)",point:"Point",elevation:"Elevation",transparency:"Transparency",zoomTo:"Zoom to",mode:"Mode",polygon:"Polygon",absoluteHeight:"Absolute height",popupsOff:"Pop-ups off",enabled:"Enabled",popups:"Pop-ups",elevationMode:"Elevation Mode",
disabled:"Disabled",labelsOn:"Labels on",layerType:"Layer type:",legend:"Legend",onTheGround:"On the ground",lines:"Line",popupsOn:"Pop-ups on",mesh:"Mesh",advancedSymbology:"Advanced Symbology",geometryType:"Geometry type:"}},"dojo/nls/colors":{lightsteelblue:"svetl\u00e1 oce\u013eovomodr\u00e1",orangered:"oran\u017eovo \u010derven\u00e1",midnightblue:"polno\u010dn\u00e1 modr\u00e1",cadetblue:"\u010derveno modr\u00e1",seashell:"last\u00farov\u00e1",slategrey:"bridlicov\u00e1 siv\u00e1",coral:"koralov\u00e1",
darkturquoise:"tmav\u00e1 tyrkysov\u00e1",antiquewhite:"antick\u00e1 biela",mediumspringgreen:"stredn\u00e1 jarn\u00e1 zelen\u00e1",transparent:"priesvitn\u00e1",salmon:"lososov\u00e1",darkgrey:"tmavosiv\u00e1",ivory:"slonovina",greenyellow:"zeleno\u017elt\u00e1",mistyrose:"zahmlen\u00e1 ru\u017ea",lightsalmon:"svetl\u00e1 lososov\u00e1",silver:"strieborn\u00e1",dimgrey:"matn\u00e1 siv\u00e1",orange:"oran\u017eov\u00e1",white:"biela",navajowhite:"navajsk\u00e1 biela",royalblue:"kr\u00e1\u013eovsk\u00e1 modr\u00e1",
deeppink:"hlbok\u00e1 ru\u017eov\u00e1",lime:"limetkov\u00e1",oldlace:"star\u00e1 \u010dipka",chartreuse:"kart\u00fazska",darkcyan:"tmav\u00e1 zelenomodr\u00e1",yellow:"\u017elt\u00e1",linen:"\u013ean",olive:"olivov\u00e1",gold:"zlat\u00e1",lawngreen:"tr\u00e1vov\u00e1 zelen\u00e1",lightyellow:"svetlo\u017elt\u00e1",tan:"\u017eltohned\u00e1",darkviolet:"tmavofialov\u00e1",lightslategrey:"svetl\u00e1 bridlicov\u00e1 siv\u00e1",grey:"siv\u00e1",darkkhaki:"tmav\u00e1 \u017eltohned\u00e1",green:"zelen\u00e1",
deepskyblue:"hlbok\u00e1 modr\u00e1 obloha",aqua:"vodov\u00e1",sienna:"siensk\u00e1",mintcream:"m\u00e4tov\u00e1 kr\u00e9mov\u00e1",rosybrown:"ru\u017eovo hned\u00e1",mediumslateblue:"stredn\u00e1 bridlicov\u00e1 modr\u00e1",magenta:"purpurov\u00e1",lightseagreen:"svetl\u00e1 morsk\u00e1 zelen\u00e1",cyan:"zelenomodr\u00e1",olivedrab:"f\u00e1dna olivov\u00e1",darkgoldenrod:"tmav\u00e1 zlatoby\u013e",slateblue:"bridlicov\u00e1 modr\u00e1",mediumaquamarine:"stredn\u00e1 akvamar\u00ednov\u00e1",lavender:"levandu\u013ea",
mediumseagreen:"stredn\u00e1 morsk\u00e1 zelen\u00e1",maroon:"ga\u0161tanov\u00e1 hned\u00e1",darkslategray:"tmav\u00e1 bridlicov\u00e1 siv\u00e1",mediumturquoise:"stredn\u00e1 tyrkysov\u00e1",ghostwhite:"biela (ghost white)",darkblue:"tmavomodr\u00e1",mediumvioletred:"stredn\u00e1 fialovo\u010derven\u00e1",brown:"hned\u00e1",lightgray:"svetlosiv\u00e1",sandybrown:"pieskov\u00e1 hned\u00e1",pink:"ru\u017eov\u00e1",firebrick:"p\u00e1len\u00e1 tehla",indigo:"indigo",snow:"snehov\u00e1",darkorchid:"tmav\u00e1 orchidea",
turquoise:"tyrkysov\u00e1",chocolate:"\u010dokol\u00e1dov\u00e1",springgreen:"jarn\u00e1 zelen\u00e1",moccasin:"mokas\u00ednov\u00e1",navy:"n\u00e1morn\u00edcka",lemonchiffon:"citr\u00f3nov\u00fd \u0161if\u00f3n",teal:"zelenomodr\u00e1",floralwhite:"biely kvet",cornflowerblue:"nev\u00e4dzov\u00e1 modr\u00e1",paleturquoise:"bled\u00e1 tyrkysov\u00e1",purple:"purpurov\u00e1",_localized:{},gainsboro:"siv\u00e1 - gainsboro",plum:"slivkov\u00e1",red:"\u010derven\u00e1",blue:"modr\u00e1",forestgreen:"lesn\u00e1 zelen\u00e1",
darkgreen:"tmavozelen\u00e1",honeydew:"ambr\u00f3zia",darkseagreen:"tmav\u00e1 morsk\u00e1 zelen\u00e1",lightcoral:"svetl\u00e1 koralov\u00e1",palevioletred:"bled\u00e1 fialovo \u010derven\u00e1",mediumpurple:"stredn\u00e1 purpurov\u00e1",saddlebrown:"sedlov\u00e1 hned\u00e1",darkmagenta:"tmav\u00e1 purpurov\u00e1",thistle:"bodliakov\u00e1",whitesmoke:"biely dym",wheat:"p\u0161eni\u010dn\u00e1",violet:"fialov\u00e1",lightskyblue:"svetl\u00e1 modr\u00e1 obloha",goldenrod:"zlatoby\u013e",mediumblue:"stredn\u00e1 modr\u00e1",
skyblue:"modr\u00e9 nebo",crimson:"karm\u00ednov\u00e1",darksalmon:"tmav\u00e1 lososov\u00e1",darkred:"tmavo\u010derven\u00e1",darkslategrey:"tmav\u00e1 bridlicov\u00e1 siv\u00e1",peru:"peru",lightgrey:"svetlosiv\u00e1",lightgoldenrodyellow:"svetl\u00e1 zlatoby\u013eov\u00e1 \u017elt\u00e1",blanchedalmond:"bled\u00e1 mand\u013eov\u00e1",aliceblue:"modr\u00e1 (alice)",bisque:"porcel\u00e1nov\u00e1",slategray:"bridlicov\u00e1 siv\u00e1",palegoldenrod:"bled\u00e1 zlatoby\u013eov\u00e1",darkorange:"tmav\u00e1 oran\u017eov\u00e1",
aquamarine:"akvamar\u00ednov\u00e1",lightgreen:"svetlozelen\u00e1",burlywood:"dreven\u00e1 hned\u00e1",dodgerblue:"modr\u00e1 (dodger)",darkgray:"tmavosiv\u00e1",lightcyan:"svetl\u00e1 zelenomodr\u00e1",powderblue:"pr\u00e1\u0161kov\u00e1 modr\u00e1",blueviolet:"modro-fialov\u00e1",orchid:"orchideov\u00e1",dimgray:"matn\u00e1 siv\u00e1",beige:"b\u00e9\u017eov\u00e1",fuchsia:"fuchsia",lavenderblush:"rumencov\u00e1 levandu\u013ea",hotpink:"hor\u00faca ru\u017eov\u00e1",steelblue:"oce\u013eovomodr\u00e1",
tomato:"paradajkov\u00e1",lightpink:"svetloru\u017eov\u00e1",limegreen:"limetkov\u00e1 zelen\u00e1",indianred:"indi\u00e1nska \u010derven\u00e1",papayawhip:"pap\u00e1jov\u00fd kr\u00e9m",lightslategray:"svetl\u00e1 bridlicov\u00e1 siv\u00e1",gray:"siv\u00e1",mediumorchid:"stredn\u00e1 orchideov\u00e1",cornsilk:"\u00f4stie kukurice",black:"\u010dierna",seagreen:"morsk\u00e1 zelen\u00e1",darkslateblue:"tmav\u00e1 bridlicov\u00e1 modr\u00e1",khaki:"kaki",lightblue:"svetlomodr\u00e1",palegreen:"bled\u00e1 zelen\u00e1",
azure:"az\u00farov\u00e1",peachpuff:"brosky\u0148ov\u00fd n\u00e1dych",darkolivegreen:"tmav\u00e1 olivovo zelen\u00e1",yellowgreen:"\u017eltozelen\u00e1"},"webSceneViewer/nls/viewer":{webglMessages:{troubleshoot:'Troubleshoot problems at \x3ca href\x3d"http://get.webgl.org" target\x3d"_blank"\x3eget.webgl.org\x3c/a\x3e',layerInfo:"${LayerType} by ${Author}",learnMore:"Learn more",help:"Help",mobile:"Web Scene Viewer is not supported on mobile devices.",badhardware:"Unable to create WebGL context.\x3cbr\x3ePerhaps WebGL is disabled in your browser, or your hardware does not to support WebGL.",
badbrowser:"Your browser does not seem to support WebGL."},defaultWebSceneName:"My Scene",menu:{errorSceneServiceLoad:"Scene Service load error",titleBasemap:"Basemap",errorLayerName:"Layer name:",titleSearch:"Search",titleEnvironmentSettings:"Environment",titleShare:"Share",titleLegend:"Legend",moreTools:"More Tools",titleSettings:"Settings",titleLayers:"Layers"},dialogs:{webscene:"Web Scene",layerDidNotDrawCompletely:"Layer did not draw completely",webglCheck:"WebGL check",browserFail:"The Scene Viewer can't be opened in your browser.",
browserCheck:"Browser check",addLayer:"Add Layer",unsupportedBasemap:"Basemap is not supported"},messages:{geometryServiceUnavailableTitle:"Problem with Geometry Service",tilingSchemeTileSize:"Incompatible tiling scheme: only tiles with width and height 256 are supported.",elevationBasemapSR:"Elevation layer spatial reference does not match basemap spatial reference.",addLayerFailed:"Layer cannot be added",featureServiceNotSupportedRendererType:"Renderer type is not supported:",splashNewToArcGIS:"New to ArcGIS? Sign up for a trial subscription today.",
imageServicesCached:"Only cached Image Servers are supported.",featureServiceNotSupportedMaxFeatures:"feature service exceeds max feature limit:",layerAddedSuccess:"Layer added successfully.",tiledMapServicesMinVersion:"Tiled Map Layers on servers prior to 10.2.2 are not supported.",layerDidNotDrawCompletely:"did not draw completely because the server transfer limit of ${limit} features was exceeded.",geometryServiceUnavailable:"Geometry service is not responding or not configured correctly. Lighting in the scene might be incorrect.",
layerCreationErrorGeneric:"Error during layer creation.",elevationImageServicesSR:"Elevation Layers need to be in Web Mercator.",featureServiceNotSupportedNoRenderer:"Services without a renderer are not supported.",featureServiceNotSupportedTable:"Type Table is not supported.",tiledImageServiceSRGCS:"Tiled Image Layers in geographic coordinate systems are not supported.",websceneLoadFailBadVersion:"Invalid version ${websceneVersion} in Web Scene.",elevationBasemapTS:"Elevation layer tiling scheme is not compatible with basemap tiling scheme.",
layerDisplaysNotAsExpected:"Layer might not display as expected.",onlyTiledLayerSupported:"Only Tiled Map Layers are supported.",layerDisplaysWithDefaultSymbology:"Layer is displayed with default symbology.",layerTypeNotSupported:"Layer type not supported:",tiledMapServicesSR:"Tiled Map Layers need to be in Web Mercator.",elevationImageServicesCached:"Only cached Image Servers with LERC encoding are supported.",invalidUrl:"Invalid URL",tiledMapServiceSRGCS:"Tiled Map Layers in geographic coordinate systems are not supported.",
serviceName:"Service name",BasemapDropWarning:"The basemap's spatial reference and tiling scheme is not compatible with the layer and was therefore dropped.",elevationBasemapTitle:"Default elevation layer cannot be added",unsupportedSymbolLayerType:"Symbol layer not supported",featureServiceNotSupportedMultipatch:"Multipatch Feature Services are not supported.",sceneLayerSR:"Scene Layers need to match the scene spatial reference.",tiledElevationServicesSRGeneric:"Elevation Layers need to match the scene spatial reference and tiling scheme.",
unsupportedUrl:"Unsupported URL",sceneRejectG2L:"A Global scene cannot be imported into a local scene.",layerItemPropertiesNotApplied:"Display properties saved in the Layer item were not applied.",layerItemPropertiesFromMapServer:"Display properties saved in Map Layer items are not supported.",unsupportedSymbology:"Parts of symbology not supported",sceneLayerVersion:"Scene Layer version is not supported.",tiledMapServicesTilingScheme:"Tiled Map Layers need to adhere to ArcGIS Online Tiling Scheme.",
patchRequired:"Patch(es) required:",sceneRejectTitle:"Scene cannot be imported",layerDisplaysWithServiceSymbology:"Layer is displayed with service symbology.",sceneRejectL2G:"A Local scene cannot be imported into a global scene.",splashShowThisOnStart:"show this on startup",websceneVersionRequires:"(requires ${websceneRequiredVersion})",tilingSchemeGaps:"Incompatible tiling scheme: gaps between levels are not supported.",tiledMapServicesMinVersionPatch:"Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.",
sceneRejectSRTS:"The selected scene's spatial reference does not match the current scene spatial reference.",layerItemTypeNotSupported:"Layer item type not supported:",BasemapDropWarningTitle:"Basemap was dropped",unsupportedSymbolType:"Symbol not supported",selectedBasemapMismatch:"The basemap's spatial reference and tiling scheme is not compatible with the scene.\nCreate a new scene to use this basemap.",itemId:"Item ID:",tiledMapServicesSRGeneric:"Tiled Map Layers need to match the scene spatial reference and tiling scheme.",
elevationImageServicesTilingScheme:"Elevation Layers need to adhere to ArcGIS Online Tiling Scheme.",tiledImageServicesSRGeneric:"Tiled Image Layers need to match the scene spatial reference and tiling scheme.",tiledImageServicesTilingScheme:"Tiled Image Layers need to adhere to ArcGIS Online Tiling Scheme.",splashSignInToEdit:"Sign in to explore the world in 3D and add layers from Esri and thousands of organizations to create new scenes.",tilingSchemePowerOfTwo:"Incompatible tiling scheme: each scale must be exactly half of the scale of the preceding level.",
websceneGlobalEmbeddedSR:"Spatial references in global Web Scenes need to be Web Mercator or WGS84 GCS.",splashLookAtOtherScenes:"Here's a look at some of the scenes you can explore.",basemapDropTitle:"Data Mismatch",featureServiceNotSupportedMaxVertices:"feature service exceeds max vertices limit:",basemapDropConfirm:"Drop Basemap",basemapDrop:"The layer has a different spatial reference and tiling scheme than the basemap.\x3cBR\x3eDo you want to drop the basemap in order to add the layer?",itemType:"Item type:",
sceneLayerSRWM:"Scene Layers need to be in Web Mercator.",imageServicesSR:"Tiled Image Layers need to be in Web Mercator.",tilingSchemeGeneric:"Incompatible tiling scheme.",websceneLocalSRGCS:"Local Web Scenes in geographic coordinates are not supported.",websceneLoadFailNoVersion:"No version found in Web Scene.",websceneLoadFail:"Cannot load Web Scene.",websceneVersionMoreRecent:"Web Scene (version ${websceneVersion}) is more recent than viewer version {$viewerVersion}.",layerDisplaysWithItemSymbology:"Layer is displayed with item symbology.",
websceneGlobalSR:"Global Web Scene needs to be in Web Mercator.",layerDisplaysWithFallbackSymbology:"Layer is displayed with fallback symbology.",byReferenceRendererUnsupported:"By reference renderer could not be created",webscenePotentiallyUnsupported:"Parts of Web Scene content might not be supported and might not display as expected.",selectedBasemapMismatchTitle:"Selected basemap cannot be used",websceneLoadFailIncompatVersion:"Web Scene version ${websceneVersion} is not compatible with this viewer",
sceneLayerSRGCS:"Scene Layers in geographic coordinate systems are not supported in local scenes."},buttons:{exitFullScreen:"Exit Full Screen",fullScreen:"Full Screen",signIn:"Sign In",tryArcGIS:"Try ArcGIS",visitGallery:"Visit The Gallery"},_localized:{},appName:"3D Scene Viewer"}});