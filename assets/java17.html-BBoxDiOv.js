import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as r,b as n,e as a,d as s,w as p,a as o}from"./app-D1uezr0R.js";const u={},d=n("p",null,"Java 17 在 2021 年 9 月 14 日正式发布，是一个长期支持（LTS）版本。",-1),k={href:"https://www.oracle.com/cn/java/technologies/java-se-support-roadmap.html",target:"_blank",rel:"noopener noreferrer"},v=o("<p><strong>Oracle Java SE Support Roadmap*†</strong></p><table><thead><tr><th>Release</th><th>GA Date</th><th>Premier Support Until</th><th>Extended Support Until</th><th>Sustaining Support</th></tr></thead><tbody><tr><td>8 (LTS)**</td><td>March 2014</td><td>March 2022</td><td>December 2030*****</td><td>Indefinite</td></tr><tr><td>9 - 10 (non-LTS)</td><td>September 2017 - March 2018</td><td>March 2018 - September 2018</td><td>Not Available</td><td>Indefinite</td></tr><tr><td>11 (LTS)</td><td>September 2018</td><td>September 2023</td><td>January 2032</td><td>Indefinite</td></tr><tr><td>12 - 16 (non-LTS)</td><td>March 2019 - March 2021</td><td>September 2019 - September 2021</td><td>Not Available</td><td>Indefinite</td></tr><tr><td><strong>17 (LTS)</strong></td><td>September 2021</td><td>September 2026****</td><td>September 2029****</td><td>Indefinite</td></tr><tr><td>18 (non-LTS)</td><td>March 2022</td><td>September 2022</td><td>Not Available</td><td>Indefinite</td></tr><tr><td>19 (non-LTS)</td><td>September 2022</td><td>March 2023</td><td>Not Available</td><td>Indefinite</td></tr><tr><td>20 (non-LTS)</td><td>March 2023</td><td>September 2023</td><td>Not Available</td><td>Indefinite</td></tr><tr><td><strong>21 (LTS)</strong>***</td><td>September 2023</td><td>September 2028</td><td>September 2031</td><td>Indefinite</td></tr><tr><td>22 (non-LTS)***</td><td>March 2024</td><td>September 2024</td><td>Not Available</td><td>Indefinite</td></tr><tr><td>23 (non-LTS)***</td><td>September 2024</td><td>March 2025</td><td>Not Available</td><td>Indefinite</td></tr><tr><td>24 (non-LTS)***</td><td>March 2025</td><td>September 2025</td><td>Not Available</td><td>Indefinite</td></tr><tr><td><strong>25 (LTS)</strong>***</td><td>September 2025</td><td>September 2030</td><td>September 2033****</td><td>Indefinite</td></tr></tbody></table><p>Java 17 将是继 Java 8 以来最重要的长期支持（LTS）版本，是 Java 社区八年努力的成果。Spring 6.x 和 Spring Boot 3.x 最低支持的就是 Java 17。</p><p>这次更新共带来 14 个新特性：</p>",4),m={href:"https://openjdk.java.net/jeps/306",target:"_blank",rel:"noopener noreferrer"},h={href:"https://openjdk.java.net/jeps/356",target:"_blank",rel:"noopener noreferrer"},f={href:"https://openjdk.java.net/jeps/382",target:"_blank",rel:"noopener noreferrer"},j={href:"https://openjdk.java.net/jeps/391",target:"_blank",rel:"noopener noreferrer"},b={href:"https://openjdk.java.net/jeps/398",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.java.net/jeps/403",target:"_blank",rel:"noopener noreferrer"},_={href:"https://openjdk.java.net/jeps/406",target:"_blank",rel:"noopener noreferrer"},J={href:"https://openjdk.java.net/jeps/407",target:"_blank",rel:"noopener noreferrer"},S={href:"https://openjdk.java.net/jeps/409",target:"_blank",rel:"noopener noreferrer"},P={href:"https://openjdk.java.net/jeps/410",target:"_blank",rel:"noopener noreferrer"},w={href:"https://openjdk.java.net/jeps/411",target:"_blank",rel:"noopener noreferrer"},y={href:"https://openjdk.java.net/jeps/412",target:"_blank",rel:"noopener noreferrer"},I={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},A={href:"https://openjdk.java.net/jeps/415",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"这里只对 356、398、413、406、407、409、410、411、412、414 这几个我觉得比较重要的新特性进行详细介绍。",-1),T={href:"https://openjdk.java.net/projects/jdk/17/",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"jep-356-增强的伪随机数生成器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-356-增强的伪随机数生成器"},[n("span",null,"JEP 356:增强的伪随机数生成器")])],-1),x=n("p",null,[a("JDK 17 之前，我们可以借助 "),n("code",null,"Random"),a("、"),n("code",null,"ThreadLocalRandom"),a("和"),n("code",null,"SplittableRandom"),a("来生成随机数。不过，这 3 个类都各有缺陷，且缺少常见的伪随机算法支持。")],-1),R=n("p",null,"Java 17 为伪随机数生成器 （pseudorandom number generator，RPNG，又称为确定性随机位生成器）增加了新的接口类型和实现，使得开发者更容易在应用程序中互换使用各种 PRNG 算法。",-1),M={href:"https://ctf-wiki.org/crypto/streamcipher/prng/intro/",target:"_blank",rel:"noopener noreferrer"},L=o(`<p>使用示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">RandomGeneratorFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RandomGenerator</span><span class="token punctuation">&gt;</span></span> l128X256MixRandom <span class="token operator">=</span> <span class="token class-name">RandomGeneratorFactory</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;L128X256MixRandom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用时间戳作为随机数种子</span>
<span class="token class-name">RandomGenerator</span> randomGenerator <span class="token operator">=</span> l128X256MixRandom<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 生成随机数</span>
randomGenerator<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jep-398-弃用-applet-api-以进行删除" tabindex="-1"><a class="header-anchor" href="#jep-398-弃用-applet-api-以进行删除"><span>JEP 398:弃用 Applet API 以进行删除</span></a></h2><p>Applet API 用于编写在 Web 浏览器端运行的 Java 小程序，很多年前就已经被淘汰了，已经没有理由使用了。</p>`,4),N={href:"https://openjdk.java.net/jeps/289",target:"_blank",rel:"noopener noreferrer"},O=o(`<h2 id="jep-406-switch-的类型匹配-预览" tabindex="-1"><a class="header-anchor" href="#jep-406-switch-的类型匹配-预览"><span>JEP 406:switch 的类型匹配（预览）</span></a></h2><p>正如 <code>instanceof</code> 一样， <code>switch</code> 也紧跟着增加了类型匹配自动转换功能。</p><p><code>instanceof</code> 代码示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Old code</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> use s <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token comment">// New code</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> use s <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>switch</code> 代码示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Old code</span>
<span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> formatted <span class="token operator">=</span> <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;int %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Long</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;long %d&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Double</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;double %f&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;String %s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> formatted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// New code</span>
<span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">formatterPatternSwitch</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">Integer</span> i <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;int %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">Long</span> l    <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;long %d&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">Double</span> d  <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;double %f&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">String</span> s  <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;String %s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span>        <span class="token operator">-&gt;</span> o<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>null</code> 值的判断也进行了优化。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Old code</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testFooBar</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oops!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bar&quot;</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Great&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span>           <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// New code</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testFooBar</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token keyword">null</span>         <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Oops&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bar&quot;</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Great&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span>           <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jep-407-删除远程方法调用激活机制" tabindex="-1"><a class="header-anchor" href="#jep-407-删除远程方法调用激活机制"><span>JEP 407:删除远程方法调用激活机制</span></a></h2><p>删除远程方法调用 (RMI) 激活机制，同时保留 RMI 的其余部分。RMI 激活机制已过时且不再使用。</p><h2 id="jep-409-密封类-转正" tabindex="-1"><a class="header-anchor" href="#jep-409-密封类-转正"><span>JEP 409:密封类（转正）</span></a></h2>`,11),D={href:"https://openjdk.java.net/jeps/360",target:"_blank",rel:"noopener noreferrer"},G={href:"https://openjdk.java.net/jeps/397",target:"_blank",rel:"noopener noreferrer"},C=n("h2",{id:"jep-410-删除实验性的-aot-和-jit-编译器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-410-删除实验性的-aot-和-jit-编译器"},[n("span",null,"JEP 410:删除实验性的 AOT 和 JIT 编译器")])],-1),F={href:"https://openjdk.java.net/jeps/295",target:"_blank",rel:"noopener noreferrer"},V=n("p",null,"Java 17，删除实验性的提前 (AOT) 和即时 (JIT) 编译器，因为该编译器自推出以来很少使用，维护它所需的工作量很大。保留实验性的 Java 级 JVM 编译器接口 (JVMCI)，以便开发人员可以继续使用外部构建的编译器版本进行 JIT 编译。",-1),B=n("h2",{id:"jep-411-弃用安全管理器以进行删除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-411-弃用安全管理器以进行删除"},[n("span",null,"JEP 411:弃用安全管理器以进行删除")])],-1),K=n("p",null,"弃用安全管理器以便在将来的版本中删除。",-1),Z={href:"https://openjdk.java.net/jeps/398",target:"_blank",rel:"noopener noreferrer"},z=n("h2",{id:"jep-412-外部函数和内存-api-孵化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-412-外部函数和内存-api-孵化"},[n("span",null,"JEP 412:外部函数和内存 API（孵化）")])],-1),U=n("p",null,"Java 程序可以通过该 API 与 Java 运行时之外的代码和数据进行互操作。通过高效地调用外部函数（即 JVM 之外的代码）和安全地访问外部内存（即不受 JVM 管理的内存），该 API 使 Java 程序能够调用本机库并处理本机数据，而不会像 JNI 那样危险和脆弱。",-1),X={href:"https://openjdk.java.net/jeps/412",target:"_blank",rel:"noopener noreferrer"},H={href:"https://openjdk.org/jeps/419",target:"_blank",rel:"noopener noreferrer"},W={href:"https://openjdk.org/jeps/424",target:"_blank",rel:"noopener noreferrer"},Q=n("h2",{id:"jep-414-向量-api-第二次孵化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-414-向量-api-第二次孵化"},[n("span",null,"JEP 414:向量 API（第二次孵化）")])],-1),Y={href:"https://openjdk.java.net/jeps/338",target:"_blank",rel:"noopener noreferrer"},$={href:"http://openjdk.java.net/jeps/11",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://openjdk.java.net/jeps/414",target:"_blank",rel:"noopener noreferrer"},an={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://openjdk.java.net/jeps/426",target:"_blank",rel:"noopener noreferrer"},tn=n("p",null,"该孵化器 API 提供了一个 API 的初始迭代以表达一些向量计算，这些计算在运行时可靠地编译为支持的 CPU 架构上的最佳向量硬件指令，从而获得优于同等标量计算的性能，充分利用单指令多数据（SIMD）技术（大多数现代 CPU 上都可以使用的一种指令）。尽管 HotSpot 支持自动向量化，但是可转换的标量操作集有限且易受代码更改的影响。该 API 将使开发人员能够轻松地用 Java 编写可移植的高性能向量算法。",-1);function en(pn,on){const t=c("ExternalLinkIcon"),e=c("RouteLink");return i(),r("div",null,[d,n("p",null,[a("Oracle 官方给出的 Oracle JDK 支持的时间线 "),n("a",k,[a("https://www.oracle.com/cn/java/technologies/java-se-support-roadmap.html"),s(t)]),a("。可以看得到，Java 17 最多可以支持到 2029 年 9 月份。")]),v,n("ul",null,[n("li",null,[n("a",m,[a("JEP 306:Restore Always-Strict Floating-Point Semantics（恢复始终严格的浮点语义）"),s(t)])]),n("li",null,[n("a",h,[a("JEP 356:Enhanced Pseudo-Random Number Generators（增强的伪随机数生成器）"),s(t)])]),n("li",null,[n("a",f,[a("JEP 382:New macOS Rendering Pipeline（新的 macOS 渲染管道）"),s(t)])]),n("li",null,[n("a",j,[a("JEP 391:macOS/AArch64 Port（支持 macOS AArch64）"),s(t)])]),n("li",null,[n("a",b,[a("JEP 398:Deprecate the Applet API for Removal（删除已弃用的 Applet API）"),s(t)])]),n("li",null,[n("a",g,[a("JEP 403:Strongly Encapsulate JDK Internals（更强大的封装 JDK 内部元素）"),s(t)])]),n("li",null,[n("a",_,[a("JEP 406:Pattern Matching for switch (switch 的类型匹配)"),s(t)]),a("（预览）")]),n("li",null,[n("a",J,[a("JEP 407:Remove RMI Activation（删除远程方法调用激活机制）"),s(t)])]),n("li",null,[n("a",S,[a("JEP 409:Sealed Classes（密封类）"),s(t)]),a("（转正）")]),n("li",null,[n("a",P,[a("JEP 410:Remove the Experimental AOT and JIT Compiler（删除实验性的 AOT 和 JIT 编译器）"),s(t)])]),n("li",null,[n("a",w,[a("JEP 411:Deprecate the Security Manager for Removal（弃用安全管理器以进行删除）"),s(t)])]),n("li",null,[n("a",y,[a("JEP 412:Foreign Function & Memory API (外部函数和内存 API)"),s(t)]),a("（孵化）")]),n("li",null,[n("a",I,[a("JEP 414:Vector（向量） API"),s(t)]),a("（第二次孵化）")]),n("li",null,[n("a",A,[a("JEP 415:Context-Specific Deserialization Filters"),s(t)])])]),E,n("p",null,[a("相关阅读："),n("a",T,[a("OpenJDK Java 17 文档"),s(t)]),a(" 。")]),q,x,R,n("blockquote",null,[n("p",null,[n("a",M,[a("RPNG"),s(t)]),a(" 用来生成接近于绝对随机数序列的数字序列。一般来说，PRNG 会依赖于一个初始值，也称为种子，来生成对应的伪随机数序列。只要种子确定了，PRNG 所生成的随机数就是完全确定的，因此其生成的随机数序列并不是真正随机的。")])]),L,n("p",null,[a("Applet API 在 Java 9 时被标记弃用（"),n("a",N,[a("JEP 289"),s(t)]),a("），但不是为了删除。")]),O,n("p",null,[a("密封类由 "),n("a",D,[a("JEP 360"),s(t)]),a(" 提出预览，集成到了 Java 15 中。在 JDK 16 中， 密封类得到了改进（更加严格的引用检查和密封类的继承关系），由 "),n("a",G,[a("JEP 397"),s(t)]),a(" 提出了再次预览。")]),n("p",null,[a("在 "),s(e,{to:"/java/new-features/java14-15.html"},{default:p(()=>[a("Java 15 新特性概览")]),_:1}),a(" 中，我有详细介绍到密封类，这里就不再做额外的介绍了。")]),C,n("p",null,[a("在 Java 9 的 "),n("a",F,[a("JEP 295"),s(t)]),a(" ,引入了实验性的提前 (AOT) 编译器，在启动虚拟机之前将 Java 类编译为本机代码。")]),V,B,K,n("p",null,[a("安全管理器可追溯到 Java 1.0，多年来，它一直不是保护客户端 Java 代码的主要方法，也很少用于保护服务器端代码。为了推动 Java 向前发展，Java 17 弃用安全管理器，以便与旧版 Applet API ( "),n("a",Z,[a("JEP 398"),s(t)]),a(" ) 一起移除。")]),z,U,n("p",null,[a("外部函数和内存 API 在 Java 17 中进行了第一轮孵化，由 "),n("a",X,[a("JEP 412"),s(t)]),a(" 提出。第二轮孵化由"),n("a",H,[a("JEP 419"),s(t)]),a(" 提出并集成到了 Java 18 中，预览由 "),n("a",W,[a("JEP 424"),s(t)]),a(" 提出并集成到了 Java 19 中。")]),n("p",null,[a("在 "),s(e,{to:"/java/new-features/java19.html"},{default:p(()=>[a("Java 19 新特性概览")]),_:1}),a(" 中，我有详细介绍到外部函数和内存 API，这里就不再做额外的介绍了。")]),Q,n("p",null,[a("向量（Vector） API 最初由 "),n("a",Y,[a("JEP 338"),s(t)]),a(" 提出，并作为"),n("a",$,[a("孵化 API"),s(t)]),a("集成到 Java 16 中。第二轮孵化由 "),n("a",nn,[a("JEP 414"),s(t)]),a(" 提出并集成到 Java 17 中，第三轮孵化由 "),n("a",an,[a("JEP 417"),s(t)]),a(" 提出并集成到 Java 18 中，第四轮由 "),n("a",sn,[a("JEP 426"),s(t)]),a(" 提出并集成到了 Java 19 中。")]),tn,n("p",null,[a("在 "),s(e,{to:"/java/new-features/java18.html"},{default:p(()=>[a("Java 18 新特性概览")]),_:1}),a(" 中，我有详细介绍到向量 API，这里就不再做额外的介绍了。")])])}const rn=l(u,[["render",en],["__file","java17.html.vue"]]),un=JSON.parse('{"path":"/java/new-features/java17.html","title":"Java 17 新特性概览（重要）","lang":"zh-CN","frontmatter":{"icon":"java","title":"Java 17 新特性概览（重要）","category":"Java","headerDepth":5,"date":"2021-11-20T00:00:00.000Z","order":9,"tag":["Java新特性"],"description":"Java 17 在 2021 年 9 月 14 日正式发布，是一个长期支持（LTS）版本。","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/java/new-features/java17.html"}],["meta",{"property":"og:title","content":"Java 17 新特性概览（重要）"}],["meta",{"property":"og:description","content":"Java 17 在 2021 年 9 月 14 日正式发布，是一个长期支持（LTS）版本。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T12:36:06.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:published_time","content":"2021-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T12:36:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 17 新特性概览（重要）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-07T12:36:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"JEP 356:增强的伪随机数生成器","slug":"jep-356-增强的伪随机数生成器","link":"#jep-356-增强的伪随机数生成器","children":[]},{"level":2,"title":"JEP 398:弃用 Applet API 以进行删除","slug":"jep-398-弃用-applet-api-以进行删除","link":"#jep-398-弃用-applet-api-以进行删除","children":[]},{"level":2,"title":"JEP 406:switch 的类型匹配（预览）","slug":"jep-406-switch-的类型匹配-预览","link":"#jep-406-switch-的类型匹配-预览","children":[]},{"level":2,"title":"JEP 407:删除远程方法调用激活机制","slug":"jep-407-删除远程方法调用激活机制","link":"#jep-407-删除远程方法调用激活机制","children":[]},{"level":2,"title":"JEP 409:密封类（转正）","slug":"jep-409-密封类-转正","link":"#jep-409-密封类-转正","children":[]},{"level":2,"title":"JEP 410:删除实验性的 AOT 和 JIT 编译器","slug":"jep-410-删除实验性的-aot-和-jit-编译器","link":"#jep-410-删除实验性的-aot-和-jit-编译器","children":[]},{"level":2,"title":"JEP 411:弃用安全管理器以进行删除","slug":"jep-411-弃用安全管理器以进行删除","link":"#jep-411-弃用安全管理器以进行删除","children":[]},{"level":2,"title":"JEP 412:外部函数和内存 API（孵化）","slug":"jep-412-外部函数和内存-api-孵化","link":"#jep-412-外部函数和内存-api-孵化","children":[]},{"level":2,"title":"JEP 414:向量 API（第二次孵化）","slug":"jep-414-向量-api-第二次孵化","link":"#jep-414-向量-api-第二次孵化","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1707309366000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":6.73,"words":2018},"filePathRelative":"java/new-features/java17.md","localizedDate":"2021年11月20日","excerpt":"<p>Java 17 在 2021 年 9 月 14 日正式发布，是一个长期支持（LTS）版本。</p>\\n","autoDesc":true}');export{rn as comp,un as data};