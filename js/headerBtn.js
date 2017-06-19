/**
 * Created by px on 2017/5/26.
 * 头部点击事件
 */

/*
 * 购物车内容点击事件
 */
$(".header").on("click",".shopping",function () {
    var shopping = $(this),
        treasBrief = shopping.next();
    if(treasBrief.css("display") === "none"){
        shopping.css("background-position","-84px -435px");
        treasBrief.css("display","block");
    }else if(treasBrief.css("display") === "block"){
        shopping.css("background-position","-21px -434px");
        treasBrief.css("display","none");
    }
});
/*
 * 地区选择
 */
// 点击事件
$(".header").on("click",".select-custom",function () {
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
$(".header").on("mouseout",".select-custom",function () {
    var show = $(this),
        dl = show.children("dl");
    dl.css("transform","rotateX(-90deg)");
})
// 点击添加事件
$(".header").on("click",".select-custom-dl>dt",function () {
    event.stopPropagation();   //  阻止冒泡事件
    var dl = $('.select-custom-dl'),
        dataShow = $('.select-custom-show');
    var title = $(this).attr('title');
    dataShow.text(title);
    dl.css("transform","rotateX(-90deg)");
})
