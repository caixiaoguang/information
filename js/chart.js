


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
            itemStyle : {
                normal : {
                    color:'red',
                    lineStyle:{
                        color:'red'
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
            itemStyle : {
                normal : {
                    color:'#00FF00',
                    lineStyle:{
                        color:'#00FF00'
                    }
                }
            }
        },
    ]
};

lastFiveChart.setOption(option);



