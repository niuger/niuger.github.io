import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,b as n,e as a,d as l,a as s}from"./app-D1uezr0R.js";const i="/assets/true-image-20210602143120066-CI4wIyPo.png",u={},d=s(`<p>JSR303校验</p><h1 id="jsr303校验" tabindex="-1"><a class="header-anchor" href="#jsr303校验"><span>JSR303校验</span></a></h1><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>* 3、JSR303
*   1）、给Bean添加校验注解:javax.validation.constraints，并定义自己的message提示
*   2)、开启校验功能@Valid
*      效果：校验错误以后会有默认的响应；
*   3）、给校验的bean后紧跟一个BindingResult，就可以获取到校验的结果
    
*   4）、分组校验（多场景的复杂校验）
*         1)、  @NotBlank(message = &quot;品牌名必须提交&quot;,groups = {AddGroup.class,UpdateGroup.class})
*          给校验注解标注什么情况需要进行校验
*         2）、@Validated({AddGroup.class})
*         3)、默认没有指定分组的校验注解@NotBlank，在分组校验情况@Validated({AddGroup.class})下不生效，只会在@Validated生效；

*   5）、自定义校验
*      1）、编写一个自定义的校验注解
*      2）、编写一个自定义的校验器 ConstraintValidator
*      3）、关联自定义的校验器和自定义的校验注解
*      @Documented
* @Constraint(validatedBy = { ListValueConstraintValidator.class【可以指定多个不同的校验器，适配不同类型的校验】 })
* @Target({ METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER, TYPE_USE })
* @Retention(RUNTIME)
* public @interface ListValue {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-分组校验" tabindex="-1"><a class="header-anchor" href="#_1-分组校验"><span>1 分组校验</span></a></h2><h3 id="_1-1-创建组接口" tabindex="-1"><a class="header-anchor" href="#_1-1-创建组接口"><span>1.1 创建组接口</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kong<span class="token punctuation">.</span>yumall<span class="token punctuation">.</span>common<span class="token punctuation">.</span>valid</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AddGroup</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UpdateGroup</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UpdateStatusGroup</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-使用controller" tabindex="-1"><a class="header-anchor" href="#_1-2-使用controller"><span>1.2 使用Controller</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/save&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Validated</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">BrandEntity</span> brand<span class="token punctuation">)</span><span class="token punctuation">{</span>
    brandService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-实体类entity" tabindex="-1"><a class="header-anchor" href="#_1-3-实体类entity"><span>1.3 实体类Entity</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 品牌id
     */</span>
    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;修改必须指定品牌id&quot;</span><span class="token punctuation">,</span> groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">UpdateGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Null</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;新增不能指定id&quot;</span><span class="token punctuation">,</span> groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableId</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> brandId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 品牌名
     */</span>
    <span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;品牌名必须提交&quot;</span><span class="token punctuation">,</span> groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UpdateGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 品牌logo地址
     */</span>
    <span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@URL</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;logo必须是一个合法的url地址&quot;</span><span class="token punctuation">,</span> groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UpdateGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> logo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-测试" tabindex="-1"><a class="header-anchor" href="#_1-4-测试"><span>1.4 测试</span></a></h3>`,11),r={href:"http://localhost:50000/api/product/brand/save",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;参数格式校验失败&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">10001</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;brandId&quot;</span><span class="token operator">:</span><span class="token string">&quot;新增不能指定id&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;品牌名必须提交&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;logo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;不能为空&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自定义校验" tabindex="-1"><a class="header-anchor" href="#_2-自定义校验"><span>2 自定义校验</span></a></h2><blockquote><p>5）、自定义校验</p><p>1）、编写一个自定义的校验注解</p><p>2）、编写一个自定义的校验器 ConstraintValidator</p><p>3）、关联自定义的校验器和自定义的校验注解</p></blockquote><h3 id="_2-1-自定义校验注解" tabindex="-1"><a class="header-anchor" href="#_2-1-自定义校验注解"><span>2.1 自定义校验注解</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kong<span class="token punctuation">.</span>yumall<span class="token punctuation">.</span>common<span class="token punctuation">.</span>valid</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Constraint</span><span class="token punctuation">(</span>validatedBy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token class-name">ListValueConstraintValidator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">ANNOTATION_TYPE</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">TYPE_USE</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ListValue</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;{com.kong.yumall.common.valid.ListValue.message}&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">groups</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Payload</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">payload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">vals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ValidationMessages.properties</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>kong<span class="token punctuation">.</span>yumall<span class="token punctuation">.</span>common<span class="token punctuation">.</span>valid<span class="token punctuation">.</span></span>ListValue</span><span class="token punctuation">.</span>message<span class="token operator">=</span>必须提交指定的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-自定义的校验器" tabindex="-1"><a class="header-anchor" href="#_2-2-自定义的校验器"><span>2.2 自定义的校验器</span></a></h3><p>自定义的校验器 ConstraintValidator</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kong<span class="token punctuation">.</span>yumall<span class="token punctuation">.</span>common<span class="token punctuation">.</span>valid</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListValueConstraintValidator</span> <span class="token keyword">implements</span> <span class="token class-name">ConstraintValidator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListValue</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//初始化方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token class-name">ListValue</span> constraintAnnotation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> vals <span class="token operator">=</span> constraintAnnotation<span class="token punctuation">.</span><span class="token function">vals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> val <span class="token operator">:</span> vals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 判断是否校验成功
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 需要校验的值
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> value<span class="token punctuation">,</span> <span class="token class-name">ConstraintValidatorContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UpdateStatusGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ListValue</span><span class="token punctuation">(</span>vals <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> groups <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AddGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UpdateStatusGroup</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> showStatus<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-关联自定义" tabindex="-1"><a class="header-anchor" href="#_2-3-关联自定义"><span>2.3 关联自定义</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Constraint</span><span class="token punctuation">(</span>validatedBy <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ListValueConstraintValidator</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//【可以指定多个不同的校验器，适配不同类型的校验】</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">ANNOTATION_TYPE</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">TYPE_USE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ListValue</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14);function v(m,b){const t=p("ExternalLinkIcon");return o(),c("div",null,[d,n("p",null,[a("​ "),n("a",r,[a("http://localhost:50000/api/product/brand/save"),l(t)])]),k])}const y=e(u,[["render",v],["__file","java-jsr303.html.vue"]]),_=JSON.parse('{"path":"/java/java-jsr303.html","title":"JSR303校验","lang":"zh-CN","frontmatter":{"icon":"java","title":"JSR303校验","category":["Java"],"headerDepth":5,"date":"2019-08-20T00:00:00.000Z","tag":["Validator"],"description":"JSR303校验","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/java/java-jsr303.html"}],["meta",{"property":"og:title","content":"JSR303校验"}],["meta",{"property":"og:description","content":"JSR303校验"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Validator"}],["meta",{"property":"article:published_time","content":"2019-08-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JSR303校验\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-08-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"1 分组校验","slug":"_1-分组校验","link":"#_1-分组校验","children":[{"level":3,"title":"1.1  创建组接口","slug":"_1-1-创建组接口","link":"#_1-1-创建组接口","children":[]},{"level":3,"title":"1.2 使用Controller","slug":"_1-2-使用controller","link":"#_1-2-使用controller","children":[]},{"level":3,"title":"1.3 实体类Entity","slug":"_1-3-实体类entity","link":"#_1-3-实体类entity","children":[]},{"level":3,"title":"1.4 测试","slug":"_1-4-测试","link":"#_1-4-测试","children":[]}]},{"level":2,"title":"2 自定义校验","slug":"_2-自定义校验","link":"#_2-自定义校验","children":[{"level":3,"title":"2.1 自定义校验注解","slug":"_2-1-自定义校验注解","link":"#_2-1-自定义校验注解","children":[]},{"level":3,"title":"2.2 自定义的校验器","slug":"_2-2-自定义的校验器","link":"#_2-2-自定义的校验器","children":[]},{"level":3,"title":"2.3 关联自定义","slug":"_2-3-关联自定义","link":"#_2-3-关联自定义","children":[]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":2.29,"words":686},"filePathRelative":"java/java-jsr303.md","localizedDate":"2019年8月20日","excerpt":"<p>JSR303校验</p>\\n","autoDesc":true}');export{y as comp,_ as data};