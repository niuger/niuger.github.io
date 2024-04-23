import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-D1uezr0R.js";const t={},l=e(`<p>使用脚本一键安装 Docker</p><p><code>sudo sh install-docker.sh</code></p><h2 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>CentOS</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 安装docker</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;k8s-docker.log&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./k8s-docker.log
<span class="token keyword">fi</span>
<span class="token function">touch</span> ./k8s-docker.log

<span class="token function-name function">kill_s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment"># https://blog.csdn.net/qq_42476834/article/details/124719250</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; PID=<span class="token variable">$$</span>,PPID=<span class="token environment constant">$PPID</span>&quot;</span>
  <span class="token comment"># 2结束进程，3退出，9强制结束进程</span>
  <span class="token comment"># kill -2 $$ #|| kill -3 $$ || kill -9 $$</span>
  <span class="token function">killall</span> <span class="token parameter variable">-2</span> <span class="token function">tail</span>
<span class="token punctuation">}</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 启动中 ...&quot;</span>
  systemctl start <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 重新启动中 ...&quot;</span>
  systemctl restart <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 停止进程中 ...&quot;</span>
  systemctl stop <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 停止进程成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 开启自动启动 ...&quot;</span>
  systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
  systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 开启自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 关闭自动启动 ...&quot;</span>
  systemctl disable <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 关闭自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前状态 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>systemctl status <span class="token function">docker</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">get_v</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前版本&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token parameter variable">-v</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">waiting_input_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token comment">#  echo -ne &quot;[\\e[0;31m15\\e[0m]秒后将自动安装最新版，自定义请输入，如：3:20.10.8-3.el7\\r&quot;</span>
<span class="token comment">#  sleep 15;</span>
<span class="token comment">#  if read -p &quot;请输入版本:&quot; version;</span>
<span class="token comment">#  then</span>
<span class="token comment">#    echo &quot;----&gt;  自定义版本为:\${version}&quot;</span>
<span class="token comment">#     yum install docker-ce-3:20.10.8-3.el7 docker-ce-cli-3:20.10.8-3.el7 containerd.io docker-compose-plugin</span>
<span class="token comment">#    yum install -y docker-ce-\${version}</span>
<span class="token comment">#  else</span>
<span class="token comment">#    echo &quot;----&gt;  自动安装最新版本&quot;</span>
    yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token comment">#  fi</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rm_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/yum.repos.d/docker-ce.repo
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/docker/
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 准备卸载旧版本&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> docker*<span class="token variable">)</span></span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 软件包 <span class="token variable">\${i}</span> 将被 删除...&quot;</span>
<span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> docker*<span class="token variable">)</span></span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 正在删除 <span class="token variable">\${i}</span> ...&quot;</span>
  yum remove <span class="token parameter variable">-y</span> <span class="token variable">\${i}</span>
  yum remove <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io
  rm_file
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">install_tool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 安装依赖 ...&quot;</span>
  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token punctuation">}</span>


<span class="token function-name function">daemon_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 设置镜像加速 ...&quot;</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/docker/daemon.json</span>
{
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;log-driver&quot;: &quot;json-file&quot;,
  &quot;log-opts&quot;: {
    &quot;max-size&quot;: &quot;100m&quot;
  },
  &quot;storage-driver&quot;: &quot;overlay2&quot;,
  &quot;registry-mirrors&quot;: [
    &quot;https://04eo9xup.mirror.aliyuncs.com&quot;,
    &quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;
  ]
}
EOF</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; 写入文件[/etc/docker/daemon.json] 成功！<span class="token entity" title="\\n">\\n</span>等待重新加载本地文件。&quot;</span>
systemctl daemon-reload
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新加载完成。&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">huawei_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 华为源 配置&amp;安装&quot;</span>
  <span class="token comment"># step 1: 安装必要的一些系统工具</span>
  install_tool
  <span class="token comment"># Step 2: 添加软件源信息</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 下载repo文件 ...&quot;</span>
  <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://repo.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo
  <span class="token comment"># Step 3 修改repo</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; 更新 docker-repo<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+repo.huaweicloud.com/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
  <span class="token comment"># Step 4</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------------------------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  更新仓库索引 ...&quot;</span>
  yum clean all <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token function">sleep</span> <span class="token number">4</span><span class="token punctuation">;</span>
  yum makecache <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token function">sleep</span> <span class="token number">4</span><span class="token punctuation">;</span>
  yum repolist all <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------------------------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  查看docker可用版本 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  yum list docker-ce.x86_64 <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------------------------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  正在安装 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  waiting_input_version
  <span class="token comment"># Step 4: 开启Docker服务</span>
  <span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>
  start
  <span class="token function">sleep</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">enable</span>
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  status
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  daemon_reload
  restart
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> a
  <span class="token function">docker</span> images
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token punctuation">}</span>

<span class="token function-name function">ali_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 阿里源 配置&amp;安装&quot;</span>
  <span class="token comment"># step 1: 安装必要的一些系统工具</span>
  install_tool
  <span class="token comment"># Step 2: 添加软件源信息</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 下载repo文件 ...&quot;</span>
  yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  <span class="token comment"># Step 3</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; 更新 docker-repo<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+mirrors.aliyun.com/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
  <span class="token comment"># Step 4</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------------------------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  更新仓库索引 ...&quot;</span>
  yum clean all <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  yum makecache <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------------------------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  查看docker可用版本 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  yum list docker-ce.x86_64 <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>-------------------------------------------------<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  开始安装 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  waiting_input_version
  <span class="token comment"># Step 4: 开启Docker服务</span>
  <span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>
  start
  <span class="token function">sleep</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">enable</span>
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  status
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  daemon_reload
  restart
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> a
  <span class="token function">docker</span> images
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; docker 安装&quot;</span>
  uninstall <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  huawei_install <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  get_v
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  kill_s
<span class="token punctuation">}</span>

