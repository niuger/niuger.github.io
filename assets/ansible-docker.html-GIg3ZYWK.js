import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-D1uezr0R.js";const t={},l=e(`<p>Ansible安装docker</p><h1 id="ansible安装docker" tabindex="-1"><a class="header-anchor" href="#ansible安装docker"><span>Ansible安装docker</span></a></h1><h2 id="设置主机清单-vim-etc-ansible-hosts" tabindex="-1"><a class="header-anchor" href="#设置主机清单-vim-etc-ansible-hosts"><span>设置主机清单 <code>vim /etc/ansible/hosts</code></span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[docker]
192.168.0.[8:10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-在roles目录下生成对应的目录结构" tabindex="-1"><a class="header-anchor" href="#_1-在roles目录下生成对应的目录结构"><span>① 在<code>roles</code>目录下生成对应的目录结构</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy role init dockekr</span>
- Role dockekr was created successfully

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ls</span>
dockekr  docker.yml  mysql.yml  <span class="token function">docker</span>  docker.yml

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># cat docker.yml</span>
---
- hosts: <span class="token function">docker</span>
  remote_user: root
  roles:
    - <span class="token function">docker</span>


<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># tree dockekr/</span>
docker/
├── defaults
│   └── main.yml
├── files
│   ├── daemon.json
│   └── install_docker.sh
├── tasks
│   ├── install.yml
│   ├── main.yml
│   ├── restart.yml
│   ├── start.yml
│   ├── status.yml
│   ├── stop.yml
│   └── uninstall.yml
└── vars
    └── main.yml


<span class="token number">8</span> directories, <span class="token number">8</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-定义-tasks-任务文件" tabindex="-1"><a class="header-anchor" href="#_2-定义-tasks-任务文件"><span>② 定义 tasks 任务文件</span></a></h3><p>vim /etc/ansible/roles/docker/tasks/main.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> install.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>install.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install docker
  <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/install_docker.sh *
  <span class="token comment">#yum -y install docker-ce-20.10.17-3.el7 docker-ce-cli-20.10.17-3.el7 containerd.io docker-compose-plugin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>start.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start docker service
      <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/install_docker.sh start
<span class="token comment">#      shell: systemctl start docker</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> startdocker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>stop.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> stop docker service
      <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/install_docker.sh stop
<span class="token comment">#      shell: systemctl stop docker</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> stopdocker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>restart.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart docker service
      <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/install_docker.sh restart
<span class="token comment">#      shell: systemctl restart docker</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> restartdocker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>status.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> status docker service
      <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/install_docker.sh status
<span class="token comment">#      shell: systemctl status docker</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> statusdocker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>reload.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> reload docker service
      <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/install_docker.sh reload
<span class="token comment">#      shell: systemctl daemon-reload</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> reloaddocker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>uninstall.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> uninstall docker
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> yum remove <span class="token punctuation">-</span>y docker<span class="token punctuation">-</span>ce docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>cli containerd.io docker<span class="token punctuation">-</span>compose<span class="token punctuation">-</span>plugin
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> uninstalldocker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible-playbook ./docker/tasks/uninstall.yml</p></blockquote><h3 id="_3-编写安装-shell-脚本" tabindex="-1"><a class="header-anchor" href="#_3-编写安装-shell-脚本"><span>③ 编写安装 shell 脚本</span></a></h3><p>vim files/install_docker.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;install-docker.log&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./install-docker.log
<span class="token keyword">fi</span>
<span class="token function">touch</span> ./install-docker.log

<span class="token function-name function">kill_s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment"># https://blog.csdn.net/qq_42476834/article/details/124719250</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; PID=<span class="token variable">$$</span>,PPID=<span class="token environment constant">$PPID</span>&quot;</span>
  <span class="token comment"># 0 exit退出，2结束进程，3退出，9强制结束进程，15正常结束进程</span>
  <span class="token comment">#kill -15 $$ #|| kill -3 $$ || kill -9 $$</span>
  <span class="token function">killall</span> <span class="token parameter variable">-15</span> <span class="token function">tail</span>
  <span class="token comment">#exit 0</span>
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
<span class="token function-name function">stops</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
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
<span class="token comment">#  echo -ne &quot;[\\e[0;31m15\\e[0m]秒后将自动安装最新版，自定义请输入，如：3:20.10.17-3.el7\\r&quot;</span>
<span class="token comment">#  sleep 15;</span>
<span class="token comment">#  if read -p &quot;请输入版本:&quot; version;</span>
<span class="token comment">#  then</span>
<span class="token comment">#    echo &quot;----&gt;  自定义版本为:\${version}&quot;</span>
<span class="token comment">#     yum install -y docker-ce-3:20.10.17-3.el7 docker-ce-cli-3:20.10.17-3.el7 containerd.io docker-compose-plugin</span>
<span class="token comment">#     yum install -y docker-ce-\${version}</span>
<span class="token comment">#  else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  自动安装最新版本&quot;</span>
    yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
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
  yum remove <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
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
  yum makecache <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
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
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>查看docker镜像列表：<span class="token entity" title="\\n">\\n</span>&quot;</span>
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
  yum makecache <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
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
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>查看docker镜像列表：<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">docker</span> images
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; docker 安装&quot;</span>
  uninstall <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  huawei_install <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  get_v
  <span class="token function">sleep</span> <span class="token number">5</span><span class="token punctuation">;</span>
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
stops
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
<span class="token function-name function">m10</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
restart
kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m11</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
daemon_reload
kill_s
<span class="token punctuation">}</span>


