import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c,b as n,e as s,d as a,w as t,a as r}from"./app-D1uezr0R.js";const u="/assets/true-image-20220914104641154-C2sxd4AF.png",d="/assets/true-image-20220914105143147-BnFPoL-5.png",m="/assets/true-image-20220914105525933-ByTbrACf.png",v="/assets/true-image-20220914120636967-aATdC0Hh.png",b={},k=n("p",null,"Linux之shell脚本的一些基础知识认识",-1),h=n("h1",{id:"基础认识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础认识"},[n("span",null,"基础认识")])],-1),g=n("h2",{id:"终端仿真器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#终端仿真器"},[n("span",null,"终端仿真器")])],-1),f={href:"https://help.gnome.org/users/gnome-terminal/stable",target:"_blank",rel:"noopener noreferrer"},_={href:"http://konsole.kde.org",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.eterm.org",target:"_blank",rel:"noopener noreferrer"},E={href:"http://finalterm.org",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/Guake/guake",target:"_blank",rel:"noopener noreferrer"},S={href:"http://lilyterm.luna.com.tw/index.html",target:"_blank",rel:"noopener noreferrer"},T={href:"http://wiki.lxde.org/en/LXTerminal",target:"_blank",rel:"noopener noreferrer"},H={href:"https://code.google.com/p/mrxvt",target:"_blank",rel:"noopener noreferrer"},P={href:"http://roxterm.sourceforge.net",target:"_blank",rel:"noopener noreferrer"},O={href:"https://launchpad.net/terminator",target:"_blank",rel:"noopener noreferrer"},M={href:"http://www.enlightenment.org/p.php?p=about/terminology",target:"_blank",rel:"noopener noreferrer"},C={href:"http://manpages.ubuntu.com/manpages/gutsy/man1/uxterm.1.html",target:"_blank",rel:"noopener noreferrer"},D={href:"http://sourceforge.net/projects/wterm",target:"_blank",rel:"noopener noreferrer"},A={href:"http://invisible-island.net/xterm",target:"_blank",rel:"noopener noreferrer"},y=r(`<h2 id="shell-类型" tabindex="-1"><a class="header-anchor" href="#shell-类型"><span>shell 类型</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/bin/bash /bin/sh  /bin/tcsh
/bin/dash /bin/csh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-的父子关系-bash" tabindex="-1"><a class="header-anchor" href="#shell-的父子关系-bash"><span>shell 的父子关系-bash</span></a></h2><h3 id="_1、bash进程" tabindex="-1"><a class="header-anchor" href="#_1、bash进程"><span>1、bash进程</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12459</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">12661</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入命令 bash 之后，一个子shell就出现了。第二个 ps -f 是在子shell中执行的。可以从显示结果中看到有两个bash shell程序在运行。第一个bash shell程序，也就是父shell进程，其原始进程ID是 <em>1490</em> 。第二个bash shell程序，即子shell进程，其PID是 <em>12590</em>。注意，子shell的父进程ID（<code>PPID</code>）是 <em>1490</em> ，指明了这个父shell进程就是该子shell的父进程</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在生成子shell进程时，只有部分父进程的环境被复制到子shell环境中。这会对包括变量在内的一些东西造成影响。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">14253</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:37 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18655</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18679</span>  <span class="token number">18655</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">19698</span>  <span class="token number">18679</span>  <span class="token number">0</span> <span class="token number">10</span>:50 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps --forest</span>
   PID TTY          TIME CMD
  <span class="token number">1490</span> pts/0    00:00:00 <span class="token function">bash</span>
 <span class="token number">12590</span> pts/0    00:00:00  <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18624</span> pts/0    00:00:00      <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18655</span> pts/0    00:00:00          <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18679</span> pts/0    00:00:00              <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18730</span> pts/0    00:00:00                  <span class="token punctuation">\\</span>_ <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bash 命令被输入了三次。这实际上创建了三个子shell。 <code>ps -forest</code> 命令展示了这些子shell间的嵌套结构。</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>参数</strong></p><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="退出子进程" tabindex="-1"><a class="header-anchor" href="#退出子进程"><span>退出子进程</span></a></h3><p>exit</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18655</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18679</span>  <span class="token number">18655</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">21975</span>  <span class="token number">18679</span>  <span class="token number">0</span> <span class="token number">10</span>:56 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">22071</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">10</span>:56 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、进程列表" tabindex="-1"><a class="header-anchor" href="#_2、进程列表"><span>2、进程列表</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls)</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的第一个例子中，所有的命令依次执行，不存在任何问题。不过这并不是进程列表。</p><p>命令列表要想成为进程列表，这些命令必须包含在括号里。括号的加入使命令列表变成了进程列表，生成了一个子shell来执行对应的命令。</p><p>要想知道是否生成了子shell，得借助一个使用了环境变量的命令。这个命令就是 echo $BASH_SUBSHELL；<strong>如果该命令返回 0 ，就表明没有子shell。如果返回 1 或者其他更大的数字，就表明存在子shell</strong>。如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; echo $BASH_SUBSHELL</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">0</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; echo $BASH_SUBSHELL)</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以在命令列表中嵌套括号来创建子shell的子shell。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; (echo $BASH_SUBSHELL))</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">2</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; (echo $BASH_SUBSHELL))</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、后台模式" tabindex="-1"><a class="header-anchor" href="#_3、后台模式"><span>3、后台模式</span></a></h3><p><code>sleep</code> 命令会在后台（ <code>&amp;</code> ）睡眠30秒。当它被置入后台。</p><p>使用 <code>jobs</code> 命令来显示后台作业信息。 jobs 命令可以显示出当前运行在后台模式中的所有用户的进程（作业）。使用<code>-l</code> 来显示进程的 PID。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#  sleep 30&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">35051</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">35051</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">11</span>:28 pts/0    00:00:00 <span class="token function">sleep</span> <span class="token number">30</span>
