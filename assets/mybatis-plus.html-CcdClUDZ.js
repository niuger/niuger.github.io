import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as p,b as n,e as l,d as o,a as c}from"./app-D1uezr0R.js";const i={},u=c(`<p>整合mybatis-plus</p><h1 id="整合mybatis-plus" tabindex="-1"><a class="header-anchor" href="#整合mybatis-plus"><span>整合mybatis-plus</span></a></h1><h2 id="_1、commen引入依赖" tabindex="-1"><a class="header-anchor" href="#_1、commen引入依赖"><span>1、commen引入依赖</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--    导入mysql驱动    --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、数据源" tabindex="-1"><a class="header-anchor" href="#_2、数据源"><span>2、数据源</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">##### application.yml</span>
    server:
      port: <span class="token number">8100</span>

    spring:
      <span class="token comment"># 环境 dev|test|prod</span>
      profiles:
        active: dev
    <span class="token comment">#mybatis-plus</span>
    mybatis-plus:
      mapper-locations: classpath:/mapper/**/*.xml
      <span class="token comment">#实体扫描，多个package用逗号或者分号分隔</span>
      typeAliasesPackage: com.kong.yumall.product.entity
      global-config:
        <span class="token comment">#数据库相关配置</span>
        db-config:
          <span class="token comment">#主键类型  AUTO:&quot;数据库ID自增&quot;, INPUT:&quot;用户输入ID&quot;, ID_WORKER:&quot;全局唯一ID (数字类型唯一ID)&quot;, UUID:&quot;全局唯一ID UUID&quot;;</span>
          id-type: AUTO
          logic-delete-value: <span class="token parameter variable">-1</span>
          logic-not-delete-value: <span class="token number">0</span>
        banner: <span class="token boolean">false</span>
 <span class="token comment">##### application-dev.yml</span>
  spring:
      datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        druid:
          driver-class-name: com.mysql.cj.jdbc.Driver
          url: jdbc:mysql://localhost:3306/yumall_pms?useUnicode<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">characterEncoding</span><span class="token operator">=</span>UTF-8<span class="token operator">&amp;</span><span class="token assign-left variable">useSSL</span><span class="token operator">=</span>false
          username: root
          password: root
          initial-size: <span class="token number">10</span>
          max-active: <span class="token number">100</span>
          min-idle: <span class="token number">10</span>
          max-wait: <span class="token number">60000</span>
          pool-prepared-statements: <span class="token boolean">true</span>
          max-pool-prepared-statement-per-connection-size: <span class="token number">20</span>
          time-between-eviction-runs-millis: <span class="token number">60000</span>
          min-evictable-idle-time-millis: <span class="token number">300000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、测试id自增" tabindex="-1"><a class="header-anchor" href="#_3、测试id自增"><span>3、测试id自增</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BrandService</span> brandService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getAotuId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">BrandEntity</span> brandEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrandEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandEntity<span class="token punctuation">.</span><span class="token function">setBrandId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandEntity<span class="token punctuation">.</span><span class="token function">setLogo</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>brandEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;保存OK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
         * String eq： =
         * int ge: &gt;=
         * int gt: &gt;
         * int le: &lt;=
         * int lt: &lt;
         */</span>
<span class="token comment">//        brandService.list(new QueryWrapper&lt;BrandEntity&gt;().gt(&quot;brand_id&quot;, 0));</span>
<span class="token comment">//        brandService.list(new QueryWrapper&lt;BrandEntity&gt;().eq(&quot;name&quot;, &quot;华为pro&quot;));</span>
        brandService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BrandEntity</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span><span class="token string">&quot;brand_id&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ins<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ins<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、启动controller测试-coupon" tabindex="-1"><a class="header-anchor" href="#_4、启动controller测试-coupon"><span>4、启动controller测试：coupon</span></a></h2>`,9),r={href:"http://localhost:8400/coupon/coupon/info/1",target:"_blank",rel:"noopener noreferrer"},d=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`{"msg":"success","code":0,"coupon":{"id":1,"couponType":null,"couponImg":"images-images-images-imagesimages","couponName":null,"num":null,"amount":null,"perLimit":null,"minPoint":null,"startTime":null,"endTime":null,"useType":null,"note":null,"publishCount":null,"useCount":null,"receiveCount":null,"enableStartTime":null,"enableEndTime":null,"code":null,"memberLevel":null,"publish":null}}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function m(k,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[l("http://localhost:8400/coupon/coupon/info/1"),o(s)])]),d])}const y=a(i,[["render",m],["__file","mybatis-plus.html.vue"]]),h=JSON.parse('{"path":"/java/mybatis-plus.html","title":"整合mybatis-plus","lang":"zh-CN","frontmatter":{"icon":"java","title":"整合mybatis-plus","category":["mybatis"],"headerDepth":5,"date":"2020-01-01T00:00:00.000Z","tag":["mybatis-plus"],"description":"整合mybatis-plus","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/java/mybatis-plus.html"}],["meta",{"property":"og:title","content":"整合mybatis-plus"}],["meta",{"property":"og:description","content":"整合mybatis-plus"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"mybatis-plus"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"整合mybatis-plus\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"1、commen引入依赖","slug":"_1、commen引入依赖","link":"#_1、commen引入依赖","children":[]},{"level":2,"title":"2、数据源","slug":"_2、数据源","link":"#_2、数据源","children":[]},{"level":2,"title":"3、测试id自增","slug":"_3、测试id自增","link":"#_3、测试id自增","children":[]},{"level":2,"title":"4、启动controller测试：coupon","slug":"_4、启动controller测试-coupon","link":"#_4、启动controller测试-coupon","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"java/mybatis-plus.md","localizedDate":"2020年1月1日","excerpt":"<p>整合mybatis-plus</p>\\n","autoDesc":true}');export{y as comp,h as data};