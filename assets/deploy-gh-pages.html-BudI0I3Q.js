import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c,b as n,e as s,d as e,a as t}from"./app-D1uezr0R.js";const o="/assets/true-image-20220821183537378-ygRHvw63.png",u="/assets/true-image-20220821183700208-CoPWtz4j.png",r="/assets/true-image-20220821183425533-DBbrRxn7.png",d="/assets/true-deplay-rWJNGLwY.png",k="/assets/true-image-20220821184250742-DAaDl9bN.png",v="/assets/true-image-20220821184418884-BSGDCtzy.png",m="/assets/true-image-20220821184447307-DhQHHTJi.png",b="/assets/true-image-20220821184611359-BEKNdJke.png",h={},g=t('<p>Github 自动部署WEB项目</p><h1 id="github-自动部署web项目" tabindex="-1"><a class="header-anchor" href="#github-自动部署web项目"><span>Github 自动部署WEB项目</span></a></h1><h2 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库"><span>创建仓库</span></a></h2><p>...... 忽略 ......</p><h2 id="配置-token" tabindex="-1"><a class="header-anchor" href="#配置-token"><span>配置 TOKEN</span></a></h2>',5),y={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},f=t('<figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>配置好权限</strong></p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>在项目仓库里配置：</strong><br> 快捷地址，在仓库地址后面加上： <code>/settings/secrets/actions</code></p><p>nane为 ACCESS_TOKEN，值为刚才的 token</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="创建-vuepress-theme-hope-项目" tabindex="-1"><a class="header-anchor" href="#创建-vuepress-theme-hope-项目"><span>创建 vuepress-theme-hope 项目</span></a></h2><p>命令行执行：npm create vuepress-theme-hope@next docs</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> demo
<span class="token builtin class-name">cd</span> demo
<span class="token function">npm</span> create vuepress-theme-hope@next docs
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 <span class="token function">npm</span>
获取依赖的最新版本<span class="token punctuation">..</span>.
生成 package.json<span class="token punctuation">..</span>.
? 设置应用名称 demo
? 设置应用版本号 <span class="token number">2.0</span>.0
? 设置应用描述 自动部署测试
? 设置协议 MIT
? 项目需要用到多语言么? No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
生成模板<span class="token punctuation">..</span>.
? 选择你想使用的源 国内镜像源
安装依赖<span class="token punctuation">..</span>.
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应

added <span class="token number">595</span> packages <span class="token keyword">in</span> 22s
模板已成功生成<span class="token operator">!</span>
? 是否想要现在启动 Demo 查看? No
提示: 请使用 <span class="token string">&quot;npm run docs:dev&quot;</span> 命令启动开发服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑文件" tabindex="-1"><a class="header-anchor" href="#编辑文件"><span>编辑文件</span></a></h2><p>创建：<code>.github/workflows/deploy-docs.yml</code></p><ul><li><p><code>main</code> 分支为触发 <code>CI/CD</code> 的分支。</p></li><li><p><code>gh-pages</code>（可自定义）分支为 <code>GITHUB</code> 自动打包后需要存放的分支。</p></li></ul><h3 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一"><span>方式一</span></a></h3>`,13),_={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/blogres/blogres/blob/main/.github/workflows/docs.yml",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build Docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">tags</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> v<span class="token important">**</span>
   <span class="token comment"># branches:</span>
   <span class="token comment">#   - main</span>
    <span class="token key atrule">paths-ignore</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> img/<span class="token important">**</span>
      <span class="token punctuation">-</span> docs/.vuepress/<span class="token important">**/**.tsp</span>
      <span class="token punctuation">-</span> README.md
      <span class="token punctuation">-</span> LICENSE

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 发布文档
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">19</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 Deps
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
        
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
         <span class="token comment"># BASE: /</span>
        <span class="token comment">#  HOSTNAME: https://blogres.github.io/</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
          pnpm run build<span class="token punctuation">:</span>vite
          <span class="token punctuation">&gt;</span> docs/.vuepress/dist/.nojekyll
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档 blogres.io
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 blogres.io 仓库</span>
          <span class="token key atrule">repository-name</span><span class="token punctuation">:</span> blogres/blogres.github.io
          <span class="token comment"># 部署的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist
          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">single-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二"><span>方式二</span></a></h3>`,2),N={href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">22.04</span>
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">contents</span><span class="token punctuation">:</span> write
    <span class="token key atrule">concurrency</span><span class="token punctuation">:</span>
      <span class="token key atrule">group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.workflow <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-node-</span>

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm test
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run generate

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy 部署
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">if</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref == &#39;refs/heads/main&#39; <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保留需要的文件-没有就创建" tabindex="-1"><a class="header-anchor" href="#保留需要的文件-没有就创建"><span>保留需要的文件，没有就创建</span></a></h2><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>npm 模式使用 package-lock.json</p></li><li><p>pnpm 模式使用 pnpm-lock.yaml</p></li></ul><h2 id="配置pages" tabindex="-1"><a class="header-anchor" href="#配置pages"><span>配置Pages</span></a></h2><p>/settings/pages</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="提交项目后-查看触发效果" tabindex="-1"><a class="header-anchor" href="#提交项目后-查看触发效果"><span>提交项目后，查看触发效果</span></a></h2><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看具体执行过程</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="根据page配置-自动部署代码" tabindex="-1"><a class="header-anchor" href="#根据page配置-自动部署代码"><span>根据page配置，自动部署代码</span></a></h2><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问"><span>访问</span></a></h2>',14),T={href:"https://xn--5mq618a6na897e2um.github.io/",target:"_blank",rel:"noopener noreferrer"};function G(B,C){const a=i("ExternalLinkIcon");return l(),c("div",null,[g,n("p",null,[n("a",y,[s("创建token地址"),e(a)]),s("，记得保存好token，等一下需要用到")]),f,n("p",null,[n("a",_,[s("github/JamesIves/github-pages-deploy-action"),e(a)])]),n("p",null,[s("源文件：（"),n("a",x,[s("docs.yml"),e(a)]),s("）")]),E,n("p",null,[n("a",N,[s("github/peaceiris/actions-gh-pages"),e(a)])]),w,n("p",null,[n("a",T,[s("https://自己的仓库.github.io/"),e(a)])])])}const D=p(h,[["render",G],["__file","deploy-gh-pages.html.vue"]]),j=JSON.parse('{"path":"/tools/git/deploy-gh-pages.html","title":"Github 自动部署WEB项目","lang":"zh-CN","frontmatter":{"icon":"github","title":"Github 自动部署WEB项目","category":["开发工具"],"headerDepth":5,"date":"2021-01-15T00:00:00.000Z","order":2,"star":true,"tag":["Git","Github"],"description":"Github 自动部署WEB项目","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/tools/git/deploy-gh-pages.html"}],["meta",{"property":"og:title","content":"Github 自动部署WEB项目"}],["meta",{"property":"og:description","content":"Github 自动部署WEB项目"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:published_time","content":"2021-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Github 自动部署WEB项目\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"创建仓库","slug":"创建仓库","link":"#创建仓库","children":[]},{"level":2,"title":"配置 TOKEN","slug":"配置-token","link":"#配置-token","children":[]},{"level":2,"title":"创建 vuepress-theme-hope 项目","slug":"创建-vuepress-theme-hope-项目","link":"#创建-vuepress-theme-hope-项目","children":[]},{"level":2,"title":"编辑文件","slug":"编辑文件","link":"#编辑文件","children":[{"level":3,"title":"方式一","slug":"方式一","link":"#方式一","children":[]},{"level":3,"title":"方式二","slug":"方式二","link":"#方式二","children":[]}]},{"level":2,"title":"保留需要的文件，没有就创建","slug":"保留需要的文件-没有就创建","link":"#保留需要的文件-没有就创建","children":[]},{"level":2,"title":"配置Pages","slug":"配置pages","link":"#配置pages","children":[]},{"level":2,"title":"提交项目后，查看触发效果","slug":"提交项目后-查看触发效果","link":"#提交项目后-查看触发效果","children":[]},{"level":2,"title":"根据page配置，自动部署代码","slug":"根据page配置-自动部署代码","link":"#根据page配置-自动部署代码","children":[]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":2.52,"words":757},"filePathRelative":"tools/git/deploy-gh-pages.md","localizedDate":"2021年1月15日","excerpt":"<p>Github 自动部署WEB项目</p>\\n","autoDesc":true}');export{D as comp,j as data};
