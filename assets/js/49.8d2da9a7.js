(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{406:function(t,a,r){"use strict";r.r(a);var s=r(25),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"基于tcp的adb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于tcp的adb"}},[t._v("#")]),t._v(" 基于TCP的ADB")]),t._v(" "),r("p",[t._v("在这个页面中， "),r("strong",[t._v("AoT")]),t._v(" 表示 "),r("strong",[t._v("基于TCP的ADB")]),t._v(" 两者将会被交替使用。")]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("目录")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#我每次重启时是否需要重新启用adb-over-tcp"}},[t._v("我每次重启时是否需要重新启用ADB over TCP？")])]),r("li",[r("a",{attrs:{href:"#无法启用-usb-调试。-怎么办"}},[t._v("无法启用 USB 调试。 怎么办？")])]),r("li",[r("a",{attrs:{href:"#我可以使用基于tcp的adb来阻止追踪器或任何其他应用程序组件吗"}},[t._v("我可以使用基于TCP的ADB来阻止追踪器或任何其他应用程序组件吗？")])]),r("li",[r("a",{attrs:{href:"#哪些功能可以在adb模式下使用"}},[t._v("哪些功能可以在ADB模式下使用？")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"我每次重启时是否需要重新启用adb-over-tcp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我每次重启时是否需要重新启用adb-over-tcp"}},[t._v("#")]),t._v(" 我每次重启时是否需要重新启用ADB over TCP？")]),t._v(" "),r("p",[t._v("是的。 但截至v2.5.13版本, 您不需要保持Aot在所有时间都开启，因为它现在正在使用服务器-客户端机制与系统交互，但您确实必须保持 "),r("strong",[t._v("开发者选项")]),t._v(" 以及 "),r("strong",[t._v("USB调试模式")]),t._v(" 已启用。 要做到这一点，请启用 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/adb-over-tcp.html"}},[t._v("基于TCP的ADB")]),t._v(" 并打开应用管理器。 您应该在底部看到 "),r("em",[t._v("正在使用 ADB 模式")]),t._v(" 的提示消息。 如果你看到它，你可以安全地停止服务器。 对于Lineage OS 或其衍生操作系统， 您可以在没有任何PC或Mac的情况下切换触发器。只需切换位于 "),r("strong",[t._v("USB 调试")]),t._v(" 下面的 "),r("strong",[t._v("ADB 网络上的")]),t._v(" 选项。")],1),t._v(" "),r("h2",{attrs:{id:"无法启用-usb-调试。-怎么办"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无法启用-usb-调试。-怎么办"}},[t._v("#")]),t._v(" 无法启用 USB 调试。 怎么办？")]),t._v(" "),r("p",[t._v("查看 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/adb-over-tcp.html#_2-启用usb调试"}},[t._v("启用 USB 调试")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"我可以使用基于tcp的adb来阻止追踪器或任何其他应用程序组件吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我可以使用基于tcp的adb来阻止追踪器或任何其他应用程序组件吗"}},[t._v("#")]),t._v(" 我可以使用基于TCP的ADB来阻止追踪器或任何其他应用程序组件吗？")]),t._v(" "),r("p",[t._v("遗憾的是，不能。 ADB限制了 "),r("a",{attrs:{href:"https://github.com/aosp-mirror/platform_frameworks_base/blob/master/packages/Shell/AndroidManifest.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("个权限"),r("OutboundLink")],1),t._v(" 并且控制应用程序组件不是其中之一。")]),t._v(" "),r("h2",{attrs:{id:"哪些功能可以在adb模式下使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#哪些功能可以在adb模式下使用"}},[t._v("#")]),t._v(" 哪些功能可以在ADB模式下使用？")]),t._v(" "),r("p",[t._v("ADB模式支持的大多数功能都是默认启用的，一旦应用管理器检测到ADB支持。 它包括禁用、强制停止、清除数据、授予/撤销app ops权限和permissions权限。 您也可以在没有任何提示的情况下安装应用程序并展示 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/main-page.html#正在运行的应用"}},[t._v("运行中的应用程序/进程")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);