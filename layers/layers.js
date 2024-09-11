var wms_layers = [];

var format_Mare_0 = new ol.format.GeoJSON();
var features_Mare_0 = format_Mare_0.readFeatures(json_Mare_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mare_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mare_0.addFeatures(features_Mare_0);
var lyr_Mare_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mare_0, 
                style: style_Mare_0,
                popuplayertitle: "Mare",
                interactive: false,
                title: '<img src="styles/legend/Mare_0.png" /> Mare'
            });
var format_T50_mare_latmingue_1 = new ol.format.GeoJSON();
var features_T50_mare_latmingue_1 = format_T50_mare_latmingue_1.readFeatures(json_T50_mare_latmingue_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T50_mare_latmingue_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T50_mare_latmingue_1.addFeatures(features_T50_mare_latmingue_1);
var lyr_T50_mare_latmingue_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T50_mare_latmingue_1, 
                style: style_T50_mare_latmingue_1,
                popuplayertitle: "T50_mare_latmingue",
                interactive: false,
                title: '<img src="styles/legend/T50_mare_latmingue_1.png" /> T50_mare_latmingue'
            });
var format_Piste_de_btail_2 = new ol.format.GeoJSON();
var features_Piste_de_btail_2 = format_Piste_de_btail_2.readFeatures(json_Piste_de_btail_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piste_de_btail_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piste_de_btail_2.addFeatures(features_Piste_de_btail_2);
var lyr_Piste_de_btail_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piste_de_btail_2, 
                style: style_Piste_de_btail_2,
                popuplayertitle: "Piste_de_bétail",
                interactive: false,
                title: '<img src="styles/legend/Piste_de_btail_2.png" /> Piste_de_bétail'
            });
var format_T100_Piste_betails_latmingue_3 = new ol.format.GeoJSON();
var features_T100_Piste_betails_latmingue_3 = format_T100_Piste_betails_latmingue_3.readFeatures(json_T100_Piste_betails_latmingue_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_Piste_betails_latmingue_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_Piste_betails_latmingue_3.addFeatures(features_T100_Piste_betails_latmingue_3);
var lyr_T100_Piste_betails_latmingue_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_Piste_betails_latmingue_3, 
                style: style_T100_Piste_betails_latmingue_3,
                popuplayertitle: "T100_Piste_betails_latmingue",
                interactive: false,
                title: '<img src="styles/legend/T100_Piste_betails_latmingue_3.png" /> T100_Piste_betails_latmingue'
            });
var format_Piste_de_production_4 = new ol.format.GeoJSON();
var features_Piste_de_production_4 = format_Piste_de_production_4.readFeatures(json_Piste_de_production_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piste_de_production_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piste_de_production_4.addFeatures(features_Piste_de_production_4);
var lyr_Piste_de_production_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piste_de_production_4, 
                style: style_Piste_de_production_4,
                popuplayertitle: "Piste_de_production",
                interactive: false,
                title: '<img src="styles/legend/Piste_de_production_4.png" /> Piste_de_production'
            });
var format_Zone_Habitation_ZH_5 = new ol.format.GeoJSON();
var features_Zone_Habitation_ZH_5 = format_Zone_Habitation_ZH_5.readFeatures(json_Zone_Habitation_ZH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_Habitation_ZH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_Habitation_ZH_5.addFeatures(features_Zone_Habitation_ZH_5);
var lyr_Zone_Habitation_ZH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_Habitation_ZH_5, 
                style: style_Zone_Habitation_ZH_5,
                popuplayertitle: "Zone_Habitation_ZH",
                interactive: false,
                title: '<img src="styles/legend/Zone_Habitation_ZH_5.png" /> Zone_Habitation_ZH'
            });