root      <span class="token number">35093</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">11</span>:28 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  运行中               <span class="token function">sleep</span> <span class="token number">30</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># jobs -l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">35051</span> 运行中               <span class="token function">sleep</span> <span class="token number">30</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># jobs -l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">35051</span> 完成                  <span class="token function">sleep</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需要提醒的是：后台作业的结束状态可未必会一直等待到合适的时候才现身。当作业结束状态突然出现在屏幕上的时候，你可别吃惊啊。</p></blockquote><h3 id="_4、将进程列表置入后台" tabindex="-1"><a class="header-anchor" href="#_4、将进程列表置入后台"><span>4、将进程列表置入后台</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (sleep 2 ; echo $BASH_SUBSHELL ; sleep 2)</span>
<span class="token number">1</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (sleep 2 ; echo $BASH_SUBSHELL ; sleep 2)&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">39128</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># 1  &lt;=== 按回车</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  完成                  <span class="token punctuation">(</span> <span class="token function">sleep</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$BASH_SUBSHELL</span><span class="token punctuation">;</span> <span class="token function">sleep</span> <span class="token number">2</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把进程列表置入后台会产生一个作业号和进程ID，然后返回到提示符。不过奇怪的是表明单一级子shell的数字 1 显示在了提示符的旁边！不要不知所措，只需要按一下回车键，就会得到另一个提示符。</p><p>在CLI中运用子shell的创造性方法之一就是将进程列表置入后台模式。你既可以在子shell中进行繁重的处理工作，同时也不会让子shell的I/O受制于终端。</p><p>当然了， sleep 和 echo 命令的进程列表只是作为一个示例而已。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (tar -cf user1.tar /home/user1 ; tar -cf df.log.tar /home/df.log)&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">2423</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg  df.log.tar user1.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、协程-coproc" tabindex="-1"><a class="header-anchor" href="#_5、协程-coproc"><span>5、协程 coproc</span></a></h3><p>协程可以同时做两件事。它在后台生成一个子shell，并在这个子shell中执行命令。</p><p>除了会创建子shell之外，<strong>协程基本上就是将命令置入后台模式</strong>。当输入 coproc 命令及其参数之后，你会发现启用了一个后台作业。屏幕上会显示出后台作业号（ 1 ）以及进程ID（ 43011）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># coproc sleep 10</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">43011</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  运行中               coproc COPROC <span class="token function">sleep</span> <span class="token number">10</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令的扩展语法自己设置这个名字。</p><hr><p><strong>说明：</strong> 协程能够让你尽情发挥想象力，发送或接收来自子shell中进程的信息。只有在拥有多个协程的时候才需要对协程进行命名，因为你得和它们进行通信。否则的话，让 coproc 命令将其设置成默认的名字 COPROC 就行了。</p><hr><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># coproc My_Job { sleep 10; }</span>
bash: 警告:execute_coproc: coproc <span class="token punctuation">[</span><span class="token number">43011</span>:COPROC<span class="token punctuation">]</span> still exists
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">43087</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>   完成                  coproc COPROC <span class="token function">sleep</span> <span class="token number">10</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+  完成                  coproc My_Job <span class="token punctuation">{</span> <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将协程与进程列表结合起来产生嵌套的子shell。只需要输入进程列表，然后把命令 coproc 放在前面就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># coproc ( sleep 10; sleep 2 )</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">43423</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  运行中               coproc COPROC <span class="token punctuation">(</span> <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token function">sleep</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># ps --forest</span>
   PID TTY          TIME CMD
  <span class="token number">1490</span> pts/0    00:00:00 <span class="token function">bash</span>
 <span class="token number">12590</span> pts/0    00:00:00  <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18624</span> pts/0    00:00:00      <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">43423</span> pts/0    00:00:00          <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">43424</span> pts/0    00:00:00          <span class="token operator">|</span>   <span class="token punctuation">\\</span>_ <span class="token function">sleep</span>
 <span class="token number">43479</span> pts/0    00:00:00          <span class="token punctuation">\\</span>_ <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>记住</strong>：生成子shell的成本不低，而且速度还慢。创建嵌套子shell更是火上浇油！<br> 在命令行中使用子shell能够获得灵活性和便利。要想获得这些优势，重要的是理解子shell的行为方式。对于命令也是如此。</p><h2 id="理解-shell-的内建命令" tabindex="-1"><a class="header-anchor" href="#理解-shell-的内建命令"><span>理解 shell 的内建命令</span></a></h2><p>内建命令和非内建命令的操作方式大不相同。</p><h3 id="_1、外部命令" tabindex="-1"><a class="header-anchor" href="#_1、外部命令"><span>1、外部命令</span></a></h3><p>外部命令，有时候也被称为文件系统命令，是存在于bash shell之外的程序。它们并不是shell程序的一部分。外部命令程序通常位于<code>/bin</code>、<code>/usr/bin</code>、<code>/sbin</code>或<code>/usr/sbin</code>中。</p><p>ps 就是一个外部命令。你可以使用 which 和 type 命令找到它:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># which ps</span>
/usr/bin/ps
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type -a ps</span>
<span class="token function">ps</span> 是 /usr/bin/ps
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ls -l /usr/bin/ps</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">100112</span> <span class="token number">10</span>月  <span class="token number">1</span> <span class="token number">2020</span> /usr/bin/ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当外部命令执行时，会创建出一个子进程。这种操作被称为衍生（forking）。外部命令 ps 很方便显示出它的父进程以及自己所对应的衍生子进程。</p><p>作为外部命令， ps 命令执行时会创建出一个子进程。</p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">49716</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">12</span>:04 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">49723</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">12</span>:04 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">49731</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">12</span>:04 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当进程必须执行衍生操作时，它需要花费时间和精力来设置新子进程的环境。所以说，外部命令多少还是有代价的。</p><hr><p><strong>说明</strong> 就算衍生出子进程或是创建了子shell，你仍然可以通过发送信号与其沟通，这一点无论是在命令行还是在脚本编写中都是极其有用的。发送信号（signaling）使得进程间可以通过信号进行通信。</p><hr><h3 id="_2、内部命令" tabindex="-1"><a class="header-anchor" href="#_2、内部命令"><span>2、内部命令</span></a></h3><p>内建命令不需要使用子进程来执行。它们已经和shell编译成了一体，作为shell工具的组成部分存在。不需要借助外部程序文件来运行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type cd</span>
<span class="token builtin class-name">cd</span> 是 shell 内嵌
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type exit</span>
<span class="token builtin class-name">exit</span> 是 shell 内嵌
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type -a echo</span>
<span class="token builtin class-name">echo</span> 是 shell 内嵌
<span class="token builtin class-name">echo</span> 是 /usr/bin/echo
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type -a pwd</span>
<span class="token builtin class-name">pwd</span> 是 shell 内嵌
<span class="token builtin class-name">pwd</span> 是 /usr/bin/pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既不需要通过衍生出子进程来执行，也不需要打开程序文件，内建命令的<strong>执行速度要更快，效率也更高</strong>。</p><h2 id="linux-环境变量" tabindex="-1"><a class="header-anchor" href="#linux-环境变量"><span>linux 环境变量</span></a></h2><h3 id="_1、全局环境变量" tabindex="-1"><a class="header-anchor" href="#_1、全局环境变量"><span>1、全局环境变量</span></a></h3><p>要查看全局变量，可以使用 env 或 printenv 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># printenv</span>
<span class="token assign-left variable"><span class="token environment constant">XDG_SESSION_ID</span></span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>admin
<span class="token assign-left variable"><span class="token environment constant">TERM</span></span><span class="token operator">=</span>xterm
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token assign-left variable">SSH_CLIENT</span><span class="token operator">=</span><span class="token number">192.168</span>.0.5 <span class="token number">9649</span> <span class="token number">22</span>
<span class="token assign-left variable">SSH_TTY</span><span class="token operator">=</span>/dev/pts/0

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># env</span>
<span class="token assign-left variable"><span class="token environment constant">XDG_SESSION_ID</span></span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>admin
<span class="token assign-left variable"><span class="token environment constant">TERM</span></span><span class="token operator">=</span>xterm
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token assign-left variable">SSH_CLIENT</span><span class="token operator">=</span><span class="token number">192.168</span>.0.5 <span class="token number">9649</span> <span class="token number">22</span>
<span class="token assign-left variable">SSH_TTY</span><span class="token operator">=</span>/dev/pts/0
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要显示个别环境变量的值，可以使用 printenv 命令，但是不要用 env 命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># printenv HOME</span>
/root
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># env HOME</span>
env: <span class="token environment constant">HOME</span><span class="token builtin class-name">:</span> 没有那个文件或目录
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $HOME</span>
/root
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ls $HOME</span>
anaconda-ks.cfg  df.log.tar  df.sh  first.sh  user1.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、局部环境变量" tabindex="-1"><a class="header-anchor" href="#_2、局部环境变量"><span>2、局部环境变量</span></a></h3><p>局部环境变量只能在定义它们的进程中可见。</p><p>查看局部环境变量的列表有点复杂。遗憾的是，在Linux系统并没有一个只显示局部环境变量的命令。 set 命令会显示为某个特定进程设置的所有环境变量，包括局部变量、全局变量以及用户定义变量。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># set</span>
<span class="token assign-left variable"><span class="token environment constant">BASH</span></span><span class="token operator">=</span>/bin/bash
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token assign-left variable"><span class="token environment constant">BASH_VERSINFO</span></span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;4&quot;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;46&quot;</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;release&quot;</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;x86_64-redhat-linux-gnu&quot;</span><span class="token punctuation">)</span>
<span class="token assign-left variable"><span class="token environment constant">BASH_VERSION</span></span><span class="token operator">=</span><span class="token string">&#39;4.2.46(2)-release&#39;</span>
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token assign-left variable"><span class="token environment constant">HISTFILE</span></span><span class="token operator">=</span>/root/.bash_history
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/root
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 命令 <code>env</code> 、 <code>printenv</code> 和 <code>set</code> 之间的差异很细微。 <strong>set</strong> 命令会显示出全局变量、局部变量以及用户定义变量。它还会按照字母顺序对结果进行排序。 <strong>env</strong> 和 <strong>printenv</strong> 命令同 set 命令的区别在于前两个命令不会对变量排序，也不会输出局部变量和用户定义变量。在这种情况下， env 和 printenv 的输出是重复的。不过 env 命令有一个 printenv 没有的功能，这使得它要更有用一些。</p><hr><h3 id="_3、设置用户定义变量" tabindex="-1"><a class="header-anchor" href="#_3、设置用户定义变量"><span>3、设置用户定义变量</span></a></h3><p>可以通过等号给环境变量赋值，值可以是数值或字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_variable=Hello</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非常简单！现在每次引用 my_variable 环境变量的值，只要通过 $my_variable 引用即可。<br> 如果要给变量赋一个含有空格的字符串值，必须用单引号来界定字符串的首和尾。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_variable=Hello World</span>
-bash: World: 未找到命令
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_variable=&quot;Hello World&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有单引号的话，bash shell会以为下一个词是另一个要执行的命令。注意，你定义的局部环境变量用的是小写字母，而到目前为止你所看到的系统环境变量都是大写字母。</p><hr><p><strong>注意：</strong> 所有的环境变量名均使用大写字母，这是bash shell的标准惯例。如果是你自己创建的局部变量或是shell脚本，请使用小写字母。变量名区分大小写。在涉及用户定义的局部变量时坚持使用小写字母，这能够避免重新定义系统环境变量可能带来的灾难。</p><hr><p>设置了局部环境变量后，就能在shell进程的任何地方使用它了。但是，如果生成了另外一个shell，它在子shell中就不可用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似地，如果你在子进程中设置了一个局部变量，那么一旦你退出了子进程，那个局部环境变量就不可用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_0=&quot;1112323&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_0</span>
<span class="token number">1112323</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、设置全局环境变量-export" tabindex="-1"><a class="header-anchor" href="#_4、设置全局环境变量-export"><span>4、设置全局环境变量 export</span></a></h3><p>创建全局环境变量的方法是先创建一个局部环境变量，然后再把它导出到全局环境中（<code>export</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># vmy_variable=&quot;I am Global now&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># export vmy_variable</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在定义并导出局部环境变量 my_variable 后， bash 命令启动了一个子shell。在这个子shell中能够正确的显示出变量 my_variable 的值。该变量能够保留住它的值是因为 export 命令使其变成了全局环境变量。</p><p>修改子shell中全局环境变量并不会影响到父shell中该变量的值。这种改变只是在子进程中有效，并不会被反映到父shell中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># vmy_variable=&quot;I am Global now 66666&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now <span class="token number">66666</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、删除环境变量-unset" tabindex="-1"><a class="header-anchor" href="#_5、删除环境变量-unset"><span>5、删除环境变量 unset</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># unset my_variable</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你是在子进程中删除了一个全局环境变量，这只对子进程有效。该全局环境变量在父进程中依然可用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># unset my_variable</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>窍门</strong> 如果要用到变量，使用 $ ；如果要操作变量，不使用 $ 。这条规则的一<br> 个例外就是使用 printenv 显示某个变量的值。</p><hr><h3 id="_6、默认的-shell-环境变量" tabindex="-1"><a class="header-anchor" href="#_6、默认的-shell-环境变量"><span>6、默认的 shell 环境变量</span></a></h3><p>默认情况下，bash shell会用一些特定的环境变量来定义系统环境。这些变量在你的Linux系统上都已经设置好了，只管放心使用。bash shell源自当初的Unix Bourne shell，因此也保留了Unix Bourne shell里定义的那些环境变量。</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>$变量     描述
CDPATH  冒号分隔的目录列表，作为 cd 命令的搜索路径
HOME  当前用户的主目录
IFS   shell用来将文本字符串分割成字段的一系列字符
MAIL  当前用户收件箱的文件名（bash shell会检查这个文件，看看有没有新邮件）
MAILPATH 冒号分隔的当前用户收件箱的文件名列表（bash shell会检查列表中的每个文件，看看有没有新邮件）
OPTARG  getopts 命令处理的最后一个选项参数值
OPTIND  getopts 命令处理的最后一个选项参数的索引号
PATH  shell查找命令的目录列表，由冒号分隔
PS1   shell命令行界面的主提示符
PS2   shell命令行界面的次提示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了默认的Bourne的环境变量，bash shell还提供一些自有的变量</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>$变量     描述
BASH   当前shell实例的全路径名
BASH_ALIASES 含有当前已设置别名的关联数组
BASH_ARGC  含有传入子函数或shell脚本的参数总数的数组变量
BASH_ARCV  含有传入子函数或shell脚本的参数的数组变量
BASH_CMDS  关联数组，包含shell执行过的命令的所在位置
BASH_COMMAND shell正在执行的命令或马上就执行的命令
BASH_ENV  设置了的话，每个bash脚本会在运行前先尝试运行该变量定义的启动文件
BASH_EXECUTION_STRING 使用 bash -c 选项传递过来的命令
BASH_LINENO  含有当前执行的shell函数的源代码行号的数组变量
BASH_REMATCH 只读数组，在使用正则表达式的比较运算符=~进行肯定匹配（positive match）时，包含了匹配到的模式和子模式
BASH_SOURCE  含有当前正在执行的shell函数所在源文件名的数组变量
BASH_SUBSHELL 当前子shell环境的嵌套级别（初始值是0）
BASH_VERSINFO 含有当前运行的bash shell的主版本号和次版本号的数组变量
BASH_VERSION 当前运行的bash shell的版本号
BASH_XTRACEFD 若设置成了有效的文件描述符（ 0 、 1 、 2 ），则 &#39;set -x&#39; 调试选项生成的跟踪输出可被重定向。通常用来将跟踪输出到一个文件中
BASHOPTS  当前启用的bash shell选项的列表
BASHPID   当前bash进程的PID
COLUMNS   当前bash shell实例所用终端的宽度
COMP_CWORD  COMP_WORDS 变量的索引值，后者含有当前光标的位置
COMP_LINE  当前命令行
COMP_POINT  当前光标位置相对于当前命令起始的索引
COMP_KEY  用来调用shell函数补全功能的最后一个键
COMP_TYPE  一个整数值，表示所尝试的补全类型，用以完成shell函数补全
COMP_WORDBREAKS  Readline库中用于单词补全的词分隔字符
COMP_WORDS  含有当前命令行所有单词的数组变量
COMPREPLY  含有由shell函数生成的可能填充代码的数组变量
COPROC   占用未命名的协进程的I/O文件描述符的数组变量
DIRSTACK  含有目录栈当前内容的数组变量
EMACS   设置为 &#39;t&#39; 时，表明emacs shell缓冲区正在工作，而行编辑功能被禁止
ENV    如果设置了该环境变量，在bash shell脚本运行之前会先执行已定义的启动文件（仅用于当bash shell以POSIX模式被调用时）
EUID   当前用户的有效用户ID（数字形式）
FCEDIT   供 fc 命令使用的默认编辑器
FIGNORE   在进行文件名补全时可以忽略后缀名列表，由冒号分隔
FUNCNAME  当前执行的shell函数的名称
FUNCNEST  当设置成非零值时，表示所允许的最大函数嵌套级数（一旦超出，当前命令即被终止）
GLOBIGNORE  冒号分隔的模式列表，定义了在进行文件名扩展时可以忽略的一组文件名
GROUPS   含有当前用户属组列表的数组变量
histchars  控制历史记录扩展，最多可有3个字符
HISTCMD   当前命令在历史记录中的编号
HISTCONTROL  控制哪些命令留在历史记录列表中
HISTFILE  保存shell历史记录列表的文件名（默认是.bash_history）
HISTFILESIZE 最多在历史文件中存多少行
HISTTIMEFORMAT 如果设置了且非空，就用作格式化字符串，以显示bash历史中每条命令的时间戳
HISTIGNORE  由冒号分隔的模式列表，用来决定历史文件中哪些命令会被忽略
HISTSIZE  最多在历史文件中存多少条命令
HOSTFILE  shell在补全主机名时读取的文件名称
HOSTNAME  当前主机的名称
HOSTTYPE  当前运行bash shell的机器
IGNOREEOF  shell在退出前必须收到连续的 EOF 字符的数量（如果这个值不存在，默认是 1 ）
INPUTRC   Readline初始化文件名（默认是.inputrc）
LANG   shell的语言环境类别
LC_ALL   定义了一个语言环境类别，能够覆盖 LANG 变量
LC_COLLATE  设置对字符串排序时用的排序规则
LC_CTYPE  决定如何解释出现在文件名扩展和模式匹配中的字符
LC_MESSAGES  在解释前面带有 <span class="token function selector">\\$</span> 的双引号字符串时，该环境变量决定了所采用的语言环境设置
LC_NUMERIC  决定着格式化数字时采用的语言环境设置
LINENO   当前执行的脚本的行号
LINES   定义了终端上可见的行数
MACHTYPE  用“CPU  公司  系统”（CPU-company-system）格式定义的系统类型
MAPFILE   一个数组变量，当 mapfile 命令未指定数组变量作为参数时，它存储了 mapfile 所读入的文本
MAILCHECK  shell查看新邮件的频率（以秒为单位，默认值是 60 ）
OLDPWD   shell之前的工作目录
OPTERR   设置为1时，bash shell会显示 getopts 命令产生的错误
OSTYPE   定义了shell所在的操作系统
PIPESTATUS  含有前台进程的退出状态列表的数组变量
POSIXLY_CORRECT  设置了的话，bash会以POSIX模式启动
PPID   bash shell父进程的PID
PROMPT_COMMAND  设置了的话，在命令行主提示符显示之前会执行这条命令
PROMPT_DIRTRIM  用来定义当启用了 <span class="token function selector">\\w</span> 或 <span class="token function selector">\\W</span> 提示符字符串转义时显示的尾部目录名的数量。被删除的目录名会用一组英文句点替换
PS3    select 命令的提示符
PS4    如果使用了bash的 -x 选项，在命令行之前显示的提示信息
PWD    当前工作目录
RANDOM   返回一个0～32767的随机数（对其的赋值可作为随机数生成器的种子）
READLINE_LINE  当使用 bind –x 命令时，存储Readline缓冲区的内容
READLINE_POINT  当使用 bind –x 命令时，表示Readline缓冲区内容插入点的当前位置
REPLY   read命令的默认变量
SECONDS   自从shell启动到现在的秒数（对其赋值将会重置计数器）
SHELL   bash shell的全路径名
SHELLOPTS  已启用bash shell选项列表，列表项之间以冒号分隔
SHLVL   shell的层级；每次启动一个新bash shell，该值增加1
TIMEFORMAT  指定了shell的时间显示格式
TMOUT   select 和 read 命令在没输入的情况下等待多久（以秒为单位）。默认值为0，表示无限长
TMPDIR   目录名，保存bash shell创建的临时文件
UID    当前用户的真实用户ID（数字形式）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、设置-path-环境变量" tabindex="-1"><a class="header-anchor" href="#_7、设置-path-环境变量"><span>7、设置 PATH 环境变量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># PATH=$PATH:/home/user1</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin:/home/user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>窍门</strong> 如果希望子shell也能找到你的程序的位置，一定要记得把修改后的 PATH 环境变量导出。</p><hr><h3 id="_8、定位系统环境变量" tabindex="-1"><a class="header-anchor" href="#_8、定位系统环境变量"><span>8、定位系统环境变量</span></a></h3><p><strong>登录 shell</strong></p><p>当你登录Linux系统时，bash shell会作为登录shell启动。登录shell会从5个不同的启动文件里<br> 读取命令：</p><ul><li>/etc/profile</li><li>$HOME/.bash_profile</li><li>$HOME/.bashrc</li><li>$HOME/.bash_login</li><li>$HOME/.profile</li></ul><p>etc/profile文件是系统上默认的bash shell的主启动文件。系统上的每个用户登录时都会执行<br> 这个启动文件。</p><p>HOME：提供一个用户专属的启动文件来定义该用户所用到的环境变量。</p><p>shell会按照按照下列顺序，运行第一个被找到的文件，余下的则被忽略：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$HOME/.bash_profile
$HOME/.bash_login
$HOME/.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这个列表中并没有$HOME/.bashrc文件。这是因为该文件通常通过其他文件运行的。</p><h3 id="_9、交互式-shell-进程" tabindex="-1"><a class="header-anchor" href="#_9、交互式-shell-进程"><span>9、交互式 shell 进程</span></a></h3><p>如果bash是作为交互式shell启动的，它就不会访问/etc/profile文件，只会检查用户HOME目录中的.bashrc文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin ~]# cat .bashrc
# .bashrc

