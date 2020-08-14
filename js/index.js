/*
 * @Author: Charon
 * @Date: 2020-08-02 15:42:44
 * @LastEditTime: 2020-08-02 22:17:28
 */
(function () {
    var btn = document.getElementById('mhover');
    var box = document.getElementById('content');
    var timer = null;
    box.onmouseover = btn.onmouseover = function () {
        if (timer) clearTimeout(timer)
        box.style.display = 'block';
    }
    box.onmouseout = btn.onmouseout = function () {
        timer = setTimeout(function () {
            box.style.display = 'none';
        }, 400);

    }
})();

var mode = document.getElementById("mode")
var flag = true
var bg = document.getElementsByTagName("body")[0]
// 设计日期显示
function showDate() {
    var date = new Date
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var week = "日一二三四五六".charAt(date.getDay())
    var date_element = document.getElementById("date")
    date_element.innerHTML = year + "年" + month + "月" + day + "日 " + " 星期" + week
}
// 设计时间显示
function showTime() {
    var t = new Date
    var hour = t.getHours()
    var minute = t.getMinutes()
    var second = t.getSeconds()
    if (second < 10) {
        second = "0" + second
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    var time_element = document.getElementById("time")
    time_element.innerHTML = hour + ":" + minute + ":" + second
    // 根据时间自动切换日夜间模式
    if (hour == 19 && minute == "00" && second == "00") {
        toNight()
    }
    if (hour == "06" && minute == "00" && second == "00") {
        toDay()
    }
}
showDate()
setInterval("showTime()", 1000)
// 切换搜索引擎
var el_btn = document.getElementsByClassName("el")
var search = document.getElementById("search")
var search_content = document.getElementById("search-content")
el_btn[0].onclick = function () {
    search.action = "https://www.baidu.com/s"
    search_content.name = "wd"
    search_content.placeholder = "百度一下，你就知道"
}
el_btn[1].onclick = function () {
    search.action = "https://www.google.com/search"
    search_content.name = "q"
    search_content.placeholder = "Google"
}
el_btn[2].onclick = function () {
    search.action = "https://cn.bing.com/search"
    search_content.name = "q"
    search_content.placeholder = "Bing搜索"
}
el_btn[3].onclick = function () {
    search.action = "https://www.so.com/s"
    search_content.name = "q"
    search_content.placeholder = "360搜索"
}
el_btn[4].onclick = function () {
    search.action = "https://www.zhihu.com/search"
    search_content.name = "q"
    search_content.placeholder = "知乎搜索"
}
el_btn[5].onclick = function () {
    search.action = "https://duckduckgo.com/"
    search_content.name = "q"
    search_content.placeholder = "DuckDuckGo"
}
// 点击实现日间模式切换
function toNight() {
    bg.style.background = "url(img/wallhaven-2em38y.jpg)"
    bg.style.backgroundSize = "100%"
    bg.style.color = "beige"
    document.getElementById("time").style.color = "beige"
    mode.src = "img/icons8-太阳-24.png"
    mode.title = "点击切换至日间模式"
}
function toDay() {
    bg.style.background = "url(img/bg_white.jpg)"
    bg.style.backgroundSize = "100%"
    bg.style.color = "black"
    document.getElementById("time").style.color = "black"
    mode.src = "img/icons8-新月-50.png"
    mode.title = "点击切换至夜间模式"
}
mode.onclick = function () {
    if (flag) {
        toDay()
        flag = false
    } else {
        toNight()
        flag = true
    }
}
var change_button = document.getElementById("change-button")
var parter = document.getElementsByClassName("parter")
var display_flag = false
change_button.onclick = function () {
    if (!display_flag) {
        change_button.src = "img/icons8-可见-64white.png"
        // 渐入渐出
        $("#parter5").slideToggle(400, function () {
            $("#parter4").slideToggle(400, function () {
                $("#parter3").slideToggle(400, function () {
                    $("#parter2").slideToggle(400, function () {
                        $("#parter1").slideToggle(400)
                    })
                })
            })
        })
        
        display_flag = true
    } else {
        change_button.src = "img/icons8-隐藏-50white.png"
        $("#parter1").fadeOut(100, function () {
            $("#parter2").fadeOut(100, function () {
                $("#parter3").fadeOut(100, function () {
                    $("#parter4").fadeOut(100, function () {
                        $("#parter5").fadeOut(100)
                    })
                })
            })
        })
        display_flag = false
    }
}
// 点击跳转parter页面
parter[0].onclick = function () {
    window.location = "../GameArt/game.html"
}
parter[1].onclick = function () {
    window.location = "../ZhongLianyi/web-one.html"
}
parter[2].onclick = function () {
    window.location = "../Liu Mengtin/start.html"
}
parter[3].onclick = function () {
    window.location = "../photography/photography.html"
}
parter[4].onclick = function () {
    window.location = "../Li Zhixing/index.html"
}