var format_Zone_pastorale_ZP_6 = new ol.format.GeoJSON();
var features_Zone_pastorale_ZP_6 = format_Zone_pastorale_ZP_6.readFeatures(json_Zone_pastorale_ZP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_pastorale_ZP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_pastorale_ZP_6.addFeatures(features_Zone_pastorale_ZP_6);
var lyr_Zone_pastorale_ZP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_pastorale_ZP_6, 
                style: style_Zone_pastorale_ZP_6,
                popuplayertitle: "Zone_pastorale_ZP",
                interactive: false,
                title: '<img src="styles/legend/Zone_pastorale_ZP_6.png" /> Zone_pastorale_ZP'
            });
var format_ZMD__Zone_de_mise_en_dfens__7 = new ol.format.GeoJSON();
var features_ZMD__Zone_de_mise_en_dfens__7 = format_ZMD__Zone_de_mise_en_dfens__7.readFeatures(json_ZMD__Zone_de_mise_en_dfens__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMD__Zone_de_mise_en_dfens__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMD__Zone_de_mise_en_dfens__7.addFeatures(features_ZMD__Zone_de_mise_en_dfens__7);
var lyr_ZMD__Zone_de_mise_en_dfens__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMD__Zone_de_mise_en_dfens__7, 
                style: style_ZMD__Zone_de_mise_en_dfens__7,
                popuplayertitle: "ZMD__Zone_de_mise_en_défens_",
                interactive: false,
                title: '<img src="styles/legend/ZMD__Zone_de_mise_en_dfens__7.png" /> ZMD__Zone_de_mise_en_défens_'
            });
var format_Zone_agro_pastorale_sans_priorit_ZAP_8 = new ol.format.GeoJSON();
var features_Zone_agro_pastorale_sans_priorit_ZAP_8 = format_Zone_agro_pastorale_sans_priorit_ZAP_8.readFeatures(json_Zone_agro_pastorale_sans_priorit_ZAP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_agro_pastorale_sans_priorit_ZAP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_agro_pastorale_sans_priorit_ZAP_8.addFeatures(features_Zone_agro_pastorale_sans_priorit_ZAP_8);
var lyr_Zone_agro_pastorale_sans_priorit_ZAP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_agro_pastorale_sans_priorit_ZAP_8, 
                style: style_Zone_agro_pastorale_sans_priorit_ZAP_8,
                popuplayertitle: "Zone_agro_pastorale_sans_priorité_ZAP",
                interactive: false,
                title: '<img src="styles/legend/Zone_agro_pastorale_sans_priorit_ZAP_8.png" /> Zone_agro_pastorale_sans_priorité_ZAP'
            });
var format_zonage_9 = new ol.format.GeoJSON();
var features_zonage_9 = format_zonage_9.readFeatures(json_zonage_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonage_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonage_9.addFeatures(features_zonage_9);
var lyr_zonage_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonage_9, 
                style: style_zonage_9,
                popuplayertitle: "zonage",
                interactive: false,
                title: '<img src="styles/legend/zonage_9.png" /> zonage'
            });
var format_T100_RouteNat_latmingue_10 = new ol.format.GeoJSON();
var features_T100_RouteNat_latmingue_10 = format_T100_RouteNat_latmingue_10.readFeatures(json_T100_RouteNat_latmingue_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_RouteNat_latmingue_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_RouteNat_latmingue_10.addFeatures(features_T100_RouteNat_latmingue_10);
var lyr_T100_RouteNat_latmingue_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_RouteNat_latmingue_10, 
                style: style_T100_RouteNat_latmingue_10,
                popuplayertitle: "T100_RouteNat_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T100_RouteNat_latmingue_10.png" /> T100_RouteNat_latmingue'
            });
var format_T100_RouteReg_latmingue_11 = new ol.format.GeoJSON();
var features_T100_RouteReg_latmingue_11 = format_T100_RouteReg_latmingue_11.readFeatures(json_T100_RouteReg_latmingue_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_RouteReg_latmingue_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_RouteReg_latmingue_11.addFeatures(features_T100_RouteReg_latmingue_11);
var lyr_T100_RouteReg_latmingue_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_RouteReg_latmingue_11, 
                style: style_T100_RouteReg_latmingue_11,
                popuplayertitle: "T100_RouteReg_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T100_RouteReg_latmingue_11.png" /> T100_RouteReg_latmingue'
            });