# User specific aliases and functions

alias rm=&#39;rm -i&#39;
alias cp=&#39;cp -i&#39;
alias mv=&#39;mv -i&#39;

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、非交互式shell" tabindex="-1"><a class="header-anchor" href="#_10、非交互式shell"><span>10、非交互式shell</span></a></h3><p>最后一种shell是非交互式shell。系统执行shell脚本时用的就是这种shell。不同的地方在于它没有命令行提示符。但是当你在系统上运行脚本时，也许希望能够运行一些特定启动的命令。</p><hr><p>窍门 脚本能以不同的方式执行。只有其中的某一些方式能够启动子shell</p><hr><p>为了处理这种情况，bash shell提供了 BASH_ENV 环境变量。当shell启动一个非交互式shell进程时，它会检查这个环境变量来查看要执行的启动文件。如果有指定的文件，shell会执行该文件里的命令，这通常包括shell脚本变量设置。</p><p>在CentOS Linux发行版中，这个环境变量在默认情况下并未设置。如果变量未设置， printenv 命令只会返回CLI提示符：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">printenv</span> BASH_ENV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在Ubuntu发行版中，变量 BASH_ENV 也没有被设置。记住，如果变量未设置， echo 命令会显示一个空行，然后返回CLI提示符：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">$BASH_ENV</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那如果 BASH_ENV 变量没有设置，shell脚本到哪里去获得它们的环境变量呢？别忘了有些shell脚本是通过启动一个子shell来执行的（参见第5章）。子shell可以继承父shell导出过的变量。</p><p>举例来说，如果父shell是登录shell，在/etc/profile、/etc/profile.d/ * .sh和$HOME/.bashrc文件中设置并导出了变量，用于执行脚本的子shell就能够继承这些变量。</p><p>要记住，由父shell设置但并未导出的变量都是局部变量。子shell无法继承局部变量。</p><p>对于那些不启动子shell的脚本，变量已经存在于当前shell中了。所以就算没有设置 BASH_ENV ，也可以使用当前shell的局部变量和全局变量</p><h3 id="_11、环境变量持久化" tabindex="-1"><a class="header-anchor" href="#_11、环境变量持久化"><span>11、环境变量持久化</span></a></h3><p>对全局环境变量来说（Linux系统中所有用户都需要使用的变量），可能更倾向于将新的或修改过的变量设置放在<code>/etc/profile</code>文件中，但这可不是什么好主意。如果你升级了所用的发行版，这个文件也会跟着更新，那你所有定制过的变量设置可就都没有了。</p><p>最好是在/etc/profile.d目录中创建一个以.sh结尾的文件。把所有新的或修改过的全局环境变量设置放在这个文件中。</p><p>在大多数发行版中，存储个人用户永久性bash shell变量的地方是 HOME/.bashrc文件。这一点适用于所有类型的shell进程。但如果设置了 BASH_ENV 变量，那么记住，除非它指向的是 HOME/.bashrc，否则你应该将非交互式shell的用户变量放在别的地方。</p><h3 id="_12、数组变量" tabindex="-1"><a class="header-anchor" href="#_12、数组变量"><span>12、数组变量</span></a></h3><p>要给某个环境变量设置多个值，可以把值放在括号里，值与值之间用空格分隔。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mytest=(one two three four five)</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $mytestecho $mytest</span>
one
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $mytest</span>
one
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[2]}</span>
three
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[*]}</span>
one two three four five
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mytest[2]=seven</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[*]}</span>
one two seven four five
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># unset mytest[2]</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[*]}</span>
one two four five
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[2]}</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[3]}</span>
four
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户及组权限" tabindex="-1"><a class="header-anchor" href="#用户及组权限"><span>用户及组权限</span></a></h2><h3 id="etc-passwd" tabindex="-1"><a class="header-anchor" href="#etc-passwd"><span>/etc/passwd</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">]</span>
nginx:x:385:385:Nginx web server:/var/lib/nginx:/sbin/nologin
mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false
user1:x:1001:1001::/home/user1:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>登录用户名</li><li>用户密</li><li>用户账户的UID（数字形式）</li><li>用户账户的组ID（GID）（数字形式）</li><li>用户账户的文本描述（称为备注字段）</li><li>用户HOME目录的位置</li><li>用户的默认shell</li></ul><h3 id="etc-shadow" tabindex="-1"><a class="header-anchor" href="#etc-shadow"><span>/etc/shadow</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/shadow</span>
root:<span class="token variable">$6</span><span class="token variable">$IuU9ujIkCecQ7kzi</span><span class="token variable">$TCClr5k7U9Zj8yJBxmqg0jpJOGTuJX0bci2YWVl70pRBrGWVSgZ529BI8BFZvhWgJCd0GbPSk4BtgFS6WL0jq</span>.::0:99999:7:::
bin:*:18353:0:99999:7:::
daemon:*:18353:0:99999:7:::
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>与/etc/passwd文件中的登录名字段对应的登录名</li><li>加密后的密码</li><li>自上次修改密码后过去的天数密码（自1970年1月1日开始计算）</li><li>多少天后才能更改密码</li><li>多少天后必须更改密码</li><li>密码过期前提前多少天提醒用户更改密码</li><li>密码过期后多少天禁用用户账户</li><li>用户账户被禁用的日期（用自1970年1月1日到当天的天数表示）</li><li>预留字段给将来使用</li></ul><h3 id="etc-group" tabindex="-1"><a class="header-anchor" href="#etc-group"><span>/etc/group</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/group</span>
root:x:0:
bin:x:1:
daemon:x:2:
sys:x:3:
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
nginx:x:385:
docker:x:384:
mysql:x:27:
user1:x:1001:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>组名</li><li>组密码</li><li>GID</li><li>属于该组的用户列表</li></ul><p><strong>千万不能通过直接修改/etc/group文件来添加用户到一个组，要用 usermod 命令</strong></p><p>需要参考基础知识：</p>`,159),L=n("li",null,"等等",-1);function w(B,N){const e=i("ExternalLinkIcon"),l=i("RouteLink");return o(),c("div",null,[k,h,g,n("p",null,[s("GNOME Terminal（一般系统默认） "),n("a",f,[s("https://help.gnome.org/users/gnome-terminal/stable"),a(e)])]),n("p",null,[s("Konsole Terminal "),n("a",_,[s("http://konsole.kde.org"),a(e)])]),n("p",null,[s("Eterm "),n("a",x,[s("http://www.eterm.org"),a(e)])]),n("p",null,[s("Final Term "),n("a",E,[s("http://finalterm.org"),a(e)])]),n("p",null,[s("Guake "),n("a",I,[s("https://github.com/Guake/guake"),a(e)])]),n("p",null,[s("LillyTerm "),n("a",S,[s("http://lilyterm.luna.com.tw/index.html"),a(e)])]),n("p",null,[s("LXTerminal "),n("a",T,[s("http://wiki.lxde.org/en/LXTerminal"),a(e)])]),n("p",null,[s("mrxvt "),n("a",H,[s("https://code.google.com/p/mrxvt"),a(e)])]),n("p",null,[s("ROXTerm "),n("a",P,[s("http://roxterm.sourceforge.net"),a(e)])]),n("p",null,[s("Terminator "),n("a",O,[s("https://launchpad.net/terminator"),a(e)])]),n("p",null,[s("Terminology "),n("a",M,[s("http://www.enlightenment.org/p.php?p=about/terminology"),a(e)])]),n("p",null,[s("UXterm "),n("a",C,[s("http://manpages.ubuntu.com/manpages/gutsy/man1/uxterm.1.html"),a(e)])]),n("p",null,[s("Wterm "),n("a",D,[s("http://sourceforge.net/projects/wterm"),a(e)])]),n("p",null,[s("xterm "),n("a",A,[s("http://invisible-island.net/xterm"),a(e)])]),y,n("ul",null,[n("li",null,[a(l,{to:"/linux/basis/basis.html#%E7%94%A8%E6%88%B7%E5%8F%8A%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86"},{default:t(()=>[s("参考：用户及权限管理")]),_:1})]),n("li",null,[a(l,{to:"/linux/basis/basis.html#%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:t(()=>[s("参考：目录文件管理")]),_:1})]),n("li",null,[a(l,{to:"/linux/basis/basis.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:t(()=>[s("参考：磁盘管理")]),_:1})]),L])])}const U=p(b,[["render",w],["__file","shell1.html.vue"]]),G=JSON.parse('{"path":"/linux/shell1.html","title":"Shell脚本编程-认识篇","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Shell脚本编程-认识篇","category":["Linux"],"headerDepth":5,"date":"2022-09-12T00:00:00.000Z","star":true,"tag":["Linux","Shell"],"description":"Linux之shell脚本的一些基础知识认识","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/shell1.html"}],["meta",{"property":"og:title","content":"Shell脚本编程-认识篇"}],["meta",{"property":"og:description","content":"Linux之shell脚本的一些基础知识认识"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell脚本编程-认识篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"终端仿真器","slug":"终端仿真器","link":"#终端仿真器","children":[]},{"level":2,"title":"shell 类型","slug":"shell-类型","link":"#shell-类型","children":[]},{"level":2,"title":"shell 的父子关系-bash","slug":"shell-的父子关系-bash","link":"#shell-的父子关系-bash","children":[{"level":3,"title":"1、bash进程","slug":"_1、bash进程","link":"#_1、bash进程","children":[]},{"level":3,"title":"退出子进程","slug":"退出子进程","link":"#退出子进程","children":[]},{"level":3,"title":"2、进程列表","slug":"_2、进程列表","link":"#_2、进程列表","children":[]},{"level":3,"title":"3、后台模式","slug":"_3、后台模式","link":"#_3、后台模式","children":[]},{"level":3,"title":"4、将进程列表置入后台","slug":"_4、将进程列表置入后台","link":"#_4、将进程列表置入后台","children":[]},{"level":3,"title":"5、协程 coproc","slug":"_5、协程-coproc","link":"#_5、协程-coproc","children":[]}]},{"level":2,"title":"理解 shell 的内建命令","slug":"理解-shell-的内建命令","link":"#理解-shell-的内建命令","children":[{"level":3,"title":"1、外部命令","slug":"_1、外部命令","link":"#_1、外部命令","children":[]},{"level":3,"title":"2、内部命令","slug":"_2、内部命令","link":"#_2、内部命令","children":[]}]},{"level":2,"title":"linux 环境变量","slug":"linux-环境变量","link":"#linux-环境变量","children":[{"level":3,"title":"1、全局环境变量","slug":"_1、全局环境变量","link":"#_1、全局环境变量","children":[]},{"level":3,"title":"2、局部环境变量","slug":"_2、局部环境变量","link":"#_2、局部环境变量","children":[]},{"level":3,"title":"3、设置用户定义变量","slug":"_3、设置用户定义变量","link":"#_3、设置用户定义变量","children":[]},{"level":3,"title":"4、设置全局环境变量 export","slug":"_4、设置全局环境变量-export","link":"#_4、设置全局环境变量-export","children":[]},{"level":3,"title":"5、删除环境变量 unset","slug":"_5、删除环境变量-unset","link":"#_5、删除环境变量-unset","children":[]},{"level":3,"title":"6、默认的 shell 环境变量","slug":"_6、默认的-shell-环境变量","link":"#_6、默认的-shell-环境变量","children":[]},{"level":3,"title":"7、设置 PATH 环境变量","slug":"_7、设置-path-环境变量","link":"#_7、设置-path-环境变量","children":[]},{"level":3,"title":"8、定位系统环境变量","slug":"_8、定位系统环境变量","link":"#_8、定位系统环境变量","children":[]},{"level":3,"title":"9、交互式 shell 进程","slug":"_9、交互式-shell-进程","link":"#_9、交互式-shell-进程","children":[]},{"level":3,"title":"10、非交互式shell","slug":"_10、非交互式shell","link":"#_10、非交互式shell","children":[]},{"level":3,"title":"11、环境变量持久化","slug":"_11、环境变量持久化","link":"#_11、环境变量持久化","children":[]},{"level":3,"title":"12、数组变量","slug":"_12、数组变量","link":"#_12、数组变量","children":[]}]},{"level":2,"title":"用户及组权限","slug":"用户及组权限","link":"#用户及组权限","children":[{"level":3,"title":"/etc/passwd","slug":"etc-passwd","link":"#etc-passwd","children":[]},{"level":3,"title":"/etc/shadow","slug":"etc-shadow","link":"#etc-shadow","children":[]},{"level":3,"title":"/etc/group","slug":"etc-group","link":"#etc-group","children":[]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":24.08,"words":7225},"filePathRelative":"linux/shell1.md","localizedDate":"2022年9月12日","excerpt":"<p>Linux之shell脚本的一些基础知识认识</p>\\n","autoDesc":true}');export{U as comp,G as data};
