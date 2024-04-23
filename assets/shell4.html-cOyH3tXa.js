import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c,b as s,e as n,d as l,a}from"./app-D1uezr0R.js";const o={},r=s("p",null,"会写好的脚本不仅能提高工作效率，还能有更多的时间做自己的事。最近在网上冲浪的时候，也注意收集一些大佬写过的脚本，汇总整理一下，欢迎收藏，与君共勉！",-1),d={href:"https://blog.csdn.net/weixin_42405670/article/details/89818462",target:"_blank",rel:"noopener noreferrer"},u=a(`<h1 id="实用脚本" tabindex="-1"><a class="header-anchor" href="#实用脚本"><span>实用脚本</span></a></h1><h2 id="归档" tabindex="-1"><a class="header-anchor" href="#归档"><span>归档</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> Files_To_Backup
/home/Christine/Project
/home/Christine/Downloads
/home/Does_not_exist
/home/Christine/Documents


<span class="token function">useradd</span> Christine



<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /archive/hourly



<span class="token function">cp</span> Files_To_Backup /archive/
<span class="token function">cp</span> Files_To_Backup /archive/hourly/


<span class="token function">groupadd</span> Archivers

<span class="token function">chgrp</span> Archivers /archive


<span class="token function">usermod</span> <span class="token parameter variable">-aG</span> Archivers Christine


<span class="token function">chmod</span> <span class="token number">775</span> /archive


<span class="token function">ls</span> <span class="token parameter variable">-l</span> /archive


<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/Christine/<span class="token punctuation">{</span>Project,Downloads,Documents<span class="token punctuation">}</span>

<span class="token function">mkdir</span> /home/Does_not_exist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建按日归档的脚本" tabindex="-1"><a class="header-anchor" href="#创建按日归档的脚本"><span>创建按日归档的脚本</span></a></h3><p>Daily_Archive.sh 脚本内容如下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># Daily_Archive - 归档指定文件和目录</span>
<span class="token comment">########################################################</span>
<span class="token comment"># 收集当前日期</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d<span class="token variable">)</span></span>
<span class="token comment"># 设置存档文件名</span>
<span class="token assign-left variable">FILE</span><span class="token operator">=</span>archive-<span class="token variable">$DATE</span>.tar.gz
<span class="token comment"># 设置配置和目标文件</span>
<span class="token assign-left variable">CONFIG_FILE</span><span class="token operator">=</span>/archive/Files_To_Backup
<span class="token assign-left variable">DESTINATION</span><span class="token operator">=</span>/archive/<span class="token variable">$FILE</span>
<span class="token comment">######### Main Script #########################</span>
<span class="token comment"># 检查备份配置文件是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$CONFIG_FILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment"># 确保配置文件仍然存在</span>
  <span class="token comment"># 如果它存在，什么也不做，继续。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">else</span> <span class="token comment"># 如果不存在，则发出错误并退出脚本。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$CONFIG_FILE</span> 不存在.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;由于缺少配置文件，备份未完成&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token comment"># 建立所有要备份的文件的名称</span>
<span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token number">1</span>              <span class="token comment"># 从配置文件的第 1 行开始。</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span><span class="token variable">$CONFIG_FILE</span>     <span class="token comment"># 将标准输入重定向到配置文件的名称</span>
<span class="token builtin class-name">read</span> FILE_NAME         <span class="token comment"># 读取第一条记录</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token comment"># 创建要备份的文件列表</span>
  <span class="token comment"># 确保文件或目录存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$FILE_NAME</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-d</span> <span class="token variable">$FILE_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># 如果文件存在，则将其名称添加到列表中。</span>
    <span class="token assign-left variable">FILE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$FILE_LIST</span> <span class="token variable">$FILE_NAME</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token comment"># 如果文件不存在，发出警告</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FILE_NAME</span>, 不存在.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;显然，我不会将其包含在此存档中.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;它在网上列出 <span class="token variable">$FILE_NO</span> 配置文件的.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;继续建立存档列表...&quot;</span>
    <span class="token builtin class-name">echo</span>
  <span class="token keyword">fi</span>
  <span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$FILE_NO <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span> <span class="token comment"># 将 LineFile 编号加一。</span>
  <span class="token builtin class-name">read</span> FILE_NAME            <span class="token comment"># 阅读下一条记录</span>
<span class="token keyword">done</span>
<span class="token comment">#######################################</span>
<span class="token comment"># 备份文件并压缩存档</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始存档...&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token function">tar</span> <span class="token parameter variable">-czf</span> <span class="token variable">$DESTINATION</span> <span class="token variable">$FILE_LIST</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token builtin class-name">echo</span> <span class="token string">&quot;存档完成&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;生成的存档文件是: <span class="token variable">$DESTINATION</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh Daily_Archive.sh</span>

开始存档<span class="token punctuation">..</span>.

存档完成
生成的存档文件是: /archive/archive-20220922.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建按小时归档的脚本" tabindex="-1"><a class="header-anchor" href="#创建按小时归档的脚本"><span>创建按小时归档的脚本</span></a></h3><p>Hourly_Archive.sh 脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 设置配置文件</span>
<span class="token assign-left variable">CONFIG_FILE</span><span class="token operator">=</span>/archive/hourly/Files_To_Backup
<span class="token comment"># 设置基本存档目标位置</span>
<span class="token assign-left variable">BASEDEST</span><span class="token operator">=</span>/archive/hourly
<span class="token comment"># 收集当前日期、月份和时间</span>
<span class="token assign-left variable">YERS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y<span class="token variable">)</span></span>
<span class="token assign-left variable">MONTH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%m<span class="token variable">)</span></span>
<span class="token assign-left variable">DAY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%d<span class="token variable">)</span></span>
<span class="token assign-left variable">TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%k%M<span class="token variable">)</span></span>
<span class="token comment"># 创建存档目标目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$BASEDEST</span>/<span class="token variable">$YERS</span>/<span class="token variable">$MONTH</span>/<span class="token variable">$DAY</span>
<span class="token comment"># 构建存档目标文件名</span>
<span class="token assign-left variable">DESTINATION</span><span class="token operator">=</span><span class="token variable">$BASEDEST</span>/<span class="token variable">$YERS</span>/<span class="token variable">$MONTH</span>/<span class="token variable">$DAY</span>/archive-<span class="token variable">$TIME</span>.tar.gz
<span class="token comment">########## Main Script ####################</span>
<span class="token comment"># 检查备份配置文件是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$CONFIG_FILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment"># 确保配置文件仍然存在</span>
  <span class="token comment"># 如果它存在，什么也不做，继续。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">else</span> <span class="token comment"># 如果不存在，则发出错误并退出脚本。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$CONFIG_FILE</span> 不存在.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;由于缺少配置文件，备份未完成&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token comment"># 建立所有要备份的文件的名称</span>
<span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token number">1</span>              <span class="token comment"># 从配置文件的第 1 行开始。</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span><span class="token variable">$CONFIG_FILE</span>     <span class="token comment"># 将标准输入重定向到配置文件的名称</span>
<span class="token builtin class-name">read</span> FILE_NAME         <span class="token comment"># 读取第一条记录</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token comment"># 创建要备份的文件列表</span>
  <span class="token comment"># 确保文件或目录存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$FILE_NAME</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-d</span> <span class="token variable">$FILE_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># 如果文件存在，则将其名称添加到列表中。</span>
    <span class="token assign-left variable">FILE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$FILE_LIST</span> <span class="token variable">$FILE_NAME</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token comment"># 如果文件不存在，发出警告</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FILE_NAME</span>, 不存在.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;显然，我不会将其包含在此存档中.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;它在网上列出 <span class="token variable">$FILE_NO</span> 配置文件的.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;继续建立存档列表...&quot;</span>
    <span class="token builtin class-name">echo</span>
  <span class="token keyword">fi</span>
  <span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$FILE_NO <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span> <span class="token comment"># 将 LineFile 编号加一。</span>
  <span class="token builtin class-name">read</span> FILE_NAME            <span class="token comment"># 阅读下一条记录</span>
<span class="token keyword">done</span>
<span class="token comment">#######################################</span>
<span class="token comment"># 备份文件并压缩存档</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始存档...&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token function">tar</span> <span class="token parameter variable">-czf</span> <span class="token variable">$DESTINATION</span> <span class="token variable">$FILE_LIST</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token builtin class-name">echo</span> <span class="token string">&quot;存档完成&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;生成的存档文件是: <span class="token variable">$DESTINATION</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh Hourly_Archive.sh</span>

开始存档<span class="token punctuation">..</span>.

存档完成
生成的存档文件是: /archive/hourly/2022/09/22/archive-1825.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理用户账户" tabindex="-1"><a class="header-anchor" href="#管理用户账户"><span>管理用户账户</span></a></h2><h3 id="需要的功能" tabindex="-1"><a class="header-anchor" href="#需要的功能"><span>需要的功能</span></a></h3><p>删除账户在管理账户工作中比较复杂。在删除账户时，至少需要4个步骤：</p><ul><li>(1) 获得正确的待删除用户账户名；</li><li>(2) 杀死正在系统上运行的属于该账户的进程；</li><li>(3) 确认系统中属于该账户的所有文件；</li><li>(4) 删除该用户账户。</li></ul><h3 id="创建脚本" tabindex="-1"><a class="header-anchor" href="#创建脚本"><span>创建脚本</span></a></h3>`,16),v={href:"http://delete-user.sh",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#Delete_User - 自动执行删除帐户的 4 个步骤</span>
<span class="token comment">###############################################################</span>
<span class="token comment"># 定义函数</span>
<span class="token comment">#####################################################</span>
<span class="token keyword">function</span> <span class="token function-name function">get_answer</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">unset</span> ANSWER
  <span class="token assign-left variable">ASK_COUNT</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$ANSWER</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token comment">#虽然没有给出答案，但请继续询问。</span>
    <span class="token assign-left variable">ASK_COUNT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$ASK_COUNT <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
    <span class="token keyword">case</span> <span class="token variable">$ASK_COUNT</span> <span class="token keyword">in</span> <span class="token comment">#如果用户在分配的时间内没有给出答案</span>
    <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;请回答问题&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;最后一次尝试...请回答问题&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">4</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;既然你拒绝回答这个问题...&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;退出程序.&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">exit</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">echo</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$LINE2</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment">#打印 2 行</span>
      <span class="token builtin class-name">echo</span> <span class="token variable">$LINE1</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$LINE2</span><span class="token string">&quot; <span class="token entity" title="\\c">\\c</span>&quot;</span>
    <span class="token keyword">else</span> <span class="token comment">#打印 1 行</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$LINE1</span><span class="token string">&quot; <span class="token entity" title="\\c">\\c</span>&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># 在超时前允许 60 秒回答</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">60</span> ANSWER
  <span class="token keyword">done</span>
  <span class="token comment"># 做一些变量清理</span>
  <span class="token builtin class-name">unset</span> LINE1
  <span class="token builtin class-name">unset</span> LINE2
<span class="token punctuation">}</span>

