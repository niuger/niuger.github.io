import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c as o,b as n,e as s,d as e,a as t}from"./app-D1uezr0R.js";const c={},r=n("p",null,"k8s集群实用脚本，实现自动化安装部署",-1),u=n("p",null,[n("strong",null,"注意"),s("：请使用"),n("strong",null,"GitBash"),s("运行脚本。")],-1),k={id:"根据centos7模板镜像自动创建集群系统auto-clone-sh",tabindex:"-1"},d={class:"header-anchor",href:"#根据centos7模板镜像自动创建集群系统auto-clone-sh"},v={href:"http://xn--CentOS7auto-clone-od61ai4pt4cpu8hjqukmvk5d2spgs7jnxkthfe0t2t1l1fj.sh",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pan.baidu.com/s/1K84oi2qsF33WnNrgqbJ_NA",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"1234",-1),g=t(`<h3 id="文件放置规范" tabindex="-1"><a class="header-anchor" href="#文件放置规范"><span>文件放置规范</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>E:\\\\k8s
|-- CentOS7		#CentOS7模板镜像，已经配置好内核版本、yum源等。
|------ CentOS7.vmx
|------ CentOS7.vmxf
|------ CentOS7.vmdk
|
|-- master		#auto_VM克隆CentOS7生成的master
|------ master.vmx
|------ master.vmxf
|------ master.vmdk
|
|-- node1		#auto_VM克隆CentOS7生成的node1
|------ node1.vmx
|------ node1.vmxf
|------ node1.vmdk
|
|-- node2: ...
|-- auto-clone.sh	#自动克隆系统脚本，与CentOS7模板镜像处于同一位置。
|-- kill.bat	#结束vmware进程
|-- CentOS7.7z	#打包CentOS7模板镜像，使用时需要解压
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={id:"auto-clone-sh",tabindex:"-1"},h={class:"header-anchor",href:"#auto-clone-sh"},q={href:"http://auto-clone.sh",target:"_blank",rel:"noopener noreferrer"},y=t(`<details class="hint-container details"><summary>点击查看代码</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 把first.sh脚本手动上传到CentOS7系统里的/root/first.sh，chmod -R 755 ./first.sh</span>
<span class="token comment"># 在vmware手动克隆虚拟机，并开机，修改IP+hostname</span>
<span class="token comment"># vmrun 命令的语法：https://docs.vmware.com/cn/VMware-Fusion/13/com.vmware.fusion.using.doc/GUID-24F54E24-EFB0-4E94-8A07-2AD791F0E497.html</span>

<span class="token assign-left variable">host_master</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">130</span><span class="token punctuation">)</span>
<span class="token assign-left variable">host_node</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">131</span> <span class="token number">132</span><span class="token punctuation">)</span>
<span class="token assign-left variable">gu</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
<span class="token assign-left variable">gp</span><span class="token operator">=</span><span class="token string">&quot;123456a&quot;</span>

<span class="token comment">#模板镜像位置，可自由修改</span>
<span class="token assign-left variable">VMX_FILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/CentOS7/CentOS7.vmx&quot;</span>
<span class="token assign-left variable">VMX_FILE_2</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>CentOS7<span class="token entity" title="\\\\">\\\\</span>CentOS7.vmx&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">\${VMX_FILE}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 没有模板镜像 &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># vmrun.exe 位置</span>
<span class="token assign-left variable">PATH_VMRUN_EXE_CMD</span><span class="token operator">=</span><span class="token string">&quot;D:<span class="token entity" title="\\\\">\\\\</span>VMware<span class="token entity" title="\\\\">\\\\</span>vmrun.exe&quot;</span>
<span class="token comment"># 集群机器位置</span>
<span class="token assign-left variable">K8S_CENTOS7_CMD</span><span class="token operator">=</span><span class="token string">&quot;F:<span class="token entity" title="\\\\">\\\\</span>vm<span class="token entity" title="\\\\">\\\\</span>k8s&quot;</span>
<span class="token comment">#服务器名称</span>
<span class="token assign-left variable">MASTER_NAME</span><span class="token operator">=</span><span class="token string">&quot;master&quot;</span>
<span class="token assign-left variable">NODE_NAME</span><span class="token operator">=</span><span class="token string">&quot;node&quot;</span>

<span class="token comment"># master 修改IP地址</span>
<span class="token function-name function">set_clone_master</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span>
    <span class="token operator">&gt;</span>  <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
	<span class="token comment"># 创建快照</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws snapshot <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token variable">\${VMX_FILE_2}</span> centos7init&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
	<span class="token comment"># 根据快照来clone镜像</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws clone <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token variable">\${VMX_FILE_2}</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${MASTER_NAME}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${MASTER_NAME}</span>.vmx full -snapshot=centos7init -cloneName=<span class="token variable">\${MASTER_NAME}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
	<span class="token comment"># 启动虚拟机 gui：打开vm应用；nogui：不打开vm应用</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws start <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${MASTER_NAME}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${MASTER_NAME}</span>.vmx&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws -gu <span class="token variable">\${gu}</span> -gp <span class="token variable">\${gp}</span> runProgramInGuest <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${MASTER_NAME}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${MASTER_NAME}</span>.vmx<span class="token entity" title="\\&quot;">\\&quot;</span> /bin/bash /root/first.sh 13<span class="token variable">\${i}</span> <span class="token variable">\${MASTER_NAME}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;ping -n 6 192.168.100.13<span class="token variable">\${i}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;exit&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
  <span class="token keyword">done</span>

<span class="token punctuation">}</span>

<span class="token comment"># node 修改IP地址</span>
<span class="token function-name function">set_clone_node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span>
    <span class="token operator">&gt;</span>  <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
	<span class="token comment"># 根据快照来clone镜像</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws clone <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token variable">\${VMX_FILE_2}</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span>.vmx full -snapshot=centos7init -cloneName=<span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
	<span class="token comment"># 启动虚拟机 gui：打开vm应用；nogui：不打开vm应用</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws start <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span>.vmx&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws -gu <span class="token variable">\${gu}</span> -gp <span class="token variable">\${gp}</span> runProgramInGuest <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span><span class="token entity" title="\\\\">\\\\</span><span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span>.vmx<span class="token entity" title="\\&quot;">\\&quot;</span> /bin/bash /root/first.sh 13<span class="token variable">\${i}</span> <span class="token variable">\${NODE_NAME}</span><span class="token variable">\${i}</span>&quot;</span> <span class="token operator">&gt;&gt;</span>  <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;ping -n 6 192.168.100.13<span class="token variable">\${i}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;exit&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>set_ip_hostname13<span class="token variable">\${i}</span>.bat
  <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  set_clone_master
  set_clone_node
  <span class="token comment"># 删除快照</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${PATH_VMRUN_EXE_CMD}</span> -T ws deleteSnapshot <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token variable">\${VMX_FILE_2}</span> centos7init&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${K8S_CENTOS7_CMD}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>delete_Snapshot.bat
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;-------------------执行 bat 脚本---------------------&quot;</span>
  <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">command</span><span class="token variable">\`</span></span> ./set_ip_hostname130.bat
  <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">command</span><span class="token variable">\`</span></span> ./set_ip_hostname131.bat
  <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">command</span><span class="token variable">\`</span></span> ./set_ip_hostname132.bat
  <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">command</span><span class="token variable">\`</span></span> ./delete_Snapshot.bat
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./set_ip_hostname13*.bat
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./delete_Snapshot.bat
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
    master<span class="token punctuation">)</span>
        set_clone_master
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token function">node</span><span class="token punctuation">)</span>
        set_clone_node
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
	  h<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh auto_clone.sh [选项]; 选项【master【clone master系统】；node【clone node系统】；】&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        main
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="first-sh设置主机名-网卡ip-uuid-hosts" tabindex="-1"><a class="header-anchor" href="#first-sh设置主机名-网卡ip-uuid-hosts"><span>first.sh设置主机名-网卡IP-UUID-hosts</span></a></h3><p>配合<code>auto-clone.sh</code>脚本使用，来设置<code>主机名，网卡IP、UUID、hosts</code></p><details class="hint-container details"><summary>点击查看代码</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 把first.sh脚本手动上传到CentOS7系统里的/root/first.sh，chmod -R 755 ./first.sh</span>
<span class="token comment"># 复制到 vm-centos 虚拟机 /root/first.sh 里，配合 auto-clone.sh 使用</span>

<span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">hostname</span><span class="token operator">=</span><span class="token variable">$2</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>----------------------------------&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;请求参数：IP：<span class="token variable">\${ip}</span>，HostName：<span class="token variable">\${hostname}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------------------------&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> ip hostname&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token keyword">fi</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;ccb173d2-9470-4fc3-b894-cce7029f0455&quot;</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>uuidgen ens33<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;new UUID=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${UUID}</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span> first.log


<span class="token keyword">function</span> <span class="token function-name function">set_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  
<span class="token comment"># 设置IP</span>
  <span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&quot;/IPADDR/s#(.*.)\\..*#<span class="token entity" title="\\1">\\1</span>.<span class="token variable">\${ip}</span><span class="token entity" title="\\&quot;">\\&quot;</span>#&quot;</span> /etc/sysconfig/network-scripts/ifcfg-ens33
<span class="token comment"># 设置UUID</span>
  <span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&quot;s/UUID=.*/UUID=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${UUID}</span><span class="token entity" title="\\&quot;">\\&quot;</span>/&quot;</span> /etc/sysconfig/network-scripts/ifcfg-ens33

<span class="token comment"># 设置hosts  </span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/hosts <span class="token operator">&gt;&gt;</span> first.log</span>
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.100.130 master
192.168.100.131 node1
192.168.100.132 node2
EOF</span>
  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------------------------------------&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  <span class="token comment"># （sed -n &#39;3,100p）读取文件的3-100行</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;cat /etc/hosts<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;3,100p&#39;</span> /etc/hosts<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;==============================================&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;wait for systemctl restart network.service ...&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  systemctl restart network.service <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;==============================================&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;new IPADDR is : <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span> <span class="token parameter variable">-I</span><span class="token variable">)</span></span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span> first.log 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token function">cat</span> /etc/sysconfig/network-scripts/ifcfg-ens33 <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;==============================================&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function-name function">set_hostname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s#.*#<span class="token variable">\${hostname}</span>#&quot;</span> /etc/hostname
  hostnamectl set-hostname <span class="token variable">\${hostname}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;==============================================&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;new hostname is : <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/hostname<span class="token variable">)</span></span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;==============================================&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token punctuation">}</span>

<span class="token function-name function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  set_hostname
  <span class="token function">sleep</span> <span class="token number">3</span>
  set_ip
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; set_ip &amp; set_hostnameok OK!!  &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&quot;</span> <span class="token operator">&gt;&gt;</span> first.log
<span class="token punctuation">}</span>

main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="kill-bat" tabindex="-1"><a class="header-anchor" href="#kill-bat"><span>kill.bat</span></a></h3><p>结束vmware进程：<code>kill.bat</code></p><div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><pre class="language-bat"><code>@echo off
echo=
for /f &quot;tokens=2 delims= &quot; %%i in (&#39;tasklist  /fi &quot;imagename eq vmware-vmx.exe&quot; /nh&#39;) do taskkill /f /pid %%i
cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化k8s-yum源" tabindex="-1"><a class="header-anchor" href="#初始化k8s-yum源"><span>初始化k8s-yum源</span></a></h2><details class="hint-container details"><summary>点击查看代码</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 创建好的虚拟机初始化配置，如果还没有配置yum源可以运行此脚本。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;./k8s-centos7-yum.log&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./k8s-centos7-yum.log
<span class="token keyword">fi</span>
<span class="token function">touch</span> ./k8s-centos7-yum.log


<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;--&gt; centos7配置&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 删除 /etc/yum.repos.d/&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  rms
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 更新 yum 源&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  yum repolist all
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 下载CentOS-Base.repo&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo  /etc/yum.repos.d/CentOS-Base.repo.backup
  <span class="token comment">#wget -O /etc/yum.repos.d/CentOS-Base.repo https://repo.huaweicloud.com/repository/conf/CentOS-7-reg.repo</span>
  <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
  <span class="token function">ls</span> /etc/yum.repos.d/
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 更新 yum 源&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  yum <span class="token parameter variable">-y</span> clean all <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> makecache <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> update <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> repolist all <span class="token operator">&gt;&gt;</span> ./k8s-centos7-yum.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  
  epelrepo
  
<span class="token comment">#cat -s &lt;&lt;EOF &gt; /etc/yum.repos.d/epel.repo</span>
<span class="token comment">#[epel]</span>
<span class="token comment">#name=Extra Packages for Enterprise Linux 7 - \\$basearch</span>
<span class="token comment">#baseurl=https://repo.huaweicloud.com/epel/7/\\$basearch</span>
<span class="token comment">##metalink=https://mirrors.fedoraproject.org/#metalink?repo=epel-7&amp;arch=$basearch</span>
<span class="token comment">#failovermethod=priority</span>
<span class="token comment">#enabled=1</span>
<span class="token comment">#gpgcheck=1</span>
<span class="token comment">#gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7</span>
<span class="token comment">#EOF</span>

   <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
   <span class="token comment">#sed -i &quot;s/enabled=0/enabled=1/g&quot; /etc/yum.repos.d/CentOS-Base.repo</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  yum <span class="token parameter variable">-y</span> clean all <span class="token operator">&amp;&amp;</span> yum makecache <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> update <span class="token operator">&amp;&amp;</span> yum repolist all
  <span class="token function">ls</span> <span class="token parameter variable">-all</span> /etc/yum.repos.d/
  <span class="token function">killall</span> <span class="token parameter variable">-2</span> <span class="token function">tail</span>
<span class="token punctuation">}</span>

<span class="token function-name function">epelrepo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 查看 epel-release 版本：【<span class="token variable"><span class="token variable">$(</span>yum list <span class="token operator">|</span> <span class="token function">grep</span> epel-release<span class="token variable">)</span></span>】&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 安装 epel-release&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token function">ls</span> /etc/yum.repos.d/
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 修改 epel.repo 为 华为的配置&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /etc/yum.repos.d/epel.repo
  <span class="token function">ls</span> <span class="token parameter variable">-all</span> /etc/yum.repos.d/
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/epel-7.repo http://mirrors.aliyun.com/repo/epel-7.repo
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/#baseurl/baseurl/g&quot;</span> /etc/yum.repos.d/epel.repo
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/metalink/#metalink/g&quot;</span> /etc/yum.repos.d/epel.repo
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s@https\\?://download.fedoraproject.org/pub@https://repo.aliyun.com@g&quot;</span> /etc/yum.repos.d/epel.repo
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/yum.repos.d/epel.repo<span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 更新 yum 源&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  yum <span class="token parameter variable">-y</span> clean all <span class="token operator">&amp;&amp;</span> yum makecache <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> update <span class="token operator">&amp;&amp;</span> yum repolist all
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 删除 epel-testing.repo&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;/etc/yum.repos.d/epel-testing.repo&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /etc/yum.repos.d/epel-testing.repo
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/yum.repos.d/epel-testing.repo
  <span class="token keyword">fi</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/yum.repos.d/CentOS*
 <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/yum.repos.d/elre*
 <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/yum.repos.d/epel*
 yum remove <span class="token parameter variable">-y</span> epel-release
 yum <span class="token parameter variable">-y</span> clean all
 yum <span class="token parameter variable">-y</span> makecache
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  *<span class="token punctuation">)</span>
    main <span class="token operator">&gt;&gt;</span> ./k8s-centos7-yum.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-centos7-yum.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装docker</span></a></h2>`,10),_={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},$=t(`<details class="hint-container details"><summary>点击查看代码</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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
  ali_install <span class="token operator">&gt;&gt;</span> ./k8s-docker.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="k8s基础环境init配置" tabindex="-1"><a class="header-anchor" href="#k8s基础环境init配置"><span>K8S基础环境init配置</span></a></h2><details class="hint-container details"><summary>点击查看代码</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 基础环境配置</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;k8s-init.log&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./k8s-init.log
<span class="token keyword">fi</span>
<span class="token function">touch</span> ./k8s-init.log

<span class="token comment"># k8s基础环境配置：k8s依赖|源</span>
<span class="token function-name function">kill_s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment"># https://blog.csdn.net/qq_42476834/article/details/124719250</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; PID=<span class="token variable">$$</span>,PPID=<span class="token environment constant">$PPID</span>&quot;</span>
  <span class="token comment"># 2结束进程，3退出，9强制结束进程</span>
  <span class="token comment">#|| kill -3 $$ || kill -9 $$</span>
  <span class="token function">kill</span> <span class="token parameter variable">-2</span> <span class="token variable">$$</span>
  <span class="token function">killall</span> <span class="token parameter variable">-2</span> <span class="token function">tail</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rm_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;--&gt; 准备清理：/etc/sysconfig/modules/ipvs.modules：<span class="token entity" title="\\r">\\r</span>&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/sysconfig/modules/ipvs.modules
  <span class="token function">ls</span> /etc/sysconfig/modules/
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;--&gt; 准备清理：/etc/sysctl.d/k8s.conf&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/sysctl.d/k8s.conf
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;--&gt; 准备清理：/etc/modules-load.d/k8s.conf&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/modules-load.d/k8s.conf
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;--&gt; 准备清理：/etc/sysctl.d/10-network-security.conf&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/sysctl.d/10-network-security.conf
  <span class="token function">ls</span> /etc/sysctl.d/
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;--&gt; 准备清理：/etc/yum.repos.d/k8s.repo&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/yum.repos.d/kubernetes.repo
  <span class="token function">ls</span> /etc/yum.repos.d/
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;--&gt; 更新仓库缓存&quot;</span>
  yum clean all <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  yum makecache <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">set_IPVS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 开启 IPVS 支持&quot;</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysconfig/modules/ipvs.modules</span>
#!/bin/bash
ipvs_modules=&quot;ip_vs ip_vs_lc ip_vs_wlc ip_vs_rr ip_vs_wrr ip_vs_lblc ip_vs_lblcr ip_vs_dh ip_vs_sh ip_vs_fo ip_vs_nq ip_vs_sed ip_vs_ftp nf_conntrack&quot;
for kernel_module in <span class="token variable">\${ipvs_modules}</span>; do
  /sbin/modinfo -F filename <span class="token variable">\${kernel_module}</span> &gt; /dev/null 2&gt;&amp;1
  if [ <span class="token variable">$?</span> -eq 0 ]; then
    /sbin/modprobe <span class="token variable">\${kernel_module}</span>
  fi
done
EOF</span>

	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>

	<span class="token function">chmod</span> <span class="token number">755</span> /etc/sysconfig/modules/ipvs.modules
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; start IPVS：[sh /etc/sysconfig/modules/ipvs.modules]&quot;</span>
	<span class="token function">sh</span> /etc/sysconfig/modules/ipvs.modules
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; lsmod | grep ip_vs&quot;</span>
	lsmod <span class="token operator">|</span> <span class="token function">grep</span> ip_vs
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 将桥接的IPv4流量传递到iptables的链</span>
<span class="token comment"># /usr/lib/sysctl.d/00-system.conf 与之相同</span>
<span class="token function-name function">k8s_conf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 允许 iptables 检查桥接流量&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 写入 [/etc/modules-load.d/k8s.conf]&quot;</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/modules-load.d/k8s.conf</span>
overlay
br_netfilter
EOF</span>

	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; modprobe overlay and br_netfilter&quot;</span>
	modprobe overlay
	modprobe br_netfilter
	
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 写入 [/etc/sysctl.d/k8s.conf]&quot;</span>
<span class="token comment">#cat /usr/lib/sysctl.d/00-system.conf 与之相同</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf</span>
# For binary values, 0 is disabled, 1 is enabled
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness=0
EOF</span>

	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; start iptables：[sysctl -p /etc/sysctl.d/k8s.conf]&quot;</span>
	<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/k8s.conf
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; start：[sysctl --system]&quot;</span>
	<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; lsmod | grep br_netfilter&quot;</span>
	lsmod <span class="token operator">|</span> <span class="token function">grep</span> br_netfilter
	lsmod <span class="token operator">|</span> <span class="token function">grep</span> overlay
	<span class="token function">sysctl</span> net.bridge.bridge-nf-call-iptables net.bridge.bridge-nf-call-ip6tables net.ipv4.ip_forward
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">#开启网络安全</span>
<span class="token comment">#与 /usr/lib/sysctl.d/50-default.conf 类似</span>
<span class="token function-name function">k8s_conf_10_network_security_conf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 开启网络安全&quot;</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/10-network-security.conf</span>
net.ipv4.conf.default.rp_filter=1
net.ipv4.conf.all.rp_filter=1
EOF</span>

	<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; start 网络安全：[sysctl --system]&quot;</span>
	<span class="token comment">#生效</span>
	<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">#时间同步</span>
<span class="token function-name function">time_sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 时间同步&quot;</span>
	<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/run/yum.pid
	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> chrony
	systemctl <span class="token builtin class-name">enable</span> chronyd
	systemctl start chronyd
	timedatectl set-ntp <span class="token boolean">true</span>
	timedatectl set-timezone Asia/Shanghai
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 时区状态：timedatectl status&quot;</span>
	timedatectl status
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 检测：chronyc activity -v&quot;</span>
	chronyc activity <span class="token parameter variable">-v</span>
	yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ntpdate
	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ntpsec-ntpdate
	ntpdate time.windows.com
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">k8s_repo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 设置 k8s_repo 仓库源&quot;</span>
<span class="token comment">## 老版配置v1.28部分版本</span>
<span class="token comment">#cat -s &lt;&lt;EOF &gt; /etc/yum.repos.d/kubernetes.repo</span>
<span class="token comment">#[kubernetes]</span>
<span class="token comment">#name=Kubernetes</span>
<span class="token comment">#baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span>
<span class="token comment">#enabled=1</span>
<span class="token comment">#gpgcheck=1</span>
<span class="token comment">#repo_gpgcheck=0</span>
<span class="token comment">#gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span>
<span class="token comment">#EOF</span>

<span class="token comment">## 新版配置v1.24 - v1.29</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/rpm/
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/rpm/repodata/repomd.xml.key
EOF</span>

	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 更新仓库缓存&quot;</span>
	yum <span class="token parameter variable">-y</span> clean all <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token function">sleep</span> <span class="token number">3</span><span class="token punctuation">;</span>
	yum <span class="token parameter variable">-y</span> makecache <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token function">sleep</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token comment">#yum -y update &gt;&gt; ./k8s-init.log 2&gt;&amp;1</span>
	<span class="token comment">#echo -e &quot;\\n&quot;</span>
	<span class="token comment">#sleep 3;</span>
	yum repolist <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">other</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 设置其他选项&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 关闭防火墙：firewalld&quot;</span>
	systemctl stop firewalld
	systemctl disable firewalld
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 禁用selinux&quot;</span>
	setenforce <span class="token number">0</span>
	<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing$/SELINUX=permissive/&#39;</span> /etc/selinux/config
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 永久禁用swap分区：nano /etc/fstab&quot;</span>
	<span class="token function">free</span> <span class="token parameter variable">-m</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>------------&gt; k8s基础环境配置：k8s依赖|仓库源&quot;</span>
	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	<span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/#PermitRootLogin yes/PermitRootLogin yes/g&#39;</span> /etc/ssh/sshd_config
	set_IPVS
	other
	k8s_conf
	k8s_conf_10_network_security_conf
	time_sync
	k8s_repo
	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> socat conntrack ebtables ipset ipvsadm <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;接下来请手动配置SSH&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	kill_s
<span class="token punctuation">}</span>

<span class="token function-name function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	set_IPVS
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	k8s_conf
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	k8s_conf_10_network_security_conf
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	time_sync
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	k8s_repo
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	rm_file  <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	other  <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
	kill_s
<span class="token punctuation">}</span>
<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  set_IPVS<span class="token punctuation">)</span>
    m1 <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  k8s_conf<span class="token punctuation">)</span>
    m2 <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  k8s_conf_net<span class="token punctuation">)</span>
    m3 <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  time_sync<span class="token punctuation">)</span>
    m4 <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  k8s_repo<span class="token punctuation">)</span>
    m5 <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token function">rm</span><span class="token punctuation">)</span>
    m6 <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  other<span class="token punctuation">)</span>
    m7 <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  -h<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> { * | set_IPVS | k8s_conf | k8s_conf_net | time_sync | k8s_repo | rm | -h }&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    main <span class="token operator">&gt;&gt;</span> ./k8s-init.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-init.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="install-k8s" tabindex="-1"><a class="header-anchor" href="#install-k8s"><span>install-k8s</span></a></h2><details class="hint-container details"><summary>点击查看代码</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 安装k8s-1.28.7</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;k8s-install.log&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./k8s-install.log
<span class="token keyword">fi</span>
<span class="token function">touch</span> ./k8s-install.log

<span class="token function-name function">kill_s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment"># https://blog.csdn.net/qq_42476834/article/details/124719250</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; PID=<span class="token variable">$$</span>,PPID=<span class="token environment constant">$PPID</span>&quot;</span>
  <span class="token comment"># 2结束进程，3退出，9强制结束进程</span>
  <span class="token comment">#kill -2 $$ #|| kill -3 $$ || kill -9 $$</span>
  <span class="token function">killall</span> <span class="token parameter variable">-2</span> <span class="token function">tail</span>
<span class="token punctuation">}</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 启动中 ...&quot;</span>
  systemctl start kubelet
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 重新启动中 ...&quot;</span>
  systemctl restart kubelet
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 停止进程中 ...&quot;</span>
  systemctl stop kubelet
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 停止进程成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 开启自动启动 ...&quot;</span>
  systemctl <span class="token builtin class-name">enable</span> kubelet
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 开启自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 关闭自动启动 ...&quot;</span>
  systemctl disable kubelet
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 关闭自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前状态&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>systemctl status kubelet<span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; kubelet.service - kubelet: The Kubernetes Node Agent，属于正常，k8s集群还没有配置完！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">get_v</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前版本&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; kubeadm version&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>kubeadm version<span class="token variable">)</span></span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; kubelet --version&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>kubelet <span class="token parameter variable">--version</span><span class="token variable">)</span></span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; kubectl version&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>kubectl version<span class="token variable">)</span></span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">uni_rm_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; k8s 卸载 stop 服务&quot;</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">service</span> <span class="token keyword">in</span> kube-apiserver kube-controller-manager kubectl kubelet kube-proxy kube-scheduler<span class="token punctuation">;</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; stop <span class="token variable">$service</span>&quot;</span>
    systemctl stop <span class="token variable">$service</span>
  <span class="token keyword">done</span>
  kubectl delete <span class="token function">node</span> <span class="token parameter variable">--all</span>
  kubeadm reset <span class="token parameter variable">-f</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 准备卸载旧版本&quot;</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> kube*<span class="token variable">)</span></span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 软件包 <span class="token variable">\${i}</span> 将被 删除...&quot;</span>
  <span class="token keyword">done</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> kube*<span class="token variable">)</span></span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 正在删除 <span class="token variable">\${i}</span> ...&quot;</span>
     yum remove <span class="token parameter variable">-y</span> <span class="token variable">\${i}</span>
  <span class="token keyword">done</span>

  <span class="token comment">#yum remove -y kubeadm-1.28.7-0 kubelet-1.28.7-0 kubectl-1.28.7-0</span>

  <span class="token comment"># 这里最好不好执行，否则，清除后，重新安装后会找不到【kubeadm: 未找到命令、kubelet: 未找到命令、kubectl: 未找到命令】</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.kube/
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/kubernetes/
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/systemd/system/kubelet.service.d
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/systemd/system/kubelet.service
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/bin/kube*
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/kube*
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/cni
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /opt/cni
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/etcd
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/etcd
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; k8s 卸载完成<span class="token entity" title="\\n">\\n</span>----&gt;更新仓库&quot;</span>
  yum <span class="token parameter variable">-y</span> clean all <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token function">sleep</span> <span class="token number">3</span><span class="token punctuation">;</span>
  yum <span class="token parameter variable">-y</span> makecache <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token function">sleep</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">masters</span><span class="token operator">=</span><span class="token string">&quot;master&quot;</span>
<span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token string">&quot;node&quot;</span>
<span class="token assign-left variable">hostnames</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span><span class="token variable">)</span></span>&quot;</span>
<span class="token assign-left variable">k8sVersion</span><span class="token operator">=</span><span class="token string">&quot;1.28.7&quot;</span>
<span class="token function-name function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; k8s 安装 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 查看 k8s 可用版本&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span>yum list kube*<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">sleep</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token comment">#if [[  \${hostnames} == \${masters}* ]] ; then</span>
  <span class="token comment">#  echo -e &quot;\\n&quot;</span>
  <span class="token comment">#  echo &quot;----&gt; install k8s-\${k8sVersion} for \${hostnames}...&quot;</span>
  <span class="token comment">#  yum install -y kubeadm-\${k8sVersion} kubelet-\${k8sVersion} kubectl-\${k8sVersion}</span>
<span class="token comment">#	sleep 3;</span>
<span class="token comment">#	start</span>
<span class="token comment">#	sleep 10;</span>
<span class="token comment">#	enable</span>
<span class="token comment">#	enable</span>
<span class="token comment">#	sleep 10;</span>
<span class="token comment">#	status</span>
<span class="token comment">#	get_v</span>
<span class="token comment">#	sleep 1;</span>
	<span class="token comment">#--disableexcludes=kubernetes</span>
<span class="token comment">#   echo -e &quot;\\n&quot;</span>
<span class="token comment">#	kill_s</span>
<span class="token comment">#  elif [[ \${hostnames} == \${nodes}[0-9]* ]] ; then</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; install k8s-<span class="token variable">\${k8sVersion}</span> for <span class="token variable">\${hostnames}</span>...&quot;</span>
	yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">--nogpgcheck</span> kubelet-<span class="token variable">\${k8sVersion}</span> kubeadm-<span class="token variable">\${k8sVersion}</span> kubectl-<span class="token variable">\${k8sVersion}</span> <span class="token parameter variable">--disableexcludes</span><span class="token operator">=</span>kubernetes
	<span class="token function">sleep</span> <span class="token number">5</span><span class="token punctuation">;</span>
	start
	<span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">enable</span>
	<span class="token builtin class-name">enable</span>
	<span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
	status
	get_v
	<span class="token function">sleep</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /usr/bin/kubectl <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 创建软连接...&quot;</span>
		<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/kube*  /usr/local/bin/
		<span class="token function">ls</span> /usr/local/bin/kube*
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
	<span class="token keyword">fi</span>
	kill_s
<span class="token comment">#  else</span>
<span class="token comment">#    echo &quot;----&gt; hostname is [\${hostnames}]不符合规范&quot;</span>
<span class="token comment">#	kill -9 $$</span>
<span class="token comment">#  fi</span>
<span class="token comment">#  echo -e &quot;\\n&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; k8s 安装...&quot;</span>
	<span class="token comment">#uni_rm_file</span>
	<span class="token function">install</span> <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>

<span class="token function-name function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">install</span>
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	uni_rm_file
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	start
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	stop
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	status
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">enable</span>
	kill_s
<span class="token punctuation">}</span>
<span class="token function-name function">m7</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	disable
	kill_s
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
   <span class="token function">install</span><span class="token punctuation">)</span>
     m1 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
   uni<span class="token punctuation">)</span>
     m2 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
   start<span class="token punctuation">)</span>
     m3 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
   stop<span class="token punctuation">)</span>
     m4 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
   status<span class="token punctuation">)</span>
     m5 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token builtin class-name">enable</span><span class="token punctuation">)</span>
     m6 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
   disable<span class="token punctuation">)</span>
     m7 <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log <span class="token operator">&amp;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  -h<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> { *默认执行 | install | uni | start | stop | status | enable | disable | -h }&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
   *<span class="token punctuation">)</span>
     main <span class="token operator">&gt;&gt;</span> ./k8s-install.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> ./k8s-install.log<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5);function S(w,E){const a=i("ExternalLinkIcon");return p(),o("div",null,[r,u,n("h2",k,[n("a",d,[n("span",null,[n("a",v,[s("根据CentOS7模板镜像自动创建集群系统auto-clone.sh"),e(a)])])])]),n("p",null,[n("a",m,[s("CentOS7模板镜像地址"),e(a)]),s("，提取码："),b]),g,n("h3",f,[n("a",h,[n("span",null,[n("a",q,[s("auto-clone.sh"),e(a)])])])]),y,n("p",null,[n("a",_,[s("安装Docker文档"),e(a)])]),$])}const O=l(c,[["render",S],["__file","script.html.vue"]]),D=JSON.parse('{"path":"/k8s/script.html","title":"k8s实用脚本","lang":"zh-CN","frontmatter":{"icon":"/icons/k8s/k8s_16x16.png","title":"k8s实用脚本","category":["kubernetes"],"headerDepth":5,"date":"2020-04-20T00:00:00.000Z","order":16,"tag":["Linux","k8s","script"],"description":"k8s集群实用脚本，实现自动化安装部署","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/k8s/script.html"}],["meta",{"property":"og:title","content":"k8s实用脚本"}],["meta",{"property":"og:description","content":"k8s集群实用脚本，实现自动化安装部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T15:35:29.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:tag","content":"script"}],["meta",{"property":"article:published_time","content":"2020-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T15:35:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k8s实用脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-11T15:35:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"根据CentOS7模板镜像自动创建集群系统auto-clone.sh","slug":"根据centos7模板镜像自动创建集群系统auto-clone-sh","link":"#根据centos7模板镜像自动创建集群系统auto-clone-sh","children":[{"level":3,"title":"文件放置规范","slug":"文件放置规范","link":"#文件放置规范","children":[]},{"level":3,"title":"auto-clone.sh","slug":"auto-clone-sh","link":"#auto-clone-sh","children":[]},{"level":3,"title":"first.sh设置主机名-网卡IP-UUID-hosts","slug":"first-sh设置主机名-网卡ip-uuid-hosts","link":"#first-sh设置主机名-网卡ip-uuid-hosts","children":[]},{"level":3,"title":"kill.bat","slug":"kill-bat","link":"#kill-bat","children":[]}]},{"level":2,"title":"初始化k8s-yum源","slug":"初始化k8s-yum源","link":"#初始化k8s-yum源","children":[]},{"level":2,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"K8S基础环境init配置","slug":"k8s基础环境init配置","link":"#k8s基础环境init配置","children":[]},{"level":2,"title":"install-k8s","slug":"install-k8s","link":"#install-k8s","children":[]}],"git":{"createdTime":1709647624000,"updatedTime":1710171329000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":10}]},"readingTime":{"minutes":13.89,"words":4166},"filePathRelative":"k8s/script.md","localizedDate":"2020年4月20日","excerpt":"<p>k8s集群实用脚本，实现自动化安装部署</p>\\n","autoDesc":true}');export{O as comp,D as data};
