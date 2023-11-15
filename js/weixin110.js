
var str = ($response.body);

str = str.match(/:&#x2f;&#x2f;(\S*)"}/)[1].replace(/&#x2f;/g, '/').replace(/&amp;/g, '&').split("\"")[0]
let opener = str.indexOf("m.tb.cn") != -1 ? "taobao://" + str: ($response.body)
console.log(str);
// const $ = new cmp()

if (str.indexOf("m.tb.cn") != -1) {
    $.notify(``, "", "🛍️点击打开淘宝", opener)
} {
    console.log('====', str);
    $.notify(``,"", "🔗点击打开链接", "https://"+str)
}

$done({body: `<script>location.href='https://${str}';</script>`});

function cmp() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