<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  in_huawei<span class="token punctuation">)</span>
    m1 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  in_ali<span class="token punctuation">)</span>
    m2 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  uni<span class="token punctuation">)</span>
    m3 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  start<span class="token punctuation">)</span>
    m4 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  restart<span class="token punctuation">)</span>
    m10 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  stop<span class="token punctuation">)</span>
    m5 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  status<span class="token punctuation">)</span>
    m6  <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">enable</span><span class="token punctuation">)</span>
    m7 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  disable<span class="token punctuation">)</span>
    m8 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  reload<span class="token punctuation">)</span>
    m11 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>  
  <span class="token function">rm</span><span class="token punctuation">)</span>
    m9 <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  -h<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> { * | in_huawei | in_ali | uni | start | restart | stop | status | enable | disable | reload | rm | -h }&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    main <span class="token operator">&gt;&gt;</span> ./install-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-定义-vars-变量文件" tabindex="-1"><a class="header-anchor" href="#_3-定义-vars-变量文件"><span>③ 定义 vars 变量文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin docker<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>
---
<span class="token comment"># 变量==1安装最新版本，!=1则安装变量指定的版本（20.10.17-3.el7）</span>
docker_version: <span class="token number">20.10</span>.17-3.el7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-定义-docker-剧本文件" tabindex="-1"><a class="header-anchor" href="#_4-定义-docker-剧本文件"><span>④ 定义 docker 剧本文件</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># vim ./docker.yml</span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> docker
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-启动剧本" tabindex="-1"><a class="header-anchor" href="#_6-启动剧本"><span>⑥ 启动剧本</span></a></h3><p>剧本定义完成以后，我们就可以来启动服务了：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook docker.yml</span>

PLAY <span class="token punctuation">[</span>docker<span class="token punctuation">]</span> *************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> ****************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.8<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.10<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.9<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>install docker<span class="token punctuation">]</span> *****************************************************************************
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.9<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.10<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.0.8<span class="token punctuation">]</span>

PLAY RECAP ****************************************************************************************
<span class="token number">192.168</span>.0.10               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">192.168</span>.0.8                <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">192.168</span>.0.9                <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点监控进度</p><p>tail -f /root/install-docker.log</p>`,36),i=[l];function p(c,o){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","ansible-docker.html.vue"]]),k=JSON.parse('{"path":"/linux/ansible/ansible-docker.html","title":"Ansible安装docker","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Ansible安装docker","category":["Linux"],"headerDepth":5,"date":"2022-07-30T00:00:00.000Z","order":6,"tag":["Ansible"],"description":"Ansible安装docker","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/ansible/ansible-docker.html"}],["meta",{"property":"og:title","content":"Ansible安装docker"}],["meta",{"property":"og:description","content":"Ansible安装docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Ansible"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ansible安装docker\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"设置主机清单 vim /etc/ansible/hosts","slug":"设置主机清单-vim-etc-ansible-hosts","link":"#设置主机清单-vim-etc-ansible-hosts","children":[{"level":3,"title":"① 在roles目录下生成对应的目录结构","slug":"_1-在roles目录下生成对应的目录结构","link":"#_1-在roles目录下生成对应的目录结构","children":[]},{"level":3,"title":"② 定义 tasks 任务文件","slug":"_2-定义-tasks-任务文件","link":"#_2-定义-tasks-任务文件","children":[]},{"level":3,"title":"③ 编写安装 shell 脚本","slug":"_3-编写安装-shell-脚本","link":"#_3-编写安装-shell-脚本","children":[]},{"level":3,"title":"③ 定义 vars 变量文件","slug":"_3-定义-vars-变量文件","link":"#_3-定义-vars-变量文件","children":[]},{"level":3,"title":"④ 定义 docker 剧本文件","slug":"_4-定义-docker-剧本文件","link":"#_4-定义-docker-剧本文件","children":[]},{"level":3,"title":"⑥ 启动剧本","slug":"_6-启动剧本","link":"#_6-启动剧本","children":[]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":5.13,"words":1540},"filePathRelative":"linux/ansible/ansible-docker.md","localizedDate":"2022年7月30日","excerpt":"<p>Ansible安装docker</p>\\n","autoDesc":true}');export{d as comp,k as data};