var format_T40_RouteDep_latmingue_12 = new ol.format.GeoJSON();
var features_T40_RouteDep_latmingue_12 = format_T40_RouteDep_latmingue_12.readFeatures(json_T40_RouteDep_latmingue_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T40_RouteDep_latmingue_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T40_RouteDep_latmingue_12.addFeatures(features_T40_RouteDep_latmingue_12);
var lyr_T40_RouteDep_latmingue_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T40_RouteDep_latmingue_12, 
                style: style_T40_RouteDep_latmingue_12,
                popuplayertitle: "T40_RouteDep_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T40_RouteDep_latmingue_12.png" /> T40_RouteDep_latmingue'
            });
var format_Fort_classe_13 = new ol.format.GeoJSON();
var features_Fort_classe_13 = format_Fort_classe_13.readFeatures(json_Fort_classe_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fort_classe_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fort_classe_13.addFeatures(features_Fort_classe_13);
var lyr_Fort_classe_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fort_classe_13, 
                style: style_Fort_classe_13,
                popuplayertitle: "Forêt_classée",
                interactive: false,
                title: '<img src="styles/legend/Fort_classe_13.png" /> Forêt_classée'
            });
var format_T100_eau_latmingue_14 = new ol.format.GeoJSON();
var features_T100_eau_latmingue_14 = format_T100_eau_latmingue_14.readFeatures(json_T100_eau_latmingue_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_eau_latmingue_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_eau_latmingue_14.addFeatures(features_T100_eau_latmingue_14);
var lyr_T100_eau_latmingue_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_eau_latmingue_14, 
                style: style_T100_eau_latmingue_14,
                popuplayertitle: "T100_eau_latmingue",
                interactive: false,
                title: '<img src="styles/legend/T100_eau_latmingue_14.png" /> T100_eau_latmingue'
            });
var format_EAU_15 = new ol.format.GeoJSON();
var features_EAU_15 = format_EAU_15.readFeatures(json_EAU_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAU_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EAU_15.addFeatures(features_EAU_15);
var lyr_EAU_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EAU_15, 
                style: style_EAU_15,
                popuplayertitle: "EAU",
                interactive: false,
                title: '<img src="styles/legend/EAU_15.png" /> EAU'
            });
var format_Carrire_16 = new ol.format.GeoJSON();
var features_Carrire_16 = format_Carrire_16.readFeatures(json_Carrire_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrire_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carrire_16.addFeatures(features_Carrire_16);
var lyr_Carrire_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carrire_16, 
                style: style_Carrire_16,
                popuplayertitle: "Carriére",
                interactive: false,
                title: '<img src="styles/legend/Carrire_16.png" /> Carriére'
            });
var format_Rseau_Routier_17 = new ol.format.GeoJSON();
var features_Rseau_Routier_17 = format_Rseau_Routier_17.readFeatures(json_Rseau_Routier_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseau_Routier_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseau_Routier_17.addFeatures(features_Rseau_Routier_17);
var lyr_Rseau_Routier_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseau_Routier_17, 
                style: style_Rseau_Routier_17,
                popuplayertitle: "Réseau_Routier",
                interactive: false,
    title: 'Réseau_Routier<br />\
    <img src="styles/legend/Rseau_Routier_17_0.png" /> Piste<br />\
    <img src="styles/legend/Rseau_Routier_17_1.png" /> Route départementale<br />\
    <img src="styles/legend/Rseau_Routier_17_2.png" /> Route nationale bitumée<br />\
    <img src="styles/legend/Rseau_Routier_17_3.png" /> Route régionale<br />'
        });
var format_TF_latmingue_18 = new ol.format.GeoJSON();
var features_TF_latmingue_18 = format_TF_latmingue_18.readFeatures(json_TF_latmingue_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TF_latmingue_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TF_latmingue_18.addFeatures(features_TF_latmingue_18);
var lyr_TF_latmingue_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TF_latmingue_18, 
                style: style_TF_latmingue_18,
                popuplayertitle: "TF_latmingue",
                interactive: false,
                title: '<img src="styles/legend/TF_latmingue_18.png" /> TF_latmingue'
            });
