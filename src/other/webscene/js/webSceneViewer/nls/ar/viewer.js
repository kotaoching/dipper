// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define({defaultWebSceneName:"\u0627\u0644\u0645\u0634\u0647\u062f \u0627\u0644\u062e\u0627\u0635 \u0628\u064a",menu:{titleLayers:"\u0637\u0628\u0642\u0627\u062a",titleEnvironmentSettings:"\u0627\u0644\u0628\u064a\u0626\u0629",titleSearch:"\u0628\u062d\u062b",titleBasemap:"\u062e\u0631\u064a\u0637\u0629 \u0623\u0633\u0627\u0633\u064a\u0629",errorSceneServiceLoad:"\u062e\u0637\u0623 \u0641\u064a \u062a\u062d\u0645\u064a\u0644 \u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0634\u0647\u062f",errorLayerName:"\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u0642\u0629:",
titleLegend:"\u0648\u0633\u064a\u0644\u0629 \u0625\u064a\u0636\u0627\u062d",titleSettings:"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",titleShare:"\u0645\u0634\u0627\u0631\u0643\u0629",moreTools:"\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u062f\u0648\u0627\u062a"},dialogs:{webscene:"\u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628",addLayer:"\u0625\u0636\u0627\u0641\u0629 \u0637\u0628\u0642\u0629",layerDidNotDrawCompletely:"\u0644\u0645 \u064a\u062a\u0645 \u0631\u0633\u0645 \u0627\u0644\u0637\u0628\u0642\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
webglCheck:"\u0641\u062d\u0635 WebGL",browserCheck:"\u0641\u062d\u0635 \u0627\u0644\u0645\u0633\u062a\u0639\u0631\u0636",browserFail:"\u064a\u062a\u0639\u0630\u0631 \u0641\u062a\u062d \u0639\u0627\u0631\u0636 \u0627\u0644\u0645\u0634\u0647\u062f \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u0639\u0631\u0636.",unsupportedBasemap:"\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629"},messages:{addLayerFailed:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0628\u0642\u0629",
layerAddedSuccess:"\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0628\u0642\u0629 \u0628\u0646\u062c\u0627\u062d.",layerDidNotDrawCompletely:"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0631\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0646\u0638\u0631\u064b\u0627 \u0644\u0623\u0646\u0647 \u062a\u0645 \u062a\u062c\u0627\u0648\u0632 \u062d\u062f \u0646\u0642\u0644 \u0627\u0644\u062e\u0627\u062f\u0645 \u0644\u0640 ${limit} \u0645\u0639\u0627\u0644\u0645.",layerTypeNotSupported:"\u0646\u0648\u0639 \u0627\u0644\u0637\u0628\u0642\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645:",
onlyTiledLayerSupported:"\u062a\u0643\u0648\u0646 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0645\u062f\u0639\u0648\u0645\u0629 \u0641\u0642\u0637.",layerItemTypeNotSupported:"\u0644\u0645 \u064a\u062a\u0645 \u062f\u0639\u0645 \u0646\u0648\u0639 \u0639\u0646\u0635\u0631 \u0627\u0644\u0637\u0628\u0642\u0629:",layerItemPropertiesFromMapServer:"\u0644\u0645 \u064a\u062a\u0645 \u062f\u0639\u0645 \u0639\u0631\u0636 \u0627\u0644\u062e\u0635\u0627\u0626\u0635 \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629 \u0641\u064a \u0639\u0646\u0627\u0635\u0631 \u0637\u0628\u0642\u0629 \u0627\u0644\u062e\u0631\u064a\u0637\u0629.",
layerItemPropertiesNotApplied:"\u0644\u0645 \u064a\u062a\u0645 \u062a\u0637\u0628\u064a\u0642 \u0639\u0631\u0636 \u0627\u0644\u062e\u0635\u0627\u0626\u0635 \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629 \u0641\u064a \u0639\u0646\u0635\u0631 \u0627\u0644\u0637\u0628\u0642\u0629.",itemId:"\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0646\u0635\u0631:",itemType:"\u0646\u0648\u0639 \u0627\u0644\u0639\u0646\u0635\u0631:",websceneLoadFail:"\u064a\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628.",
websceneLoadFailNoVersion:"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0641\u064a \u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628.",websceneLoadFailBadVersion:"\u0625\u0635\u062f\u0627\u0631 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d ${websceneVersion} \u0641\u064a \u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628.",websceneLoadFailIncompatVersion:"\u0625\u0635\u062f\u0627\u0631 \u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628 ${websceneVersion} \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0631\u0636",
websceneVersionRequires:"(\u064a\u062a\u0637\u0644\u0628 ${websceneRequiredVersion})",websceneVersionMoreRecent:"\u064a\u064f\u0639\u062f \u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628 (version ${websceneVersion}) \u0623\u0643\u062b\u0631 \u062d\u062f\u0627\u062b\u0629 \u0645\u0646 \u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0639\u0627\u0631\u0636 {$viewerVersion}.",webscenePotentiallyUnsupported:"\u064a\u064f\u0645\u0643\u0646 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0623\u062c\u0632\u0627\u0621 \u0645\u0646 \u0645\u062d\u062a\u0648\u064a\u0627\u062a \u0645\u0634\u0647\u062f \u0627\u0644\u0648\u064a\u0628 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629 \u0648\u064a\u064f\u0645\u0643\u0646 \u0623\u0644\u0627 \u064a\u062a\u0645 \u0639\u0631\u0636\u0647\u0627 \u0639\u0644\u0649 \u0627\u0644\u0646\u062d\u0648 \u0627\u0644\u0645\u062a\u0648\u0642\u0639.",
websceneGlobalSR:"\u0645\u0634\u0647\u062f \u0648\u064a\u0628 \u0639\u0627\u0644\u0645\u064a \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0648\u064a\u0628 \u0645\u0631\u0643\u0627\u062a\u0648\u0631.",websceneGlobalEmbeddedSR:"\u0627\u0644\u0625\u0633\u0646\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0643\u0627\u0646\u064a\u0629 \u0641\u064a \u0645\u0634\u0627\u0647\u062f \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0648\u064a\u0628 \u0645\u0631\u0643\u0627\u062a\u0648\u0631 \u0623\u0648 WGS84 GCS.",
websceneLocalSRGCS:"\u0644\u0627 \u064a\u062a\u0645 \u062f\u0639\u0645 \u0625\u0644\u0627 \u0645\u0634\u0627\u0647\u062f \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0641\u064a \u0625\u062d\u062f\u0627\u062b\u064a\u0627\u062a \u062c\u063a\u0631\u0627\u0641\u064a\u0629.",tiledMapServicesMinVersion:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0641\u064a \u0627\u0644\u062e\u0648\u0627\u062f\u0645 \u0627\u0644\u062a\u064a \u062a\u0633\u0628\u0642 10.2.2 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.",
tiledMapServicesMinVersionPatch:"\u0644\u0627 \u064a\u062a\u0645 \u062f\u0639\u0645 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0645\u0646 \u062e\u0648\u0627\u062f\u0645 10.2.2 \u0625\u0644\u0627 \u0625\u0630\u0627 \u062a\u0645 \u062a\u0637\u0628\u064a\u0642 \u062c\u0645\u064a\u0639 \u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0627\u0644\u062e\u0627\u062f\u0645.",sceneLayerVersion:"\u0625\u0635\u062f\u0627\u0631 \u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u0634\u0647\u062f \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645.",
sceneLayerSRWM:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0648\u064a\u0628 \u0645\u0631\u0643\u0627\u062a\u0648\u0631.",sceneLayerSR:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0645\u0634\u0647\u062f \u064a\u062c\u0628 \u0623\u0646 \u062a\u064f\u0637\u0627\u0628\u0642 \u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0644\u0645\u0634\u0647\u062f.",sceneLayerSRGCS:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0645\u0634\u0647\u062f \u0641\u064a \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0625\u062d\u062f\u0627\u062b\u064a\u0629 \u0627\u0644\u062c\u063a\u0631\u0627\u0641\u064a\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629 \u0641\u064a \u0627\u0644\u0645\u0634\u0627\u0647\u062f \u0627\u0644\u0645\u062d\u0644\u064a\u0629.",
tiledMapServicesSR:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0648\u0627\u062c\u062f \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0641\u064a \u0648\u064a\u0628 \u0645\u0631\u0643\u0627\u062a\u0648\u0631.",tiledMapServicesSRGeneric:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0637\u0627\u0628\u0642 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0645\u0639 \u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0644\u0645\u0634\u0647\u062f \u0648\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628.",
tiledMapServiceSRGCS:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0641\u064a \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0625\u062d\u062f\u0627\u062b\u064a\u0629 \u0627\u0644\u062c\u063a\u0631\u0627\u0641\u064a\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.",tiledImageServicesSRGeneric:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0637\u0627\u0628\u0642 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0645\u0639 \u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0644\u0645\u0634\u0647\u062f \u0648\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628.",
tiledImageServiceSRGCS:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0641\u064a \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0625\u062d\u062f\u0627\u062b\u064a\u0629 \u0627\u0644\u062c\u063a\u0631\u0627\u0641\u064a\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.",tiledElevationServicesSRGeneric:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0637\u0627\u0628\u0642 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0645\u0639 \u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0644\u0645\u0634\u0647\u062f \u0648\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628.",
tilingSchemePowerOfTwo:"\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642: \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u0645\u0642\u064a\u0627\u0633 \u0646\u0635\u0641 \u0645\u0642\u064a\u0627\u0633 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0633\u0627\u0628\u0642 \u062a\u0645\u0627\u0645\u064b\u0627.",tilingSchemeTileSize:"\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642: \u0644\u0627 \u064a\u062a\u0645 \u062f\u0639\u0645 \u0625\u0644\u0627 \u0627\u0644\u062a\u062c\u0627\u0646\u0628\u0627\u062a \u0630\u0627\u062a \u0639\u0631\u0636 \u0648\u0627\u0631\u062a\u0641\u0627\u0639 256.",
tilingSchemeGaps:"\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642: \u0627\u0644\u0641\u062c\u0648\u0627\u062a \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.",tilingSchemeGeneric:"\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642.",patchRequired:"\u0627\u0644\u062d\u0632\u0645 \u0645\u0637\u0644\u0648\u0628\u0629:",
elevationImageServicesSR:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0641\u064a Web Mercator.",imageServicesSR:"\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0648\u064a\u0628 \u0645\u0631\u0643\u0627\u062a\u0648\u0631.",tiledMapServicesTilingScheme:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0642\u064a\u062f \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0628\u0645\u062e\u0637\u0637 \u062a\u062c\u0627\u0646\u0628 ArcGIS Online.",
tiledImageServicesTilingScheme:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0644\u062a\u0632\u0645 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0646\u0628\u0629 \u0628\u0645\u062e\u0637\u0637 \u062a\u062c\u0627\u0646\u0628 ArcGIS Online.",elevationImageServicesTilingScheme:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u062a\u0642\u064a\u062f \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0628\u0645\u062e\u0637\u0637 \u062a\u062c\u0627\u0646\u0628 ArcGIS Online.",
imageServicesCached:"\u0644\u0627 \u064a\u062a\u0645 \u062f\u0639\u0645 \u0625\u0644\u0627 \u062e\u0648\u0627\u062f\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062e\u0632\u0646\u0629 \u0645\u0624\u0642\u062a\u064b\u0627.",elevationImageServicesCached:"\u064a\u062a\u0645 \u0641\u0642\u0637 \u062f\u0639\u0645 \u062e\u0648\u0627\u062f\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u064a \u062a\u0645 \u062a\u062e\u0632\u064a\u0646\u0647\u0627 \u0645\u0624\u0642\u062a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0631\u0645\u064a\u0632 LERC.",
elevationBasemapTitle:"\u064a\u062a\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0637\u0628\u0642\u0629 \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629",elevationBasemapSR:"\u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0644\u0627 \u064a\u062a\u0637\u0627\u0628\u0642 \u0645\u0639 \u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633.",
elevationBasemapTS:"\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633.",featureServiceNotSupportedTable:"\u062c\u062f\u0648\u0644 \u0627\u0644\u0646\u0648\u0639 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645.",
featureServiceNotSupportedMultipatch:"\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u062a\u0635\u062d\u064a\u062d\u0627\u062a \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.",featureServiceNotSupportedNoRenderer:"\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062c\u0647\u0627\u0632 \u0639\u0631\u0636 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.",
featureServiceNotSupportedRendererType:"\u0646\u0648\u0639 \u0627\u0644\u0645\u064f\u0642\u062f\u0651\u0645 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645:",featureServiceNotSupportedMaxFeatures:"\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u062a\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u062d\u062f\u0648\u062f \u0627\u0644\u0645\u0639\u0644\u0645:",featureServiceNotSupportedMaxVertices:"\u062a\u062c\u0627\u0648\u0632\u062a \u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0646\u0642\u0627\u0637:",
splashSignInToEdit:"\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0627\u0644\u0639\u0627\u0644\u0645 \u0628\u0634\u0643\u0644 \u062b\u0644\u0627\u062b\u064a \u0627\u0644\u0623\u0628\u0639\u0627\u062f \u0648\u0623\u0636\u0641 \u0637\u0628\u0642\u0627\u062a \u0645\u0646 Esri \u0648\u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0644\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0627\u0647\u062f \u062c\u062f\u064a\u062f\u0629.",
splashShowThisOnStart:"\u0625\u0638\u0647\u0627\u0631 \u0641\u064a \u0628\u062f\u0621 \u0627\u0644\u062a\u0634\u063a\u064a\u0644",splashNewToArcGIS:"\u0647\u0644 \u0644\u0645 \u064a\u0633\u0628\u0642 \u0644\u0643 \u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 ArcGIS\u061f \u0627\u0634\u062a\u0631\u0643 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0634\u062a\u0631\u0627\u0643 \u062a\u062c\u0631\u064a\u0628\u064a \u0627\u0644\u064a\u0648\u0645.",splashLookAtOtherScenes:"\u0641\u064a\u0645\u0627 \u064a\u0644\u064a \u0646\u0638\u0631\u0629 \u0639\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u0645\u0634\u0627\u0647\u062f \u0627\u0644\u062a\u064a \u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u0643\u0634\u0627\u0641\u0647\u0627.",
selectedBasemapMismatchTitle:"\u064a\u062a\u0639\u0630\u0631 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633 \u0627\u0644\u0645\u062d\u062f\u062f\u0629",selectedBasemapMismatch:"\u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0648\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0627\u0644\u0645\u0634\u0647\u062f.n\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0647\u062f \u062c\u062f\u064a\u062f \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633.",
serviceName:"\u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629",basemapDrop:"\u0627\u0644\u0637\u0628\u0642\u0629 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0625\u0633\u0646\u0627\u062f \u0645\u0643\u0627\u0646\u064a \u0648\u0645\u062e\u0637\u0637 \u062a\u062c\u0627\u0646\u0628 \u0645\u062e\u062a\u0644\u0641\u064a\u0646 \u0639\u0646 \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\x3cBR\x3e\u0647\u0644 \u062a\u0631\u064a\u062f \u0625\u0641\u0644\u0627\u062a \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633 \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0628\u0642\u0629.",
basemapDropConfirm:"\u0625\u0641\u0644\u0627\u062a \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633",basemapDropTitle:"\u0639\u062f\u0645 \u062a\u0637\u0627\u0628\u0642 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",BasemapDropWarningTitle:"\u062a\u0645 \u0625\u0641\u0644\u0627\u062a \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633",BasemapDropWarning:"\u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0648\u0645\u062e\u0637\u0637 \u0627\u0644\u062a\u062c\u0627\u0646\u0628 \u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633 \u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0627\u0644\u0645\u0634\u0647\u062f \u0627\u0644\u0637\u0628\u0642\u0629\u061b \u0644\u0630\u0627 \u062a\u0645 \u0625\u0641\u0644\u0627\u062a\u0647.",
sceneRejectTitle:"\u064a\u062a\u0639\u0630\u0631 \u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0627\u0644\u0645\u0634\u0647\u062f",sceneRejectG2L:"\u064a\u062a\u0639\u0630\u0631 \u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0645\u0634\u0647\u062f \u0639\u0627\u0644\u0645\u064a \u0641\u064a \u0645\u0634\u0647\u062f \u0645\u062d\u0644\u064a.",sceneRejectL2G:"\u064a\u062a\u0639\u0630\u0631 \u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0645\u0634\u0647\u062f \u0645\u062d\u0644\u064a \u0641\u064a \u0645\u0634\u0647\u062f \u0639\u0627\u0644\u0645\u064a.",
sceneRejectSRTS:"\u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0644\u0645\u0634\u0647\u062f \u0627\u0644\u0645\u062d\u062f\u062f \u0644\u0627 \u064a\u062a\u0637\u0627\u0628\u0642 \u0645\u0639 \u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0627\u0644\u0645\u0643\u0627\u0646\u064a \u0644\u0644\u0645\u0634\u0647\u062f \u0627\u0644\u062d\u0627\u0644\u064a.",unsupportedSymbolType:"\u0627\u0644\u0631\u0645\u0632 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645",
unsupportedSymbolLayerType:"\u0637\u0628\u0642\u0629 \u0627\u0644\u0631\u0645\u0632 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629",unsupportedSymbology:"\u0623\u062c\u0632\u0627\u0621 \u0627\u0644\u0631\u0645\u0648\u0632 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629",layerDisplaysWithServiceSymbology:"\u064a\u062a\u0645 \u0639\u0631\u0636 \u0627\u0644\u0637\u0628\u0642\u0629 \u0645\u0639 \u0631\u0645\u0648\u0632 \u0627\u0644\u062e\u062f\u0645\u0629.",layerDisplaysWithItemSymbology:"\u064a\u062a\u0645 \u0639\u0631\u0636 \u0627\u0644\u0637\u0628\u0642\u0629 \u0645\u0639 \u0631\u0645\u0648\u0632 \u0627\u0644\u0639\u0646\u0635\u0631.",
layerDisplaysWithDefaultSymbology:"\u064a\u062a\u0645 \u0639\u0631\u0636 \u0627\u0644\u0637\u0628\u0642\u0629 \u0645\u0639 \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629.",layerDisplaysWithFallbackSymbology:"\u064a\u062a\u0645 \u0639\u0631\u0636 \u0627\u0644\u0637\u0628\u0642\u0629 \u0645\u0639 \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0637\u064a\u0629.",layerCreationErrorGeneric:"\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0628\u0642\u0629.",
layerDisplaysNotAsExpected:"\u064a\u064f\u0645\u0643\u0646 \u0623\u0644\u0627 \u064a\u062a\u0645 \u0639\u0631\u0636 \u0627\u0644\u0637\u0628\u0642\u0629 \u0628\u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0645\u062a\u0648\u0642\u0639.",byReferenceRendererUnsupported:'\u064a\u062a\u0639\u0630\u0631 \u0625\u0646\u0634\u0627\u0621 "\u0628\u0648\u0627\u0633\u0637\u0629 \u062c\u0647\u0627\u0632 \u0639\u0631\u0636 \u0627\u0644\u0625\u0633\u0646\u0627\u062f"',geometryServiceUnavailableTitle:"\u0648\u0642\u0639\u062a \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u062e\u062f\u0645\u0629 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0647\u0646\u062f\u0633\u064a",
geometryServiceUnavailable:"\u062e\u062f\u0645\u0629 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0647\u0646\u062f\u0633\u064a \u0644\u0627 \u062a\u0633\u062a\u062c\u064a\u0628 \u0623\u0648 \u0644\u0645 \u064a\u062a\u0645 \u062a\u0643\u0648\u064a\u0646\u0647\u0627 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d. \u0642\u062f \u062a\u0643\u0648\u0646 \u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0641\u064a \u0627\u0644\u0645\u0634\u0647\u062f \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629.",invalidUrl:"\u0639\u0646\u0648\u0627\u0646 URL \u063a\u064a\u0631 \u0635\u062d\u064a\u062d",
unsupportedUrl:"\u0639\u0646\u0648\u0627\u0646 URL \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645"},webglMessages:{badhardware:"\u064a\u062a\u0639\u0630\u0631 \u0625\u0646\u0634\u0627\u0621 \u0633\u064a\u0627\u0642 WebGL.\x3cbr\x3e\u0631\u0628\u0645\u0627 \u064a\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 WebGL \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u0633\u062a\u0639\u0631\u0636 \u0623\u0648 \u0623\u0646 \u062c\u0647\u0627\u0632\u0643 \u0644\u0627 \u064a\u062f\u0639\u0645 WebGL.",troubleshoot:'\u0645\u0634\u0627\u0643\u0644 \u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0648\u0625\u0635\u0644\u0627\u062d\u0647\u0627 \u0641\u064a \x3ca href\x3d"http://get.webgl.org" target\x3d"_blank"\x3eget.webgl.org\x3c/a\x3e',
badbrowser:"\u0644\u0627 \u064a\u0642\u0648\u0645 \u0627\u0644\u0645\u0633\u062a\u0639\u0631\u0636 \u0628\u062f\u0639\u0645 WebGL.",help:"\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629",mobile:"\u0644\u0645 \u064a\u062a\u0645 \u062f\u0639\u0645 Web Scene Viewer \u0639\u0644\u0649 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u062c\u0648\u0627\u0644.",learnMore:"\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",layerInfo:"${LayerType} \u0641\u064a ${Author}"},
buttons:{signIn:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",tryArcGIS:"\u062c\u0631\u0651\u0628 ArcGIS",visitGallery:"\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0639\u0631\u0636",fullScreen:"\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629.",exitFullScreen:"\u0627\u0644\u062e\u0631\u0648\u062c \u0645\u0646 \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629"},appName:"\u0639\u0627\u0631\u0636 \u0627\u0644\u0645\u0634\u0647\u062f \u062b\u0644\u0627\u062b\u064a \u0627\u0644\u0623\u0628\u0639\u0627\u062f"});