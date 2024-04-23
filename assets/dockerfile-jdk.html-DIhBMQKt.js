import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,a}from"./app-D1uezr0R.js";const i={},t=a(`<p>DockerFile基于Jdk</p><h1 id="dockerfile-配置基于jdk" tabindex="-1"><a class="header-anchor" href="#dockerfile-配置基于jdk"><span>DockerFile 配置基于jdk</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加JAVA启动的必要镜像，推荐使用jre版本</span>
<span class="token comment"># openjdk:8-jre(295.16 MB)、openjdk:11-jre(328.63 MB)、openjdk:17-jdk|oracle(492.57 MB)</span>
FROM registry.cn-chengdu.aliyuncs.com/jinfang/openjdk:17-jdk

<span class="token comment">#声明镜像维护者信息</span>
MAINTAINER jinfang
<span class="token comment">#镜像描述元信息</span>
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;model-web&quot;</span>

<span class="token comment">#添加JVM参数</span>
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xmx1024M -Xms1024M -Xmn750M -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=512M -XX:GCTimeRatio=19 -XX:+ClassUnloading&quot;</span>

<span class="token comment"># 项目打包后的jar包名</span>
ENV <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>spring-boot-model-web-1.0.0.jar

<span class="token comment"># 项目根目录</span>
ENV <span class="token assign-left variable">ROOT_DIR</span><span class="token operator">=</span>/data/web
<span class="token comment">#动态加载配置文件</span>
ENV <span class="token assign-left variable">ROOT_DIR_CONFIG</span><span class="token operator">=</span>/data/web/config

RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR</span>
RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment">#在容器运行时声明一个 volume, 在容器中创建目录</span>
VOLUME <span class="token variable">$ROOT_DIR</span>

<span class="token comment">#设置终端默认登录进来的工作目录</span>
WORKDIR <span class="token variable">$ROOT_DIR</span>

<span class="token comment"># java项目的jar包</span>
COPY ./spring-boot-model-web/target/<span class="token variable">$JAR_FILE</span> <span class="token variable">$ROOT_DIR</span>
COPY ./spring-boot-model-web/src/main/resources <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment"># Create a script 由于ENTRYPOINT无法使用dockerfile中定义的环境变量</span>
<span class="token comment"># 所以需要按照指定的环境变量生成运行脚本，并输出到文件，之后ENTRYPOINT运行脚本文件就行了</span>
<span class="token comment">#  --spring.config.location=\${ROOT_DIR_CONFIG}/application-\${PROFILES}.yml</span>
<span class="token comment">#  --spring.profiles.active=$PROFILES</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;java -Djava.security.egd=file:/dev/./urandom <span class="token variable">\${JAVA_OPTS}</span> -jar <span class="token variable">$ROOT_DIR</span>/<span class="token variable">$JAR_FILE</span>&quot;</span> <span class="token operator">&gt;</span> /run_module.sh

<span class="token comment"># 当前容器对外暴露出的端口</span>
EXPOSE <span class="token number">51155</span>
EXPOSE <span class="token number">51156</span>
EXPOSE <span class="token number">51157</span>

<span class="token comment"># 指定容器启动时要运行的命令</span>
<span class="token comment">#ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/spring-boot-model-web-1.0.0.jar&quot;,&quot;--spring.profiles.active=prod&quot;]</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/run_module.sh&quot;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function o(r,c){return e(),s("div",null,l)}const m=n(i,[["render",o],["__file","dockerfile-jdk.html.vue"]]),v=JSON.parse('{"path":"/docker/dockerfile-jdk.html","title":"DockerFile基于Jdk","lang":"zh-CN","frontmatter":{"icon":"docker1","title":"DockerFile基于Jdk","category":["Docker"],"headerDepth":5,"date":"2020-01-20T00:00:00.000Z","order":5,"tag":["docker","dockerfile"],"description":"DockerFile基于Jdk","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/docker/dockerfile-jdk.html"}],["meta",{"property":"og:title","content":"DockerFile基于Jdk"}],["meta",{"property":"og:description","content":"DockerFile基于Jdk"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"dockerfile"}],["meta",{"property":"article:published_time","content":"2020-01-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DockerFile基于Jdk\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":1.11,"words":332},"filePathRelative":"docker/dockerfile-jdk.md","localizedDate":"2020年1月20日","excerpt":"<p>DockerFile基于Jdk</p>\\n","autoDesc":true}');export{m as comp,v as data};
