/**
 * Created by Mr.Ren on 2017/5/25.
 */
/*
调用函数
 */
$(function () {
    checked();
    arithmetic();
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
// //尾部加载
function footer() {
    $.get("../../jsondata/footer.html",function (data) {
        $(".footer").after(data);
    })
}

//复选框选中改变状态
function checked(num , status) {
    // num;//记录选中个数
    // var status; //记录选中状态
    num = 0;
    var length = $(".shop-tab tbody > tr").length;//记录商品个数
    // //全选按钮
    $(".tbchk").change(function () {
        status = $(this).prop("checked");
        if (status){
            num = length;
            $(".ipt-ck").prop("checked",true);
            $(".tbchk").prop("checked",true);
            $(".tbchk").prop("indeterminate",false)//去除全选框半选状态
            $(".chk-bx").css("background-position","-412px -100px");
            $(".chk-all").css("background-position","-412px -100px");
            total($(".ipt-ck"),$(".num"),$(".rmb"));
        }else {
            num = 0;
            $(".ipt-ck").prop("checked",false);
            $(".tbchk").prop("checked",false);
            $(".chk-bx").css("background-position","-412px -46px");
            $(".chk-all").css("background-position","-412px -46px");
            total($(".ipt-ck"),$(".num"),$(".rmb"));
        }
    })
    $(".ipt-ck").change(function () {
        status =$(this).prop("checked");
        if(status){
            //选中时 选中个数加1 选框背景为选中图片
            num++;
            $(this).siblings(".chk-bx").css("background-position","-412px -100px");
        }else {
            //取消选中时 选中个数加-1 选框背景为选空
            num--;
            $(this).siblings(".chk-bx").css("background-position","-412px -46px");
        }
        if(num == 0){
            $(".tbchk").prop("checked",false);//全选框为未选
            $(".tbchk").prop("indeterminate",false)//去除全选框半选状态
            $(".chk-all").css("background-position","-412px -46px")
        }else if(num>0 && num < length){
            $(".chk-all").css("background-position","-412px -73px");
            $(".tbchk").prop("indeterminate",true);//全选框为半选
            $(".tbchk").prop("checked",false);//全选框为未选中
        }else {
            $(".tbchk").prop("indeterminate",false)//去除全选框半选状态
            $(".tbchk").prop("checked",true);//全选框为选中
            $(".chk-all").css("background-position","-412px -100px");
        }
        total($(".ipt-ck"),$(".num"),$(".rmb"));
    })
}
//合计件数 总价
function total(a, b ,c) {
    var num = 0;
     var price = 0;
    $.each(a,function (idx, val) {
        if($(val).prop("checked")){
            num += Number(b.eq(idx).val());
            price += Number(c.eq(idx).text().slice(1));
        }
    })
    $(".goodsnum").text(num);
    $(".total").text(price);
}
//点击+ - 数量增减
function arithmetic() {
    var val;
    //数量-
    $(".minus").on("click",function () {
         val = $(this).siblings("input").val()
        val--;
        if(val > 0){
            if (val == 1){
                $(this).css("color","#ccc");
                console.log(this)
            }
            $(this).siblings("input").val(val);
            $(this).siblings("input").trigger("input");
        }else {
            val = 1;
            $(this).siblings("input").val(val);
        }
    })
    //数量+
    $(".plus").on("click",function () {
        val = $(this).siblings("input").val()
        val++;
        $(this).siblings("input").val(val);
        $(this).siblings(".minus").css("color","#000");
        $(this).siblings("input").trigger("input");
    })
    //金额随数量改变
    $(".num").on("input",function () {
        var index =   $(".num").index($(this));
        var number = Number($(".num").eq(index).val());//数量
        var price =  Number($(".price").eq(index).text());//单价
        $(".rmb").eq(index).text("￥"+ number*price);
        total($(".ipt-ck"),$(".num"),$(".rmb"));
    })
}