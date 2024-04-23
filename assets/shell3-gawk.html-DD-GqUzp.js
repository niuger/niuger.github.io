import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-D1uezr0R.js";const i={},l=e(`<p>shell脚本高级实战案例篇之Gawk</p><h1 id="shell脚本编程-高级篇之gawk" tabindex="-1"><a class="header-anchor" href="#shell脚本编程-高级篇之gawk"><span>Shell脚本编程-高级篇之gawk</span></a></h1><h2 id="gawk" tabindex="-1"><a class="header-anchor" href="#gawk"><span>gawk</span></a></h2><p>虽然sed编辑器是非常方便自动修改文本文件的工具，但其也有自身的限制。通常你需要一个用来处理文件中的数据的更高级工具，它能提供一个类编程环境来修改和重新组织文件中的数据。这正是gawk能够做到的。</p><hr><p><strong>说明</strong> 在所有的发行版中都没有默认安装gawk程序。如果你所用的Linux发行版中没有包含gawk.</p><hr><p>gawk程序是Unix中的原始awk程序的GNU版本。gawk程序让流编辑迈上了一个新的台阶，它提供了一种编程语言而不只是编辑器命令。在gawk编程语言中，你可以做下面的事情：</p><ul><li>定义变量来保存数据；</li><li>使用算术和字符串操作符来处理数据；</li><li>使用结构化编程概念（比如 if-then 语句和循环）来为数据处理增加处理逻辑；</li><li>通过提取数据文件中的数据元素，将其重新排列或格式化，生成格式化报告。</li></ul><p>gawk程序的报告生成能力通常用来从大文本文件中提取数据元素，并将它们格式化成可读的<br> 报告。其中最完美的例子是格式化日志文件。在日志文件中找出错误行会很难，gawk程序可以让<br> 你从日志文件中过滤出需要的数据元素，然后你可以将其格式化，使得重要的数据更易于阅读。</p><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3><p>gawk命令格式</p><blockquote><p>gawk options program file</p></blockquote><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>选 项    描 述
-F fs  指定行中划分数据字段的字段分隔符
-f file  从指定的文件中读取程序
-v var=value  定义gawk程序中的一个变量及其默认值
-mf N  指定要处理的数据文件中的最大字段数
-mr N  指定数据文件中的最大数据行数
-W keyword  指定gawk的兼容模式或警告等级
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从命令行读取程序脚本" tabindex="-1"><a class="header-anchor" href="#从命令行读取程序脚本"><span>从命令行读取程序脚本</span></a></h4><p>gawk程序脚本用一对花括号来定义。你必须将脚本命令放到两个花括号（ {} ）中。如果你<br> 错误地使用了圆括号来包含gawk脚本，就会得到一条类似于下面的错误提示。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;(print &quot;Hello World!&quot;}&#39;</span>
gawk: <span class="token punctuation">(</span>print <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">}</span>
gawk: ^ syntax error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 gawk 命令行假定脚本是单个文本字符串，你还必须将脚本放到单引号中。下面的例子在命令行上指定了一个简单的gawk程序脚本：</p><blockquote><p>gawk &#39;{print &quot;Hello World!&quot;}&#39;</p></blockquote><p>这个程序脚本定义了一个命令： print 命令。这个命令名副其实：它会将文本打印到 STDOUT 。如果尝试运行这个命令，你可能会有些失望，因为什么都不会发生。原因在于没有在命令行上指定文件名，所以gawk程序会从 STDIN 接收数据。在运行这个程序时，它会一直等待从 STDIN 输入的文本。</p><p>如果你输入一行文本并按下回车键，gawk会对这行文本运行一遍程序脚本。跟sed编辑器一样，gawk程序会针对数据流中的每行文本执行程序脚本。由于程序脚本被设为显示一行固定的文本字符串，因此不管你在数据流中输入什么文本，都会得到同样的文本输出。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">gawk</span> <span class="token string">&#39;{print &quot;Hello World!&quot;}&#39;</span>
This is a <span class="token builtin class-name">test</span>
Hello World<span class="token operator">!</span>
hello
Hello World<span class="token operator">!</span>
This is another <span class="token builtin class-name">test</span>
Hello World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要终止这个gawk程序，你必须表明数据流已经结束了。bash shell提供了一个组合键来生成EOF（End-of-File）字符。Ctrl+D组合键会在bash中产生一个EOF字符。这个组合键能够终止该gawk程序并返回到命令行界面提示符下</p><h4 id="使用数据字段变量" tabindex="-1"><a class="header-anchor" href="#使用数据字段变量"><span>使用数据字段变量</span></a></h4><p>gawk的主要特性之一是其处理文本文件中数据的能力。它会自动给一行中的每个数据元素分配一个变量。默认情况下，gawk会将如下变量分配给它在文本行中发现的数据字段：</p><ul><li>$0 代表整个文本行；</li><li>$1 代表文本行中的第1个数据字段；</li><li>$2 代表文本行中的第2个数据字段；</li><li>$n 代表文本行中的第n个数据字段。</li></ul><p>gawk程序读取文本文件，只显示第1个数据字段的值</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
One line of <span class="token builtin class-name">test</span> text.
Two lines of <span class="token builtin class-name">test</span> text.
Three lines of <span class="token builtin class-name">test</span> text.

<span class="token function">gawk</span> <span class="token string">&#39;{print $1}&#39;</span> data2.txt
One
Two
Three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要读取采用了其他字段分隔符的文件，可以用 -F 选项指定</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> -F: <span class="token string">&#39;{print $1}&#39;</span> /etc/passwd
root
bin
daemon
adm
lp
<span class="token function">sync</span>
<span class="token function">shutdown</span>
<span class="token function">halt</span>
mail
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在程序脚本中使用多个命令" tabindex="-1"><a class="header-anchor" href="#在程序脚本中使用多个命令"><span>在程序脚本中使用多个命令</span></a></h4><p>如果一种编程语言只能执行一条命令，那么它不会有太大用处。gawk编程语言允许你将多条命令组合成一个正常的程序。要在命令行上的程序脚本中使用多条命令，只要在命令之间放个分号即可</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;My name is Rich&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;{$4=&quot;Christine&quot;; print $0}&#39;</span>
My name is Christine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一条命令会给字段变量 $4 赋值。第二条命令会打印整个数据字段。注意， gawk程序在输出中已经将原文本中的第四个数据字段替换成了新值</p></blockquote><p>也可以用次提示符一次一行地输入程序脚本命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; $4=&quot;Christine&quot;
&gt; print $0}&#39;</span>
My name is Rich
My name is Christine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你用了表示起始的单引号后，bash shell会使用次提示符来提示你输入更多数据。你可以每次在每行加一条命令，直到输入了结尾的单引号。因为没有在命令行中指定文件名，gawk程序会从 STDIN 中获得数据。当运行这个程序的时候，它会等着读取来自 STDIN 的文本。要退出程序，只需按下Ctrl+D组合键来表明数据结束。</p><h4 id="从文件中读取程序" tabindex="-1"><a class="header-anchor" href="#从文件中读取程序"><span>从文件中读取程序</span></a></h4><p>跟sed编辑器一样，gawk编辑器允许将程序存储到文件中，然后再在命令行中引用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> script2.gawk
<span class="token punctuation">{</span>print <span class="token variable">$1</span> <span class="token string">&quot;&#39;s home directory is &quot;</span> <span class="token variable">$6</span><span class="token punctuation">}</span>

<span class="token function">gawk</span> -F: <span class="token parameter variable">-f</span> script2.gawk /etc/passwd
root<span class="token string">&#39;s home directory is /root
bin&#39;</span>s home directory is /bin
daemon<span class="token string">&#39;s home directory is /sbin
adm&#39;</span>s home directory is /var/adm
lp<span class="token string">&#39;s home directory is /var/spool/lpd
[...]
Christine&#39;</span>s home directory is /home/Christine
Samantha<span class="token string">&#39;s home directory is /home/Samantha
Timothy&#39;</span>s home directory is /home/Timothy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在程序文件中指定多条命令。要这么做的话，只要一条命令放一行即可，不需要用分号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> script3.gawk
<span class="token punctuation">{</span>
text <span class="token operator">=</span> <span class="token string">&quot;&#39;s home directory is &quot;</span>
print <span class="token variable">$1</span> text <span class="token variable">$6</span>
<span class="token punctuation">}</span>

<span class="token function">gawk</span> -F: <span class="token parameter variable">-f</span> script3.gawk /etc/passwd
root<span class="token string">&#39;s home directory is /root
bin&#39;</span>s home directory is /bin
daemon<span class="token string">&#39;s home directory is /sbin
adm&#39;</span>s home directory is /var/adm
lp<span class="token string">&#39;s home directory is /var/spool/lpd
[...]
Christine&#39;</span>s home directory is /home/Christine
Samantha<span class="token string">&#39;s home directory is /home/Samantha
Timothy&#39;</span>s home directory is /home/Timothy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在处理数据前运行脚本" tabindex="-1"><a class="header-anchor" href="#在处理数据前运行脚本"><span>在处理数据前运行脚本</span></a></h4><p>gawk还允许指定程序脚本何时运行。默认情况下，gawk会从输入中读取一行文本，然后针对该行的数据执行程序脚本。有时可能需要在处理数据前运行脚本，比如为报告创建标题。 BEGIN关键字就是用来做这个的。它会强制gawk在读取数据前执行 BEGIN 关键字后指定的程序脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN {print &quot;Hello World!&quot;}&#39;</span>
Hello World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这次 print 命令会在读取数据前显示文本。但在它显示了文本后，它会快速退出，不等待任何数据。如果想使用正常的程序脚本中处理数据，必须用另一个脚本区域来定义程序</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data3.txt
Line <span class="token number">1</span>
Line <span class="token number">2</span>
Line <span class="token number">3</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN {print &quot;The data3 File Contents:&quot;}
&gt; {print $0}&#39;</span> data3.txt
The data3 File Contents:
Line <span class="token number">1</span>
Line <span class="token number">2</span>
Line <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在gawk执行了BEGIN脚本后，它会用第二段脚本来处理文件数据。这么做时要小心，两段脚本仍然被认为是 gawk 命令行中的一个文本字符串。你需要相应地加上单引号</p><h4 id="在处理数据后运行脚本" tabindex="-1"><a class="header-anchor" href="#在处理数据后运行脚本"><span>在处理数据后运行脚本</span></a></h4><p>与 BEGIN 关键字类似， END 关键字允许你指定一个程序脚本，gawk会在读完数据后执行它</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN {print &quot;The data3 File Contents:&quot;}
&gt; {print $0}
&gt; END {print &quot;End of File&quot;}&#39;</span> data3.txt
The data3 File Contents:
Line <span class="token number">1</span>
Line <span class="token number">2</span>
Line <span class="token number">3</span>
End of File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当gawk程序打印完文件内容后，它会执行END脚本中的命令。这是在处理完所有正常数据后给报告添加页脚的最佳方法。<br> 可以将所有这些内容放到一起组成一个漂亮的小程序脚本文件，用它从一个简单的数据文件中创建一份完整的报告:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> script4.gawk
BEGIN <span class="token punctuation">{</span>
print <span class="token string">&quot;The latest list of users and shells&quot;</span>
print <span class="token string">&quot; UserID <span class="token entity" title="\\t">\\t</span> Shell&quot;</span>
print <span class="token string">&quot;-------- <span class="token entity" title="\\t">\\t</span> -------&quot;</span>
<span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
print <span class="token variable">$1</span> <span class="token string">&quot; <span class="token entity" title="\\t">\\t</span> &quot;</span> <span class="token variable">$7</span>
<span class="token punctuation">}</span>

END <span class="token punctuation">{</span>
print <span class="token string">&quot;This concludes the listing&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本用BEGIN脚本来为报告创建标题。它还定义了一个叫作 FS 的特殊变量。这是定义字段分隔符的另一种方法。这样你就不用依靠脚本用户在命令行选项中定义字段分隔符了。<br> 下面是这个gawk程序脚本的输出（有部分删节）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token parameter variable">-f</span> script4.gawk /etc/passwd
The latest list of <span class="token function">users</span> and shells
UserID Shell
---------------
root /bin/bash
bin /sbin/nologin
daemon /sbin/nologin
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Christine /bin/bash
mysql /bin/bash
Samantha /bin/bash
Timothy /bin/bash
This concludes the listing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与预想的一样，BEGIN脚本创建了标题，程序脚本处理特定数据文件（/etc/passwd）中的信息，END脚本生成页脚。这个简单的脚本让你小试了一把gawk的强大威力。</p><h3 id="使用变量" tabindex="-1"><a class="header-anchor" href="#使用变量"><span>使用变量</span></a></h3><h4 id="内建变量" tabindex="-1"><a class="header-anchor" href="#内建变量"><span>内建变量</span></a></h4><ul><li>字段和记录分隔符变量</li></ul><p>数据字段是由字段分隔符来划定的。默认情况下，字段分隔符是一个空白字符，也就是空格符或者制表符。</p><p>内建变量 FS 是一组内建变量中的一个，这组变量用于控制gawk如何处理输入输出数据中的字段和记录；</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>变 量    描 述
FIELDWIDTHS  由空格分隔的一列数字，定义了每个数据字段确切宽度
FS  输入字段分隔符
RS  输入记录分隔符
OFS  输出字段分隔符
ORS  输出记录分隔符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量 FS 来定义记录中的字段分隔符。变量 OFS 具备相同的功能，只不过是用在 print 命令的输出上。默认情况下，gawk将 OFS 设成一个空格，所以如果你用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1
data11,data12,data13,data14,data15
data21,data22,data23,data24,data25
data31,data32,data33,data34,data35

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} {print $1,$2,$3}&#39;</span> data1
data11 data12 data13
data21 data22 data23
data31 data32 data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>print 命令会自动将 OFS 变量的值放置在输出中的每个字段间。通过设置 OFS 变量，可以在输出中使用任意字符串来分隔字段</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; OFS=&quot;-&quot;} {print $1,$2,$3}&#39;</span> data1
data11-data12-data13
data21-data22-data23
data31-data32-data33

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; OFS=&quot;--&quot;} {print $1,$2,$3}&#39;</span> data1
data11--data12--data13
data21--data22--data23
data31--data32--data33

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; OFS=&quot;&lt;--&gt;&quot;} {print $1,$2,$3}&#39;</span> data1
data1<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>--<span class="token operator">&gt;</span>data1<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>--<span class="token operator">&gt;</span>data13
data2<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>--<span class="token operator">&gt;</span>data2<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>--<span class="token operator">&gt;</span>data23
data3<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>--<span class="token operator">&gt;</span>data3<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>--<span class="token operator">&gt;</span>data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FIELDWIDTHS 变量允许你不依靠字段分隔符来读取记录。在一些应用程序中，数据并没有使用字段分隔符，而是被放置在了记录中的特定列。这种情况下，必须设定 FIELDWIDTHS 变量来匹配数据在记录中的位置。</p><p>一旦设置了 FIELDWIDTH 变量，gawk就会忽略 FS 变量，并根据提供的字段宽度来计算字段。</p><p>下面是个采用字段宽度而非字段分隔符的例子，每个记录中的数字串会根<br> 据已定义好的字段长度来分割。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1b
<span class="token number">1005.3247596</span>.37
<span class="token number">115</span>-2.349194.00
05810.1298100.1

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FIELDWIDTHS=&quot;3 5 2 5&quot;}{print $1,$2,$3,$4}&#39;</span> data1b
<span class="token number">100</span> <span class="token number">5.324</span> <span class="token number">75</span> <span class="token number">96.37</span>
<span class="token number">115</span> <span class="token parameter variable">-2.34</span> <span class="token number">91</span> <span class="token number">94.00</span>
058 <span class="token number">10.12</span> <span class="token number">98</span> <span class="token number">100.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>警告</strong> 一定要记住，一旦设定了 FIELDWIDTHS 变量的值，就不能再改变了。这种方法并不适用于变长的字段。</p><hr><p>变量 RS 和 ORS 定义了gawk程序如何处理数据流中的字段。默认情况下，gawk将 RS 和 ORS 设为换行符。默认的 RS 值表明，输入数据流中的每行新文本就是一条新纪录。</p><p>有时，你会在数据流中碰到占据多行的字段。</p><p>典型的例子是包含地址和电话号码的数据，其中地址和电话号码各占一行。</p><p>把 RS 变量设置成空字符串，然后在数据记录间留一个空白行。gawk会把每个空白行当作一个记录分隔符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2
Riley Mullen
<span class="token number">123</span> Main Street
Chicago, IL <span class="token number">60601</span>
<span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234

