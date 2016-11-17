// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define({"webSceneViewer/widgets/nls/widgets":{settings:{sceneNav:"Oletus",proNav:"ArcGIS Pro",navigation:"3D-navigointi",mouseImage:"Hiiren painikkeiden m\u00e4\u00e4ritys 3D-navigointia varten"},moveUp:"Siirr\u00e4 yl\u00f6s",showInMapLayers:"N\u00e4yt\u00e4 karttatasoissa",basemapGallery:{tilingSchemeTileSize:"Yhteensopimaton tiilirakenne: vain leveydelt\u00e4\u00e4n ja korkeudeltaan 256 yksikk\u00f6\u00e4 olevia tiili\u00e4 tuetaan.",basemapLayerTypeWMS:"OGC Web Map Service (WMS) -palvelua ei tueta taustakarttana.",
basemapLayerTypeWMTS:"OGC Web Tile Service (WMTS) -palvelua ei tueta taustakarttana.",basemapLayerTypeIS:"Kuvapalvelun karttatasoa ei tueta taustakarttana.",basemapLayerTypeWTL:"Tiilitetty Web-karttatasoa ei tueta taustakarttana.",basemapLayerTypeDMS:"Dynaamisen karttapalvelun karttatasoa ei tueta taustakarttana.",SRMismatch:"Koordinaatistotieto ei ole yhteensopiva maiseman kanssa",tiledMapServiceSRGCS:"Maantieteellisten koordinaattij\u00e4rjestelmien tiilitettyj\u00e4 karttatasoja ei tueta.",tilingSchemePowerOfTwo:"Yhteensopimaton tiilirakenne: kunkin asteikon on oltava t\u00e4sm\u00e4lleen puolet edellisen tason asteikosta.",
TSMismatch:"Tiilirakenne ei ole yhteensopiva maiseman kanssa",SRMismatchGlobal:"Yleiset maisemat eiv\u00e4t tue koordinaatistotietoa",tiledMapServicesMinVersion:"Versiota 10.2.2 aiempien palvelimien tiilitettyj\u00e4 karttatasoja ei tueta.",TilingScheme:"Tiilirakenne ei noudata ArcGIS Online -tiilirakennetta.",noBasemap:"Ei taustakarttaa"},symbologyEditor:{feet:"jalkaa",outlineColor:"Reunaviivan v\u00e4ri",reset:"Palauta",originalSymbology:"Alkuper\u00e4iset symbolit",rangeMsg:"Arvo alueen ulkopuolella. Anna arvo v\u00e4lilt\u00e4 ${minSize}\u2013${maxSize}",
points:"pistett\u00e4",modifySymbology:"Muuta symbolit",fill:"T\u00e4yt\u00e4",color:"V\u00e4ri",transparency:"L\u00e4pin\u00e4kyvyys (%)",path3d:"3D-polku",shapes:{tetrahedron:"Nelitahokas",square:"Neli\u00f6",cross:"Risti",x:"X",cylinder:"Lieri\u00f6",cone:"Kartio",sphere:"Ympyr\u00e4",kite:"Leija",cube:"Kuutio",circle:"Ympyr\u00e4",diamond:"Vinoneli\u00f6"},colorOverride:"V\u00e4rin ohitus",size:"Koko",px:"px",customize:"Mukauta",ok:"OK",line3d:"3D-viiva",symbologyShieldWarning:"T\u00e4m\u00e4n karttatason symboleita ei voi muokata. Poista nykyiset symbolit ja m\u00e4\u00e4rit\u00e4 uudet napsauttamalla OK-painiketta.",
extrusion:"Puristus (metrein\u00e4)",polygon3d:"3D-puristus",outline:"\u00c4\u00e4riviiva",fillColor:"T\u00e4ytt\u00f6v\u00e4ri",outlineSize:"\u00c4\u00e4riviivan koko",icon2d:"2D-kuvake",object3D:"3D-objekti",meters:"metri\u00e4",type:"Tyyppi",line2d:"2D-viiva",shape:"Muoto",symbols:"Symbolit",polygon2d:"2D-alue"},slideDeckEditable:{deleteSlide:"Poista dia",updateSlide:"P\u00e4ivit\u00e4 dia",addSlide:"Tallenna dia",slide:"Dia"},header:{esriCommunity:"Yhteis\u00f6 ja foorumit",signOut:"Kirjaudu ulos",
map:"Kartta",groups:"Ryhm\u00e4t",plans:"Tilaaminen",newGlobal:"Uusi yleinen maisema",help:"Ohje",home_link:"Koti",spatialRef:"Koordinaatistotieto",newScene:"Uusi maisema",signIn:"Kirjaudu sis\u00e4\u00e4n",localScene:"Paikallinen maisema",myAccount:"Oma organisaatio",fullScreen:"Tutki koko n\u00e4yt\u00f6n kokoisessa katseluohjelmassa",myEsri:"My Esri",support:"Ohje",newLocal:"Uusi paikallinen maisema",globalScene:"Yleinen maisema",training:"Koulutus",simpleHome:"Koti",trialDownloads:"Kokeiluversioiden lataukset",
features:"Ominaisuudet",myContent:"Oma sis\u00e4lt\u00f6",adminGuide:"P\u00e4\u00e4k\u00e4ytt\u00e4j\u00e4n opas",myProfile:"Oma profiili",gallery:"Galleria"},share:{smallSize:"Pieni",text:"Valitse jokin alla olevista asetuksista jakaaksesi t\u00e4m\u00e4n maiseman.",shareEmailTxt1:"Katso t\u00e4t\u00e4 Web-n\u00e4kym\u00e4\u00e4:",shareEmailTxt2:"Voi luoda ja jakaa omia kolmiulotteisia Web-maisemia Esrin maisemien katseluohjelman avulla. Voit kokeilla sit\u00e4 ilmaiseksi siirtym\u00e4ll\u00e4 osoitteeseen http://www.arcgis.com ja napsauttamalla Maisema-vaihtoehtoa.",
changeShareSettings:"Muuta jakamisasetuksia",link:"Jaa linkki t\u00e4h\u00e4n maisemaan",shareNotPublic:"T\u00e4t\u00e4 maisemaa ei ole jaettu julkisesti. Ihmiset eiv\u00e4t ehk\u00e4 voi katsella sit\u00e4.",more:"Upotusasetukset",embed:"Upota t\u00e4m\u00e4 maisema Web-sivustoon",customSize:"Mukautettu",shortenLink:"Lyhyt linkki",shareNotPublicLayer:"V\u00e4hint\u00e4\u00e4n yksi t\u00e4m\u00e4n maiseman karttataso ei ole julkinen. Ihmiset eiv\u00e4t ehk\u00e4 voi katsella kaikkia karttatasoja.",
largeSize:"Suuri",mediumSize:"Keskisuuri",shareUnsaved:"T\u00e4m\u00e4 maisema sis\u00e4lt\u00e4\u00e4 tallentamattomia muutoksia. Jos haluat jakaa maiseman, tallenna ensin muutokset.",shareEmailSubject:"${sceneName} kolmiulotteisena (Maisemien katseluohjelma)",shareTwitterTxt:"Tutki ymp\u00e4rist\u00f6\u00e4 ${sceneName} kolmiulotteisesti selaimellasi"},_localized:{},underground:{seeThroughGround:"Katsele maanpinnan l\u00e4pi"},mapControls:{zoomIn:"L\u00e4henn\u00e4",home:"Alkuper\u00e4inen n\u00e4kym\u00e4",
pan:"Vierit\u00e4",rotate:"Kierr\u00e4",panRotateToggle:"Vaihda kolmiulotteisen vierityksen ja kierron v\u00e4lill\u00e4",zoomOut:"Loitonna"},environmentSettings:{dragSunSliderText:"Muuta kellonaikaa vet\u00e4m\u00e4ll\u00e4 liukus\u00e4\u00e4dint\u00e4.",dragSunSliderHint:"Ved\u00e4 liukus\u00e4\u00e4dint\u00e4",shadowing:"Varjostus",directShadow:"Suora varjo (auringonvalosta)",sunrise:"auringonnousu",sunset:"auringonlasku",diffuseShadow:"Ep\u00e4selv\u00e4t varjot (ymp\u00e4rist\u00f6n sulkeminen)",
sunLight:"Auringonvalo"},switchControl:{off:"poissa k\u00e4yt\u00f6st\u00e4",on:"p\u00e4\u00e4ll\u00e4"},moveDown:"Siirr\u00e4 alas",rename:"Nime\u00e4 uudelleen",hideInMapLayers:"Piilota karttatasoihin",invalidTitle:"Otsikossa ei voi olla seuraavia merkkej\u00e4: \x3c or \x3e.",layerItemEditable:{groupTypeHide:"Piilota",changeGroupType:"Muuta ryhm\u00e4n tyyppi\u00e4",configureLayer:"M\u00e4\u00e4rit\u00e4 karttataso",dragHere:"Ved\u00e4 karttataso t\u00e4h\u00e4n",groupTypeCheckbox:"Valintaruutu",
groupTypeRadio:"Valintanappi",zoomToLayer:"Tarkenna kohteeseen",deleteLayer:"Poista",groupTypeCompact:"Sulauta kohteet"},compass:{compass:"Kompassi"}},"webSceneViewer/editor/nls/editor":{confirmDialog:{cancelButton:"Peruuta",confirm:"Vahvista"},addLayerByUrlPane:{addingLayer:"Lis\u00e4t\u00e4\u00e4n karttataso karttaan...",placeholderLayerName:"esim. Vesist\u00f6t",layerUrl:"Karttatason URL-osoite",layerName:"Karttatason nimi",placeholderLayerUrl:"esim. http://server.esri.com/water/MapServer"},panes:{enterLayerUrl:"Anna karttatason URL-osoite",
addLayers:"Lis\u00e4\u00e4 karttatasoja",advancedSettings:"Lis\u00e4asetukset",contents:"Sis\u00e4lt\u00f6",slides:"Diat",properties:"Ominaisuudet",configureLayer:"M\u00e4\u00e4rit\u00e4 karttataso",modifyScene:"Muokkaa"},contentsPane:{newGroup:"Uusi ryhm\u00e4"},buttons:{cancel:"Peruuta",add:"Lis\u00e4\u00e4",saveScene:"Tallenna maisema",save:"Tallenna",importLayer:"Tuo",remove:"Poista",done:"Valmis",saveTooltip:"Tallenna maisema (Ctrl+S)",addGroup:"Luo karttatason ryhm\u00e4..."},sceneProperties:{tags:"Tunnisteet",
elevation:"Korkeustaso",title:"Otsikko",elevationUnsupported:"Oletuskorkeuskarttataso ei vastaa taustakartan koordinaatistotietoa ja tiilirakennetta.",summary:"Yhteenveto",placeholderEnterTitle:"Anna otsikko...",currentView:"P\u00e4ivit\u00e4 nykyiseen n\u00e4kym\u00e4\u00e4n",copyTitle:"Maiseman ${scenetitle} kopio, tekij\u00e4: ${sceneauthor}",placeholderEnterTags:"Lis\u00e4\u00e4 tunniste(ita)",placeholderEnterSummary:"Maiseman yhteenveto (valinnainen)",clipping:"Leikkaa laajuuteen",updateThumbnail:"P\u00e4ivit\u00e4 pikkukuva",
thumbnail:"Pikkukuva"},navigationContainer:{back:"Takaisin",closeOpen:"Sulje editori",open:"Avaa"},saveDialog:{confirmOverwriteCancel:"Peruuta",saveInitialViewpoint:"Tallenna nykyinen n\u00e4kym\u00e4kohta alkuper\u00e4iseksi",confirmOverwriteYes:"Kyll\u00e4, korvaa maisema",confirmOverwriteNo:"Ei",saveAsNewScene:"Maisema on tallennettava uutena kohteena.",confirmOverwriteQuestion:"Haluatko korvata sen?",ownerMe:"minun omistamani",saveInitialState:"Tallenna nykyinen tila alkuper\u00e4iseksi maiseman tilaksi",
confirmOverwrite2:"Samanniminen maisema on jo olemassa ja se korvataan.",choseLocation:"Valitse sijainti",copyScene:"T\u00e4m\u00e4 luo uuden kohteen",overwriteScene:"T\u00e4m\u00e4 korvaa aiemmin luodun kohteen",invalidSummary:"Yhteenvedossa ei voi olla seuraavia merkkej\u00e4: \x3c or \x3e.",confirmOverwrite:"Samanniminen maisema on jo olemassa.",invalidTitle:"Otsikossa ei voi olla seuraavia merkkej\u00e4: \x3c or \x3e.",websceneTitleExists:"T\u00e4m\u00e4nniminen maisema on jo olemassa.",myContent:"Oma sis\u00e4lt\u00f6",
saveAs:"Tallenna uudeksi maisemaksi",otherContent:"${sceneowner}",location:"Tallenna kohteeseen",owner:"omistaja: ${ownerName}"},addLayerPane:{by:"tekij\u00e4lt\u00e4",noResult:"Vastaavia tuloksia ei l\u00f6ytynyt.",content:"Sis\u00e4lt\u00f6",featuredContent:"Esrin tuottama sis\u00e4lt\u00f6",searchForLayer:"Haetaan karttatasoa...",search:"Etsi",myContent:"Oma sis\u00e4lt\u00f6",more:"Lis\u00e4\u00e4..."},_localized:{},messages:{addLayerFailed:"Karttatasoa ei voi lis\u00e4t\u00e4",pendingChangesConfirm:"Maisemaan tehdyt tallentamattomat muutokset menetet\u00e4\u00e4n.",
webSceneSavedShared:"Web-maisema on tallennettu henkil\u00f6n ${sceneowner} sis\u00e4lt\u00f6\u00f6n.",webSceneSaved:"Web-maisema on tallennettu Oma sis\u00e4lt\u00f6 -kansioon.",viewItemDetails:"N\u00e4yt\u00e4 kohteen yksityiskohdat"},editBasemapPane:{elevationOff:"Korkeustaso poissa k\u00e4yt\u00f6st\u00e4",elevation:"Korkeustaso",elevationInBasemap:"Taustakartan korkeustaso",basemap:"Taustakartta",elevationOn:"Korkeustaso k\u00e4yt\u00f6ss\u00e4"},dialogs:{webSceneSaveOk:"Web-maisema tallennettu",
webSceneSaveFailed:"Web-maiseman tallennus ep\u00e4onnistui",addLayer:"Lis\u00e4\u00e4 karttataso"},editLayerPane:{labelsOff:"Tunnustekstit pois k\u00e4yt\u00f6st\u00e4",labels:"Tunnustekstit",relativeToGround:"Suhteessa maahan",elevationOffsetMeters:"Korkeustason siirtym\u00e4 (metri\u00e4)",offsetMeters:"Siirtym\u00e4 (metrein\u00e4)",point:"Piste",elevation:"Korkeustaso",transparency:"Transparency",zoomTo:"Tarkenna kohteeseen",mode:"Tila",polygon:"Alue",absoluteHeight:"Absoluuttinen korkeus",popupsOff:"Ponnahdusikkunat poissa k\u00e4yt\u00f6st\u00e4",
enabled:"K\u00e4yt\u00f6ss\u00e4",popups:"Ponnahdusikkunat",elevationMode:"Korkeustila",disabled:"Poissa k\u00e4yt\u00f6st\u00e4",labelsOn:"Tunnustekstit k\u00e4ytt\u00f6\u00f6n",layerType:"Karttatason tyyppi:",legend:"Selite",onTheGround:"Maassa",lines:"Viiva",popupsOn:"Ponnahdusikkunat k\u00e4yt\u00f6ss\u00e4",mesh:"Verkko",advancedSymbology:"Symbolien lis\u00e4asetukset",geometryType:"Geometriatyyppi:"}},"dojo/nls/colors":{lightsteelblue:"vaalea ter\u00e4ksensininen",orangered:"oranssinpunainen",
midnightblue:"y\u00f6nsininen",cadetblue:"meren vihre\u00e4",seashell:"simpukankuori",slategrey:"savenharmaa",coral:"koralli",darkturquoise:"tumma turkoosi",antiquewhite:"antiikinvalkoinen",mediumspringgreen:"keskivaalea kev\u00e4\u00e4nvihre\u00e4",transparent:"l\u00e4pin\u00e4kyv\u00e4",salmon:"lohenpunainen",darkgrey:"tummanharmaa",ivory:"norsunluu",greenyellow:"vihre\u00e4nkeltainen",mistyrose:"utuinen ruusu",lightsalmon:"vaalea lohenpunainen",silver:"hopea",dimgrey:"himme\u00e4nharmaa",orange:"oranssi",
white:"valkoinen",navajowhite:"navajonvalkoinen",royalblue:"syv\u00e4nsininen",deeppink:"syv\u00e4 vaaleanpunainen",lime:"vaaleanvihre\u00e4",oldlace:"vanha pitsi",chartreuse:"kellanvihre\u00e4",darkcyan:"tumma turkoosi",yellow:"keltainen",linen:"pellavanvaalea",olive:"oliivinvihre\u00e4",gold:"kulta",lawngreen:"ruohonvihre\u00e4",lightyellow:"vaaleankeltainen",tan:"kellanruskea",darkviolet:"tummanvioletti",lightslategrey:"vaaleanharmaa",grey:"harmaa",darkkhaki:"tumma khaki",green:"vihre\u00e4",deepskyblue:"tumma taivaansininen",
aqua:"sinivihre\u00e4",sienna:"siena",mintcream:"minttukreemi",rosybrown:"punertavanruskea",mediumslateblue:"keskivaalea siniharmaa",magenta:"magenta",lightseagreen:"vaalea merenvihre\u00e4",cyan:"syaani",olivedrab:"oliivinruskea",darkgoldenrod:"tumma kultapiisku",slateblue:"savensininen",mediumaquamarine:"keskivaalea vedenvihre\u00e4",lavender:"laventeli",mediumseagreen:"keskivaalea merenvihre\u00e4",maroon:"kastanjanruskea",darkslategray:"tummanharmaa",mediumturquoise:"keskivaalea turkoosi",ghostwhite:"lakananvalkoinen",
darkblue:"tummansininen",mediumvioletred:"keskivaalea lila",brown:"ruskea",lightgray:"vaaleanharmaa",sandybrown:"hiekanruskea",pink:"vaaleanpunainen",firebrick:"poltetun tiilen punainen",indigo:"indigo",snow:"lumivalkoinen",darkorchid:"tumma orkidea",turquoise:"turkoosi",chocolate:"suklaanruskea",springgreen:"kev\u00e4\u00e4nvihre\u00e4",moccasin:"nahanruskea",navy:"laivastonsininen",lemonchiffon:"sitruunankeltainen",teal:"sinivihre\u00e4",floralwhite:"kukanvalkoinen",cornflowerblue:"syv\u00e4nsininen",
paleturquoise:"haalea turkoosi",purple:"violetti",_localized:{},gainsboro:"gainsboro",plum:"luumunpunainen",red:"punainen",blue:"sininen",forestgreen:"mets\u00e4nvihre\u00e4",darkgreen:"tummanvihre\u00e4",honeydew:"hunajameloninvihre\u00e4",darkseagreen:"tumma merenvihre\u00e4",lightcoral:"vaalea koralli",palevioletred:"haalea lila",mediumpurple:"keskivaalea violetti",saddlebrown:"satulanruskea",darkmagenta:"tumma magenta",thistle:"ohdake",whitesmoke:"savunvalkea",wheat:"vehn\u00e4nkeltainen",violet:"violetti",
lightskyblue:"vaalea taivaansininen",goldenrod:"kullanruskea",mediumblue:"keskisininen",skyblue:"taivaansininen",crimson:"karmiininpunainen",darksalmon:"tumma lohenpunainen",darkred:"tummanpunainen",darkslategrey:"tummanharmaa",peru:"peru",lightgrey:"vaaleanharmaa",lightgoldenrodyellow:"vaalea kultapiiskunkeltainen",blanchedalmond:"kuorittu manteli",aliceblue:"vaaleanharmaansininen",bisque:"vaaleanruskea",slategray:"savenharmaa",palegoldenrod:"haalea kultapiisku",darkorange:"tummanoranssi",aquamarine:"vedenvihre\u00e4",
lightgreen:"vaaleanvihre\u00e4",burlywood:"puunruskea",dodgerblue:"Dodger-sininen",darkgray:"tummanharmaa",lightcyan:"vaalea syaani",powderblue:"harmaansininen",blueviolet:"sinivioletti",orchid:"orkidea",dimgray:"himme\u00e4nharmaa",beige:"vaaleanruskea",fuchsia:"purppura",lavenderblush:"laventelinpunainen",hotpink:"pinkki",steelblue:"ter\u00e4ksensininen",tomato:"tomaatinpunainen",lightpink:"vaaleanpunainen",limegreen:"limetinvihre\u00e4",indianred:"kirkkaanpunainen",papayawhip:"papaijavaahto",lightslategray:"vaaleanharmaa",
gray:"harmaa",mediumorchid:"keskivaalea orkidea",cornsilk:"maissinkeltainen",black:"musta",seagreen:"merenvihre\u00e4",darkslateblue:"tumma siniharmaa",khaki:"khaki",lightblue:"vaaleansininen",palegreen:"haalea vihre\u00e4",azure:"taivaansininen",peachpuff:"persikka",darkolivegreen:"tummanoliivinvihre\u00e4",yellowgreen:"kellanvihre\u00e4"},"webSceneViewer/nls/viewer":{webglMessages:{troubleshoot:'M\u00e4\u00e4rit\u00e4 ongelmien syyt osoitteessa \x3ca href\x3d"http://get.webgl.org" target\x3d"_blank"\x3eget.webgl.org\x3c/a\x3e',
layerInfo:"${LayerType}, tekij\u00e4: ${Author}",learnMore:"Lis\u00e4tietoja",help:"Ohje",mobile:"Mobiililaitteet eiv\u00e4t tue Web-maisema -katseluohjelmaa.",badhardware:"Ei voi luoda WebGL-kontekstia.\x3cbr\x3eWebGL ei ehk\u00e4 ole k\u00e4yt\u00f6ss\u00e4 selaimessa tai laitteisto ei tue WebGL:\u00e4\u00e4.",badbrowser:"Selaimesi ei n\u00e4yt\u00e4 tukevan WebGL:\u00e4\u00e4."},defaultWebSceneName:"Oma maisema",menu:{errorSceneServiceLoad:"Maisema-palvelun latausvirhe",titleBasemap:"Taustakartta",
errorLayerName:"Karttatason nimi:",titleSearch:"Etsi",titleEnvironmentSettings:"Ymp\u00e4rist\u00f6",titleShare:"Jaa",titleLegend:"Selite",moreTools:"Lis\u00e4\u00e4 ty\u00f6kaluja",titleSettings:"Settings",titleLayers:"Karttatasot"},dialogs:{webscene:"Web-maisema",layerDidNotDrawCompletely:"Karttatason piirto j\u00e4i vaillinaiseksi.",webglCheck:"WebGL-tarkistus",browserFail:"Maisema-katseluohjelmaa ei voi avata selaimessasi.",browserCheck:"Selaimen tarkistus",addLayer:"Lis\u00e4\u00e4 karttataso",
unsupportedBasemap:"Taustakarttaa ei tueta"},messages:{geometryServiceUnavailableTitle:"Geometriapalvelussa on ongelma",tilingSchemeTileSize:"Yhteensopimaton tiilirakenne: vain leveydelt\u00e4\u00e4n ja korkeudeltaan 256 yksikk\u00f6\u00e4 olevia tiili\u00e4 tuetaan.",elevationBasemapSR:"Korkeustason koordinaatistotieto ei vastaa taustakartan koordinaatistotietoa.",addLayerFailed:"Karttatasoa ei voi lis\u00e4t\u00e4",featureServiceNotSupportedRendererType:"Render\u00f6intityyppi\u00e4 ei tueta:",
splashNewToArcGIS:"Oletko uusi ArcGISin k\u00e4ytt\u00e4j\u00e4? Luo nyt tili ja tee kokeilutilaus jo t\u00e4n\u00e4\u00e4n.",imageServicesCached:"J\u00e4rjestelm\u00e4 tukee vain v\u00e4limuistiin tallennettuja kuvapalvelimia.",featureServiceNotSupportedMaxFeatures:"kohdepalvelu ylitt\u00e4\u00e4 kohteen enimm\u00e4israjan:",layerAddedSuccess:"Karttataso lis\u00e4tty.",tiledMapServicesMinVersion:"Versiota 10.2.2 aiempien palvelimien tiilitettyj\u00e4 karttatasoja ei tueta.",layerDidNotDrawCompletely:"piirto j\u00e4i vaillinaiseksi, koska palvelimen ${limit} kohteen siirtoraja ylittyi.",
geometryServiceUnavailable:"Geometriapalvelu ei vastaa tai sit\u00e4 ei ole m\u00e4\u00e4ritetty oikein. Maiseman valaistus voi olla virheellinen.",layerCreationErrorGeneric:"Virhe karttatason luonnissa.",elevationImageServicesSR:"Korkeustasojen on oltava Web Mercator -projektiossa.",featureServiceNotSupportedNoRenderer:"Palveluja, joissa ei ole render\u00f6inti\u00e4, ei tueta.",featureServiceNotSupportedTable:"Tyyppitaulua ei tueta.",tiledImageServiceSRGCS:"Maantieteellisten koordinaattij\u00e4rjestelmien tiilitettyj\u00e4 kuvakarttatasoja ei tueta.",
websceneLoadFailBadVersion:"Web-maiseman versio ${websceneVersion} virheellinen.",elevationBasemapTS:"Korkeustason tiilirakenne ei ole yhteensopiva taustakartan tiilirakenteen kanssa.",layerDisplaysNotAsExpected:"Karttataso ei ehk\u00e4 n\u00e4y odotetulla tavalla.",onlyTiledLayerSupported:"Vain tiilitetyt karttatasot ovat tuettuja.",layerDisplaysWithDefaultSymbology:"Karttatasossa n\u00e4kyv\u00e4t oletussymbolit.",layerTypeNotSupported:"Karttatason tyyppi\u00e4 ei tueta:",tiledMapServicesSR:"Tiilitettyjen karttatasojen on oltava Web Mercator -projektiossa.",
elevationImageServicesCached:"J\u00e4rjestelm\u00e4 tukee vain v\u00e4limuistiin tallennettuja kuvapalvelimia, joissa k\u00e4ytet\u00e4\u00e4n LERC-koodausta.",invalidUrl:"Virheellinen URL",tiledMapServiceSRGCS:"Maantieteellisten koordinaattij\u00e4rjestelmien tiilitettyj\u00e4 karttatasoja ei tueta.",serviceName:"Palvelun nimi",BasemapDropWarning:"Taustakartan koordinaatistotieto ja tiilirakenne eiv\u00e4t ole yhteensopivia karttatason kanssa, joten taustakartta on hyl\u00e4tty.",elevationBasemapTitle:"Oletuskorkeustasoa ei voi lis\u00e4t\u00e4",
unsupportedSymbolLayerType:"Symbolikarttatasoa ei tueta",featureServiceNotSupportedMultipatch:"Multipatch-kohdepalveluja ei tueta.",sceneLayerSR:"Maisemakarttatasojen on vastattava maiseman koordinaatistotietoa.",tiledElevationServicesSRGeneric:"Korkeustasojen on vastattava maiseman koordinaatistotietoa ja tiilirakennetta.",unsupportedUrl:"URL-osoitetta ei tueta",sceneRejectG2L:"Yleist\u00e4 maisemaa ei voi tuoda paikalliseen maisemaan.",layerItemPropertiesNotApplied:"Karttatasokohteeseen tallennettuja n\u00e4ytt\u00f6ominaisuuksia ei otettu k\u00e4ytt\u00f6\u00f6n.",
layerItemPropertiesFromMapServer:"Karttatasokohteisiin tallennettuja n\u00e4ytt\u00f6ominaisuuksia ei tueta.",unsupportedSymbology:"Osaa symboleista ei tueta",sceneLayerVersion:"Maisemakarttatason versiota ei tueta.",tiledMapServicesTilingScheme:"Tiilitettyjen karttatasojen on noudatettava ArcGIS Online -tiilij\u00e4rjestelm\u00e4\u00e4.",patchRequired:"P\u00e4ivitykset ovat pakollisia:",sceneRejectTitle:"Maisemaa ei voi tuoda",layerDisplaysWithServiceSymbology:"Karttatasossa n\u00e4kyv\u00e4t palvelun symbolit.",
sceneRejectL2G:"Paikallista maisemaa ei voi tuoda yleiseen maisemaan.",splashShowThisOnStart:"n\u00e4yt\u00e4 t\u00e4m\u00e4 aloituksessa",websceneVersionRequires:"(edellytt\u00e4\u00e4 versiota ${websceneRequiredVersion})",tilingSchemeGaps:"Yhteensopimaton tiilirakenne: karttatasojen v\u00e4liset aukot eiv\u00e4t ole tuettuja.",tiledMapServicesMinVersionPatch:"Version 10.2.2 palvelinten tiilitettyj\u00e4 karttatasoja tuetaan vain, jos kaikki palvelimen p\u00e4ivitykset on otettu k\u00e4ytt\u00f6\u00f6n.",
sceneRejectSRTS:"Valitun maiseman koordinaatistotieto ei t\u00e4sm\u00e4\u00e4 nykyisen maiseman koordinaatistotietoa.",layerItemTypeNotSupported:"Karttatasokohteen tyyppi\u00e4 ei tueta:",BasemapDropWarningTitle:"Taustakartta on hyl\u00e4tty",unsupportedSymbolType:"Symbolia ei tueta",selectedBasemapMismatch:"Taustakartan koordinaatistotieto ja tiilirakenne eiv\u00e4t ole yhteensopivia maiseman kanssa.\nK\u00e4yt\u00e4 t\u00e4t\u00e4 taustakarttaa luomalla uusi maisema.",itemId:"Kohteen tunnus:",
tiledMapServicesSRGeneric:"Tiilitettyjen karttatasojen on vastattava maiseman koordinaatistotietoa ja tiilirakennetta.",elevationImageServicesTilingScheme:"Korkeustasojen on noudatettava ArcGIS Online -tiilij\u00e4rjestelm\u00e4\u00e4.",tiledImageServicesSRGeneric:"Tiilitettyjen kuvakarttatasojen on vastattava maiseman koordinaatistotietoa ja tiilirakennetta.",tiledImageServicesTilingScheme:"Tiilitettyjen kuvakarttatasojen on noudatettava ArcGIS Online -tiilij\u00e4rjestelm\u00e4\u00e4.",splashSignInToEdit:"Kirjaudu sis\u00e4\u00e4n tutkiaksesi maailmaa kolmiulotteisena ja lis\u00e4t\u00e4ksesi Esrin ja tuhansien muiden organisaatioiden karttatasoja uusien maisemien luontia varten.",
tilingSchemePowerOfTwo:"Yhteensopimaton tiilirakenne: kunkin asteikon on oltava t\u00e4sm\u00e4lleen puolet edellisen tason asteikosta.",websceneGlobalEmbeddedSR:"Yleisten Web-maisemien koordinaatistotietojen on oltava Web Mercator- tai WGS84 GCS -projektiossa.",splashLookAtOtherScenes:"T\u00e4ss\u00e4 on esimerkkej\u00e4 muutamista maisemista, joita voit tutkia.",basemapDropTitle:"Aineisto ei t\u00e4sm\u00e4\u00e4",featureServiceNotSupportedMaxVertices:"kohdepalvelu ylitt\u00e4\u00e4 taitepisteiden enimm\u00e4israjan:",
basemapDropConfirm:"Hylk\u00e4\u00e4 taustakartta",basemapDrop:"Karttatason koordinaatistotieto ja tiilirakenne eiv\u00e4t ole samat kuin taustakartassa.\x3cBR\x3eHaluatko hyl\u00e4t\u00e4 taustakartan, jotta voit lis\u00e4t\u00e4 karttatason?",itemType:"Kohteen tyyppi:",sceneLayerSRWM:"Maisemakarttatasojen on oltava Web Mercator -projektiossa.",imageServicesSR:"Tiilitettyjen kuvakarttatasojen on oltava Web Mercator -projektiossa.",tilingSchemeGeneric:"Yhteensopimaton tiilirakenne.",websceneLocalSRGCS:"Maantieteellisten koordinaattien paikallisia Web-maisemia ei tueta.",
websceneLoadFailNoVersion:"Web-maiseman versiota ei l\u00f6ydy.",websceneLoadFail:"Web-maisemaa ei voi ladata.",websceneVersionMoreRecent:"Web-maisema (versio ${websceneVersion}) on uudempi kuin katseluohjelman versio {$viewerVersion}.",layerDisplaysWithItemSymbology:"Karttatasossa n\u00e4kyv\u00e4t kohteen symbolit.",websceneGlobalSR:"Yleisen Web-maiseman on oltava Web Mercator -projektiossa.",layerDisplaysWithFallbackSymbology:"Karttatasossa n\u00e4kyv\u00e4t varmuuskopion symbolit.",byReferenceRendererUnsupported:"Render\u00f6inti\u00e4 viitteen perusteella ei voitu luoda",
webscenePotentiallyUnsupported:"Osa Web-maiseman sis\u00e4ll\u00f6st\u00e4 ei ehk\u00e4 ole tuettu eik\u00e4 ehk\u00e4 n\u00e4y odotetulla tavalla.",selectedBasemapMismatchTitle:"Valittua taustakarttaa ei voi k\u00e4ytt\u00e4\u00e4",websceneLoadFailIncompatVersion:"Web-maiseman versio ${websceneVersion} ei ole yhteensopiva t\u00e4m\u00e4n katseluohjelman kanssa",sceneLayerSRGCS:"Paikalliset maisemat eiv\u00e4t tue maantieteellisten koordinaattij\u00e4rjestelmien maisemakarttatasoja."},buttons:{exitFullScreen:"Poistu koko n\u00e4yt\u00f6n tilasta",
fullScreen:"Koko n\u00e4ytt\u00f6",signIn:"Kirjaudu sis\u00e4\u00e4n",tryArcGIS:"Kokeile ArcGIS-palvelua",visitGallery:"K\u00e4y galleriassa"},_localized:{},appName:"3D-maisemien katseluohjelma"}});