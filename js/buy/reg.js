/**
 * Created by HuoYu on 2017/5/24.
 */

$(document).ready(function () {
   header();
   footer();
});


var regexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var regpsw = /^[a-zA-Z]\w{5,17}$/;
var isExsit = false;
var userArray = JSON.parse(localStorage.getItem("userInfo"));

/*
 * 头部加载
 */
function header() {
    $.get("../../jsondata/header.html",function (data) {
        $(".header").html(data);
        amendUrl();//修正导航栏地址
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
* 用户名实时验证
* */
$(".reg-email").change(function () {
    if(userArray !==null){
        $.each(userArray,function (idx,data) {
            if(data.username === $(".reg-email").val()){
                isExsit = true;
            }
        })
    }
    if(isExsit){
        $("#acc-tips").css("display","block");
        return;
    }else {
        $("#acc-tips").css("display","none");
    }

    $(".psw").removeAttr("readonly");
    $(".comfirm-psw").removeAttr("readonly");
    if(!regexp.test($(this).val())){
        $(this).siblings("p").first().css("display","block");
    }else {
        $(this).siblings("p").first().css("display","none");
        for( var i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) === $(".reg-email").val()) {
                alert("账号已存在，请登录！")
                $(".psw").attr("readonly","readonly");
                $(".comfirm-psw").attr("readonly","readonly");
            }
        }
    }
});

/*
* 密码框改变时，实时验证
* */

$(".psw").change(function () {
    if(!regpsw.test($(this).val())){
        $(this).siblings("p").css("display","block");
    }else {
        $(this).siblings("p").css("display","none");
    }
});
$(".comfirm-psw").change(function () {
    if($(this).val() !== $(".psw").val() ){
        $(this).siblings("p").css("display","block");
        $(".reg-btn").css("background-color","#838281");
    }else {
        $(this).siblings("p").css("display","none");
        if(regexp.test($(".reg-email").val()) && regpsw.test($(".psw").val()) ){
            $(".reg-btn").css("background-color","#82c353");
        }else {
            $(".reg-btn").css("background-color","#838281");
        }
    }
});
/*
* 注册按钮点击事件
* */
$(".reg-btn").click(function () {
    if(userArray !==null){
        $.each(userArray,function (idx,data) {
            if(data.username === $(".reg-email").val()){
                isExsit = true;
            }
        })
    }
    if(isExsit){
        sessionStorage.setItem("registerState",true);
        location.href = "login.html"+"?"+"username=" + $(".reg-email").val()+"&";
        return;
    }
    if($(".reg-email").val() && $(".comfirm-psw").val() && regexp.test($(".reg-email").val()) && regpsw.test($(".psw").val()) && $(".psw").val() === $(".comfirm-psw").val() ){
        if( userArray === null){
            userArray = [];
        }
        userArray.push({"username":$(".reg-email").val(),"psw":$(".psw").val()});
        var userObj = JSON.stringify(userArray);
        localStorage.setItem("userInfo",userObj);
        sessionStorage.setItem("userAccount",$(".reg-email").val());
        location.href = "../../index.html";
    }else {
        $(".end-tip").css("display","block");
    }


});


/*
* 点击跳转到登录页面
* */
$(".a-login").click(function () {
    location.href = "login.html";
});




