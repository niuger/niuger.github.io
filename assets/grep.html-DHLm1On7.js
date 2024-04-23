import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as t,c as i,b as n,d as p,w as l,a as r,e as o}from"./app-D1uezr0R.js";const c={},m=n("h3",{id:"grep-过滤查找及-管道符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grep-过滤查找及-管道符"},[n("span",null,"grep 过滤查找及“|”管道符")])],-1),d=r(`<p>①、命令名称：grep</p><p>②、英文原意：</p><p>③、命令所在路径：/usr/bin/grep</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：搜索数据；管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理</p><p>⑥、语法：</p><p>grep [选项]... PATTERN [FILE]...</p><ul><li>-v 反向搜索</li><li>-n 显示匹配行号</li><li>-c 知道有多少行含有匹配</li><li>-e 指定多个匹配模式</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep three file1</span>
three
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep t file1</span>
two
three
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep 1 ds.log</span>
<span class="token number">1</span>
<span class="token number">10</span>
<span class="token number">100</span>
<span class="token number">145</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep -v t file1</span>
one
four
five
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep -n t file1</span>
<span class="token number">2</span>:two
<span class="token number">3</span>:three
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep -e t -e f file1</span>
two
three
four
five
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep [tf] file1</span>
two
three
four
five
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function u(v,g){const e=a("RouteLink");return t(),i("div",null,[m,n("ul",null,[n("li",null,[p(e,{to:"/linux/basis/command.html#"},{default:l(()=>[o("返回命令大全列表")]),_:1})])]),d])}const k=s(c,[["render",u],["__file","grep.html.vue"]]),f=JSON.parse('{"path":"/linux/basis/commands/grep.html","title":"grep","lang":"zh-CN","frontmatter":{"title":"grep","article":false,"timeline":false,"description":"grep 过滤查找及“|”管道符 ①、命令名称：grep ②、英文原意： ③、命令所在路径：/usr/bin/grep ④、执行权限：所有用户 ⑤、功能描述：搜索数据；管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理 ⑥、语法： grep [选项]... PATTERN [FILE]... -v 反向搜索 -n 显示匹配行号 -c 知...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/basis/commands/grep.html"}],["meta",{"property":"og:title","content":"grep"}],["meta",{"property":"og:description","content":"grep 过滤查找及“|”管道符 ①、命令名称：grep ②、英文原意： ③、命令所在路径：/usr/bin/grep ④、执行权限：所有用户 ⑤、功能描述：搜索数据；管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理 ⑥、语法： grep [选项]... PATTERN [FILE]... -v 反向搜索 -n 显示匹配行号 -c 知..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"grep\\",\\"description\\":\\"grep 过滤查找及“|”管道符 ①、命令名称：grep ②、英文原意： ③、命令所在路径：/usr/bin/grep ④、执行权限：所有用户 ⑤、功能描述：搜索数据；管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理 ⑥、语法： grep [选项]... PATTERN [FILE]... -v 反向搜索 -n 显示匹配行号 -c 知...\\"}"]]},"headers":[{"level":3,"title":"grep 过滤查找及“|”管道符","slug":"grep-过滤查找及-管道符","link":"#grep-过滤查找及-管道符","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"linux/basis/commands/grep.md","localizedDate":"2024年1月29日","excerpt":"<h3>grep 过滤查找及“|”管道符</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#\\" target=\\"_blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：grep</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：/usr/bin/grep</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：搜索数据；管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理</p>\\n<p>⑥、语法：</p>\\n<p>grep [选项]... PATTERN [FILE]...</p>\\n<ul>\\n<li>-v 反向搜索</li>\\n<li>-n 显示匹配行号</li>\\n<li>-c 知道有多少行含有匹配</li>\\n<li>-e 指定多个匹配模式</li>\\n</ul>","autoDesc":true}');export{k as comp,f as data};