Frank Williams
<span class="token number">456</span> Oak Street
Indianapolis, IN <span class="token number">46201</span>
<span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876

Haley Snell
<span class="token number">4231</span> Elm Street
Detroit, MI <span class="token number">48201</span>
<span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {print $1,$4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据变量</li></ul><p>除了字段和记录分隔符变量外，gawk还提供了其他一些内建变量来帮助你了解数据发生了什么变化，并提取shell环境的信息。</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>变 量    描 述
ARGC  当前命令行参数个数
ARGIND  当前文件在 ARGV 中的位置
ARGV<span class="token punctuation">[</span>n<span class="token punctuation">]</span>  包含命令行参数的数组
CONVFMT  数字的转换格式（参见 printf 语句），默认值为 <span class="token comment">%.6 g</span>
ENVIRON  当前shell环境变量及其值组成的关联数组
ERRNO  当读取或关闭输入文件发生错误时的系统错误号
FILENAME  用作gawk输入数据的数据文件的文件名
IGNORECASE  设成非零值时，忽略 gawk 命令中出现的字符串的字符大小写
NF  含有数据文件中最后一个数据字段的数字值。
NR  已处理过的记录总数
FNR  当前数据文件中的数据行数（记录数）
OFMT  数字的输出格式，默认值为 <span class="token comment">%.6 g</span>
RLENGTH  由 match 函数所匹配的子字符串的长度
RSTART  由 match 函数所匹配的子字符串的起始位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{print ARGC,ARGV[1]}&#39;</span> data1
<span class="token number">2</span> data1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ARGC 变量表明命令行上有两个参数。这包括 gawk 命令和 data1 参数（记住，程序脚本并不算参数）。</p><p>ARGV 数组从索引 0 开始，代表的是命令。第一个数组值是 gawk 命令后的第一个命令行参数。</p><hr><p>ENVIRON 获取 shell 环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN{
&gt; print ENVIRON[&quot;HOME&quot;]
&gt; print ENVIRON[&quot;PATH&quot;]
&gt; }&#39;</span>
/home/rich
/usr/local/bin:/bin:/usr/bin:/usr/X11R6/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>跟踪数据字段和记录时，变量 <code>FNR</code> 、 <code>NF</code> 和 <code>NR</code> 用起来就非常方便。有时你并不知道记录中到底有多少个数据字段。</p><p><code>NF</code> 变量可以让你在不知道具体位置的情况下指定记录中的最后一个数据字段。<code>FNR</code> 变量的值在 gawk 处理第二个数据文件时被重置了，而 <code>NR</code> 变量则在处理第二个数据文件时继续计数。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;:&quot;; OFS=&quot;:&quot;} {print $1,$NF}&#39;</span> /etc/passwd
testy:/bin/csh
mark:/bin/bash
dan:/bin/bash
mike:/bin/bash
test:/bin/bash

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;}{print $1,&quot;FNR=&quot;FNR}&#39;</span> data1 data1
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span>
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN {FS=&quot;,&quot;}
&gt; {print $1,&quot;FNR=&quot;FNR,&quot;NR=&quot;NR}
&gt; END{print &quot;There were&quot;,NR,&quot;records processed&quot;}&#39;</span> data1 data1
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">1</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">2</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">3</span>
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">4</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">5</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">6</span>
There were <span class="token number">6</span> records processed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 在使用gawk时你可能会注意到，gawk脚本通常会比shell脚本中的其他部分还要大一些。为了简单起见，在本章的例子中，我们利用shell的多行特性直接在命令行上运行了gawk脚本。在shell脚本中使用gawk时，应该将不同的 gawk 命令放到不同的行，这样会比较容易阅读和理解，不要在shell脚本中将所有的命令都塞到同一行。还有，如果你发现在不同的shell脚本中用到了同样的gawk脚本，记着将这段gawk脚本放到一个单独的文件中，并用 <code>-f</code> 参数来在shell脚本中引用它.</p><hr><h4 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量"><span>自定义变量</span></a></h4><p>自定义变量名可以是任意数目的字母、数字和下划线，但不能以数字开头。重要的是，要记住 gawk 变量名区分大小写。</p><ul><li>在脚本中给变量赋值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN{
&gt; testing=&quot;This is a test&quot;
&gt; print testing
&gt; }&#39;</span>
This is a <span class="token builtin class-name">test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gawk 变量可以保存数值或文本值。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN{
&gt; testing=&quot;This is a test&quot;
&gt; print testing
&gt; testing=45
&gt; print testing
&gt; }&#39;</span>
This is a <span class="token builtin class-name">test</span>
<span class="token number">45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值语句还可以包含数学算式来处理数字值。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x=4; x= x * 2 + 3; print x}&#39;</span>
<span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在命令行上给变量赋值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> script1
BEGIN<span class="token punctuation">{</span>FS<span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>print <span class="token variable">$n</span><span class="token punctuation">}</span>

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> script1 <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">2</span> data1
data12
data22
data32

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> script1 <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">3</span> data1
data13
data23
data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令行参数来定义变量值会有一个问题。在你设置了变量后，这个值在代码的 BEGIN 部分不可用。可以用 -v 命令行参数来解决这个问题。它允许你在 BEGIN 代码之前设定变量。在命令行上，-v 命令行参数必须放在脚本代码之前。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> script2
BEGIN<span class="token punctuation">{</span>print <span class="token string">&quot;The starting value is&quot;</span>,n<span class="token punctuation">;</span> <span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>print <span class="token variable">$n</span><span class="token punctuation">}</span>

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> script2 <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">3</span> data1
The starting value is
data13
data23
data33

