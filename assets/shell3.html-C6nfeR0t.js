import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as e}from"./app-D1uezr0R.js";const l={},t=e(`<p>shell脚本高级实战案例篇之【创建函数、图形化桌面脚本编程、正则表达式、使用其他 shell】</p><h1 id="shell脚本编程高级篇之基础" tabindex="-1"><a class="header-anchor" href="#shell脚本编程高级篇之基础"><span>Shell脚本编程高级篇之基础</span></a></h1><h2 id="创建函数" tabindex="-1"><a class="header-anchor" href="#创建函数"><span>创建函数</span></a></h2><h3 id="基本的脚本函数" tabindex="-1"><a class="header-anchor" href="#基本的脚本函数"><span>基本的脚本函数</span></a></h3><h4 id="创建函数-1" tabindex="-1"><a class="header-anchor" href="#创建函数-1"><span>创建函数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#1</span>
<span class="token keyword">function</span>  <span class="token function-name function">name</span> <span class="token punctuation">{</span>
 commands
<span class="token punctuation">}</span>
<span class="token comment">#2</span>
<span class="token function-name function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 commands
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用函数" tabindex="-1"><a class="header-anchor" href="#使用函数"><span>使用函数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function-name function">func1</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;# <span class="token variable">$count</span> - This is an example of a function111&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">func2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;# <span class="token variable">$count</span> - This is an example of a function222&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    func1
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-ge</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    func2
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the loop&quot;</span>
func1
<span class="token builtin class-name">echo</span>
func2
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Now this is the end of the script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo7.sh</span>
<span class="token comment"># 1 - This is an example of a function111</span>
<span class="token comment"># 2 - This is an example of a function111</span>
<span class="token comment"># 3 - This is an example of a function111</span>
<span class="token comment"># 4 - This is an example of a function111</span>
<span class="token comment"># 5 - This is an example of a function111</span>
<span class="token comment"># 6 - This is an example of a function222</span>
<span class="token comment"># 7 - This is an example of a function222</span>
<span class="token comment"># 8 - This is an example of a function222</span>
<span class="token comment"># 9 - This is an example of a function222</span>
<span class="token comment"># 10 - This is an example of a function222</span>

This is the end of the loop
<span class="token comment"># 11 - This is an example of a function111</span>

<span class="token comment"># 11 - This is an example of a function222</span>
Now this is the end of the script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> 如果在函数被定义前使用函数，你会收到一条错误消息</p><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h4><p><strong>使用 $?</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>echo
echo &quot;The exit status is: $?&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo7.sh</span>
The <span class="token builtin class-name">exit</span> status is: <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 return</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">dbl</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter a value: &quot;</span> value
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;doubling the value&quot;</span>
    <span class="token builtin class-name">return</span> $<span class="token punctuation">[</span> <span class="token variable">$value</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
dbl
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The new value is <span class="token variable">$?</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin shell]# sh demo8.sh
Enter a value: 2
doubling the value
The new value is 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但当用这种方法从函数中返回值时，要小心了。记住下面两条技巧来避免问题：</p><ul><li>记住，函数一结束就取返回值；</li><li>记住，退出状态码必须是 <code>0~255</code>。</li></ul><blockquote><p>如果在用 <code>$?</code> 变量提取函数返回值之前执行了其他命令，函数的返回值就会丢失。记住，<code>$?</code> 变量会返回执行的最后一条命令的退出状态码。</p><p>第二个问题界定了返回值的取值范围。由于退出状态码必须小于256，函数的结果必须生成一个小于256的整数值。任何大于256的值都会产生一个错误值。</p></blockquote><p><strong>使用函数输出</strong></p><p><code>result=$(dbl)</code> 这个命令会将 dbl 函数的输出<code>echo</code>赋给 $result 变量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">dbl</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter a value: &quot;</span> value
    <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$value</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span> <span class="token number">6666</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>dbl<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The new value is <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin shell]# sh demo9.sh
Enter a value: 200
The new value is 400
6666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 通过这种技术，你还可以返回浮点值和字符串值。这使它成为一种获取函数返回值的强大方法。</p><hr><h4 id="在函数中使用变量" tabindex="-1"><a class="header-anchor" href="#在函数中使用变量"><span>在函数中使用变量</span></a></h4><p><strong>向函数传递参数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">addem</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-gt</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> <span class="token number">0</span>个或大于2个参数
    <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> + <span class="token variable">$1</span> <span class="token punctuation">]</span>
    <span class="token keyword">else</span>
     <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> * <span class="token variable">$2</span> <span class="token punctuation">]</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;传入 10 15 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem <span class="token number">10</span> <span class="token number">15</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;传入 10 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem <span class="token number">10</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;无参数 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;传入 10 15 20 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem <span class="token number">10</span> <span class="token number">15</span> <span class="token number">20</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin shell]# sh demo10.sh
传入 10 15 返回：150

传入 10 返回：20

无参数 返回：0个或大于2个参数

传入 10 15 20 返回：0个或大于2个参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于函数使用特殊参数环境变量作为自己的参数值，因此它无法直接获取脚本在命令行中的参数值。下面的例子将会运行失败。尽管函数也使用了 $1 和 $2 变量，但它们和脚本主体中的 $1 和 $2 变量并不相同。要在函数中使用这些值，必须在调用函数时手动将它们传过去.。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">badfunc1</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> * <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>
<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>badfunc1<span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$value</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>badfunc1 $1 $2<span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$value</span>&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: badtest1 a b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@admin shell]# sh demo11.sh 12 2
12 2

demo11.sh:行4: *  : 语法错误: 期待操作数 （错误符号是 &quot;*  &quot;）
The result is
[root@admin shell]# sh demo11.sh 12 2 21
12 2 21

The result is 24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在函数中处理变量</strong></p><ul><li>全局变量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">dbl</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$value</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span> 函数内：<span class="token variable">$value</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入一个值: &quot;</span> value
dbl
<span class="token builtin class-name">echo</span> <span class="token string">&quot;函数外: <span class="token variable">$value</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo12.sh</span>
输入一个值: <span class="token number">12</span>
函数内：24
函数外: <span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$value 变量在函数外定义并被赋值。当 dbl 函数被调用时，该变量及其值在函数中都依然有效。如果变量在函数内被赋予了新值，那么在脚本中引用该变量时，新值也依然有效。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">func1</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">temp</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$value</span> + <span class="token number">5</span> <span class="token punctuation">]</span>
    <span class="token assign-left variable">result</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$temp</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">temp</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">6</span>

func1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;temp = <span class="token variable">$temp</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;result = <span class="token variable">$result</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$temp</span> <span class="token parameter variable">-gt</span> <span class="token variable">$value</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 大&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 小&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo12.sh</span>
temp <span class="token operator">=</span> <span class="token number">11</span>
result <span class="token operator">=</span> <span class="token number">22</span>
temp is 大
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于函数中用到了 $temp 变量，它的值在脚本中使用时受到了影响，产生了意想不到的后果。有个简单的办法可以在函数中解决这个问题，下面将会介绍</p><ul><li>局部变量 local</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">func1</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">temp</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$value</span> + <span class="token number">5</span> <span class="token punctuation">]</span>
    <span class="token assign-left variable">result</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$temp</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">temp</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">6</span>

func1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;temp = <span class="token variable">$temp</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;result = <span class="token variable">$result</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$temp</span> <span class="token parameter variable">-gt</span> <span class="token variable">$value</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 大&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 小&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>local 关键字保证了变量只局限在该函数中。如果脚本中在该函数之外有同样名字的变量，那么shell将会保持这两个变量的值是分离的。</p><h4 id="数组变量和函数" tabindex="-1"><a class="header-anchor" href="#数组变量和函数"><span>数组变量和函数</span></a></h4><p><strong>向函数传数组参数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">testit</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The parameters are: <span class="token variable">$@</span>&quot;</span>
    <span class="token assign-left variable">thisarray</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The received array is <span class="token variable">\${thisarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is: <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
testit <span class="token variable">$myarray</span>

<span class="token comment">#####变化</span>
<span class="token keyword">function</span> <span class="token function-name function">testit</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> newarray
    <span class="token assign-left variable">newarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token string">&#39;echo &quot;$@&quot;&#39;</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The new array value is: <span class="token variable">\${newarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
testit <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>The original array is: <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
The parameters are: <span class="token number">1</span>
The received array is <span class="token number">1</span>
<span class="token comment">#####变化后</span>
The original array is <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
The new array value is: <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数内部，数组仍然可以像其他数组一样使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">addarray</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token builtin class-name">local</span> newarray
    <span class="token assign-left variable">newarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">value</span> <span class="token keyword">in</span> <span class="token variable">\${newarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$sum</span> + <span class="token variable">$value</span> <span class="token punctuation">]</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is: <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token assign-left variable">arg1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addarray $arg1<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The original array is: 1 2 3 4 5
The result is 15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>addarray 函数会遍历所有的数组元素，将它们累加在一起。你可以在 myarray 数组变量中放置任意多的值， addarry 函数会将它们都加起来。</p><p><strong>从函数返回数组</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">arraydblr</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> origarray
    <span class="token builtin class-name">local</span> newarray
    <span class="token builtin class-name">local</span> elements
    <span class="token builtin class-name">local</span> i
    <span class="token assign-left variable">origarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
    <span class="token assign-left variable">newarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
    <span class="token assign-left variable">elements</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$#</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> $elements<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">))</span></span> <span class="token punctuation">{</span>
        newarray<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">\${origarray<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${newarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is: <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token assign-left variable">arg1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span>arraydblr $arg1<span class="token variable">)</span></span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The new array is: <span class="token variable">\${result<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The original array is: 1 2 3 4 5
The new array is: 2 4 6 8 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数递归" tabindex="-1"><a class="header-anchor" href="#函数递归"><span>函数递归</span></a></h4><p>函数可以调用自己来得到结果。通常递归函数都有一个最终可以迭代到的基准值。许多高级数学算法用递归对复杂的方程进行逐级规约，直到基准值定义的那级。</p><p>递归算法的经典例子是计算阶乘。一个数的阶乘是该数之前的所有数乘以该数的值。因此，要计算5的阶乘，可以执行如下方程：</p><blockquote><p>5! = 1 <em>2</em> 3 <em>4</em> 5 = 120</p></blockquote><p>使用递归，方程可以简化成以下形式：</p><blockquote><p>x! = x * (x-1)!</p></blockquote><p>也就是说，x的阶乘等于x乘以x1的阶乘。这可以用简单的递归脚本表达为：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">factorial</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">temp</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token string">&#39;factorial $temp&#39;</span>
        <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$result</span> * <span class="token variable">$1</span> <span class="token punctuation">]</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter value: &quot;</span> value
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>factorial $value<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The factorial of <span class="token variable">$value</span> is: <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Enter value: 5
The factorial of 5 is: 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建库-source" tabindex="-1"><a class="header-anchor" href="#创建库-source"><span>创建库 source</span></a></h4><p>source 命令会在当前shell上下文中执行命令，而不是创建一个新shell。可以用 source 命令来在shell脚本中运行库文件脚本。</p><p>第一步是创建一个包含脚本中所需函数的公用库文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function addem {
    echo $[ $1 + $2 ]
}
function multem {
    echo $[ $1 * $2 ]
}
function divem {
    if [ $2 -ne 0 ]; then
        echo $[ $1 / $2 ]
    else
        echo -1
    fi
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">.</span> ./myfuncs

<span class="token assign-left variable">value1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">value2</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token assign-left variable">result1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem $value1 $value2<span class="token variable">)</span></span>
<span class="token assign-left variable">result2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>multem $value1 $value2<span class="token variable">)</span></span>
<span class="token assign-left variable">result3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>divem $value1 $value2<span class="token variable">)</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result of adding them is: <span class="token variable">$result1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result of multiplying them is: <span class="token variable">$result2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result of dividing them is: <span class="token variable">$result3</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The result of adding them is: 15
The result of multiplying them is: 50
The result of dividing them is: 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在命令行上使用函数" tabindex="-1"><a class="header-anchor" href="#在命令行上使用函数"><span>在命令行上使用函数</span></a></h4><ul><li>一种方法是采用单行方式定义函数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># function divem { echo $[ $1 / $2 ]; }</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># divem 66 3</span>
<span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>另一种方法是采用多行方式来定义函数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># function multem {</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> * <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># multem 12 2</span>
<span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在.bashrc 文件中定义函数</strong></p><p>最佳地点就是.bashrc文件。bash shell在每次启动时都会在主目录下查找这个文件，不管是交互式shell还是从现有shell中启动的新shell。</p><ul><li>直接定义函数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># .bashrc</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>
<span class="token keyword">function</span> <span class="token function-name function">addem</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> + <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读取函数文件</li></ul><p>只要是在shell脚本中，都可以用 source 命令（或者它的别名点操作符）将库文件中的函数添加到你的.bashrc脚本中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># .bashrc</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>

<span class="token builtin class-name">.</span> /home/shell/libraries/myfuncs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要确保库文件的路径名正确，以便bash shell能够找到该文件。下次启动shell时，库中的所有函数都可在命令行界面下使用了。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ addem 10 5
15
$ multem 10 5
50
$ divem 10 5
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shtool函数库使用示例" tabindex="-1"><a class="header-anchor" href="#shtool函数库使用示例"><span>shtool函数库使用示例</span></a></h3><h4 id="下载与安装" tabindex="-1"><a class="header-anchor" href="#下载与安装"><span>下载与安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install shtool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="构建库" tabindex="-1"><a class="header-anchor" href="#构建库"><span>构建库</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./confifgure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>configure 命令会检查构建shtool库文件所必需的软件。一旦发现了所需的工具，它会使用工具路径修改配置文件。</p><p>make 命令负责构建shtool库文件。最终的结果（ shtool ）是一个完整的库软件包。</p><p>要完成安装，需要使用 make 命令的 install 选项。</p><h4 id="shtool-库函数" tabindex="-1"><a class="header-anchor" href="#shtool-库函数"><span>shtool 库函数</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>函 数   描 述
Arx   创建归档文件（包含一些扩展功能）
Echo  显示字符串，并提供了一些扩展构件
fixperm  改变目录树中的文件权限
install  安装脚本或文件
mdate  显示文件或目录的修改时间
mkdir  创建一个或更多目录
Mkln  使用相对路径创建链接
mkshadow  创建一棵阴影树
move  带有替换功能的文件移动
Path  处理程序路径
platform  显示平台标识
Prop  显示一个带有动画效果的进度条
rotate  转置日志文件
Scpp  共享的C预处理器
Slo   根据库的类别，分离链接器选项
Subst  使用sed的替换操作
Table  以表格的形式显示由字段分隔（field-separated）的数据
tarball  从文件和目录中创建tar文件
version  创建版本信息文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个shtool函数都包含大量的选项和参数，你可以利用它们改变函数的工作方式。下面是 shtool函数的使用格式：</p><blockquote><p>shtool [options] [function [options] [args]]</p></blockquote><h4 id="使用库" tabindex="-1"><a class="header-anchor" href="#使用库"><span>使用库</span></a></h4><p>可以在命令行或自己的shell脚本中直接使用shtool函数。下面是一个在shell脚本中使用 platform 函数的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> test16
<span class="token comment">#!/bin/bash</span>
shtool platform
$ ./test16
centos <span class="token number">7.9</span>.2009 <span class="token punctuation">(</span>AMD64<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ls –al /usr/bin | shtool prop –p &quot;waiting...&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="图形化桌面环境中的脚本编程" tabindex="-1"><a class="header-anchor" href="#图形化桌面环境中的脚本编程"><span>图形化桌面环境中的脚本编程</span></a></h2><h3 id="创建文本菜单" tabindex="-1"><a class="header-anchor" href="#创建文本菜单"><span>创建文本菜单</span></a></h3><h3 id="创建文本窗口部件" tabindex="-1"><a class="header-anchor" href="#创建文本窗口部件"><span>创建文本窗口部件</span></a></h3><h3 id="添加x-window图形" tabindex="-1"><a class="header-anchor" href="#添加x-window图形"><span>添加X Window图形</span></a></h3><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h2><h3 id="正则表达式的类型" tabindex="-1"><a class="header-anchor" href="#正则表达式的类型"><span>正则表达式的类型</span></a></h3><p>正则表达式是通过正则表达式引擎（regular expression engine）实现的。正则表达式引擎是一套底层软件，负责解释正则表达式模式并使用这些模式进行文本匹配。<br> 在Linux中，有两种流行的正则表达式引擎：</p><ul><li>POSIX基础正则表达式（basic regular expression，BRE）引擎</li><li>POSIX扩展正则表达式（extended regular expression，ERE）引擎</li></ul><p>大多数Linux工具都至少符合POSIX BRE引擎规范，能够识别该规范定义的所有模式符号。遗憾的是，有些工具（比如sed编辑器）只符合了BRE引擎规范的子集。这是出于速度方面的考虑导致的，因为sed编辑器希望能尽可能快地处理数据流中的文本。</p><p>POSIX BRE引擎通常出现在依赖正则表达式进行文本过滤的编程语言中。它为常见模式提供了高级模式符号和特殊符号，比如匹配数字、单词以及按字母排序的字符。gawk程序用ERE引擎来处理它的正则表达式模式。</p><hr><p><strong>警告</strong> 记住，sed编辑器和gawk程序的正则表达式引擎之间是有区别的。gawk程序可以使用大多数扩展正则表达式模式符号，并且能提供一些额外过滤功能，而这些功能都是sed编辑器所不具备的。但正因为如此，gawk程序在处理数据流时通常才比较慢。</p><hr><h3 id="基础正则表达式-bre" tabindex="-1"><a class="header-anchor" href="#基础正则表达式-bre"><span>基础正则表达式 BRE</span></a></h3><h4 id="纯文本" tabindex="-1"><a class="header-anchor" href="#纯文本"><span>纯文本</span></a></h4><p>在sed编辑器和gawk程序中用标准文本字符串来过滤数据：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/test/p&#39;</span>
This is a <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/trial/p&#39;</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | gawk &#39;/test/{print $0}&#39;</span>
This is a <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | gawk &#39;/trial/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一个模式定义了一个单词test。sed编辑器和gawk程序脚本用它们各自的 print 命令打印出匹配该正则表达式模式的所有行。由于 echo 语句在文本字符串中包含了单词test，数据流文本能够匹配所定义的正则表达式模式，因此sed编辑器显示了该行。</p><p>第二个模式也定义了一个单词，这次是trial。因为 echo 语句文本字符串没包含该单词，所以正则表达式模式没有匹配，因此sed编辑器和gawk程序都没打印该行。</p></blockquote><p>第一条原则就是：正则表达式模式都区分大小写。这意味着它们只会匹配大小写也相符的模式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/this/p&#39;</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/This/p&#39;</span>
This is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;The books are expensive&quot; | sed -n &#39;/book/p&#39;</span>
The books are expensive
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;The book is expensive&quot; | sed -n &#39;/books/p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在正则表达式中使用空格和数字。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is line number 1&quot; | sed -n &#39;/ber 1/p&#39;</span>
This is line number <span class="token number">1</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is line number1&quot; | sed -n &#39;/ber 1/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data1</span>
Thisisanormallineoftext.
This is a line with too many spaces. 
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/ /p&#39; data1</span>
This is a line with too many spaces.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊字符" tabindex="-1"><a class="header-anchor" href="#特殊字符"><span>特殊字符</span></a></h4><blockquote><ul><li><code>.</code> <code>*</code> <code>[]</code> <code>^</code> <code>$</code> <code>{}</code> <code>\\</code> <code>/</code> <code>+</code> <code>?</code> <code>|</code> <code>()</code></li></ul></blockquote><p>用某个特殊字符作为文本字符，就必须转义。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data2</span>
The cost is <span class="token variable">$4</span>.00
sdfs oioijk <span class="token number">6846</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/\\$/p&#39; data2</span>
The cost is <span class="token variable">$4</span>.00

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;\\ is a special character&quot; | sed -n &#39;/\\\\/p&#39;</span>
<span class="token punctuation">\\</span> is a special character

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;3 / 2&quot; | sed -n &#39;///p&#39;</span>
sed: <span class="token parameter variable">-e</span> expression <span class="token comment">#1, char 2: No previous regular expression</span>

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;3 / 2&quot; | sed -n &#39;/\\//p&#39;</span>
<span class="token number">3</span> / <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="锚字符" tabindex="-1"><a class="header-anchor" href="#锚字符"><span>锚字符 ^$</span></a></h4><ul><li>锁定在行首 <code>^</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;The book store&quot; | sed -n &#39;/^book/p&#39;</span>

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;Books are great&quot; | sed -n &#39;/^Book/p&#39;</span>
Books are great

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data3</span>
This is a <span class="token builtin class-name">test</span> line.
this is another <span class="token builtin class-name">test</span> line.
A line that tests this feature.
Yet <span class="token function">more</span> testing of this
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/^this/p&#39; data3</span>
this is another <span class="token builtin class-name">test</span> line.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This ^ is a test&quot; | sed -n &#39;/s ^/p&#39;</span>
This ^ is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>锁定在行尾 <code>$</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a good book&quot; | sed -n &#39;/book$/p&#39;</span>
This is a good book
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This book is good&quot; | sed -n &#39;/book$/p&#39;</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;There are a lot of good books&quot; | sed -n &#39;/book$/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>组合使用</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data4</span>
this is a <span class="token builtin class-name">test</span> of using both anchors
I said this is a <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
I<span class="token string">&#39;m sure this is a test.
[root@admin shell]# sed -n &#39;</span>/^this is a test$/p<span class="token string">&#39; data4
this is a test
[root@admin shell]# sed -n &#39;</span>/^this is test$/p<span class="token string">&#39; data4
[root@admin shell]# sed -n &#39;</span>/^this test$/p&#39; data4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤出数据流中的空白行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data5</span>
This is one <span class="token builtin class-name">test</span> line.

This is another <span class="token builtin class-name">test</span> line.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;/^$/d&#39; data5</span>
This is one <span class="token builtin class-name">test</span> line.
This is another <span class="token builtin class-name">test</span> line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="点号字符" tabindex="-1"><a class="header-anchor" href="#点号字符"><span>点号字符</span></a></h4><p><code>.</code> 用来匹配除换行符之外的 <strong>任意单个字符</strong>。它必须匹配一个字符，如果在点号字符的位置没有字符，那么模式就不成立。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data6</span>
This is a <span class="token builtin class-name">test</span> of a line.
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
This <span class="token builtin class-name">test</span> is at line four.
at ten o<span class="token string">&#39;clock we&#39;</span>ll go home.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/.at/p&#39; data6</span>
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
This <span class="token builtin class-name">test</span> is at line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在正则表达式中，空格也是字符，因此 at 前面的空格刚好匹配了该模式。第五行证明了这点，将 at 放在行首就不<br> 会匹配该模式了。</p><h4 id="字符组" tabindex="-1"><a class="header-anchor" href="#字符组"><span>字符组 []</span></a></h4><p>可以定义用来匹配文本模式中某个位置的一组字符。如果字符组中的某个字符出现在了数据流中，那它就匹配了该模式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data6</span>
This is a <span class="token builtin class-name">test</span> of a line.
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
This <span class="token builtin class-name">test</span> is at line four.
at ten o<span class="token string">&#39;clock we&#39;</span>ll go home.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/[ch]at/p&#39; data6</span>
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;Yes&quot; | sed -n &#39;/[Yy]es/p&#39;</span>
Yes
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;yes&quot; | sed -n &#39;/[Yy]es/p&#39;</span>
<span class="token function">yes</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;Yes&quot; | sed -n &#39;/[Yy][Ee][Ss]/p&#39;</span>
Yes
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;yEs&quot; | sed -n &#39;/[Yy][Ee][Ss]/p&#39;</span>
yEs
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;yeS&quot; | sed -n &#39;/[Yy][Ee][Ss]/p&#39;</span>
yeS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以是数字</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data7</span>
This line doesn<span class="token string">&#39;t contain a number.
This line has 1 number on it.
This line a number 2 on it.
This line has a number 4 on it.

[root@admin shell]# sed -n &#39;</span>/<span class="token punctuation">[</span>0123<span class="token punctuation">]</span>/p&#39; data7
This line has <span class="token number">1</span> number on it.
This line a number <span class="token number">2</span> on it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>邮编验证</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data8</span>
<span class="token number">60633</span>
<span class="token number">46201</span>
<span class="token number">223001</span>
<span class="token number">556400</span>
<span class="token number">4353</span>
<span class="token number">22203</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># $ sed -n &#39;/^[0123456789][0123456789][0123456789][0123456789][0123456789]$/p&#39; data8</span>
<span class="token number">60633</span>
<span class="token number">46201</span>
<span class="token number">22203</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data9</span>
I need to have some maintenence <span class="token keyword">done</span> on my car.
I<span class="token string">&#39;ll pay that in a seperate invoice.
After I pay for the maintenance my car will be as good as new.

[root@admin shell]# sed -n &#39;</span>/maint<span class="token punctuation">[</span>ea<span class="token punctuation">]</span>n<span class="token punctuation">[</span>ae<span class="token punctuation">]</span>nce/p/sep<span class="token punctuation">[</span>ea<span class="token punctuation">]</span>r<span class="token punctuation">[</span>ea<span class="token punctuation">]</span>te/p<span class="token string">&#39; data9
I need to have some maintenence done on my car.
I&#39;</span>ll pay that <span class="token keyword">in</span> a seperate invoice.
After I pay <span class="token keyword">for</span> the maintenance my car will be as good as new.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本例中的两个 sed 打印命令利用正则表达式字符组来帮助找到文本中拼错的单词 <code>maintenance</code> 和 <code>separate</code>。同样的正则表达式模式也能匹配正确拼写的 <code>maintenance</code>。</p><h4 id="排除型字符组" tabindex="-1"><a class="header-anchor" href="#排除型字符组"><span>排除型字符组</span></a></h4><p>只要在字符组的开头加个脱字符</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> /<span class="token punctuation">[</span>^ab<span class="token punctuation">]</span>ops/p data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="区间" tabindex="-1"><a class="header-anchor" href="#区间"><span>区间</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^[0-9][0-9][0-9][0-9][0-9]$/p&#39;</span> data8
<span class="token number">60633</span>
<span class="token number">46201</span>
<span class="token number">45902</span>

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[0-9][a-z]ops/p&#39;</span> data
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[a-ch-m]at/p&#39;</span> data6
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a8392&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^[0-9][0-9][0-9][0-9][0-9]$/p&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1839a&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^[0-9][0-9][0-9][0-9][0-9]$/p
echo &quot;18a92&quot; | sed -n &#39;</span>/^<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>$/p&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊的字符组" tabindex="-1"><a class="header-anchor" href="#特殊的字符组"><span>特殊的字符组</span></a></h4><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>组      描 述
<span class="token punctuation">[</span><span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意字母字符，不管是大写还是小写
<span class="token punctuation">[</span><span class="token punctuation">[</span>:alnum:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意字母数字字符0~9、A~Z或a~z
<span class="token punctuation">[</span><span class="token punctuation">[</span>:blank:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配空格或制表符
<span class="token punctuation">[</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配0~9之间的数字
<span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配小写字母字符a~z
<span class="token punctuation">[</span><span class="token punctuation">[</span>:print:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意可打印字符
<span class="token punctuation">[</span><span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配标点符号
<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意空白字符：空格、制表符、NL、FF、VT和CR
<span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意大写字母字符A~Z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:digit:]]/p&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:alpha:]]/p&#39;</span>
abc
<span class="token builtin class-name">echo</span> <span class="token string">&quot;abc123&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:digit:]]/p&#39;</span>
abc123
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is, a test&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:punct:]]/p&#39;</span>
This is, a <span class="token builtin class-name">test</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:punct:]]/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="星号" tabindex="-1"><a class="header-anchor" href="#星号"><span>星号</span></a></h4><p>在字符后面放置星号表明该字符必须在匹配模式的文本中出现0次或多次。</p><p>这个模式符号广泛用于处理有常见拼写错误或在不同语言中有拼写变化的单词。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;ik&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
ik
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;iek&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
iek
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;ieek&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
ieek
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;ieeek&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
ieeek
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个可能用在美式或英式英语中的脚本，模式中的 u* 表明字母u可能出现或不出现在匹配模式的文本中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;m getting a color TV&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/colou*r/p&#39;</span>
I<span class="token string">&#39;m getting a color TV
echo &quot;I&#39;</span>m getting a colour TV<span class="token string">&quot; | sed -n &#39;/colou*r/p&#39;
I&#39;m getting a colour TV

echo &quot;</span>I ate a potatoe with my lunch.<span class="token string">&quot; | sed -n &#39;/potatoe*/p&#39;
I ate a potatoe with my lunch.
echo &quot;</span>I ate a potato with my lunch.&quot; <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/potatoe*/p&#39;</span>
I ate a potato with my lunch.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将点号特殊字符和星号特殊字符组合起来。这个组合能够匹配任意数量的任意字符。它通常用在数据流中两个可能相邻或不相邻的文本字符串之间。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;this is a regular pattern expression&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/regular.*expression/p&#39;</span>
this is a regular pattern expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>星号还能用在字符组上。它允许指定可能在文本中出现多次的字符组或字符区间。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
bt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;btt&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
btt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baat&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
baat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baaeeet&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
baaeeet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baeeaeeat&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
baeeaeeat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baakeeet&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展正则表达式-ere" tabindex="-1"><a class="header-anchor" href="#扩展正则表达式-ere"><span>扩展正则表达式 ERE</span></a></h3><p><code>gawk</code>程序能够识别 <code>ERE</code> 模式，但 <code>sed</code> 编辑器不能。</p><h4 id="问号" tabindex="-1"><a class="header-anchor" href="#问号"><span>问号</span></a></h4><p>问号表明前面的字符可以出现 <strong>0次或1次</strong>，它不会匹配多次出现的字符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
bt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
bt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bot&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果字符组中的字符出现了0次或1次，模式匹配就成立。但如果两个字符都出现了，或者其中一个字符出现了2次，模式匹配就不成立。</p><h4 id="加号" tabindex="-1"><a class="header-anchor" href="#加号"><span>加号</span></a></h4><p>加号表明前面的字符可以出现 <strong>1次或多次</strong>，但 <strong>必须至少出现1次</strong>。如果该字符没有出现，那么模式就不会匹配。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;beeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
beeet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次如果字符组中定义的任一字符出现了，文本就会匹配指定的模式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
beat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
beeat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="花括号" tabindex="-1"><a class="header-anchor" href="#花括号"><span>花括号</span></a></h4><p>ERE中的花括号允许你为可重复的正则表达式指定一个上限。这通常称为间隔（interval）。</p><p>可以用两种格式来指定区间。</p><ul><li>m ：正则表达式准确出现 m 次。</li><li>m, n ：正则表达式至少出现 m 次，至多 n 次。</li></ul><p>这个特性可以精确调整字符或字符集在模式中具体出现的次数。</p><hr><p><strong>警告</strong> 默认情况下，gawk程序不会识别正则表达式间隔。必须指定gawk程序的 <code>--re- interval</code> 命令行选项才能识别正则表达式间隔</p><hr><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
beet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
beat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baeaet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字母a或e在文本模式中只出现了1~2次，则正则表达式模式匹配；否则，模式匹配失败</p><h4 id="管道符号" tabindex="-1"><a class="header-anchor" href="#管道符号"><span>管道符号</span></a></h4><p>管道符号允许你在检查数据流时，用逻辑 OR 方式指定正则表达式引擎要用的两个或多个模式。如果任何一个模式匹配了数据流文本，</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat is asleep&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/cat|dog/{print $0}&#39;</span>
The <span class="token function">cat</span> is asleep
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The dog is asleep&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/cat|dog/{print $0}&#39;</span>
The dog is asleep
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The sheep is asleep&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/cat|dog/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;He has a hat.&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/[ch]at|dog/{print $0}&#39;</span>
He has a hat.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表达式分组-圆括号" tabindex="-1"><a class="header-anchor" href="#表达式分组-圆括号"><span>表达式分组-圆括号</span></a></h4><p>当你将正则表达式模式分组时，该组会被视为一个标准字符。可以像对普通字符一样给该组使用特殊字符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Sat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/Sat(urday)?/{print $0}&#39;</span>
Sat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Saturday&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/Sat(urday)?/{print $0}&#39;</span>
Saturday
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结尾的 urday 分组以及问号，使得模式能够匹配完整的 Saturday 或缩写 Sat</p><p>将分组和管道符号一起使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;cat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
<span class="token function">cat</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cab&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
cab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bab&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
bab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tab&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tac&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式实例" tabindex="-1"><a class="header-anchor" href="#正则表达式实例"><span>正则表达式实例</span></a></h3><h4 id="path目录文件计数" tabindex="-1"><a class="header-anchor" href="#path目录文件计数"><span>$PATH目录文件计数</span></a></h4><p>首先你得将 PATH 变量解析成单独的目录名</p><blockquote><p>echo $PATH<br> /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin</p></blockquote><p>用空格来替换冒号</p><blockquote><p>echo $PATH | sed &#39;s/😕 /g&#39;</p><p>/usr/local/sbin /usr/local/bin /usr/sbin /usr/bin /root/bin</p></blockquote><p>使用标准 for 语句中来遍历每个目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">mypath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/:/ /g&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">directory</span> <span class="token keyword">in</span> <span class="token variable">$mypath</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">check</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $directory<span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token variable">$check</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$directory</span> - <span class="token variable">$count</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo13.sh</span>
/usr/local/sbin - <span class="token number">0</span>
/usr/local/bin - <span class="token number">0</span>
/usr/sbin - <span class="token number">832</span>
/usr/bin - <span class="token number">1524</span>
ls: 无法访问/root/bin: 没有那个文件或目录
/root/bin - <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证电话号码" tabindex="-1"><a class="header-anchor" href="#验证电话号码"><span>验证电话号码</span></a></h4><p>电话号码有几种常见的形式：</p><ul><li>(123)456-7890</li><li>(123) 456-789</li><li>123-456-7890</li><li>123.456.7890</li></ul><p>电话号码中可能有也可能没有左圆括号。这可以用如下模式来匹配：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>^\\(?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>脱字符用来表明数据的开始。由于左圆括号是个特殊字符，因此必须将它转义成普通字符。问号表明左圆括号可能出现，也可能不出现。紧接着就是3位区号。在美国，区号以数字2开始（没有以数字0或1开始的区号），最大可到9。要匹配区号，可以用如下模式。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[2-9][0-9]{2}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这要求第一个字符是2~9的数字，后跟任意两位数字。在区号后面，收尾的右圆括号可能存在，也可能不存在。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在区号后，存在如下可能：有一个空格，没有空格，有一条单破折线或一个点。你可以对它们使用管道符号，并用圆括号进行分组</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(| |-|\\.)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一个管道符号紧跟在左圆括号后，用来匹配没有空格的情形。你必须将点字符转义，否则它会被解释成可匹配任意字符。紧接着是3位电话交换机号码。这里没什么需要特别注意的。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[0-9]{3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在电话交换机号码之后，你必须匹配一个空格、一条单破折线或一个点（这次不用考虑匹配没有空格的情况，因为在电话交换机号码和其余号码间必须有至少一个空格）。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>( |-|\\.)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，必须在字符串尾部匹配4位本地电话分机号。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[0-9]{4}$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完整的模式如下。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>^\\(?[2-9][0-9]{2}\\)?(| |-|\\.)[0-9]{3}( |-|\\.)[0-9]{4}$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> isphone
<span class="token comment">#!/bin/bash</span>
<span class="token function">gawk</span> --re-interval <span class="token string">&#39;/^\\(?[2-9][0-9]{2}\\)?(| |-|\\¬[0-9]{3}( |-|\\.)[0-9]{4}/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;317-555-1234&quot;</span> <span class="token operator">|</span> ./isphone
<span class="token number">317</span>-555-1234
<span class="token builtin class-name">echo</span> <span class="token string">&quot;000-555-1234&quot;</span> <span class="token operator">|</span> ./isphone
<span class="token builtin class-name">echo</span> <span class="token string">&quot;312 555-1234&quot;</span> <span class="token operator">|</span> ./isphone
<span class="token number">312</span> <span class="token number">555</span>-1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> phonelist
000-000-0000
<span class="token number">123</span>-456-7890
<span class="token number">212</span>-555-1234
<span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
<span class="token punctuation">(</span><span class="token number">202</span><span class="token punctuation">)</span> <span class="token number">555</span>-9876
<span class="token number">33523</span>
<span class="token number">1234567890</span>
<span class="token number">234.123</span>.4567

$ <span class="token function">cat</span> phonelist <span class="token operator">|</span> ./isphone
<span class="token number">212</span>-555-1234
<span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
<span class="token punctuation">(</span><span class="token number">202</span><span class="token punctuation">)</span> <span class="token number">555</span>-9876
<span class="token number">234.123</span>.4567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解析邮件地址" tabindex="-1"><a class="header-anchor" href="#解析邮件地址"><span>解析邮件地址</span></a></h4><p>邮件地址的基本格式为：</p><blockquote><p>username@hostname</p></blockquote><p>username 值可用字母数字字符以及以下特殊字符：</p><ul><li>点号</li><li>单破折线</li><li>加号</li><li>下划线</li></ul><p>在有效的邮件用户名中，这些字符可能以任意组合形式出现。邮件地址的 hostname 部分由一个或多个域名和一个服务器名组成。服务器名和域名也必须遵照严格的命名规则，只允许字母数字字符以及以下特殊字符：</p><ul><li>点号</li><li>下划线</li></ul><p>服务器名和域名都用点分隔，先指定服务器名，紧接着指定子域名，最后是后面不带点号的顶级域名。<br> 顶级域名的数量在过去十分有限，正则表达式模式编写者会尝试将它们都加到验证模式中。然而遗憾的是，随着互联网的发展，可用的顶级域名也增多了。这种方法已经不再可行。从左侧开始构建这个正则表达式模式。我们知道，用户名中可以有多个有效字符。这个相当容易。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>^([a-zA-Z0-9_\\-\\.\\+]+) @
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个分组指定了用户名中允许的字符，加号表明必须有至少一个字符。下一个字符很明显是@ ，没什么意外的。<br> hostname 模式使用同样的方法来匹配服务器名和子域名。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>([a-zA-Z0-9_\\-\\.]+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个模式可以匹配文本。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server
server.subdomain
server.subdomain.subdomain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于顶级域名，有一些特殊的规则。顶级域名只能是字母字符，必须不少于二个字符（国家<br> 或地区代码中使用），并且长度上不得超过五个字符。下面就是顶级域名用的正则表达式模式。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\.([a-zA-Z]{2,5})$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将整个模式放在一起会生成如下模式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>^<span class="token punctuation">(</span><span class="token punctuation">[</span>a-zA-Z0-9_<span class="token punctuation">\\</span>-<span class="token punctuation">\\</span>.<span class="token punctuation">\\</span>+<span class="token punctuation">]</span>+<span class="token punctuation">)</span>@<span class="token punctuation">(</span><span class="token punctuation">[</span>a-zA-Z0-9_<span class="token punctuation">\\</span>-<span class="token punctuation">\\</span>.<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.<span class="token punctuation">(</span><span class="token punctuation">[</span>a-zA-Z<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2,5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here.now&quot;</span> <span class="token operator">|</span> ./isemail
demo@here.now
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here.now.&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here.n&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here-now&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo.blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
demo.blum@here.now
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;rich_blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
rich_blum@here.now
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo/blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo#blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo*blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用其他-shell" tabindex="-1"><a class="header-anchor" href="#使用其他-shell"><span>使用其他 shell</span></a></h2><h3 id="理解dash-shell" tabindex="-1"><a class="header-anchor" href="#理解dash-shell"><span>理解dash shell</span></a></h3><h3 id="dash-shell脚本编程" tabindex="-1"><a class="header-anchor" href="#dash-shell脚本编程"><span>dash shell脚本编程</span></a></h3><h3 id="zsh-shell介绍" tabindex="-1"><a class="header-anchor" href="#zsh-shell介绍"><span>zsh shell介绍</span></a></h3><h3 id="zsh脚本编程" tabindex="-1"><a class="header-anchor" href="#zsh脚本编程"><span>zsh脚本编程</span></a></h3>`,256),i=[t];function p(c,o){return n(),a("div",null,i)}const u=s(l,[["render",p],["__file","shell3.html.vue"]]),v=JSON.parse('{"path":"/linux/shell3.html","title":"Shell脚本编程-高级篇之基础","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Shell脚本编程-高级篇之基础","category":["Linux"],"headerDepth":5,"date":"2022-09-12T00:00:00.000Z","star":true,"tag":["Linux","Shell"],"description":"shell脚本高级实战案例篇之【创建函数、图形化桌面脚本编程、正则表达式、使用其他 shell】","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/shell3.html"}],["meta",{"property":"og:title","content":"Shell脚本编程-高级篇之基础"}],["meta",{"property":"og:description","content":"shell脚本高级实战案例篇之【创建函数、图形化桌面脚本编程、正则表达式、使用其他 shell】"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell脚本编程-高级篇之基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"创建函数","slug":"创建函数","link":"#创建函数","children":[{"level":3,"title":"基本的脚本函数","slug":"基本的脚本函数","link":"#基本的脚本函数","children":[{"level":4,"title":"创建函数","slug":"创建函数-1","link":"#创建函数-1","children":[]},{"level":4,"title":"使用函数","slug":"使用函数","link":"#使用函数","children":[]},{"level":4,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":4,"title":"在函数中使用变量","slug":"在函数中使用变量","link":"#在函数中使用变量","children":[]},{"level":4,"title":"数组变量和函数","slug":"数组变量和函数","link":"#数组变量和函数","children":[]},{"level":4,"title":"函数递归","slug":"函数递归","link":"#函数递归","children":[]},{"level":4,"title":"创建库 source","slug":"创建库-source","link":"#创建库-source","children":[]},{"level":4,"title":"在命令行上使用函数","slug":"在命令行上使用函数","link":"#在命令行上使用函数","children":[]}]},{"level":3,"title":"shtool函数库使用示例","slug":"shtool函数库使用示例","link":"#shtool函数库使用示例","children":[{"level":4,"title":"下载与安装","slug":"下载与安装","link":"#下载与安装","children":[]},{"level":4,"title":"构建库","slug":"构建库","link":"#构建库","children":[]},{"level":4,"title":"shtool 库函数","slug":"shtool-库函数","link":"#shtool-库函数","children":[]},{"level":4,"title":"使用库","slug":"使用库","link":"#使用库","children":[]}]}]},{"level":2,"title":"图形化桌面环境中的脚本编程","slug":"图形化桌面环境中的脚本编程","link":"#图形化桌面环境中的脚本编程","children":[{"level":3,"title":"创建文本菜单","slug":"创建文本菜单","link":"#创建文本菜单","children":[]},{"level":3,"title":"创建文本窗口部件","slug":"创建文本窗口部件","link":"#创建文本窗口部件","children":[]},{"level":3,"title":"添加X Window图形","slug":"添加x-window图形","link":"#添加x-window图形","children":[]}]},{"level":2,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[{"level":3,"title":"正则表达式的类型","slug":"正则表达式的类型","link":"#正则表达式的类型","children":[]},{"level":3,"title":"基础正则表达式 BRE","slug":"基础正则表达式-bre","link":"#基础正则表达式-bre","children":[{"level":4,"title":"纯文本","slug":"纯文本","link":"#纯文本","children":[]},{"level":4,"title":"特殊字符","slug":"特殊字符","link":"#特殊字符","children":[]},{"level":4,"title":"锚字符 ^$","slug":"锚字符","link":"#锚字符","children":[]},{"level":4,"title":"点号字符","slug":"点号字符","link":"#点号字符","children":[]},{"level":4,"title":"字符组 []","slug":"字符组","link":"#字符组","children":[]},{"level":4,"title":"排除型字符组","slug":"排除型字符组","link":"#排除型字符组","children":[]},{"level":4,"title":"区间","slug":"区间","link":"#区间","children":[]},{"level":4,"title":"特殊的字符组","slug":"特殊的字符组","link":"#特殊的字符组","children":[]},{"level":4,"title":"星号","slug":"星号","link":"#星号","children":[]}]},{"level":3,"title":"扩展正则表达式 ERE","slug":"扩展正则表达式-ere","link":"#扩展正则表达式-ere","children":[{"level":4,"title":"问号","slug":"问号","link":"#问号","children":[]},{"level":4,"title":"加号","slug":"加号","link":"#加号","children":[]},{"level":4,"title":"花括号","slug":"花括号","link":"#花括号","children":[]},{"level":4,"title":"管道符号","slug":"管道符号","link":"#管道符号","children":[]},{"level":4,"title":"表达式分组-圆括号","slug":"表达式分组-圆括号","link":"#表达式分组-圆括号","children":[]}]},{"level":3,"title":"正则表达式实例","slug":"正则表达式实例","link":"#正则表达式实例","children":[{"level":4,"title":"$PATH目录文件计数","slug":"path目录文件计数","link":"#path目录文件计数","children":[]},{"level":4,"title":"验证电话号码","slug":"验证电话号码","link":"#验证电话号码","children":[]},{"level":4,"title":"解析邮件地址","slug":"解析邮件地址","link":"#解析邮件地址","children":[]}]}]},{"level":2,"title":"使用其他 shell","slug":"使用其他-shell","link":"#使用其他-shell","children":[{"level":3,"title":"理解dash shell","slug":"理解dash-shell","link":"#理解dash-shell","children":[]},{"level":3,"title":"dash shell脚本编程","slug":"dash-shell脚本编程","link":"#dash-shell脚本编程","children":[]},{"level":3,"title":"zsh shell介绍","slug":"zsh-shell介绍","link":"#zsh-shell介绍","children":[]},{"level":3,"title":"zsh脚本编程","slug":"zsh脚本编程","link":"#zsh脚本编程","children":[]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":24.76,"words":7429},"filePathRelative":"linux/shell3.md","localizedDate":"2022年9月12日","excerpt":"<p>shell脚本高级实战案例篇之【创建函数、图形化桌面脚本编程、正则表达式、使用其他 shell】</p>\\n","autoDesc":true}');export{u as comp,v as data};
