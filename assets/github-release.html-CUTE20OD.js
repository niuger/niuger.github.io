import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c,b as n,e,d as a,a as i}from"./app-D1uezr0R.js";const d={},r=n("p",null,[e("校验Git提交及使用github工作流来自动创建release，"),n("br"),e(" 依赖于：commitlint、commitizen、cz-conventional-changelog")],-1),p={href:"https://github.com/blogres/blogres",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"使用流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用流程"},[n("span",null,"使用流程")])],-1),v=n("li",null,"修改代码完成",-1),m=n("li",null,"git add -A",-1),b={href:"http://commit.sh",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#!bin/bash</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token assign-left variable">tag</span><span class="token operator">=</span>origin
<span class="token assign-left variable">branch</span><span class="token operator">=</span>main

<span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token builtin class-name">echo</span> 提交到git仓库
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>======&gt; 拉取新代码...<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token function">git</span> pull

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>======&gt; 查看本地状态...<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token function">git</span> status

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>======&gt; 添加更改到本地仓库缓存...&quot;</span>

<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>======&gt; 设置提交消息:<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token function">pnpm</span> run commit

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>======&gt; 提交到远程 <span class="token variable">\${branch}</span> 分支<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token function">git</span> push <span class="token parameter variable">-u</span> <span class="token variable">$tag</span> <span class="token variable">$branch</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token builtin class-name">echo</span> commit ok<span class="token operator">!</span>
<span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交消息适配器" tabindex="-1"><a class="header-anchor" href="#提交消息适配器"><span>提交消息适配器</span></a></h2><p>依赖：<code>commitizen</code> + <code>cz-conventional-changelog</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> --save-dev commitizen

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化规范适配器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm install --save-dev cz-conventional-changelog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者使用 commitizen 工具安装<br> commitizen 工具会自动在package.json中添加配置相应的配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果失败，就手动生成配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">config.commitizen.path</span><span class="token operator">=</span><span class="token string">&quot;./node_modules/cz-conventional-changelog&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./node_modules/cz-conventional-changelog&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h={href:"https://github.com/commitizen/cz-cli#adapters",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.commit</span><span class="token operator">=</span><span class="token string">&quot;git-cz&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git-cz&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>echo &quot;node_modules&quot; &gt; .gitignore</code></p><p>接下来使用commitizen来生自动生成commit</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token function">pnpm</span> run commit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选项如下：</p><ul><li>break change feature 发布会增加主版本号（如1.1.1 –&gt; 2.0.0）<strong>这个选择位于 feat 选项的：? Are there any breaking changes?</strong></li><li>feat: 新的功能，发布版本会增加次版本号（如1.0.0 –&gt; 1.1.0）</li><li>fix: 修复bug，发布版本会增加修订版本号（如 1.0.0 –&gt; 1.0.1）</li><li>docs: 只修改文档</li><li>style: 不影响代码含义的修改（比如：空格、格式化、添加缺少的分号等）</li><li>refactor: 重构代码（既不修复错误，也不增加功能）</li><li>perf: 性能优化</li><li>test: 添加测试或纠正现有测试</li><li>build: 影响构建系统或外部依赖的变化（如glup、npm等）</li><li>ci: ci配置文件和脚本的改变 （如：Travis、Circle）</li><li>chore: 其它不修改src或测试文件的改动</li><li>revert: 回滚之前的提交</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run commit

<span class="token operator">&gt;</span> changelog@1.0.0 commit
<span class="token operator">&gt;</span> cz

cz-cli@4.2.5, cz-conventional-changelog@3.3.0

? 选择更改的类型提交 Select the <span class="token builtin class-name">type</span> of change that you&#39;re
committing: feat:     A new feature


? 这种变化的范围是什么（组件或文件名），可回车键跳过 What is the scope of this change <span class="token punctuation">(</span>e.g.
component or <span class="token function">file</span> name<span class="token punctuation">)</span>: <span class="token punctuation">(</span>press enter to skip<span class="token punctuation">)</span>


? 写一个简短的祈使时态描述
更改<span class="token punctuation">(</span>最多88个字符<span class="token punctuation">)</span>: Write a short, imperative tense description of
the change <span class="token punctuation">(</span>max <span class="token number">88</span> chars<span class="token punctuation">)</span>:
一个简单的描述

 
? 提供详细的变更描述:
<span class="token punctuation">(</span>按回车键跳过<span class="token punctuation">)</span>Provide a longer description of the change:
<span class="token punctuation">(</span>press enter to skip<span class="token punctuation">)</span>


? 有什么突破性的变化吗?（有就yes，没有就no）Are there any breaking changes? Yes

? 突破性的变更提交需要一个主体。
请输入更长的提交描述本身: A BREAKING CHANGE commit requires a body.
Please enter a longer description of the commit itself:

? 描述突破性的变化: Describe the breaking changes:
 重大变更
 
 
? 这个变化是否影响到未解决的issues? （简单来说就是是否解决了issues里的问题，yes就指定被解决的问题）Does this change affect any <span class="token function">open</span> issues? Yes

? 添加被解决的issues引用 Add issue references <span class="token punctuation">(</span>e.g. <span class="token string">&quot;fix #123&quot;</span>, <span class="token string">&quot;re
#123&quot;</span><span class="token builtin class-name">.</span><span class="token punctuation">)</span>:
 完成 <span class="token comment">#1</span>
 
 
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> ffc79a9<span class="token punctuation">]</span> feat: 一个简单的描述
 <span class="token number">3</span> files changed, <span class="token number">5805</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> .gitignore
 create mode <span class="token number">100644</span> pnpm-lock.json
 create mode <span class="token number">100644</span> package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commitlint-校验提交是否合规" tabindex="-1"><a class="header-anchor" href="#commitlint-校验提交是否合规"><span>commitlint 校验提交是否合规</span></a></h2>`,9),q={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> --save-dev @commitlint/config-conventional @commitlint/cli

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={href:"https://github.com/conventional-changelog/commitlint#config",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot;</span> <span class="token operator">&gt;</span> .commitlintrc.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 husky</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm install husky --save-dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>激活husky钩子hooks</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm pkg set scripts.prepare=&quot;husky install&quot;

pnpm run prepare

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add a hook:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg  <span class="token string">&#39;npx --no -- commitlint --edit \${1}&#39;</span>

<span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.test</span><span class="token operator">=</span><span class="token string">&quot;echo ----demo test out!---- &amp;&amp; exit&quot;</span>

npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;pnpm test&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git add -A
git commit -m &quot;这是一个新的改动&quot;

-----&gt; 提交不通过

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功示范：<code>git commit -m &quot;fix: 更新一个bug&quot;</code></p><h2 id="conventional-changelog-cli-生成日志" tabindex="-1"><a class="header-anchor" href="#conventional-changelog-cli-生成日志"><span>conventional-changelog-cli 生成日志</span></a></h2><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> --save-dev conventional-changelog-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基本使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.changelog</span><span class="token operator">=</span><span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),y=n("p",null,[n("code",null,"-p angular"),e(" 用来指定使用的 commit message 标准，集成了包括 atom, codemirror, ember, eslint, express, jquery 等项目的标准。")],-1),z=n("code",null,"-i CHANGELOG.md",-1),G={href:"http://CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,"-s 表示读写 changelog 为同一文件。",-1),j=i(`<p>需要注意的是，上面这条命令产生的 changelog 是基于上次 tag 版本之后的变更（Feature、Fix、Breaking Changes等等）所产生的。</p><p>所以如果你想生成之前所有 commit 信息产生的 changelog 则需要使用这条命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.changelog</span><span class="token operator">=</span><span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 -r 表示生成 changelog 所需要使用的 release 版本数量，默认为1，全部则是0。</p><p><code>pnpm run changelog</code></p><h2 id="standard-version-生成版本号" tabindex="-1"><a class="header-anchor" href="#standard-version-生成版本号"><span>standard-version 生成版本号</span></a></h2>`,6),N={href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"},C=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> --save-dev standard-version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>standard-version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项</p><ul><li>--release-as, -r：指定版本号</li></ul><blockquote><p>默认情况下，工具会自动根据 主版本（major: 1.x.x）,次版本（minor: x.2.x） or 修订版（patch: x.x.3） 规则来生成版本号，1.2.3</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>standard-version <span class="token parameter variable">-r</span> minor
<span class="token comment"># output 1.1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>--prerelease, -p：预发版本命名</li></ul><p>假如当期的版本号是 <code>2.0.0</code>，更新版本之后</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>standard-version <span class="token parameter variable">--prerelease</span> alpha
<span class="token comment"># output 2.0.0-alpha.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>--tag-prefix, -t：版本 tag 前缀</li></ul><p>用来给生成 tag 标签添加前缀，版本号为 2.0.0，则：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ standard-version --tag-prefix <span class="token string">&quot;stable-&quot;</span>
<span class="token comment"># output tag: stable-v2.0.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm pkg set scripts.release=&quot;./scripts/release.sh&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>pnpm run release</p><h2 id="release-it-生成版本号" tabindex="-1"><a class="header-anchor" href="#release-it-生成版本号"><span>release-it 生成版本号</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> @release-it/conventional-changelog --save-dev

<span class="token function">pnpm</span> init release-it

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一路回车，按照默认配置进行配置</p><p>不需要在npm进行发布，因此需要在.release-it.json中添加下面的配置，禁用npm发布：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">&quot;npm&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;publish&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>changelog生成规范</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  &quot;plugins&quot;: {
    &quot;@release-it/conventional-changelog&quot;: {
      &quot;infile&quot;: &quot;CHANGELOG.md&quot;,
      &quot;ignoreRecommendedBump&quot;: true,
      &quot;strictSemVer&quot;: true,
      &quot;preset&quot;: {
        &quot;name&quot;: &quot;conventionalcommits&quot;,
        &quot;types&quot;: [
          {
            &quot;type&quot;: &quot;feat&quot;,
            &quot;section&quot;: &quot;✨新功能&quot;
          },
          {
            &quot;type&quot;: &quot;fix&quot;,
            &quot;section&quot;: &quot;🐛问题修复&quot;
          },
          {
            &quot;type&quot;: &quot;docs&quot;,
            &quot;section&quot;: &quot;📚文档&quot;
          }
        ]
      }
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件会自动生成tag，我们需要自定义一下生成tag时的提交信</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;git&quot;: {
  &quot;commitMessage&quot;: &quot;chore(tag): release v\${version}&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git add -A
pnpm run commit
pnpm run release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里选择patch (1.0.1)，一路默认回车。</p>`,27);function E(T,L){const s=l("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",p,[e("项目源码"),a(s)])]),u,n("ul",null,[v,m,n("li",null,[e("执行 sh "),n("a",b,[e("commit.sh"),a(s)]),e(" | pnpm run commit 设置提交消息")])]),g,n("p",null,[e("上面介绍的适配器，只是其中一种，社区还提供了很多其它的适配器，可以去 "),n("a",h,[e("项目页面"),a(s)]),e(" 查看。")]),k,n("p",null,[n("a",q,[e("github地址"),a(s)])]),f,n("p",null,[e("配置 "),n("a",x,[e(".commitlintrc.js 查看支持文件类型"),a(s)])]),_,n("blockquote",null,[y,n("p",null,[z,e(" 表示从 "),n("a",G,[e("CHANGELOG.md"),a(s)]),e(" 读取 changelog")]),A]),j,n("p",null,[n("a",N,[e("github仓库"),a(s)])]),C])}const B=t(d,[["render",E],["__file","github-release.html.vue"]]),R=JSON.parse('{"path":"/tools/git/github-release.html","title":"校验Git提交及自动创建Gihub版本","lang":"zh-CN","frontmatter":{"icon":"github","title":"校验Git提交及自动创建Gihub版本","category":["开发工具"],"headerDepth":5,"date":"2021-01-15T00:00:00.000Z","order":3,"tag":["Github","Release"],"description":"校验Git提交及使用github工作流来自动创建release， 依赖于：commitlint、commitizen、cz-conventional-changelog","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/tools/git/github-release.html"}],["meta",{"property":"og:title","content":"校验Git提交及自动创建Gihub版本"}],["meta",{"property":"og:description","content":"校验Git提交及使用github工作流来自动创建release， 依赖于：commitlint、commitizen、cz-conventional-changelog"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:tag","content":"Release"}],["meta",{"property":"article:published_time","content":"2021-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"校验Git提交及自动创建Gihub版本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"使用流程","slug":"使用流程","link":"#使用流程","children":[]},{"level":2,"title":"提交消息适配器","slug":"提交消息适配器","link":"#提交消息适配器","children":[]},{"level":2,"title":"commitlint 校验提交是否合规","slug":"commitlint-校验提交是否合规","link":"#commitlint-校验提交是否合规","children":[]},{"level":2,"title":"conventional-changelog-cli 生成日志","slug":"conventional-changelog-cli-生成日志","link":"#conventional-changelog-cli-生成日志","children":[]},{"level":2,"title":"standard-version 生成版本号","slug":"standard-version-生成版本号","link":"#standard-version-生成版本号","children":[]},{"level":2,"title":"release-it 生成版本号","slug":"release-it-生成版本号","link":"#release-it-生成版本号","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":5.07,"words":1521},"filePathRelative":"tools/git/github-release.md","localizedDate":"2021年1月15日","excerpt":"<p>校验Git提交及使用github工作流来自动创建release，<br>\\n依赖于：commitlint、commitizen、cz-conventional-changelog</p>\\n","autoDesc":true}');export{B as comp,R as data};
