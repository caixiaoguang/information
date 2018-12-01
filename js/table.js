var table = layui.table;
var tableHeight = $('#planting-info').css('height');
console.log(tableHeight);


//执行渲染
table.render({
    elem: '#ranking' //指定原始表格元素选择器（推荐id选择器）
    , height: tableHeight //容器高度
    , cols: [{}] //设置表头
    //,…… //更多参数参考右侧目录：基本参数选项
});