var format_INFRASTRUCTURES_19 = new ol.format.GeoJSON();
var features_INFRASTRUCTURES_19 = format_INFRASTRUCTURES_19.readFeatures(json_INFRASTRUCTURES_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUCTURES_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUCTURES_19.addFeatures(features_INFRASTRUCTURES_19);
var lyr_INFRASTRUCTURES_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUCTURES_19,
maxResolution:14.00223307613098,
 
                style: style_INFRASTRUCTURES_19,
                popuplayertitle: "INFRASTRUCTURES",
                interactive: false,
                title: '<img src="styles/legend/INFRASTRUCTURES_19.png" /> INFRASTRUCTURES'
            });
var format_Localit_20 = new ol.format.GeoJSON();
var features_Localit_20 = format_Localit_20.readFeatures(json_Localit_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_20.addFeatures(features_Localit_20);
var lyr_Localit_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_20, 
                style: style_Localit_20,
                popuplayertitle: "Localité",
                interactive: false,
                title: '<img src="styles/legend/Localit_20.png" /> Localité'
            });
var group_LATMINGUE = new ol.layer.Group({
                                layers: [lyr_INFRASTRUCTURES_19,lyr_Localit_20,],
                                fold: "open",
                                title: "LATMINGUE"});
var group_Statutdesterres = new ol.layer.Group({
                                layers: [lyr_Fort_classe_13,lyr_T100_eau_latmingue_14,lyr_EAU_15,lyr_Carrire_16,lyr_Rseau_Routier_17,lyr_TF_latmingue_18,],
                                fold: "open",
                                title: "Statut des terres"});
var group_Emprisereseauroutier = new ol.layer.Group({
                                layers: [lyr_T100_RouteNat_latmingue_10,lyr_T100_RouteReg_latmingue_11,lyr_T40_RouteDep_latmingue_12,],
                                fold: "open",
                                title: "Emprise reseau routier"});
var group_POAS = new ol.layer.Group({
                                layers: [lyr_Mare_0,lyr_T50_mare_latmingue_1,lyr_Piste_de_btail_2,lyr_T100_Piste_betails_latmingue_3,lyr_Piste_de_production_4,lyr_Zone_Habitation_ZH_5,lyr_Zone_pastorale_ZP_6,lyr_ZMD__Zone_de_mise_en_dfens__7,lyr_Zone_agro_pastorale_sans_priorit_ZAP_8,lyr_zonage_9,],
                                fold: "open",
                                title: "POAS"});

