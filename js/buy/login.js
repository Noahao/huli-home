/**
 * Created by HuoYu on 2017/5/25.
 */


$(document).ready(function () {
    header();
    footer();
    loginBtn();
    deliverName();
});



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
* 登录按钮
* */
function loginBtn() {
    var regexp = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    var regpsw =  new RegExp(/^[a-zA-Z]\w{5,17}$/);
    $("#login-email").blur(function () {
        if(!regexp.test($(this).val())){
            $(".tip1").css("visibility","visible");
        }else {
            $(".tip1").css("visibility","hidden");
            var userInfo = JSON.parse(localStorage.getItem("userInfo"));
            console.log(userInfo)
            $.each(function (idx,data) {
                if(data.username !== $("#login-email").val()){
                    $(".error-tip").css("visibility","visible");
                }else {
                    $(".error-tip").css("visibility","hidden");
                }
            });
        }
    });



    $("#login-btn").click(function () {
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        var strObj = (location.search);
        var strObjName = locSearchVal(strObj);//截取页面传值内容
        var prePage = strObjName.pagename;
            $.each(userInfo,function (idx,data) {
            if(data.username === $("#login-email").val()){
                if(data.psw === $("#login-psw").val()){
                    $(".tip1").css("visibility","hidden");
                    $("#login-psw").val("");
                    sessionStorage.setItem("loginState",true);
                    sessionStorage.setItem("userAccount",data.username);
                    /*
                    * 非主页点击登录按钮，须使用页面传值，将页面名称传递，
                    * 当点击登录按钮后，跳转到之前的页面
                    * */
                    if(prePage === "index"){
                        window.location.href = "../../index.html";
                    }else if(prePage == "beds") {
                        window.location.href = "../navPages/beds.html?pagename="+ prePage+"&";
                    }else if(prePage == "more") {
                        window.location.href = "../navPages/more.html?pagename="+ prePage+"&";
                    }else if(prePage == "sofas") {
                        window.location.href = "../navPages/sofas.html?pagename="+ prePage+"&";
                    }else if(prePage == "storage") {
                        window.location.href = "../navPages/storage.html?pagename="+ prePage+"&";
                    }else if(prePage == "talbeschairs") {
                        window.location.href = "../navPages/talbeschairs.html?pagename="+ prePage+"&";
                    }else {
                        window.location.href = prePage+".html";
                    }
                }else {
                    $(".tip2").css("visibility","visible");
                }
            }else {
                $(".tip1").css("visibility","visible");
            }
        });
    });
}

//点击跳转到注册页面
$(".a-reg").click(function () {
    location.href = "reg.html";
});




