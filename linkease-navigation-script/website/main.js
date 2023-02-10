function addScript() {
    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "https://assets.koolcenter.com/linkease-navigation-script/assets/main.css?v=2");

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("defer", "true");
    script.setAttribute("src", "https://assets.koolcenter.com/linkease-navigation-script/assets/main.js?v=2");
    document.head.appendChild(style)
    document.head.appendChild(script)
}
(function () {
    window.initLinkeaseNavigationFunc = function () {
        var menus = []
        switch (location.host) {
            case "doc.linkease.com":
                menus = [
                    {
                        icon: "qq",
                        title: "QQ交流群",
                        qrcode: "https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png",
                        email: "",
                        text: ""
                    },
                    {
                        icon: "wechat",
                        title: "微信交流群",
                        qrcode: "",
                        email: "",
                        text: "请在易有云app或DDNSTO控制台查看"
                    },
                    {
                        icon: "email",
                        title: "商务合作邮箱",
                        qrcode: "",
                        email: "admin@linkease.com",
                        text: ""
                    }
                ]
                break
            case "app.linkease.com":
                menus = [
                    {
                        icon: "qq",
                        title: "QQ交流群",
                        qrcode: "https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png",
                        email: "",
                        text: ""
                    },
                    {
                        icon: "wechat",
                        title: "付费用户微信交流群",
                        qrcode: "",
                        email: "",
                        text: "请在 控制台 - 玩家交流页查看二维码"
                    },
                    {
                        icon: "email",
                        title: "商务合作邮箱",
                        qrcode: "",
                        email: "admin@linkease.com",
                        text: ""
                    }
                ]
                break
            case "www.linkease.com":
                menus = [
                    {
                        icon: "qq",
                        title: "QQ交流群",
                        qrcode: "https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png",
                        email: "",
                        text: ""
                    },
                    {
                        icon: "wechat",
                        title: "付费用户微信交流群",
                        qrcode: "",
                        email: "",
                        text: "请打开易有云APP - “我的” - “联系我们”中查看二维码"
                    },
                    {
                        icon: "email",
                        title: "商务合作邮箱",
                        qrcode: "",
                        email: "admin@linkease.com",
                        text: ""
                    }
                ]
                break
            case "www.ddnsto.com":
            case "www.tocmcc.cn":
            case "www.kooldns.cn":
                menus = [
                    {
                        icon: "qq",
                        title: "QQ交流群",
                        qrcode: "https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png",
                        email: "",
                        text: ""
                    },
                    {
                        icon: "wechat",
                        title: "付费用户微信交流群",
                        qrcode: "",
                        email: "",
                        text: "请在 控制台 - 玩家交流页查看二维码"
                    },
                    {
                        icon: "email",
                        title: "商务合作邮箱",
                        qrcode: "",
                        email: "admin@linkease.com",
                        text: ""
                    }
                ]
                break
        }
        new LinkeaseNavigation({
            menus: menus
        })
    }
    addScript()
})()