// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define({"webSceneViewer/widgets/nls/widgets":{settings:{sceneNav:"Standaard",proNav:"ArcGIS Pro",navigation:"3D Navigatie",mouseImage:"Toewijzing van muistoetsen voor 3D-navigatie"},moveUp:"Naar boven verplaatsen",showInMapLayers:"Tonen in lagen",basemapGallery:{tilingSchemeTileSize:"Niet-compatibel tiling-schema: alleen tiles met een breedte en hoogte van 256 worden ondersteund.",basemapLayerTypeWMS:"OGC Web Map Service (WMTS) wordt niet ondersteund als basiskaart.",basemapLayerTypeWMTS:"OGC Web Tile Map Service (WMTS) wordt niet ondersteund als basiskaart.",
basemapLayerTypeIS:"Image Service laag wordt niet ondersteund als basiskaart.",basemapLayerTypeWTL:"Web Tiled laag wordt niet ondersteund als basiskaart.",basemapLayerTypeDMS:"Dynamic Map Service laag wordt niet ondersteund als basiskaart.",SRMismatch:"Ruimtelijke referentie is niet compatibel met de scene",tiledMapServiceSRGCS:"Tiled Map lagen in geografische co\u00f6rdinaatsystemen worden niet ondersteund.",tilingSchemePowerOfTwo:"Niet-compatibel tiling-schema: elke schaal moet exact half zo groot zijn als de schaal van het voorgaande niveau.",
TSMismatch:"Tiling schema is niet compatibel met de scene",SRMismatchGlobal:"Ruimtelijke referentie is niet ondersteund in mondiale scenes",tiledMapServicesMinVersion:"Tiled Map-lagen op servers voor 10.2.2 worden niet ondersteund.",TilingScheme:"Tiling schema stemt niet overeen met ArcGIS Online tiling schema.",noBasemap:"Geen basiskaart"},symbologyEditor:{feet:"feet",outlineColor:"Kleur buitenlijn",reset:"Opnieuw instellen",originalSymbology:"Oorspronkelijke symbolen",rangeMsg:"Waarde buiten bereik. Voer een waarde in tussen ${minSize} en ${maxSize}",
points:"punten",modifySymbology:"Symbolen wijzigen",fill:"Vulling",color:"Kleur",transparency:"Transparantie (%)",path3d:"3D Pad",shapes:{tetrahedron:"Tetraeder",square:"Vierkant",cross:"Kruis",x:"X",cylinder:"Cilinder",cone:"Kegel",sphere:"Bol",kite:"Vlieger",cube:"Kubus",circle:"Cirkel",diamond:"Diamant"},colorOverride:"Kleur overschrijven",size:"Grootte",px:"px",customize:"Aanpassen",ok:"OK",line3d:"3D Lijn",symbologyShieldWarning:"De symbolen van deze laag kunnen niet worden gewijzigd. Klik op OK om de bestaande symbolen te verwijderen en nieuwe symbolen te defini\u00ebren.",
extrusion:"Extrusie (meter)",polygon3d:"3D Extrusie",outline:"Omtreklijn",fillColor:"Vulkleur",outlineSize:"Grootte buitenlijn",icon2d:"2D pictogram",object3D:"3D Object",meters:"meter",type:"Type",line2d:"2D Lijn",shape:"Vorm",symbols:"Symbolen",polygon2d:"2D Polygoon"},slideDeckEditable:{deleteSlide:"Dia verwijderen",updateSlide:"Dia bijwerken",addSlide:"Dia opslaan",slide:"Dia"},header:{esriCommunity:"Community en forums",signOut:"Afmelden",map:"Kaart",groups:"Groepen",plans:"Abonnementen",newGlobal:"Nieuwe mondiale scene",
help:"Help",home_link:"Home",spatialRef:"Ruimtelijke referentie",newScene:"Nieuwe scene",signIn:"Aanmelden",localScene:"Lokale scene",myAccount:"Mijn Organisatie",fullScreen:"Verkennen in volledige viewer",myEsri:"My Esri",support:"Help",newLocal:"Nieuwe lokale scene",globalScene:"Mondiale scene",training:"Opleiding",simpleHome:"Home",trialDownloads:"Proefabonnementen",features:"Functies",myContent:"Mijn Content",adminGuide:"Beheerdershandleiding",myProfile:"Mijn profiel",gallery:"Galerij"},share:{smallSize:"Klein",
text:"Selecteer een van de onderstaande opties om deze scene te delen.",shareEmailTxt1:"Neem een kijkje in deze web scene:",shareEmailTxt2:"U kunt uw eigen 3D-web scenes maken en delen met  Esri Scene Viewer. Ga naar http://www.arcgis.com en klik op 'Scene' om het gratis uit te proberen.",changeShareSettings:"Deelinstellingen wijzigen",link:"Een link naar deze scene delen",shareNotPublic:"Deze scene wordt niet gedeeld met het publiek. De scene kan niet worden bekeken.",more:"Opties inbedden",embed:"Deze scene inbedden in een website",
customSize:"Aangepast",shortenLink:"Korte link",shareNotPublicLayer:"Minstens \u00e9\u00e9n laag in deze scene is niet openbaar. Niet alle lagen kunnen worden bekeken.",largeSize:"Groot",mediumSize:"Middel",shareUnsaved:"Deze scene bevat niet-opgeslagen wijzigingen. Om de scene te delen, moet u de wijzigingen opslaan.",shareEmailSubject:"${sceneName}  in 3D (Scene Viewer)",shareTwitterTxt:"Verken '${sceneName}'  in 3D met uw browser:n"},_localized:{},underground:{seeThroughGround:"Doorzichtige grond"},
mapControls:{zoomIn:"Inzoomen",home:"Initi\u00eble weergave",pan:"Pannen",rotate:"Draaien",panRotateToggle:"Tik om in 3D te pannen of roteren",zoomOut:"Uitzoomen"},environmentSettings:{dragSunSliderText:"Sleep de schuifregelaar om de tijd te wijzigen.",dragSunSliderHint:"Schuifregelaar slepen",shadowing:"Schaduwen",directShadow:"Directe schaduw (door zonlicht)",sunrise:"zonsopgang",sunset:"zonsondergang",diffuseShadow:"Diffuse schaduwen (omgevingsverberging)",sunLight:"Zonlicht"},switchControl:{off:"uit",
on:"aan"},moveDown:"Naar beneden verplaatsen",rename:"Naam wijzigen",hideInMapLayers:"Verbergen in lagen",invalidTitle:"De titel mag geen van de volgende tekens bevatten: \x3c or \x3e.",layerItemEditable:{groupTypeHide:"Verbergen",changeGroupType:"Groeptype wijzigen",configureLayer:"Laag configureren",dragHere:"Laag hierheen verslepen",groupTypeCheckbox:"Selectievakje",groupTypeRadio:"Radio",zoomToLayer:"Zoomen naar",deleteLayer:"Verwijderen",groupTypeCompact:"Samenvoegen"},compass:{compass:"Kompas"}},
"webSceneViewer/editor/nls/editor":{confirmDialog:{cancelButton:"Annuleren",confirm:"Bevestigen"},addLayerByUrlPane:{addingLayer:"Laag toevoegen aan kaart...",placeholderLayerName:"bv. Waterwegen",layerUrl:"Laag-URL",layerName:"Laagnaam",placeholderLayerUrl:"bijv. http://server.esri.com/water/MapServer"},panes:{enterLayerUrl:"Laag-URL invoeren",addLayers:"Lagen toevoegen",advancedSettings:"Geavanceerde instellingen",contents:"Inhoud",slides:"Dia's",properties:"Eigenschappen",configureLayer:"Laag configureren",
modifyScene:"Aanpassen"},contentsPane:{newGroup:"Nieuwe groep"},buttons:{cancel:"Annuleren",add:"Toevoegen",saveScene:"Scene opslaan",save:"Opslaan",importLayer:"Importeren",remove:"Verwijderen",done:"Klaar",saveTooltip:"Scene opslaan (Ctrl+S)",addGroup:"Laaggroep maken..."},sceneProperties:{tags:"Labels",elevation:"Hoogte",title:"Titel",elevationUnsupported:"Standaard hoogtelaag stemt niet overeen met de ruimtelijke referentie van de basiskaart en het tiling-schema.",summary:"Samenvatting",placeholderEnterTitle:"Voer een titel in...",
currentView:"Updaten naar actueel beeld",copyTitle:"Kopie van ${scenetitle} door ${sceneauthor}",placeholderEnterTags:"Label(s) toevoegen",placeholderEnterSummary:"Samenvatting van de scene (optioneel)",clipping:"Bijsnijden op extent",updateThumbnail:"Thumbnail bijwerken",thumbnail:"Thumbnail"},navigationContainer:{back:"Terug",closeOpen:"Editor sluiten",open:"Openen"},saveDialog:{confirmOverwriteCancel:"Annuleren",saveInitialViewpoint:"Huidig opslaan als initieel weergavepunt",confirmOverwriteYes:"Ja, overschrijven",
confirmOverwriteNo:"Nee",saveAsNewScene:"Scene moet worden opgeslagen als nieuw item.",confirmOverwriteQuestion:"Wilt u deze overschrijven?",ownerMe:"mijn eigendom",saveInitialState:"Huidige toestand opslaan als initi\u00eble scenetoestand",confirmOverwrite2:"Er bestaat al een scene met dezelde naam en deze zal overschreven worden.",choseLocation:"Kies een locatie svp",copyScene:"Hierdoor wordt een nieuw item gecre\u00eberd",overwriteScene:"Hierdoor wordt het bestaande item overschreven",invalidSummary:"De samenvatting mag geen van de volgende tekens bevatten: \x3c or \x3e.",
confirmOverwrite:"Er bestaat al een scene met dezelde naam.",invalidTitle:"De titel mag geen van de volgende tekens bevatten: \x3c or \x3e.",websceneTitleExists:"Er bestaat al een Scene met deze titel.",myContent:"Mijn Content",saveAs:"Opslaan als nieuwe scene",otherContent:"${sceneowner}",location:"Opslaan in",owner:"eigendom van ${ownerName}"},addLayerPane:{by:"van",noResult:"Geen overeenkomstige resultaten gevonden.",content:"Inhoud",featuredContent:"Esri Aanbevolen content",searchForLayer:"Zoeken naar laag...",
search:"Zoeken",myContent:"Mijn Content",more:"Meer..."},_localized:{},messages:{addLayerFailed:"Laag kan niet worden toegevoegd",pendingChangesConfirm:"Uw niet-opgeslagen scenewijzigingen gaan verloren.",webSceneSavedShared:"Webscene succesvol opgeslagen in content van ${sceneowner}.",webSceneSaved:"Webscene succesvol opgeslagen in 'Mijn Content'.",viewItemDetails:"Itemdetails weergeven"},editBasemapPane:{elevationOff:"Hoogte uit",elevation:"Hoogte",elevationInBasemap:"Hoogte in basiskaart",basemap:"Basiskaart",
elevationOn:"Hoogte aan"},dialogs:{webSceneSaveOk:"Webscene opgeslagen",webSceneSaveFailed:"Opslaan van webscene is mislukt",addLayer:"Laag toevoegen"},editLayerPane:{labelsOff:"Labels uit",labels:"Labels",relativeToGround:"Relatief ten opzichte van de grond",elevationOffsetMeters:"Hoogteverschil (meter)",offsetMeters:"Offset (meter)",point:"Punt",elevation:"Hoogte",transparency:"Transparant",zoomTo:"Zoomen naar",mode:"Modus",polygon:"Polygoon",absoluteHeight:"Absolute hoogte",popupsOff:"Pop-ups uit",
enabled:"Ingeschakeld",popups:"Pop-ups",elevationMode:"Hoogtemodus",disabled:"Uitgeschakeld",labelsOn:"Labels aan",layerType:"Laagtype:",legend:"Legenda",onTheGround:"Op de grond",lines:"Lijn",popupsOn:"Pop-ups aan",mesh:"Raster",advancedSymbology:"Geavanceerde symbolen",geometryType:"Geometrietype:"}},"dojo/nls/colors":{lightsteelblue:"lichtstaalblauw",orangered:"oranjerood",midnightblue:"nachtblauw",cadetblue:"donkerstaalblauw",seashell:"schelp",slategrey:"leigrijs",coral:"koraalrood",darkturquoise:"donkerturquoise",
antiquewhite:"antiekwit",mediumspringgreen:"midlentegroen",transparent:"transparant",salmon:"zalm",darkgrey:"donkergrijs",ivory:"ivoorwit",greenyellow:"groengeel",mistyrose:"matroze",lightsalmon:"lichtzalm",silver:"zilvergrijs",dimgrey:"dofgrijs",orange:"oranje",white:"wit",navajowhite:"navajowit",royalblue:"koningsblauw",deeppink:"donkerroze",lime:"limoen",oldlace:"kant",chartreuse:"groengeel",darkcyan:"donkercyaan",yellow:"geel",linen:"linnen",olive:"olijfgroen",gold:"goud",lawngreen:"grasgroen",
lightyellow:"lichtgeel",tan:"geelbruin",darkviolet:"donkerviolet",lightslategrey:"lichtblauwgrijs",grey:"grijs",darkkhaki:"donkerkaki",green:"groen",deepskyblue:"diephemelblauw",aqua:"aqua",sienna:"sienna",mintcream:"mintroomgeel",rosybrown:"roodbruin",mediumslateblue:"midgrijsblauw",magenta:"magenta",lightseagreen:"lichtzeegroen",cyan:"cyaan",olivedrab:"grijsbruin",darkgoldenrod:"donkergoud",slateblue:"leiblauw",mediumaquamarine:"midaquamarijn",lavender:"lavendelblauw",mediumseagreen:"midzeegroen",
maroon:"kastanjebruin",darkslategray:"donkerblauwgrijs",mediumturquoise:"midturquoise",ghostwhite:"spierwit",darkblue:"donkerblauw",mediumvioletred:"midvioletrood",brown:"bruin",lightgray:"lichtgrijs",sandybrown:"zandbruin",pink:"roze",firebrick:"vuursteenrood",indigo:"indigo",snow:"sneeuwwit",darkorchid:"donkerorchidee",turquoise:"turquoise",chocolate:"chocoladebruin",springgreen:"lentegroen",moccasin:"moccasin",navy:"marineblauw",lemonchiffon:"citroengeel",teal:"grijsblauw",floralwhite:"rozewit",
cornflowerblue:"korenbloemblauw",paleturquoise:"bleekturquoise",purple:"purper",_localized:{},gainsboro:"lichtblauwgrijs",plum:"pruim",red:"rood",blue:"blauw",forestgreen:"bosgroen",darkgreen:"donkergroen",honeydew:"meloen",darkseagreen:"donkerzeegroen",lightcoral:"lichtkoraal",palevioletred:"bleekvioletrood",mediumpurple:"midpurper",saddlebrown:"leerbruin",darkmagenta:"donkermagenta",thistle:"distel",whitesmoke:"rookwit",wheat:"tarwebruin",violet:"violet",lightskyblue:"lichthemelsblauw",goldenrod:"goudbruin",
mediumblue:"midblauw",skyblue:"hemelsblauw",crimson:"karmozijnrood",darksalmon:"donkerzalm",darkred:"donkerrood",darkslategrey:"donkerblauwgrijs",peru:"bruin",lightgrey:"lichtgrijs",lightgoldenrodyellow:"lichtgoudgeel",blanchedalmond:"amandel",aliceblue:"lichtblauw",bisque:"oranjegeel",slategray:"leigrijs",palegoldenrod:"bleekgeel",darkorange:"donkeroranje",aquamarine:"aquamarijn",lightgreen:"lichtgroen",burlywood:"lichtbruin",dodgerblue:"helderblauw",darkgray:"donkergrijs",lightcyan:"lichtcyaan",
powderblue:"lichtblauw-wit",blueviolet:"violet",orchid:"orchidee",dimgray:"dofgrijs",beige:"beige",fuchsia:"fuchsia",lavenderblush:"lavendelblos",hotpink:"acaciaroze",steelblue:"staalblauw",tomato:"tomaat",lightpink:"lichtroze",limegreen:"limoengroen",indianred:"indisch rood",papayawhip:"papajaroze",lightslategray:"lichtblauwgrijs",gray:"grijs",mediumorchid:"midorchidee",cornsilk:"ma\u00efsgeel",black:"zwart",seagreen:"zeegroen",darkslateblue:"donkergrijsblauw",khaki:"kaki",lightblue:"lichtblauw",
palegreen:"bleekgroen",azure:"azuur",peachpuff:"perzikroze",darkolivegreen:"donkerolijfgroen",yellowgreen:"geelgroen"},"webSceneViewer/nls/viewer":{webglMessages:{troubleshoot:'Ga naar \x3ca href\x3d"http://get.webgl.org" target\x3d"_blank"\x3eget.webgl.org\x3c/a\x3e om te zoeken naar oplossingen voor problemen',layerInfo:"${LayerType} door ${Author}",learnMore:"Meer weten",help:"Help",mobile:"Websceneviewer wordt niet ondersteund op mobiele apparaten.",badhardware:"Kan de WebGL-context niet maken.\x3cbr\x3eMisschien is WebGL uitgeschakeld in uw browser of biedt uw hardware geen ondersteuning voor WebGL.",
badbrowser:"Uw browser ondersteunt WebGL blijkbaar niet."},defaultWebSceneName:"Mijn Scene",menu:{errorSceneServiceLoad:"Fout bij het laden van sceneservice",titleBasemap:"Basiskaart",errorLayerName:"Laagnaam:",titleSearch:"Zoeken",titleEnvironmentSettings:"Omgeving",titleShare:"Delen",titleLegend:"Legenda",moreTools:"Meer tools",titleSettings:"Instellingen",titleLayers:"Lagen"},dialogs:{webscene:"Webscene",layerDidNotDrawCompletely:"Laag is niet volledig getekend",webglCheck:"WebGL-controle",browserFail:"De sceneviewer kan niet worden geopend in uw browser.",
browserCheck:"Browsercontrole",addLayer:"Laag toevoegen",unsupportedBasemap:"Basemap wordt niet ondersteund"},messages:{geometryServiceUnavailableTitle:"Probleem met Geometry Service",tilingSchemeTileSize:"Niet-compatibel tiling-schema: alleen tiles met een breedte en hoogte van 256 worden ondersteund.",elevationBasemapSR:"Ruimtelijke referentie van hoogtelaag stemt niet overeen met ruimtelijke referentie van basiskaart.",addLayerFailed:"Laag kan niet worden toegevoegd",featureServiceNotSupportedRendererType:"Renderertype wordt niet ondersteund:",
splashNewToArcGIS:"Is ArcGIS nieuw voor u? Schrijf u dan vandaag in voor een proefabonnement.",imageServicesCached:"Alleen cached Image Servers worden ondersteund.",featureServiceNotSupportedMaxFeatures:"featureservice overschrijdt max objectlimiet:",layerAddedSuccess:"Laag is toegevoegd.",tiledMapServicesMinVersion:"Tiled Map-lagen op servers voor 10.2.2 worden niet ondersteund.",layerDidNotDrawCompletely:"is niet volledig getekend omdat de serveroverdrachtslimiet van ${limit} objecten is overschreden.",
geometryServiceUnavailable:"Geometry service reageert niet of is niet juist geconfigureerd. Belichting in de scene is mogelijk niet juist.",layerCreationErrorGeneric:"Fout tijdens creatie van de laag.",elevationImageServicesSR:"Hoogtelagen moeten in Web Mercator zijn.",featureServiceNotSupportedNoRenderer:"Services zonder een renderer worden niet ondersteund.",featureServiceNotSupportedTable:"Type Tabel wordt niet ondersteund.",tiledImageServiceSRGCS:"Tiled Image lagen in geografische co\u00f6rdinaatsystemen worden niet ondersteund.",
websceneLoadFailBadVersion:"Ongeldige versie ${websceneVersion} in webscene.",elevationBasemapTS:"Tiling schema van hoogtelaag is niet compatibel met tiling schema van de basiskaart.",layerDisplaysNotAsExpected:"Laag wordt mogelijk niet weergegeven zoals verwacht.",onlyTiledLayerSupported:"Alleen Tiled Map-lagen worden ondersteund.",layerDisplaysWithDefaultSymbology:"Laag wordt weergegeven met standaardsymbologie.",layerTypeNotSupported:"Laagtype niet ondersteund:",tiledMapServicesSR:"Tiled Map-lagen moeten in Web Mercator zijn.",
elevationImageServicesCached:"Alleen cached Image Servers met LERC encoding worden ondersteund.",invalidUrl:"Ongeldige URL",tiledMapServiceSRGCS:"Tiled Map lagen in geografische co\u00f6rdinaatsystemen worden niet ondersteund.",serviceName:"Servicenaam",BasemapDropWarning:"De ruimtelijke referentie en het tiling schema van de basiskaart zijn niet compatibel met de laag en werden daarom verwijderd.",elevationBasemapTitle:"Standaard hoogtelaag kan niet toegevoegd worden",unsupportedSymbolLayerType:"Symboollaag wordt niet ondersteund",
featureServiceNotSupportedMultipatch:"Multipatch Feature Services worden niet ondersteund.",sceneLayerSR:"Scenelagen moeten overeenstemmen met de ruimtelijke referentie van de scene.",tiledElevationServicesSRGeneric:"Hoogtelagen moeten overeenstemmen met de ruimtelijke referentie en het tiling schema.",unsupportedUrl:"Niet-ondersteunde URL",sceneRejectG2L:"Een mondiale scene kan niet ge\u00efmporteerd worden in een lokale scene.",layerItemPropertiesNotApplied:"Weergave-eigenschappen die zijn opgeslagen in het Laagitem zijn niet toegepast.",
layerItemPropertiesFromMapServer:"Weergave-eigenschappen die zijn opgeslagen in Kaartlaagitems worden niet ondersteund.",unsupportedSymbology:"Delen van symbologie niet ondersteund",sceneLayerVersion:"Scenelaagversie wordt niet ondersteund.",tiledMapServicesTilingScheme:"Tiled kaartlagen moeten zich houden aan ArcGIS Online tiling schema.",patchRequired:"Patch(es) benodigd:",sceneRejectTitle:"Scene kan niet ge\u00efmporteerd worden",layerDisplaysWithServiceSymbology:"Laag wordt weergegeven met servicesymbologie.",
sceneRejectL2G:"Een lokale scene kan niet ge\u00efmporteerd worden in een mondiale scene.",splashShowThisOnStart:"dit tonen bij opstarten",websceneVersionRequires:"(vereist ${websceneRequiredVersion})",tilingSchemeGaps:"Niet-compatibel tiling schema: openingen tussen niveaus worden niet ondersteund.",tiledMapServicesMinVersionPatch:"Tiled Map-lagen van 10.2.2 servers worden alleen ondersteund als alle serverupdates zijn toegepast.",sceneRejectSRTS:"De ruimtelijke referentie van de geselecteerde scene stemt niet overeen met de ruimtelijke referentie van de huidige scene.",
layerItemTypeNotSupported:"Kaartlaagitemtype wordt niet ondersteund:",BasemapDropWarningTitle:"Basiskaart werd verwijderd",unsupportedSymbolType:"Symbool wordt niet ondersteund",selectedBasemapMismatch:"De ruimtelijke referentie en het tiling schema van de basiskaart zijn niet compatibel met de scene.\nCre\u00eber een nieuwe scene om deze basiskaart te gebruiken.",itemId:"Item-ID:",tiledMapServicesSRGeneric:"Tiled Map lagen moeten overeenstemmen met de ruimtelijke referentie en het tiling schema.",
elevationImageServicesTilingScheme:"Hoogtelagen moeten zich houden aan het ArcGIS Online tiling schema.",tiledImageServicesSRGeneric:"Tiled Image lagen moeten overeenstemmen met de ruimtelijke referentie en het tiling schema.",tiledImageServicesTilingScheme:"Tiled Image lagen moeten zich houden aan ArcGIS Online tiling schema.",splashSignInToEdit:"Schrijf u in om de wereld te ontdekken in 3D en voeg lagen toe van Esri en duizenden andere organisaties om nieuwe scenes te maken.",tilingSchemePowerOfTwo:"Niet-compatibel tiling-schema: elke schaal moet exact half zo groot zijn als de schaal van het voorgaande niveau.",
websceneGlobalEmbeddedSR:"Ruimtelijke referenties in mondiale webscenes moeten Web Mercator of WGS84 GCS zijn.",splashLookAtOtherScenes:"Hier ziet u een aantal scenes die u kunt ontdekken.",basemapDropTitle:"Mismatch van gegevens",featureServiceNotSupportedMaxVertices:"featureservice overschrijdt max limiet:",basemapDropConfirm:"Basiskaart verwijderen",basemapDrop:"De laag heeft een andere ruimtelijke referentie en een ander tiling schema dan de basiskaart.\x3cBR\x3eWilt u de basiskaart verwijderen om de laag toe te voegen?",
itemType:"Itemtype:",sceneLayerSRWM:"Scenelagen moeten in Web Mercator zijn.",imageServicesSR:"Tiled Image lagen moeten in Web Mercator zijn.",tilingSchemeGeneric:"Niet compatibel tiling schema.",websceneLocalSRGCS:"Lokale webscenes in geografische co\u00f6rdinaten worden niet ondersteund.",websceneLoadFailNoVersion:"Geen versie gevonden in webscene.",websceneLoadFail:"Kan webscene niet laden.",websceneVersionMoreRecent:"Web scene (versie ${websceneVersion}) is recenter dan de weergave-ersie {$viewerVersion}.",
layerDisplaysWithItemSymbology:"Laag wordt weergegeven met itemsymbologie.",websceneGlobalSR:"Mondiale webscene moet in Web Mercator zijn.",layerDisplaysWithFallbackSymbology:"Laag wordt weergegeven met terugvalsymbologie.",byReferenceRendererUnsupported:"Op referentie-renderer kon niet gecre\u00eberd worden",webscenePotentiallyUnsupported:"Onderdelen van de web scene worden mogelijk niet ondersteund en mogelijk niet weergegeven zoals verwacht.",selectedBasemapMismatchTitle:"Geselecteerde basiskaart kan niet gebruikt worden",
websceneLoadFailIncompatVersion:"Websceneversie ${websceneVersion} is niet compatibel met deze viewer",sceneLayerSRGCS:"Scenelagen in geografische co\u00f6rdinaatsystemen worden niet ondersteund in lokale scenes."},buttons:{exitFullScreen:"Volledig scherm afsluiten",fullScreen:"Volledig scherm",signIn:"Aanmelden",tryArcGIS:"Probeer ArcGIS",visitGallery:"Bezoek de galerij"},_localized:{},appName:"3D Scene Viewer"}});