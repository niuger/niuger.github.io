import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as n}from"./app-D1uezr0R.js";const t={},i=n(`<p>在 Linux 操作系统中，挂起和恢复进程是一种非常常见的行为。挂起进程的目的是使该进程的执行暂停，而恢复进程的目的是使该进程从先前的挂起状态回到正在运行的状态。本文将介绍如何使用 Linux 中的一些常用工具来挂起和恢复进程。</p><h2 id="挂起进程-susp" tabindex="-1"><a class="header-anchor" href="#挂起进程-susp"><span>挂起进程 SUSP</span></a></h2><p>在 Linux 中，我们可以使用 <code>kill</code> 命令来挂起进程。默认情况下，<code>kill</code> 命令的作用是向一个进程发送 <em>TERM</em> 信号，这个信号通知进程退出。但是，我们也可以向进程发送其他信号，包括 <em>SUSP</em> 信号，这个信号的作用是挂起进程。</p><p>要向一个进程发送 <em>SUSP</em> 信号，首先需要找到该进程的 <em>PID</em>（进程 ID）。可以使用 <code>ps</code> 命令查看当前正在运行的进程列表，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> some_process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令将找到进程名为 <code>some_process</code> 的进程，找到该进程的 <em>PID</em> 后，就可以使用 <code>kill</code> 命令向该进程发送 <em>SUSP</em> 信号了，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-s</span> SUSP <span class="token punctuation">[</span>PID<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="恢复进程-cont" tabindex="-1"><a class="header-anchor" href="#恢复进程-cont"><span>恢复进程 CONT</span></a></h2><p>在 Linux 中，我们可以使用 <code>kill</code> 命令来恢复进程。恢复进程需要向该进程发送 <em>CONT</em> 信号，这个信号的作用是让进程回到先前的状态，继续执行。</p><p>要向一个进程发送 <em>CONT</em> 信号，需要先找到该进程的 <em>PID</em>，然后使用 <code>kill</code> 命令向该进程发送 <em>CONT</em> 信号，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-s</span> CONT <span class="token punctuation">[</span>PID<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pkill-命令" tabindex="-1"><a class="header-anchor" href="#pkill-命令"><span>pkill 命令</span></a></h2><p>除了使用 <code>kill</code> 命令以外，我们也可以使用 <code>pkill</code> 命令来挂起和恢复进程。<code>pkill</code> 命令的作用是根据进程名或其他条件查找并杀死进程。</p><p>要使用 <code>pkill</code> 命令来挂起进程，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pkill</span> <span class="token parameter variable">-STOP</span> some_process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于上述命令，<em>-STOP</em> 参数是指向进程发送 <em>STOP</em> 信号，该信号的作用是挂起进程。</p><p>要使用 <code>pkill</code> 命令来恢复进程，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pkill</span> <span class="token parameter variable">-CONT</span> some_process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于上述命令，<em>-CONT</em> 参数是指向进程发送 <em>CONT</em> 信号，该信号的作用是让进程恢复执行。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>在 Linux 中，可以使用 <code>kill</code> 命令或者 <code>pkill</code> 命令来挂起和恢复进程。通过向进程发送 <em>SUSP</em> 信号和 <em>CONT</em> 信号，我们可以实现进程的暂停和恢复，这在某些情况下特别有用。需要注意的是，挂起进程并不会让该进程的资源得到释放，因此不应该滥用该功能，以免导致系统资源的浪费。</p>`,21),l=[i];function o(c,p){return a(),s("div",null,l)}const m=e(t,[["render",o],["__file","process.html.vue"]]),u=JSON.parse('{"path":"/linux/process.html","title":"Linu中挂起和恢复进程","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Linu中挂起和恢复进程","category":["Linux"],"headerDepth":5,"date":"2023-06-03T00:00:00.000Z","tag":["Linux","process"],"description":"在 Linux 操作系统中，挂起和恢复进程是一种非常常见的行为。挂起进程的目的是使该进程的执行暂停，而恢复进程的目的是使该进程从先前的挂起状态回到正在运行的状态。本文将介绍如何使用 Linux 中的一些常用工具来挂起和恢复进程。","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/process.html"}],["meta",{"property":"og:title","content":"Linu中挂起和恢复进程"}],["meta",{"property":"og:description","content":"在 Linux 操作系统中，挂起和恢复进程是一种非常常见的行为。挂起进程的目的是使该进程的执行暂停，而恢复进程的目的是使该进程从先前的挂起状态回到正在运行的状态。本文将介绍如何使用 Linux 中的一些常用工具来挂起和恢复进程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"process"}],["meta",{"property":"article:published_time","content":"2023-06-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linu中挂起和恢复进程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"挂起进程 SUSP","slug":"挂起进程-susp","link":"#挂起进程-susp","children":[]},{"level":2,"title":"恢复进程 CONT","slug":"恢复进程-cont","link":"#恢复进程-cont","children":[]},{"level":2,"title":"pkill 命令","slug":"pkill-命令","link":"#pkill-命令","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":2.28,"words":683},"filePathRelative":"linux/process.md","localizedDate":"2023年6月3日","excerpt":"<p>在 Linux 操作系统中，挂起和恢复进程是一种非常常见的行为。挂起进程的目的是使该进程的执行暂停，而恢复进程的目的是使该进程从先前的挂起状态回到正在运行的状态。本文将介绍如何使用 Linux 中的一些常用工具来挂起和恢复进程。</p>\\n","autoDesc":true}');export{m as comp,u as data};