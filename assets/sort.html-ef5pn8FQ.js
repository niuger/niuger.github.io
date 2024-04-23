import{_ as e}from"./true-image-20220913170020223-Bz1Za6jR.js";import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as t,b as n,d as o,w as d,a as r,e as c}from"./app-D1uezr0R.js";const m={},p=n("h3",{id:"sort-排序数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sort-排序数据"},[n("span",null,"sort 排序数据")])],-1),u=r('<p>①、命令名称：sort</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：对数据进行排序</p><p>⑥、语法：</p><p>cat 【选项】 【文件】</p><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat demo.txt</span>
one
two
three
four
five

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># sort demo.txt</span>

five
four
one
three
two

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># sort ds.log</span>
<span class="token number">1</span>
<span class="token number">10</span>
<span class="token number">100</span>
<span class="token number">145</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">45</span>
<span class="token number">75</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># sort -n ds.log</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">10</span>
<span class="token number">45</span>
<span class="token number">75</span>
<span class="token number">100</span>
<span class="token number">145</span>

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># sort df.log</span>
Apr
Aug
Dec
Feb
Jan
Jul
Jun
Mar
May
Nov
Oct
Sep
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># sort -M df.log</span>
Jan
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Nov
Dec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-k 和 -t 参数在对按字段分隔的数据进行排序时非常有用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># sort -t &#39;:&#39; -k 3 -n /etc/passwd</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
pkiuser:x:17:17:Certificate System:/usr/share/pki:/sbin/nologin
named:x:25:25:Named:/var/named:/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按第三个字段——用户ID的数值排序</p><p>-n 参数在排序数值时非常有用，比如 du 命令的输出:( -r 参数将结果按降序输出)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># du -sh * | sort -nr</span>
921M    soft
16K     user1
<span class="token number">4</span>.0K    ds.log
<span class="token number">4</span>.0K    df.log
<span class="token number">4</span>.0K    demo.txt
<span class="token number">0</span>       ddopff.log
<span class="token number">0</span>       ddgff.log
<span class="token number">0</span>       ddg2ff.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(b,g){const s=a("RouteLink");return l(),t("div",null,[p,n("ul",null,[n("li",null,[o(s,{to:"/linux/basis/command.html#%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91"},{default:d(()=>[c("返回命令大全列表")]),_:1})])]),u])}const x=i(m,[["render",v],["__file","sort.html.vue"]]),_=JSON.parse('{"path":"/linux/basis/commands/sort.html","title":"sort","lang":"zh-CN","frontmatter":{"title":"sort","article":false,"timeline":false,"description":"sort 排序数据 ①、命令名称：sort ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：对数据进行排序 ⑥、语法： cat 【选项】 【文件】 -k 和 -t 参数在对按字段分隔的数据进行排序时非常有用 按第三个字段——用户ID的数值排序 -n 参数在排序数值时非常有用，比如 du 命令的输出:( -r 参数将结果按降序输出)","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/basis/commands/sort.html"}],["meta",{"property":"og:title","content":"sort"}],["meta",{"property":"og:description","content":"sort 排序数据 ①、命令名称：sort ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：对数据进行排序 ⑥、语法： cat 【选项】 【文件】 -k 和 -t 参数在对按字段分隔的数据进行排序时非常有用 按第三个字段——用户ID的数值排序 -n 参数在排序数值时非常有用，比如 du 命令的输出:( -r 参数将结果按降序输出)"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"sort\\",\\"description\\":\\"sort 排序数据 ①、命令名称：sort ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：对数据进行排序 ⑥、语法： cat 【选项】 【文件】 -k 和 -t 参数在对按字段分隔的数据进行排序时非常有用 按第三个字段——用户ID的数值排序 -n 参数在排序数值时非常有用，比如 du 命令的输出:( -r 参数将结果按降序输出)\\"}"]]},"headers":[{"level":3,"title":"sort 排序数据","slug":"sort-排序数据","link":"#sort-排序数据","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"linux/basis/commands/sort.md","localizedDate":"2024年1月29日","excerpt":"<h3>sort 排序数据</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91\\" target=\\"_blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：sort</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：对数据进行排序</p>\\n<p>⑥、语法：</p>\\n<p>cat 【选项】 【文件】</p>\\n<figure><figcaption></figcaption></figure>","autoDesc":true}');export{x as comp,_ as data};
