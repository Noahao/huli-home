/**
 * Created by px on 2017/5/24.
 * 主页js文件
 */

$(document).ready(function () {
    turnLoginHref();
    deliverName();
    spcar();
});



/*
 * 购物车内容点击事件
 */

$(".shopping").click(function () {
    var shopping = $(this),
        treasBrief = shopping.next();
    if(treasBrief.css("display") == "none"){
        shopping.css("background-position","-84px -435px");
        treasBrief.css("display","block");
    }else if(treasBrief.css("display") == "block"){
        shopping.css("background-position","-21px -434px");
        treasBrief.css("display","none");
    }
});



/*
 * 地区选择
 */

// 点击事件
$(".select-custom").click(function () {
    var show = $(this),
        dl = show.children("dl");
    dl.css("transform","rotateX(0deg)");
    dl.mouseover(function () {
        dl.css("transform","rotateX(0deg)");
    });
    dl.mouseout(function () {
        dl.css("transform","rotateX(-90deg)");
    })
})
// 鼠标离开事件
$(".select-custom").mouseout(function () {
    var show = $(this),
        dl = show.children("dl");
    dl.css("transform","rotateX(-90deg)");
})
// 点击添加事件
$(".select-custom-dl>dt").click(function () {
    event.stopPropagation();   //  阻止冒泡事件
    var dl = $('.select-custom-dl'),
        dataShow = $('.select-custom-show');
    var title = $(this).attr('title');
    dataShow.text(title);
    dl.css("transform","rotateX(-90deg)");
})



/*
 * 轮播图
 */
var slideList = $(".slideList"),
    imageList = slideList.children("img"),
    imageList_leng = imageList.length;

var slideList_point = slideList.next()
for(var i = 0; i < imageList_leng; i ++) {
    slideList_point.append("<i></i>")
}
// 默认设置值
imageList.first().addClass('show');
slideList_point.children().first().addClass("ckd");   // 默认设置一个
// 执行轮播图
var imgSlideTimer = setInterval(function() {
    runImgSlide();
},6000);
// 控制点切换图片
slideList_point.children().click(function() {
    var thisIdx = $(this).index();
    $(this).addClass("ckd").siblings().removeAttr("class");
    imageList.eq(thisIdx).addClass("show").siblings().removeAttr("class");
    clearInterval(imgSlideTimer);
    imgSlideTimer = setInterval(function() {
        runImgSlide();
    },6000);
});
// 图片轮播的函数
function runImgSlide() {
    // 当前索引
    var showImage = $(".slideList > img.show"),
        showImage_idx = showImage.index();
    // 创建1~4之间的随机数
    var randomNum = Math.round(Math.random() * 3 + 1);
    if(showImage_idx != imageList_leng - 1) {
        showImage.removeAttr("class").next().addClass("show enlarge-" + randomNum);
        slideList_point.children().eq(showImage_idx + 1).addClass("ckd").siblings().removeAttr("class");
    } else {
        showImage.removeAttr("class");
        imageList.eq(0).addClass("show enlarge-" + randomNum);
        slideList_point.children().eq(0).addClass("ckd").siblings().removeAttr("class");
    }
}



