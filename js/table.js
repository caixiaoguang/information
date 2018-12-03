var table = layui.table;
var tableHeight = parseInt($('#planting-info').css('height'));

//园区排名表格数据
var rankingData = [
    { ranking: 1, name: '第一园区', output: 1000, add: false },
    { ranking: 2, name: '第二园区', output: 965, add: true },
    { ranking: 3, name: '第三园区', output: 965, add: false },
    { ranking: 4, name: '第四园区', output: 965, add: true },
    { ranking: 5, name: '第五园区', output: 965, add: false },
    { ranking: 6, name: '第六园区', output: 965, add: true },
    { ranking: 7, name: '第七园区', output: 965, add: true },
    { ranking: 8, name: '第八园区', output: 965, add: false },
    { ranking: 9, name: '第九园区', output: 965, add: false },
    { ranking: 10, name: '第十园区', output: 965, add: true },
    { ranking: 11, name: '第二园区', output: 965, add: true },
    { ranking: 12, name: '第二园区', output: 965, add: true },
]

//处理表格数据
rankingData.forEach(item => {
    item['location'] = '<a><i class="glyphicon glyphicon-map-marker"></a>';
    if (item.add) {
        item['trend'] = '<i class="glyphicon glyphicon-arrow-up">'
    } else {
        item['trend'] = '<i class="glyphicon glyphicon-arrow-down">'
    }

})

table.render({
    elem: '#ranking'
    , height: tableHeight
    , even: true //开启隔行背景
    , size: 'sm' //小尺寸的表格
    , cols: [[ //表头
        { field: 'ranking', title: '排名', sort: true, fixed: 'left', width: "20%" }
        , { field: 'name', title: '园区', width: "26%" }
        , { field: 'output', title: '产量(吨)', width: "23%" }
        , { field: 'trend', title: '趋势', width: "17%" }
        , { field: 'location', title: '定位', width: "17%" }
    ]],
    data: rankingData
});


//品种情况表格数据
var varirtyChartH = parseInt($('#variety-info .tab-content').css('height')) - 37;

var varietyData = [
    { ranking: 1, type: '类型一', area: 1000, output: 500, price:10},
    { ranking: 2, type: '类型二', area: 965, output: 344, price:11},
    { ranking: 3, type: '类型三', area: 965, output: 222, price:5},
    { ranking: 4, type: '类型四', area: 965, output: 552, price:9},
    { ranking: 5, type: '类型五', area: 965, output: 500, price:8},
    { ranking: 6, type: '类型六', area: 965, output: 382, price:15},
    { ranking: 7, type: '类型七', area: 965, output: 830, price:14},
    { ranking: 8, type: '类型八', area: 965, output: 217, price:16},
    { ranking: 9, type: '类型九', area: 965, output: 500, price:10},
    { ranking: 10, type: '类型十', area: 965, output: 500, price:10},
    { ranking: 11, type: '类型一', area: 965, output: 500, price:10},
    { ranking: 12, type: '类型一', area: 965, output: 500, price:10},
    { ranking: 12, type: '类型一', area: 965, output: 500, price:10},
    { ranking: 12, type: '类型一', area: 965, output: 500, price:10},
    { ranking: 12, type: '类型一', area: 965, output: 500, price:10},
]



table.render({
    elem: '#variety'
    , height: varirtyChartH
    , even: true //开启隔行背景
    , size: 'sm' //小尺寸的表格
    , cols: [[ //表8
        { field: 'ranking', title: '排名', sort: true, fixed: 'left', width: "19%" }
        , { field: 'type', title: '类型', width: "25%" }
        , { field: 'area', title: '面积', width: "20%" }
        , { field: 'output', title: '产量(吨)', width: "23%" }
        , { field: 'price', title: '单价', width: "17%" }
    ]],
    data: varietyData
});