<span class="token comment">#####################################################</span>
<span class="token keyword">function</span> <span class="token function-name function">process_answer</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token variable">$ANSWER</span> <span class="token keyword">in</span>
  y <span class="token operator">|</span> Y <span class="token operator">|</span> YES <span class="token operator">|</span> <span class="token function">yes</span> <span class="token operator">|</span> Yes <span class="token operator">|</span> yEs <span class="token operator">|</span> yeS <span class="token operator">|</span> YEs <span class="token operator">|</span> yES<span class="token punctuation">)</span>
    <span class="token comment"># 如果用户回答“是”，则什么也不做。</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    <span class="token comment"># 如果用户回答“是”以外的任何内容，则退出脚本</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$EXIT_LINE1</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$EXIT_LINE2</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">exit</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token comment"># 做一些变量清理</span>
  <span class="token builtin class-name">unset</span> EXIT_LINE1
  <span class="token builtin class-name">unset</span> EXIT_LINE2
<span class="token punctuation">}</span>

<span class="token comment">##############################################</span>
<span class="token comment">############# Main Script ####################</span>
<span class="token comment"># 获取要检查的用户帐户名称</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 1 步 - 确定要删除的用户帐户名称&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;请输入用户的用户名 &quot;</span>
<span class="token assign-left variable">LINE2</span><span class="token operator">=</span><span class="token string">&quot;您希望从系统中删除的帐户:&quot;</span>
get_answer
<span class="token assign-left variable">USER_ACCOUNT</span><span class="token operator">=</span><span class="token variable">$ANSWER</span>
<span class="token comment"># 与脚本用户仔细检查这是正确的用户帐户</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot; <span class="token variable">$USER_ACCOUNT</span> 是用户帐户 &quot;</span>
<span class="token assign-left variable">LINE2</span><span class="token operator">=</span><span class="token string">&quot;你想从系统中删除? [y/n]&quot;</span>
get_answer
<span class="token comment"># 调用过程应答函数：如果用户回答“是”以外的任何内容，则退出脚本</span>
<span class="token assign-left variable">EXIT_LINE1</span><span class="token operator">=</span><span class="token string">&quot;因为 <span class="token variable">$USER_ACCOUNT</span> 不是账户 &quot;</span>
<span class="token assign-left variable">EXIT_LINE2</span><span class="token operator">=</span><span class="token string">&quot;您要删除的，我们将离开脚本...&quot;</span>
 
<span class="token comment">################################################################</span>
<span class="token comment"># 检查 USER_ACCOUNT 是否真的是系统上的帐户</span>
<span class="token assign-left variable">USER_ACCOUNT_RECORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> $USER_ACCOUNT<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment"># 如果没有找到账号，退出脚本</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;账户, <span class="token variable">$USER_ACCOUNT</span>, 未找到. &quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Leaving the script...&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;我找到了这个记录:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$USER_ACCOUNT_RECORD</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;这是正确的用户帐户吗? [y/n]&quot;</span>
get_answer
<span class="token comment"># 调用 process_answer 函数：如果用户回答“是”以外的任何内容，则退出脚本</span>
<span class="token assign-left variable">EXIT_LINE1</span><span class="token operator">=</span><span class="token string">&quot;因为帐户 , <span class="token variable">$USER_ACCOU</span>      NT, 未找到. &quot;</span>
<span class="token assign-left variable">EXIT_LINE2</span><span class="token operator">=</span><span class="token string">&quot;您要删除的，我们将离开脚本...&quot;</span>
process_answer
<span class="token comment">##################################################################</span>
<span class="token comment">##################################################################</span>
<span class="token comment">##################################################################</span>
<span class="token comment"># 搜索属于用户帐户的任何正在运行的进程</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 2 步 - 在属于用户帐户的系统上查找进程&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token function">ps</span> <span class="token parameter variable">-u</span> <span class="token variable">$USER_ACCOUNT</span> <span class="token operator">&gt;</span>/dev/null <span class="token comment">#用户进程是否正在运行?</span>
<span class="token keyword">case</span> <span class="token variable">$?</span> <span class="token keyword">in</span>
<span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment"># 没有为此用户帐户运行的进程</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;此帐户当前没有正在运行的进程&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment"># 为此用户帐户运行的进程。询问脚本用户是否希望我们终止进程。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$USER_ACCOUNT</span> 有以下进程正在运行: &quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token function">ps</span> <span class="token parameter variable">-u</span> <span class="token variable">$USER_ACCOUNT</span>
  <span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;你想让我杀死进程吗? [y/n]&quot;</span>
  get_answer
  <span class="token keyword">case</span> <span class="token variable">$ANSWER</span> <span class="token keyword">in</span>
  y <span class="token operator">|</span> Y <span class="token operator">|</span> YES <span class="token operator">|</span> <span class="token function">yes</span> <span class="token operator">|</span> Yes <span class="token operator">|</span> yEs <span class="token operator">|</span> yeS <span class="token operator">|</span> YEs <span class="token operator">|</span> yES<span class="token punctuation">)</span> <span class="token comment"># 如果用户回答“是”，</span>
    <span class="token comment"># 杀死用户帐户进程</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;杀死进程...&quot;</span>
    <span class="token comment"># 列出在变量 COMMAND_1 中运行代码的用户进程</span>
    <span class="token assign-left variable">COMMAND_1</span><span class="token operator">=</span><span class="token string">&quot;ps -u <span class="token variable">$USER_ACCOUNT</span> --no-heading&quot;</span>
    <span class="token comment"># 创建命令以在变量 COMMAND 3 中终止进程</span>
    <span class="token assign-left variable">COMMAND_3</span><span class="token operator">=</span><span class="token string">&quot;xargs -d <span class="token entity" title="\\\\">\\\\</span>n /usr/bin/sudo /bin/kill -9&quot;</span>
    <span class="token comment"># 通过管道命令一起杀死进程</span>
    <span class="token variable">$COMMAND_1</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token variable">$COMMAND_3</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Process(es) killed.&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span> <span class="token comment"># 如果用户回答“是”以外的任何内容，请不要杀死。</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;不会杀死进程&quot;</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment"># 创建用户帐户拥有的所有文件的报告</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 3 步 - 在系统上查找属于用户帐户的文件&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;创建所有文件的报告 <span class="token variable">$USER_ACCOUNT</span>.&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;建议您备份存档这些文件,&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;然后做两件事之一:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 1) 删除文件&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 2) 将文件的所有权更改为当前用户帐户.&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;请稍等。可能还要等一下...&quot;</span>
