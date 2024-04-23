import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as i,b as n,d as l,w as p,a as u,e as o}from"./app-D1uezr0R.js";const d={},c=n("h3",{id:"du-查看使用空间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#du-查看使用空间"},[n("span",null,"du 查看使用空间")])],-1),r=u(`<p>①、命令名称：du</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：Linux du 命令也是查看使用空间的，但是与 df 命令不同的是 Linux du 命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的，这里介绍 Linux du 命令。</p><p>⑥、语法：</p><p>du [-ahskm] 文件或目录名称</p><p>选项与参数：</p><ul><li>-a ：列出所有的文件与目录容量，因为默认仅统计目录底下的文件量而已。</li><li>-h ：以人们较易读的容量格式 (G/M) 显示；</li><li>-s ：列出总量而已，而不列出每个各别的目录占用容量；</li><li>-S ：不包括子目录下的总计，与 -s 有点差别。</li><li>-k ：以 KBytes 列出容量显示；</li><li>-m ：以 MBytes 列出容量显示；</li></ul><p><strong>实例 1</strong></p><p>只列出当前目录下的所有文件夹容量（包括隐藏文件夹）:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># du</span>
<span class="token number">4</span>       ./c  <span class="token operator">&lt;=</span><span class="token operator">=</span>每个目录都会列出来
<span class="token number">942476</span>  ./soft <span class="token operator">&lt;=</span><span class="token operator">=</span>每个目录都会列出来
<span class="token number">942480</span>  <span class="token builtin class-name">.</span>  <span class="token operator">&lt;=</span><span class="token operator">=</span>这个目录<span class="token punctuation">(</span>.<span class="token punctuation">)</span>所占用的总量
<span class="token punctuation">..</span><span class="token punctuation">..</span>中间省略<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token number">12</span>      ./.gconfd   <span class="token operator">&lt;=</span><span class="token operator">=</span>包括隐藏文件的目录          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接输入 du 没有加任何选项时，则 du 会分析当前所在目录里的子目录所占用的硬盘空间。</p><p><strong>实例 2</strong></p><p>将文件的容量也列出来</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -a</span>
<span class="token number">4</span>       ./.bash_logout
<span class="token number">4</span>       ./.bash_profile
<span class="token number">4</span>       ./.bashrc
<span class="token number">4</span>       ./.ssh/id_rsa
<span class="token number">4</span>       ./.ssh/id_rsa.pub
<span class="token number">4</span>       ./.ssh/known_hosts
<span class="token number">12</span>      ./.ssh
<span class="token punctuation">..</span><span class="token punctuation">..</span>中间省略<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token number">8080</span>    <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例 3</strong></p><p>检查根目录底下每个目录所占用的容量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -sm /*</span>
<span class="token number">0</span>       /bin
<span class="token number">113</span>     /boot
<span class="token number">0</span>       /data
<span class="token number">0</span>       /dev
<span class="token number">1</span>       /dump.rdb
<span class="token number">367</span>     /etc
<span class="token number">921</span>     /home
<span class="token number">0</span>       /lib
<span class="token number">0</span>       /lib64
<span class="token number">1</span>       /main.log
<span class="token number">0</span>       /media
<span class="token number">0</span>       /mnt
<span class="token number">0</span>       /opt
du: 无法访问<span class="token string">&quot;/proc/14950&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/14951/task/14951/fd/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/14951/task/14951/fdinfo/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/14951/fd/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/14951/fdinfo/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
<span class="token number">0</span>       /proc
<span class="token number">8</span>       /root
<span class="token number">10</span>      /run
<span class="token number">0</span>       /sbin
<span class="token number">0</span>       /srv
<span class="token number">0</span>       /sys
<span class="token number">1</span>       /tmp
<span class="token number">4724</span>    /usr
<span class="token number">1725</span>    /var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通配符 * 来代表每个目录。</p><p>与 df 不一样的是，du 这个命令其实会直接到文件系统内去搜寻所有的文件数据。</p>`,21);function m(b,v){const s=e("RouteLink");return t(),i("div",null,[c,n("ul",null,[n("li",null,[l(s,{to:"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:p(()=>[o("返回命令大全列表")]),_:1})])]),r])}const g=a(d,[["render",m],["__file","du.html.vue"]]),f=JSON.parse('{"path":"/linux/basis/commands/du.html","title":"du","lang":"zh-CN","frontmatter":{"title":"du","article":false,"timeline":false,"description":"du 查看使用空间 ①、命令名称：du ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：Linux du 命令也是查看使用空间的，但是与 df 命令不同的是 Linux du 命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的，这里介绍 Linux du 命令。 ⑥、语法： du [-ahskm] 文件或目录名...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/basis/commands/du.html"}],["meta",{"property":"og:title","content":"du"}],["meta",{"property":"og:description","content":"du 查看使用空间 ①、命令名称：du ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：Linux du 命令也是查看使用空间的，但是与 df 命令不同的是 Linux du 命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的，这里介绍 Linux du 命令。 ⑥、语法： du [-ahskm] 文件或目录名..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"du\\",\\"description\\":\\"du 查看使用空间 ①、命令名称：du ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：Linux du 命令也是查看使用空间的，但是与 df 命令不同的是 Linux du 命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的，这里介绍 Linux du 命令。 ⑥、语法： du [-ahskm] 文件或目录名...\\"}"]]},"headers":[{"level":3,"title":"du 查看使用空间","slug":"du-查看使用空间","link":"#du-查看使用空间","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":1.93,"words":580},"filePathRelative":"linux/basis/commands/du.md","localizedDate":"2024年1月29日","excerpt":"<h3>du 查看使用空间</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86\\" target=\\"_blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：du</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：Linux du 命令也是查看使用空间的，但是与 df 命令不同的是 Linux du 命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的，这里介绍 Linux du 命令。</p>","autoDesc":true}');export{g as comp,f as data};
