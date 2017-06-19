/**
 * Created by px on 2017/5/31.
 */

window.onload = function() {
    header(turnLoginHref);
    footer();
    /*
     * created by huoyu
     *
     * */
    $(".choose").children().first().attr("class","sofa_li");
    turnSinglePurchaseHref();
    goCouplePage();

};
/*
 * 头部加载
 */
function header(callback) {
    $.get("../../jsondata/header.html",function (data) {
        $(".header").html(data);
        deliverName();
        callback();

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




function page(content,data) {
    /*
     * 数据加载
     */
    {
        var page = document.getElementsByClassName(content)[0];
        var pageH1 = document.getElementsByClassName(content)[0].getElementsByClassName('classify-banner')[0].getElementsByTagName('h1')[0];
        var pageUl = document.getElementsByClassName(content)[0].getElementsByClassName('classify-banner')[0].getElementsByClassName('subNav')[0];
        var pageData = data[0];
// 标题
        pageH1.innerHTML = pageData.title;
// 子导航栏
        pageData.nav1.forEach(function (data) {
            pageUl.innerHTML += `
                <li>
                    <a href="javascript:;">${data}</a>
                </li>
            `;
        })
// 分类筛选
        var pageFilter = document.getElementsByClassName(content)[0].getElementsByClassName('classify-filter')[0];
        pageData.nav2.forEach(function (data1) {
            var a = document.createElement("a");
            var text1 = document.createTextNode(data1[0].ul);
            var div = document.createElement("div");
            a.appendChild(text1);
            div.appendChild(a);
            pageFilter.appendChild(div);
            var ul = document.createElement("ul")
            div.appendChild(ul);
            data1.forEach(function (data2) {
                data2.li.forEach(function (data3) {
                    var liText = document.createTextNode(data3)
                    var li = document.createElement("li")
                    li.appendChild(liText);
                    ul.appendChild(li);
                })
            })
        })
// 商品选择
        var pageChoose = document.getElementsByClassName(content)[0].getElementsByClassName('choose')[0];
        pageData.goods.forEach(function (data) {
            if(!(data.price)){
                pageChoose.innerHTML += `
                    <a href="javascript:;">
                        <img src="${data.img}">
                        <div class="baseInfo">
                            <span class="name">${data.name}</span>
                            <span class="price">
                                <span>
                                    <span>${data.price1}</span>
                                    <span class="priceOut"></span>
                                </span>
                                <span>${data.price2}</span>
                            </span>
                        </div>
                    </a>
                `;
            }else {
                pageChoose.innerHTML += `
                    <a href="javascript:;">
                        <img src="${data.img}">
                        <div class="baseInfo">
                            <span class="name">${data.name}</span>
                            <span class="price">${data.price}</span>
                        </div>
                    </a>
                `;
            }
        })
    }
}