lyr_Mare_0.setVisible(true);lyr_T50_mare_latmingue_1.setVisible(true);lyr_Piste_de_btail_2.setVisible(true);lyr_T100_Piste_betails_latmingue_3.setVisible(true);lyr_Piste_de_production_4.setVisible(true);lyr_Zone_Habitation_ZH_5.setVisible(true);lyr_Zone_pastorale_ZP_6.setVisible(true);lyr_ZMD__Zone_de_mise_en_dfens__7.setVisible(true);lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.setVisible(true);lyr_zonage_9.setVisible(true);lyr_T100_RouteNat_latmingue_10.setVisible(true);lyr_T100_RouteReg_latmingue_11.setVisible(true);lyr_T40_RouteDep_latmingue_12.setVisible(true);lyr_Fort_classe_13.setVisible(true);lyr_T100_eau_latmingue_14.setVisible(true);lyr_EAU_15.setVisible(true);lyr_Carrire_16.setVisible(true);lyr_Rseau_Routier_17.setVisible(true);lyr_TF_latmingue_18.setVisible(true);lyr_INFRASTRUCTURES_19.setVisible(true);lyr_Localit_20.setVisible(true);
var layersList = [group_POAS,group_Emprisereseauroutier,group_Statutdesterres,group_LATMINGUE];
lyr_Mare_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid': 'objectid', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'nom_mare': 'nom_mare', 'zonage': 'zonage', 'commune': 'commune', });
lyr_T50_mare_latmingue_1.set('fieldAliases', {'objectid': 'objectid', 'objectid_1': 'objectid_1', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'nom_mare': 'nom_mare', 'zonage': 'zonage', 'commune': 'commune', });
lyr_Piste_de_btail_2.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'descriptif': 'descriptif', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', });
lyr_T100_Piste_betails_latmingue_3.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'descriptif': 'descriptif', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', });
lyr_Piste_de_production_4.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'descriptif': 'descriptif', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', });
lyr_Zone_Habitation_ZH_5.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'descriptif': 'descriptif', });
lyr_Zone_pastorale_ZP_6.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'localisati': 'localisati', 'descriptif': 'descriptif', });
lyr_ZMD__Zone_de_mise_en_dfens__7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid': 'objectid', 'id': 'id', 'surface': 'surface', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'zonage': 'zonage', 'type': 'type', });
lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'descriptif': 'descriptif', });
lyr_zonage_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'zonage': 'zonage', });
lyr_T100_RouteNat_latmingue_10.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_T100_RouteReg_latmingue_11.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_T40_RouteDep_latmingue_12.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_Fort_classe_13.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'nom': 'nom', 'surface': 'surface', 'descriptif': 'descriptif', });
lyr_T100_eau_latmingue_14.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'surface_ha': 'surface_ha', });
lyr_EAU_15.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'surface_ha': 'surface_ha', });
lyr_Carrire_16.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'localisati': 'localisati', 'type': 'type', });
lyr_Rseau_Routier_17.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_TF_latmingue_18.set('fieldAliases', {'id': 'id', 'nomination': 'nomination', 'tf': 'tf', 'commune': 'commune', 'surface': 'surface', });
lyr_INFRASTRUCTURES_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'id': 'id', 'toponymie': 'toponymie', 'descriptif': 'descriptif', 'reg': 'reg', 'dept': 'dept', 'cav': 'cav', 'ccrca': 'ccrca', 'thematique': 'thematique', 'qrt_vlg_ha': 'qrt_vlg_ha', 'long_': 'long_', 'lat': 'lat', 'annee_ref': 'annee_ref', 'annee_maj': 'annee_maj', 'operation': 'operation', 'cod_reg': 'cod_reg', 'cod_dept': 'cod_dept', 'cod_cav': 'cod_cav', 'cod_ccrca': 'cod_ccrca', });
lyr_Localit_20.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'code': 'code', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'localite': 'localite', 'type': 'type', });
lyr_Mare_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'nom_mare': 'TextEdit', 'zonage': 'TextEdit', 'commune': 'TextEdit', });
lyr_T50_mare_latmingue_1.set('fieldImages', {'objectid': 'TextEdit', 'objectid_1': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'nom_mare': 'TextEdit', 'zonage': 'TextEdit', 'commune': 'TextEdit', });
lyr_Piste_de_btail_2.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'descriptif': 'TextEdit', 'shape_leng': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', });
lyr_T100_Piste_betails_latmingue_3.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'descriptif': 'TextEdit', 'shape_leng': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', });
lyr_Piste_de_production_4.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'descriptif': 'TextEdit', 'shape_leng': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', });
lyr_Zone_Habitation_ZH_5.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_Zone_pastorale_ZP_6.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'localisati': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_ZMD__Zone_de_mise_en_dfens__7.set('fieldImages', {'OBJECTID': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'surface': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'zonage': 'TextEdit', 'type': 'TextEdit', });
lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_zonage_9.set('fieldImages', {'OBJECTID': 'Range', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'zonage': 'TextEdit', });
lyr_T100_RouteNat_latmingue_10.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_T100_RouteReg_latmingue_11.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_T40_RouteDep_latmingue_12.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_Fort_classe_13.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'nom': 'TextEdit', 'surface': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_T100_eau_latmingue_14.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'surface_ha': 'TextEdit', });
lyr_EAU_15.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'surface_ha': 'TextEdit', });
lyr_Carrire_16.set('fieldImages', {'objectid': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'localisati': 'TextEdit', 'type': 'TextEdit', });
lyr_Rseau_Routier_17.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_TF_latmingue_18.set('fieldImages', {'id': 'TextEdit', 'nomination': 'TextEdit', 'tf': 'TextEdit', 'commune': 'TextEdit', 'surface': 'TextEdit', });
lyr_INFRASTRUCTURES_19.set('fieldImages', {'OBJECTID': 'Range', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'toponymie': 'TextEdit', 'descriptif': 'TextEdit', 'reg': 'TextEdit', 'dept': 'TextEdit', 'cav': 'TextEdit', 'ccrca': 'TextEdit', 'thematique': 'TextEdit', 'qrt_vlg_ha': 'TextEdit', 'long_': 'TextEdit', 'lat': 'TextEdit', 'annee_ref': 'TextEdit', 'annee_maj': 'TextEdit', 'operation': 'TextEdit', 'cod_reg': 'TextEdit', 'cod_dept': 'TextEdit', 'cod_cav': 'TextEdit', 'cod_ccrca': 'TextEdit', });
lyr_Localit_20.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'localite': 'TextEdit', 'type': 'TextEdit', });
lyr_Mare_0.set('fieldLabels', {'OBJECTID': 'no label', 'objectid': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'nom_mare': 'no label', 'zonage': 'no label', 'commune': 'no label', });
lyr_T50_mare_latmingue_1.set('fieldLabels', {'objectid': 'no label', 'objectid_1': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'nom_mare': 'no label', 'zonage': 'no label', 'commune': 'no label', });
lyr_Piste_de_btail_2.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'descriptif': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', });
lyr_T100_Piste_betails_latmingue_3.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'descriptif': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', });
lyr_Piste_de_production_4.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'descriptif': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', });
lyr_Zone_Habitation_ZH_5.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'descriptif': 'no label', });
lyr_Zone_pastorale_ZP_6.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'localisati': 'no label', 'descriptif': 'no label', });
lyr_ZMD__Zone_de_mise_en_dfens__7.set('fieldLabels', {'OBJECTID': 'no label', 'objectid': 'no label', 'id': 'no label', 'surface': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'zonage': 'no label', 'type': 'no label', });
lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'descriptif': 'no label', });
lyr_zonage_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'objectid_1': 'hidden field', 'objectid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'arrondisse': 'hidden field', 'commune': 'hidden field', 'zonage': 'header label - visible with data', });
lyr_T100_RouteNat_latmingue_10.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_T100_RouteReg_latmingue_11.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_T40_RouteDep_latmingue_12.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_Fort_classe_13.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'nom': 'no label', 'surface': 'no label', 'descriptif': 'no label', });
lyr_T100_eau_latmingue_14.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'surface_ha': 'no label', });
lyr_EAU_15.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'surface_ha': 'no label', });
lyr_Carrire_16.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'localisati': 'no label', 'type': 'no label', });
lyr_Rseau_Routier_17.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_TF_latmingue_18.set('fieldLabels', {'id': 'no label', 'nomination': 'no label', 'tf': 'no label', 'commune': 'no label', 'surface': 'no label', });
lyr_INFRASTRUCTURES_19.set('fieldLabels', {'OBJECTID': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'id': 'no label', 'toponymie': 'no label', 'descriptif': 'no label', 'reg': 'no label', 'dept': 'no label', 'cav': 'no label', 'ccrca': 'no label', 'thematique': 'no label', 'qrt_vlg_ha': 'no label', 'long_': 'no label', 'lat': 'no label', 'annee_ref': 'no label', 'annee_maj': 'no label', 'operation': 'no label', 'cod_reg': 'no label', 'cod_dept': 'no label', 'cod_cav': 'no label', 'cod_ccrca': 'no label', });
lyr_Localit_20.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'code': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'localite': 'no label', 'type': 'no label', });
lyr_Localit_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});