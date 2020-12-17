(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{385:function(t,e,r){"use strict";r.r(e);var a=r(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"компоненты-приложения"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#компоненты-приложения"}},[t._v("#")]),t._v(" Компоненты приложения")]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("Таблица содержания")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#что-такое-компоненты-приложения"}},[t._v("Что такое компоненты приложения?")])]),r("li",[r("a",{attrs:{href:"#почему-компоненты-заблокированные-с-помощью-am-не-распознаются-другими-связанными-приложениями"}},[t._v("Почему компоненты, заблокированные с помощью AM, не распознаются другими связанными приложениями?")])]),r("li",[r("a",{attrs:{href:"#сохраняются-ли-в-am-компоненты-приложения-заблокированные-другими-инструментами"}},[t._v("Сохраняются ли в AM компоненты приложения, заблокированные другими инструментами?")])]),r("li",[r("a",{attrs:{href:"#что-бывает-с-компонентами-заблокированными-с-помощью-am-которые-также-заблокированы-другими-инструментами"}},[t._v("Что бывает с компонентами, заблокированными с помощью AM, которые также заблокированы другими инструментами?")])]),r("li",[r("a",{attrs:{href:"#что-такое-глобальная-блокировка-компонентов"}},[t._v("Что такое глобальная блокировка компонентов?")])]),r("li",[r("a",{attrs:{href:"#как-разблокировать-компоненты-трекера-заблокированные-с-помощью-операции-в-один-клик-или-пакетных-операции"}},[t._v("Как разблокировать компоненты трекера, заблокированные с помощью операций в один клик или пакетных операций?")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"что-такое-компоненты-приложения"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-компоненты-приложения"}},[t._v("#")]),t._v(" Что такое компоненты приложения?")]),t._v(" "),r("p",[t._v("Активити, службы, широковещательные приемники (также известные как приемники) и поставщики контента (также известные как поставщики) вместе называются компонентами приложения. Технически, все они наследуют класс "),r("code",[t._v("ComponentInfo")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"почему-компоненты-заблокированные-с-помощью-am-не-распознаются-другими-связанными-приложениями"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#почему-компоненты-заблокированные-с-помощью-am-не-распознаются-другими-связанными-приложениями"}},[t._v("#")]),t._v(" Почему компоненты, заблокированные с помощью AM, не распознаются другими связанными приложениями?")]),t._v(" "),r("p",[t._v("Это происходит из-за используемого мной метода блокировки. Этот метод называется "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intent Firewall"),r("OutboundLink")],1),t._v(" (IFW) и он совместим с "),r("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),r("OutboundLink")],1),t._v(" и "),r("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),r("OutboundLink")],1),t._v(". "),r("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyAndroidTool"),r("OutboundLink")],1),t._v(" (MAT) поддерживает IFW, но использует другой формат. Существуют и другие методы блокировки компонентов приложения, например "),r("em",[t._v("pm")]),t._v(" и "),r("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku"),r("OutboundLink")],1),t._v(". Если компонент приложения заблокирован с помощью этих последних методов, уязвимое приложение может идентифицировать его и разблокировать, поскольку оно имеет полный доступ к своим собственным компонентам. Множество мошеннические приложения на самом деле пользуются этим, чтобы разблокировать компоненты трекера.")]),t._v(" "),r("h2",{attrs:{id:"сохраняются-ли-в-am-компоненты-приложения-заблокированные-другими-инструментами"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#сохраняются-ли-в-am-компоненты-приложения-заблокированные-другими-инструментами"}},[t._v("#")]),t._v(" Сохраняются ли в AM компоненты приложения, заблокированные другими инструментами?")]),t._v(" "),r("p",[r("strong",[t._v("Нет.")]),t._v(" Но компоненты, заблокированные системой Android или любыми другими инструментами, отображаются на странице "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#цветовые-коды"}},[t._v("«Сведения о приложении»")]),t._v(" (во вкладке компонентов). Начиная с версии 2.5.12, вы можете импортировать эти правила в "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#импортирование-существующих-правиn"}},[t._v("настройках приложения")]),t._v(". Но поскольку нет возможности отличить компоненты, заблокированные сторонними приложениями, от компонентов, заблокированных системой, вы должны быть очень осторожны при выборе приложения.")],1),t._v(" "),r("h2",{attrs:{id:"что-бывает-с-компонентами-заблокированными-с-помощью-am-которые-также-заблокированы-другими-инструментами"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-бывает-с-компонентами-заблокированными-с-помощью-am-которые-также-заблокированы-другими-инструментами"}},[t._v("#")]),t._v(" Что бывает с компонентами, заблокированными с помощью AM, которые также заблокированы другими инструментами?")]),t._v(" "),r("p",[t._v("AM снова блокирует компоненты, используя "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intent Firewall"),r("OutboundLink")],1),t._v(" (IFW). Они не разблокируются (если заблокированы с помощью метода "),r("em",[t._v("pm")]),t._v(" или "),r("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku"),r("OutboundLink")],1),t._v(") и снова блокируются. Но если вы разблокируете компонент на странице "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(", он будет возвращен в состояние по умолчанию - заблокирован или разблокирован, как описано в соответствующем манифесте приложения - с использованием как IFW, так и метода "),r("em",[t._v("pm")]),t._v(". Однако компоненты, заблокированные с помощью "),r("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyAndroidTools"),r("OutboundLink")],1),t._v(" (MAT) с методом IFW не будет разблокирован AM. Чтобы решить эту проблему, вы можете сначала импортировать соответствующую конфигурацию в "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#импортирование-существующих-правиn"}},[t._v("настройках AM")]),t._v(". В этом случае конфигурации MAT будут удалены. Однако эта опция доступна только с версии 2.5.12.")],1),t._v(" "),r("h2",{attrs:{id:"что-такое-глобальная-блокировка-компонентов"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-глобальная-блокировка-компонентов"}},[t._v("#")]),t._v(" Что такое глобальная блокировка компонентов?")]),t._v(" "),r("p",[t._v("Когда вы блокируете компонент на странице "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(", блокировка по умолчанию не применяется. Применяется она только тогда, когда вы применяете блокировку с помощью опции "),r("em",[t._v("«Применить правила»")]),t._v(" в правом верхнем меню. Если вы включите "),r("em",[t._v("глобальную блокировку компонентов")]),t._v(", блокировка будет применена, как только вы заблокируете компонент. Однако если вы решите заблокировать трекеры, блокировка применится автоматически независимо от этого параметра. Вы также можете снять блокировку приложения, просто нажав на "),r("em",[t._v("«Удалить правила»")]),t._v(" в том же меню на странице "),r("strong",[t._v("«Сведения о приложении»")]),t._v(". Поскольку поведение по умолчанию дает вам больший контроль над приложениями, лучше оставить опцию "),r("em",[t._v("глобальной блокировки компонентов")]),t._v(" выключенной.")],1),t._v(" "),r("p",[r("em",[t._v("Смотрите также: "),r("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#гnобаnьная-бnокировка-компонентов"}},[t._v("Глобальная блокировка компонентов")])],1)]),t._v(" "),r("h2",{attrs:{id:"как-разблокировать-компоненты-трекера-заблокированные-с-помощью-операции-в-один-клик-или-пакетных-операции"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-разблокировать-компоненты-трекера-заблокированные-с-помощью-операции-в-один-клик-или-пакетных-операции"}},[t._v("#")]),t._v(" Как разблокировать компоненты трекера, заблокированные с помощью операций в один клик или пакетных операций?")]),t._v(" "),r("p",[t._v("Некоторые приложения могут работать некорректно из-за их зависимости от компонентов трекера, заблокированных с помощью AM. Начиная с версии 2.5.12, есть возможность разблокировать компоненты трекеров на странице "),r("RouterLink",{attrs:{to:"/ru/guide/one-click-ops-page.html"}},[t._v("«Операции в один клик»")]),t._v(". Однако в предыдущих версиях таких опций нет. Чтобы разблокировать этот трекер, сначала перейдите на страницу "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(" некорректного приложения. Затем, переключившись на вкладку "),r("em",[t._v("«Активити»")]),t._v(", нажмите на опцию "),r("em",[t._v("«Удалить правила»")]),t._v(" в правом верхнем меню. Все правила блокировки, относящиеся к компонентам приложения, будут немедленно удалены. В качестве альтернативы, если вы нашли компонент, вызывающий проблему, вы можете разблокировать компонент, нажав на кнопку "),r("em",[t._v("«разблокировать»")]),t._v(" рядом с названием компонента. Если вы включили "),r("em",[t._v("глобальную блокировку компонентов")]),t._v(" в настройках приложения, сначала отключите ее, так как опция "),r("em",[t._v("«Удалить правила»")]),t._v(" не будет отображаться, когда блокировка включена.")],1),t._v(" "),r("p",[t._v("Если на вашем устройстве установлены "),r("strong",[t._v("Сервисы Google Play")]),t._v(" ("),r("code",[t._v("com.google.android.gms")]),t._v("), разблокировка следующих "),r("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#сnужбы"}},[t._v("сервисов")]),t._v(" может решить проблему:")],1),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Ad Request Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.AdRequestBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Cache Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.cache.CacheBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Gservices Value Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.GservicesValueBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Служба уведомления об идентификаторах рекламы")]),r("br"),t._v(" "),r("code",[t._v(".ads.identifier.service.AdvertisingIdNotificationService")])]),t._v(" "),r("li",[r("strong",[t._v("Служба рекламного идентификатора")]),r("br"),t._v(" "),r("code",[t._v(".ads.identifier.service.AdvertisingIdService")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);