import{_ as o}from"./true-image-20220913120727887-C70AvnVg.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c as p,b as e,d as t,w as m,e as n,a}from"./app-D1uezr0R.js";const d={},u=e("h3",{id:"echo-打印字符或者回显",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echo-打印字符或者回显"},[e("span",null,"echo 打印字符或者回显")])],-1),v=a(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：打印字符或者回显，例如输入 echo ok，会显示 ok， echo<br> ok &gt; test.txt 则会把 ok 字符覆盖 test.txt 内容</p><p>⑥、语法：</p><p>echo 【选项】 【输出内容】 【（输出重定向）&gt; 文件】</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;回显&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;支持<span class="token entity" title="\\n">\\n</span>回显&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;12311&quot;</span> <span class="token operator">&gt;&gt;</span> 01.txt 文本末尾追加
<span class="token builtin class-name">echo</span> <span class="token string">&quot;4565555&quot;</span> <span class="token operator">&gt;</span> 01.txt 替换文本内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>-e 扩展参数的常用参数</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\a 发出警告声
\\b 删除前一个字符
\\c 最后不加上换行符号；
\\f 换行但光标仍旧停留在原来的位置；
\\n 换行且光标移至行首；
\\r 光标移至行首，但不换行；
\\t 插入 tab； \\v 与\\f 相同；
\\\\ 插入\\字符；
\\033[30m 黑色字 \\033[0m
\\033[31m 红色字 \\033[0m
\\033[32m 绿色字 \\033[0m
\\033[33m 黄色字 \\033[0m
\\033[34m 蓝色字 \\033[0m
\\033[35m 紫色字 \\033[0m
\\033[36m 天蓝字 \\033[0m
\\033[37m 白色字 \\033[0m
\\033[40;37m 黑底白字 \\033[0m
\\033[41;37m 红底白字 \\033[0m
\\033[42;37m 绿底白字 \\033[0m
\\033[43;37m 黄底白字 \\033[0m
\\033[44;37m 蓝底白字 \\033[0m
\\033[45;37m 紫底白字 \\033[0m
\\033[46;37m 天蓝底白字 \\033[0m
\\033[47;30m 白底黑字 \\033[0m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),h={href:"http://auto.sh",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[36mPlease Select Install Menu follow:<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m1)Install Apache Server<span class="token entity" title="\\033">\\033</span>[1m&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;2)Install MySQL Server&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;3)Install PHP Server&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;4)Configuration index.php and start LAMP server&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31mUsage: { /bin/sh <span class="token variable">$0</span> 1|2|3|4|help}<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2);function k(g,x){const i=s("RouteLink"),l=s("ExternalLinkIcon");return r(),p("div",null,[u,e("ul",null,[e("li",null,[t(i,{to:"/linux/basis/command.html#%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91"},{default:m(()=>[n("返回命令大全列表")]),_:1})])]),v,e("p",null,[n("echo 颜色打印扩展，"),e("a",h,[n("auto.sh"),t(l)]),n(" 内容如下：")]),b])}const q=c(d,[["render",k],["__file","echo.html.vue"]]),E=JSON.parse('{"path":"/linux/basis/commands/echo.html","title":"echo","lang":"zh-CN","frontmatter":{"title":"echo","article":false,"timeline":false,"description":"echo 打印字符或者回显 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：打印字符或者回显，例如输入 echo ok，会显示 ok， echo ok > test.txt 则会把 ok 字符覆盖 test.txt 内容 ⑥、语法： echo 【选项】 【输出内容】 【（输出重定向）> 文件】 -e 扩展参数的...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/basis/commands/echo.html"}],["meta",{"property":"og:title","content":"echo"}],["meta",{"property":"og:description","content":"echo 打印字符或者回显 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：打印字符或者回显，例如输入 echo ok，会显示 ok， echo ok > test.txt 则会把 ok 字符覆盖 test.txt 内容 ⑥、语法： echo 【选项】 【输出内容】 【（输出重定向）> 文件】 -e 扩展参数的..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"echo\\",\\"description\\":\\"echo 打印字符或者回显 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：打印字符或者回显，例如输入 echo ok，会显示 ok， echo ok > test.txt 则会把 ok 字符覆盖 test.txt 内容 ⑥、语法： echo 【选项】 【输出内容】 【（输出重定向）> 文件】 -e 扩展参数的...\\"}"]]},"headers":[{"level":3,"title":"echo 打印字符或者回显","slug":"echo-打印字符或者回显","link":"#echo-打印字符或者回显","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"linux/basis/commands/echo.md","localizedDate":"2024年1月29日","excerpt":"<h3>echo 打印字符或者回显</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91\\" target=\\"_blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：打印字符或者回显，例如输入 echo ok，会显示 ok， echo<br>\\nok &gt; test.txt 则会把 ok 字符覆盖 test.txt 内容</p>","autoDesc":true}');export{q as comp,E as data};