<span class="token assign-left variable">REPORT_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%y%m%d<span class="token variable">)</span></span>
<span class="token assign-left variable">REPORT_FILE</span><span class="token operator">=</span><span class="token variable">$USER_ACCOUNT</span><span class="token string">&quot;_Files_&quot;</span><span class="token variable">$REPORT_DATE</span><span class="token string">&quot;.rpt&quot;</span>
<span class="token function">find</span> / <span class="token parameter variable">-user</span> <span class="token variable">$USER_ACCOUNT</span> <span class="token operator">&gt;</span><span class="token variable">$REPORT_FILE</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;报告完成.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;报告名称: <span class="token variable">$REPORT_FILE</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;报告地点: <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment"># 删除用户帐户</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 4 步 - 删除用户帐户&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;删除 <span class="token variable">$USER_ACCOUNT</span>&#39;s 系统账户? [y/n]&quot;</span>
get_answer
<span class="token comment"># 调用 process_answer 函数：如果用户回答“是”以外的任何内容，则退出脚本</span>
<span class="token assign-left variable">EXIT_LINE1</span><span class="token operator">=</span><span class="token string">&quot;由于您不希望删除用户帐户,&quot;</span>
<span class="token assign-left variable">EXIT_LINE2</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$USER_ACCOUNT</span> 此时，退出脚本...&quot;</span>
process_answer
<span class="token function">userdel</span> <span class="token variable">$USER_ACCOUNT</span> <span class="token comment">#删除用户帐户</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;用户帐号, <span class="token variable">$USER_ACCOUNT</span>,已被删除&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行脚本" tabindex="-1"><a class="header-anchor" href="#运行脚本"><span>运行脚本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh delete-user.sh</span>
第 <span class="token number">1</span> 步 - 确定要删除的用户帐户名称


请输入用户的用户名
您希望从系统中删除的帐户: user2

user2 是用户帐户
你想从系统中删除? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span> y

我找到了这个记录:
user2:x:1005:1005::/home/user2:/bin/bash

这是正确的用户帐户吗? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span> y

第 <span class="token number">2</span> 步 - 在属于用户帐户的系统上查找进程

此帐户当前没有正在运行的进程


第 <span class="token number">3</span> 步 - 在系统上查找属于用户帐户的文件

创建所有文件的报告 user2.

建议您备份存档这些文件,
然后做两件事之一:
 <span class="token number">1</span><span class="token punctuation">)</span> 删除文件
 <span class="token number">2</span><span class="token punctuation">)</span> 将文件的所有权更改为当前用户帐户.

请稍等。可能还要等一下<span class="token punctuation">..</span>.

报告完成.
报告名称: user2_Files_220922.rpt
报告地点: /root


第 <span class="token number">4</span> 步 - 删除用户帐户


删除 user2&#39;s 系统账户? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span> y

用户帐号, user2,已被删除

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat user2_Files_220922.rpt</span>
/home/user2
/home/user2/.bash_logout
/home/user2/.bash_profile
/home/user2/.bashrc
/home/user2/.mozilla
/home/user2/.mozilla/extensions
/home/user2/.mozilla/plugins
/home/user2/.bash_history
/var/spool/mail/user2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户猜数字" tabindex="-1"><a class="header-anchor" href="#用户猜数字"><span>用户猜数字</span></a></h2><ul><li>脚本生成一个 100 以内的随机数,提示用户猜数字,根据用户的输入,提示用户猜对了,猜小了或猜大了,直至用户猜对脚本结束。</li><li>RANDOM 为系统自带的系统变量,值为 0‐32767的随机数</li><li>使用取余算法将随机数变为 1‐100 的随机数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">num</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token environment constant">RANDOM</span>%100+1<span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$num</span>&quot;</span>

<span class="token comment"># 使用 read 提示用户猜数字</span>
<span class="token comment"># 使用 if 判断用户猜数字的大小关系:‐eq(等于),‐ne(不等于),‐gt(大于),‐ge(大于等于),</span>
<span class="token comment"># ‐lt(小于),‐le(小于等于)</span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span> 
 <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;计算机生成了一个 1‐100 的随机数,你猜: &quot;</span> cai  
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$cai</span> <span class="token parameter variable">-eq</span> <span class="token variable">$num</span> <span class="token punctuation">]</span>   
    <span class="token keyword">then</span>     
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;恭喜,猜对了&quot;</span>     
        <span class="token builtin class-name">exit</span>  
     <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$cai</span> <span class="token parameter variable">-gt</span> <span class="token variable">$num</span> <span class="token punctuation">]</span>  
     <span class="token keyword">then</span>       
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oops,猜大了&quot;</span>    
       <span class="token keyword">else</span>      
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oops,猜小了&quot;</span> 
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看有多少远程的-ip-在连接本机" tabindex="-1"><a class="header-anchor" href="#查看有多少远程的-ip-在连接本机"><span>查看有多少远程的 IP 在连接本机</span></a></h2><p>查看有多少远程的 IP 在连接本机(不管是通过 ssh 还是 web 还是 ftp 都统计)</p><ul><li>netstat ‐atn 可以查看本机所有连接的状态,</li><li>‐a 查看所有</li><li>-t 仅显示 tcp 连接的信息,</li><li>‐n 数字格式显示</li><li>Local Address(第四列是本机的 IP 和端口信息)</li><li>Foreign Address(第五列是远程主机的 IP 和端口信息)</li><li>使用 awk 命令仅显示第 5 列数据,再显示第 1 列 IP 地址的信息</li><li>sort 可以按数字大小排序,最后使用 uniq 将多余重复的删除,并统计重复的次数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">netstat</span> <span class="token parameter variable">-atn</span>  <span class="token operator">|</span>  <span class="token function">awk</span>  <span class="token string">&#39;{print $5}&#39;</span>  <span class="token operator">|</span> <span class="token function">awk</span>  <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span>  <span class="token operator">|</span>  <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld"><span>helloworld</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">example</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello world!&quot;</span>
<span class="token punctuation">}</span>
example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打印-tomcat-的pid" tabindex="-1"><a class="header-anchor" href="#打印-tomcat-的pid"><span>打印 tomcat 的pid</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token assign-left variable">v1</span><span class="token operator">=</span><span class="token string">&quot;Hello&quot;</span>
<span class="token assign-left variable">v2</span><span class="token operator">=</span><span class="token string">&quot;world&quot;</span>
<span class="token assign-left variable">v3</span><span class="token operator">=</span><span class="token variable">\${v1}</span><span class="token variable">\${v2}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$v3</span>

