import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as p,b as s,e as n,d as e,a as t}from"./app-D1uezr0R.js";const c={},r=s("p",null,"监控ElasticSearch进程异常的脚本",-1),d={href:"https://mp.weixin.qq.com/s/BQknL20q4P6K2zJJuYi9xg",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="服务器配置免密钥环境准备" tabindex="-1"><a class="header-anchor" href="#服务器配置免密钥环境准备"><span>服务器配置免密钥环境准备</span></a></h2><h3 id="配置hosts映射" tabindex="-1"><a class="header-anchor" href="#配置hosts映射"><span>配置hosts映射</span></a></h3><p>配置免密钥前，需要在服务器的 hosts 文件中配置目标主机名称与 IP 对应关系。</p><p><code>vim /etc/hosts</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IP1 hostname1
IP2 hostname2
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <em>mianmiyaojiaoben.zip</em> 安装包解压在当前目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/jiaoben
<span class="token function">unzip</span> mianmiyaojiaoben.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <em>mianmiyao_config</em> 配置文件，添加目标主机名称与目标主机密码，通过用免密钥的脚本来调用。</p><p><code>vim mianmiyao_config</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>AllHosts=hostname1,hostname2
Passwd=&#39;test23!\\@Test^&amp;*&#39;,&#39;test23!\\@Test^&amp;*&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件中，需注意：</p><ul><li><p><strong>AllHosts</strong>：可配置当前主机通往目标主机的主机名，可以免秘钥自身，数量不限。多台目标主机需以英文逗号隔开</p></li><li><p><strong>Passwd</strong>：主机所对应的密码，顺序需要与主机顺序对应</p></li><li><p>如果原密码为：test23!@Test^&amp;*，则密码字符带有特殊符号可以用 \\ 符转义</p></li></ul>`,12),v={id:"mianmiyao-sh-脚本文件内容",tabindex:"-1"},m={class:"header-anchor",href:"#mianmiyao-sh-脚本文件内容"},k={href:"http://mianmiyao.sh",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><code>vim mianmiyao.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash -x</span>
<span class="token builtin class-name">source</span> mianmiyao_config
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">expect</span> expect-devel
<span class="token comment">#rm -rf /root/.ssh/*</span>
/usr/bin/expect <span class="token parameter variable">-d</span> <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
set timeout 100
spawn ssh-keygen -t rsa
expect {
&quot;*id_rsa):&quot; { send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue }
&quot;*(y/n)?&quot; { send &quot;y<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue }
&quot;*passphrase)*&quot; { send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue }
&quot;*again:&quot; { send &quot;<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue }
&quot;*-------+&quot; { send &quot;<span class="token entity" title="\\r">\\r</span>&quot;}
}
expect eof
EOF</span>