<span class="token function">gawk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">-f</span> script2 data1
The starting value is <span class="token number">3</span>
data13
data23
data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理数组" tabindex="-1"><a class="header-anchor" href="#处理数组"><span>处理数组</span></a></h3><h4 id="定义数组变量" tabindex="-1"><a class="header-anchor" href="#定义数组变量"><span>定义数组变量</span></a></h4><p>数组变量赋值的格式如下：</p><blockquote><p>var[index] = element</p></blockquote><p>其中 var 是变量名， index 是关联数组的索引值， element 是数据元素值。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>capital<span class="token punctuation">[</span><span class="token string">&quot;Illinois&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Springfield&quot;</span>
capital<span class="token punctuation">[</span><span class="token string">&quot;Indiana&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Indianapolis&quot;</span>
capital<span class="token punctuation">[</span><span class="token string">&quot;Ohio&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Columbus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引用数组变量时，必须包含索引值来提取相应的数据元素值。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; capital[&quot;Illinois&quot;] = &quot;Springfield&quot;
&gt; print capital[&quot;Illinois&quot;]
&gt; }&#39;</span>
Springfield
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引用数组变量时，会得到数据元素的值。数据元素值是数字值时也一样。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[1] = 34
&gt; var[2] = 3
&gt; total = var[1] + var[2]
&gt; print total
&gt; }&#39;</span>
<span class="token number">37</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历数组变量" tabindex="-1"><a class="header-anchor" href="#遍历数组变量"><span>遍历数组变量</span></a></h4><p>可以用 for 语句的一种特殊形式。</p><blockquote><p>for (var in array)</p><p>{</p><p>​ statements</p><p>}</p><p>for 语句会在每次循环时将关联数组 array 的下一个索引值赋给变量 var ，然后执行一遍 statements .</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[&quot;a&quot;] = 1
&gt; var[&quot;g&quot;] = 2
&gt; var[&quot;m&quot;] = 3
&gt; var[&quot;u&quot;] = 4
&gt; for (test in var)
&gt; {
&gt; print &quot;Index:&quot;,test,&quot; - Value:&quot;,var[test]
&gt; }
&gt; }&#39;</span>
Index: u - Value: <span class="token number">4</span>
Index: m - Value: <span class="token number">3</span>
Index: a - Value: <span class="token number">1</span>
Index: g - Value: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除数组变量" tabindex="-1"><a class="header-anchor" href="#删除数组变量"><span>删除数组变量</span></a></h4><p>从关联数组中删除数组索引要用一个特殊的命令。</p><blockquote><p>delete array[index]</p></blockquote><p>删除命令会从数组中删除关联索引值和相关的数据元素值。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[&quot;a&quot;] = 1
&gt; var[&quot;g&quot;] = 2
&gt; for (test in var)
&gt; {
&gt; print &quot;Index:&quot;,test,&quot; - Value:&quot;,var[test]
&gt; }
&gt; delete var[&quot;g&quot;]
&gt; print &quot;---&quot;
&gt; for (test in var)
&gt; print &quot;Index:&quot;,test,&quot; - Value:&quot;,var[test]
&gt; }&#39;</span>