<span class="token assign-left variable">pidlist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> apache-tomcat-7.0.75<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;grep&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$pidlist</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tomcat Id list :<span class="token variable">$pidlist</span>&quot;</span>  //显示pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本编写-剪刀-、-石头、布游戏" tabindex="-1"><a class="header-anchor" href="#脚本编写-剪刀-、-石头、布游戏"><span>脚本编写 剪刀 、 石头、布游戏</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">game</span><span class="token operator">=</span><span class="token punctuation">(</span>石头 剪刀 布<span class="token punctuation">)</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token environment constant">RANDOM</span>%3<span class="token punctuation">]</span>
<span class="token assign-left variable">computer</span><span class="token operator">=</span><span class="token variable">\${game<span class="token punctuation">[</span>$sum<span class="token punctuation">]</span>}</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;请根据下列提示选择您的出拳手势&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 1. 石头&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 2. 剪刀&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 3. 布 &quot;</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请选择 1-3 ：&quot;</span> person
<span class="token keyword">case</span> <span class="token variable">$person</span> <span class="token keyword">in</span>
<span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;平局&quot;</span>
    <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;你赢&quot;</span>
    <span class="token keyword">else</span> 
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;计算机赢&quot;</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
 <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;计算机赢&quot;</span>
    <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span> 
    <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;平局&quot;</span>
    <span class="token keyword">else</span> 
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;你赢&quot;</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
 <span class="token keyword">then</span>  
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;你赢&quot;</span>
   <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span>
   <span class="token keyword">then</span> 
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;计算机赢&quot;</span>
   <span class="token keyword">else</span> 
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;平局&quot;</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;必须输入1-3 的数字&quot;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九九乘法表" tabindex="-1"><a class="header-anchor" href="#九九乘法表"><span>九九乘法表</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">9</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span> 
 <span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> $i<span class="token variable">\`</span></span>
 <span class="token keyword">do</span> 
 <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$j</span>*<span class="token variable">$i</span>=$[i*j] &quot;</span>
 <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本用源码来安装-memcached-服务器" tabindex="-1"><a class="header-anchor" href="#脚本用源码来安装-memcached-服务器"><span>脚本用源码来安装 memcached 服务器</span></a></h2><p>注意: 如果软件的下载链接过期了,请更新 memcached 的下载链接</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">wget</span> http://www.memcached.org/files/memcached-1.5.1.tar.gz
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc
<span class="token function">tar</span> <span class="token parameter variable">-xf</span>  memcached‐1.5.1.tar.gz
<span class="token builtin class-name">cd</span> memcached‐1.5.1
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测本机当前用户是否为超级管理员" tabindex="-1"><a class="header-anchor" href="#检测本机当前用户是否为超级管理员"><span>检测本机当前用户是否为超级管理员</span></a></h2><p>检测本机当前用户是否为超级管理员,如果是管理员,则使用 yum 安装 vsftpd,如果不是,则提示您非管理员(使用字串对比版本)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">==</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span> 
<span class="token keyword">then</span> 
 yum <span class="token parameter variable">-y</span> <span class="token function">install</span> vsftpd
<span class="token keyword">else</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;您不是管理员，没有权限安装软件&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if-运算表达式" tabindex="-1"><a class="header-anchor" href="#if-运算表达式"><span>if 运算表达式</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash -xv</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wo ai wenmin&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wo ai wenxing &quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token parameter variable">-eq</span> <span class="token number">4</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wo de xin &quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wo de ai &quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本-杀掉-tomcat-进程并重新启动" tabindex="-1"><a class="header-anchor" href="#脚本-杀掉-tomcat-进程并重新启动"><span>脚本 杀掉 tomcat 进程并重新启动</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#kill tomcat pid</span>

<span class="token assign-left variable">pidlist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> apache-tomcat-7.0.75<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;grep&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>  <span class="token comment">#找到tomcat的PID号</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;tomcat Id list :<span class="token variable">$pidlist</span>&quot;</span>  //显示pid

<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pidlist</span>  <span class="token comment">#杀掉改进程</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;KILL <span class="token variable">$pidlist</span>:&quot;</span> //提示进程以及被杀掉

<span class="token builtin class-name">echo</span> <span class="token string">&quot;service stop success&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;start tomcat&quot;</span>

<span class="token builtin class-name">cd</span> /opt/apache-tomcat-7.0.75

<span class="token builtin class-name">pwd</span> 

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> work/*

<span class="token builtin class-name">cd</span> bin

./startup.sh <span class="token comment">#;tail -f ../logs/catalina.out</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打印国际象棋棋盘" tabindex="-1"><a class="header-anchor" href="#打印国际象棋棋盘"><span>打印国际象棋棋盘</span></a></h2><ul><li><p>打印国际象棋棋盘</p></li><li><p>设置两个变量,i 和 j,一个代表行,一个代表列,国际象棋为 8*8 棋盘</p></li><li><p>i=1 是代表准备打印第一行棋盘,第 1 行棋盘有灰色和蓝色间隔输出,总共为 8 列</p></li><li><p>i=1,j=1 代表第 1 行的第 1 列;i=2,j=3 代表第 2 行的第 3 列</p></li><li><p>棋盘的规律是 i+j 如果是偶数,就打印蓝色色块,如果是奇数就打印灰色色块</p></li><li><p>使用 echo ‐ne 打印色块,并且打印完成色块后不自动换行,在同一行继续输出其他色块</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">8</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
   <span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">8</span><span class="token punctuation">}</span>
   <span class="token keyword">do</span>
    <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span>i+j<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span>  $<span class="token punctuation">[</span>sum%2<span class="token punctuation">]</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[46m  <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[47m  <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token keyword">fi</span>
   <span class="token keyword">done</span>
   <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计当前-linux-系统中可以登录计算机的账户有多少个" tabindex="-1"><a class="header-anchor" href="#统计当前-linux-系统中可以登录计算机的账户有多少个"><span>统计当前 Linux 系统中可以登录计算机的账户有多少个</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#方法 1:</span>
<span class="token function">grep</span> <span class="token string">&quot;bash$&quot;</span> /etc/passwd <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment">#方法 2：</span>
<span class="token function">awk</span> <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;/bash$/{x++}end{print x}&#39;</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="备份-mysql-表数据" tabindex="-1"><a class="header-anchor" href="#备份-mysql-表数据"><span>备份 MySQL 表数据</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token builtin class-name">source</span> /etc/profile
<span class="token assign-left variable">dbName</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">tableName</span><span class="token operator">=</span>db
<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token variable">\`</span></span><span class="token punctuation">]</span><span class="token string">&#39; start loading data...&#39;</span>

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span> <span class="token parameter variable">-P3306</span> <span class="token variable">\${dbName}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;LOAD DATA LOCAL INFILE &#39;# /home/wenmin/wenxing.txt&#39; INTO TABLE <span class="token variable">\${tableName}</span> FIELDS TERMINATED BY &#39;;&#39;&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token variable">\`</span></span><span class="token punctuation">]</span><span class="token string">&#39; end loading data...&#39;</span>
<span class="token builtin class-name">exit</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用死循环实时显示-eth0-网卡发送的数据包流量" tabindex="-1"><a class="header-anchor" href="#使用死循环实时显示-eth0-网卡发送的数据包流量"><span>使用死循环实时显示 eth0 网卡发送的数据包流量</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&#39;本地网卡 ens33 流量信息如下：&#39;</span>
 <span class="token function">ifconfig</span> ens33 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;RX pack&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span>
     <span class="token function">ifconfig</span> ens33 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;TX pack&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span>
 <span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写脚本测试-192-168-4-0-24-整个网段中哪些主机处于开机状态-哪些主机处于关机" tabindex="-1"><a class="header-anchor" href="#编写脚本测试-192-168-4-0-24-整个网段中哪些主机处于开机状态-哪些主机处于关机"><span>编写脚本测试 192.168.4.0/24 整个网段中哪些主机处于开机状态，哪些主机处于关机</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 状态(for 版本)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">254</span><span class="token punctuation">}</span>
<span class="token keyword">do</span> 
 <span class="token comment"># 每隔0.3秒ping一次，一共ping2次，并以1毫秒为单位设置ping的超时时间</span>
 <span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">2</span> <span class="token parameter variable">-i</span> <span class="token number">0.3</span> <span class="token parameter variable">-W</span> <span class="token number">1</span> <span class="token number">192.168</span>.1.<span class="token variable">$i</span> <span class="token operator">&amp;&gt;</span>/dev/null
     <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.<span class="token variable">$i</span> is up&quot;</span>
 <span class="token keyword">else</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.<span class="token variable">$i</span> is down&quot;</span>
 <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示用户输入用户名和密码-脚本自动创建相应的账户及配置密码。如果用户" tabindex="-1"><a class="header-anchor" href="#提示用户输入用户名和密码-脚本自动创建相应的账户及配置密码。如果用户"><span>提示用户输入用户名和密码,脚本自动创建相应的账户及配置密码。如果用户</span></a></h2><p>不输入账户名,则提示必须输入账户名并退出脚本;如果用户不输入密码,则统一使用默认的 123456 作为默认密码。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入用户名：&quot;</span> user

<span class="token comment">#使用‐z 可以判断一个变量是否为空,如果为空,提示用户必须输入账户名,并退出脚本,退出码为 2</span>
<span class="token comment">#没有输入用户名脚本退出后,使用$?查看的返回码为 2</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$user</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot; 您不需要输入账户名&quot;</span> 
 <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">fi</span>

<span class="token comment">#使用 stty ‐echo 关闭 shell 的回显功能</span>
<span class="token comment">#使用 stty  echo 打开 shell 的回显功能</span>
stty <span class="token parameter variable">-echo</span> 
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入密码：&quot;</span> pass
stty <span class="token builtin class-name">echo</span> 
<span class="token assign-left variable">pass</span><span class="token operator">=</span><span class="token variable">\${pass<span class="token operator">:-</span>123456}</span>
<span class="token function">useradd</span> <span class="token string">&quot;<span class="token variable">$user</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$pass</span>&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token string">&quot;<span class="token variable">$user</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用脚本对输入的三个整数进行排序" tabindex="-1"><a class="header-anchor" href="#使用脚本对输入的三个整数进行排序"><span>使用脚本对输入的三个整数进行排序</span></a></h2>`,43),k=s("ul",null,[s("li",null,[n('不管谁大谁小,最后都打印 echo "'),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mi",null,"u"),s("mi",null,"m"),s("mn",null,"1"),s("mo",{separator:"true"},",")]),s("annotation",{encoding:"application/x-tex"},"num1,")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},",")])])]),n('num2,$num3"')]),s("li",null,"num1 中永远存最小的值,num2 中永远存中间值,num3 永远存最大值"),s("li",null,[n("如果输入的不是这样的顺序,则改变数的存储顺序,如:可以将 num1 和 num2 的值对调"),s("br"),n(" tmp=0")]),s("li",null,"如果 num1 大于 num2,就把 num1 和和 num2 的值对调,确保 num1 变量中存的是最小值")],-1),b=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 依次提示用户输入 3 个整数,脚本根据数字大小依次排序输出 3 个数字</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot; 请输入一个整数：&quot;</span> num1
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot; 请输入一个整数：&quot;</span> num2
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot; 请输入一个整数:  &quot;</span> num3

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num1</span> <span class="token parameter variable">-gt</span> <span class="token variable">$num2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token assign-left variable">tmp</span><span class="token operator">=</span><span class="token variable">$num1</span>
 <span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token variable">$num2</span>
 <span class="token assign-left variable">num2</span><span class="token operator">=</span>tmp
<span class="token keyword">fi</span>

<span class="token comment"># 如果 num1 大于 num3,就把 num1 和 num3 对调,确保 num1 变量中存的是最小值</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num1</span> <span class="token parameter variable">-gt</span> <span class="token variable">$num3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token assign-left variable">tmp</span><span class="token operator">=</span><span class="token variable">$num1</span>
 <span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token variable">$num3</span>
 <span class="token assign-left variable">num3</span><span class="token operator">=</span><span class="token variable">$tmp</span>
<span class="token keyword">fi</span>

<span class="token comment"># 如果 num2 大于 num3,就把 num2 和 num3 对调,确保 num2 变量中存的是最小值</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num2</span> <span class="token parameter variable">-gt</span> <span class="token variable">$num3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token assign-left variable">tmp</span><span class="token operator">=</span><span class="token variable">$num2</span>
 <span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token variable">$num3</span>
 <span class="token assign-left variable">num3</span><span class="token operator">=</span><span class="token variable">$tmp</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;排序后数据（从小到大）为：<span class="token variable">$num1</span>,<span class="token variable">$num2</span>,<span class="token variable">$num3</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据计算机当前时间-返回问候语-可以将该脚本设置为开机启动" tabindex="-1"><a class="header-anchor" href="#根据计算机当前时间-返回问候语-可以将该脚本设置为开机启动"><span>根据计算机当前时间，返回问候语，可以将该脚本设置为开机启动</span></a></h2><p><code>00‐12</code> 点为早晨,<code>12‐18</code> 点为下午,<code>18‐24</code> 点为晚上</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 使用 date 命令获取时间后,if 判断时间的区间,确定问候语内容</span>
<span class="token assign-left variable">tm</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%H<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$tm</span> <span class="token parameter variable">-le</span> <span class="token number">12</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&quot;Good Morning <span class="token environment constant">$USER</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$tm</span> <span class="token parameter variable">-gt</span> <span class="token number">12</span> <span class="token parameter variable">-a</span> <span class="token variable">$tm</span> <span class="token parameter variable">-le</span> <span class="token number">18</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&quot;Good Afternoon <span class="token environment constant">$USER</span>&quot;</span>
<span class="token keyword">else</span>
   <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&quot;Good Night <span class="token environment constant">$USER</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;当前时间是:<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%Y‐%m‐%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[34m<span class="token variable">$msg</span><span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-i-lov-cls-写入到-txt-文件中" tabindex="-1"><a class="header-anchor" href="#将-i-lov-cls-写入到-txt-文件中"><span>将 I lov cls 写入到 txt 文件中</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">cd</span> /home/wenmin/
<span class="token function">touch</span> wenxing.txt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I lov cls&quot;</span> <span class="token operator">&gt;&gt;</span>wenxing.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本编写-for-循环判断" tabindex="-1"><a class="header-anchor" href="#脚本编写-for-循环判断"><span>脚本编写 for 循环判断</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span> 
 <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$s</span>+<span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token keyword">done</span> 

<span class="token builtin class-name">echo</span> <span class="token variable">$s</span>

<span class="token assign-left variable">r</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>x<span class="token operator">&lt;</span><span class="token number">9</span><span class="token punctuation">;</span>x<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span> 
 <span class="token assign-left variable">a</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$a</span>+<span class="token variable">$x</span><span class="token punctuation">]</span> 
<span class="token builtin class-name">echo</span> <span class="token variable">$x</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>y<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>y<span class="token operator">&lt;</span><span class="token number">9</span><span class="token punctuation">;</span>y<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span> 
 <span class="token assign-left variable">b</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$b</span>+<span class="token variable">$y</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$y</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$r</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$a</span>+<span class="token variable">$b</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wenmin xihuan <span class="token variable">$i</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wenmin xihuan <span class="token variable">$j</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="每周-5-使用-tar-命令备份-var-log-下的所有日志文件" tabindex="-1"><a class="header-anchor" href="#每周-5-使用-tar-命令备份-var-log-下的所有日志文件"><span>每周 5 使用 tar 命令备份/var/log 下的所有日志文件</span></a></h2><p><code>vim /root/logbak.sh</code></p><ul><li>编写备份脚本,备份后的文件名包含日期标签,防止后面的备份将前面的备份数据覆盖</li><li>注意 date 命令需要使用反引号括起来</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">tar</span> <span class="token parameter variable">-czf</span> log-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>.tar.gz /var/log 

<span class="token comment"># crontab -e #编写计划任务，执行备份脚本</span>
00 03 * * <span class="token number">5</span> /home/wenmin/datas/logbak.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本编写-求和-函数运算-function-xx" tabindex="-1"><a class="header-anchor" href="#脚本编写-求和-函数运算-function-xx"><span>脚本编写 求和 函数运算 function xx()</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 <span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$s</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your parameter &quot;</span> p1
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your parameter &quot;</span> p2

<span class="token function">sum</span> <span class="token variable">$p1</span> <span class="token variable">$p2</span>

<span class="token keyword">function</span> <span class="token function-name function">multi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 <span class="token assign-left variable">r</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token assign-left variable">r</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>/<span class="token variable">$2</span><span class="token punctuation">]</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$r</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your parameter &quot;</span> x1
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your parameter &quot;</span> x2

multi <span class="token variable">$x1</span> <span class="token variable">$x2</span>

<span class="token assign-left variable">v1</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">v2</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token builtin class-name">let</span> <span class="token assign-left variable">v3</span><span class="token operator">=</span><span class="token variable">$v1</span>+<span class="token variable">$v2</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$v3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本编写-case-—-esac-分支结构表达式" tabindex="-1"><a class="header-anchor" href="#脚本编写-case-—-esac-分支结构表达式"><span>脚本编写 case — esac 分支结构表达式</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span> 
<span class="token number">1</span><span class="token punctuation">)</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wenmin &quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token punctuation">)</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wenxing &quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> 
<span class="token number">3</span><span class="token punctuation">)</span>  
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;wemchang &quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">4</span><span class="token punctuation">)</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;yijun&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">5</span><span class="token punctuation">)</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;sinian&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">6</span><span class="token punctuation">)</span>  
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;sikeng&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">7</span><span class="token punctuation">)</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;yanna&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;danlian&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> 
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义要监控的页面地址-对-tomcat-状态进行重启或维护" tabindex="-1"><a class="header-anchor" href="#定义要监控的页面地址-对-tomcat-状态进行重启或维护"><span>定义要监控的页面地址，对 tomcat 状态进行重启或维护</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment"># 获取tomcat PPID  </span>
<span class="token assign-left variable">TomcatID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> tomcat <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;apache-tomcat-7.0.75&#39;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;grep&#39;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>  

<span class="token comment"># tomcat_startup  </span>
<span class="token assign-left variable">StartTomcat</span><span class="token operator">=</span>/opt/apache-tomcat-7.0.75/bin/startup.sh  


<span class="token comment">#TomcatCache=/usr/apache-tomcat-5.5.23/work  </span>

<span class="token comment"># 定义要监控的页面地址  </span>
<span class="token assign-left variable">WebUrl</span><span class="token operator">=</span>http://192.168.254.118:8080/

<span class="token comment"># 日志输出  </span>
<span class="token assign-left variable">GetPageInfo</span><span class="token operator">=</span>/dev/null  
<span class="token assign-left variable">TomcatMonitorLog</span><span class="token operator">=</span>/tmp/TomcatMonitor.log  

<span class="token function-name function">Monitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token punctuation">{</span>  
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;[info]开始监控tomcat...[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&#39;%F %H:%M:%S&#39;</span><span class="token variable">)</span></span>]&quot;</span>  
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$TomcatID</span> <span class="token punctuation">]</span>
 <span class="token keyword">then</span>  
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;[info]tomcat进程ID为:<span class="token variable">$TomcatID</span>.&quot;</span>  
      <span class="token comment"># 获取返回状态码  </span>
      <span class="token assign-left variable">TomcatServiceCode</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-o</span> $GetPageInfo <span class="token parameter variable">-m</span> <span class="token number">10</span> --connect-timeout <span class="token number">10</span> $WebUrl <span class="token parameter variable">-w</span> %<span class="token punctuation">{</span>http_code<span class="token punctuation">}</span><span class="token variable">)</span></span>  
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$TomcatServiceCode</span> <span class="token parameter variable">-eq</span> <span class="token number">200</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>  
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;[info]返回码为<span class="token variable">$TomcatServiceCode</span>,tomcat启动成功,页面正常.&quot;</span>  
      <span class="token keyword">else</span>  
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;[error]访问出错，状态码为<span class="token variable">$TomcatServiceCode</span>,错误日志已输出到<span class="token variable">$GetPageInfo</span>&quot;</span>  
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;[error]开始重启tomcat&quot;</span>  
          <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$TomcatID</span>  <span class="token comment"># 杀掉原tomcat进程  </span>
          <span class="token function">sleep</span> <span class="token number">3</span>  
          <span class="token comment">#rm -rf $TomcatCache # 清理tomcat缓存  </span>
          <span class="token variable">$StartTomcat</span>  
      <span class="token keyword">fi</span>  
      <span class="token keyword">else</span>  
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;[error]进程不存在!tomcat自动重启...&quot;</span>  
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;[info]<span class="token variable">$StartTomcat</span>,请稍候......&quot;</span>  
      <span class="token comment">#rm -rf $TomcatCache  </span>
      <span class="token variable">$StartTomcat</span>  
    <span class="token keyword">fi</span>  
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;------------------------------&quot;</span>  
   <span class="token punctuation">}</span>  
   Monitor<span class="token operator">&gt;&gt;</span><span class="token variable">$TomcatMonitorLog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过位置变量创建-linux-系统账户及密码" tabindex="-1"><a class="header-anchor" href="#通过位置变量创建-linux-系统账户及密码"><span>通过位置变量创建 Linux 系统账户及密码</span></a></h2><p><code>$1</code> 是执行脚本的第一个参数，<code>$2</code> 是执行脚本的第二个参数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">useradd</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对变量的传入与获取个数及打印" tabindex="-1"><a class="header-anchor" href="#对变量的传入与获取个数及打印"><span>对变量的传入与获取个数及打印</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$0</span> <span class="token variable">$1</span> <span class="token variable">$2</span> <span class="token variable">$3</span>&quot;</span>  // 传入三个参数
