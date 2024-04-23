import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,b as s,e as n,d as l,a}from"./app-D1uezr0R.js";const c={},r=a(`<p>将带你直接进入shell脚本基础实操，脚本的语法、函数和变量等等</p><h1 id="shell-脚本编程基础" tabindex="-1"><a class="header-anchor" href="#shell-脚本编程基础"><span>shell 脚本编程基础</span></a></h1><h2 id="构建基本脚本" tabindex="-1"><a class="header-anchor" href="#构建基本脚本"><span>构建基本脚本</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>
<span class="token comment"># 构建基本脚本</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span>demo
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token string">&#39;date&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token number">666666</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Let&#39;s see who&#39;s logged&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Rich says &quot;scripting is easy&quot;.&#39;</span>
<span class="token builtin class-name">echo</span> 使用系统变量：<span class="token environment constant">$HOME</span> + <span class="token environment constant">$LANG</span>
<span class="token builtin class-name">echo</span> 使用用户变量：<span class="token variable">$name</span> + <span class="token variable">$testing</span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 更改用户变量：<span class="token variable">$testing</span>
<span class="token builtin class-name">echo</span> 重定向输出 <span class="token operator">&gt;</span> demo.log
<span class="token builtin class-name">echo</span> 重定向输出追加 <span class="token operator">&gt;&gt;</span> demo.log

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span>./demo2.log</span>
重定向输入追加1
重定向输入追加2
重定向输入追加3
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expr-命令操作符" tabindex="-1"><a class="header-anchor" href="#expr-命令操作符"><span>expr 命令操作符</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ARG1 | ARG2  如果 ARG1 既不是null也不是零值，返回 ARG1 ；否则返回 ARG2
ARG1 &amp; ARG2  如果没有参数是null或零值，返回 ARG1 ；否则返回 0
ARG1 &lt; ARG2  如果 ARG1 小于 ARG2 ，返回 1 ；否则返回 0
ARG1 &lt;= ARG2 如果 ARG1 小于或等于 ARG2 ，返回 1 ；否则返回 0
ARG1 = ARG2  如果 ARG1 等于 ARG2 ，返回 1 ；否则返回 0
ARG1 != ARG2 如果 ARG1 不等于 ARG2 ，返回 1 ；否则返回 0
ARG1 &gt;= ARG2 如果 ARG1 大于或等于 ARG2 ，返回 1 ；否则返回 0
ARG1 &gt; ARG2  如果 ARG1 大于 ARG2 ，返回 1 ；否则返回 0
ARG1 + ARG2  返回 ARG1 和 ARG2 的算术运算和
ARG1 - ARG2  返回 ARG1 和 ARG2 的算术运算差
ARG1 * ARG2  返回 ARG1 和 ARG2 的算术乘积
ARG1 / ARG2  返回 ARG1 被 ARG2 除的算术商
ARG1 % ARG2  返回 ARG1 被 ARG2 除的算术余数
STRING : REGEXP  如果 REGEXP 匹配到了 STRING 中的某个模式，返回该模式匹配
match STRING REGEXP  如果 REGEXP 匹配到了 STRING 中的某个模式，返回该模式匹配
substr STRING POS LENGTH 返回起始位置为 POS （从 1 开始计数）、长度为 LENGTH 个字符的子字符串
index STRING CHARS  返回在 STRING 中找到 CHARS 字符串的位置；否则，返回 0
length STRING  返回字符串 STRING 的数值长度
+ TOKEN   将 TOKEN 解释成字符串，即使是个关键字
(EXPRESSION) 返回 EXPRESSION 的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">echo</span> 使用expr：
<span class="token function">expr</span> <span class="token number">12</span> + <span class="token number">22</span>
<span class="token function">expr</span> <span class="token number">12</span> <span class="token punctuation">\\</span>* <span class="token number">22</span>
<span class="token function">expr</span> <span class="token number">66</span> / <span class="token number">1</span>
<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> $var2 / $var1<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The result is <span class="token variable">$var3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方括号" tabindex="-1"><a class="header-anchor" href="#使用方括号"><span>使用方括号</span></a></h3><p>可以用美元符和方括号（ $[ operation ] ）将数学表达式围起来；</p><p>用方括号执行shell数学运算比用 expr 命令方便很多。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">echo</span> 使用方括号：
<span class="token assign-left variable">var3</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token number">1</span> + <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>
<span class="token assign-left variable">var4</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$var3</span> * <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var4</span>
<span class="token assign-left variable">var5</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$var4</span> * <span class="token number">2</span> + <span class="token punctuation">(</span> <span class="token number">12</span> + <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浮点解决方案" tabindex="-1"><a class="header-anchor" href="#浮点解决方案"><span>浮点解决方案</span></a></h3><p>格式：variable=$(echo &quot;options; expression&quot; | bc)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">echo</span> 浮点解决方案:
<span class="token assign-left variable">var6</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=4; 3.44 / 5&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The answer is <span class="token variable">$var6</span>
<span class="token assign-left variable">var7</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">var8</span><span class="token operator">=</span><span class="token number">45</span>
<span class="token assign-left variable">var9</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=4; <span class="token variable">$var7</span> / <span class="token variable">$var8</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The answer <span class="token keyword">for</span> this is <span class="token variable">$var9</span>
<span class="token assign-left variable">v1</span><span class="token operator">=</span><span class="token number">10.46</span>
<span class="token assign-left variable">v2</span><span class="token operator">=</span><span class="token number">43.67</span>
<span class="token assign-left variable">v3</span><span class="token operator">=</span><span class="token number">33.2</span>
<span class="token assign-left variable">v4</span><span class="token operator">=</span><span class="token number">71</span>
<span class="token assign-left variable">v5</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">bc</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
scale = 4
a1 = ( <span class="token variable">$v1</span> * <span class="token variable">$v2</span>)
b1 = (<span class="token variable">$v3</span> * <span class="token variable">$v4</span>)
a1 + b1
EOF</span>
<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The final answer <span class="token keyword">for</span> this mess is <span class="token variable">$v5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出脚本" tabindex="-1"><a class="header-anchor" href="#退出脚本"><span>退出脚本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span> status

查看退出状态码
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux退出状态码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>0  命令成功结束
1  一般性未知错误
2  不适合的shell命令
126  命令不可执行
127  没找到命令
128  无效的退出参数
128+x 与Linux信号x相关的严重错误
130  通过Ctrl+C终止的命令
255  正常范围之外的退出状态码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以改变这种默认行为，返回自己的退出状态码。 exit 命令允许你在脚本结束时指定一个退出状态码。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">exit</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用结构化命令" tabindex="-1"><a class="header-anchor" href="#使用结构化命令"><span>使用结构化命令</span></a></h2><h3 id="使用-if-then语句和else" tabindex="-1"><a class="header-anchor" href="#使用-if-then语句和else"><span>使用 if-then语句和else</span></a></h3><p>格式</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span>  <span class="token builtin class-name">command</span>
<span class="token keyword">then</span>
  commands
<span class="token keyword">fi</span>

<span class="token keyword">if</span>  <span class="token builtin class-name">command</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  commands
<span class="token keyword">else</span>
  commands
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;It worked&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> IamNotaCommand<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;It worked&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;It worked2&quot;</span>  
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;We are outside the if statement&quot;</span>

<span class="token assign-left variable">testuser</span><span class="token operator">=</span>user1
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token variable">$testuser</span> /etc/passwd<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This is my first command&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> okokokok
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> nononono
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套-if-语句" tabindex="-1"><a class="header-anchor" href="#嵌套-if-语句"><span>嵌套 if 语句</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span>  command1<span class="token punctuation">;</span> <span class="token keyword">then</span>
  commands
<span class="token keyword">elif</span>  command2<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">more</span>  commands
<span class="token keyword">elif</span>  command3<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">more</span>  commands
  <span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">]</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/user1/<span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> okokokok
  <span class="token keyword">fi</span>   
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> nononono
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> ok-5555
<span class="token keyword">elif</span> <span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/user1/<span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> ok-6666
<span class="token keyword">elif</span> <span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/user2/<span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> ok-8888 
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-命令" tabindex="-1"><a class="header-anchor" href="#test-命令"><span>test 命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">test</span> condition<span class="token punctuation">;</span> <span class="token keyword">then</span>
   commands
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不写 test 命令的 condition 部分，它会以非零的退出状态码退出，并执行 else 语句块。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No expression returns a True&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No expression returns a False&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bash shell提供了另一种条件测试方法，无需在 if-then 语句中声明 test 命令:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span>  condition <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
  commands
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test 命令可以判断三类条件：<strong>数值比较</strong>、<strong>字符串比较</strong>、<strong>文件比较</strong></p><h3 id="数值比较" tabindex="-1"><a class="header-anchor" href="#数值比较"><span>数值比较</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>n1 <span class="token parameter variable">-eq</span> n2  检查 n1 是否与 n2 相等
n1 <span class="token parameter variable">-ge</span> n2  检查 n1 是否大于或等于 n2
n1 <span class="token parameter variable">-gt</span> n2  检查 n1 是否大于 n2
n1 <span class="token parameter variable">-le</span> n2  检查 n1 是否小于或等于 n2
n1 <span class="token parameter variable">-lt</span> n2  检查 n1 是否小于 n2
n1 <span class="token parameter variable">-ne</span> n2  检查 n1 是否不等于 n2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">value1</span><span class="token operator">=</span><span class="token number">13</span>
<span class="token assign-left variable">value2</span><span class="token operator">=</span><span class="token number">11</span>
<span class="token assign-left variable">value3</span><span class="token operator">=</span><span class="token number">11</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$value1</span> <span class="token parameter variable">-gt</span> <span class="token variable">$value2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$value1</span> 大于 <span class="token variable">$value2</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$value2</span> <span class="token parameter variable">-eq</span> <span class="token variable">$value3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$value2</span> 等于 <span class="token variable">$value3</span>&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$value2</span> 不等于 <span class="token variable">$value3</span>&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较"><span>字符串比较</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>str1 <span class="token operator">=</span> str2  检查 str1 是否和 str2 相同
str1 <span class="token operator">!=</span> str2 检查 str1 是否和 str2 不同
str1 <span class="token operator">&lt;</span> str2  检查 str1 是否比 str2 小
str1 <span class="token operator">&gt;</span> str2  检查 str1 是否比 str2 大
<span class="token parameter variable">-n</span> str1   检查 str1 的长度是否非0
<span class="token parameter variable">-z</span> str1   检查 str1 的长度是否为0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">username</span><span class="token operator">=</span>root
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">=</span> <span class="token variable">$username</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Welcome <span class="token variable">$username</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">vs1</span><span class="token operator">=</span>baseball
<span class="token assign-left variable">vs2</span><span class="token operator">=</span>hockey
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$vs1</span> <span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token variable">$vs2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$vs1</span> &gt; <span class="token variable">$vs2</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$vs1</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token variable">$vs2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$vs1</span> &lt; <span class="token variable">$vs2</span>&quot;</span>
<span class="token keyword">else</span> 
  <span class="token builtin class-name">echo</span>   <span class="token string">&quot;<span class="token variable">$vs1</span> !&lt; !&gt; <span class="token variable">$vs2</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">vs3</span><span class="token operator">=</span>gfstes
<span class="token assign-left variable">vs4</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable">$vs3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs3</span>&#39; is not empty&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs3</span>&#39; is empty&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$vs4</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs4</span>&#39; is empty&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs4</span>&#39; is not empty&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件比较" tabindex="-1"><a class="header-anchor" href="#文件比较"><span>文件比较</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-d</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并是一个目录
<span class="token parameter variable">-e</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在
<span class="token parameter variable">-f</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并是一个文件
<span class="token parameter variable">-r</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并可读
<span class="token parameter variable">-s</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并非空
<span class="token parameter variable">-w</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并可写
<span class="token parameter variable">-x</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并可执行
<span class="token parameter variable">-O</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并属当前用户所有
<span class="token parameter variable">-G</span> <span class="token function">file</span>    检查 <span class="token function">file</span> 是否存在并且默认组与当前用户相同
file1 <span class="token parameter variable">-nt</span> file2  检查 file1 是否比 file2 新
file1 <span class="token parameter variable">-ot</span> file2  检查 file1 是否比 file2 旧
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">jump_directory</span><span class="token operator">=</span>/home/shell
<span class="token assign-left variable">jump_directory2</span><span class="token operator">=</span>/home/shell/demo.sh
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$jump_directory</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">$jump_directory</span> directory exists&quot;</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">$jump_directory</span>
  <span class="token function">ls</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">$jump_directory</span> directory does not exist&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;存在 <span class="token variable">$jump_directory2</span> 文件&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 不是空文件&quot;</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 文件可写&quot;</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 文件可执行&quot;</span>
  <span class="token keyword">fi</span>   
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 文件可执行&quot;</span>
  <span class="token keyword">fi</span> 
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="复合条件测试" tabindex="-1"><a class="header-anchor" href="#复合条件测试"><span>复合条件测试</span></a></h3><p>if-then 语句允许你使用布尔逻辑来组合测试。有两种布尔运算符可用：</p><ul><li>[ condition1 ] &amp;&amp; [ condition2 ]</li><li>[ condition1 ] || [ condition2 ]</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token environment constant">$HOME</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token environment constant">$HOME</span>/testing <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;The file exists and you can write to it&quot;</span>
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;I cannot write to the file&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="使用双方括号和双括号" tabindex="-1"><a class="header-anchor" href="#使用双方括号和双括号"><span>使用双方括号和双括号</span></a></h3><p><strong>双括号</strong>命令允许你在比较过程中使用高级数学表达式。 test 命令只能在比较中使用简单的算术操作。双括号命令提供了更多的数学符号，这些符号对于用过其他编程语言的程序员而言并不陌生。</p><p><code>(( expression ))</code></p><p>expression 可以是任意的数学赋值或比较表达式。除了 test 命令使用的标准数学运算符</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>val++  后增
val--  后减
++val  先增
--val  先减
!   逻辑求反
~   位求反
**   幂运算
&lt;&lt;   左位移
&gt;&gt;   右位移
<span class="token punctuation">&amp;</span>   位布尔和
|   位布尔或
<span class="token punctuation">&amp;</span><span class="token punctuation">&amp;</span>   逻辑和
||   逻辑或
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>双方括号</strong>命令提供了针对字符串比较的高级特性。双方括号命令的格式如下：</p><p>[[ expression ]]</p><p><strong>说明</strong> 双方括号在bash shell中工作良好。不过要小心，不是所有的shell都支持双方括号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">val12</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $val12 <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">90</span> <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
<span class="token variable"><span class="token punctuation">((</span> val13 <span class="token operator">=</span> $val12 <span class="token operator">**</span> <span class="token number">2</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The square of <span class="token variable">$val12</span> is <span class="token variable">$val13</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">==</span> r* <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token environment constant">$USER</span>&quot;</span>
<span class="token keyword">else</span> 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, I do not know you&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case-命令" tabindex="-1"><a class="header-anchor" href="#case-命令"><span>case 命令</span></a></h3><p>在模式匹配中，可以定义一个正则表达式来匹配字符串值</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">case</span>  variable <span class="token keyword">in</span>

pattern1 <span class="token operator">|</span>  pattern2 <span class="token punctuation">)</span>  

  commands1 <span class="token punctuation">;</span><span class="token punctuation">;</span>

pattern3 <span class="token punctuation">)</span>  

 commands2 <span class="token punctuation">;</span><span class="token punctuation">;</span>

*<span class="token punctuation">)</span>  default commands <span class="token punctuation">;</span><span class="token punctuation">;</span>

<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  <span class="token function">install</span><span class="token punctuation">)</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装ok&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  -h<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> { *默认执行 | install | start | stop | disable | -h }&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
     <span class="token builtin class-name">echo</span> “执行默认方法” <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多的结构化命令" tabindex="-1"><a class="header-anchor" href="#更多的结构化命令"><span>更多的结构化命令</span></a></h2><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环"><span>for循环</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> list
<span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#读取列表中的值</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">test</span> <span class="token keyword">in</span> Alabama Alaska Arizona Arkansas California Colorado
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> The next state is <span class="token variable">$test</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The last state we visited was <span class="token variable">$test</span>&quot;</span>
<span class="token assign-left variable">test</span><span class="token operator">=</span>Connecticut
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Wait, now we&#39;re visiting <span class="token variable">$test</span>&quot;</span>

<span class="token comment">#读取列表中的复杂值</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">test2</span> <span class="token keyword">in</span> I don<span class="token string">&#39;t know if this&#39;</span>ll work
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;word:<span class="token variable">$test2</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">test3</span> <span class="token keyword">in</span> Nevada <span class="token string">&quot;New Hampshire&quot;</span> <span class="token string">&quot;New Mexico&quot;</span> <span class="token string">&quot;New York&quot;</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Now going to <span class="token variable">$test3</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#从变量读取列表</span>
<span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token string">&quot;Alabama Alaska Arizona Arkansas Colorado&quot;</span>
<span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token variable">$list</span><span class="token string">&quot; Connecticut&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token variable">$list</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Have you ever visited <span class="token variable">$state</span>?&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#从命令读取值</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;states&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $file<span class="token variable">)</span></span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Visit beautiful <span class="token variable">$state</span>&quot;</span>
<span class="token keyword">done</span>
$ <span class="token function">cat</span> states
Alabama
Alaska
Arizona
Arkansas
Colorado
Connecticut
Delaware
Florida
Georgia

<span class="token comment">#更改字段分隔符：空格、制表符、换行符</span>
<span class="token comment">#IFS=$&#39;\\n&#39;  将这个语句加入到脚本中，告诉bash shell在数据值中忽略空格和制表符</span>
<span class="token comment">#IFS=$&#39;\\n&#39;:;&quot; 这个赋值会将换行符、冒号、分号和双引号作为字段分隔符。如何使用 IFS 字符解析数据没有任何限制。</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;states&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $file<span class="token variable">)</span></span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Visit beautiful <span class="token variable">$state</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#用通配符读取目录</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /home/demo/test/*
<span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a directory&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a file&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /home/demo/.b* /home/demo/badtest
<span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a directory&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a file&quot;</span>
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> doesn&#39;t exist&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inside loop: <span class="token variable">$b</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while"><span>while</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">command</span>
<span class="token keyword">do</span>
  other commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while 命令中定义的 test command 和 if-then 语句中的格式一模一样。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>
 <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token comment">#使用多个测试命令</span>
<span class="token comment">#只有最后一个测试命令的退出状态码会被用来决定什么时候结束循环。</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var2</span> 
 <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-ge</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;This is inside the loop&quot;</span>
 <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment">#【...】</span>

This is inside the loop
<span class="token number">1</span>
This is inside the loop
<span class="token number">0</span>
This is inside the loop
<span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while 循环会在 var1 变量等于 0 时执行 echo 语句，然后将 var1 变量的值减一。接下来再次执行测试命令，用于下一次迭代。 echo 测试命令被执行并显示了 var 变量的值（现在小于 0 了）。直到shell执行 test 测试命令， whle 循环才会停止。</p><p>这说明在含有多个命令的 while 语句中，在每次迭代中所有的测试命令都会被执行，包括测试命令失败的最后一次迭代。要留心这种用法。另一处要留意的是该如何指定多个测试命令。</p><p><strong>注意</strong>：每个测试命令都出现在单独的一行上。</p><h3 id="until" tabindex="-1"><a class="header-anchor" href="#until"><span>until</span></a></h3><p>until 命令和 while 命令工作的方式完全相反。 until 命令要求你指定一个通常返回非零退出状态码的测试命令。只有测试命令的退出状态码不为 0 ，bash shell才会执行循环中列出的命令。一旦测试命令返回了退出状态码 0 ，循环就结束了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token builtin class-name">test</span> commands
<span class="token keyword">do</span>
  other commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>
 <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">25</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test12
<span class="token number">100</span>
<span class="token number">75</span>
<span class="token number">50</span>
<span class="token number">25</span>

<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">until</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var2</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> Inside the loop: <span class="token variable">$var2</span>
 <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> - <span class="token number">25</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test13
<span class="token number">100</span>
Inside the loop: <span class="token number">100</span>
<span class="token number">75</span>
Inside the loop: <span class="token number">75</span>
<span class="token number">50</span>
Inside the loop: <span class="token number">50</span>
<span class="token number">25</span>
Inside the loop: <span class="token number">25</span>
<span class="token number">0</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$var1</span>&quot;</span>
    <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=4; <span class="token variable">$var1</span> / <span class="token variable">$var2</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$var1</span> / <span class="token variable">$var2</span> = <span class="token variable">$var3</span>&quot;</span>
        <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">done</span>
    <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test16
Outer loop: <span class="token number">3</span>
Inner loop: <span class="token number">3</span> / <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">3.0000</span>
Inner loop: <span class="token number">3</span> / <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1.5000</span>
Inner loop: <span class="token number">3</span> / <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">1.0000</span>
Inner loop: <span class="token number">3</span> / <span class="token number">4</span> <span class="token operator">=</span> .7500
Outer loop: <span class="token number">2</span>
Inner loop: <span class="token number">2</span> / <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2.0000</span>
Inner loop: <span class="token number">2</span> / <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1.0000</span>
Inner loop: <span class="token number">2</span> / <span class="token number">3</span> <span class="token operator">=</span> .6666
Inner loop: <span class="token number">2</span> / <span class="token number">4</span> <span class="token operator">=</span> .5000
Outer loop: <span class="token number">1</span>
Inner loop: <span class="token number">1</span> / <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1.0000</span>
Inner loop: <span class="token number">1</span> / <span class="token number">2</span> <span class="token operator">=</span> .5000
Inner loop: <span class="token number">1</span> / <span class="token number">3</span> <span class="token operator">=</span> .3333
Inner loop: <span class="token number">1</span> / <span class="token number">4</span> <span class="token operator">=</span> .2500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套循环" tabindex="-1"><a class="header-anchor" href="#嵌套循环"><span>嵌套循环</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-ge</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$var1</span>&quot;</span>
 <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> var2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> $var2 <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> var2<span class="token operator">++</span> <span class="token punctuation">))</span></span>
 <span class="token keyword">do</span>
  <span class="token assign-left variable">var3</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> * <span class="token variable">$var2</span> <span class="token punctuation">]</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$var1</span> * <span class="token variable">$var2</span> = <span class="token variable">$var3</span>&quot;</span>
 <span class="token keyword">done</span>
 <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test15
Outer loop: <span class="token number">5</span>
Inner loop: <span class="token number">5</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">5</span>
Inner loop: <span class="token number">5</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">10</span>
Outer loop: <span class="token number">4</span>
Inner loop: <span class="token number">4</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">4</span>
Inner loop: <span class="token number">4</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">8</span>
Outer loop: <span class="token number">3</span>
Inner loop: <span class="token number">3</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">3</span>
Inner loop: <span class="token number">3</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">6</span>
Outer loop: <span class="token number">2</span>
Inner loop: <span class="token number">2</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span>
Inner loop: <span class="token number">2</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span>
Outer loop: <span class="token number">1</span>
Inner loop: <span class="token number">1</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>
Inner loop: <span class="token number">1</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">2</span>
Outer loop: <span class="token number">0</span>
Inner loop: <span class="token number">0</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span>
Inner loop: <span class="token number">0</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环处理文件数据" tabindex="-1"><a class="header-anchor" href="#循环处理文件数据"><span>循环处理文件数据</span></a></h3><p>通常必须遍历存储在文件中的数据。这要求结合已经讲过的两种技术：</p><ul><li>使用嵌套循环</li><li>修改 IFS 环境变量</li></ul><p>通过修改 IFS 环境变量，就能强制 for 命令将文件中的每行都当成单独的一个条目来处理，即便数据中有空格也是如此。一旦从文件中提取出了单独的行，可能需要再次利用循环来提取行中的数据。</p><p>典型的例子是处理/etc/passwd文件中的数据。这要求你逐行遍历/etc/passwd文件，并将 IFS变量的值改成冒号，这样就能分隔开每行中的各个数据段了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span>.OLD</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">entry</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/passwd<span class="token variable">)</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Values in <span class="token variable">$entry</span> –&quot;</span>
    <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
    <span class="token keyword">for</span> <span class="token for-or-select variable">value</span> <span class="token keyword">in</span> <span class="token variable">$entry</span>
    <span class="token keyword">do</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$value</span>&quot;</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本使用了两个不同的 IFS 值来解析数据。第一个 IFS 值解析出/etc/passwd文件中的单独的行。内部 for 循环接着将 IFS 的值修改为冒号，允许你从/etc/passwd的行中解析出单独的值。</p><p>在运行这个脚本时，你会得到如下输出。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin shell]# sh demo2.sh
demo2.sh:行3: IFS.OLD=: 未找到命令
Values in root:x:0:0:root:/root:/bin/bash –
 root
 x
 0
 0
 root
 /root
 /bin/bash
Values in bin:x:1:1:bin:/bin:/sbin/nologin -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内部循环会解析出/etc/passwd每行中的各个值。这种方法在处理外部导入电子表格所采用的逗号分隔的数据时也很方便。</p><h3 id="控制循环" tabindex="-1"><a class="header-anchor" href="#控制循环"><span>控制循环</span></a></h3><ul><li>break 退出任意类型的循环，包括 <code>while</code> 和 <code>until</code> 循环</li><li><ul><li>跳出单个循环</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token comment">#!/bin/bash</span>
  
  <span class="token keyword">for</span> <span class="token for-or-select variable">var1</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span>
  <span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration number: <span class="token variable">$var1</span>&quot;</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The for loop is completed&quot;</span>
  ---
  <span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo3.sh</span>
  Iteration number: <span class="token number">1</span>
  Iteration number: <span class="token number">2</span>
  Iteration number: <span class="token number">3</span>
  Iteration number: <span class="token number">4</span>
  The <span class="token keyword">for</span> loop is completed
  ------------
  
  <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-lt</span> <span class="token number">8</span> <span class="token punctuation">]</span>
  <span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration: <span class="token variable">$var2</span>&quot;</span>
      <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The while loop is completed&quot;</span>
  ------------
  <span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo3.sh</span>
  Iteration: <span class="token number">1</span>
  Iteration: <span class="token number">2</span>
  Iteration: <span class="token number">3</span>
  Iteration: <span class="token number">4</span>
  The <span class="token keyword">while</span> loop is completed
  ------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>跳出内部循环</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">do</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$a</span>&quot;</span>
      <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
      <span class="token keyword">do</span>
          <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$b</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
              <span class="token builtin class-name">break</span>
          <span class="token keyword">fi</span>
          <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$b</span>&quot;</span>
      <span class="token keyword">done</span>
  <span class="token keyword">done</span>
  ---
  Outer loop: <span class="token number">1</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  Outer loop: <span class="token number">2</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  Outer loop: <span class="token number">3</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  ---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>跳出外部循环 break n</p><p>其中 n 指定了要跳出的循环层级。默认情况下， n 为 1 ，表明跳出的是当前的循环。如果你将n 设为 2 ， break 命令就会停止下一级的外部循环。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">do</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$a</span>&quot;</span>
      <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
      <span class="token keyword">do</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$b</span> <span class="token parameter variable">-gt</span> <span class="token number">4</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
          <span class="token builtin class-name">break</span> <span class="token number">2</span>
      <span class="token keyword">fi</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$b</span>&quot;</span>
      <span class="token keyword">done</span>
  <span class="token keyword">done</span>
  ---
  Outer loop: <span class="token number">1</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  ---
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>continue</li></ul><p>可以提前中止某次循环中的命令，但并不会完全终止整个循环。可以在循环内部设置shell不执行命令的条件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> var1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> var1 <span class="token operator">&lt;</span> <span class="token number">15</span><span class="token punctuation">;</span> var1<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-gt</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">continue</span>
    <span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration number: <span class="token variable">$var1</span>&quot;</span>
<span class="token keyword">done</span>
---
Iteration number: <span class="token number">1</span>
Iteration number: <span class="token number">2</span>
Iteration number: <span class="token number">3</span>
Iteration number: <span class="token number">4</span>
Iteration number: <span class="token number">5</span>
Iteration number: <span class="token number">10</span>
Iteration number: <span class="token number">11</span>
Iteration number: <span class="token number">12</span>
Iteration number: <span class="token number">13</span>
Iteration number: <span class="token number">14</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 if-then 语句的条件被满足时（值大于5且小于10），shell会执行 continue 命令，跳过此次循环中剩余的命令，但整个循环还会继续。当 if-then 的条件不再被满足时，一切又回到正轨。</p><p>也可以在 while 和 until 循环中使用 continue 命令，但要特别小心。当shell执行 continue 命令时，它会跳过剩余的命令。如果你在其中某个条件里对测试条件变量进行增值，问题就会出。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;while iteration: <span class="token variable">$var1</span>&quot;</span>
    <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-lt</span> <span class="token number">15</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token function">sleep</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-gt</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">continue</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inside iteration number: <span class="token variable">$var1</span>&quot;</span>
    <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
---
<span class="token keyword">while</span> iteration: <span class="token number">0</span>
 Inside iteration number: <span class="token number">0</span>
<span class="token keyword">while</span> iteration: <span class="token number">1</span>
 Inside iteration number: <span class="token number">1</span>
<span class="token keyword">while</span> iteration: <span class="token number">2</span>
 Inside iteration number: <span class="token number">2</span>
<span class="token keyword">while</span> iteration: <span class="token number">3</span>
 Inside iteration number: <span class="token number">3</span>
<span class="token keyword">while</span> iteration: <span class="token number">4</span>
 Inside iteration number: <span class="token number">4</span>
<span class="token keyword">while</span> iteration: <span class="token number">5</span>
 Inside iteration number: <span class="token number">5</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 if-then 的条件成立之前，所有一切看起来都很正常，然后shell执行了 continue 命令。当shell执行 continue 命令时，它跳过了 while 循环中余下的命令。不幸的是，被跳过的部分正是 $var1 计数变量增值的地方，而这个变量又被用于 while 测试命令中。这意味着这个变量的值不会再变化了，从前面连续的输出显示中你也可以看出来。</p><p>和 break 命令一样， continue 命令也允许通过命令行参数指定要继续执行哪一级循环：</p><p>continue n</p><p>其中 n 定义了要继续的循环层级。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration <span class="token variable">$a</span>:&quot;</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token number">4</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">continue</span> <span class="token number">2</span>
        <span class="token keyword">fi</span>
        <span class="token assign-left variable">var3</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$a</span> * <span class="token variable">$b</span> <span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot; The result of <span class="token variable">$a</span> * <span class="token variable">$b</span> = <span class="token variable">$var3</span>&quot;</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
---
Iteration <span class="token number">1</span>:
 The result of <span class="token number">1</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>
 The result of <span class="token number">1</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">2</span>
Iteration <span class="token number">2</span>:
 The result of <span class="token number">2</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span>
 The result of <span class="token number">2</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span>
Iteration <span class="token number">3</span>:
Iteration <span class="token number">4</span>:
 The result of <span class="token number">4</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">4</span>
 The result of <span class="token number">4</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">8</span>
Iteration <span class="token number">5</span>:
 The result of <span class="token number">5</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">5</span>
 The result of <span class="token number">5</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">10</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处用 continue 命令来停止处理循环内的命令，但会继续处理外部循环。注意，值为 3 的那次迭代并没有处理任何内部循环语句，因为尽管 continue 命令停止了处理过程，但外部循环依然会继续。</p><h3 id="重定向循环的输出" tabindex="-1"><a class="header-anchor" href="#重定向循环的输出"><span>重定向循环的输出</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /home/shell/*
<span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a directory&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a file&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span> <span class="token operator">&gt;</span> output.txt

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The number is <span class="token variable">$a</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">&gt;&gt;</span> output.txt
---
/home/shell/demo6.sh is a <span class="token function">file</span>
/home/shell/demo7.sh is a <span class="token function">file</span>
/home/shell/demo.sh is a <span class="token function">file</span>
/home/shell/output.txt is a <span class="token function">file</span>
The number is <span class="token number">1</span>
The number is <span class="token number">2</span>
The number is <span class="token number">3</span>
The number is <span class="token number">4</span>
The number is <span class="token number">5</span>
The number is <span class="token number">6</span>
The number is <span class="token number">7</span>
The number is <span class="token number">8</span>
The number is <span class="token number">9</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将循环的结果管接给另一个命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token string">&quot;North Dakota&quot;</span> Connecticut Illinois Alabama Tennessee
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$state</span> is the next place to go&quot;</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>
------------
Alabama is the next place to go
Connecticut is the next place to go
Illinois is the next place to go
North Dakota is the next place to go
Tennessee is the next place to go
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="综合实例" tabindex="-1"><a class="header-anchor" href="#综合实例"><span>综合实例</span></a></h3><ul><li>查找可执行文件</li></ul><p>首先是创建一个 for 循环，对环境变量 PATH 中的目录进行迭代。处理的时候别忘了设置 IFS 分隔符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token keyword">for</span> <span class="token for-or-select variable">folder</span> <span class="token keyword">in</span> <span class="token environment constant">$PATH</span>
<span class="token keyword">do</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你已经将各个目录存放在了变量 $folder 中，可以使用另一个 for 循环来迭代特定目录中的所有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$folder</span>/*
<span class="token keyword">do</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一步是检查各个文件是否具有可执行权限，你可以使用 if-then 测试功能来实现。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$file</span>&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，搞定了！将这些代码片段组合成脚本就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token keyword">for</span> <span class="token for-or-select variable">folder</span> <span class="token keyword">in</span> <span class="token environment constant">$PATH</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$folder</span>:&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$folder</span>/*
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$file</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行这段代码时，你会得到一个可以在命令行中使用的可执行文件的列表。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/sbin:
/usr/local/bin:
/usr/sbin:
 /usr/sbin/abrt-auto-reporting
 /usr/sbin/abrt-configuration
 /usr/sbin/abrtd
<span class="token punctuation">..</span><span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建多个用户账户</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token string">&quot;users.csv&quot;</span>
<span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;,&#39;</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> userid name
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;adding <span class="token variable">$userid</span>&quot;</span>
    <span class="token function">useradd</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> <span class="token parameter variable">-m</span> <span class="token variable">$userid</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$input</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">tail</span> <span class="token parameter variable">-3</span> /etc/passwd<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>christine,Christine Bresnahan
barbara,Barbara Blum
tim,Timothy Bresnahan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh user.sh</span>
adding christine
adding barbara
adding tim
christine:x:1002:1002:Christine Bresnahan:/home/christine:/bin/bash
barbara:x:1003:1003:Barbara Blum:/home/barbara:/bin/bash
tim:x:1004:1004:Timothy Bresnahan:/home/tim:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理用户输入" tabindex="-1"><a class="header-anchor" href="#处理用户输入"><span>处理用户输入</span></a></h2><h3 id="传递与读取参数-n" tabindex="-1"><a class="header-anchor" href="#传递与读取参数-n"><span>传递与读取参数 $n</span></a></h3>`,131),d={href:"http://demo.sh",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>在脚本内通过 \`$n\` 来获取参数（ $0 是程序名，$1 是第一个参数， $2 是第二个参数，依次类推，直到第九个参数 $9 ）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> 程序名称： <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 参数1 <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> 参数2 <span class="token variable">$2</span>

---
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo4.sh 123 3</span>
程序名称： demo4.sh
参数1 <span class="token number">123</span>
参数2 <span class="token number">3</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果脚本需要的命令行参数不止9个，你仍然可以处理，但是需要稍微修改一下变量名。在第9个变量之后，你必须在变量数字周围加上花括号，比如 <code>\${10}</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> 程序名称： <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 参11 <span class="token variable">$11</span>
<span class="token builtin class-name">echo</span> 参11 <span class="token variable">\${11}</span>
<span class="token builtin class-name">echo</span> 参12 <span class="token variable">\${12}</span>

---
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo4.sh 1 2 3 4 5 6 7 8 9 10 &quot;sdfw6513wer&quot; 12 13</span>
程序名称： demo4.sh
参11 <span class="token number">11</span>
参11 sdfw6513wer
参12 <span class="token number">12</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这种写法是不可取的</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> Hello <span class="token variable">$1</span>, glad to meet you.
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, you did not identify yourself. &quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跟踪参数" tabindex="-1"><a class="header-anchor" href="#跟踪参数"><span>跟踪参数 $# $* $@</span></a></h3><h4 id="参数统计" tabindex="-1"><a class="header-anchor" href="#参数统计"><span>参数统计 $#</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> Usage: <span class="token variable">$0</span> a b
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> The last parameter is <span class="token variable">\${<span class="token operator">!</span><span class="token operator">#</span>}</span>
<span class="token builtin class-name">echo</span> The last parameter is <span class="token variable">$#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抓取所有的数据" tabindex="-1"><a class="header-anchor" href="#抓取所有的数据"><span>抓取所有的数据 $* $@</span></a></h4><p>$* 和 $@ 变量可以用来轻松访问所有的参数。</p><p>$* 所有参数当作一个单词保存</p><p>$@ 所有参数当作同一字符串中的多个独立的单词，通常通过 for 命令得到每个参数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> parameter <span class="token punctuation">\\</span><span class="token variable">$*</span><span class="token builtin class-name">:</span> <span class="token variable">$*</span>
<span class="token builtin class-name">echo</span> parameter <span class="token punctuation">\\</span><span class="token variable">$@</span><span class="token builtin class-name">:</span> <span class="token variable">$@</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment">#</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$*</span> Parameter #<span class="token variable">$count</span> = <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token assign-left variable">count2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$@</span> Parameter #<span class="token variable">$count2</span> = <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count2</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$* Parameter #10 = 1 2 3 4 5 6 7 8 9 10 sdfw6513wer 12 13
$@ Parameter #100 = 1
$@ Parameter #101 = 2
$@ Parameter #102 = 3
$@ Parameter #103 = 4
$@ Parameter #104 = 5
$@ Parameter #105 = 6
$@ Parameter #106 = 7
$@ Parameter #107 = 8
$@ Parameter #108 = 9
$@ Parameter #109 = 10
$@ Parameter #110 = sdfw6513wer
$@ Parameter #111 = 12
$@ Parameter #112 = 13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用 for 命令遍历这两个特殊变量，你能看到它们是如何不同地处理命令行参数的。 $* 变量会将所有参数当成单个参数，而 $@ 变量会单独处理每个参数。这是遍历命令行参数的一个绝妙方法。</p><h3 id="移动变量" tabindex="-1"><a class="header-anchor" href="#移动变量"><span>移动变量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#count=1</span>
<span class="token comment">#while [ -n &quot;$1&quot; ]</span>
<span class="token comment">#do</span>
<span class="token comment">#    echo &quot;Parameter #$count = $1&quot;</span>
<span class="token comment">#    count=$[ $count + 1 ]</span>
<span class="token comment">#    shift</span>
<span class="token comment">#done</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original parameters: <span class="token variable">$*</span>&quot;</span>
<span class="token builtin class-name">shift</span> <span class="token number">2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Here&#39;s the new first parameter: <span class="token variable">$1</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh shift.sh 1 2 3 4 5 6 7 8 9 10</span>

The original parameters: <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>
Here&#39;s the new first parameter: <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本通过测试第一个参数值的长度执行了一个 while 循环。当第一个参数的长度为零时，循环结束。测试完第一个参数后， shift 命令会将所有参数的位置移动一个位置。</p><hr><p><strong>窍门</strong> 使用 shift 命令的时候要小心。如果某个参数被移出，它的值就被丢弃了，无法再恢复。</p><hr><h3 id="处理选项" tabindex="-1"><a class="header-anchor" href="#处理选项"><span>处理选项</span></a></h3><h4 id="处理简单选项" tabindex="-1"><a class="header-anchor" href="#处理简单选项"><span>处理简单选项</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    -b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>

$ ./test15.sh <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option
Found the <span class="token parameter variable">-c</span> option
<span class="token parameter variable">-d</span> is not an option
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分离参数和选项" tabindex="-1"><a class="header-anchor" href="#分离参数和选项"><span>分离参数和选项</span></a></h4><p>对Linux来说，这个特殊字符是双破折线（ -- ）。shell会用双破折线来表明选项列表结束。在双破折线之后，脚本就可以放心地将剩下的命令行参数当作参数，而不是选项来处理了。</p><p>要检查双破折线，只要在 case 语句中加一项就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --<span class="token punctuation">)</span> <span class="token builtin class-name">shift</span>
        <span class="token builtin class-name">break</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter #<span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在遇到双破折线时，脚本用 break 命令来跳出 while 循环。由于过早地跳出了循环，我们需要再加一条 shift 命令来将双破折线移出参数变量。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sh test16.sh -c -a -b test1 test2 test3
Found the -c option
Found the -a option
Found the -b option
test1 is not an option
test2 is not an option
test3 is not an option

sh test16.sh -c -a -b -- test1 test2 test3
Found the -c option
Found the -a option
Found the -b option
Parameter #1: test1
Parameter #2: test2
Parameter #3: test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当脚本遇到双破折线时，它会停止处理选项，并将剩下的参数都当作命令行参数。</p><h4 id="处理带值的选项" tabindex="-1"><a class="header-anchor" href="#处理带值的选项"><span>处理带值的选项</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        -b<span class="token punctuation">)</span> <span class="token assign-left variable">param</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with parameter value <span class="token variable">$param</span>&quot;</span>
            <span class="token builtin class-name">shift</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        --<span class="token punctuation">)</span> <span class="token builtin class-name">shift</span>
            <span class="token builtin class-name">break</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter #<span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sh</span> demo4.sh <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> test1 <span class="token parameter variable">-d</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with parameter value test1
<span class="token parameter variable">-d</span> is not an option
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中， case 语句定义了三个它要处理的选项。 -b 选项还需要一个额外的参数值。由于要处理的参数是 $1 ，额外的参数值就应该位于 $2 （因为所有的参数在处理完之后都会被移出）。只要将参数值从 $2 变量中提取出来就可以了。当然，因为这个选项占用了两个参数位，所以你还需要使用 shift 命令多移动一个位置。</p><p>只用这些基本的特性，整个过程就能正常工作，不管按什么顺序放置选项（但要记住包含每个选项相应的选项参数）。</p><p>现在shell脚本中已经有了处理命令行选项的基本能力，但还有一些限制。比如，如果你想将<br> 多个选项放进一个参数中时，它就不能工作了。</p>`,39),v={href:"http://test.sh",target:"_blank",rel:"noopener noreferrer"},b=a(`<h4 id="getopt" tabindex="-1"><a class="header-anchor" href="#getopt"><span>getopt</span></a></h4><p>它能够识别命令行参数，从而在脚本中解析它们时更方便。</p><blockquote><p>getopt optstring parameters</p><p>optstring 是这个过程的关键所在。它定义了命令行有效的选项字母，还定义了哪些选项字母需要参数值。<br> 首先，在 optstring 中列出你要在脚本中用到的每个命令行选项字母。然后，在每个需要参数值的选项字母后加一个冒号。 getopt 命令会基于你定义的 optstring 解析提供的参数。</p></blockquote><p>简单例子:</p><blockquote><p>如果指定了一个不在 optstring 中的选项，默认情况下， getopt 命令会产生一条错误消息。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># getopt ab:cd -a -b test1 -cd test2 test3</span>
 <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> test1 <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> -- test2 test3
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># getopt ab:cd -a -b test1 -cde test2 test3</span>
getopt：无效选项 -- e
 <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> test1 <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> -- test2 test3
 <span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># getopt -q ab:cd -a -b test1 -cde test2 test3</span>
 <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;test1&#39;</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> -- <span class="token string">&#39;test2&#39;</span> <span class="token string">&#39;test3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 ： getopt 命令选项必须出现在 optstring 之前。</p></blockquote><p><strong>在脚本中使用</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">set</span> -- <span class="token variable"><span class="token variable">$(</span>getopt <span class="token parameter variable">-q</span> ab:cd <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -b<span class="token punctuation">)</span> <span class="token assign-left variable">param</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with parameter value <span class="token variable">$param</span>&quot;</span>
            <span class="token builtin class-name">shift</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --<span class="token punctuation">)</span> <span class="token builtin class-name">shift</span>
            <span class="token builtin class-name">break</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter #<span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo5.sh -ac</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-c</span> option

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo5.sh -a -b test1 -cd test2 test3 test4</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with parameter value <span class="token string">&#39;test1&#39;</span>
Found the <span class="token parameter variable">-c</span> option
<span class="token parameter variable">-d</span> is not an option
Parameter <span class="token comment">#1: &#39;test2&#39;</span>
Parameter <span class="token comment">#2: &#39;test3&#39;</span>
Parameter <span class="token comment">#3: &#39;test4&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getopt 命令并不擅长处理带空格和引号的参数值。它会将空格当作参数分隔符，而不是根据双引号将二者当作一个参数。幸而还有另外一个办法能解决这个问题 <strong>（使用更高级的 getopts）</strong> 。</p><h4 id="getopts" tabindex="-1"><a class="header-anchor" href="#getopts"><span>getopts</span></a></h4><p>getopt会将命令行上选项和参数处理后只生成一个输出，而 getopts 命令能够和已有的shell参数变量配合默契。</p><p>每次调用它时，它一次只处理命令行上检测到的一个参数。处理完所有的参数后，它会退出并返回一个大于0的退出状态码。这让它非常适合用解析命令行所有参数的循环中。</p><p>getopts 命令的格式如下：</p><p><code>getopts optstring variable</code></p><p>optstring 值类似于 getopt 命令中的那个。有效的选项字母都会列在 optstring 中，如果选项字母要求有个参数值，就加一个冒号。要去掉错误消息的话，可以在 optstring 之前加一个冒号。 getopts 命令将当前参数保存在命令行中定义的 variable 中。</p><p>getopts 命令会用到两个环境变量。如果选项需要跟一个参数值， OPTARG 环境变量就会保存这个值。 OPTIND 环境变量保存了参数列表中 getopts 正在处理的参数位置。这样你就能在处理完选项之后继续处理其他命令行参数了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>
<span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :ab:c opt
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$opt</span>&quot;</span> <span class="token keyword">in</span>
        a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with value <span class="token variable">$OPTARG</span>&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Unknown option: <span class="token variable">$opt</span>&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo5.sh -ab test1 -c</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with value test1
Found the <span class="token parameter variable">-c</span> option
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -b &quot;test1 test2&quot; -a</span>
Found the <span class="token parameter variable">-b</span> option, with value test1 test2
Found the <span class="token parameter variable">-a</span> option
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -abtest1</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with value test1
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -acde</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-c</span> option
Unknown option: ?
Unknown option: ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特性：</strong></p><ul><li>可以在参数值中包含空格</li><li>将选项字母和参数值放在一起使用，而不用加空格</li><li>将命令行上找到的所有未定义的选项统一输出成问号</li><li>知道何时停止处理选项，并将参数留给你处理</li></ul><p>在 getopts 处理每个选项时，它会将 OPTIND 环境变量值增一。在 getopts 完成处理时，你可以使用 shift 命令和 OPTIND 值来移动参数。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :ab:cd opt
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$opt</span>&quot;</span> <span class="token keyword">in</span>
        a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with value <span class="token variable">$OPTARG</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        d<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -d option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Unknown option: <span class="token variable">$opt</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token builtin class-name">shift</span> $<span class="token punctuation">[</span> <span class="token environment constant">$OPTIND</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token comment">#</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter <span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -a -b test1 -d test2 test3 test4</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with value test1
Found the <span class="token parameter variable">-d</span> option
Parameter <span class="token number">1</span>: test2
Parameter <span class="token number">2</span>: test3
Parameter <span class="token number">3</span>: test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将选项标准化" tabindex="-1"><a class="header-anchor" href="#将选项标准化"><span>将选项标准化</span></a></h3><p>在创建shell脚本时，显然可以控制具体怎么做。你完全可以决定用哪些字母选项以及它们的<br> 用法。</p><p>但有些字母选项在Linux世界里已经拥有了某种程度的标准含义。如果你能在shell脚本中支<br> 持这些选项，脚本看起来能更友好一些：</p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>选项  描述
-a  显示所有对象
-c  生成一个计数
-d  指定一个目录
-e  扩展一个对象
-f  指定读入数据的文件
-h  显示命令的帮助信息
-i  忽略文本大小写
-l  产生输出的长格式版本
-n  使用非交互模式（批处理）
-o  将所有输出重定向到的指定的输出文件
-q  以安静模式运行
-r  递归地处理目录和文件
-s  以安静模式运行
-v  生成详细输出
-x  排除某个对象
-y  对所有问题回答yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获得用户输入-read" tabindex="-1"><a class="header-anchor" href="#获得用户输入-read"><span>获得用户输入 read</span></a></h3><p>尽管命令行选项和参数是从脚本用户处获得输入的一种重要方式，但有时脚本的交互性还需要更强一些。比如你想要在脚本运行时问个问题，并等待运行脚本的人来回答</p><h4 id="基本的读取-read-p" tabindex="-1"><a class="header-anchor" href="#基本的读取-read-p"><span>基本的读取 read -p</span></a></h4><p>read 命令从标准输入（键盘）或另一个文件描述符中接受输入。在收到输入后， read 命令<br> 会将数据放进一个变量。下面是 read 命令的最简单用法。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Enter your name: &quot;</span>
<span class="token builtin class-name">read</span> name
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">$name</span>, welcome to my program. &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sh test21.sh
Enter your name: xiao yu
Hello xiao yu, welcome to my program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>read 命令包含了 -p 选项，允许你直接在 read 命令行指定提示符</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please enter your age: &quot;</span> age name
<span class="token assign-left variable">days</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$age</span> * <span class="token number">365</span> <span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;name <span class="token variable">$name</span>; That makes you over <span class="token variable">$days</span> days old! &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sh</span> test22.sh
Please enter your age: <span class="token number">10</span> yu
name yu<span class="token punctuation">;</span> That makes you over <span class="token number">3650</span> days old<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在 read 命令行中不指定变量。如果是这样， read 命令会将它收到的任何数据都放进特殊环境变量 REPLY 中</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Testing the REPLY Environment variable</span>
<span class="token comment">#</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter your name: &quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> Hello <span class="token environment constant">$REPLY</span>, welcome to my program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sh test24.sh
Enter your name: Christine
Hello Christine, welcome to my program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>REPLY 环境变量会保存输入的所有数据，可以在shell脚本中像其他变量一样使用</p><h4 id="超时-read-t" tabindex="-1"><a class="header-anchor" href="#超时-read-t"><span>超时 read -t</span></a></h4><p>使用 read 命令时要当心。脚本很可能会一直苦等着脚本用户的输入。如果不管是否有数据输入，脚本都必须继续执行，你可以用 -t 选项来指定一个计时器。 -t 选项指定了 read 命令等待输入的秒数。当计时器过期后， read 命令会返回一个非零退出状态码。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please enter your name: &quot;</span> name
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">$name</span>, welcome to my script&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, too slow! &quot;</span>
<span class="token keyword">fi</span>

$ <span class="token function">sh</span> test25.sh
Please enter your name: Rich
Hello Rich, welcome to my script
$ <span class="token function">sh</span> test25.sh
Please enter your name:
Sorry, too slow<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果计时器过期， read 命令会以非零退出状态码退出。</p><p>当输入的字符达到预设的字符数时，就自动退出，将输入的数据赋给变量：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Do you want to continue [Y/N]? &quot;</span> answer
<span class="token keyword">case</span> <span class="token variable">$answer</span> <span class="token keyword">in</span>
    Y <span class="token operator">|</span> y<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;fine, continue on…&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    N <span class="token operator">|</span> n<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">echo</span> OK, goodbye
    <span class="token builtin class-name">exit</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sh test26.sh
Do you want to continue [Y/N]? Y
fine, continue on…
This is the end of the script
$
$ sh test26.sh
Do you want to continue [Y/N]? n
OK, goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-n 选项和值 1 一起使用，告诉 read 命令在接受单个字符后退出。</p><h4 id="隐藏方式读取-read-s" tabindex="-1"><a class="header-anchor" href="#隐藏方式读取-read-s"><span>隐藏方式读取 read -s</span></a></h4><p>有时你需要从脚本用户处得到输入，但又在屏幕上显示输入信息。其中典型的例子就是输入的密码，但除此之外还有很多其他需要隐藏的数据类型。</p><p>-s 选项可以避免在 read 命令中输入的数据出现在显示器上（实际上，数据会被显示，只是 read 命令会将文本颜色设成跟背景色一样）。这里有个在脚本中使用 -s 选项的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter your password: &quot;</span> pass
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Is your password really <span class="token variable">$pass</span>? &quot;</span>

$ <span class="token function">sh</span> test27.sh
Enter your password:
Is your password really T3st1ng?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从文件中读取" tabindex="-1"><a class="header-anchor" href="#从文件中读取"><span>从文件中读取</span></a></h4><p>也可以用 read 命令来读取Linux系统上文件里保存的数据。每次调用 read 命令，它都会从文件中读取一行文本。当文件中再没有内容时， read 命令会退出并返回非零退出状态码。</p><p>其中最难的部分是将文件中的数据传给 read 命令。最常见的方法是对文件使用 cat 命令，将结果通过管道直接传给含有 read 命令的 while 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bas</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token function">cat</span> <span class="token builtin class-name">test</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line <span class="token variable">$count</span>: <span class="token variable">$line</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Finished processing the file&quot;</span>
$
$ <span class="token function">cat</span> <span class="token builtin class-name">test</span>
The quick brown dog jumps over the lazy fox.
This is a test, this is only a test.
O Romeo, Romeo<span class="token operator">!</span> Wherefore art thou Romeo?
$
$ <span class="token function">sh</span> test28.sh
Line <span class="token number">1</span>: The quick brown dog jumps over the lazy fox.
Line <span class="token number">2</span>: This is a test, this is only a test.
Line <span class="token number">3</span>: O Romeo, Romeo<span class="token operator">!</span> Wherefore art thou Romeo?
Finished processing the <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="呈现数据" tabindex="-1"><a class="header-anchor" href="#呈现数据"><span>呈现数据</span></a></h2><h3 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出"><span>输入和输出</span></a></h3><p><strong>标准文件描述符</strong></p><p>Linux系统将每个对象当作文件处理。这包括输入和输出进程。Linux用文件描述符（ filedescriptor ）来标识每个文件对象。文件描述符是一个非负整数，可以唯一标识会话中打开的文件。每个进程一次最多可以有九个文件描述符。出于特殊目的，bash shell保留了前三个文件描述符（ 0 、 1 和 2 ）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>文件描述符   缩 写    描 述
0     STDIN  标准输入 &lt;
1     STDOUT  标准输出 &gt; &gt;&gt; 
2     STDERR  标准错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>STDIN</li></ul><p>对终端界面来说，标准输入是键盘。shell从 STDIN 文件描述符对应的键盘获得输入，在用户输入时处理每个字符。<br> 在使用输入重定向符号（ &lt; ）时，Linux会用重定向指定的文件来替换标准输入文件描述符。它会读取文件并提取数据，就如同它是键盘上键入的。许多bash命令能接受 STDIN 的输入，尤其是没有在命令行上指定文件的话。下面是个用 cat 命令处理 STDIN 输入的数据的例子。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat
this is a test
this is a test
this is a second test.
this is a second test.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在命令行上只输入 cat 命令时，它会从 STDIN 接受输入。输入一行， cat 命令就会显示出一行。</p><p>但你也可以通过 STDIN 重定向符号强制 cat 命令接受来自另一个非 STDIN 文件的输入。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;</span> testfile
This is the first line.
This is the second line.
This is the third line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 cat 命令会用testfile文件中的行作为输入。你可以使用这种技术将数据输入到任何能从STDIN 接受数据的shell命令中。</p><ul><li>STDOUT</li></ul><p>STDOUT 文件描述符代表shell的标准输出。在终端界面上，标准输出就是终端显示器。shell的所有输出（包括shell中运行的程序和脚本）会被定向到标准输出中，也就是显示器。</p><p>默认情况下，大多数bash命令会将输出导向 STDOUT 文件描述符。如第11章中所述，你可以用输出重定向来改变。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">&gt;</span> test2
$ <span class="token function">cat</span> test2
total <span class="token number">20</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">53</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:30 <span class="token builtin class-name">test</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">73</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:23 testfile

$ <span class="token function">who</span> <span class="token operator">&gt;&gt;</span> test2
$ <span class="token function">cat</span> test2
total <span class="token number">20</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">53</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:30 <span class="token builtin class-name">test</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">73</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:23 testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">15</span>:34 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>who 命令生成的输出会被追加到test2文件中已有数据的后面。</p><p>但是，如果你对脚本使用了标准输出重定向，你会遇到一个问题。下面的例子说明了可能会出现什么情况。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> badfile <span class="token operator">&gt;</span> test3
ls: cannot access badfile: No such <span class="token function">file</span> or directory
$ <span class="token function">cat</span> test3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当命令生成错误消息时，shell并未将错误消息重定向到输出重定向文件。shell创建了输出重定向文件，但错误消息却显示在了显示器屏幕上。注意，在显示test3文件的内容时并没有任何错误。test3文件创建成功了，只是里面是空的。</p><p>shell对于错误消息的处理是跟普通输出分开的。如果你创建了在后台模式下运行的shell脚本，通常你必须依赖发送到日志文件的输出消息。用这种方法的话，如果出现了错误信息，这些信息是不会出现在日志文件中的。你需要换种方法来处理。</p><ul><li>STDERR</li></ul><p>shell通过特殊的 STDERR 文件描述符来处理错误消息。 STDERR 文件描述符代表shell的标准错误输出。shell或shell中运行的程序和脚本出错时生成的错误消息都会发送到这个位置。</p><p>默认情况下， STDERR 文件描述符会和 STDOUT 文件描述符指向同样的地方（尽管分配给它们的文件描述符值不同）。也就是说，默认情况下，错误消息也会输出到显示器输出中。</p><p>但从上面的例子可以看出， STDERR 并不会随着 STDOUT 的重定向而发生改变。使用脚本时，你常常会想改变这种行为，尤其是当你希望将错误消息保存到日志文件中的时候。</p><p><strong>重定向错误</strong></p><p>你已经知道如何用重定向符号来重定向 STDOUT 数据。重定向 STDERR 数据也没太大差别，只要在使用重定向符号时定义 STDERR 文件描述符就可以了。有几种办法实现方法。</p><ul><li>只重定向错误</li></ul><p>STDERR 文件描述符被设成 2 。可以选择只重定向错误消息，将该文件描述符值放在重定向符号前。该值必须紧紧地放在重定向符号前，否则不会工作。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> badfile <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test4
$ <span class="token function">cat</span> test4
ls: cannot access badfile: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行该命令，错误消息不会出现在屏幕上了。该命令生成的任何错误消息都会保存在输出文件中。用这种方法，shell会只重定向错误消息，而非普通数据。这里是另一个将 STDOUT 和 STDERR 消息混杂在同一输出中的例子</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token builtin class-name">test</span> badtest test2 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test5
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">158</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2

$ <span class="token function">cat</span> test5
ls: cannot access test: No such <span class="token function">file</span> or directory
ls: cannot access badtest: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重定向错误和数据</li></ul><p>如果想重定向错误和正常输出，必须用两个重定向符号。需要在符号前面放上待重定向数据所对应的文件描述符，然后指向用于保存数据的输出文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token builtin class-name">test</span> test2 test3 badtest <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test6 <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> test7

$ <span class="token function">cat</span> test6
ls: cannot access test: No such <span class="token function">file</span> or directory
ls: cannot access badtest: No such <span class="token function">file</span> or directory
$ <span class="token function">cat</span> test7
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">158</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:33 test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以用这种方法将脚本的正常输出和脚本生成的错误消息分离开来。这样就可以轻松地识别出错误信息，再不用在成千上万行正常输出数据中翻腾了。</p></blockquote><p>如果愿意，也可以将 STDERR 和 STDOUT 的输出重定向到同一个输出文件。为此bash shell提供了特殊的重定向符号 &amp;&gt; 。当使用 &amp;&gt; 符时，命令生成的所有输出都会发送到同一位置，包括数据和错误。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token builtin class-name">test</span> test2 test3 badtest <span class="token operator">&amp;&gt;</span> test7

$ <span class="token function">cat</span> test7
ls: cannot access test: No such <span class="token function">file</span> or directory
ls: cannot access badtest: No such <span class="token function">file</span> or directory
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">158</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:33 test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在脚本中重定向输出输入" tabindex="-1"><a class="header-anchor" href="#在脚本中重定向输出输入"><span>在脚本中重定向输出输入</span></a></h3><p><strong>重定向输出</strong></p><h4 id="临时重定向行输出" tabindex="-1"><a class="header-anchor" href="#临时重定向行输出"><span>临时重定向行输出</span></a></h4><p>在重定向到文件描述符时，你必须在文件描述符数字之前加一个 &amp; ：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This is an error message&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is an error&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is normal output&quot;</span>

$ ./test8
This is an error
This is normal output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，Linux会将 STDERR 导向 STDOUT 。但是，如果你在运行脚本时重定向了STDERR ，脚本中所有导向 STDERR 的文本都会被重定向。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./test8 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test9
This is normal output
$ <span class="token function">cat</span> test9
This is an error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法非常适合在脚本中生成错误消息。如果有人用了你的脚本，他们可以像上面的例子中那样轻松地通过 STDERR 文件描述符重定向错误消息</p><h4 id="永久重定向脚本中的所有命令-exec" tabindex="-1"><a class="header-anchor" href="#永久重定向脚本中的所有命令-exec"><span>永久重定向脚本中的所有命令 exec</span></a></h4><p>如果脚本中有大量数据需要重定向，那重定向每个 echo 语句就会很烦琐。取而代之，你可以用 exec 命令告诉shell在脚本执行期间重定向某个特定文件描述符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>testout
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test of redirecting all output&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;from a script to another file.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;without having to redirect every individual line&quot;</span>

$ ./test10
$ <span class="token function">cat</span> testout
This is a <span class="token builtin class-name">test</span> of redirecting all output
from a script to another file.
without having to redirect every individual line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在脚本执行过程中重定向 STDOUT 。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># redirecting output to different locations</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>testerror
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the start of the script&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;now redirecting all output to another location&quot;</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>testout
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This output should go to the testout file&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;but this should go to the testerror file&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>

$ ./test11
This is the start of the script
now redirecting all output to another location
$ <span class="token function">cat</span> testout
This output should go to the testout <span class="token function">file</span>
$ <span class="token function">cat</span> testerror
but this should go to the testerror <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重定向输入</strong></p><blockquote><p>exec 0&lt; testfile</p></blockquote><p>这个命令会告诉shell它应该从文件 testfile 中获得输入，而不是 STDIN 。这个重定向只要在脚本需要输入时就会作用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span> testfile
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line #<span class="token variable">$count</span>: <span class="token variable">$line</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

$ ./test12
Line <span class="token comment">#1: This is the first line.</span>
Line <span class="token comment">#2: This is the second line.</span>
Line <span class="token comment">#3: This is the third line.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建自己的重定向" tabindex="-1"><a class="header-anchor" href="#创建自己的重定向"><span>创建自己的重定向</span></a></h3><p><strong>创建输出文件描述符</strong></p><p>可以用 exec 命令来给输出分配文件描述符。和标准的文件描述符一样，一旦将另一个文件描述符分配给一个文件，这个重定向就会一直有效，直到你重新分配。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#exec 3&gt;test13out</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&gt;</span>test13out
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This should display on the monitor&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;and this should be stored in the file&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Then this should be back on the monitor&quot;</span>

$ ./test13
This should display on the monitor
Then this should be back on the monitor
$ <span class="token function">cat</span> test13out
and this should be stored <span class="token keyword">in</span> the <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本用 exec 命令将文件描述符 3 重定向到另一个文件。当脚本执行 echo 语句时，输出内容会像预想中那样显示在 STDOUT 上。但你重定向到文件描述符 3 的那行 echo 语句的输出却进入了另一个文件。这样你就可以在显示器上保持正常的输出，而将特定信息重定向到文件中（比如日志文件）。</p><p><strong>重定向文件描述符</strong></p><p>现在介绍怎么恢复已重定向的文件描述符。你可以分配另外一个文件描述符给标准文件描述<br> 符，反之亦然。这意味着你可以将 STDOUT 的原来位置重定向到另一个文件描述符，然后再利用<br> 该文件描述符重定向回 STDOUT 。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>test14out
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This should store in the output file&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;along with this line.&quot;</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Now things should be back to normal&quot;</span>

$ ./test14
Now things should be back to normal
$ <span class="token function">cat</span> test14out
This should store <span class="token keyword">in</span> the output <span class="token function">file</span>
along with this line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，脚本将文件描述符 3 重定向到文件描述符1的当前位置，也就是 STDOUT 。这意味着任何发送给文件描述符 3 的输出都将出现在显示器上。</p><p>第二个 exec 命令将 STDOUT 重定向到文件，shell现在会将发送给 STDOUT 的输出直接重定向到输出文件中。但是，文件描述符 3 仍然指向 STDOUT 原来的位置，也就是显示器。如果此时将输出数据发送给文件描述符 3 ，它仍然会出现在显示器上，尽管 STDOUT 已经被重定向了。</p><p>在向 STDOUT （现在指向一个文件）发送一些输出之后，脚本将 STDOUT 重定向到文件描述符 3 的当前位置（现在仍然是显示器）。这意味着现在 STDOUT 又指向了它原来的位置：显示器。</p><p>这个方法可能有点叫人困惑，但这是一种在脚本中临时重定向输出，然后恢复默认输出设置的常用方法。</p><p><strong>创建输入文件描述符</strong></p><p>可以用和重定向输出文件描述符同样的办法重定向输入文件描述符。在重定向到文件之前，先将 STDIN 文件描述符保存到另外一个文件描述符，然后在读取完文件之后再将 STDIN 恢复到它原来的位置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&lt;</span><span class="token file-descriptor important">&amp;0</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span> testfile
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line #<span class="token variable">$count</span>: <span class="token variable">$line</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token file-descriptor important">&amp;6</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Are you done now? &quot;</span> answer
<span class="token keyword">case</span> <span class="token variable">$answer</span> <span class="token keyword">in</span>
    Y<span class="token operator">|</span>y<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Goodbye&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    N<span class="token operator">|</span>n<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, this is the end.&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
$ ./test15
Line <span class="token comment">#1: This is the first line.</span>
Line <span class="token comment">#2: This is the second line.</span>
Line <span class="token comment">#3: This is the third line.</span>
Are you <span class="token keyword">done</span> now? y
Goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，文件描述符 6 用来保存 STDIN 的位置。然后脚本将 STDIN 重定向到一个文件。read 命令的所有输入都来自重定向后的 STDIN （也就是输入文件）。</p><p>在读取了所有行之后，脚本会将 STDIN 重定向到文件描述符 6 ，从而将 STDIN 恢复到原先的位置。该脚本用了另外一个 read 命令来测试 STDIN 是否恢复正常了。这次它会等待键盘的输入。</p><p><strong>创建读写文件描述符</strong></p><p>尽管看起来可能会很奇怪，但是你也可以打开单个文件描述符来作为输入和输出。可以用同一个文件描述符对同一个文件进行读写。</p><p>不过用这种方法时，你要特别小心。由于你是对同一个文件进行数据读写，shell会维护一个内部指针，指明在文件中的当前位置。任何读或写都会从文件指针上次的位置开始。如果不够小心，它会产生一些令人瞠目的结果。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&lt;&gt;</span> testfile
<span class="token builtin class-name">read</span> line <span class="token operator">&lt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Read: <span class="token variable">$line</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>


$ <span class="token function">cat</span> testfile
This is the first line.
This is the second line.
This is the third line.
$ ./test16
Read: This is the first line.
$ <span class="token function">cat</span> testfile
This is the first line.
This is a <span class="token builtin class-name">test</span> line
ine.
This is the third line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这个例子用了 exec 命令将文件描述符 3 分配给文件 testfile 以进行文件读写。接下来，它通过分配好的文件描述符，使用 read 命令读取文件中的第一行，然后将这一行显示在 STDOUT 上。最后，它用 echo 语句将一行数据写入由同一个文件描述符打开的文件中。</p></blockquote><p>在运行脚本时，一开始还算正常。输出内容表明脚本读取了testfile文件中的第一行。但如果你在脚本运行完毕后，查看testfile文件内容的话，你会发现写入文件中的数据覆盖了已有的数据。</p><p>当脚本向文件中写入数据时，它会从文件指针所处的位置开始。 read 命令读取了第一行数据，所以它使得文件指针指向了第二行数据的第一个字符。在 echo 语句将数据输出到文件时，它会将数据放在文件指针的当前位置，覆盖了该位置的已有数据。</p><p><strong>关闭文件描述符</strong></p><p>如果你创建了新的输入或输出文件描述符，shell会在脚本退出时自动关闭它们。然而在有些情况下，你需要在脚本结束前手动关闭文件描述符。</p><p>要关闭文件描述符，将它重定向到特殊符号 &amp;- 。</p><p>exec 3&gt;&amp;-<br> 该语句会关闭文件描述符 3 ，不再在脚本中使用它。这里有个例子来说明当你尝试使用已关闭的文件描述符时会怎样。一旦关闭了文件描述符，就不能在脚本中向它写入任何数据，否则shell会生成错误消息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test17file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&amp;</span>-
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This won&#39;t work&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>

$ ./badtest
./badtest: <span class="token number">3</span>: Bad <span class="token function">file</span> descriptor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在关闭文件描述符时还要注意另一件事。如果随后你在脚本中打开了同一个输出文件，shell 会用一个新文件来替换已有文件。这意味着如果你输出数据，它就会覆盖已有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test17file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&amp;</span>-
<span class="token function">cat</span> test17file
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test17file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This&#39;ll be bad&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>

$ ./test17
This is a <span class="token builtin class-name">test</span> line of data
$ <span class="token function">cat</span> test17file
This&#39;ll be bad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在向test17file文件发送一个数据字符串并关闭该文件描述符之后，脚本用了 cat 命令来显示文件的内容。到目前为止，一切都还好。下一步，脚本重新打开了该输出文件并向它发送了另一个数据字符串。当显示该输出文件的内容时，你所能看到的只有第二个数据字符串。shell覆盖了原来的输出文件。</p></blockquote><h3 id="列出打开的文件描述符-lsof" tabindex="-1"><a class="header-anchor" href="#列出打开的文件描述符-lsof"><span>列出打开的文件描述符 lsof</span></a></h3><p>该命令会产生大量的输出。它会显示当前Linux系统上打开的每个文件的有关信息。这包括后台运行的所有进程以及登录到系统的任何用户。有大量的命令行选项和参数可以用来帮助过滤 lsof 的输出。最常用的有 -p 和 -d ，前者允许指定进程ID（PID），后者允许指定要显示的文件描述符编号。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin shell]# lsof -a -p $$ -d 0,1,2
COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
bash    1458 root    0u   CHR  136,0      0t0    3 /dev/pts/0
bash    1458 root    1u   CHR  136,0      0t0    3 /dev/pts/0
bash    1458 root    2u   CHR  136,0      0t0    3 /dev/pts/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>COMMAND 正在运行的命令名的前9个字符</li><li>PID 进程的PID</li><li>USER 进程属主的登录名</li><li>FD 文件描述符号以及访问类型（ r 代表读， w 代表写， u 代表读写）</li><li>TYPE 文件的类型（ CHR 代表字符型， BLK 代表块型， DIR 代表目录， REG 代表常规文件）</li><li>DEVICE 设备的设备号（主设备号和从设备号）</li><li>SIZE 如果有的话，表示文件的大小</li><li>NODE 本地文件的节点号</li><li>NAME 文件名</li></ul><p>与 STDIN 、 STDOUT 和 STDERR 关联的文件类型是字符型。因为 STDIN 、 STDOUT 和 STDERR 文件描述符都指向终端，所以输出文件的名称就是终端的设备名。所有3种标准文件都支持读和写（尽管向 STDIN 写数据以及从 STDOUT 读数据看起来有点奇怪）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test18file1
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span> test18file2
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">7</span>&lt;</span> testfile
/usr/sbin/lsof <span class="token parameter variable">-a</span> <span class="token parameter variable">-p</span> <span class="token variable">$$</span> -d0,1,2,3,6,7


$ ./test18
COMMAND PID <span class="token environment constant">USER</span> FD TYPE DEVICE SIZE NODE NAME
test18 <span class="token number">3594</span> demo 0u CHR <span class="token number">136,0</span> <span class="token number">2</span> /dev/pts/0
test18 <span class="token number">3594</span> demo 1u CHR <span class="token number">136,0</span> <span class="token number">2</span> /dev/pts/0
test18 <span class="token number">3594</span> demo 2u CHR <span class="token number">136,0</span> <span class="token number">2</span> /dev/pts/0
<span class="token number">18</span> <span class="token number">3594</span> demo 3w REG <span class="token number">253,0</span> <span class="token number">0</span> <span class="token number">360712</span> /home/demo/test18file1
<span class="token number">18</span> <span class="token number">3594</span> demo 6w REG <span class="token number">253,0</span> <span class="token number">0</span> <span class="token number">360715</span> /home/demo/test18file2
<span class="token number">18</span> <span class="token number">3594</span> demo 7r REG <span class="token number">253,0</span> <span class="token number">73</span> <span class="token number">360717</span> /home/demo/testfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阻止命令输出" tabindex="-1"><a class="header-anchor" href="#阻止命令输出"><span>阻止命令输出</span></a></h3><p>有时候，你可能不想显示脚本的输出。这在将脚本作为后台进程运行时很常见。如果在运行在后台的脚本出现错误消息，shell会通过电子邮件将它们发给进程的属主。这会很麻烦，尤其是当运行会生成很多烦琐的小错误的脚本时。</p><p>要解决这个问题，可以将 STDERR 重定向到一个叫作null文件的特殊文件。null文件跟它的名字很像，文件里什么都没有。shell输出到null文件的任何数据都不会保存，全部都被丢掉了。</p><p>在Linux系统上null文件的标准位置是/dev/null。你重定向到该位置的任何数据都会被丢掉，不会显示。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">&gt;</span> /dev/null
<span class="token function">cat</span> /dev/null
<span class="token function">ls</span> <span class="token parameter variable">-al</span> badfile test16 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建临时文件" tabindex="-1"><a class="header-anchor" href="#创建临时文件"><span>创建临时文件</span></a></h3><h4 id="创建本地临时文件" tabindex="-1"><a class="header-anchor" href="#创建本地临时文件"><span>创建本地临时文件</span></a></h4><p>模板可以包含任意文本文件名，在文件名末尾加上6个 X 就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ mktemp testing.XXXXXX
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> testing*
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:30 testing.UfIi13
$ mktemp testing.XXXXXX
testing.1DRLuV
$ mktemp testing.XXXXXX
testing.lVBtkW
$ mktemp testing.XXXXXX
testing.PgqNKG
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> testing*
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:57 testing.1DRLuV
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:57 testing.PgqNKG
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:30 testing.UfIi13
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:57 testing.lVBtkW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">tempfile</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp test19.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span><span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This script writes to temp file <span class="token variable">$tempfile</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the first line&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the second line.&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the last line.&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&amp;</span>-
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Done creating temp file. The contents are:&quot;</span>
<span class="token function">cat</span> <span class="token variable">$tempfile</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$tempfile</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null

$ ./test19
This script writes to temp <span class="token function">file</span> test19.vCHoya
Done creating temp file. The contents are:
This is the first line
This is the second line.
This is the last line.
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> test19*
-rwxr--r-- <span class="token number">1</span> demo demo <span class="token number">356</span> Oct <span class="token number">29</span> <span class="token number">22</span>:03 test19*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mktemp 命令来创建临时文件并将文件名赋给 $tempfile 变量。接着将这个临时文件作为文件描述符 3 的输出重定向文件。在将临时文件名显示在 STDOUT 之后，向临时文件中写入了几行文本，然后关闭了文件描述符。最后，显示出临时文件的内容，并用 rm 命令将其删除。</p></blockquote><h4 id="在-tmp-目录创建临时文件" tabindex="-1"><a class="header-anchor" href="#在-tmp-目录创建临时文件"><span>在 tmp 目录创建临时文件</span></a></h4><p>-t 选项会强制 mktemp 命令来在系统的临时目录来创建该文件。在用这个特性时， mktemp 命令会返回用来创建临时文件的全路径，而不是只有文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ mktemp <span class="token parameter variable">-t</span> test.XXXXXX
/tmp/test.xG3374
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> /tmp/test*
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-29 <span class="token number">18</span>:41 /tmp/test.xG3374
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 mktemp 命令返回了全路径名，你可以在Linux系统上的任何目录下引用该临时文件，不管临时目录在哪里。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># creating a temp file in /tmp</span>
<span class="token assign-left variable">tempfile</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-t</span> tmp.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test file.&quot;</span> <span class="token operator">&gt;</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the second line of the test.&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The temp file is located at: <span class="token variable">$tempfile</span>&quot;</span>
<span class="token function">cat</span> <span class="token variable">$tempfile</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$tempfile</span>


$ ./test20
The temp <span class="token function">file</span> is located at: /tmp/tmp.Ma3390
This is a <span class="token builtin class-name">test</span> file.
This is the second line of the test.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建临时目录" tabindex="-1"><a class="header-anchor" href="#创建临时目录"><span>创建临时目录</span></a></h4><p>-d 选项告诉 mktemp 命令来创建一个临时目录而不是临时文件。这样你就能用该目录进行任何需要的操作了，比如创建其他的临时文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># using a temporary directory</span>
<span class="token assign-left variable">tempdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-d</span> dir.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">cd</span> <span class="token variable">$tempdir</span>
<span class="token assign-left variable">tempfile1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp temp.XXXXXX<span class="token variable">)</span></span>
<span class="token assign-left variable">tempfile2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp temp.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">7</span>&gt;</span> <span class="token variable">$tempfile1</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token variable">$tempfile2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Sending data to directory <span class="token variable">$tempdir</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data for <span class="token variable">$tempfile1</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;7</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data for <span class="token variable">$tempfile2</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;8</span>
$ ./test21
Sending data to directory dir.ouT8S8
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span>
total <span class="token number">72</span>
drwxr-xr-x <span class="token number">3</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 ./
drwxr-xr-x <span class="token number">9</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> 09:44 <span class="token punctuation">..</span>/
drwx------ <span class="token number">2</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 dir.ouT8S8/
-rwxr--r-- <span class="token number">1</span> demo demo <span class="token number">338</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 test21*
$ <span class="token builtin class-name">cd</span> dir.ouT8S8
<span class="token punctuation">[</span>dir.ouT8S8<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span>
total <span class="token number">16</span>
drwx------ <span class="token number">2</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 ./
drwxr-xr-x <span class="token number">3</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 <span class="token punctuation">..</span>/
-rw------- <span class="token number">1</span> demo demo <span class="token number">44</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 temp.N5F3O6
-rw------- <span class="token number">1</span> demo demo <span class="token number">44</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 temp.SQslb7
<span class="token punctuation">[</span>dir.ouT8S8<span class="token punctuation">]</span>$ <span class="token function">cat</span> temp.N5F3O6
This is a <span class="token builtin class-name">test</span> line of data <span class="token keyword">for</span> temp.N5F3O6
<span class="token punctuation">[</span>dir.ouT8S8<span class="token punctuation">]</span>$ <span class="token function">cat</span> temp.SQslb7
This is a <span class="token builtin class-name">test</span> line of data <span class="token keyword">for</span> temp.SQslb7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="记录消息" tabindex="-1"><a class="header-anchor" href="#记录消息"><span>记录消息</span></a></h3><p>将输出同时发送到显示器和日志文件，这种做法有时候能够派上用场。你不用将输出重定向两次，只要用特殊的 tee 命令就行。</p><p>tee 命令相当于管道的一个T型接头。它将从 STDIN 过来的数据同时发往两处。一处是STDOUT ，另一处是 tee 命令行所指定的文件名：</p><p>tee filename</p><p>由于 tee 会重定向来自 STDIN 的数据，你可以用它配合管道命令来重定向命令输出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">date</span> <span class="token operator">|</span> <span class="token function">tee</span> testfile
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:56:21 EDT <span class="token number">2014</span>
$ <span class="token function">cat</span> testfile
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:56:21 EDT <span class="token number">2014</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，默认情况下， tee 命令会在每次使用时覆盖输出文件内容，如果你想将数据追加到文件中，必须用 -a 选项</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">who</span> <span class="token operator">|</span> <span class="token function">tee</span> testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">18</span>:41 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>
$ <span class="token function">cat</span> testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">18</span>:41 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>

$ <span class="token function">date</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> testfile
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:58:05 EDT <span class="token number">2014</span>
$ <span class="token function">cat</span> testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">18</span>:41 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:58:05 EDT <span class="token number">2014</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个方法，既能将数据保存在文件中，也能将数据显示在屏幕上</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">tempfile</span><span class="token operator">=</span>test22file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the start of the test&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the second line of the test&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the test&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token variable">$tempfile</span>

$ ./test22
This is the start of the <span class="token builtin class-name">test</span>
This is the second line of the <span class="token builtin class-name">test</span>
This is the end of the <span class="token builtin class-name">test</span>
$ <span class="token function">cat</span> test22file
This is the start of the <span class="token builtin class-name">test</span>
This is the second line of the <span class="token builtin class-name">test</span>
This is the end of the <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="综合实例-1" tabindex="-1"><a class="header-anchor" href="#综合实例-1"><span>综合实例</span></a></h3><p>这个样例脚本两件事都做了。它读取.csv 格式的数据文件，输出SQL INSERT 语句来将数据插入数据库。</p><p>使用命令行参数指定待读取的.csv文件。.csv格式用于从电子表格中导出数据，所以你可以把数据库数据放入电子表格中，把电子表格保存成.csv格式，读取文件，然后创建 INSERT 语句将数据插入MySQL数据库。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">outfile</span><span class="token operator">=</span><span class="token string">&#39;members.sql&#39;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;,&#39;</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> lname fname address city state <span class="token function">zip</span>
<span class="token keyword">do</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$outfile</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
INSERT INTO members (lname,fname,address,city,state,zip) VALUES
(&#39;<span class="token variable">$lname</span>&#39;, &#39;<span class="token variable">$fname</span>&#39;, &#39;<span class="token variable">$address</span>&#39;, &#39;<span class="token variable">$city</span>&#39;, &#39;<span class="token variable">$state</span>&#39;, &#39;<span class="token variable">$zip</span>&#39;);
EOF</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">\${1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制脚本" tabindex="-1"><a class="header-anchor" href="#控制脚本"><span>控制脚本</span></a></h2><h3 id="处理信号" tabindex="-1"><a class="header-anchor" href="#处理信号"><span>处理信号</span></a></h3><h4 id="信号" tabindex="-1"><a class="header-anchor" href="#信号"><span>信号</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>信号  值    描述
1   SIGHUP  挂起进程
2   SIGINT  终止进程
3   SIGQUIT  停止进程
9   SIGKILL  无条件终止进程
15  SIGTERM  尽可能终止进程
17  SIGSTOP  无条件停止进程，但不是终止进程
18  SIGTSTP  停止或暂停进程，但不终止进程
19  SIGCONT  继续运行停止的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sleep-生成信号-中断、暂停进程-、" tabindex="-1"><a class="header-anchor" href="#sleep-生成信号-中断、暂停进程-、"><span>sleep((生成信号:中断、暂停进程)、</span></a></h4><p>sleep 100;</p><h4 id="kill-结束进程" tabindex="-1"><a class="header-anchor" href="#kill-结束进程"><span>kill(结束进程)</span></a></h4><p>kill -9 2152</p><h4 id="trap-捕获信号" tabindex="-1"><a class="header-anchor" href="#trap-捕获信号"><span>trap(捕获信号)</span></a></h4><blockquote><p>trap commands signals</p></blockquote><p>展示了如何使用 trap 命令来忽略 SIGINT 信号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; Sorry! I have trapped Ctrl-C&#39;&quot;</span> SIGINT

<span class="token builtin class-name">echo</span> This is a <span class="token builtin class-name">test</span> script

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the test script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./test1.sh
This is a <span class="token builtin class-name">test</span> script
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
^C Sorry<span class="token operator">!</span> I have trapped Ctrl-C
Loop <span class="token comment">#6</span>
Loop <span class="token comment">#7</span>
Loop <span class="token comment">#8</span>
^C Sorry<span class="token operator">!</span> I have trapped Ctrl-C
Loop <span class="token comment">#9</span>
Loop <span class="token comment">#10</span>
This is the end of the <span class="token builtin class-name">test</span> script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="捕获脚本退出" tabindex="-1"><a class="header-anchor" href="#捕获脚本退出"><span>捕获脚本退出</span></a></h4><p>除了在shell脚本中捕获信号，你也可以在shell脚本退出时进行捕获。这是在shell完成任务时执行命令的一种简便方法。</p><p>要捕获shell脚本的退出，只要在 trap 命令后加上 EXIT 信号就行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo Goodbye...&quot;</span> EXIT

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>


$ ./test2.sh
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
Goodbye<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改或移除捕获" tabindex="-1"><a class="header-anchor" href="#修改或移除捕获"><span>修改或移除捕获</span></a></h4><p>要想在脚本中的不同位置进行不同的捕获处理，只需重新使用带有新选项的 trap 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Modifying a set trap</span>
<span class="token comment">#</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; Sorry... Ctrl-C is trapped.&#39;&quot;</span> SIGINT
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; I modified the trap!&#39;&quot;</span> SIGINT
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Second Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改了信号捕获之后，脚本处理信号的方式就会发生变化。但如果一个信号是在捕获被修改前接收到的，那么脚本仍然会根据最初的 trap 命令进行处理。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sh test3.sh
Loop #1
Loop #2
Loop #3
^C Sorry... Ctrl-C is trapped.
Loop #4
Loop #5
Second Loop #1
Second Loop #2
^C I modified the trap!
Second Loop #3
Second Loop #4
Second Loop #5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以删除已设置好的捕获。只需要在 trap 命令与希望恢复默认行为的信号列表之间加上两个破折号就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Modifying a set trap</span>
<span class="token comment">#</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; Sorry... Ctrl-C is trapped.&#39;&quot;</span> SIGINT
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">trap</span> -- SIGINT
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I just removed the trap&quot;</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Second Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

$ ./test3b.sh
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
I just removed the <span class="token builtin class-name">trap</span>
Second Loop <span class="token comment">#1</span>
Second Loop <span class="token comment">#2</span>
Second Loop <span class="token comment">#3</span>
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除信号捕获后，脚本按照默认行为来处理 SIGINT 信号，也就是终止脚本运行。但如果信号是在捕获被移除前接收到的，那么脚本会按照原先 trap 命令中的设置进行处理。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./test3b.sh
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
^C Sorry<span class="token punctuation">..</span>. Ctrl-C is trapped.
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
I just removed the <span class="token builtin class-name">trap</span>
Second Loop <span class="token comment">#1</span>
Second Loop <span class="token comment">#2</span>
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后台模式" tabindex="-1"><a class="header-anchor" href="#后台模式"><span>后台模式 &amp;</span></a></h3><p>当 &amp; 符放到命令后时，它会将命令和bash shell分离开来，将命令作为系统中的一个独立的后台进程运行。</p><p>后台运行脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./test4.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在非控制台下运行脚本（在退出终端会话时阻止进程退出）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./test1.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="作业控制-jobs" tabindex="-1"><a class="header-anchor" href="#作业控制-jobs"><span>作业控制 jobs</span></a></h3><p><strong>查看作业</strong></p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>参 数   描 述
-l  列出进程的PID以及作业号
-n  只列出上次shell发出的通知后改变了状态的作业
-p  只列出作业的PID
-r  只列出运行中的作业
-s  只列出已停止的作业
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test10.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- Running ./test10.sh <span class="token operator">&gt;</span> test10.out <span class="token operator">&amp;</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">1897</span> Stopped ./test10.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- <span class="token number">1917</span> Running ./test10.sh <span class="token operator">&gt;</span> test10.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带加号<code>+</code>的作业会被当做默认作业。带减号<code>-</code>的作业成为下一个默认作业。</p><p>下面例子说明了队列中的下一个作业在默认作业移除时是如何成为默认作业的。有3个独立的进程在后台被启动。 jobs 命令显示出了这些进程、进程的PID及其状态。注意，默认进程（带有加号的那个）是最后启动的那个进程，也就是3号作业。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1950</span>
$ ./test10.sh <span class="token operator">&gt;</span> test10b.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">1952</span>
$ ./test10.sh <span class="token operator">&gt;</span> test10c.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">1955</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1950</span> Running ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- <span class="token number">1952</span> Running ./test10.sh <span class="token operator">&gt;</span> test10b.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>+ <span class="token number">1955</span> Running ./test10.sh <span class="token operator">&gt;</span> test10c.out <span class="token operator">&amp;</span>
$ <span class="token function">kill</span> <span class="token number">1955</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- <span class="token number">1950</span> Running ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ <span class="token number">1952</span> Running ./test10.sh <span class="token operator">&gt;</span> test10b.out <span class="token operator">&amp;</span>
$ <span class="token function">kill</span> <span class="token number">1952</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">1950</span> Running ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重启停止的作业</strong></p><p>要以后台模式重启一个作业，可用 bg n 命令加上作业号。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./test11.sh
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test11.sh
$ <span class="token function">bg</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ ./test11.sh <span class="token operator">&amp;</span>
$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Running ./test11.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令 bg 2 用于将第二个作业置于后台模式。注意，当使用 jobs 命令时，它列出了作业及其状态，即便是默认作业当前并未处于后台模式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./test11.sh
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test11.sh
$ ./test12.sh
^Z
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ Stopped ./test12.sh
$ <span class="token function">bg</span> <span class="token number">2</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ ./test12.sh <span class="token operator">&amp;</span>
$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test11.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- Running ./test12.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要以前台模式重启作业，可用带有作业号的 fg 命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">fg</span> <span class="token number">2</span>
./test12.sh
This is the script&#39;s end<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调整谦让度-nice" tabindex="-1"><a class="header-anchor" href="#调整谦让度-nice"><span>调整谦让度 nice</span></a></h3><p>调度优先级是个整数值，从 -20（最高优先级）到+19（最低优先级）。默认情况下，bash shell<br> 以优先级0来启动所有进程</p><p>nice 命令允许你设置命令启动时的调度优先级。要让命令以更低的优先级运行，只要用 nice 的 -n 命令行来指定新的优先级级别。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">nice</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4973</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">4973</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">4973</span> <span class="token number">4721</span> <span class="token number">10</span> /bin/bash ./test4.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nice 命令会阻止普通系统用户来提高命令的优先级</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">nice</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4985</span>
$ nice: cannot <span class="token builtin class-name">set</span> niceness: Permission denied
 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Done <span class="token function">nice</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nice 命令的 -n 选项并不是必须的，只需要在破折号后面跟上优先级就行了.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">nice</span> <span class="token parameter variable">-10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4993</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">4993</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">4993</span> <span class="token number">4721</span> <span class="token number">10</span> /bin/bash ./test4.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>renice</strong></p><p>有时你想改变系统上已运行命令的优先级。这正是 renice 命令可以做到的。它允许你指定运行进程的PID来改变它的优先级。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./test11.sh <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">5055</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">5055</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">5055</span> <span class="token number">4721</span> <span class="token number">0</span> /bin/bash ./test11.sh
$ <span class="token function">renice</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> <span class="token parameter variable">-p</span> <span class="token number">5055</span>
<span class="token number">5055</span>: old priority <span class="token number">0</span>, new priority <span class="token number">10</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">5055</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">5055</span> <span class="token number">4721</span> <span class="token number">10</span> /bin/bash ./test11.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>renice 命令会自动更新当前运行进程的调度优先级。和 nice 命令一样， renice 命令也有一些限制：</p><ul><li>只能对属于你的进程执行 renice ；</li><li>只能通过 renice 降低进程的优先级；</li><li>root用户可以通过 renice 来任意调整进程的优先级。</li></ul><p>如果想完全控制运行进程，必须以root账户身份登录或使用 sudo 命令。</p><h3 id="定时运行作业" tabindex="-1"><a class="header-anchor" href="#定时运行作业"><span>定时运行作业</span></a></h3><h4 id="at" tabindex="-1"><a class="header-anchor" href="#at"><span>at</span></a></h4><p><code>at</code> 命令会将作业提交到队列中，指定shell何时运行该作业。 at 的守护进程 atd 会以后台模式运行，检查作业队列来运行作业。大多数Linux发行版会在启动时运行此守护进程。</p><p><code>atd</code> 守护进程会检查系统上的一个特殊目录（通常位于/var/spool/at）来获取用 at 命令提交的作业。默认情况下， atd 守护进程会每60秒检查一下这个目录。有作业时， atd 守护进程会检查作业设置运行的时间。如果时间跟当前时间匹配， atd 守护进程就会运行此作业。</p><p><em>命令的格式:</em></p><blockquote><p>at [-f filename] time</p><p>默认情况下， at 命令会将 STDIN 的输入放到队列中。</p><p><code>-f</code> 参数来指定用于读取命令（脚本文件）的文件名</p><p><code>time</code> 如果指定的时间已经错过， at 命令会在第二天的那个时间运行指定的作业。</p></blockquote><p><em>时间格式:</em></p><ul><li>标准的小时和分钟格式，比如10:15。</li><li>AM/PM指示符，比如10:15 PM。</li><li>特定可命名时间，比如now、noon、midnight或者teatime（4 PM）。除了指定运行作业的时间，也可以通过不同的日期格式指定特定的日期。</li><li>标准日期格式，比如MMDDYY、MM/DD/YY或DD.MM.YY。</li><li>文本日期，比如Jul 4或Dec 25，加不加年份均可。</li><li>你也可以指定时间增量 <ul><li>当前时间+25 min</li><li>明天10:15 PM</li><li>10:15+7 天</li></ul></li></ul><p>使用 at 命令时，该作业会被提交到作业队列（job queue）。作业队列会保存通过 at 命令提交的待处理的作业。针对不同优先级，存在26种不同的作业队列。作业队列通常用小写字母 <code>a~z</code> 和大写字母 <code>A~Z</code> 来指代。</p><p>作业队列的字母排序越高，作业运行的优先级就越低。默认情况下， at 的作业会被提交到 a 作业队列。如果想以更高优先级运行作业，可以用 -q 参数指定不同的队列字母。</p><p><strong>获取作业的输出</strong></p><p>重定向输出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span> zz.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;at 定时执行任务: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F,%T<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> zz.log
<span class="token function">sleep</span> <span class="token number">5</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;脚本任务执行完成: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F,%T<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> zz.log


<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -f demo6.sh now</span>
job <span class="token number">12</span> at Fri Sep <span class="token number">16</span> <span class="token number">13</span>:05:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat zz.log</span>
at 定时执行任务: <span class="token number">2022</span>-09-16,13:05:49
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat zz.log</span>
at 定时执行任务: <span class="token number">2022</span>-09-16,13:05:49
脚本任务执行完成: <span class="token number">2022</span>-09-16,13:05:54
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果不想在 at 命令中使用邮件或重定向，最好加上 -M 选项来屏蔽作业产生的输出信息。</p></blockquote><p>使用 e-mail 作为 at 命令的输出极其不便。使用 <code>sendmail</code> 应用程序来发送邮件。</p><p>yum -y install sendmail</p><p><strong>列出等待的作业 atq</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh teatime
at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh tomorrow
at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh <span class="token number">13</span>:04
at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh now
atq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh teatime</span>
job <span class="token number">13</span> at Fri Sep <span class="token number">16</span> <span class="token number">16</span>:00:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh tomorrow</span>
job <span class="token number">14</span> at Sat Sep <span class="token number">17</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh 13:04</span>
job <span class="token number">15</span> at Sat Sep <span class="token number">17</span> <span class="token number">13</span>:04:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh now</span>
job <span class="token number">16</span> at Fri Sep <span class="token number">16</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span>       Sat Sep <span class="token number">17</span> <span class="token number">13</span>:02:00 <span class="token number">2022</span> a root
<span class="token number">13</span>      Fri Sep <span class="token number">16</span> <span class="token number">16</span>:00:00 <span class="token number">2022</span> a root
<span class="token number">14</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span> a root
<span class="token number">15</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:04:00 <span class="token number">2022</span> a root
<span class="token number">16</span>      Fri Sep <span class="token number">16</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span> <span class="token operator">=</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除作业 atrm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span>       Sat Sep <span class="token number">17</span> <span class="token number">13</span>:02:00 <span class="token number">2022</span> a root
<span class="token number">17</span>      Fri Sep <span class="token number">16</span> <span class="token number">16</span>:00:00 <span class="token number">2022</span> a root
<span class="token number">18</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:11:00 <span class="token number">2022</span> a root
<span class="token number">19</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:04:00 <span class="token number">2022</span> a root
<span class="token number">20</span>      Fri Sep <span class="token number">16</span> <span class="token number">13</span>:11:00 <span class="token number">2022</span> <span class="token operator">=</span> root
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atrm {17,19,18}</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span>       Sat Sep <span class="token number">17</span> <span class="token number">13</span>:02:00 <span class="token number">2022</span> a root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cron" tabindex="-1"><a class="header-anchor" href="#cron"><span>cron</span></a></h4>`,267),m={href:"http://cron.ciding.cc/",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>用 at 命令在预设时间安排脚本执行非常好用，但如果你需要脚本在每天的同一时间运行或是每周一次、每月一次呢？用不着再使用 at 不断提交作业了。</p><p><strong>cron时间表</strong></p><p><em>格式如下：</em></p><blockquote><p>分钟 小时 日期值（N号） 月 周 【需要执行的命令】</p><p>min hour dayofmonth month dayofweek command</p><ul><li>dayofmonth 表项指定月份中的日期值（*，1-31）</li><li>dayofweek（*，mon、tue、wed、thu、fri、sat、sun）或数值（*，0为周日，6为周六）来指定。</li></ul></blockquote><p>cron时间表允许你用特定值、取值范围（比如1~5）或者是通配符（星号*）来指定条目。</p><p>例如：在每天的10:15运行一个命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">15</span> <span class="token number">10</span> * * * <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在每周一4:15 PM运行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">15</span> <span class="token number">16</span> * * <span class="token number">1</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在每个月的第一天中午12点执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>00 <span class="token number">12</span> <span class="token number">1</span> * * <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong> 如何设置一个在每个月的最后一天执行的命令，因为你无法设置dayofmonth的值来涵盖所有的月份。这个问题困扰着Linux和Unix程序员，也激发了不少解决办法。常用的方法是加一条使用 date 命令的 if-then 语句来检查明天的日期是不是01：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>00 <span class="token number">12</span> * * * <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span> <span class="token function">date</span> +%d <span class="token parameter variable">-d</span> tomorrow <span class="token variable">\`</span></span> <span class="token operator">=</span> 01 <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token punctuation">;</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它会在每天中午12点来检查是不是当月的最后一天，如果是，cron将会运行该命令。</p></blockquote><p>命令列表必须指定要运行的命令或脚本的全路径名:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">15</span> <span class="token number">10</span> * * * /home/shell/test4.sh <span class="token operator">&gt;</span> test4out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="crontab" tabindex="-1"><a class="header-anchor" href="#crontab"><span>crontab</span></a></h4><p><strong>浏览cron目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> /etc/cron.*ly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有4个基本目录：<code>hourly</code>、<code>daily</code>、<code>monthly</code> 和 <code>weekly</code></p><p>因此，如果脚本需要每天运行一次，只要将脚本复制到daily目录，cron就会每天执行它，以此类推。</p><p><strong>常见示例</strong></p><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>（1）0/2 * * * * ?   表示每2秒 执行任务
（1）0 0/2 * * * ?    表示每2分钟 执行任务
（1）0 0 2 1 * ?   表示在每月的1日的凌晨2点调整任务
（2）0 15 10 ? * MON-FRI   表示周一到周五每天上午10:15执行作业
（3）0 15 10 ? 6L 2002-2006   表示2002-2006年的每个月的最后一个星期五上午10:15执行
（4）0 0 10,14,16 * * ?   每天上午10点，下午2点，4点 
（5）0 0/30 9-17 * * ?   朝九晚五工作时间内每半小时 
（6）0 0 12 ? * WED    表示每个星期三中午12点 
（7）0 0 12 * * ?   每天中午12点触发 
（8）0 15 10 ? * *    每天上午10:15触发 
（9）0 15 10 * * ?     每天上午10:15触发 
（10）0 15 10 * * ?    每天上午10:15触发 
（11）0 15 10 * * ? 2005    2005年的每天上午10:15触发 
（12）0 * 14 * * ?     在每天下午2点到下午2:59期间的每1分钟触发 
（13）0 0/5 14 * * ?    在每天下午2点到下午2:55期间的每5分钟触发 
（14）0 0/5 14,18 * * ?     在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发
（15）0 0-5 14 * * ?    在每天下午2点到下午2:05期间的每1分钟触发 
（16）0 10,44 14 ? 3 WED    每年三月的星期三的下午2:10和2:44触发 
（17）0 15 10 ? * MON-FRI    周一至周五的上午10:15触发 
（18）0 15 10 15 * ?    每月15日上午10:15触发 
（19）0 15 10 L * ?    每月最后一日的上午10:15触发 
（20）0 15 10 ? * 6L    每月的最后一个星期五上午10:15触发 
（21）0 15 10 ? * 6L 2002-2005   2002年至2005年的每月的最后一个星期五上午10:15触发 
（22）0 15 10 ? * 6#3   每月的第三个星期五上午10:15触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="anacron" tabindex="-1"><a class="header-anchor" href="#anacron"><span>anacron</span></a></h4><p>如果某个作业在cron时间表中安排运行的时间已到，但这时候Linux系统处于关机状态，那么这个作业就不会被运行。当系统开机时，cron程序不会再去运行那些错过的作业。要解决这个问题，许多Linux发行版还包含了anacron 程序。</p><p>这个功能常用于进行常规日志维护的脚本。</p><p>只会处理位于cron目录的程序，比如/etc/cron.monthly。它用时间戳来决定作业是否在正确的计划间隔内运行了。每个cron目录都有个时间戳文件，该文件位于/var/spool/anacron。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat /var/spool/anacron/cron.monthly</span>
<span class="token number">20220908</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>anacron程序使用自己的时间表（通常位于/etc/anacrontab）来检查作业目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat /etc/anacrontab</span>
<span class="token comment"># /etc/anacrontab: configuration file for anacron</span>

<span class="token comment"># See anacron(8) and anacrontab(5) for details.</span>

<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/sh
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/bin:/usr/sbin:/usr/bin
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token comment"># the maximal random delay added to the base delay of the jobs</span>
<span class="token assign-left variable">RANDOM_DELAY</span><span class="token operator">=</span><span class="token number">45</span>
<span class="token comment"># the jobs will be started during the following hours only</span>
<span class="token assign-left variable">START_HOURS_RANGE</span><span class="token operator">=</span><span class="token number">3</span>-22

<span class="token comment">#period in days   delay in minutes   job-identifier   command</span>
<span class="token number">1</span>       <span class="token number">5</span>       cron.daily              <span class="token function">nice</span> run-parts /etc/cron.daily
<span class="token number">7</span>       <span class="token number">25</span>      cron.weekly             <span class="token function">nice</span> run-parts /etc/cron.weekly
@monthly <span class="token number">45</span>     cron.monthly            <span class="token function">nice</span> run-parts /etc/cron.monthly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>anacron时间表的基本格式和cron时间表略有不同：</p><blockquote><p>period delay identifier command</p></blockquote><ul><li>period 条目定义了作业多久运行一次，以天为单位。anacron程序用此条目来检查作业的时间戳文件。</li><li>delay 条目会指定系统启动后anacron程序需要等待多少分钟再开始运行错过的脚本。</li><li>command 条目包含了run-parts程序和一个cron脚本目录名。run-parts程序负责运行目录中传给它的<br> 任何脚本。<strong>注意</strong> anacron不会运行位于/etc/cron.hourly的脚本。这是因为anacron程序不会处理执行时间<br> 需求小于一天的脚本。</li><li>identifier 条目是一种特别的非空字符串，如 cron-weekly 。它用于唯一标识日志消息和错误邮件中的作业</li></ul><h4 id="使用新-shell-启动脚本" tabindex="-1"><a class="header-anchor" href="#使用新-shell-启动脚本"><span>使用新 shell 启动脚本</span></a></h4><p>回想一下当用户登入bash shell时需要运行的启动文件 <em>参见环境变量</em>。另外别忘了，不是所有的发行版中都包含这些启动文件。基本上，依照下列顺序所找到的第一个文件会被运行，其余的文件会被忽略：</p><ul><li>$HOME/.bash_profil</li><li>$HOME/.bash_login</li><li>$HOME/.profile</li></ul><p>因此，应该将需要在登录时运行的脚本放在上面第一个文件中。每次启动一个新shell时，bash shell都会运行.bashrc文件。可以这样来验证：在主目录下的.bashrc文件中加入一条简单的 echo 语句，然后启动一个新shell。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .bashrc
<span class="token comment"># .bashrc</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>
<span class="token comment"># User specific aliases and functions</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;m in a new shell!&quot;</span>

$ <span class="token function">bash</span>
I&#39;m <span class="token keyword">in</span> a new shell<span class="token operator">!</span>
$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function h(g,f){const e=t("ExternalLinkIcon");return p(),o("div",null,[r,s("p",null,[n("sh "),s("a",d,[n("demo.sh"),l(e)]),n(" xiaoyu 20")]),u,s("blockquote",null,[s("p",null,[n("sh "),s("a",v,[n("test.sh"),l(e)]),n(" -ac")])]),b,s("p",null,[s("a",m,[n("在线表达式生成器"),l(e)])]),k])}const $=i(c,[["render",h],["__file","shell2.html.vue"]]),q=JSON.parse('{"path":"/linux/shell2.html","title":"Shell脚本编程-基础篇","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Shell脚本编程-基础篇","category":["Linux"],"headerDepth":5,"date":"2022-09-12T00:00:00.000Z","star":true,"tag":["Linux","Shell"],"description":"将带你直接进入shell脚本基础实操，脚本的语法、函数和变量等等","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/shell2.html"}],["meta",{"property":"og:title","content":"Shell脚本编程-基础篇"}],["meta",{"property":"og:description","content":"将带你直接进入shell脚本基础实操，脚本的语法、函数和变量等等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T04:17:50.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T04:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell脚本编程-基础篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-19T04:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"构建基本脚本","slug":"构建基本脚本","link":"#构建基本脚本","children":[{"level":3,"title":"expr 命令操作符","slug":"expr-命令操作符","link":"#expr-命令操作符","children":[]},{"level":3,"title":"使用方括号","slug":"使用方括号","link":"#使用方括号","children":[]},{"level":3,"title":"浮点解决方案","slug":"浮点解决方案","link":"#浮点解决方案","children":[]},{"level":3,"title":"退出脚本","slug":"退出脚本","link":"#退出脚本","children":[]}]},{"level":2,"title":"使用结构化命令","slug":"使用结构化命令","link":"#使用结构化命令","children":[{"level":3,"title":"使用 if-then语句和else","slug":"使用-if-then语句和else","link":"#使用-if-then语句和else","children":[]},{"level":3,"title":"嵌套 if 语句","slug":"嵌套-if-语句","link":"#嵌套-if-语句","children":[]},{"level":3,"title":"test 命令","slug":"test-命令","link":"#test-命令","children":[]},{"level":3,"title":"数值比较","slug":"数值比较","link":"#数值比较","children":[]},{"level":3,"title":"字符串比较","slug":"字符串比较","link":"#字符串比较","children":[]},{"level":3,"title":"文件比较","slug":"文件比较","link":"#文件比较","children":[]},{"level":3,"title":"复合条件测试","slug":"复合条件测试","link":"#复合条件测试","children":[]},{"level":3,"title":"使用双方括号和双括号","slug":"使用双方括号和双括号","link":"#使用双方括号和双括号","children":[]},{"level":3,"title":"case 命令","slug":"case-命令","link":"#case-命令","children":[]}]},{"level":2,"title":"更多的结构化命令","slug":"更多的结构化命令","link":"#更多的结构化命令","children":[{"level":3,"title":"for循环","slug":"for循环","link":"#for循环","children":[]},{"level":3,"title":"while","slug":"while","link":"#while","children":[]},{"level":3,"title":"until","slug":"until","link":"#until","children":[]},{"level":3,"title":"嵌套循环","slug":"嵌套循环","link":"#嵌套循环","children":[]},{"level":3,"title":"循环处理文件数据","slug":"循环处理文件数据","link":"#循环处理文件数据","children":[]},{"level":3,"title":"控制循环","slug":"控制循环","link":"#控制循环","children":[]},{"level":3,"title":"重定向循环的输出","slug":"重定向循环的输出","link":"#重定向循环的输出","children":[]},{"level":3,"title":"综合实例","slug":"综合实例","link":"#综合实例","children":[]}]},{"level":2,"title":"处理用户输入","slug":"处理用户输入","link":"#处理用户输入","children":[{"level":3,"title":"传递与读取参数 $n","slug":"传递与读取参数-n","link":"#传递与读取参数-n","children":[]},{"level":3,"title":"跟踪参数 $# $* $@","slug":"跟踪参数","link":"#跟踪参数","children":[{"level":4,"title":"参数统计 $#","slug":"参数统计","link":"#参数统计","children":[]},{"level":4,"title":"抓取所有的数据 $* $@","slug":"抓取所有的数据","link":"#抓取所有的数据","children":[]}]},{"level":3,"title":"移动变量","slug":"移动变量","link":"#移动变量","children":[]},{"level":3,"title":"处理选项","slug":"处理选项","link":"#处理选项","children":[{"level":4,"title":"处理简单选项","slug":"处理简单选项","link":"#处理简单选项","children":[]},{"level":4,"title":"分离参数和选项","slug":"分离参数和选项","link":"#分离参数和选项","children":[]},{"level":4,"title":"处理带值的选项","slug":"处理带值的选项","link":"#处理带值的选项","children":[]},{"level":4,"title":"getopt","slug":"getopt","link":"#getopt","children":[]},{"level":4,"title":"getopts","slug":"getopts","link":"#getopts","children":[]}]},{"level":3,"title":"将选项标准化","slug":"将选项标准化","link":"#将选项标准化","children":[]},{"level":3,"title":"获得用户输入 read","slug":"获得用户输入-read","link":"#获得用户输入-read","children":[{"level":4,"title":"基本的读取 read -p","slug":"基本的读取-read-p","link":"#基本的读取-read-p","children":[]},{"level":4,"title":"超时 read -t","slug":"超时-read-t","link":"#超时-read-t","children":[]},{"level":4,"title":"隐藏方式读取 read -s","slug":"隐藏方式读取-read-s","link":"#隐藏方式读取-read-s","children":[]},{"level":4,"title":"从文件中读取","slug":"从文件中读取","link":"#从文件中读取","children":[]}]}]},{"level":2,"title":"呈现数据","slug":"呈现数据","link":"#呈现数据","children":[{"level":3,"title":"输入和输出","slug":"输入和输出","link":"#输入和输出","children":[]},{"level":3,"title":"在脚本中重定向输出输入","slug":"在脚本中重定向输出输入","link":"#在脚本中重定向输出输入","children":[{"level":4,"title":"临时重定向行输出","slug":"临时重定向行输出","link":"#临时重定向行输出","children":[]},{"level":4,"title":"永久重定向脚本中的所有命令 exec","slug":"永久重定向脚本中的所有命令-exec","link":"#永久重定向脚本中的所有命令-exec","children":[]}]},{"level":3,"title":"创建自己的重定向","slug":"创建自己的重定向","link":"#创建自己的重定向","children":[]},{"level":3,"title":"列出打开的文件描述符 lsof","slug":"列出打开的文件描述符-lsof","link":"#列出打开的文件描述符-lsof","children":[]},{"level":3,"title":"阻止命令输出","slug":"阻止命令输出","link":"#阻止命令输出","children":[]},{"level":3,"title":"创建临时文件","slug":"创建临时文件","link":"#创建临时文件","children":[{"level":4,"title":"创建本地临时文件","slug":"创建本地临时文件","link":"#创建本地临时文件","children":[]},{"level":4,"title":"在 tmp 目录创建临时文件","slug":"在-tmp-目录创建临时文件","link":"#在-tmp-目录创建临时文件","children":[]},{"level":4,"title":"创建临时目录","slug":"创建临时目录","link":"#创建临时目录","children":[]}]},{"level":3,"title":"记录消息","slug":"记录消息","link":"#记录消息","children":[]},{"level":3,"title":"综合实例","slug":"综合实例-1","link":"#综合实例-1","children":[]}]},{"level":2,"title":"控制脚本","slug":"控制脚本","link":"#控制脚本","children":[{"level":3,"title":"处理信号","slug":"处理信号","link":"#处理信号","children":[{"level":4,"title":"信号","slug":"信号","link":"#信号","children":[]},{"level":4,"title":"sleep((生成信号:中断、暂停进程)、","slug":"sleep-生成信号-中断、暂停进程-、","link":"#sleep-生成信号-中断、暂停进程-、","children":[]},{"level":4,"title":"kill(结束进程)","slug":"kill-结束进程","link":"#kill-结束进程","children":[]},{"level":4,"title":"trap(捕获信号)","slug":"trap-捕获信号","link":"#trap-捕获信号","children":[]},{"level":4,"title":"捕获脚本退出","slug":"捕获脚本退出","link":"#捕获脚本退出","children":[]},{"level":4,"title":"修改或移除捕获","slug":"修改或移除捕获","link":"#修改或移除捕获","children":[]}]},{"level":3,"title":"后台模式 &","slug":"后台模式","link":"#后台模式","children":[]},{"level":3,"title":"作业控制 jobs","slug":"作业控制-jobs","link":"#作业控制-jobs","children":[]},{"level":3,"title":"调整谦让度 nice","slug":"调整谦让度-nice","link":"#调整谦让度-nice","children":[]},{"level":3,"title":"定时运行作业","slug":"定时运行作业","link":"#定时运行作业","children":[{"level":4,"title":"at","slug":"at","link":"#at","children":[]},{"level":4,"title":"cron","slug":"cron","link":"#cron","children":[]},{"level":4,"title":"crontab","slug":"crontab","link":"#crontab","children":[]},{"level":4,"title":"anacron","slug":"anacron","link":"#anacron","children":[]},{"level":4,"title":"使用新 shell 启动脚本","slug":"使用新-shell-启动脚本","link":"#使用新-shell-启动脚本","children":[]}]}]}],"git":{"createdTime":1706536810000,"updatedTime":1710821870000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":63,"words":18900},"filePathRelative":"linux/shell2.md","localizedDate":"2022年9月12日","excerpt":"<p>将带你直接进入shell脚本基础实操，脚本的语法、函数和变量等等</p>\\n","autoDesc":true}');export{$ as comp,q as data};
