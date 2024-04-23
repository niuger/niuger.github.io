import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,a}from"./app-D1uezr0R.js";const i="/assets/true-image-20220919164800283-B9oTRkxO.png",l={},t=a(`<p>shell脚本高级实战案例篇之Sed</p><h1 id="shell脚本编程-高级篇之sed" tabindex="-1"><a class="header-anchor" href="#shell脚本编程-高级篇之sed"><span>Shell脚本编程-高级篇之sed</span></a></h1><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed"><span>sed</span></a></h2><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3><p>sed编辑器被称作流编辑器（stream editor），和普通的交互式文本编辑器恰好相反。在交互式文本编辑器中（比如vim），你可以用键盘命令来交互式地插入、删除或替换数据中的文本。</p><p>sed编辑器会执行下列操作:</p><ul><li>(1) 一次从输入中读取一行数据。</li><li>(2) 根据所提供的编辑器命令匹配数据。</li><li>(3) 按照命令修改流中的数据。</li><li>(4) 将新的数据输出到 STDOUT 。</li></ul><p>语法格式：</p><blockquote><p>sed options script file</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>选 项    描 述
-e script  在处理输入时，将 script 中指定的命令添加到已有的命令中
-f file  在处理输入时，将 file 中指定的命令添加到已有的命令中
-n  不产生命令输出，使用 print 命令来完成输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed &#39;s/test/big test/&#39;</span>
This is big <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment">#  cat data1.txt</span>
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy cat.
The quick brown fox jumps over the lazy cat.
The quick brown fox jumps over the lazy cat.
The quick brown fox jumps over the lazy cat.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -e &#39;s/brown/green/; s/dog/cat/&#39; data1.txt</span>
The quick green fox jumps over the lazy cat.
The quick green fox jumps over the lazy cat.
The quick green fox jumps over the lazy cat.
The quick green fox jumps over the lazy cat.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从文件中读取 sed 编辑器命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat script1.sed</span>
s/brown/green/
s/fox/elephant/
s/dog/cat/
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -f script1.sed data1.txt</span>
The quick green elephant jumps over the lazy cat.
The quick green elephant jumps over the lazy cat.
The quick green elephant jumps over the lazy cat.
The quick green elephant jumps over the lazy cat.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换标记" tabindex="-1"><a class="header-anchor" href="#替换标记"><span>替换标记</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data4.txt</span>
This is a <span class="token builtin class-name">test</span> of the <span class="token builtin class-name">test</span> script.
This is the second <span class="token builtin class-name">test</span> of the <span class="token builtin class-name">test</span> script.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/&#39; data4.txt</span>
This is a trial of the <span class="token builtin class-name">test</span> script.
This is the second trial of the <span class="token builtin class-name">test</span> script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下它只替换每行中出现的第一处；替换标记 <code>flags</code> 会在替换命令字符串之后设置。</p><blockquote><p>s/pattern/replacement/flags</p></blockquote><p>有4种可用的替换标记：</p><ul><li>数字，表明新文本将替换第几处模式匹配的地方；</li><li>g ，表明新文本将会替换所有匹配的文本；</li><li>p ，表明原先行的内容要打印出来；打印与替换命令中指定的模式匹配的行。这通常会和 sed 的 <code>-n</code> 选项一起使用；将二者配合使用的效果就是只输出被替换命令修改过的行。</li><li>w file ，将替换的结果写到文件中。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/2&#39; data4.txt</span>
This is a <span class="token builtin class-name">test</span> of the trial script.
This is the second <span class="token builtin class-name">test</span> of the trial script.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/g&#39; data4.txt</span>
This is a trial of the trial script.
This is the second trial of the trial script.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data5.txt</span>
This is a <span class="token builtin class-name">test</span> line.
This is a different line.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;s/test/trial/p&#39; data5.txt</span>
This is a trial line.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/w test.txt&#39; data5.txt</span>
This is a trial line.
This is a different line.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat test.txt</span>
This is a trial line.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换字符" tabindex="-1"><a class="header-anchor" href="#替换字符"><span>替换字符</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/\\/bin\\/bash/\\/bin\\/csh/&#39;</span> /etc/passwd
<span class="token function">sed</span> <span class="token string">&#39;s!/bin/bash!/bin/csh!&#39;</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>感叹号被用作字符串分隔符，这样路径名就更容易阅读和理解了。</p><h4 id="使用地址" tabindex="-1"><a class="header-anchor" href="#使用地址"><span>使用地址</span></a></h4><p>默认情况下，在sed编辑器中使用的命令会作用于文本数据的所有行。如果只想将命令作用于特定行或某些行，则必须用行寻址（line addressing）。</p><p>在sed编辑器中有两种形式的行寻址：</p><ul><li>以数字形式表示行区间</li><li>用文本模式来过滤出行</li></ul><p>两种形式都使用相同的格式来指定地址：</p><blockquote><p>[address]command</p></blockquote><p>也可以将特定地址的多个命令分组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>address <span class="token punctuation">{</span>
  command1
  command2
  command3
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数字方式的行寻址 <code>M 单行匹配</code> 、 <code>M,N 区间M到N行</code> 、 <code>M,$ 从某行开始的所有行</code></li></ul><p>sed编辑器会将文本流中的第一行编号为1，以此类。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy dog

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2,3s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy dog

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2,$s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用文本模式过滤器</li></ul><p>格式：/pattern/command</p><p>例如：只修改用户Samantha的默认shell，可以使用 sed 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> Samantha /etc/passwd
Samantha:x:502:502::/home/Samantha:/bin/bash

<span class="token function">sed</span> <span class="token string">&#39;/Samantha/s/bash/csh/&#39;</span> /etc/passwd
root:x:0:0:root:/root:/bin/bash
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Samantha:x:502:502::/home/Samantha:/bin/csh
Timothy:x:503:503::/home/Timothy:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命令组合</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2{</span>
<span class="token operator">&gt;</span> s/fox/elephant/
<span class="token operator">&gt;</span> s/dog/cat/
<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token string">&#39; data1.txt
The quick brown fox jumps over the lazy dog.
The quick brown elephant jumps over the lazy cat.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.

[root@admin shell]# sed &#39;</span><span class="token number">3</span>,<span class="token variable">\${
&gt; s<span class="token operator">/</span>brown<span class="token operator">/</span>green<span class="token operator">/</span>
&gt; s<span class="token operator">/</span>lazy<span class="token operator">/</span>active<span class="token operator">/</span>
&gt; }</span>&#39; data1.txt
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick green fox jumps over the active dog.
The quick green fox jumps over the active dog.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除行-d" tabindex="-1"><a class="header-anchor" href="#删除行-d"><span>删除行 d</span></a></h4><p><code>M 单行匹配</code> 、 <code>M,N 区间M到N行</code> 、 <code>M,$ 从某行开始的所有行</code> 、<code>结尾字符</code></p><p>它会删除匹配指定寻址模式的所有行。使用该命令时要特别小心，如果你忘记加入寻址模式的话，流中的所有文本行都会被删除。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">1</span>
The quick brown fox jumps over the lazy dog <span class="token number">2</span>
The quick brown fox jumps over the lazy dog <span class="token number">3</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>

<span class="token function">sed</span> <span class="token string">&#39;d&#39;</span> data1. <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt

<span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">2</span>
The quick brown fox jumps over the lazy dog <span class="token number">3</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>

<span class="token function">sed</span> <span class="token string">&#39;2,3d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">1</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>

<span class="token function">sed</span> <span class="token string">&#39;3,$d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">1</span>
The quick brown fox jumps over the lazy dog <span class="token number">2</span>

<span class="token function">sed</span> <span class="token string">&#39;/dog 1/d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">2</span>
The quick brown fox jumps over the lazy dog <span class="token number">3</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊情况</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data7.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is line number <span class="token number">1</span> again.
This is text you want to keep.
This is the last line <span class="token keyword">in</span> the file.

<span class="token function">sed</span> <span class="token string">&#39;/1/,/3/d&#39;</span> data7.txt
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个出现数字“1”的行再次触发了删除命令，因为没有找到停止模式，所以就将数据流中的剩余行全部删除了。当然，如果你指定了一个从未在文本中出现的停止模式，显然会出现另外一个问题。</p><blockquote><p>$ sed &#39;/1/,/5/d&#39; data7.txt</p></blockquote><h4 id="插入和附加文本-i-a" tabindex="-1"><a class="header-anchor" href="#插入和附加文本-i-a"><span>插入和附加文本 i a</span></a></h4><ul><li>插入（ insert ）命令（ i ）会在指定行前增加一个新行；</li><li>附加（ append ）命令（ a ）会在指定行后增加一个新行。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Test Line 2&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;i\\Test Line 1&#39;</span>
Test Line <span class="token number">1</span>
Test Line <span class="token number">2</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Test Line 2&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;i\\Test Line 3&#39;</span>
Test Line <span class="token number">2</span>
Test Line <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个新行插入到数据流第三行前，起始位置增加一个新行 <code>1i</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;3i\\This is an inserted line.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is an inserted line.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个新行附加到数据流中第三行后</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;3a\\This is an appended line.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is an appended line.
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将新行附加到数据流的末尾</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;$a\\This is an appended line.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is an appended line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改行c" tabindex="-1"><a class="header-anchor" href="#修改行c"><span>修改行c</span></a></h4><p>修改（ change ）命令允许修改数据流中整行文本的内容。它跟插入和附加命令的工作机制一样，你必须在 sed 命令中单独指定新行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;3c\\This is a changed line of text.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is a changed line of text.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token string">&#39;/number 3/c\\This is a changed line of text.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is a changed line of text.
This is line number <span class="token number">4</span>.

<span class="token comment">#你可以在修改命令中使用地址区间，但结果未必如愿。</span>
<span class="token function">sed</span> <span class="token string">&#39;2,3c\\This is a new line of text.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is a new line of text.
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="转换命令-y" tabindex="-1"><a class="header-anchor" href="#转换命令-y"><span>转换命令 y</span></a></h4><p>转换（ transform ）命令（ y ）是唯一可以处理单个字符的sed编辑器命令。转换命令格式如下。</p><blockquote><p>[address]y/inchars/outchars/</p></blockquote><p>转换命令会对 inchars 和 outchars 值进行一对一的映射。 inchars 中的第一个字符会被转换为 outchars 中的第一个字符，以此类推。这个映射过程会一直持续到处理完指定字符；如果 inchars 和 outchars 的长度不同，则sed编辑器会产生一条错误消息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;y/123/789/&#39;</span> data8.txt
This is line number <span class="token number">7</span>.
This is line number <span class="token number">8</span>.
This is line number <span class="token number">9</span>.
This is line number <span class="token number">4</span>.
This is line number <span class="token number">7</span> again.
This is yet another line.
This is the last line <span class="token keyword">in</span> the file.

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This 1 is a test of 1 try.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;y/123/456/&#39;</span>
This <span class="token number">4</span> is a <span class="token builtin class-name">test</span> of <span class="token number">4</span> try.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="打印-p-l" tabindex="-1"><a class="header-anchor" href="#打印-p-l"><span>打印 p = l</span></a></h4><p>打印数据流中的信息：</p><ul><li>p 命令用来打印文本行；</li><li>= 命令用来打印行号；</li><li>l （小写的L）命令用来列出行。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;this is a test&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;p&#39;</span>
this is a <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>

<span class="token function">cat</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/number 3/p&#39;</span> data6.txt
This is line number <span class="token number">3</span>.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2,3p&#39;</span> data6.txt
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.

<span class="token comment">##修改行之前显示该行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/3/{
&gt; p
&gt; s/line/test/p
&gt; }&#39;</span> data6.txt
This is line number <span class="token number">3</span>.
This is <span class="token builtin class-name">test</span> number <span class="token number">3</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.

<span class="token function">sed</span> <span class="token string">&#39;=&#39;</span> data1.txt
<span class="token number">1</span>
The quick brown fox jumps over the lazy dog.
<span class="token number">2</span>
The quick brown fox jumps over the lazy dog.
<span class="token number">3</span>
The quick brown fox jumps over the lazy dog.
<span class="token number">4</span>
The quick brown fox jumps over the lazy dog.


<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/number 4/{
&gt; =
&gt; p
&gt; }&#39;</span> data6.txt
<span class="token number">4</span>
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data9.txt
This line contains tabs.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;l&#39;</span> data9.txt
This<span class="token punctuation">\\</span>tline<span class="token punctuation">\\</span>tcontains<span class="token punctuation">\\</span>ttabs.
--------------------
--------------------
<span class="token function">cat</span> data10.txt
This line contains an escape character.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;l&#39;</span> data10.txt
This line contains an escape character. <span class="token punctuation">\\</span>a$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用sed处理文件w" tabindex="-1"><a class="header-anchor" href="#使用sed处理文件w"><span>使用sed处理文件w</span></a></h4><ul><li>写入文件</li></ul><p>w 命令用来向文件写入行。该命令的格式如下：</p><p>[address]w filename</p><p><code>filename</code> 可以使用相对路径或绝对路径；用户都必须有文件的写权限。</p><p>将数据流中的前两行打印到一个文本文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;1,2w test.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.

<span class="token function">cat</span> test.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要根据一些公用的文本值从主文件中创建一份数据文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data11.txt
Blum, R Browncoat
McGuiness, A Alliance
Bresnahan, C Browncoat
Harken, C Alliance

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/Browncoat/w Browncoats.txt&#39;</span> data11.txt

<span class="token function">cat</span> Browncoats.txt
Blum, R Browncoat
Bresnahan, C Browncoat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从文件读取数据 r</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data12.txt
This is an added line.
This is the second added line.

<span class="token function">sed</span> <span class="token string">&#39;3r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is an added line.
This is the second added line.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token string">&#39;/number 2/r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is an added line.
This is the second added line.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token string">&#39;$r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is an added line.
This is the second added line.

<span class="token function">sed</span> <span class="token string">&#39;1r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is an added line.
This is the second added line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取命令的另一个很酷的用法是和删除命令配合使用：利用另一个文件中的数据来替换文件中的占位文本。举例来说，假定你有一份套用信件保存在文本文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> notice.std
Would the following people:
LIST
please report to the ship&#39;s captain.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>套用信件将通用占位文本 LIST 放在人物名单的位置。要在占位文本后插入名单，只需读取命令就行了。但这样的话，占位文本仍然会留在输出中。要删除占位文本的话，你可以用删除命令。结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/LIST/{
&gt; r data11.txt
&gt; d
&gt; }&#39;</span> notice.std
Would the following people:
Blum, R Browncoat
McGuiness, A Alliance
Bresnahan, C Browncoat
Harken, C Alliance
please report to the ship&#39;s captain.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在占位文本已经被替换成了数据文件中的名单。</p><h3 id="多行命令" tabindex="-1"><a class="header-anchor" href="#多行命令"><span>多行命令</span></a></h3><p>处理多行文本的特殊命令：</p><ul><li>N ：将数据流中的下一行加进来创建一个多行组（multiline group）来处理。</li><li>D ：删除多行组中的一行</li><li>P ：打印多行组中的一行。</li></ul><h4 id="next-命令" tabindex="-1"><a class="header-anchor" href="#next-命令"><span>next 命令</span></a></h4><p>首先需要看一下单行版本的 next 命令是如何工作的，然后就比<br> 较容易理解多行版本的 next 命令是如何操作的了。</p><ul><li>1、单行的 next 命令 <code>n</code></li></ul><p>小写的 n 命令会告诉sed编辑器移动到数据流中的下一文本行，而不用重新回到命令的最开始再执行一遍。记住，通常sed编辑器在移动到数据流中的下一文本行之前，会在当前行上执行完所有定义好的命令。单行 next 命令改变了这个流程。</p><p>这听起来可能有些复杂，没错，有时确实是。在这个例子中，你有个数据文件，共有5行内容，其中的两行是空的。目标是删除首行之后的空白行，而留下最后一行之前的空白行。如果写一个删掉空白行的sed脚本，你会删掉两个空白行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1.log
This is the header line.

This is a data line.

This is the last line.
--------------------------
<span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> data1.log
This is the header line.
This is a data line.
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法是用 n 命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/header/{n ; d}&#39;</span> data1.log
This is the header line.
This is a data line.

This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>合并文本行 <code>N</code></li></ul><p>了解了单行版的 next 命令，现在来看看多行版的。单行 next 命令会将数据流中的下一文本行移动到sed编辑器的工作空间（称为模式空间）。多行版本的 next 命令（用大写N）会将下一文本行添加到模式空间中已有的文本后。</p><p>这样的作用是将数据流中的两个文本行合并到同一个模式空间中。文本行仍然用换行符分隔，但sed编辑器现在会将两行文本当成一行来处理。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token string">&#39;/first/{ N ; s/\\n/ / }&#39;</span> data2.txt
This is the header line.
This is the first data line. This is the second data line.
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sed编辑器脚本查找含有单词first的那行文本。找到该行后，它会用 N 命令将下一行合并到那行，然后用替换命令 s 将换行符替换成空格。结果是，文本文件中的两行在sed编辑器的输出中成了一行。</p></blockquote><p>如果要在数据文件中查找一个可能会分散在两行中的文本短语的话，这是个很实用的应用程序。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data3.txt
On Tuesday, the Linux System
Administrator<span class="token string">&#39;s group meeting will be held.
All System Administrators should attend.
Thank you for your attendance.

sed &#39;</span>N <span class="token punctuation">;</span> s/System Administrator/Desktop User/<span class="token string">&#39; data3.txt
On Tuesday, the Linux System
Administrator&#39;</span>s group meeting will be held.
All Desktop Users should attend.
Thank you <span class="token keyword">for</span> your attendance.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换命令会在文本文件中查找特定的双词短语 System Administrator 。如果短语在一行中的话，事情很好处理，替换命令可以直接替换文本。但如果短语分散在两行中的话，替换命令就没法识别匹配的模式了。<br> 这时 N 命令就可以派上用场了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N ; s/System.Administrator/Desktop User/&#39;</span> data3.txt
On Tuesday, the Linux Desktop User&#39;s group meeting will be held.
All Desktop Users should attend.
Thank you <span class="token keyword">for</span> your attendance.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用 N 命令将发现第一个单词的那行和下一行合并后，即使短语内出现了换行，你仍然可以找到它。<br><strong>注意</strong>，替换命令在 System 和 Administrator 之间用了通配符模式（.）来匹配空格和换行符这两种情况。但当它匹配了换行符时，它就从字符串中删掉了换行符，导致两行合并成一行。这可能不是你想要的。</p></blockquote><p>要解决这个问题，可以在sed编辑器脚本中用两个替换命令：一个用来匹配短语出现在多行中的情况，一个用来匹配短语出现在单行中的情况。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N
&gt; s/System\\nAdministrator/Desktop\\nUser/
&gt; s/System Administrator/Desktop User/
&gt; &#39;</span> data3.txt
On Tuesday, the Linux Desktop
User&#39;s group meeting will be held.
All Desktop Users should attend.
Thank you <span class="token keyword">for</span> your attendance.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>但这个脚本中仍有个小问题。这个脚本总是在执行sed编辑器命令前将下一行文本读入到模式空间。当它到了最后一行文本时，就没有下一行可读了，所以 N 命令会叫sed编辑器停止。如果要匹配的文本正好在数据流的最后一行上，命令就不会发现要匹配的数据。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data4.txt
On Tuesday, the Linux System
Administrator<span class="token string">&#39;s group meeting will be held.
All System Administrators should attend.

sed &#39;</span>N
<span class="token operator">&gt;</span> s/System<span class="token punctuation">\\</span>nAdministrator/Desktop<span class="token punctuation">\\</span>nUser/
<span class="token operator">&gt;</span> s/System Administrator/Desktop User/
<span class="token operator">&gt;</span> <span class="token string">&#39; data4.txt
On Tuesday, the Linux Desktop
User&#39;</span>s group meeting will be held.
All System Administrators should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 System Administrator 文本出现在了数据流中的最后一行， N 命令会错过它，因为没有其他行可读入到模式空间跟这行合并。你可以轻松地解决这个问题——将单行命令放到 N 命令前面，并将多行命令放到 N 命令后面，像这样：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;
&gt; s/System Administrator/Desktop User/
&gt; N
&gt; s/System\\nAdministrator/Desktop\\nUser/
&gt; &#39;</span> data4.txt
On Tuesday, the Linux Desktop
User&#39;s group meeting will be held.
All Desktop Users should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多行删除命令-d" tabindex="-1"><a class="header-anchor" href="#多行删除命令-d"><span>多行删除命令 D</span></a></h4><p>单行删除命令（ d ）。sed编辑器用它来删除模式空间中的当前行。但和 N 命令一起使用时，使用单行删除命令就要小心了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N ; /System\\nAdministrator/d&#39;</span> data4.txt
All System Administrators should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除命令会在不同的行中查找单词System和Administrator，然后在模式空间中将两行都删掉。这未必是你想要的结果。</p><p>sed编辑器提供了多行删除命令 D ，它只删除模式空间中的第一行。该命令会删除到换行符（含换行符）为止的所有字符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N ; /System\\nAdministrator/D&#39;</span> data4.txt
Administrator&#39;s group meeting will be held.
All System Administrators should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文本的第二行被 N 命令加到了模式空间，但仍然完好。如果需要删掉目标数据字符串所在行的前一文本行，它能派得上用场。</p><p>这里有个例子，它会删除数据流中出现在第一行前的空白行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data5.txt

This is the header line.
This is a data line.

This is the last line.

<span class="token function">sed</span> <span class="token string">&#39;/^$/{N ; /header/D}&#39;</span> data5.txt
This is the header line.
This is a data line.

This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sed编辑器脚本会查找空白行，然后用 N 命令来将下一文本行添加到模式空间。如果新的模式空间内容含有单词header，则 D 命令会删除模式空间中的第一行。如果不结合使用 N 命令和 D 命令，就不可能在不删除其他空白行的情况下只删除第一个空白行。</p></blockquote><h4 id="多行打印命令-p" tabindex="-1"><a class="header-anchor" href="#多行打印命令-p"><span>多行打印命令 P</span></a></h4><p>它只打印多行模式空间中的第一行。这包括模式空间中直到换行符为止的所有字符。</p><p>用 -n 选项来阻止脚本输出时，它和显示文本的单行 p 命令的用法大同小异。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;N ; /System\\nAdministrator/P&#39;</span> data3.txt
On Tuesday, the Linux System
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当多行匹配出现时， P 命令只会打印模式空间中的第一行。多行 P 命令的强大之处在和 N 命令及 D 命令组合使用时才能显现出来。</p><p>D 命令的独特之处在于强制sed编辑器返回到脚本的起始处，对同一模式空间中的内容重新执行这些命令（它不会从数据流中读取新的文本行）。在命令脚本中加入 N 命令，你就能单步扫过整个模式空间，将多行一起匹配。</p><p>接下来，使用 P 命令打印出第一行，然后用 D 命令删除第一行并绕回到脚本的起始处。一旦返回， N 命令会读取下一行文本并重新开始这个过程。这个循环会一直继续下去，直到数据流结束。</p><h3 id="保持空间" tabindex="-1"><a class="header-anchor" href="#保持空间"><span>保持空间</span></a></h3><p>模式空间（pattern space）是一块活跃的缓冲区，在sed编辑器执行命令时它会保存待检查的文本。但它并不是sed编辑器保存文本的唯一空间。</p><p>sed编辑器有另一块称作保持空间（hold space）的缓冲区域。在处理模式空间中的某些行时，可以用保持空间来临时保存一些行。有5条命令可用来操作保持空间</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>命 令   描 述
h  将模式空间复制到保持空间
H  将模式空间附加到保持空间
g  将保持空间复制到模式空间
G  将保持空间附加到模式空间
x  交换模式空间和保持空间的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些命令用来将文本从模式空间复制到保持空间。这可以清空模式空间来加载其他要处理的字符串。</p><p>通常，在使用 h 或 H 命令将字符串移动到保持空间后，最终还要用 g 、 G 或 x 命令将保存的字符串移回模式空间（否则，你就不用在一开始考虑保存它们了）。</p><p>由于有两个缓冲区域，弄明白哪行文本在哪个缓冲区域有时会比较麻烦。这里有个简短的例子演示了如何用 h 和 g 命令来将数据在sed编辑器缓冲空间之间移动。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/first/ {h ; p ; n ; p ; g ; p }&#39;</span> data2.txt
This is the first data line.
This is the second data line.
This is the first data line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我们来一步一步看上面这个代码例子：</p><ul><li><p>(a) sed脚本在地址中用正则表达式来过滤出含有单词first的行；</p></li><li><p>(b) 当含有单词first的行出现时， h 命令将该行放到保持空间；</p></li><li><p>(c) p 命令打印模式空间也就是第一个数据行的内容；</p></li><li><p>(d) n 命令提取数据流中的下一行（ This is the second data line ），并将它放到模式空间；</p></li><li><p>(e) p 命令打印模式空间的内容，现在是第二个数据行；</p></li><li><p>(f) g 命令将保持空间的内容（ This is the first data line ）放回模式空间，替换当前文本；</p></li><li><p>(g) p 命令打印模式空间的当前内容，现在变回第一个数据行了。</p></li></ul></blockquote><p>通过使用保持空间来回移动文本行，你可以强制输出中第一个数据行出现在第二个数据行后面。如果丢掉了第一个 p 命令，你可以以相反的顺序输出这两行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/first/ {h ; n ; p ; g ; p }&#39;</span> data2.txt
This is the second data line.
This is the first data line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是个有用的开端。你可以用这种方法来创建一个sed脚本将整个文件的文本行反转！但要那么做的话，你需要了解sed编辑器的排除特性</p><h4 id="排除命令" tabindex="-1"><a class="header-anchor" href="#排除命令"><span>排除命令</span></a></h4><p>感叹号命令（ ! ）用来排除（ negate ）命令，也就是让原本会起作用的命令不起作用。下面的例子演示了这一特性</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/header/!p&#39;</span> data2.txt
This is the first data line.
This is the second data line.
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>除了包含单词header那一行外，文件中其他所有的行都被打印出来了。</p></blockquote><p>sed编辑器无法处理数据流中最后一行文本，因为之后再没有其他行了。可以用感叹号来解决这个问题</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N;
&gt; s/System\\nAdministrator/Desktop\\nUser/
&gt; s/System Administrator/Desktop User/
&gt; &#39;</span> data4.txt
On Tuesday, the Linux Desktop
User<span class="token string">&#39;s group meeting will be held.
All System Administrators should attend.

sed &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span>
<span class="token operator">&gt;</span> s/System<span class="token punctuation">\\</span>nAdministrator/Desktop<span class="token punctuation">\\</span>nUser/
<span class="token operator">&gt;</span> s/System Administrator/Desktop User/
<span class="token operator">&gt;</span> <span class="token string">&#39; data4.txt
On Tuesday, the Linux Desktop
User&#39;</span>s group meeting will be held.
All Desktop Users should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子演示了如何配合使用感叹号与 N 命令以及与美元符特殊地址。美元符表示数据流中的最后一行文本，所以当sed编辑器到了最后一行时，它没有执行 N 命令，但它对所有其他行都执行了这个命令。</p><p>使用这种方法，你可以反转数据流中文本行的顺序。要实现这个效果（先显示最后一行，最后显示第一行），你得利用保持空间做一些特别的铺垫工作。<br> 你得像这样使用模式空间：</p><ul><li>(1) 在模式空间中放置一行；</li><li>(2) 将模式空间中的行放到保持空间中；</li><li>(3) 在模式空间中放入下一行；</li><li>(4) 将保持空间附加到模式空间后；</li><li>(5) 将模式空间中的所有内容都放到保持空间中；</li><li>(6) 重复执行第(3)~(5)步，直到所有行都反序放到了保持空间中；</li><li>(7) 提取并打印行。</li></ul><p>在使用这种方法时，你不想在处理时打印行。这意味着要使用 sed 的 -n 命令行选项。下一步是决定如何将保持空间文本附加到模式空间文本后面。这可以用 G 命令完成。唯一的问题是你不想将保持空间附加到要处理的第一行文本后面。这可以用感叹号命令轻松解决：</p><p>1!G</p><p>下一步就是将新的模式空间（含有已反转的行）放到保持空间。这也非常简单，只要用 h 命令就行。</p><p>将模式空间中的整个数据流都反转了之后，你要做的就是打印结果。当到达数据流中的最后一行时，你就知道已经得到了模式空间的整个数据流。打印结果要用下面的命令：</p><p>$p</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这些都是你创建可以反转行的sed编辑器脚本所需的操作步骤。现在可以运行一下试试：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{1!G ; h ; $p }&#39;</span> data2.txt
This is the last line.
This is the second data line.
This is the first data line.
This is the header line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 可能你想说，有个Linux命令已经有反转文本文件的功能了。 tac 命令会倒序显示一个文本文件。你也许已经注意到了，这个命令的名字很巧妙，它执行的正好是与 cat 命令相反的功能。</p><hr><h3 id="改变流" tabindex="-1"><a class="header-anchor" href="#改变流"><span>改变流</span></a></h3><p>通常，sed编辑器会从脚本的顶部开始，一直执行到脚本的结尾（ D 命令是个例外，它会强制sed编辑器返回到脚本的顶部，而不读取新的行）。sed编辑器提供了一个方法来改变命令脚本的执行流程，其结果与结构化编程类似。</p><h4 id="分支b" tabindex="-1"><a class="header-anchor" href="#分支b"><span>分支b</span></a></h4><p>在前面一节中，你了解了如何用感叹号命令来排除作用在某行上的命令。sed编辑器提供了一种方法，可以基于地址、地址模式或地址区间排除一整块命令。这允许你只对数据流中的特定行执行一组命令。<br> 分支（ branch ）命令 b 的格式如下：</p><p>[ address ]b [ label ]</p><p>address 参数决定了哪些行的数据会触发分支命令。 label 参数定义了要跳转到的位置。如果没有加 label 参数，跳转命令会跳转到脚本的结尾。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token string">&#39;{2,3b ; s/This is/Is this/ ; s/line./test?/}&#39;</span> data2.txt

Is this the header test?
This is the first data line.
This is the second data line.
Is this the last test?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分支命令在数据流中的第2行和第3行处跳过了两个替换命令。</p><p>要是不想直接跳到脚本的结尾，可以为分支命令定义一个要跳转到的标签。标签以冒号开始，最多可以是7个字符长度。</p><p>要指定标签，将它加到 b 命令后即可。使用标签允许你跳过地址匹配处的命令，但仍然执行脚本中的其他命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{/first/b jump1 ; s/This is the/No jump on/
&gt; :jump1
&gt; s/This is the/Jump here on/}&#39;</span> data2.txt

No jump on header line
Jump here on first data line
No jump on second data line
No jump on last line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳转命令指定如果文本行中出现了 first ，程序应该跳到标签为 jump1 的脚本行。如果分支命令的模式没有匹配，sed编辑器会继续执行脚本中的命令，包括分支标签后的命令（因此，所有的替换命令都会在不匹配分支模式的行上执行）。</p><p>如果某行匹配了分支模式， sed编辑器就会跳转到带有分支标签的那行。因此，只有最后一个替换命令会执行。</p><p>这个例子演示了跳转到sed脚本后面的标签上。</p><p>也可以跳转到脚本中靠前面的标签上，这样就达到了循环的效果。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This, is, a, test, to, remove, commas.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{
&gt; :start
&gt; s/,//1p
&gt; b start
&gt; }&#39;</span>

This is, a, test, to, remove, commas.
This is a, test, to, remove, commas.
This is a test, to, remove, commas.
This is a <span class="token builtin class-name">test</span> to, remove, commas.
This is a <span class="token builtin class-name">test</span> to remove, commas.
This is a <span class="token builtin class-name">test</span> to remove commas.
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本的每次迭代都会删除文本中的第一个逗号，并打印字符串。这个脚本有个问题：它永远不会结束。这就形成了一个无穷循环，不停地查找逗号，直到使用Ctrl+C组合键发送一个信号，手动停止这个脚本。</p><p>要防止这个问题，可以为分支命令指定一个地址模式来查找。如果没有模式，跳转就应该结束：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This, is, a, test, to, remove, commas.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{
&gt; :start
&gt; s/,//1p
&gt; /,/b start
&gt; }&#39;</span>
This is, a, test, to, remove, commas.
This is a, test, to, remove, commas.
This is a test, to, remove, commas.
This is a <span class="token builtin class-name">test</span> to, remove, commas.
This is a <span class="token builtin class-name">test</span> to remove, commas.
This is a <span class="token builtin class-name">test</span> to remove commas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>现在分支命令只会在行中有逗号的情况下跳转。在最后一个逗号被删除后，分支命令不会再执行，脚本也就能正常停止了。</p></blockquote><h4 id="测试t" tabindex="-1"><a class="header-anchor" href="#测试t"><span>测试t</span></a></h4><p>类似于分支命令，测试（ test ）命令（ t ）也可以用来改变sed编辑器脚本的执行流程。测试命令会根据替换命令的结果跳转到某个标签，而不是根据地址进行跳转。</p><p>如果替换命令成功匹配并替换了一个模式，测试命令就会跳转到指定的标签。如果替换命令未能匹配指定的模式，测试命令就不会跳转。测试命令使用与分支命令相同的格式。</p><p>[ address ]t [ label ]</p><p>跟分支命令一样，在没有指定标签的情况下，如果测试成功，sed会跳转到脚本的结尾。</p><p>测试命令提供了对数据流中的文本执行基本的 if-then 语句的一个低成本办法。举个例子，如果已经做了一个替换，不需要再做另一个替换，那么测试命令能帮上忙。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{
&gt; s/first/matched/
&gt; t
&gt; s/This is the/No match on/
&gt; }&#39;</span> data2.txt
No match on header line
This is the matched data line
No match on second data line
No match on last line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一个替换命令会查找模式文本 first 。如果匹配了行中的模式，它就会替换文本，而且测试命令会跳过后面的替换命令。如果第一个替换命令未能匹配模式，第二个替换命令就会被执行。</p></blockquote><p>有了测试命令，你就能结束之前用分支命令形成的无限循环:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This, is, a, test, to, remove, commas. &quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{
&gt; :start
&gt; s/,//1p
&gt; t start
&gt; }&#39;</span>
This is, a, test, to, remove, commas.
This is a, test, to, remove, commas.
This is a test, to, remove, commas.
This is a <span class="token builtin class-name">test</span> to, remove, commas.
This is a <span class="token builtin class-name">test</span> to remove, commas.
This is a <span class="token builtin class-name">test</span> to remove commas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式替代" tabindex="-1"><a class="header-anchor" href="#模式替代"><span>模式替代</span></a></h3><p>你已经知道了如何在 sed 命令中使用模式来替代数据流中的文本。然而在使用通配符时，很难知道到底哪些文本会匹配模式。</p><p>举个例子，假如你想在行中匹配的单词两边上放上引号。如果你只是要匹配模式中的一个单词，那就非常简单。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat sleeps in his hat.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/cat/&quot;cat&quot;/&#39;</span>
The <span class="token string">&quot;cat&quot;</span> sleeps <span class="token keyword">in</span> his hat.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果你在模式中用通配符（.）来匹配多个单词呢？</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat sleeps in his hat.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/.at/&quot;.at&quot;/g&#39;</span>
The <span class="token string">&quot;.at&quot;</span> sleeps <span class="token keyword">in</span> his <span class="token string">&quot;.at&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>模式字符串用点号通配符来匹配at前面的一个字母。遗憾的是，用于替代的字符串无法匹配已匹配单词中的通配符字符。</p><h4 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>&amp;符号</span></a></h4><p>sed编辑器提供了一个解决办法。 &amp; 符号可以用来代表替换命令中的匹配的模式。不管模式匹配的是什么样的文本，你都可以在替代模式中使用 &amp; 符号来使用这段文本。这样就可以操作模式所匹配到的任何单词了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat sleeps in his hat.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/.at/&quot;&amp;&quot;/g&#39;</span>
The <span class="token string">&quot;cat&quot;</span> sleeps <span class="token keyword">in</span> his <span class="token string">&quot;hat&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当模式匹配了单词<code>cat</code>，&quot;cat&quot;就会出现在了替换后的单词里。当它匹配了单词<code>hat</code>，&quot;hat&quot; 就出现在了替换后的单词中。</p><h4 id="替代单独的单词" tabindex="-1"><a class="header-anchor" href="#替代单独的单词"><span>替代单独的单词</span></a></h4><p>&amp; 符号会提取匹配替换命令中指定模式的整个字符串。有时你只想提取这个字符串的一部分。</p><p>当然可以这么做，只是要稍微花点心思而已。</p><p>sed编辑器用圆括号来定义替换模式中的子模式。你可以在替代模式中使用特殊字符来引用每个子模式。替代字符由反斜线和数字组成。数字表明子模式的位置。sed编辑器会给第一个子模式分配字符 <code>\\1</code> ，给第二个子模式分配字符 <code>\\2</code> ，依此类推。</p><hr><p><strong>警告</strong> 当在替换命令中使用圆括号时，必须用转义字符将它们标示为分组字符而不是普通的圆括号。这跟转义其他特殊字符正好相反。</p><hr><p>来看一个在sed编辑器脚本中使用这个特性的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The System Administrator manual&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;
&gt; s/\\(System\\) Administrator/\\1 User/&#39;</span>
The System User manual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个替换命令用一对圆括号将单词System括起来，将其标示为一个子模式。然后它在替代模式中使用 \\1 来提取第一个匹配的子模式。这没什么特别的，但在处理通配符模式时却特别有用。</p><p>如果需要用一个单词来替换一个短语，而这个单词刚好是该短语的子字符串，但那个子字符串碰巧使用了通配符，这时使用子模式会方便很多。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;That furry cat is pretty&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/furry \\(.at\\)/\\1/&#39;</span>
That <span class="token function">cat</span> is pretty

<span class="token builtin class-name">echo</span> <span class="token string">&quot;That furry hat is pretty&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/furry \\(.at\\)/\\1/&#39;</span>
That hat is pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，你不能用 &amp; 符号，因为它会替换整个匹配的模式。子模式提供了答案，允许你选择将模式中的某部分作为替代模式。<br> 当需要在两个或多个子模式间插入文本时，这个特性尤其有用。这里有个脚本，它使用子模式在大数字中插入逗号。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;1234567&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;{
&gt; :start
&gt; s/\\(.*[0-9]\\)\\([0-9]\\{3\\}\\)/\\1,\\2/
&gt; t start
&gt; }&#39;</span>
<span class="token number">1,234</span>,567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本将匹配模式分成了两部分。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>.*<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个模式会查找两个子模式。第一个子模式是以数字结尾的任意长度的字符。第二个子模式是若干组三位数字。如果这个模式在文本中找到了，替代文本会在两个子模式之间加一个逗号，每个子模式都会通过其位置来标示。</p><p>这个脚本使用测试命令来遍历这个数字，直到放置好所有的逗号。</p><h3 id="在脚本中使用sed" tabindex="-1"><a class="header-anchor" href="#在脚本中使用sed"><span>在脚本中使用sed</span></a></h3><h4 id="使用包装脚本" tabindex="-1"><a class="header-anchor" href="#使用包装脚本"><span>使用包装脚本</span></a></h4><p>这里有个将命令行参数变量作为sed脚本输入的例子</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> reverse.sh
<span class="token comment">#!/bin/bash</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{ 1!G ; h ; $p }&#39;</span> <span class="token variable">$1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>名为reverse的shell脚本用sed编辑器脚本来反转数据流中的文本行。它使用shell参数 <code>$1</code> 从命令行中提取第一个参数，这正是需要进行反转的文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./reverse.sh data2.txt
This is the last line.
This is the second data line.
This is the first data line.
This is the header line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你能在任何文件上轻松使用这个sed编辑器脚本，再不用每次都在命令行上重新输入了。</p><h4 id="重定向-sed-的输出" tabindex="-1"><a class="header-anchor" href="#重定向-sed-的输出"><span>重定向 sed 的输出</span></a></h4><p>默认情况下，sed编辑器会将脚本的结果输出到 STDOUT 上。你可以在shell脚本中使用各种标准方法对sed编辑器的输出进行重定向。</p><p>可以在脚本中用 <code>$()</code> 将sed编辑器命令的输出重定向到一个变量中，以备后用。下面的例子使用sed脚本来向数值计算结果添加逗号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> fact.sh
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">factorial</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">counter</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$counter</span> <span class="token parameter variable">-le</span> <span class="token variable">$number</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">factorial</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$factorial</span> * <span class="token variable">$counter</span> <span class="token punctuation">]</span>
    <span class="token assign-left variable">counter</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$counter</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $factorial <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;{
:start
s/\\(.*[0-9]\\)\\([0-9]\\{3\\}\\)/\\1,\\2/
t start
}&#39;</span><span class="token variable">)</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./fact.sh <span class="token number">20</span>
The result is <span class="token number">2,432</span>,902,008,176,640,000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用普通的阶乘计算脚本后，脚本的结果会被作为sed编辑器脚本的输入，它会给结果加上逗号。然后 <code>echo</code> 语句使用这个值产生最终结果</p><h3 id="创建sed实用工具" tabindex="-1"><a class="header-anchor" href="#创建sed实用工具"><span>创建sed实用工具</span></a></h3><h4 id="加倍行间距" tabindex="-1"><a class="header-anchor" href="#加倍行间距"><span>加倍行间距</span></a></h4><p>首先，让我们看一个向文本文件的行间插入空白行的简单sed脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;G&#39;</span> data2.txt
This is the header line.

This is the first data line.

This is the second data line.

This is the last line.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来相当简单！这个技巧的关键在于保持空间的默认值。记住， G 命令会简单地将保持空间内容附加到模式空间内容后。当启动sed编辑器时，保持空间只有一个空行。将它附加到已有行后面，你就在已有行后面创建了一个空白行。</p><p>你可能已经注意到了，这个脚本在数据流的最后一行后面也加了一个空白行，使得文件的末尾也产生了一个空白行。如果你不想要这个空白行，可以用排除符号<code>!</code>和尾行符号<code>$</code>来确保脚本不会将空白行加到数据流的最后一行后面。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;$!G&#39;</span> data2.txt
This is the header line.

This is the first data line.

This is the second data line.

This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在看起来好一些了。只要该行不是最后一行， G 命令就会附加保持空间内容。当sed编辑器到了最后一行时，它会跳过 G 命令。</p><h4 id="对可能含有空白行的文件加倍行间距" tabindex="-1"><a class="header-anchor" href="#对可能含有空白行的文件加倍行间距"><span>对可能含有空白行的文件加倍行间距</span></a></h4><p>如果文本文件已经有一些空白行，但你想给所有行加倍行间距要怎么办呢？如果用前面的脚本，有些区域会有太多的空白行，因为每个已有的空白行也会被加倍</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data6.txt
This is line one.
This is line two.

This is line three.
This is line four.
$
$ <span class="token function">sed</span> <span class="token string">&#39;$!G&#39;</span> data6.txt
This is line one.

This is line two.



This is line three.

This is line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，在原来空白行的位置有了三个空白行。这个问题的解决办法是，首先删除数据流中的所有空白行，然后用 G 命令在所有行后插入新的空白行。要删除已有的空白行，需要将 d 命令和一个匹配空白行的模式一起使用。</p><blockquote><p><code>/^$/d</code></p></blockquote><p>这个模式使用了行首符号<code>^</code>和行尾符号<code>$</code>。将这个模式加到脚本中会生成想要的结果</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/^$/d ; $!G&#39;</span> data6.txt
This is line one.

This is line two.

This is line three.

This is line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="给文件中的行编号" tabindex="-1"><a class="header-anchor" href="#给文件中的行编号"><span>给文件中的行编号</span></a></h4><p>在查看错误消息的行号时，这是一个很好用的小工具。</p><p>用等号来显示数据流中行的行号。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;=&#39;</span> data2.txt
<span class="token number">1</span>
This is the header line.
<span class="token number">2</span>
This is the first data line.
<span class="token number">3</span>
This is the second data line.
<span class="token number">4</span>
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;=&#39;</span> data2.txt <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;N; s/\\n/ /&#39;</span>
<span class="token number">1</span> This is the header line.
<span class="token number">2</span> This is the first data line.
<span class="token number">3</span> This is the second data line.
<span class="token number">4</span> This is the last line.

<span class="token function">nl</span> data2.txt
<span class="token number">1</span> This is the header line.
<span class="token number">2</span> This is the first data line.
<span class="token number">3</span> This is the second data line.
<span class="token number">4</span> This is the last line.

<span class="token function">cat</span> <span class="token parameter variable">-n</span> data2.txt
<span class="token number">1</span> This is the header line.
<span class="token number">2</span> This is the first data line.
<span class="token number">3</span> This is the second data line.
<span class="token number">4</span> This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="打印末尾行" tabindex="-1"><a class="header-anchor" href="#打印末尾行"><span>打印末尾行</span></a></h4><p>到目前为止，你已经知道如何用 p 命令来打印数据流中所有的或者是匹配某个特定模式的行。<br> 如果只需处理一个长输出（比如日志文件）中的末尾几行，要怎么办呢？<br> 美元符代表数据流中最后一行，所以只显示最后一行很容易。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$p&#39;</span> data2.txt
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，如何用美元符来显示数据流末尾的若干行呢？答案是创建滚动窗口。<br> 滚动窗口是检验模式空间中文本行块的常用方法，它使用 N 命令将这些块合并起来。 N 命令将下一行文本附加到模式空间中已有文本行后面。一旦你在模式空间有了一个10行的文本块，你可以用美元符来检查你是否已经处于数据流的尾部。如果不在，就继续向模式空间增加行，同时删除原来的行（记住， D 命令会删除模式空间的第一行）。</p><p>通过循环 N 命令和 D 命令，你在向模式空间的文本行块增加新行的同时也删除了旧行。分支命令非常适合这个循环。要结束循环，只要识别出最后一行并用 q 命令退出就可以了。<br> 最终的sed编辑器脚本看起来如下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data7.txt
This is line <span class="token number">1</span>.
This is line <span class="token number">2</span>.
This is line <span class="token number">3</span>.
This is line <span class="token number">4</span>.
This is line <span class="token number">5</span>.
This is line <span class="token number">6</span>.
This is line <span class="token number">7</span>.
This is line <span class="token number">8</span>.
This is line <span class="token number">9</span>.
This is line <span class="token number">10</span>.
This is line <span class="token number">11</span>.
This is line <span class="token number">12</span>.
This is line <span class="token number">13</span>.
This is line <span class="token number">14</span>.
This is line <span class="token number">15</span>.

<span class="token function">sed</span> <span class="token string">&#39;{
&gt; :start
&gt; $q ; N ; 11,$D
&gt; b start
&gt; }&#39;</span> data7.txt
This is line <span class="token number">6</span>.
This is line <span class="token number">7</span>.
This is line <span class="token number">8</span>.
This is line <span class="token number">9</span>.
This is line <span class="token number">10</span>.
This is line <span class="token number">11</span>.
This is line <span class="token number">12</span>.
This is line <span class="token number">13</span>.
This is line <span class="token number">14</span>.
This is line <span class="token number">15</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本会首先检查这行是不是数据流中最后一行。如果是，退出（ quit ）命令会停止循环。 N 命令会将下一行附加到模式空间中当前行之后。如果当前行在第10行后面， 11,$D 命令会删除模式空间中的第一行。这就会在模式空间中创建出滑动窗口效果。因此，这个sed程序脚本只会显示出data7.txt文件最后10行</p><h4 id="删除行" tabindex="-1"><a class="header-anchor" href="#删除行"><span>删除行</span></a></h4><ul><li>删除连续的空白行</li></ul><p>数据文件中出现多余的空白行会非常让人讨厌。通常，数据文件中都会有空白行，但有时由于数据行的缺失，会产生过多的空白行（就像之前加倍行间距例子中所见到的那样）。</p><p>删除连续空白行的最简单办法是用地址区间来检查数据流。删除连续空白行的关键在于创建包含一个非空白行和一个空白行的地址区间。如果sed编辑器遇到了这个区间，它不会删除行。但对于不匹配这个区间的行（两个或更多的空白行），它会删除这些行。</p><p>下面是完成这个操作的脚本</p><blockquote><p><code>/./,/^$/!d</code></p></blockquote><p>区间是 <code>/./</code> 到 <code>/^$/</code> 。区间的开始地址会匹配任何含有至少一个字符的行。区间的结束地址会匹配一个空行。在这个区间内的行不会被删除</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data8.txt
This is line one.


This is line two.

This is line three.



This is line four.

<span class="token function">sed</span> <span class="token string">&#39;/./,/^$/!d&#39;</span> data8.txt
This is line one.

This is line two.

This is line three.

This is line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论文件的数据行之间出现了多少空白行，在输出中只会在行间保留一个空白行</p><ul><li>删除开头的空白行</li></ul><p>数据文件开头有多个空白行时也很烦人。通常，在将数据从文本文件导入到数据库时，空白行会产生一些空项，涉及这些数据的计算都得作废。</p><p>删除数据流顶部的空白行不难。下面是完成这个功能的脚本。</p><blockquote><p><code>/./,$!d</code></p></blockquote><p>这个脚本用地址区间来决定哪些行要删掉。这个区间从含有字符的行开始，一直到数据流结束。在这个区间内的任何行都不会从输出中删除。这意味着含有字符的第一行之前的任何行都会删除。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data9.txt

This is line one.

This is line two.

<span class="token function">sed</span> <span class="token string">&#39;/./,$!d&#39;</span> data9.txt
This is line one.

This is line two.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试文件在数据行之前有两个空白行。这个脚本成功地删除了开头的两个空白行，保留了数据中的空白行。</p><ul><li>删除结尾的空白行</li></ul><p>很遗憾，删除结尾的空白行并不像删除开头的空白行那么容易。就跟打印数据流的结尾一样，删除数据流结尾的空白行也需要花点心思，利用循环来实现。<br> 在开始讨论前，先看看脚本是什么样的</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{
:start
/^\\n*$/{$d; N; b start }
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> data10.txt
This is the first line.
This is the second line.



<span class="token function">sed</span> <span class="token string">&#39;{
&gt; :start
&gt; /^\\n*$/{$d ; N ; b start }
&gt; }&#39;</span> data10.txt
This is the first line.
This is the second line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除html标签" tabindex="-1"><a class="header-anchor" href="#删除html标签"><span>删除HTML标签</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>cat data11.txt
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>This is the page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
This is the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>first<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span> line in the Web page.
This should provide some <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>useful<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
information to use in our sed script.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/&lt;[^&gt;]*&gt;//g&#39;</span> data11.txt

This is the page title


This is the first line <span class="token keyword">in</span> the Web page.
This should provide some useful
information to use <span class="token keyword">in</span> our <span class="token function">sed</span> script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以加一条删除命令来删除多余的空白行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/&lt;[^&gt;]*&gt;//g ; /^$/d&#39;</span> data11.txt
This is the page title
This is the first line <span class="token keyword">in</span> the Web page.
This should provide some useful
information to use <span class="token keyword">in</span> our <span class="token function">sed</span> script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,287),d=[t];function c(r,p){return n(),e("div",null,d)}const v=s(l,[["render",c],["__file","shell3-sed.html.vue"]]),m=JSON.parse('{"path":"/linux/shell3-sed.html","title":"Shell脚本编程-高级篇之sed","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Shell脚本编程-高级篇之sed","category":["Linux"],"headerDepth":5,"date":"2022-09-12T00:00:00.000Z","star":true,"tag":["Linux","Shell"],"description":"shell脚本高级实战案例篇之Sed","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/shell3-sed.html"}],["meta",{"property":"og:title","content":"Shell脚本编程-高级篇之sed"}],["meta",{"property":"og:description","content":"shell脚本高级实战案例篇之Sed"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell脚本编程-高级篇之sed\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"sed","slug":"sed","link":"#sed","children":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[{"level":4,"title":"替换标记","slug":"替换标记","link":"#替换标记","children":[]},{"level":4,"title":"替换字符","slug":"替换字符","link":"#替换字符","children":[]},{"level":4,"title":"使用地址","slug":"使用地址","link":"#使用地址","children":[]},{"level":4,"title":"删除行 d","slug":"删除行-d","link":"#删除行-d","children":[]},{"level":4,"title":"插入和附加文本 i a","slug":"插入和附加文本-i-a","link":"#插入和附加文本-i-a","children":[]},{"level":4,"title":"修改行c","slug":"修改行c","link":"#修改行c","children":[]},{"level":4,"title":"转换命令 y","slug":"转换命令-y","link":"#转换命令-y","children":[]},{"level":4,"title":"打印 p = l","slug":"打印-p-l","link":"#打印-p-l","children":[]},{"level":4,"title":"使用sed处理文件w","slug":"使用sed处理文件w","link":"#使用sed处理文件w","children":[]}]},{"level":3,"title":"多行命令","slug":"多行命令","link":"#多行命令","children":[{"level":4,"title":"next 命令","slug":"next-命令","link":"#next-命令","children":[]},{"level":4,"title":"多行删除命令 D","slug":"多行删除命令-d","link":"#多行删除命令-d","children":[]},{"level":4,"title":"多行打印命令 P","slug":"多行打印命令-p","link":"#多行打印命令-p","children":[]}]},{"level":3,"title":"保持空间","slug":"保持空间","link":"#保持空间","children":[{"level":4,"title":"排除命令","slug":"排除命令","link":"#排除命令","children":[]}]},{"level":3,"title":"改变流","slug":"改变流","link":"#改变流","children":[{"level":4,"title":"分支b","slug":"分支b","link":"#分支b","children":[]},{"level":4,"title":"测试t","slug":"测试t","link":"#测试t","children":[]}]},{"level":3,"title":"模式替代","slug":"模式替代","link":"#模式替代","children":[{"level":4,"title":"&符号","slug":"符号","link":"#符号","children":[]},{"level":4,"title":"替代单独的单词","slug":"替代单独的单词","link":"#替代单独的单词","children":[]}]},{"level":3,"title":"在脚本中使用sed","slug":"在脚本中使用sed","link":"#在脚本中使用sed","children":[{"level":4,"title":"使用包装脚本","slug":"使用包装脚本","link":"#使用包装脚本","children":[]},{"level":4,"title":"重定向 sed 的输出","slug":"重定向-sed-的输出","link":"#重定向-sed-的输出","children":[]}]},{"level":3,"title":"创建sed实用工具","slug":"创建sed实用工具","link":"#创建sed实用工具","children":[{"level":4,"title":"加倍行间距","slug":"加倍行间距","link":"#加倍行间距","children":[]},{"level":4,"title":"对可能含有空白行的文件加倍行间距","slug":"对可能含有空白行的文件加倍行间距","link":"#对可能含有空白行的文件加倍行间距","children":[]},{"level":4,"title":"给文件中的行编号","slug":"给文件中的行编号","link":"#给文件中的行编号","children":[]},{"level":4,"title":"打印末尾行","slug":"打印末尾行","link":"#打印末尾行","children":[]},{"level":4,"title":"删除行","slug":"删除行","link":"#删除行","children":[]},{"level":4,"title":"删除HTML标签","slug":"删除html标签","link":"#删除html标签","children":[]}]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":38.91,"words":11674},"filePathRelative":"linux/shell3-sed.md","localizedDate":"2022年9月12日","excerpt":"<p>shell脚本高级实战案例篇之Sed</p>\\n","autoDesc":true}');export{v as comp,m as data};