Index: a - Value: <span class="token number">1</span>
Index: g - Value: <span class="token number">2</span>
---
Index: a - Value: <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用模式" tabindex="-1"><a class="header-anchor" href="#使用模式"><span>使用模式</span></a></h3><h4 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h4><p>在使用正则表达式时，正则表达式必须出现在它要控制的程序脚本的左花括号前。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} /11/{print $1}&#39;</span> data1
data11

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} /,d/{print $1}&#39;</span> data1
data11
data21
data31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>1 正则表达式 /11/ 匹配了数据字段中含有字符串 11 的记录</p></li><li><p>2 匹配了用作字段分隔符的逗号。这也并不总是件好事。它可能会造<br> 成如下问题：当试图匹配某个数据字段中的特定数据时，这些数据又出现在其他数据字段中。如果需要用正则表达式匹配某个特定的数据实例，应该使用匹配操作符。</p></li></ul><h4 id="匹配操作符" tabindex="-1"><a class="header-anchor" href="#匹配操作符"><span>匹配操作符</span></a></h4><p>匹配操作符（matching operator）允许将正则表达式限定在记录中的特定数据字段。匹配操作符是波浪线（ ~ ）。可以指定匹配操作符、数据字段变量以及要匹配的正则表达式。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$1 ~ /^data/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>$1 变量代表记录中的第一个数据字段。这个表达式会过滤出第一个字段以文本 data 开头的所有记录。</p><p>下面是在gawk程序脚本中使用匹配操作符的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} $2 ~ /^data2/{print $0}&#39;</span> data1
data21,data22,data23,data24,data25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配操作符会用正则表达式 /^data2/ 来比较第二个数据字段，该正则表达式指明字符串要以文本 data2 开头。</p><p>这可是件强大的工具，gawk程序脚本中经常用它在数据文件中搜索特定的数据元素。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">gawk</span> -F: <span class="token string">&#39;$1 ~ /rich/{print $1,$NF}&#39;</span> /etc/passwd
rich /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子会在第一个数据字段中查找文本 rich 。如果在记录中找到了这个模式，它会打印该记录的第一个和最后一个数据字段值。</p><p>你也可以用 ! 符号来排除正则表达式的匹配。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token variable">$1</span> <span class="token operator">!</span>~ /expression/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果记录中没有找到匹配正则表达式的文本，程序脚本就会作用到记录数据。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> –F: <span class="token string">&#39;$1 !~ /rich/{print $1,$NF}&#39;</span> /etc/passwd

