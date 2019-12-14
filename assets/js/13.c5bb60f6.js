(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(s,t,n){s.exports=n.p+"assets/img/8.ad277be0.jpg"},182:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),a("p",[s._v("到现在，模板编译的三大阶段就已经全部介绍完毕了，接下来本篇文章，就以宏观角度回顾并梳理一下模板编译整个流程是怎样的。")]),s._v(" "),a("p",[s._v("首先，我们需要搞清楚模板编译的最终目的是什么，它的最终目的就是：把用户所写的模板转化成供"),a("code",[s._v("Vue")]),s._v("实例在挂载时可调用的"),a("code",[s._v("render")]),s._v("函数。或者你可以这样简单的理解为：模板编译就是一台机器，给它输入模板字符串，它就输出对应的"),a("code",[s._v("render")]),s._v("函数。")]),s._v(" "),a("p",[s._v("我们把模板编译的最终目的只要牢记在心以后，那么模板编译中间的所有的变化都是在为达到这个目的而努力。")]),s._v(" "),a("p",[s._v("接下来我们就以宏观角度来梳理一下模板编译的整个流程。")]),s._v(" "),a("h2",{attrs:{id:"_2-整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-整体流程"}},[s._v("#")]),s._v(" 2. 整体流程")]),s._v(" "),a("p",[s._v("上文说了，模板编译就是把模板转化成供"),a("code",[s._v("Vue")]),s._v("实例在挂载时可调用的"),a("code",[s._v("render")]),s._v("函数。那么我们就从"),a("code",[s._v("Vue")]),s._v("实例挂载时入手，一步一步从后往前推。我们知道，"),a("code",[s._v("Vue")]),s._v("实例在挂载时会调用全局实例方法——"),a("code",[s._v("$mount")]),s._v("方法(关于该方法后面会详细介绍)。那么我们就先看一下"),a("code",[s._v("$mount")]),s._v("方法，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("$mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$options\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果用户没有手写render函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取模板，先尝试获取内部模板，如果获取不到则获取外部模板")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("template\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             template "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOuterHTML")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" staticRenderFns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileToFunctions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            shouldDecodeNewlines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            shouldDecodeNewlinesForHref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            delimiters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delimiters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            comments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comments\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" render\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("staticRenderFns "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" staticRenderFns\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("从上述代码中可以看到，首先从"),a("code",[s._v("Vue")]),s._v("实例的属性选项中获取"),a("code",[s._v("render")]),s._v("选项，如果没有获取到，说明用户没有手写"),a("code",[s._v("render")]),s._v("函数，那么此时，就像上一篇文章中说的，需要"),a("code",[s._v("Vue")]),s._v("自己将模板转化成"),a("code",[s._v("render")]),s._v("函数。接着获取模板，先尝试获取内部模板，如果获取不到则获取外部模板。最后，调用"),a("code",[s._v("compileToFunctions")]),s._v("函数将模板转化成"),a("code",[s._v("render")]),s._v("函数，再将"),a("code",[s._v("render")]),s._v("函数赋值给"),a("code",[s._v("options.render")]),s._v("。")]),s._v(" "),a("p",[s._v("显然，上面代码中的核心部分是调用"),a("code",[s._v("compileToFunctions")]),s._v("函数生成"),a("code",[s._v("render")]),s._v("函数的部分，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" staticRenderFns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileToFunctions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        shouldDecodeNewlines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        shouldDecodeNewlinesForHref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        delimiters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delimiters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        comments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comments\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("将模板"),a("code",[s._v("template")]),s._v("传给"),a("code",[s._v("compileToFunctions")]),s._v("函数就可以得到"),a("code",[s._v("render")]),s._v("函数，那这个"),a("code",[s._v("compileToFunctions")]),s._v("函数是怎么来的呢？")]),s._v(" "),a("p",[s._v("我们通过代码跳转发现"),a("code",[s._v("compileToFunctions")]),s._v("函数的出处如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" compile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" compileToFunctions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompiler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们发现，"),a("code",[s._v("compileToFunctions")]),s._v("函数是 "),a("code",[s._v("createCompiler")]),s._v(" 函数的返回值对象中的其中一个，"),a("code",[s._v("createCompiler")]),s._v(" 函数顾名思义他的作用就是创建一个编译器。那么我们再继续往前推，看看"),a("code",[s._v("createCompiler")]),s._v(" 函数又是从哪来的。")]),s._v(" "),a("p",[a("code",[s._v("createCompiler")]),s._v(" 函数出处位于源码的"),a("code",[s._v("src/complier/index.js")]),s._v("文件中，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" createCompiler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompilerCreator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompilerOptions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompiledResult "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 优化阶段：遍历AST，找出其中的静态节点，并打上标记；")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("optimize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码生成阶段：将AST转换成渲染函数；")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    staticRenderFns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("staticRenderFns\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("可以看到，"),a("code",[s._v("createCompiler")]),s._v("函数是又 调用"),a("code",[s._v("createCompilerCreator")]),s._v(" 函数返回得到的，"),a("code",[s._v("createCompilerCreator")]),s._v(" 函数接收一个"),a("code",[s._v("baseCompile")]),s._v("函数作为参数。我们仔细看这个"),a("code",[s._v("baseCompile")]),s._v("函数，这个函数就是我们所说的模板编译三大阶段的主函数。将这个函数传给"),a("code",[s._v("createCompilerCreator")]),s._v(" 函数就可以得到"),a("code",[s._v("createCompiler")]),s._v("函数，那么我们再往前推，看一下"),a("code",[s._v("createCompilerCreator")]),s._v(" 函数又是怎么定义的。")]),s._v(" "),a("p",[a("code",[s._v("createCompilerCreator")]),s._v(" 函数的定义位于源码的"),a("code",[s._v("src/complier/create-compiler.js")]),s._v("文件中，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompilerCreator")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("baseCompile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompiler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("baseOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("可以看到，调用"),a("code",[s._v("createCompilerCreator")]),s._v(" 函数会返回"),a("code",[s._v("createCompiler")]),s._v("函数，同时我们也可以看到"),a("code",[s._v("createCompiler")]),s._v("函数的定义，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompiler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("baseOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      compile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      compileToFunctions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompileToFunctionFn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("createCompiler")]),s._v("函数的内部定义了一个子函数"),a("code",[s._v("compile")]),s._v("，同时返回一个对象，其中这个对象的第二个属性就是我们在开头看到的"),a("code",[s._v("compileToFunctions")]),s._v("，其值对应的是"),a("code",[s._v("createCompileToFunctionFn(compile)")]),s._v("函数的返回值，那么我们再往前推，看看"),a("code",[s._v("createCompileToFunctionFn(compile)")]),s._v("函数又是怎么样的。")]),s._v(" "),a("p",[a("code",[s._v("createCompileToFunctionFn(compile)")]),s._v("函数的出处位于源码的"),a("code",[s._v("src/complier/to-function.js")]),s._v("文件中，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCompileToFunctionFn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileToFunctions")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// compile")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compiled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compiled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fnGenErrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFunction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" noop\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("可以看到，调用"),a("code",[s._v("createCompileToFunctionFn")]),s._v("函数就可以得到"),a("code",[s._v("compileToFunctions")]),s._v("函数了，终于推到头了，原来最开始调用"),a("code",[s._v("compileToFunctions")]),s._v("函数是在这里定义的，那么我们就来看一下"),a("code",[s._v("compileToFunctions")]),s._v("函数内部都干了些什么。")]),s._v(" "),a("p",[a("code",[s._v("compileToFunctions")]),s._v("函数内部会调用传入的"),a("code",[s._v("compile")]),s._v("函数，而这个"),a("code",[s._v("compile")]),s._v("函数是"),a("code",[s._v("createCompiler")]),s._v("函数内部定义的子函数，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compiled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" finalOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    compiled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("errors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" errors\n    compiled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tips "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tips\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" compiled\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("compile")]),s._v("函数内部又会调用传入的"),a("code",[s._v("baseCompile")]),s._v("函数，而这个"),a("code",[s._v("baseCompile")]),s._v("函数就是我们所说的模板编译三大阶段的主线函数，如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompilerOptions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CompiledResult "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 优化阶段：遍历AST，找出其中的静态节点，并打上标记；")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("optimize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码生成阶段：将AST转换成渲染函数；")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    staticRenderFns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("staticRenderFns\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("那么现在就清晰了，最开始调用的"),a("code",[s._v("compileToFunctions")]),s._v("函数内部调用了"),a("code",[s._v("compile")]),s._v("函数，在"),a("code",[s._v("compile")]),s._v("函数内部又调用了"),a("code",[s._v("baseCompile")]),s._v("函数，而"),a("code",[s._v("baseCompile")]),s._v("函数返回的是代码生成阶段生成好的"),a("code",[s._v("render")]),s._v("函数字符串。所以在"),a("code",[s._v("compileToFunctions")]),s._v("函数内部调用"),a("code",[s._v("compile")]),s._v("函数就可以拿到生成好的"),a("code",[s._v("render")]),s._v("函数字符串，然后在"),a("code",[s._v("compileToFunctions")]),s._v("函数内部将"),a("code",[s._v("render")]),s._v("函数字符串传给"),a("code",[s._v("createFunction")]),s._v("函数从而变成真正的"),a("code",[s._v("render")]),s._v("函数返回出去，最后将其赋值给"),a("code",[s._v("options.render")]),s._v("。为了便于更好的理解，我们画出了其上述过程的流程图，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(145),alt:""}})]),s._v(" "),a("p",[s._v("以上，就是模板编译的整体流程。")])])}),[],!1,null,null,null);t.default=e.exports}}]);