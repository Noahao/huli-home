/**
 * Created by HuoYu on 2017/5/25.
 */


/*
 * 点击登录按钮跳转--登录
 * */
function turnLoginHref() {

    $(".loginBtn").click(function () {
        var url = window.location.href;
        var c = url.lastIndexOf("/") + 1;
        var b = url.lastIndexOf(".");
        var urlPage = url.slice(c, b);

        if ($(".loginBtn").find("span").length === 0) {
            if (urlPage == "sofas") {
                window.location.href = "../buy/login.html?pagename="+ urlPage+"&";
            }else if(urlPage == "beds") {
                window.location.href = "../buy/login.html?pagename="+ urlPage+"&";
            }else if(urlPage == "more") {
                window.location.href = "../buy/login.html?pagename="+ urlPage+"&";
            }else if(urlPage == "storage") {
                window.location.href = "../buy/login.html?pagename="+ urlPage+"&";
            }else if(urlPage == "tableschairs") {
                window.location.href = "../buy/login.html?pagename="+ urlPage+"&";
            }else if(urlPage == "couple"){
                window.location.href = "../buy/login.html?pagename="+ urlPage+"&";
            }
            else if(urlPage == "singlepurchase"){
                window.location.href = "login.html?pagename="+ urlPage+"&";
            }else {
                window.location.href = "pages/buy/login.html?pagename=index&";
            }
        } else if(urlPage == "index"){
            window.location.href = "pages/ren/info.html";
        }else {
            window.location.href = "../../pages/ren/info.html";
        }
    });

}
function spcar() {
    var isLogin = Boolean(sessionStorage.getItem("loginState"));
    if (isLogin){
        $(".treas-brief-btn a").attr("href","pages/ren/shoppingcar.html");
    }
}
/*
 * 点击跳转 -- single purchase 页面
 * */
function turnSinglePurchaseHref() {
    $(".sofa_li").click(function () {
        window.location.href = "../buy/singlepurchase.html";
    });
}
/*
 * 点击跳转 -- 组合购买 页面
 * */
function goCouplePage() {
    $(".choose >a:nth-child(2)").click(function () {
        window.location.href = "../ren/couple.html";
    });
}
/*
 * 页面传值，传用户名  url("../images/sprites.png") no-repeat
 * */

function deliverName() {
    //将账号名传过来
    var isLogin = Boolean(sessionStorage.getItem("loginState"));
    if (!isLogin) {
        $(".loginBtn").css("background", "url('../images/sprites.png') no-repeat)");
    }
    //如果有用户名，则直接使用
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));//在localStorage中查找有没有这个字符串
    $.each(userInfo, function (idx, data) {
        if (data.username === sessionStorage.getItem("userAccount")) {//如果用户名存在相等，则将背景替换成用户名
            $(".loginBtn").css("background", "transparent").append("<span>" + data.username + "</span>");
            $(".loginBtn span").css({
                "position": "absolute",
                "top": "-2px",
                "color": "black",
                "font": "bold 16px '等线'",
                "line-height": "74px",
            });
        }
    });
}

/*
 * created by HUOYU
 * 截取用户名字符串
 * */
function locSearchVal(searchStr) {
    if (searchStr.length === 0) {
        return null;
    } else {
        var str = searchStr.slice(1);
        var strArr = str.split("&");
        var obj = {};
        $.each(strArr, function (idx, data) {
            var arr1 = data.split("=");
            var key = arr1[0];
            var val = arr1[1];
            obj[key] = val;
        })
        return obj;
    }
}
/*
 * 购物车内容点击事件
 */

$(".header").on("click", ".shopping", function () {
    var shopping = $(this),
        treasBrief = shopping.next();
    if (treasBrief.css("display") == "none") {
        shopping.css("background-position", "-84px -435px");
        treasBrief.css("display", "block");
    } else if (treasBrief.css("display") == "block") {
        shopping.css("background-position", "-21px -434px");
        treasBrief.css("display", "none");
    }
});


/*
 * 购物车内容点击事件
 */

$(".header").on("click", ".shopping", function () {
    var shopping = $(this),
        treasBrief = shopping.next();
    if (treasBrief.css("display") == "none") {
        shopping.css("background-position", "-84px -435px");
        treasBrief.css("display", "block");
    } else if (treasBrief.css("display") == "block") {
        shopping.css("background-position", "-21px -434px");
        treasBrief.css("display", "none");
    }
});


/*
 * 地区选择
 */

// 点击事件
$(".header").on("click", ".select-custom", function () {
    var show = $(this),
        dl = show.children("dl");
    dl.css("transform", "rotateX(0deg)");
    dl.mouseover(function () {
        dl.css("transform", "rotateX(0deg)");
    });
    dl.mouseout(function () {
        dl.css("transform", "rotateX(-90deg)");
    })
})
// 鼠标离开事件
$(".header").on("mouseout", ".select-custom", function () {
    var show = $(this),
        dl = show.children("dl");
    dl.css("transform", "rotateX(-90deg)");
})
// 点击添加事件
$(".header").on("click", ".select-custom-dl>dt", function () {
    event.stopPropagation();   //  阻止冒泡事件
    var dl = $('.select-custom-dl'),
        dataShow = $('.select-custom-show');
    var title = $(this).attr('title');
    dataShow.text(title);
    dl.css("transform", "rotateX(-90deg)");
})


function amendUrl() {
    $(".nav-box ul li").eq(0).children().eq(0).attr("href","../navPages/sofas.html");
    $(".nav-box ul li").eq(1).children().eq(0).attr("href","../navPages/tableschairs.html");
    $(".nav-box ul li").eq(2).children().eq(0).attr("href","../navPages/beds.html");
    $(".nav-box ul li").eq(3).children().eq(0).attr("href","../navPages/storage.html");
    $(".nav-box ul li").eq(4).children().eq(0).attr("href","../navPages/more.html");
}