<span class="token assign-left variable">hostsarr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">\${hosts<span class="token operator">/</span><span class="token operator">/</span><span class="token operator">,</span><span class="token operator">/</span> }</span><span class="token punctuation">)</span>
<span class="token assign-left variable">passwdarr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">\${passwd<span class="token operator">/</span><span class="token operator">/</span><span class="token operator">,</span><span class="token operator">/</span> }</span><span class="token punctuation">)</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>hostsarr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>  
<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>num<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span>  
<span class="token keyword">do</span>  
    /usr/bin/expect <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
    set timeout 100
    spawn ssh-copy-id <span class="token variable">\${hostsarr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
    expect {
    &quot;*(yes/no)?&quot; { send &quot;yes<span class="token entity" title="\\r">\\r</span>&quot;; exp_continue }
    &quot;*password:&quot; { send &quot;<span class="token variable">\${passwdarr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span><span class="token entity" title="\\r">\\r</span>&quot;; exp_continue }
    &quot;*authorized_keys*&quot; { send &quot;<span class="token entity" title="\\r">\\r</span>&quot;}
    }
    expect eof
    exit
EOF</span>
<span class="token keyword">done</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>mianmiyao.sh</code> 文件添加执行权限并执行此脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x mianmiyao.sh
./mianmiyao.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本执行完毕后，可以先手动执行如下命令，如无需输入密码跳转到对应的目标服务器时，则表示成功。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> hostname2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务器部署监测-elasticsearch-环境准备" tabindex="-1"><a class="header-anchor" href="#服务器部署监测-elasticsearch-环境准备"><span>服务器部署监测 ElasticSearch 环境准备</span></a></h2><p>将 cpufreedisk_config 配置文件添加对应 ES 集群主机名、ES 端口、ES 主节点服务器主机名。</p><p><code>vim cpufreedisk_config</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 所有 ES 集群的主机名，用英文逗号分隔，需要在免密钥机器上执行</span>
<span class="token assign-left variable">EsHosts</span><span class="token operator">=</span>hostname1,hostname2

<span class="token comment"># ES 端口</span>
<span class="token assign-left variable">EsPort</span><span class="token operator">=</span><span class="token number">9200</span>

<span class="token comment"># ES 主节点服务器的主机名</span>
<span class="token assign-left variable">EsMaster</span><span class="token operator">=</span>hostname1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),h={href:"http://cpufreedisk.sh",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"ElasticSearch",-1),f=s("em",null,"/usr/local/jiaoben/",-1),y=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># @Time    : 2023/02/01</span>
<span class="token comment"># @Author  : JackTian</span>
<span class="token comment"># @File    : cpufreedisk.sh</span>
<span class="token comment"># @Desc    : 使用该脚本监控 ES 系统程序假死、挂掉、异常及服务器断网、宕机服务器恢复后，程序做判断恢复/检测服务器cpu内存磁盘。</span>
<span class="token comment"># 使用前提：ES 集群服务器配置免密钥</span>
<span class="token comment"># 使用方法：将 cpufreedisk.sh 脚本放置 ES 服务器的 /usr/local/jiaoben/ 目录下、在 cpufreedisk_config 中配置 ES 集群的主机名、端口、ES 主节点服务器的主机名</span>
<span class="token comment"># 设置定时任务（可以事先手动执行）</span>
<span class="token comment"># 0 6 * * * source /etc/profile &amp;&amp; cd /usr/local/jiaoben &amp;&amp; ./cpufreedisk.sh</span>
<span class="token builtin class-name">source</span> /usr/local/jiaoben/cpufreedisk_config

<span class="token keyword">function</span> <span class="token function-name function">esStatus</span>
<span class="token punctuation">{</span>
<span class="token function">curl</span> --connect-timeout <span class="token number">30</span> <span class="token parameter variable">-m</span> <span class="token number">60</span> <span class="token variable">$1</span><span class="token builtin class-name">:</span><span class="token variable">$esport</span> <span class="token operator">&gt;</span> resultEsCurl.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> resultEsCurl.log <span class="token operator">|</span> <span class="token function">grep</span> cluster_name<span class="token variable">\`</span></span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">esLost</span>
<span class="token punctuation">{</span>
<span class="token assign-left variable">iptemp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /etc/hosts <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> $1 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;^[^#]&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token function">curl</span> --connect-timeout <span class="token number">30</span> <span class="token parameter variable">-m</span> <span class="token number">60</span> <span class="token variable">$esMaster</span><span class="token builtin class-name">:</span><span class="token variable">$esport</span>/_cat/nodes?v <span class="token operator">|</span> <span class="token function">grep</span> <span class="token variable">$iptemp</span> <span class="token operator">&gt;</span> resultEsCurl1.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> resultEsCurl1.log<span class="token variable">\`</span></span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">esDie</span>
<span class="token punctuation">{</span>
<span class="token function">ssh</span> <span class="token variable">$1</span> <span class="token string">&quot;source /etc/profile &amp;&amp; jps | grep Elasticsearch | awk &#39;{print \\<span class="token variable">$1</span>}&#39; | xargs&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">restart</span>
<span class="token punctuation">{</span>
<span class="token function">ssh</span> <span class="token variable">$1</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
echo &quot;请手动启动 ES 进程&quot;
exit
EOF</span>
<span class="token punctuation">}</span>


<span class="token assign-left variable">today</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">todaytime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>
<span class="token comment">#针对 ES 做假死、宕机、挂掉，做日志记录和处理</span>
<span class="token assign-left variable">serverroothostname</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">\${esHosts<span class="token operator">/</span><span class="token operator">/</span><span class="token operator">,</span><span class="token operator">/</span> }</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">rootHost</span> <span class="token keyword">in</span> <span class="token variable">\${serverroothostname<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">esStatusResult</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>esStatus $rootHost<span class="token variable">\`</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$rootHost</span> 的状态为: <span class="token variable">$esStatusResult</span>&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$esStatusResult</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token assign-left variable">esLostResult</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>esLost $rootHost<span class="token variable">\`</span></span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$rootHost</span> 的状态为: <span class="token variable">$esLostResult</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$esLostResult</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;ES 运行状态正常。&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$rootHost</span> 脱离集群。&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${todaytime}</span>ES的<span class="token variable">\${rootHost}</span>节点脱离集群。请人工排查&quot;</span> <span class="token operator">&gt;&gt;</span> /usr/local/jiaoben/ESmanager.log
                        restart <span class="token variable">$rootHost</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${todaytime}</span>xxx系统<span class="token variable">$rootHost</span> 的 ES 进程运行状态异常，启动重启中...&quot;</span> <span class="token operator">&gt;&gt;</span> /usr/local/jiaoben/ESmanager.log
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${todaytime}</span>xxx系统<span class="token variable">$rootHost</span> 重启&quot;</span> <span class="token operator">&gt;&gt;</span> /usr/local/jiaoben/ESmanager.log

<span class="token function">ssh</span> <span class="token variable">$rootHost</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span>/usr/local/jiaoben/ESmanager.log</span>
        mkdir -p /usr/local/jiaoben/
        cd /usr/local/jiaoben/
        echo &quot;--------------------------------------服务器分割线-------------------------------------------&quot;
        echo &quot;<span class="token variable">$rootHost</span>磁盘信息&quot;
        df -h
        echo &quot;<span class="token variable">$rootHost</span>内存信息（单位为：G）&quot;
        free -h
        echo &quot;<span class="token variable">$rootHost</span>的CPU信息&quot;
        vmstat
        exit
EOF</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
                        <span class="token assign-left variable">esDieResult</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>esDie $rootHost<span class="token variable">\`</span></span>
                        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$esDieResult</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
                        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${todaytime}</span>xxx系统 ES 出现假死，已执行重启临时解决，详情参看日志&quot;</span> <span class="token operator">&gt;&gt;</span> /usr/local/jiaoben/ESmanager.log
                        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${todaytime}</span>xxx系统 ES 未启动，已执行重启临时解决，详情参看日志&quot;</span> <span class="token operator">&gt;&gt;</span> /usr/local/jiaoben/ESmanager.log
                        <span class="token keyword">fi</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${todaytime}</span>xxx系统 ES 服务器疑似宕机：无法 ssh 登录&quot;</span> <span class="token operator">&gt;&gt;</span> /usr/local/jiaoben/ESmanager.log
        <span class="token keyword">fi</span>
        restart <span class="token variable">$rootHost</span>
    <span class="token keyword">fi</span>

<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>cpufreedisk.sh</code> 脚本文件添加可执行权限并执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x cpufreedisk.sh
./cpufreedisk.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设定周期性定时任务，每天定时执行。</p><blockquote><p>使用该脚本监控 ES 系统程序假死、挂掉、异常及服务器断网、宕机服务器恢复后，程序做判断恢复/检测服务器cpu内存磁盘。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token number">0</span> <span class="token number">6</span> * * * <span class="token builtin class-name">source</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/jiaoben <span class="token operator">&amp;&amp;</span> ./cpufreedisk.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function q(x,E){const a=l("ExternalLinkIcon");return o(),p("div",null,[r,s("p",null,[s("a",d,[n("以下文章来自公众号：杰哥的IT之旅 ，作者JackTian"),e(a)])]),u,s("h3",v,[s("a",m,[s("span",null,[s("a",k,[n("mianmiyao.sh"),e(a)]),n(" 脚本文件内容")])])]),b,s("p",null,[n("将 "),s("em",null,[s("a",h,[n("cpufreedisk.sh"),e(a)])]),n(" 脚本文件放入 "),g,n(" 服务器的 "),f,n(" 目录下")]),y])}const $=i(c,[["render",q],["__file","monitor-elasticsearch.html.vue"]]),w=JSON.parse('{"path":"/linux/monitor-elasticsearch.html","title":"监控ElasticSearch进程异常的脚本","lang":"zh-CN","frontmatter":{"icon":"linux","title":"监控ElasticSearch进程异常的脚本","category":["Linux"],"headerDepth":5,"date":"2023-04-25T00:00:00.000Z","tag":["Linux","ElasticSearch"],"description":"监控ElasticSearch进程异常的脚本","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/monitor-elasticsearch.html"}],["meta",{"property":"og:title","content":"监控ElasticSearch进程异常的脚本"}],["meta",{"property":"og:description","content":"监控ElasticSearch进程异常的脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"ElasticSearch"}],["meta",{"property":"article:published_time","content":"2023-04-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"监控ElasticSearch进程异常的脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"服务器配置免密钥环境准备","slug":"服务器配置免密钥环境准备","link":"#服务器配置免密钥环境准备","children":[{"level":3,"title":"配置hosts映射","slug":"配置hosts映射","link":"#配置hosts映射","children":[]},{"level":3,"title":"mianmiyao.sh 脚本文件内容","slug":"mianmiyao-sh-脚本文件内容","link":"#mianmiyao-sh-脚本文件内容","children":[]}]},{"level":2,"title":"服务器部署监测 ElasticSearch 环境准备","slug":"服务器部署监测-elasticsearch-环境准备","link":"#服务器部署监测-elasticsearch-环境准备","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":3.73,"words":1120},"filePathRelative":"linux/monitor-elasticsearch.md","localizedDate":"2023年4月25日","excerpt":"<p>监控ElasticSearch进程异常的脚本</p>\\n","autoDesc":true}');export{$ as comp,w as data};