root /bin/bash
daemon /bin/sh
bin /bin/sh
sys /bin/sh
--- output truncated ---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，gawk程序脚本会打印/etc/passwd文件中与用户ID rich 不匹配的用户ID和登录shell。</p><h4 id="数学表达式" tabindex="-1"><a class="header-anchor" href="#数学表达式"><span>数学表达式</span></a></h4><p>除了正则表达式，你也可以在匹配模式中用数学表达式。这个功能在匹配数据字段中的数字值时非常方便。举个例子，如果你想显示所有属于root用户组（组ID为 0 ）的系统用户，可以用这个脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> -F: <span class="token string">&#39;$4 == 0{print $1}&#39;</span> /etc/passwd
root
<span class="token function">sync</span>
<span class="token function">shutdown</span>
<span class="token function">halt</span>
operator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段脚本会查看第四个数据字段含有值 0 的记录。在这个Linux系统中，有五个用户账户属于root用户组。</p><p>可以使用任何常见的数学比较表达式。</p><ul><li>x == y ：值x等于y。</li><li>x &lt;= y ：值x小于等于y。</li><li>x &lt; y ：值x小于y。</li><li>x &gt;= y ：值x大于等于y。</li><li>x &gt; y ：值x大于y。</li></ul><p>也可以对文本数据使用表达式，但必须小心。跟正则表达式不同，表达式必须完全匹配。数据必须跟模式严格匹配。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> -F, <span class="token string">&#39;$1 == &quot;data&quot;{print $1}&#39;</span> data1
<span class="token function">gawk</span> -F, <span class="token string">&#39;$1 == &quot;data11&quot;{print $1}&#39;</span> data1
data11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个测试没有匹配任何记录，因为第一个数据字段的值不在任何记录中。第二个测试用值 data11 匹配了一条记录。</p><h3 id="使用结构化命令" tabindex="-1"><a class="header-anchor" href="#使用结构化命令"><span>使用结构化命令</span></a></h3><h4 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h4><p>格式</p><blockquote><p>if (condition)</p><p>​ statement1</p><p>或者</p><p>if (condition) statement1</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data4
<span class="token number">10</span>
<span class="token number">5</span>
<span class="token number">13</span>
<span class="token number">50</span>
<span class="token number">34</span>
<span class="token function">gawk</span> <span class="token string">&#39;{if ($1 &gt; 20) print $1}&#39;</span> data4
<span class="token number">50</span>
<span class="token number">34</span>

<span class="token function">gawk</span> <span class="token string">&#39;{
&gt; if ($1 &gt; 20)
&gt; {
&gt; x = $1 * 2
&gt; print x
&gt; }
&gt; }&#39;</span> data4
<span class="token number">100</span>
<span class="token number">68</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，不能弄混 if 语句的花括号和用来表示程序脚本开始和结束的花括号。如果弄混了，gawk程序能够发现丢失了花括号，并产生一条错误消息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">gawk</span> <span class="token string">&#39;{
&gt; if ($1 &gt; 20)
&gt; {
&gt; x = $1 * 2
&gt; print x
&gt; }&#39;</span> data4
gawk: cmd. line:6: <span class="token punctuation">}</span>
gawk: cmd. line:6: ^ unexpected newline or end of string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; if ($1 &gt; 20)
&gt; {
&gt; x = $1 * 2
&gt; print x
&gt; } else
&gt; {
&gt; x = $1 / 2
&gt; print x
&gt; }}&#39;</span> data4
<span class="token number">5</span>
<span class="token number">2.5</span>
<span class="token number">6.5</span>
<span class="token number">100</span>
<span class="token number">68</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if (condition) statement1; else statement2</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{if ($1 &gt; 20) print $1 * 2; else print $1 / 2}&#39;</span> data4
<span class="token number">5</span>
<span class="token number">2.5</span>
<span class="token number">6.5</span>
<span class="token number">100</span>
<span class="token number">68</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while"><span>while</span></a></h4><blockquote><p>while (condition)</p><p>{</p><p>​ statements</p><p>}</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data5
<span class="token number">130</span> <span class="token number">120</span> <span class="token number">135</span>
<span class="token number">160</span> <span class="token number">113</span> <span class="token number">140</span>
<span class="token number">145</span> <span class="token number">170</span> <span class="token number">215</span>

