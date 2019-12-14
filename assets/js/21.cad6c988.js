(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(s,t,a){s.exports=a.p+"assets/img/1.4fa9d829.png"},195:function(s,t,a){"use strict";a.r(t);var e=a(0),_=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),e("p",[s._v("博主作为一名前端开发，日常开发的技术栈是"),e("code",[s._v("Vue")]),s._v("，并且用"),e("code",[s._v("Vue")]),s._v("开发也有一年多了，对其用法也较为熟练了，但是对各种用法和各种"),e("code",[s._v("api")]),s._v("使用都是只知其然而不知其所以然，因此，有时候在排查"),e("code",[s._v("bug")]),s._v("的时候就会有点捉襟见肘。鉴于此，索性就从"),e("code",[s._v("github")]),s._v("上"),e("code",[s._v("clone")]),s._v("下来一份"),e("code",[s._v("Vue")]),s._v("源码来学习学习，本系列博文将用来记录博主对"),e("code",[s._v("Vue")]),s._v("源码的整个学习过程，以及自己对源码的一些理解。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。")]),s._v(" "),e("h2",{attrs:{id:"_2-学习规划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-学习规划"}},[s._v("#")]),s._v(" 2. 学习规划")]),s._v(" "),e("h3",{attrs:{id:"_2-1-源码学习目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-源码学习目录"}},[s._v("#")]),s._v(" 2.1 源码学习目录")]),s._v(" "),e("p",[e("code",[s._v("Vue.js")]),s._v("的源码目录如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("├─dist                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目构建后的文件")]),s._v("\n├─scripts                "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与项目构建相关的脚本和配置文件 ")]),s._v("\n├─flow                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# flow的类型声明文件")]),s._v("\n├─src                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目源代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    ├─complier          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与模板编译相关的代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    ├─core              "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通用的、与运行平台无关的运行时代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├─observe        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实现变化侦测的代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├─vdom           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实现virtual dom的代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├─instance       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Vue.js实例的构造函数和原型方法")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├─global-api     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局api的代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  └─components     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内置组件的代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    ├─server            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与服务端渲染相关的代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    ├─platforms         "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 特定运行平台的代码，如weex ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    ├─sfc               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单文件组件的解析代码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    └─shared            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目公用的工具代码")]),s._v("\n└─test                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目测试代码")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("从上面的目录结构可以看出，"),e("code",[s._v("Vue")]),s._v("的整个项目包含了类型检测相关、单元测试相关、与平台无关的核心代码以及跨平台运行的相关代码。")]),s._v(" "),e("p",[s._v("由于我们只是学习"),e("code",[s._v("Vue.js")]),s._v("的设计思想以及代码实现的相关逻辑，所以我们暂不去关心类型检测、单元测试以及特定平台运行等相关逻辑实现，仅关注它的核心代码，即"),e("code",[s._v("src/core")]),s._v("和"),e("code",[s._v("src/complier")]),s._v("这两个目录下的代码，并且接下来后续的学习也都是只在这两个目录的范围之内。")]),s._v(" "),e("h3",{attrs:{id:"_2-2-学习路线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-学习路线"}},[s._v("#")]),s._v(" 2.2 学习路线")]),s._v(" "),e("p",[s._v("在学习之前，我们需要先制定一个学习路线，循序渐进的学习，这样不至于一头雾水，无处下手。后面的学习路线如下：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("变化侦测篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中如何实现数据的响应式系统，从而达到数据驱动视图。")])]),s._v(" "),e("li",[e("p",[s._v("虚拟DOM篇")]),s._v(" "),e("p",[s._v("学习什么是虚拟DOM，以及"),e("code",[s._v("Vue")]),s._v("中的"),e("code",[s._v("DOM-Diff")]),s._v("原理")])]),s._v(" "),e("li",[e("p",[s._v("模板编译篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("内部是怎么把"),e("code",[s._v("template")]),s._v("模板编译成虚拟"),e("code",[s._v("DOM")]),s._v(",从而渲染出真实"),e("code",[s._v("DOM")])])]),s._v(" "),e("li",[e("p",[s._v("实例方法篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中所有实例方法(即所有以"),e("code",[s._v("$")]),s._v("开头的方法)的实现原理")])]),s._v(" "),e("li",[e("p",[s._v("全局API篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中所有全局"),e("code",[s._v("API")]),s._v("的实现原理")])]),s._v(" "),e("li",[e("p",[s._v("生命周期篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中组件的生命周期实现原理")])]),s._v(" "),e("li",[e("p",[s._v("指令篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中所有指令的实现原理")])]),s._v(" "),e("li",[e("p",[s._v("过滤器篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中所有过滤器的实现原理")])]),s._v(" "),e("li",[e("p",[s._v("内置组件篇")]),s._v(" "),e("p",[s._v("学习"),e("code",[s._v("Vue")]),s._v("中内置组件的实现原理")])])]),s._v(" "),e("h3",{attrs:{id:"_2-3-学习输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-学习输出"}},[s._v("#")]),s._v(" 2.3 学习输出")]),s._v(" "),e("p",[s._v("通过一步步的学习，博主打算在学习过程中输出以下三个东西：")]),s._v(" "),e("ul",[e("li",[s._v("以文字形式记录学习过程；")]),s._v(" "),e("li",[s._v("为"),e("code",[s._v("clone")]),s._v("下来的"),e("code",[s._v("Vue")]),s._v("源码添加尽可能详细的注释；")]),s._v(" "),e("li",[s._v("做一份思维导图，以宏观角度总览源码；")])]),s._v(" "),e("h2",{attrs:{id:"_3-鼓励写作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-鼓励写作"}},[s._v("#")]),s._v(" 3. 鼓励写作")]),s._v(" "),e("p",[s._v("你的打赏，是对我写作的认可和鼓励。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(161),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"_4-那就开始吧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-那就开始吧"}},[s._v("#")]),s._v(" 4. 那就开始吧")]),s._v(" "),e("p",[s._v("博主尽可能快的更新文章及输出资料，毕竟博主也是一个修(9)福(9)报(6)的程序猿。2333~~~")])])}),[],!1,null,null,null);t.default=_.exports}}]);