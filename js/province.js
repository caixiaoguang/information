


// var myChart = echarts.init(document.getElementById('ranking'));



// var option = {
//     //     title: {
//     //     // text: '数据来自网络',
//     //     // subtext: '',


//     // },
//     title: {
//         text: '2018年各产区排名',
//         textStyle: {
//             color: '#5dc2fe',
//             fontSize: '16px'
//         },
//         bottom: '0'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         },

//     },
//     legend: {
//         //     orient: 'horizontal', // 'vertical'     

//         //     x: 'right', // 'center' | 'left' | {number},     

//         //     y: 'top', // 'center' | 'bottom' | {number}       

//         // //   backgroundColor: '#fff',        borderColor: 'rgba(178,34,34,0.8)',    

//         //     //  borderWidth: 4,     

//         //     margin: 20,    // [5, 10, 15, 20]     
//         //     data: ['2012年'],
//         //     textStyle: {
//         //         color: 'white'
//         //     },

//     },
//     grid: {
//         left: '1%',
//         right: '4%',
//         bottom: '1%',
//         containLabel: true,
//         height: chartH,
//         width: chartW
//     },
//     xAxis: {
//         show: false,
//         type: 'value',
//         boundaryGap: [0, 0.01]
//     },
//     yAxis: {
//         type: 'category',
//         data: ['第一产区', '第二产区', '第三产区',],
//         axisLabel: {
//             textStyle: {
//                 color: '#5dc2fe'
//             }
//         }
//     },
//     series: [

//         {
//             name: '2018年',
//             type: 'bar',
//             barWidth: 10,
//             data: [15, 20, 28],
//             itemStyle: {
//                 normal: {
//                     color: function (params) {
//                         var colorList = [
//                             '#5e7e54', '#e44f2f', '#81b6b2', '#eba422', '#5e7e54',
//                             '#e44f2f', '#81b6b2', '#eba422', '#5e7e54', '#e44f2f'
//                         ];
//                         return colorList[params.dataIndex]
//                     },

//                 }
//             },
//         }
//     ]
// };

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);


//出口比例饼状图
var outChart = echarts.init(document.getElementById('out'));
option = {
    title: {
        text: '各园区出口比例',
        x: 'center',
        textStyle: {
            color: '#5dc2fe'
        },
    },
    grid: {

    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['第一园区', '第二园区', '第三园区', '第四园区', '第五园区'],
        textStyle: {
            color: '#5dc2fe'
        }
    },
    series: [
        {
            name: '出口占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '第一园区' },
                { value: 310, name: '第二园区' },
                { value: 234, name: '第三园区' },
                { value: 135, name: '第四园区' },
                { value: 1548, name: '第五园区' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
outChart.setOption(option);

//各类型产量饼状图
var varirtyChartH = parseInt($('#variety-info .tab-content').css('height')) - 37;
console.log(varirtyChartH);

$('#variety-ranking').css('height', varirtyChartH)




var varirtyChart = echarts.init(document.getElementById('variety-ranking'));
option = {
    title: {
        text: '各类型产量比例',
        x: 'center',
        textStyle: {
            color: '#5dc2fe'
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['类型一', '类型二', '类型三', '类型四',],
        textStyle: {
            color: '#5dc2fe'
        }
    },
    series: [
        {
            name: '出口占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '类型一' },
                { value: 310, name: '类型二' },
                { value: 234, name: '类型三' },
                { value: 335, name: '类型四' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    ]
};
varirtyChart.setOption(option);



//近五年产量
var lastFiveChart = echarts.init(document.getElementById('last-five'));
// option = {
//     textStyle: {
//         color: '#5dc2fe'
//     },
//     title: {
//         text: '近五年销售量',
//         textStyle: {
//             color: '#5dc2fe'
//         },
//         x: 'center'
//     },
//     xAxis: {
//         type: 'category',
//         data: ['2013', '2014', '2015', '2016', '2017'],
//         axisLine: {
//             lineStyle: {
//                 color: '#5dc2fe',
//             }
//         }

//     },
//     yAxis: {
//         type: 'value',
//         axisLine: {
//             lineStyle: {
//                 color: '#5dc2fe',
//             }
//         },
//         splitLine: {
//             lineStyle: {
//                 color: '#5dc2fe'
//             }
//         }
//     },
//     series: [{
//         data: [820, 932, 901, 934, 1290],
//         type: 'line',
//     }],

// };

option = {
    textStyle: {
        color: '#5dc2fe'
    },
    title: {
        text: '近五年销售量',
        textStyle: {
            color: '#5dc2fe'
        },
        x: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['网络销售量', '实体销售量', '总销售量',],
        textStyle: {
            color: '#5dc2fe'
        },
        top: '28px'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2013', '2014', '2015', '2016', '2017',],
        axisLine: {
            lineStyle: {
                color: '#5dc2fe',
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#5dc2fe',
            }
        },
        splitLine: {
            lineStyle: {
                color: '#5dc2fe'
            }
        },
        min: 0,
        max: 800,
        interval: 100
    },
    series: [
        {
            name: '网络销售量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 100],
            itemStyle: {
                normal: {
                    color: 'red',
                    lineStyle: {
                        color: 'red'
                    }
                }
            }
        },
        {
            name: '实体销售量',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                normal: {
                    color: 'orange',
                    lineStyle: {
                        color: 'orange'
                    }
                }
            }
        },
        {
            name: '总销售量',
            type: 'line',
            stack: '总量',
            data: [340, 314, 292, 368, 380, 560, 410],
            itemStyle: {
                normal: {
                    color: '#00FF00',
                    lineStyle: {
                        color: '#00FF00'
                    }
                }
            }
        },
    ]
};

lastFiveChart.setOption(option);





//表格相关
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
        , { field: 'type', title: '类型', width: "24%" }
        , { field: 'area', title: '面积', width: "20%" }
        , { field: 'output', title: '产量(吨)', width: "23%" }
        , { field: 'price', title: '单价', width: "17%" }
    ]],
    data: varietyData
});







