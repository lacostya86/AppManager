(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{379:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"profile-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile-page"}},[e._v("#")]),e._v(" Profile Page")]),e._v(" "),a("p",[e._v("Profile page displays the configurations for a profile. It also offers editing them.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),a("p",[e._v("When you apply a profile, if some packages do not match the criteria, they will simply be ignored.")])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Table of Contents")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#options-menu"}},[e._v("Options Menu")])]),a("li",[a("a",{attrs:{href:"#apps-tab"}},[e._v("Apps Tab")])]),a("li",[a("a",{attrs:{href:"#configurations-tab"}},[e._v("Configurations Tab")]),a("ul",[a("li",[a("a",{attrs:{href:"#comment"}},[e._v("Comment")])]),a("li",[a("a",{attrs:{href:"#state"}},[e._v("State")])]),a("li",[a("a",{attrs:{href:"#components"}},[e._v("Components")])]),a("li",[a("a",{attrs:{href:"#app-ops"}},[e._v("App Ops")])]),a("li",[a("a",{attrs:{href:"#permissions"}},[e._v("Permissions")])]),a("li",[a("a",{attrs:{href:"#backup-restore"}},[e._v("Backup/Restore")])]),a("li",[a("a",{attrs:{href:"#export-blocking-rules"}},[e._v("Export Blocking Rules")])]),a("li",[a("a",{attrs:{href:"#disable"}},[e._v("Disable")])]),a("li",[a("a",{attrs:{href:"#force-stop"}},[e._v("Force-stop")])]),a("li",[a("a",{attrs:{href:"#clear-cache"}},[e._v("Clear Cache")])]),a("li",[a("a",{attrs:{href:"#clear-data"}},[e._v("Clear Data")])]),a("li",[a("a",{attrs:{href:"#block-trackers"}},[e._v("Block Trackers")])]),a("li",[a("a",{attrs:{href:"#backup-apk"}},[e._v("Backup APK")])])])])])]),a("p")]),e._v(" "),a("h2",{attrs:{id:"options-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-menu"}},[e._v("#")]),e._v(" Options Menu")]),e._v(" "),a("p",[e._v("The three dots menu on the top-right corner opens the options menu. It contains several options such as—")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Apply.")]),e._v("  This option can be used to apply the profile. When clicked, a dialog will be displayed where you can select a "),a("a",{attrs:{href:"#state"}},[e._v("profile state")]),e._v(". On selecting one of the options, the profile will be applied immediately.")]),e._v(" "),a("li",[a("strong",[e._v("Save.")]),e._v(" Allows you to save the profile."),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),a("p",[e._v("Changes are never saved automatically. You have to save them manually from here.")])])]),e._v(" "),a("li",[a("strong",[e._v("Discard.")]),e._v(" Discard any modifications made since the last save.")]),e._v(" "),a("li",[a("strong",[e._v("Delete.")]),e._v(" Clicking on delete will remove the profile immediately without any warning.")]),e._v(" "),a("li",[a("strong",[e._v("Duplicate.")]),e._v(' This option can be used to duplicate the profile. When clicked, an input box will be displayed where you can set the profile name. If you click "OK", a new profile will be created and the page will be reloaded. The profile will not be saved until you save it manually.')]),e._v(" "),a("li",[a("strong",[e._v("Create shortcut.")]),e._v(" This option can be used to create a shortcut for the profile. When clicked, there will be two options: "),a("em",[e._v("Simple")]),e._v(" and "),a("em",[e._v("Advanced")]),e._v(". The latter option allows you to set the "),a("a",{attrs:{href:"#state"}},[e._v("profile state")]),e._v(" before applying it while the former option use the default state that was configured when the profile was last saved.")])]),e._v(" "),a("h2",{attrs:{id:"apps-tab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apps-tab"}},[e._v("#")]),e._v(" Apps Tab")]),e._v(" "),a("p",[e._v("Apps tab lists the packages configured under this profile. Packages can be added or removed using the "),a("em",[e._v("plus")]),e._v(" button located near the bottom of the screen. Packages can also be removed by long clicking on them (in which case, a popup will be displayed with the only option "),a("em",[e._v("delete")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"configurations-tab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurations-tab"}},[e._v("#")]),e._v(" Configurations Tab")]),e._v(" "),a("p",[e._v("Configurations tab can be used to configure the selected packages. Description of each item is given below:")]),e._v(" "),a("h3",{attrs:{id:"comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comment"}},[e._v("#")]),e._v(" Comment")]),e._v(" "),a("p",[e._v("This is the text that will be displayed in the "),a("RouterLink",{attrs:{to:"/guide/profiles-page.html"}},[e._v("profiles page")]),e._v(". If not set, the current configurations will be displayed instead.")],1),e._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("Denotes how certain configured options will behave. For instance, if "),a("em",[e._v("disable")]),e._v(" option is turned on, the apps will be disabled if the state is "),a("em",[e._v("on")]),e._v(" and will be enabled if the state is "),a("em",[e._v("off")]),e._v(". Currently state only support "),a("em",[e._v("on")]),e._v(" and "),a("em",[e._v("off")]),e._v(" values.")]),e._v(" "),a("h3",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),a("p",[e._v("This behaves the same way as the "),a("RouterLink",{attrs:{to:"/guide/one-click-ops-page.html#block-components"}},[e._v("Block Components…")]),e._v(" option does in the 1-Click Ops page. However, this only applies for the selected packages. If the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("on")]),e._v(", the components will be blocked, and if the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("off")]),e._v(", the components will be unblocked. The option can be disabled (regardless of the inserted values) by clicking on the "),a("em",[e._v("disabled")]),e._v(" button on the input dialog.")],1),e._v(" "),a("p",[a("em",[e._v("See also: "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-are-the-app-components"}},[e._v("What are the app components?")])],1)]),e._v(" "),a("h3",{attrs:{id:"app-ops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-ops"}},[e._v("#")]),e._v(" App Ops")]),e._v(" "),a("p",[e._v("This behaves the same way as the "),a("RouterLink",{attrs:{to:"/guide/one-click-ops-page.html##deny-app-ops"}},[e._v("Deny App Ops…")]),e._v(" option does in the 1-Click Ops page. However, this only applies for the selected packages. If the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("on")]),e._v(", the app ops will be denied, and if the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("off")]),e._v(", the app ops will be allowed. The option can be disabled (regardless of the inserted values) by clicking on the "),a("em",[e._v("disabled")]),e._v(" button on the input dialog.")],1),e._v(" "),a("h3",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),a("p",[e._v("This option can be used to grant or revoke certain permissions from the selected packages. Like others above, permissions must be separated by spaces. If the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("on")]),e._v(", the permissions will be revoked, and if the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("off")]),e._v(", the permissions will be allowed. The option can be disabled (regardless of the inserted values) by clicking on the "),a("em",[e._v("disabled")]),e._v(" button on the input dialog.")]),e._v(" "),a("h3",{attrs:{id:"backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore"}},[e._v("#")]),e._v(" Backup/Restore")]),e._v(" "),a("p",[e._v("This option can be used to take a backup of the selected apps and its data or restore them. There two options available there: "),a("em",[e._v("Backup options")]),e._v(" and "),a("em",[e._v("backup name")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Backup options.")]),e._v(" Same as the "),a("RouterLink",{attrs:{to:"/guide/backup-restore.html#backup-options"}},[e._v("backup options")]),e._v(" of the backup/restore feature. If not set, the default options will be used.")],1),e._v(" "),a("li",[a("strong",[e._v("Backup name.")]),e._v(' Set a custom name for the backup. If the backup name is set, each time a backup is made, it will be given a unique name with backup name as the suffix. This behaviour will be fixed in a future release. Leave this field empty for regular or "base" backup.')])]),e._v(" "),a("p",[e._v("If the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("on")]),e._v(", the packages will be backed up, and if the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("off")]),e._v(", the packages will be restored. The option can be disabled by clicking on the "),a("em",[e._v("disabled")]),e._v(" button on the input dialog.")]),e._v(" "),a("h3",{attrs:{id:"export-blocking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-blocking-rules"}},[e._v("#")]),e._v(" Export Blocking Rules")]),e._v(" "),a("p",[e._v("This option allows you to export blocking rules.")]),e._v(" "),a("h3",{attrs:{id:"disable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[e._v("#")]),e._v(" Disable")]),e._v(" "),a("p",[e._v("Enabling this option will enable/disable the selected packages depending on the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(". If the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("on")]),e._v(", the packages will be disabled, and if the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("off")]),e._v(", the packages will be enabled.")]),e._v(" "),a("h3",{attrs:{id:"force-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#force-stop"}},[e._v("#")]),e._v(" Force-stop")]),e._v(" "),a("p",[e._v("Enabling this option will allow the selected packages to be force-stopped.")]),e._v(" "),a("h3",{attrs:{id:"clear-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[e._v("#")]),e._v(" Clear Cache")]),e._v(" "),a("p",[e._v("Enabling this option will enable clearing cache for the selected packages.")]),e._v(" "),a("h3",{attrs:{id:"clear-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-data"}},[e._v("#")]),e._v(" Clear Data")]),e._v(" "),a("p",[e._v("Enabling this option will enable clearing data for the selected packages.")]),e._v(" "),a("h3",{attrs:{id:"block-trackers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-trackers"}},[e._v("#")]),e._v(" Block Trackers")]),e._v(" "),a("p",[e._v("Enabling this option will block/unblock tracker components from the selected packages depending on the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(". If the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("on")]),e._v(", the trackers will be blocked, and if the "),a("a",{attrs:{href:"#state"}},[e._v("state")]),e._v(" is "),a("em",[e._v("off")]),e._v(", the trackers will be unblocked.")]),e._v(" "),a("h3",{attrs:{id:"backup-apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-apk"}},[e._v("#")]),e._v(" Backup APK")]),e._v(" "),a("p",[e._v("Enabling this option will enable APK backup for the selected packages. This is not the same as "),a("RouterLink",{attrs:{to:"/guide/backup-restore.html"}},[e._v("backup/restore")]),e._v(" as described there.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);