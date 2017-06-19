/**
 * Created by PX on 2017/5/24.
 */
/*
全局变量
 */

//记录索引
var index = 0;
//记录状态
var status;

/************************
 *  页面加载后调用函数  *
 ***********************/
$(function () {
    change();
    sexClick();
    infoCheck();
    bornClick();
    boxClick();
    order();
    markDown();
})
/*
    AJAX加载 头/尾部
 */
//头部加载
function header() {
    $.get("../../jsondata/header.html",function (data) {
        $(".header").html(data);
        deliverName();//调用传递用户名的函
        amendUrl();//修正导航栏地址
    })
}

 //尾部加载
function footer() {
    $.get("../../jsondata/footer.html",function (data) {
        $(".footer").after(data);
    })
}
/*
    点击导航栏切换对应界面
 */
function change() {
    $(".info-list li").click(function () {
        index =  $(".info-list li").index($(this));
        if (index == 4){
            return
        }else {
            $(".content").children().eq(index).css("display", "block")
            $(".content").children().eq(index).siblings().css("display","none");
        }
    })
}

/*
  个人信息
 */
//个人信息选项 选中变色
function infoCheck() {
    $(".info-list li").click(function () {
        $(this).children("a").addClass("checked");
        $(this).siblings().children("a").removeClass("checked")
    })
}
//性别按钮点击事件
function sexClick() {
    $(".sex input").change(function () {
        $(this).next("i").addClass("select");
        $(this).parent("p").siblings().children("i").removeClass("select");
    })
}
//生日选项点击出现
function bornClick() {
    $(".born>div").on("click",function () {
        $(this).children().eq(1).css("height","220px");
    })
    //鼠标移出 选框消失
    $(".born div").mouseleave(function () {
        $(this).children("dl").css("height","0px");
        $(this).children().children(".sub").css("background-position", "-326px -44px")
    })
    //点击选项传值
    $("dd").click(function () {
        //阻止冒泡
        event.stopPropagation();
        $(this).parent().prev().children("span").text($(this).text())
        $(this).parent("dl").css("height","0")
    })
    //鼠标悬浮 下标变色
        $(".born div").mouseenter(function () {
            $(this).children().children(".sub").css("background-position", "-326px -77px")
        })
}
//box类 点击出现选项框
function boxClick() {
    $(".box").click(function () {
        $(this).children("dl").css("height","220px");
    })
    $(".box").mouseleave(function () {
        $(this).children("dl").css("height","0px");
        $(this).children().children(".sub").css("background-position", "-326px -44px")
    })
    //鼠标悬浮 下标变色
    $(".box").mouseenter(function () {
        $(this).children().children(".sub").css("background-position", "-326px -77px")
    })
}
/*
    我的订单
 */
function order() {
    //点击取消按钮弹出框
    $(".cancle").click(function () {
        $(".popupbox h1").text("取消订单");
        $(".popupbox p").text("您是否要取消该订单？成功取消之后货款将在3-7个工作日内返还至你的支付账号。");
        $(".popupbox").fadeToggle();
        status = false;
    })
    $(".del").click(function () {
        $(".popupbox h1").text("删除订单");
        $(".popupbox p").text("您是否要删除该订单信息？删除后不再显示该订单。");
        $(".popupbox").fadeToggle();
        index = $(".del").index($(this));
        status = true;
    })
    buttonfn();
}
//确定/取消 按钮点击事件
function buttonfn() {
    $(".yes").click(function () {
        $(".popupbox").fadeOut();
        //判断点击的是那个按钮
        if (status == "true"){
            $("tbody tr").eq(index).remove();
        }
    })
    $(".no").click(function () {
        $(".popupbox").fadeOut();
    })
}

/*
我要出售
 */
//点击降价申请 切换界面
function markDown() {
    //点击降价申请切换界面
    $(".markdown").click(function () {
        $(".sell-content").hide();
        $(".apply").show();
    })
    //点击返回切换界面
    $(".tosell").click(function () {
        $(".sell-content").show();
        $(".apply").hide();
    })
}
