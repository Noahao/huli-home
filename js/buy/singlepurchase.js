/**
 * Created by HuoYu on 2017/5/24.
 */

/*
* 全局变量
* */

var Buy = {
    url: "../../jsondata/buy/goodsimg.json"
};
/*
* 窗口加载完成执行
* */
window.onload = function() {
    header();
    footer();
    halfCarousel();
    addAndSubstract();

};
/*
 * 头部加载
 */
function header() {
    $.get("../../jsondata/header.html",function (data) {
        $(".header").html(data);
        turnLoginUrl();//数据加载完成才能执行,跳转到登录界面
        deliverName();//传递用户名函数
        amendUrl();//修正导航栏地址
        turnLoginHref();
    });

}
/*
 * 尾部加载
 */
function footer() {
    $.get("../../jsondata/footer.html",function (data) {
        $(".footer").html(data);
    });
}

/*
* 左侧图片展示
* */
function halfCarousel() {
    $("<ul></ul>").appendTo($(".main-img")).attr("class", "pos-r main-img-ul");
    $("<ul></ul>").appendTo($(".sub-little-img")).attr("class", "clearFix sub-img-ul");
    $.getJSON(Buy.url, function (data) {
        $.each(data["goodsimg"], function (idx, ele) {
            $("<li></li>").appendTo($(".main-img>ul")).attr("class", "pos-a");
            $("<img>").appendTo($(".main-img>ul>li").eq(idx)).attr("src", ele);
            //底部小图片
            $("<li></li>").appendTo($(".sub-little-img>ul")).attr({"class": "fl-l"}).css({
                "border-radius": "5px",
                "overflow": "hidden"
            });
            $("<img>").appendTo($(".sub-little-img>ul>li").eq(idx)).attr("src", ele);
        });
        $(".main-img").children().children().children().eq(0).css("opacity", "1");
        $(".sub-img-ul").children().eq(0).css("border", "1px solid #00ccfe");
        // 给小图片添加点击事件，切换大图片
        $(".sub-img-ul").click(function (e) {
            var a = $(e.target).parent().index();//获取小图的序号
            $(e.target).parent().siblings().css("border", ""); //取消上一个的边框
            $(e.target).parent("li").css("border", "1px solid #00ccfe"); //加边框
            $(e.target).parent().parent().parent().siblings().children().children().children().css("opacity", "0");
            $(e.target).parent().parent().parent().siblings().children().children().eq(a).children().css("opacity", "1");
        });
    });
}

/*
* 加减购物数量
* */
function addAndSubstract() {
    //库存数量
    var inventtoryVal = $("#inventory").text();
    $(".ipt").change(function () {
        var iptVal = $(".ipt").val();
        inventtoryVal = Number(inventtoryVal);
        //input框的值
        if (Number(iptVal) > inventtoryVal) {
            $(".ipt").val(inventtoryVal);
        } else if (Number(iptVal) < 0) {
            $(".ipt").val(0);
        } else if (!/^[1-9]\d*$/.test(iptVal)) {
            $(".ipt").val(Number(iptVal));
        }// ^[1-9]\d*$ 非0正整数

    });
    $("#add-num").click(function () {
        //input框的值
        var iptVal = $(".ipt").val();
        if (iptVal < inventtoryVal) {
            var a = 1 + Number(iptVal);
            $(".ipt").val(a);
            $(this).css("cursor","pointer");
        }else if(iptVal == inventtoryVal){
            $(this).css("cursor","not-allowed");
        }
    });
    $("#subtract-num").click(function () {
        //input框的值
        var iptVal = $(".ipt").val();
        if (iptVal > 0) {
            var a = -1 + Number(iptVal);
            $(".ipt").val(a);
            $(this).css("cursor","pointer");

        }else if(iptVal == 0){
            $(this).css("cursor","not-allowed");
        }

    });

}


function turnLoginUrl() {
    $(".loginBtn").click(function () {
        if($(this).find("span").length === 0){
            window.location.href = "login.html?pagename=singlepurchase&";
        }else {
            window.location.href = "../../pages/ren/info.html";
        }
    });
}








