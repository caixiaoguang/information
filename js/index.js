$(function () {
    var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
        maxZoom: 18,
        minZoom: 5
    });
    /**
     * 天地图内容
     */
    var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
        normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
            maxZoom: 18,
            minZoom: 5
        }),
        imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        }),
        imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 5
        });

    var normal = L.layerGroup([normalm, normala]),
        image = L.layerGroup([imgm, imga]);
    /**
     * 谷歌
     */
    var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
        satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        });
    /**
     * 高德地图
     */
    var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    var Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    var Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 5
    });
    var Gaodimage = L.layerGroup([Gaodimgem, Gaodimga]);



    var baseLayers = {
        "智图地图": normalm1,
        "智图多彩": normalm2,
        "智图午夜蓝": normalm3,
        "智图灰色": normalm4,
        "智图暖色": normalm5,
        "智图冷色": normalm6,
        "天地图": normal,
        "天地图影像": image,
        "谷歌地图": normalMap,
        "谷歌影像": satelliteMap,
        "高德地图": Gaode,
        "高德影像": Gaodimage,

    }

    var map = L.map("map", {
        center: [26.6029559085, 106.6751861572],
        zoom: 12,
        layers: [normalm3],
        zoomControl: false
    });

    L.control.layers(baseLayers, null).addTo(map);
    L.control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小'
    }).addTo(map);
})
