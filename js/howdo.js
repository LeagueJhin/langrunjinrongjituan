/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-28 11:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \浪润金融集团\js\index.js
 */
const path = window.location.href;
let nav = $('.nav');
let lis = nav.children("a");
for (const iterator of lis) {
    if(path == iterator.href){
        $(iterator).addClass('activer');
    }
}    

$($('.banner')[0]).on('mousemove',function () {
    $($('.span')[0]).css('display','none');
    $($('.h2')[0]).css('color','#ffffff');
    $($('.font')[0]).css('backgroundImage','url(http://futures.longrun.com.hk/img/all2_ner_font_over.png)');
});
$($('.banner')[0]).on('mouseout',function () {
    $($('.span')[0]).css('display','inline');
    $($('.h2')[0]).css('color','#1ABFEF');
    $($('.font')[0]).css('backgroundImage','url(http://futures.longrun.com.hk/img/all2_ner_font.png)');
});
$($('.banner')[1]).on('mousemove',function () {
    $($('.span')[1]).css('display','none');
    $($('.h2')[1]).css('color','#ffffff');
    $($('.font')[1]).css('backgroundImage','url(http://futures.longrun.com.hk/img/all2_ner_font_over.png)');
});
$($('.banner')[1]).on('mouseout',function () {
    $($('.span')[1]).css('display','inline');
    $($('.h2')[1]).css('color','#1ABFEF');
    $($('.font')[1]).css('backgroundImage','url(http://futures.longrun.com.hk/img/all2_ner_font.png)');
});


let timer = setInterval("lb()",2000);
function lb() {
    clearInterval(timer);
    $('.contet').animate({"marginLeft":-230},1);
    $('.contet').animate({"marginLeft":0},1000);
    timer = setInterval("lb()",2000);
};

$('.zxdtleft').on('click',function () {
    $('.contet').animate({"marginLeft":0},1);
    $('.contet').animate({"marginLeft":230},1000);
});
$('.zxdtight').on('click',function () {
    $('.contet').animate({"marginLeft":-230},1);
    $('.contet').animate({"marginLeft":0},1000);
});
$('.zxdt2left').on('click',function () {
    $('.contet').animate({"marginLeft":230},1);
    $('.contet').animate({"marginLeft":0},1000);
});
$('.zxdt2right').on('click',function () {
    $('.contet').animate({"marginLeft":-230},1);
    $('.contet').animate({"marginLeft":0},1000);
});
$('.lbt').on('mouseover',function () {
    clearInterval(timer);
});
$('.lbt').on('mouseout',function () {
    timer = setInterval("lb()",2000);
});