<span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; i = 1
&gt; while (i &lt; 4)
&gt; {
&gt; total += $i
&gt; i++
&gt; }
&gt; avg = total / 3
&gt; print &quot;Average:&quot;,avg
&gt; }&#39;</span> data5
Average: <span class="token number">128.333</span>
Average: <span class="token number">137.667</span>
Average: <span class="token number">176.667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>while 语句会遍历记录中的数据字段，将每个值都加到 total 变量上，并将计数器变量 i 增值。</p><p>当计数器值等于 4 时， while 的条件变成了 FALSE ，循环结束，然后执行脚本中的下一条语句</p></blockquote><p>gawk编程语言支持在 while 循环中使用 break 语句和 continue 语句，允许你从循环中跳出。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; i = 1
&gt; while (i &lt; 4)
&gt; {
&gt; total += $i
&gt; if (i == 2)
&gt; break
&gt; i++
&gt; }
&gt; avg = total / 2
&gt; print &quot;The average of the first two data elements is:&quot;,avg
&gt; }&#39;</span> data5
The average of the first two data elements is: <span class="token number">125</span>
The average of the first two data elements is: <span class="token number">136.5</span>
The average of the first two data elements is: <span class="token number">157.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while"><span>do-while</span></a></h4><p>会在检查条件语句之前执行命令。</p><blockquote><p>do<br> {<br> statements<br> } while (condition)</p></blockquote><p>这种格式保证了语句会在条件被求值之前至少执行一次。当需要在求值条件前执行语句时，这个特性非常方便。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; i = 1
&gt; do
&gt; {
&gt; total += $i
&gt; i++
&gt; } while (total &lt; 150)
&gt; print total }&#39;</span> data5
<span class="token number">250</span>
<span class="token number">160</span>
<span class="token number">315</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这个脚本会读取每条记录的数据字段并将它们加在一起，直到累加结果达到150。如果第一个数据字段大于150（就像在第二条记录中看到的那样），则脚本会保证在条件被求值前至少读取第一个数据字段的内容。</p></blockquote><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>for</span></a></h4><p>for( variable assignment; condition; iteration process)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; for (i = 1; i &lt; 4; i++)
&gt; {
&gt; total += $i
&gt; }
&gt; avg = total / 3
&gt; print &quot;Average:&quot;,avg
&gt; }&#39;</span> data5
Average: <span class="token number">128.333</span>
Average: <span class="token number">137.667</span>
Average: <span class="token number">176.667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化打印-printf" tabindex="-1"><a class="header-anchor" href="#格式化打印-printf"><span>格式化打印 printf</span></a></h3><p>命令的格式：</p><blockquote><p>printf &quot;format string&quot;, var1, var2 . . .</p><p>format string 是格式化输出的关键。它会用文本元素和格式化指定符来具体指定如何呈现格式化输出。第一个格式化指定符对应列出的<br> 第一个变量，第二个对应第二个变量，依此类推。</p></blockquote><p>格式化指定符采用如下格式：</p><blockquote><p>%[modifier]control-letter</p></blockquote><p>其中 control-letter 是一个单字符代码，用于指明显示什么类型的数据，而 modifier 则定义了可选的格式化特性。</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>控制字母   描 述
c  将一个数作为ASCII字符显示
d  显示一个整数值
i  显示一个整数值（跟d一样）
e  用科学计数法显示一个数
f  显示一个浮点值
g  用科学计数法或浮点数显示（选择较短的格式）
o  显示一个八进制值
s  显示一个文本字符串
x  显示一个十六进制值
X  显示一个十六进制值，但用大写字母A~F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，如果你需要显示一个字符串变量，可以用格式化指定符 %s 。如果你需要显示一个整数值，可以用 %d 或 %i （ %d 是十进制数的C风格显示方式）。如果你要用科学计数法显示很大的值，就用 %e 格式化指定符</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
x = 10 * 100
printf &quot;The answer is: %e\\n&quot;, x
}&#39;</span>
The answer is: <span class="token number">1</span>.000000e+03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了控制字母外，还有3种修饰符可以用来进一步控制输出。</p><ul><li>width ：指定了输出字段最小宽度的数字值。如果输出短于这个值，printf 会将文本右对齐，并用空格进行填充。如果输出比指定的宽度还要长，则按照实际的长度输出。</li><li>prec ：这是一个数字值，指定了浮点数中小数点后面位数，或者文本字符串中显示的最大字符数。</li><li>-（减号）：指明在向格式化空间中放入数据时采用左对齐而不是右对齐。</li></ul><p>在使用 printf 语句时，你可以完全控制输出样式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {print $1,$4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {printf &quot;%s %s\\n&quot;, $1, $4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>，你需要在 printf 命令的末尾手动添加换行符来生成新行。没添加的话， printf 命令会继续在同一行打印后续输出。</p><p>如果需要用几个单独的 printf 命令在同一行上打印多个输出，这就会非常有用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} {printf &quot;%s &quot;, $1} END{printf &quot;\\n&quot;}&#39;</span> data1
data11 data21 data31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用修饰符来格式化第一个字符串值:</p><blockquote><p>通过添加一个值为 16 的修饰符，我们强制第一个字符串的输出宽度为16个字符。默认情况下，printf 命令使用右对齐来将数据放到格式化空间中。要改成左对齐，只需给修饰符加一个减号即可。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {printf &quot;%16s %s\\n&quot;, $1, $4}&#39;</span> data2
  Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
    Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
    
<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {printf &quot;%-16s %s\\n&quot;, $1, $4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理浮点值</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; for (i = 1; i &lt; 4; i++)
&gt; {
&gt; total += $i
&gt; }
&gt; avg = total / 3
&gt; printf &quot;Average: %5.1f\\n&quot;,avg
&gt; }&#39;</span> data5
Average: <span class="token number">128.3</span>
Average: <span class="token number">137.7</span>
Average: <span class="token number">176.7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用 %5.1f 格式指定符来强制 printf 命令将浮点值近似到小数点后一位。</p></blockquote><h3 id="使用函数" tabindex="-1"><a class="header-anchor" href="#使用函数"><span>使用函数</span></a></h3><h4 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数"><span>数学函数</span></a></h4><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>函 数    描 述
atan2(x, y)  x/y的反正切，x和y以弧度为单位
cos(x)  x的余弦，x以弧度为单位
exp(x)  x的指数函数
int(x)  x的整数部分，取靠近零一侧的值
log(x)  x的自然对数
rand( )  比0大比1小的随机浮点值
sin(x)  x的正弦，x以弧度为单位
sqrt(x)  x的平方根
srand(x)  为计算随机数指定一个种子值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>x <span class="token operator">=</span> int<span class="token punctuation">(</span><span class="token number">10</span> * rand<span class="token punctuation">(</span><span class="token punctuation">))</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x=exp(100); print x}&#39;</span>
<span class="token number">26881171418161356094253400435962903554686976</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x=exp(1000); print x}&#39;</span>
gawk: warning: exp argument <span class="token number">1000</span> is out of range
inf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一个例子会计算e的100次幂，虽然数值很大，但尚在系统的区间内。第二个例子尝试计算e的1000次幂，已经超出了系统的数值区间，所以就生成了一条错误消息。</p></blockquote><p>gawk还支持一些按位操作数据的函数。</p><ul><li>and(v1, v2) ：执行值 v1 和 v2 的按位与运算。</li><li>compl(val) ：执行 val 的补运算。</li><li>lshift(val, count) ：将值 val 左移 count 位。</li><li>or(v1, v2) ：执行值 v1 和 v2 的按位或运算。</li><li>rshift(val, count) ：将值 val 右移 count 位。</li><li>xor(v1, v2) ：执行值 v1 和 v2 的按位异或运算。</li></ul><p>位操作函数在处理数据中的二进制值时非常有用。</p><h4 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数"><span>字符串函数</span></a></h4><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>函 数    描 述
asort(s <span class="token punctuation">[</span>,d<span class="token punctuation">]</span>)  将数组s按数据元素值排序。索引值会被替换成表示新的排序顺序的连续数字。另外，如果指定了d，则排序后的数组会存储在数组d中