<span class="token function-name function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
huawei_install
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
ali_install
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
uninstall
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
start
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
stop
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
status
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m7</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">enable</span>
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m8</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
disable
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m9</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
rm_file
kill_s
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  in_huawei<span class="token punctuation">)</span>
    m1 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  in_ali<span class="token punctuation">)</span>
    m2 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  uni<span class="token punctuation">)</span>
    m3 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  start<span class="token punctuation">)</span>
    m4 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  stop<span class="token punctuation">)</span>
    m5 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  status<span class="token punctuation">)</span>
    m6  <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">enable</span><span class="token punctuation">)</span>
    m7 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  disable<span class="token punctuation">)</span>
    m8 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token function">rm</span><span class="token punctuation">)</span>
    m9 <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
  -h<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> { * | in_huawei | in_ali | uni | start | stop | status | enable | disable | rm | -h }&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    main <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-docker.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debian" tabindex="-1"><a class="header-anchor" href="#debian"><span>Debian</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function-name function">kill_s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment"># https://blog.csdn.net/qq_42476834/article/details/124719250</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; PID=<span class="token variable">$$</span>,PPID=<span class="token environment constant">$PPID</span>&quot;</span>
  <span class="token comment"># 2结束进程，3退出，9强制结束进程</span>
  <span class="token comment"># kill -2 $$ #|| kill -3 $$ || kill -9 $$</span>
  <span class="token function">killall</span> <span class="token parameter variable">-2</span> <span class="token function">tail</span>
<span class="token punctuation">}</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 启动中 ...&quot;</span>
  systemctl start <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 重新启动中 ...&quot;</span>
  systemctl restart <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 停止进程中 ...&quot;</span>
  systemctl stop <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 停止进程成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 开启自动启动 ...&quot;</span>
  systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
  systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 开启自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 关闭自动启动 ...&quot;</span>
  systemctl disable <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 关闭自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前状态 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>systemctl status <span class="token function">docker</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">get_v</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前版本&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token parameter variable">-v</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">waiting_input_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token function-name function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 准备卸载旧版本&quot;</span>
<span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io docker-compose-plugin
<span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">install_tool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 安装依赖 ...&quot;</span>
  <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> gnupg2 software-properties-common lsb-release
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token punctuation">}</span>


<span class="token function-name function">daemon_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 设置镜像加速 ...&quot;</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;https://04eo9xup.mirror.aliyuncs.com&quot;,
    &quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;
  ]
}
EOF</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; 写入文件[/etc/docker/daemon.json] 成功！<span class="token entity" title="\\n">\\n</span>等待重新加载本地文件...&quot;</span>
systemctl daemon-reload
<span class="token function">sleep</span> <span class="token number">5</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新加载完成。&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">huawei_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 华为源 配置&amp;安装&quot;</span>
  install_tool
<span class="token comment">##########信任Docker的GPG公钥:</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://repo.huaweicloud.com/docker-ce/linux/debian/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg

<span class="token comment">##########添加软件仓库:设置 稳定 存储库</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://repo.huaweicloud.com/docker-ce/linux/debian <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null

<span class="token function">apt-get</span> update
<span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 查看版本 ...&quot;</span>
<span class="token function">apt-cache</span> madison docker-ce
<span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  正在安装 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  waiting_input_version
  <span class="token comment"># Step 4: 开启Docker服务</span>
  <span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>
  start
  <span class="token function">sleep</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">enable</span>
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  status
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  daemon_reload
  restart
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> jf123
  <span class="token function">docker</span> images
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token punctuation">}</span>


<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; docker 安装&quot;</span>
  uninstall
  huawei_install
  get_v
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">#  kill_s</span>
<span class="token punctuation">}</span>


<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  *<span class="token punctuation">)</span>
    main
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function i(c,o){return s(),a("div",null,p)}const k=n(t,[["render",i],["__file","auto-install-script.html.vue"]]),d=JSON.parse('{"path":"/docker/auto-install-script.html","title":"一键安装docker脚本","lang":"zh-CN","frontmatter":{"icon":"docker1","title":"一键安装docker脚本","category":["Docker"],"headerDepth":5,"date":"2022-05-31T00:00:00.000Z","order":1,"tag":["docker","dockerfile"],"description":"使用脚本一键安装 Docker","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/docker/auto-install-script.html"}],["meta",{"property":"og:title","content":"一键安装docker脚本"}],["meta",{"property":"og:description","content":"使用脚本一键安装 Docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T09:56:12.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"dockerfile"}],["meta",{"property":"article:published_time","content":"2022-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-07T09:56:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一键安装docker脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-07T09:56:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"CentOS","slug":"centos","link":"#centos","children":[]},{"level":2,"title":"Debian","slug":"debian","link":"#debian","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1709805372000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":3}]},"readingTime":{"minutes":5.74,"words":1722},"filePathRelative":"docker/auto-install-script.md","localizedDate":"2022年5月31日","excerpt":"<p>使用脚本一键安装 Docker</p>\\n","autoDesc":true}');export{k as comp,d as data};
