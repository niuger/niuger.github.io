import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as e}from"./app-D1uezr0R.js";const t={},l=e(`<p>DockerFile 配置基于Centos7 安装运行jdk、Java项目jar包、并设置中文UTF-8字符集</p><h1 id="dockerfile-配置基于centos7-安装运行jdk、java项目jar包、并设置中文utf-8字符集" tabindex="-1"><a class="header-anchor" href="#dockerfile-配置基于centos7-安装运行jdk、java项目jar包、并设置中文utf-8字符集"><span>DockerFile 配置基于Centos7 安装运行jdk、Java项目jar包、并设置中文UTF-8字符集</span></a></h1><h2 id="dockerfile脚本" tabindex="-1"><a class="header-anchor" href="#dockerfile脚本"><span>dockerfile脚本</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FROM registry.cn-chengdu.aliyuncs.com/jinfang/centos:7.9

MAINTAINER jinfang
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span>

<span class="token comment">#添加JVM参数</span>
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xmx1024M -Xms1024M -Xmn750M -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=512M -XX:GCTimeRatio=19 -XX:+ClassUnloading&quot;</span>

<span class="token comment">#项目打包后的jar包名</span>
ENV <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>spring-boot-model-web-1.0.0.jar
ENV <span class="token assign-left variable">JDK_FILE</span><span class="token operator">=</span>jdk-17.0.3_linux-x64_bin.tar.gz

<span class="token comment">#项目根目录</span>
ENV <span class="token assign-left variable">ROOT_DIR</span><span class="token operator">=</span>/data/web
<span class="token comment">#动态加载配置文件</span>
ENV <span class="token assign-left variable">ROOT_DIR_CONFIG</span><span class="token operator">=</span>/data/web/config
<span class="token comment">#jdk目录</span>
ENV <span class="token assign-left variable">JAVA_DIR</span><span class="token operator">=</span>/usr/local/java

RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$JAVA_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment">#在容器运行时声明一个 volume, 在容器中创建目录</span>
VOLUME <span class="token variable">$ROOT_DIR</span>
VOLUME <span class="token variable">$JAVA_DIR</span>

<span class="token comment">#设置终端默认登录进来的工作目录</span>
WORKDIR <span class="token variable">$ROOT_DIR</span>

<span class="token comment">#配置中文字符 默认：LANG=&quot;en_US.UTF-8&quot;</span>
RUN <span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> kde-l10n-Chinese <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> reinstall glibc-common <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> localedef <span class="token parameter variable">-c</span> <span class="token parameter variable">-f</span> UTF-8 <span class="token parameter variable">-i</span> zh_CN zh_CN.UTF-8 <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;LANG=&quot;zh_CN.UTF-8&quot;&#39;</span> <span class="token operator">&gt;</span> /etc/locale.conf <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/locale.conf <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> yum clean all
ENV <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8 <span class="token punctuation">\\</span>
    <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>zh_CN.UTF-8

<span class="token comment">#配置jdk</span>
COPY ./<span class="token variable">$JDK_FILE</span> <span class="token variable">$JAVA_DIR</span>
<span class="token comment"># RUN 构建镜像时需要运行的Linux命令、CMD #指定容器启动时要运行的命令</span>
RUN <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token variable">$JAVA_DIR</span>/<span class="token variable">$JDK_FILE</span> <span class="token parameter variable">-C</span> <span class="token variable">$JAVA_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$JAVA_DIR</span>/<span class="token variable">$JDK_FILE</span>
<span class="token comment">#设置环境变量</span>
ENV <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_DIR</span>/jdk-17.0.3
ENV <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$CLASSPATH</span>
ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token comment"># RUN source /etc/profile &amp;&amp; java -version</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;source&quot;</span>,<span class="token string">&quot;/etc/profile&quot;</span>,<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-version&quot;</span><span class="token punctuation">]</span>

<span class="token comment">#java项目的jar包</span>
COPY ./target/<span class="token variable">$JAR_FILE</span> <span class="token variable">$ROOT_DIR</span>
COPY ./src/main/resources/ <span class="token variable">$ROOT_DIR_CONFIG</span>

RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;java -Djava.security.egd=file:/dev/./urandom <span class="token variable">\${JAVA_OPTS}</span> -jar <span class="token variable">$ROOT_DIR</span>/<span class="token variable">$JAR_FILE</span>&quot;</span> <span class="token operator">&gt;</span> /run_module.sh

<span class="token comment">#当前容器对外暴露出的端口</span>
EXPOSE <span class="token number">51155</span>
EXPOSE <span class="token number">51156</span>
EXPOSE <span class="token number">51157</span>

<span class="token comment">#指定容器启动时要运行的命令</span>
<span class="token comment">#ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/spring-boot-model-web-1.0.0.jar&quot;,&quot;--spring.profiles.active=prod&quot;]</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/run_module.sh&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#[&quot;java&quot;,&quot;-Djava.security.egd=file:/dev/./urandom&quot;,&quot;-jar&quot;,&quot;/home/javacode.jar&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> DockerFileCentos7 <span class="token parameter variable">-t</span> model-web:1.2.0 <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">51155</span>:51155 <span class="token parameter variable">-p</span> <span class="token number">51156</span>:51156 <span class="token parameter variable">-p</span> <span class="token number">51157</span>:51157 <span class="token parameter variable">--name</span> web <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> model-web:1.2.0
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">51155</span>:51155 <span class="token parameter variable">-p</span> <span class="token number">51156</span>:51156 <span class="token parameter variable">-p</span> <span class="token number">51157</span>:51157 <span class="token parameter variable">--name</span> web <span class="token parameter variable">-v</span> E:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>idea<span class="token punctuation">\\</span>spring-boot-model<span class="token punctuation">\\</span>config:/data/web/config <span class="token parameter variable">-d</span>  model-web:1.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[l];function o(p,r){return n(),s("div",null,i)}const m=a(t,[["render",o],["__file","dockerfile-centos.html.vue"]]),v=JSON.parse('{"path":"/docker/dockerfile-centos.html","title":"DockerFile基于Centos7并设置中文UTF-8字符集","lang":"zh-CN","frontmatter":{"icon":"docker1","title":"DockerFile基于Centos7并设置中文UTF-8字符集","category":["Docker"],"headerDepth":5,"date":"2020-01-20T00:00:00.000Z","order":4,"tag":["docker","dockerfile"],"description":"DockerFile 配置基于Centos7 安装运行jdk、Java项目jar包、并设置中文UTF-8字符集","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/docker/dockerfile-centos.html"}],["meta",{"property":"og:title","content":"DockerFile基于Centos7并设置中文UTF-8字符集"}],["meta",{"property":"og:description","content":"DockerFile 配置基于Centos7 安装运行jdk、Java项目jar包、并设置中文UTF-8字符集"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"dockerfile"}],["meta",{"property":"article:published_time","content":"2020-01-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DockerFile基于Centos7并设置中文UTF-8字符集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"dockerfile脚本","slug":"dockerfile脚本","link":"#dockerfile脚本","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":1.57,"words":471},"filePathRelative":"docker/dockerfile-centos.md","localizedDate":"2020年1月20日","excerpt":"<p>DockerFile 配置基于Centos7 安装运行jdk、Java项目jar包、并设置中文UTF-8字符集</p>\\n","autoDesc":true}');export{m as comp,v as data};