asorti(s <span class="token punctuation">[</span>,d<span class="token punctuation">]</span>)  将数组s按索引值排序。生成的数组会将索引值作为数据元素值，用连续数字索引来表明排序顺序。另外如果指定了d，排序后的数组会存储在数组d中

gensub(r, s, h <span class="token punctuation">[</span>, t<span class="token punctuation">]</span>)  查找变量<span class="token equation string">$0或目标字符串t（如果提供了的话）来匹配正则表达式r。如果h是一个以g或G开头的字符串，就用s替换掉匹配的文本。如果h是一个数字，它表示要替换掉第h处r匹配的地方

gsub(r, s [,t])  查找变量$</span>0或目标字符串t（如果提供了的话）来匹配正则表达式r。如果找到了，就全部替换成字符串s

index(s, t)  返回字符串t在字符串s中的索引值，如果没找到的话返回 0

length(<span class="token punctuation">[</span>s<span class="token punctuation">]</span>)  返回字符串s的长度；如果没有指定的话，返回<span class="token equation string">$0的长度

match(s, r [,a])  返回字符串s中正则表达式r出现位置的索引。如果指定了数组a，它会存储s中匹配正则表达式的那部分

split(s, a [,r])  将s用 FS 字符或正则表达式r（如果指定了的话）分开放到数组a中。返回字段的总数

sprintf(format,variables)  用提供的format和variables返回一个类似于printf输出的字符串

sub(r, s [,t])  在变量$</span>0或目标字符串t中查找正则表达式r的匹配。如果找到了，就用字符串s替换掉第一处匹配

substr(s, i <span class="token punctuation">[</span>,n<span class="token punctuation">]</span>)  返回s中从索引值i开始的n个字符组成的子字符串。如果未提供n，则返回s剩下的部分

tolower(s)  将s中的所有字符转换成小写

toupper(s)  将s中的所有字符转换成大写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x = &quot;testing&quot;; print toupper(x); print length(x) }&#39;</span>
TESTING
<span class="token number">7</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[&quot;a&quot;] = 1
&gt; var[&quot;g&quot;] = 2
&gt; var[&quot;m&quot;] = 3
&gt; var[&quot;u&quot;] = 4
&gt; asort(var, test)
&gt; for (i in test)
&gt; print &quot;Index:&quot;,i,&quot; - value:&quot;,test[i]
&gt; }&#39;</span>
Index: <span class="token number">4</span> - value: <span class="token number">4</span>
Index: <span class="token number">1</span> - value: <span class="token number">1</span>
Index: <span class="token number">2</span> - value: <span class="token number">2</span>
Index: <span class="token number">3</span> - value: <span class="token number">3</span>


<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{ FS=&quot;,&quot;}{
&gt; split($0, var)
&gt; print var[1], var[5]
&gt; }&#39;</span> data1
data11 data15
data21 data25
data31 data35
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时间函数" tabindex="-1"><a class="header-anchor" href="#时间函数"><span>时间函数</span></a></h4><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>mktime(datespec)  将一个按YYYY MM DD HH MM SS <span class="token punctuation">[</span>DST<span class="token punctuation">]</span>格式指定的日期转换成时间戳值 ①

strftime(format<span class="token punctuation">[</span>,timestamp<span class="token punctuation">]</span>)  将当前时间的时间戳或timestamp（如果提供了的话）转化格式化日期（采用shell函数date()的格式）

systime( )  返回当前时间的时间戳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; date = systime()
&gt; day = strftime(&quot;%A, %B %d, %Y&quot;, date)
&gt; print day
&gt; }&#39;</span>
Friday, December <span class="token number">26</span>, <span class="token number">2014</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数"><span>定义函数</span></a></h4><p>要定义自己的函数，必须用 function 关键字。</p><blockquote><p>function name([variables])<br> {<br> statements<br> }</p></blockquote><p>函数名必须能够唯一标识函数。可以在调用的gawk程序中传给这个函数一个或多个变量。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">printthird</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    print <span class="token variable">$3</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> myrand<span class="token punctuation">(</span>limit<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> int<span class="token punctuation">(</span>limit * rand<span class="token punctuation">(</span><span class="token punctuation">))</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用自定义函数" tabindex="-1"><a class="header-anchor" href="#使用自定义函数"><span>使用自定义函数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; function myprint()
&gt; {
&gt; printf &quot;%-16s - %s\\n&quot;, $1, $4
&gt; }
&gt; BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;}
&gt; {
&gt; myprint()
&gt; }&#39;</span> data2