<span class="token builtin class-name">echo</span> <span class="token variable">$#</span>    //获取传入参数的数量
<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>    //打印获取传入参数
<span class="token builtin class-name">echo</span> <span class="token variable">$*</span>    //打印获取传入参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实时监控本机内存和硬盘剩余空间-剩余内存小于500m、根分区剩余空间小于1000m时-发送报警邮件给root管理员" tabindex="-1"><a class="header-anchor" href="#实时监控本机内存和硬盘剩余空间-剩余内存小于500m、根分区剩余空间小于1000m时-发送报警邮件给root管理员"><span>实时监控本机内存和硬盘剩余空间，剩余内存小于500M、根分区剩余空间小于1000M时，发送报警邮件给root管理员</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 提取根分区剩余空间</span>
<span class="token assign-left variable">disk_size</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> / <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/\\//{print $4}&#39;</span><span class="token variable">)</span></span>

<span class="token comment"># 提取内存剩余空空间</span>
<span class="token assign-left variable">mem_size</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">free</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/Mem/{print $4}&#39;</span><span class="token variable">)</span></span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span> 
<span class="token comment"># 注意内存和磁盘提取的空间大小都是以 Kb 为单位</span>
<span class="token keyword">if</span>  <span class="token punctuation">[</span>  <span class="token variable">$disk_size</span> <span class="token parameter variable">-le</span> <span class="token number">512000</span> <span class="token parameter variable">-a</span> <span class="token variable">$mem_size</span> <span class="token parameter variable">-le</span> <span class="token number">1024000</span>  <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    mail  ‐s  <span class="token string">&quot;Warning&quot;</span>  root  <span class="token operator">&lt;&lt;</span><span class="token string">EOF
 Insufficient resources,资源不足
EOF</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查指定目录下是否存在-对应-文件" tabindex="-1"><a class="header-anchor" href="#检查指定目录下是否存在-对应-文件"><span>检查指定目录下是否存在 对应 文件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /home/wenmin/datas <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File exists&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本定义while循环语句" tabindex="-1"><a class="header-anchor" href="#脚本定义while循环语句"><span>脚本定义while循环语句</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /home/wenmin/datas <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File exists&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),h={href:"http://while.sh",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-le</span> <span class="token number">100</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$s</span> + <span class="token variable">$i</span><span class="token punctuation">]</span>
    <span class="token assign-left variable">i</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$i</span> + <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$s</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一键部署-lnmp-rpm-包版本" tabindex="-1"><a class="header-anchor" href="#一键部署-lnmp-rpm-包版本"><span>一键部署 LNMP（RPM 包版本）</span></a></h2><ul><li><p>使用 yum 安装部署 LNMP,需要提前配置好 yum 源,否则该脚本会失败</p></li><li><p>本脚本使用于 centos7.2 或 RHEL7.2</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> httpd
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mariadb mariadb-devel mariadb-server
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> php php-mysql

systemctl start httpd mariadb
systemctl <span class="token builtin class-name">enable</span> httpd mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取控制台传入参数" tabindex="-1"><a class="header-anchor" href="#读取控制台传入参数"><span>读取控制台传入参数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">7</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your name &quot;</span> NAME
<span class="token builtin class-name">echo</span> <span class="token variable">$NAME</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">11</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input you age &quot;</span> AGE
<span class="token builtin class-name">echo</span> <span class="token variable">$AGE</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">15</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your friend &quot;</span> FRIEND
<span class="token builtin class-name">echo</span> <span class="token variable">$FRIEND</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">16</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;input your love &quot;</span> LOVE
<span class="token builtin class-name">echo</span> <span class="token variable">$LOVE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本实现-复制" tabindex="-1"><a class="header-anchor" href="#脚本实现-复制"><span>脚本实现 复制</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">cp</span> <span class="token variable">$1</span> <span class="token variable">$2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本实现文件存在与否的判断" tabindex="-1"><a class="header-anchor" href="#脚本实现文件存在与否的判断"><span>脚本实现文件存在与否的判断</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> file.txt <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件存在&quot;</span>
<span class="token keyword">else</span> 
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件不存在&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监测磁盘空间" tabindex="-1"><a class="header-anchor" href="#监测磁盘空间"><span>监测磁盘空间</span></a></h2><h3 id="需要的功能-1" tabindex="-1"><a class="header-anchor" href="#需要的功能-1"><span>需要的功能</span></a></h3><p>你要用到的第一个工具是 du 命令。该命令能够显示出单个文件和目录的磁盘使用情况。 -s 选项用来总结目录一级的整体使用状况。这在计算单个用户使用的总体磁盘空间时很方便。下面的例子是使用 du 命令总结/home目录下每个用户的$HOME目录的磁盘占用情况。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -s /home/*</span>
<span class="token number">12</span>      /home/barbara
<span class="token number">12</span>      /home/christine
<span class="token number">108</span>     /home/shell
<span class="token number">942476</span>  /home/soft
<span class="token number">12</span>      /home/tim
<span class="token number">16</span>      /home/user1
<span class="token number">16</span>      /home/user2

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -s /var/log/*</span>
<span class="token number">6308</span>    /var/log/anaconda
<span class="token number">988</span>     /var/log/ansible.log
<span class="token number">12980</span>   /var/log/audit
<span class="token number">0</span>       /var/log/boot.log
<span class="token number">12</span>      /var/log/boot.log-20220914
<span class="token number">12</span>      /var/log/boot.log-20220915
<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -S /var/log/*</span>
<span class="token number">6308</span>    /var/log/anaconda
<span class="token number">988</span>     /var/log/ansible.log
<span class="token number">12980</span>   /var/log/audit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-S （大写的S）选项能更适合我们的目的，它为每个目录和子目录分别提供了总计信息。这样你就能快速地定位问题的根源。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Big_Users - 在各种目录中查找大磁盘空间用户</span>
<span class="token comment">###############################################################</span>
<span class="token assign-left variable">CHECK_DIRECTORIES</span><span class="token operator">=</span><span class="token string">&quot; /var/log /home&quot;</span> <span class="token comment">#要检查的目录</span>
<span class="token comment">############## Main Script #################################</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d&#39;</span><span class="token variable">)</span></span>          <span class="token comment">#报告文件的日期</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&gt;</span>disk_space_<span class="token variable">$DATE</span>.rpt      <span class="token comment">#制作报告文件 STDOUT</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;十大磁盘空间使用率&quot;</span> <span class="token comment">#报告标题</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;来自 <span class="token variable">$CHECK_DIRECTORIES</span> 目录&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">DIR_CHECK</span> <span class="token keyword">in</span> <span class="token variable">$CHECK_DIRECTORIES</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">$DIR_CHECK</span> 目录:&quot;</span>
  <span class="token comment"># 在此目录中创建前十名磁盘空间用户的列表</span>
  <span class="token function">du</span> <span class="token parameter variable">-S</span> <span class="token variable">$DIR_CHECK</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span>
    <span class="token function">sort</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span>
    <span class="token function">sed</span> <span class="token string">&#39;{11,$D; =}&#39;</span> <span class="token operator">|</span>
    <span class="token function">sed</span> <span class="token string">&#39;N; s/\\n/ /&#39;</span> <span class="token operator">|</span>
    <span class="token function">gawk</span> <span class="token string">&#39;{printf $1 &quot;:&quot; &quot;\\t&quot; $2 &quot;\\t&quot; $3 &quot;\\n&quot;}&#39;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># chmod +x disk-info.sh</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh disk-info.sh</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat disk_space_20220922.rpt</span>
十大磁盘空间使用率
来自  /var/log /home 目录

The /var/log 目录:
<span class="token number">1</span>:      <span class="token number">13196</span>   /var/log/audit
<span class="token number">2</span>:      <span class="token number">6308</span>    /var/log/anaconda
<span class="token number">3</span>:      <span class="token number">6212</span>    /var/log
<span class="token number">4</span>:      <span class="token number">2232</span>    /var/log/sa
<span class="token number">5</span>:      <span class="token number">100</span>     /var/log/tuned
<span class="token number">6</span>:      <span class="token number">24</span>      /var/log/tomcat
<span class="token number">7</span>:      <span class="token number">8</span>       /var/log/pki
<span class="token number">8</span>:      <span class="token number">0</span>       /var/log/sssd
<span class="token number">9</span>:      <span class="token number">0</span>       /var/log/samba/old
<span class="token number">10</span>:     <span class="token number">0</span>       /var/log/samba

The /home 目录:
<span class="token number">1</span>:      <span class="token number">942476</span>  /home/soft
<span class="token number">2</span>:      <span class="token number">108</span>     /home/shell
<span class="token number">3</span>:      <span class="token number">16</span>      /home/user2
<span class="token number">4</span>:      <span class="token number">16</span>      /home/user1
<span class="token number">5</span>:      <span class="token number">12</span>      /home/tim
<span class="token number">6</span>:      <span class="token number">12</span>      /home/christine
<span class="token number">7</span>:      <span class="token number">12</span>      /home/barbara
<span class="token number">8</span>:      <span class="token number">0</span>       /home/user2/.mozilla/plugins
<span class="token number">9</span>:      <span class="token number">0</span>       /home/user2/.mozilla/extensions
<span class="token number">10</span>:     <span class="token number">0</span>       /home/user2/.mozilla
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-数据库" tabindex="-1"><a class="header-anchor" href="#mysql-数据库"><span>MySQL 数据库</span></a></h2><h3 id="向mysql服务器发送命令" tabindex="-1"><a class="header-anchor" href="#向mysql服务器发送命令"><span>向mysql服务器发送命令</span></a></h3><p>有两种实现方法：</p><ul><li>发送单个命令并退出；</li><li>发送多个命令。</li></ul><p>要发送单个命令，你必须将命令作为 mysql 命令行的一部分。对于 mysql 命令，可以用 -e 选项。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">cat</span> mtest1
<span class="token comment">#!/bin/bas</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token variable">$MYSQL</span> mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;select * from employees&#39;</span>

$ ./mtest1
+-------+----------+------------+---------+
<span class="token operator">|</span> empid <span class="token operator">|</span> lastname <span class="token operator">|</span> firstname <span class="token operator">|</span> salary <span class="token operator">|</span>
+-------+----------+------------+---------+
<span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Rich <span class="token operator">|</span> <span class="token number">25000</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Barbara <span class="token operator">|</span> <span class="token number">45000</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Katie Jane <span class="token operator">|</span> <span class="token number">34500</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Jessica <span class="token operator">|</span> <span class="token number">52340</span> <span class="token operator">|</span>
+-------+----------+------------+---------+

<span class="token function">cat</span> mtest2
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token variable">$MYSQL</span> mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
show tables;
select * from employees where salary &gt; 40000;
EOF</span>

$ ./mtest2
Tables_in_test
employees

empid lastname firstname salary
<span class="token number">2</span> Blum Barbara <span class="token number">45000</span>
<span class="token number">4</span> Blum Jessica <span class="token number">52340</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> mtest3
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">4</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: mtest3 empid lastname firstname salary&quot;</span>
<span class="token keyword">else</span>
    <span class="token assign-left variable">statement</span><span class="token operator">=</span><span class="token string">&quot;INSERT INTO employees VALUES (<span class="token variable">$1</span>, &#39;<span class="token variable">$2</span>&#39;, &#39;<span class="token variable">$3</span>&#39;, <span class="token variable">$4</span>)&quot;</span>
    <span class="token variable">$MYSQL</span> mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
    <span class="token variable">$statement</span>
EOF</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> Data successfully added
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> Problem adding data
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

$ ./mtest3
Usage: mtest3 empid lastname firstname salary

$ ./mtest3 <span class="token number">5</span> Blum Jasper <span class="token number">100000</span>
Data added successfully

$ ./mtest3 <span class="token number">5</span> Blum Jasper <span class="token number">100000</span>
ERROR <span class="token number">1062</span> <span class="token punctuation">(</span><span class="token number">23000</span><span class="token punctuation">)</span> at line <span class="token number">1</span>: Duplicate entry <span class="token string">&#39;5&#39;</span> <span class="token keyword">for</span> key <span class="token number">1</span>
Problem adding data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化数据" tabindex="-1"><a class="header-anchor" href="#格式化数据"><span>格式化数据</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">cat</span> mtest4
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token assign-left variable">dbs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$MYSQL mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-Bse</span> <span class="token string">&#39;show databases&#39;</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$dbs</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$db</span>
<span class="token keyword">done</span>

$ ./mtest4
information_schema
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-B</code> 选项指定mysql程序工作在批处理模式运行， <code>-s</code> （ silent ）选项用于禁止输出列标题和格式化符号</p><p>可以用 -X 命令行选项来输出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-X</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;select * from employees where empid = 1&#39;</span>
<span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span>?<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>resultset <span class="token assign-left variable">statement</span><span class="token operator">=</span><span class="token string">&quot;select * from employees&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;empid&quot;</span><span class="token operator">&gt;</span><span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>/field<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;lastname&quot;</span><span class="token operator">&gt;</span>Blum<span class="token operator">&lt;</span>/field<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;firstname&quot;</span><span class="token operator">&gt;</span>Rich<span class="token operator">&lt;</span>/field<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;salary&quot;</span><span class="token operator">&gt;</span><span class="token number">2500</span><span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/field<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/row<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/resultset<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function f(q,y){const e=t("ExternalLinkIcon");return p(),c("div",null,[r,s("p",null,[n("部分内容来自："),s("a",d,[n("CSDN ，作者：鮀城小帅"),l(e)])]),u,s("p",null,[n("完整的 "),s("a",v,[n("delete-user.sh"),l(e)]),n(" 脚本")]),m,k,b,s("p",null,[s("a",h,[n("while.sh"),l(e)])]),g])}const x=i(o,[["render",f],["__file","shell4.html.vue"]]),E=JSON.parse('{"path":"/linux/shell4.html","title":"Shell脚本编程-实用脚本","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Shell脚本编程-实用脚本","category":["Linux"],"headerDepth":5,"date":"2022-09-12T00:00:00.000Z","star":true,"tag":["Linux","Shell"],"description":"会写好的脚本不仅能提高工作效率，还能有更多的时间做自己的事。最近在网上冲浪的时候，也注意收集一些大佬写过的脚本，汇总整理一下，欢迎收藏，与君共勉！","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/shell4.html"}],["meta",{"property":"og:title","content":"Shell脚本编程-实用脚本"}],["meta",{"property":"og:description","content":"会写好的脚本不仅能提高工作效率，还能有更多的时间做自己的事。最近在网上冲浪的时候，也注意收集一些大佬写过的脚本，汇总整理一下，欢迎收藏，与君共勉！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell脚本编程-实用脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"归档","slug":"归档","link":"#归档","children":[{"level":3,"title":"创建按日归档的脚本","slug":"创建按日归档的脚本","link":"#创建按日归档的脚本","children":[]},{"level":3,"title":"创建按小时归档的脚本","slug":"创建按小时归档的脚本","link":"#创建按小时归档的脚本","children":[]}]},{"level":2,"title":"管理用户账户","slug":"管理用户账户","link":"#管理用户账户","children":[{"level":3,"title":"需要的功能","slug":"需要的功能","link":"#需要的功能","children":[]},{"level":3,"title":"创建脚本","slug":"创建脚本","link":"#创建脚本","children":[]},{"level":3,"title":"运行脚本","slug":"运行脚本","link":"#运行脚本","children":[]}]},{"level":2,"title":"用户猜数字","slug":"用户猜数字","link":"#用户猜数字","children":[]},{"level":2,"title":"查看有多少远程的 IP 在连接本机","slug":"查看有多少远程的-ip-在连接本机","link":"#查看有多少远程的-ip-在连接本机","children":[]},{"level":2,"title":"helloworld","slug":"helloworld","link":"#helloworld","children":[]},{"level":2,"title":"打印 tomcat 的pid","slug":"打印-tomcat-的pid","link":"#打印-tomcat-的pid","children":[]},{"level":2,"title":"脚本编写 剪刀 、 石头、布游戏","slug":"脚本编写-剪刀-、-石头、布游戏","link":"#脚本编写-剪刀-、-石头、布游戏","children":[]},{"level":2,"title":"九九乘法表","slug":"九九乘法表","link":"#九九乘法表","children":[]},{"level":2,"title":"脚本用源码来安装 memcached 服务器","slug":"脚本用源码来安装-memcached-服务器","link":"#脚本用源码来安装-memcached-服务器","children":[]},{"level":2,"title":"检测本机当前用户是否为超级管理员","slug":"检测本机当前用户是否为超级管理员","link":"#检测本机当前用户是否为超级管理员","children":[]},{"level":2,"title":"if 运算表达式","slug":"if-运算表达式","link":"#if-运算表达式","children":[]},{"level":2,"title":"脚本 杀掉 tomcat 进程并重新启动","slug":"脚本-杀掉-tomcat-进程并重新启动","link":"#脚本-杀掉-tomcat-进程并重新启动","children":[]},{"level":2,"title":"打印国际象棋棋盘","slug":"打印国际象棋棋盘","link":"#打印国际象棋棋盘","children":[]},{"level":2,"title":"统计当前 Linux 系统中可以登录计算机的账户有多少个","slug":"统计当前-linux-系统中可以登录计算机的账户有多少个","link":"#统计当前-linux-系统中可以登录计算机的账户有多少个","children":[]},{"level":2,"title":"备份 MySQL 表数据","slug":"备份-mysql-表数据","link":"#备份-mysql-表数据","children":[]},{"level":2,"title":"使用死循环实时显示 eth0 网卡发送的数据包流量","slug":"使用死循环实时显示-eth0-网卡发送的数据包流量","link":"#使用死循环实时显示-eth0-网卡发送的数据包流量","children":[]},{"level":2,"title":"编写脚本测试 192.168.4.0/24 整个网段中哪些主机处于开机状态，哪些主机处于关机","slug":"编写脚本测试-192-168-4-0-24-整个网段中哪些主机处于开机状态-哪些主机处于关机","link":"#编写脚本测试-192-168-4-0-24-整个网段中哪些主机处于开机状态-哪些主机处于关机","children":[]},{"level":2,"title":"提示用户输入用户名和密码,脚本自动创建相应的账户及配置密码。如果用户","slug":"提示用户输入用户名和密码-脚本自动创建相应的账户及配置密码。如果用户","link":"#提示用户输入用户名和密码-脚本自动创建相应的账户及配置密码。如果用户","children":[]},{"level":2,"title":"使用脚本对输入的三个整数进行排序","slug":"使用脚本对输入的三个整数进行排序","link":"#使用脚本对输入的三个整数进行排序","children":[]},{"level":2,"title":"根据计算机当前时间，返回问候语，可以将该脚本设置为开机启动","slug":"根据计算机当前时间-返回问候语-可以将该脚本设置为开机启动","link":"#根据计算机当前时间-返回问候语-可以将该脚本设置为开机启动","children":[]},{"level":2,"title":"将 I lov cls 写入到 txt 文件中","slug":"将-i-lov-cls-写入到-txt-文件中","link":"#将-i-lov-cls-写入到-txt-文件中","children":[]},{"level":2,"title":"脚本编写 for 循环判断","slug":"脚本编写-for-循环判断","link":"#脚本编写-for-循环判断","children":[]},{"level":2,"title":"每周 5 使用 tar 命令备份/var/log 下的所有日志文件","slug":"每周-5-使用-tar-命令备份-var-log-下的所有日志文件","link":"#每周-5-使用-tar-命令备份-var-log-下的所有日志文件","children":[]},{"level":2,"title":"脚本编写 求和 函数运算 function xx()","slug":"脚本编写-求和-函数运算-function-xx","link":"#脚本编写-求和-函数运算-function-xx","children":[]},{"level":2,"title":"脚本编写 case — esac 分支结构表达式","slug":"脚本编写-case-—-esac-分支结构表达式","link":"#脚本编写-case-—-esac-分支结构表达式","children":[]},{"level":2,"title":"定义要监控的页面地址，对 tomcat 状态进行重启或维护","slug":"定义要监控的页面地址-对-tomcat-状态进行重启或维护","link":"#定义要监控的页面地址-对-tomcat-状态进行重启或维护","children":[]},{"level":2,"title":"通过位置变量创建 Linux 系统账户及密码","slug":"通过位置变量创建-linux-系统账户及密码","link":"#通过位置变量创建-linux-系统账户及密码","children":[]},{"level":2,"title":"对变量的传入与获取个数及打印","slug":"对变量的传入与获取个数及打印","link":"#对变量的传入与获取个数及打印","children":[]},{"level":2,"title":"实时监控本机内存和硬盘剩余空间，剩余内存小于500M、根分区剩余空间小于1000M时，发送报警邮件给root管理员","slug":"实时监控本机内存和硬盘剩余空间-剩余内存小于500m、根分区剩余空间小于1000m时-发送报警邮件给root管理员","link":"#实时监控本机内存和硬盘剩余空间-剩余内存小于500m、根分区剩余空间小于1000m时-发送报警邮件给root管理员","children":[]},{"level":2,"title":"检查指定目录下是否存在 对应 文件","slug":"检查指定目录下是否存在-对应-文件","link":"#检查指定目录下是否存在-对应-文件","children":[]},{"level":2,"title":"脚本定义while循环语句","slug":"脚本定义while循环语句","link":"#脚本定义while循环语句","children":[]},{"level":2,"title":"一键部署 LNMP（RPM 包版本）","slug":"一键部署-lnmp-rpm-包版本","link":"#一键部署-lnmp-rpm-包版本","children":[]},{"level":2,"title":"读取控制台传入参数","slug":"读取控制台传入参数","link":"#读取控制台传入参数","children":[]},{"level":2,"title":"脚本实现 复制","slug":"脚本实现-复制","link":"#脚本实现-复制","children":[]},{"level":2,"title":"脚本实现文件存在与否的判断","slug":"脚本实现文件存在与否的判断","link":"#脚本实现文件存在与否的判断","children":[]},{"level":2,"title":"监测磁盘空间","slug":"监测磁盘空间","link":"#监测磁盘空间","children":[{"level":3,"title":"需要的功能","slug":"需要的功能-1","link":"#需要的功能-1","children":[]}]},{"level":2,"title":"MySQL 数据库","slug":"mysql-数据库","link":"#mysql-数据库","children":[{"level":3,"title":"向mysql服务器发送命令","slug":"向mysql服务器发送命令","link":"#向mysql服务器发送命令","children":[]},{"level":3,"title":"格式化数据","slug":"格式化数据","link":"#格式化数据","children":[]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":20.28,"words":6085},"filePathRelative":"linux/shell4.md","localizedDate":"2022年9月12日","excerpt":"<p>会写好的脚本不仅能提高工作效率，还能有更多的时间做自己的事。最近在网上冲浪的时候，也注意收集一些大佬写过的脚本，汇总整理一下，欢迎收藏，与君共勉！</p>\\n","autoDesc":true}');export{x as comp,E as data};
