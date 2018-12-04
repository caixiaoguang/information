var statusChartH = $('.xpanel-wrapper-3:nth-child(1) .xpanel').css('height')
statusChartH=parseInt(statusChartH)-50;

$('#status').css('height',statusChartH)




//设备运行状态j
var statusChart = echarts.init(document.getElementById('status'));

// 各状态的颜色
var colors = ['#2f4554', '#61a0a8', '#d48265', '#c23531'];

// 四种状态
var state = ['正常', '繁忙', '故障', '离线'];

// echart配置
var opt = {
    color: colors,
    tooltip: {
        formatter: function (params) {
            return params.name + ':' + params.value[1] + '~' + params.value[2];
        }
    },
    legend: {
        data: state,
        bottom: '1%',
        selectedMode: false, // 图例设为不可点击
        textStyle: {
            color: '#5dc2fe'
        },
    },
    grid: {
        left: '3%',
        right: '3%',
        top: '1%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        min: 0 ,// x轴零刻度对应的实际值,
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
        splitLine: {
            lineStyle: {
                color: '#5dc2fe'
            }
        },
    

    },
    yAxis: {
        data: ['设备一', '设备二'],
        axisLine: {
            lineStyle: {
                color: '#5dc2fe',
            }
        },
    },
    series: [
        // 用空bar来显示四个图例
        { name: state[0], type: 'bar', data: [] },
        { name: state[1], type: 'bar', data: [] },
        { name: state[2], type: 'bar', data: [] },
        { name: state[3], type: 'bar', data: [] },
        {
            type: 'custom',
            renderItem: function (params, api) {
                var categoryIndex = api.value(0);
                var start = api.coord([api.value(1), categoryIndex]);
                var end = api.coord([api.value(2), categoryIndex]);
                var height = 24;

                return {
                    type: 'rect',
                    shape: echarts.graphic.clipRectByRect({
                        x: start[0],
                        y: start[1] - height / 2,
                        width: end[0] - start[0],
                        height: height
                    }, {
                            x: params.coordSys.x,
                            y: params.coordSys.y,
                            width: params.coordSys.width,
                            height: params.coordSys.height
                        }),
                    style: api.style()
                };
            },
            encode: {
                x: [1, 2],
                y: 0
            },
            data: [
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '正常',
                    value: [0, 0, 10]
                },
                {
                    itemStyle: { normal: { color: colors[1] } },
                    name: '繁忙',
                    value: [0, 10, 25]
                },
                {
                    itemStyle: { normal: { color: colors[2] } },
                    name: '故障',
                    value: [0, 25, 45]
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '离线',
                    value: [0, 45, 60]
                },
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '正常',
                    value: [1, 0, 15]
                },
                {
                    itemStyle: { normal: { color: colors[1] } },
                    name: '繁忙',
                    value: [1, 15, 20]
                },
                {
                    itemStyle: { normal: { color: colors[2] } },
                    name: '故障',
                    value: [1, 20, 35]
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '离线',
                    value: [1, 35, 40]
                },
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '正常',
                    value: [1, 40, 45]
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '离线',
                    value: [1, 45, 60]
                }
            ]
        }
    ]
};
statusChart.setOption(opt);