Riley Mullen - <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams - <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell - <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建函数库" tabindex="-1"><a class="header-anchor" href="#创建函数库"><span>创建函数库</span></a></h4><p>首先，你需要创建一个存储所有gawk函数的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> funclib
<span class="token keyword">function</span> <span class="token function-name function">myprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;%-16s - %s<span class="token entity" title="\\n">\\n</span>&quot;</span>, <span class="token variable">$1</span>, <span class="token variable">$4</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> myrand<span class="token punctuation">(</span>limit<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> int<span class="token punctuation">(</span>limit * rand<span class="token punctuation">(</span><span class="token punctuation">))</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">printthird</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    print <span class="token variable">$3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>funclib文件含有三个函数定义。需要使用 -f 命令行参数来使用它们。很遗憾，不能将 -f 命令行参数和内联gawk脚本放到一起使用，不过可以在同一个命令行中使用多个 -f 参数。</p><p>因此，要使用库，只要创建一个含有你的gawk程序的文件，然后在命令行上同时指定库文件和程序文件就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> script4
BEGIN<span class="token punctuation">{</span> <span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>
myprint<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> funclib <span class="token parameter variable">-f</span> script4 data2
Riley Mullen - <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams - <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell - <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例来说，我们手边有一个数据文件，其中包含了两支队伍（每队两名选手）的保龄球比赛得分情况。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> scores.txt
Rich Blum,team1,100,115,95
Barbara Blum,team1,110,115,100
Christine Bresnahan,team2,120,115,118
Tim Bresnahan,team2,125,112,116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每位选手都有三场比赛的成绩，这些成绩都保存在数据文件中，每位选手由位于第二列的队名来标识。下面的脚本对每队的成绩进行了排序，并计算了总分和平均分。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> bowling.sh
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">team</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">gawk</span> –F, <span class="token string">&#39;{print $2}&#39;</span> scores.txt <span class="token operator">|</span> <span class="token function">uniq</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>
    <span class="token function">gawk</span> –v <span class="token assign-left variable">team</span><span class="token operator">=</span><span class="token variable">$team</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; total=0}
    {
        if ($2==team)
        {
            total += $3 + $4 + $5;
        }
    }
    END {
        avg = total / 6;
        print &quot;Total for&quot;, team, &quot;is&quot;, total, &quot;,the average is&quot;,avg
    }&#39;</span> scores.txt
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./bowling.sh
Total <span class="token keyword">for</span> team1 is <span class="token number">635</span>, the average is <span class="token number">105.833</span>
Total <span class="token keyword">for</span> team2 is <span class="token number">706</span>, the average is <span class="token number">117.667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,233),t=[l];function d(c,r){return s(),a("div",null,t)}const o=n(i,[["render",d],["__file","shell3-gawk.html.vue"]]),v=JSON.parse('{"path":"/linux/shell3-gawk.html","title":"Shell脚本编程-高级篇之gawk","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Shell脚本编程-高级篇之gawk","category":["Linux"],"headerDepth":5,"date":"2022-09-12T00:00:00.000Z","star":true,"tag":["Linux","Shell"],"description":"shell脚本高级实战案例篇之Gawk","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/shell3-gawk.html"}],["meta",{"property":"og:title","content":"Shell脚本编程-高级篇之gawk"}],["meta",{"property":"og:description","content":"shell脚本高级实战案例篇之Gawk"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell脚本编程-高级篇之gawk\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"gawk","slug":"gawk","link":"#gawk","children":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[{"level":4,"title":"从命令行读取程序脚本","slug":"从命令行读取程序脚本","link":"#从命令行读取程序脚本","children":[]},{"level":4,"title":"使用数据字段变量","slug":"使用数据字段变量","link":"#使用数据字段变量","children":[]},{"level":4,"title":"在程序脚本中使用多个命令","slug":"在程序脚本中使用多个命令","link":"#在程序脚本中使用多个命令","children":[]},{"level":4,"title":"从文件中读取程序","slug":"从文件中读取程序","link":"#从文件中读取程序","children":[]},{"level":4,"title":"在处理数据前运行脚本","slug":"在处理数据前运行脚本","link":"#在处理数据前运行脚本","children":[]},{"level":4,"title":"在处理数据后运行脚本","slug":"在处理数据后运行脚本","link":"#在处理数据后运行脚本","children":[]}]},{"level":3,"title":"使用变量","slug":"使用变量","link":"#使用变量","children":[{"level":4,"title":"内建变量","slug":"内建变量","link":"#内建变量","children":[]},{"level":4,"title":"自定义变量","slug":"自定义变量","link":"#自定义变量","children":[]}]},{"level":3,"title":"处理数组","slug":"处理数组","link":"#处理数组","children":[{"level":4,"title":"定义数组变量","slug":"定义数组变量","link":"#定义数组变量","children":[]},{"level":4,"title":"遍历数组变量","slug":"遍历数组变量","link":"#遍历数组变量","children":[]},{"level":4,"title":"删除数组变量","slug":"删除数组变量","link":"#删除数组变量","children":[]}]},{"level":3,"title":"使用模式","slug":"使用模式","link":"#使用模式","children":[{"level":4,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]},{"level":4,"title":"匹配操作符","slug":"匹配操作符","link":"#匹配操作符","children":[]},{"level":4,"title":"数学表达式","slug":"数学表达式","link":"#数学表达式","children":[]}]},{"level":3,"title":"使用结构化命令","slug":"使用结构化命令","link":"#使用结构化命令","children":[{"level":4,"title":"if","slug":"if","link":"#if","children":[]},{"level":4,"title":"while","slug":"while","link":"#while","children":[]},{"level":4,"title":"do-while","slug":"do-while","link":"#do-while","children":[]},{"level":4,"title":"for","slug":"for","link":"#for","children":[]}]},{"level":3,"title":"格式化打印 printf","slug":"格式化打印-printf","link":"#格式化打印-printf","children":[]},{"level":3,"title":"使用函数","slug":"使用函数","link":"#使用函数","children":[{"level":4,"title":"数学函数","slug":"数学函数","link":"#数学函数","children":[]},{"level":4,"title":"字符串函数","slug":"字符串函数","link":"#字符串函数","children":[]},{"level":4,"title":"时间函数","slug":"时间函数","link":"#时间函数","children":[]},{"level":4,"title":"定义函数","slug":"定义函数","link":"#定义函数","children":[]},{"level":4,"title":"使用自定义函数","slug":"使用自定义函数","link":"#使用自定义函数","children":[]},{"level":4,"title":"创建函数库","slug":"创建函数库","link":"#创建函数库","children":[]}]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":28.59,"words":8578},"filePathRelative":"linux/shell3-gawk.md","localizedDate":"2022年9月12日","excerpt":"<p>shell脚本高级实战案例篇之Gawk</p>\\n","autoDesc":true}');export{o as comp,v as data};
