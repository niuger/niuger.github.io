import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c,b as n,e as s,d as e,a as t}from"./app-D1uezr0R.js";const o="/assets/true-aa-DHCq839F.png",u="/assets/true-image-20220414220511243-DvheQc6c.png",r={},d=n("p",null,"React基础",-1),k=n("h2",{id:"一、基础语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、基础语法"},[n("span",null,"一、基础语法")])],-1),v={href:"https://zh-hans.reactjs.org/",target:"_blank",rel:"noopener noreferrer"},m=n("h3",{id:"_1、react-常用ui组件库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、react-常用ui组件库"},[n("span",null,"1、React 常用UI组件库")])],-1),b={href:"https://material-ui.com/%EF%BC%88%E9%9D%A2%E5%90%91web",target:"_blank",rel:"noopener noreferrer"},h={href:"https://ant.design/%EF%BC%88%E9%9D%A2%E5%90%91web",target:"_blank",rel:"noopener noreferrer"},g={href:"https://semantic-ui.com/",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>React Desktop：（面向MacOS Sierra和Windows10桌面风格的ReactUI组件库）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import.meta.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、通过-props-传递数据" tabindex="-1"><a class="header-anchor" href="#_2、通过-props-传递数据"><span>2、通过 Props 传递数据</span></a></h3><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Board</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">renderSquare</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Square</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token plain-text">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Square extends React.Component {
 render() {
   return (
     &lt;button className=&quot;square&quot; onClick={() =&gt; console.log(&#39;click&#39;)}&gt;       {this.props.value}
     &lt;/button&gt;
   );
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、使用-setae-保存数据" tabindex="-1"><a class="header-anchor" href="#_3、使用-setae-保存数据"><span>3、使用 setae 保存数据</span></a></h3><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span>        
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token plain-text">      
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、类组件" tabindex="-1"><a class="header-anchor" href="#_4、类组件"><span>4、类组件</span></a></h3><p>-constructor是可选的，我们通常在constructor中初始化一些数据；</p><ul><li>this.state中维护的就是我们组件内部的数据；</li><li>render() 方法是 class 组件中唯一必须实现的方法；</li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/**/</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token operator">=</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*是 class 组件中唯一必须实现的方法*/</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello footer.tsx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、函数组件" tabindex="-1"><a class="header-anchor" href="#_5、函数组件"><span>5、函数组件</span></a></h3><p><strong>函数组件必须首字母大写</strong></p><p>函数组件的特点：</p><ul><li>没有生命周期，也会被更新并挂载，但是没有生命周期函数；</li><li>没有this(组件实例）；</li><li>没有内部状态（state）；</li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、生命周期" tabindex="-1"><a class="header-anchor" href="#_6、生命周期"><span>6、生命周期</span></a></h3><p>生命周期和生命周期函数的关系：</p><blockquote></blockquote><ul><li></li><li></li><li></li></ul><h3 id="_7、数据替换" tabindex="-1"><a class="header-anchor" href="#_7、数据替换"><span>7、数据替换</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var player = {score: 1, name: &#39;Jeff&#39;};
player.score = 2;
// player 修改后的值为 {score: 2, name: &#39;Jeff&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var player = {score: 1, name: &#39;Jeff&#39;};

var newPlayer = Object.assign({}, player, {score: 2});
// player 的值没有改变, 但是 newPlayer 的值是 {score: 2, name: &#39;Jeff&#39;}

// 使用对象展开语法，就可以写成：
// var newPlayer = {...player, score: 2};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、tsx-结构" tabindex="-1"><a class="header-anchor" href="#_8、tsx-结构"><span>8、tsx 结构</span></a></h3><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 自定义函数</span>
<span class="token keyword">function</span> <span class="token function">updata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token punctuation">{</span>score<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    player<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">// {score: 2, name: &#39;Jeff&#39;}</span>
    <span class="token comment">// 使用对象展开语法，就可以写成：</span>
    <span class="token keyword">const</span> newPlayer2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>player<span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//函数组件</span>
<span class="token keyword">class</span> <span class="token class-name">index</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;嘎嘎嘎嘎&quot;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">120</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//类组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">footer</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/**/</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            counter<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            history<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>squares<span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            squares<span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
<span class="token comment">//自定义函数</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span>i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> squares <span class="token operator">=</span> <span class="token number">000</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">/*是 class 组件中唯一必须实现的方法*/</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token string">&#39;Josh Perez&#39;</span><span class="token punctuation">;</span><span class="token comment">//嵌入表达式 </span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token punctuation">{</span>name2<span class="token punctuation">}</span><span class="token plain-text">自己内容 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
<span class="token comment">//内置函数</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
 <span class="token comment">/**
     * 在组件挂载后（插入 DOM 树中）立即调用
     */</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 捕获组件：异常
     * @param error
     * @param errorInfo
     */</span>
    <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> errorInfo<span class="token operator">:</span> React<span class="token punctuation">.</span>ErrorInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 在更新后会被立即调用，首次渲染不会执行此方法。
     * @param prevProps
     * @param prevState
     * @param snapshot
     */</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> prevState<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> snapshot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token comment">/**
     * 在组件卸载及销毁之前直接调用
     */</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、项目结构" tabindex="-1"><a class="header-anchor" href="#_9、项目结构"><span>9、项目结构</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
├── mock/                         ## 模拟数据服务
│   ├── db.js                     ## 模拟数据DB
│   └── routes.json               ## 模拟数据API路由配置
│   └── ...
├── public/                       ## 静态资源文件（包括css, images, fonts, index.html等）
│   └── ...
├── src/
│   ├── components/               ## 公用React组件
│   │   └── ...
│   ├── models/                   ## Dva数据Store层
│   │   └── ...
│   ├── pages/                    ## 页面模块
│   │   └── ...
│   ├── routes/                   ## App页面路由配置
│   │   └── ...
│   ├── services/                 ## API请求服务
│   │   └── ...
│   ├── style/                    ## 通用CSS样式
│   │   └── ...
│   ├── utils/                    ## 通用工具模块
│   │   └── ...
│   ├── App.css                   ## App 页面CSS样式
│   ├── App.tsx                   ## App 全局页面
│   ├── App.test.tsx              ## App 页面Jest测试用例
│   ├── ent.ts                    ## App 环境变量配置
│   ├── index.css                 ## 全局CSS样式
│   ├── index.tsx                 ## React入口文件
│   ├── logo.svg                  ## App logo
│   ├── Page.tsx                  ## 全局页面路由
│   │
├── build/                        ## 生成环境静态资源文件
├── .gitignore                    ## Git ignore 配置（禁止随意篡改配置!!!）
├── .editorconfig                 ## 编辑器配置（禁止随意篡改配置!!!）
├── config-overrides.js           ## Webpack 默认配置覆盖操作
├── tsconfig.json                 ## Typescript规则配置（禁止随意篡改规则）
├── tslint.json                   ## tslint规则配置（禁止随意篡改规则）
└── package.json                  ## 构建脚本和依赖配置（禁止随意篡改配置）
└── yarn.lock                     ## Yarn文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、嵌入组件" tabindex="-1"><a class="header-anchor" href="#_10、嵌入组件"><span>10、嵌入组件</span></a></h3><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">&#39;@/pages/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Index</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Index</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//函数组件必须首字母大写</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Index 66</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、12、13、14、15、16、17、" tabindex="-1"><a class="header-anchor" href="#_11、12、13、14、15、16、17、"><span>11、12、13、14、15、16、17、</span></a></h3><h2 id="二、创建项目-react-vite-ts-ant-design4" tabindex="-1"><a class="header-anchor" href="#二、创建项目-react-vite-ts-ant-design4"><span>二、创建项目 react+vite+ts+Ant Design4</span></a></h2>`,33),_={href:"https://ant.design/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gitee.com/MFork/vite-material-ui",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="_1、使用命令创建项目" tabindex="-1"><a class="header-anchor" href="#_1、使用命令创建项目"><span>1、使用命令创建项目</span></a></h3><p>vite</p><blockquote><p>mkdir javacode-react</p><p>cd javacode-react</p><p>npm init @vitejs/app</p><p>npm install</p></blockquote><p>ant-design-pro</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> my-app
$ <span class="token builtin class-name">cd</span> my-app
$ <span class="token function">yarn</span> create umi  <span class="token comment">## or npm create umi</span>

 Select the boilerplate <span class="token builtin class-name">type</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span> 选择 Ant Design Pro
❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
 Which language <span class="token keyword">do</span> you want to use? 选择你使用的语言
❯ TypeScript
  JavaScript
 Do you need all the blocks or a simple scaffold? 你需要所有的积木还是一个简单的脚手架？
<span class="token operator">&gt;</span> simple 简单的
  complete 完全的

$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token function">npm</span> start         <span class="token comment">## visit http://localhost:8000</span>

 <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;javacode-react&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.1&quot;</span>,
  <span class="token string">&quot;private&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;基于ant-design-pro创建的react项目&quot;</span>,

<span class="token string">&quot;npm-i&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm install &amp;&amp; node ./node_modules/esbuild-loader/node_modules/esbuild/install.js&quot;</span>,
    <span class="token string">&quot;npm-i-esbuild-exe&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
    <span class="token string">&quot;serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;umi-serve&quot;</span>,
    <span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env UMI_ENV=dev umi dev &amp; rm /src/.umi /s&quot;</span>,
    <span class="token string">&quot;start:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev&quot;</span>,
        <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;umi build&quot;</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ant-design</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> app
<span class="token builtin class-name">cd</span> app
<span class="token function">npm</span> create @umijs/umi-app

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板</span></a></h4>`,8),w={href:"https://gitee.com/MFork/ant-design-pro",target:"_blank",rel:"noopener noreferrer"},q={href:"https://v4-pro.ant.design/docs/layout-cn",target:"_blank",rel:"noopener noreferrer"},R=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├── config                   ## umi 配置，包含路由，构建等配置
├── mock                     ## 本地模拟数据
├── public
│   └── favicon.png          ## Favicon
├── src
│   ├── assets               ## 本地静态资源
│   ├── components           ## 业务通用组件
│   ├── e2e                  ## 集成测试用例
│   ├── layouts              ## 通用布局
│   ├── models               ## 全局 dva model
│   ├── pages                ## 业务页面入口和常用模板
│   ├── services             ## 后台接口服务
│   ├── utils                ## 工具库
│   ├── locales              ## 国际化资源
│   ├── global.less          ## 全局样式
│   └── global.ts            ## 全局 JS
├── tests                    ## 测试工具
├── README.md
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="error-spawn-e-code-javacode-myre-node-modules-esbuild-loader-node-modules-esbuild-esbuild-exe-enoent" tabindex="-1"><a class="header-anchor" href="#error-spawn-e-code-javacode-myre-node-modules-esbuild-loader-node-modules-esbuild-esbuild-exe-enoent"><span>Error: spawn E:\\code\\javacode\\myre\\node_modules\\esbuild-loader\\node_modules\\esbuild\\esbuild.exe ENOENT</span></a></h4><blockquote><p>解决：cd E:\\code\\javacode\\myre\\node_modules\\esbuild-loader\\node_modules\\esbuild</p><p>运行：node .\\install.js npm install -g</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;npm-i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm install&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;npm-i-esbuild-exe&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/esbuild-loader/node_modules/esbuild/install.js&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、内置组件" tabindex="-1"><a class="header-anchor" href="#_2、内置组件"><span>2、内置组件</span></a></h3><h4 id="react-fc-函数式组件" tabindex="-1"><a class="header-anchor" href="#react-fc-函数式组件"><span>React.FC（函数式组件）</span></a></h4><p>使用 React.FC 来写 React 组件的时候，是不能用 setState 的，取而代之的是 useState()、useEffect()</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="react-vfc-无函数式组件" tabindex="-1"><a class="header-anchor" href="#react-vfc-无函数式组件"><span>React.VFC（无函数式组件）</span></a></h4><h4 id="react-component" tabindex="-1"><a class="header-anchor" href="#react-component"><span>React.Component（）</span></a></h4><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">index</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>createModalVisible<span class="token punctuation">,</span> handleModalVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;嘎嘎嘎嘎&quot;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">120</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
                <span class="token attr-name">onClickCapture</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;name:&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; age:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="react-fc" tabindex="-1"><a class="header-anchor" href="#react-fc"><span>React.FC（）</span></a></h4><h3 id="_3、路由" tabindex="-1"><a class="header-anchor" href="#_3、路由"><span>3、路由</span></a></h3><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4、" tabindex="-1"><a class="header-anchor" href="#_4、"><span>4、</span></a></h3><h3 id="_5、6、7、8、" tabindex="-1"><a class="header-anchor" href="#_5、6、7、8、"><span>5、6、7、8、</span></a></h3><h2 id="三、react-vite-ts-material-ui" tabindex="-1"><a class="header-anchor" href="#三、react-vite-ts-material-ui"><span>三、react + vite + ts + Material-UI</span></a></h2>',17),C={href:"https://mui.com/zh/",target:"_blank",rel:"noopener noreferrer"},j=n("p",null,"模板市场",-1),E={href:"https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=in-house-themes",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mui.com/store/previews/berry-react-material-admin-free/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://berrydashboard.io/free/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://gitee.com/kong19/react-admin-template",target:"_blank",rel:"noopener noreferrer"},I=t('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>02：</p><h3 id="_1、" tabindex="-1"><a class="header-anchor" href="#_1、"><span>1、</span></a></h3><h3 id="_2、" tabindex="-1"><a class="header-anchor" href="#_2、"><span>2、</span></a></h3><h3 id="_3、" tabindex="-1"><a class="header-anchor" href="#_3、"><span>3、</span></a></h3><h3 id="_4、-1" tabindex="-1"><a class="header-anchor" href="#_4、-1"><span>4、</span></a></h3><h3 id="_5、6、7、8、-1" tabindex="-1"><a class="header-anchor" href="#_5、6、7、8、-1"><span>5、6、7、8、</span></a></h3><h2 id="四、五、六、七、八、九" tabindex="-1"><a class="header-anchor" href="#四、五、六、七、八、九"><span>四、五、六、七、八、九</span></a></h2>',8);function P(M,N){const a=l("ExternalLinkIcon");return i(),c("div",null,[d,k,n("p",null,[n("a",v,[s("https://zh-hans.reactjs.org/"),e(a)])]),m,n("p",null,[s("Material-UI："),n("a",b,[s("https://material-ui.com/（面向web"),e(a)]),s("端）")]),n("p",null,[s("蚂蚁设计Ant Design："),n("a",h,[s("https://ant.design/（面向web"),e(a)]),s("端）")]),n("p",null,[s("SemanticUI："),n("a",g,[s("https://semantic-ui.com/"),e(a)])]),x,n("p",null,[s("Ant Design4："),n("a",_,[s("https://ant.design/"),e(a)])]),n("p",null,[n("a",f,[s("https://gitee.com/MFork/vite-material-ui"),e(a)])]),y,n("p",null,[n("a",w,[s("https://gitee.com/MFork/ant-design-pro"),e(a)])]),n("p",null,[n("a",q,[s("https://v4-pro.ant.design/docs/layout-cn"),e(a)])]),R,n("p",null,[n("a",C,[s("https://mui.com/zh/"),e(a)])]),j,n("p",null,[n("a",E,[s("https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=in-house-themes"),e(a)])]),n("p",null,[s("01："),n("a",S,[s("https://mui.com/store/previews/berry-react-material-admin-free/"),e(a)])]),n("p",null,[n("a",A,[s("https://berrydashboard.io/free/"),e(a)]),s("#")]),n("p",null,[n("a",D,[s("https://gitee.com/kong19/react-admin-template"),e(a)])]),I])}const U=p(r,[["render",P],["__file","web-react.html.vue"]]),B=JSON.parse('{"path":"/web/web-react.html","title":"React","lang":"zh-CN","frontmatter":{"icon":"react","title":"React","category":["web"],"headerDepth":5,"date":"2020-01-01T00:00:00.000Z","tag":["React"],"description":"React基础","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/web/web-react.html"}],["meta",{"property":"og:title","content":"React"}],["meta",{"property":"og:description","content":"React基础"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"一、基础语法","slug":"一、基础语法","link":"#一、基础语法","children":[{"level":3,"title":"1、React 常用UI组件库","slug":"_1、react-常用ui组件库","link":"#_1、react-常用ui组件库","children":[]},{"level":3,"title":"2、通过 Props 传递数据","slug":"_2、通过-props-传递数据","link":"#_2、通过-props-传递数据","children":[]},{"level":3,"title":"3、使用 setae 保存数据","slug":"_3、使用-setae-保存数据","link":"#_3、使用-setae-保存数据","children":[]},{"level":3,"title":"4、类组件","slug":"_4、类组件","link":"#_4、类组件","children":[]},{"level":3,"title":"5、函数组件","slug":"_5、函数组件","link":"#_5、函数组件","children":[]},{"level":3,"title":"6、生命周期","slug":"_6、生命周期","link":"#_6、生命周期","children":[]},{"level":3,"title":"7、数据替换","slug":"_7、数据替换","link":"#_7、数据替换","children":[]},{"level":3,"title":"8、tsx 结构","slug":"_8、tsx-结构","link":"#_8、tsx-结构","children":[]},{"level":3,"title":"9、项目结构","slug":"_9、项目结构","link":"#_9、项目结构","children":[]},{"level":3,"title":"10、嵌入组件","slug":"_10、嵌入组件","link":"#_10、嵌入组件","children":[]},{"level":3,"title":"11、12、13、14、15、16、17、","slug":"_11、12、13、14、15、16、17、","link":"#_11、12、13、14、15、16、17、","children":[]}]},{"level":2,"title":"二、创建项目 react+vite+ts+Ant Design4","slug":"二、创建项目-react-vite-ts-ant-design4","link":"#二、创建项目-react-vite-ts-ant-design4","children":[{"level":3,"title":"1、使用命令创建项目","slug":"_1、使用命令创建项目","link":"#_1、使用命令创建项目","children":[{"level":4,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":4,"title":"Error: spawn E:\\\\code\\\\javacode\\\\myre\\\\node_modules\\\\esbuild-loader\\\\node_modules\\\\esbuild\\\\esbuild.exe ENOENT","slug":"error-spawn-e-code-javacode-myre-node-modules-esbuild-loader-node-modules-esbuild-esbuild-exe-enoent","link":"#error-spawn-e-code-javacode-myre-node-modules-esbuild-loader-node-modules-esbuild-esbuild-exe-enoent","children":[]}]},{"level":3,"title":"2、内置组件","slug":"_2、内置组件","link":"#_2、内置组件","children":[{"level":4,"title":"React.FC（函数式组件）","slug":"react-fc-函数式组件","link":"#react-fc-函数式组件","children":[]},{"level":4,"title":"React.VFC（无函数式组件）","slug":"react-vfc-无函数式组件","link":"#react-vfc-无函数式组件","children":[]},{"level":4,"title":"React.Component（）","slug":"react-component","link":"#react-component","children":[]},{"level":4,"title":"React.FC（）","slug":"react-fc","link":"#react-fc","children":[]}]},{"level":3,"title":"3、路由","slug":"_3、路由","link":"#_3、路由","children":[]},{"level":3,"title":"4、","slug":"_4、","link":"#_4、","children":[]},{"level":3,"title":"5、6、7、8、","slug":"_5、6、7、8、","link":"#_5、6、7、8、","children":[]}]},{"level":2,"title":"三、react + vite + ts + Material-UI","slug":"三、react-vite-ts-material-ui","link":"#三、react-vite-ts-material-ui","children":[{"level":3,"title":"1、","slug":"_1、","link":"#_1、","children":[]},{"level":3,"title":"2、","slug":"_2、","link":"#_2、","children":[]},{"level":3,"title":"3、","slug":"_3、","link":"#_3、","children":[]},{"level":3,"title":"4、","slug":"_4、-1","link":"#_4、-1","children":[]},{"level":3,"title":"5、6、7、8、","slug":"_5、6、7、8、-1","link":"#_5、6、7、8、-1","children":[]}]},{"level":2,"title":"四、五、六、七、八、九","slug":"四、五、六、七、八、九","link":"#四、五、六、七、八、九","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":5.02,"words":1506},"filePathRelative":"web/web-react.md","localizedDate":"2020年1月1日","excerpt":"<p>React基础</p>\\n","autoDesc":true}');export{U as comp,B as data};
