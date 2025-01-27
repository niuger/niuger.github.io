import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c,b as n,e as s,d as e,a as t}from"./app-D1uezr0R.js";const o={},u=n("p",null,"k8s数据持久化存储：nfs（pv-pvc，ConfigMap，secret）、local、hostPath",-1),r={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"PV 持久卷是用插件的形式来实现的。Kubernetes 目前支持以下插件：",-1),v={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#csi",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"csi",-1),b={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#fc",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"fc",-1),g={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#hostpath",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"hostPath",-1),f=n("code",null,"local",-1),_={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#iscsi",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"iscsi",-1),x={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#local",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"local",-1),C={href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#nfs",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"nfs",-1),S=n("h2",{id:"nfs-文件系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nfs-文件系统"},[n("span",null,"NFS 文件系统")])],-1),z={href:"https://zhuanlan.zhihu.com/p/411489781",target:"_blank",rel:"noopener noreferrer"},M={href:"https://blog.csdn.net/weixin_43384009/article/details/105958068",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.yuque.com/leifengyang/oncloud/gz1sls",target:"_blank",rel:"noopener noreferrer"},R={href:"https://developer.aliyun.com/article/719754",target:"_blank",rel:"noopener noreferrer"},w=t(`<ul><li>可变配置就用 ConfigMap；</li><li>敏感信息是用 Secret；</li><li>身份认证是用 ServiceAccount 这几个独立的资源来实现的；</li><li>资源配置是用 Resources；</li><li>安全管控是用 SecurityContext；</li><li>前置校验是用 InitContainers 这几个在 spec 里面加的字段，来实现的这些配置管理。</li></ul><h3 id="a、安装nfs文件系统" tabindex="-1"><a class="header-anchor" href="#a、安装nfs文件系统"><span>a、安装nfs文件系统</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#在每个机器。</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils

<span class="token comment">#在master 执行以下命令 </span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/nfs/data/ *(insecure,rw,sync,no_root_squash)&quot;</span> <span class="token operator">&gt;</span> /etc/exports

<span class="token comment">#执行以下命令，启动 nfs 服务;创建共享目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data/<span class="token punctuation">{</span>01,02,03<span class="token punctuation">}</span>

<span class="token comment">#在master执行</span>
systemctl <span class="token builtin class-name">enable</span> rpcbind
systemctl <span class="token builtin class-name">enable</span> nfs-server
systemctl start rpcbind
systemctl start nfs-server
systemctl status rpcbind
systemctl status nfs-server

<span class="token comment">#使配置生效</span>
exportfs <span class="token parameter variable">-r</span>
<span class="token comment">#检查配置是否生效</span>
exportfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b、配置nfs-client-选做" tabindex="-1"><a class="header-anchor" href="#b、配置nfs-client-选做"><span>b、配置nfs-client（选做）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>showmount <span class="token parameter variable">-e</span> <span class="token number">192.168</span>.100.130
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">192.168</span>.100.130:/nfs/data /nfs/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c、配置默认存储storageclass" tabindex="-1"><a class="header-anchor" href="#c、配置默认存储storageclass"><span>c、配置默认存储StorageClass</span></a></h3><p>创建一个文件 <strong>vim ./nfs.yaml</strong></p><p><strong>kubectl apply -f nfs.yaml</strong></p><details class="hint-container details"><summary>点击查看代码</summary><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> storage.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StorageClass
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>storage
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">storageclass.kubernetes.io/is-default-class</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
<span class="token key atrule">provisioner</span><span class="token punctuation">:</span> k8s<span class="token punctuation">-</span>sigs.io/nfs<span class="token punctuation">-</span>subdir<span class="token punctuation">-</span>external<span class="token punctuation">-</span>provisioner
<span class="token key atrule">parameters</span><span class="token punctuation">:</span>
  <span class="token key atrule">archiveOnDelete</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>  <span class="token comment">## 删除pv的时候，pv的内容是否要备份</span>

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token comment"># replace with namespace where provisioner is deployed</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> Recreate
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
          <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/nfs<span class="token punctuation">:</span>v4.0.2
          <span class="token comment"># resources:</span>
          <span class="token comment">#    limits:</span>
          <span class="token comment">#      cpu: 10m</span>
          <span class="token comment">#    requests:</span>
          <span class="token comment">#      cpu: 10m</span>
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>root
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /persistentvolumes
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PROVISIONER_NAME
              <span class="token key atrule">value</span><span class="token punctuation">:</span> k8s<span class="token punctuation">-</span>sigs.io/nfs<span class="token punctuation">-</span>subdir<span class="token punctuation">-</span>external<span class="token punctuation">-</span>provisioner
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NFS_SERVER
              <span class="token key atrule">value</span><span class="token punctuation">:</span> 192.168.100.130 <span class="token comment">## 指定自己nfs服务器地址</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NFS_PATH  
              <span class="token key atrule">value</span><span class="token punctuation">:</span> /nfs/data  <span class="token comment">## nfs服务器共享的目录</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>root
          <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
            <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.100.130
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token comment"># replace with namespace where provisioner is deployed</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner<span class="token punctuation">-</span>runner
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nodes&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;persistentvolumes&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;persistentvolumeclaims&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;storage.k8s.io&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;storageclasses&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> run<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
    <span class="token comment"># replace with namespace where provisioner is deployed</span>
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner<span class="token punctuation">-</span>runner
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> leader<span class="token punctuation">-</span>locking<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token comment"># replace with namespace where provisioner is deployed</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;endpoints&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> leader<span class="token punctuation">-</span>locking<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token comment"># replace with namespace where provisioner is deployed</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
    <span class="token comment"># replace with namespace where provisioner is deployed</span>
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> leader<span class="token punctuation">-</span>locking<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="d、确认配置是否生效" tabindex="-1"><a class="header-anchor" href="#d、确认配置是否生效"><span>d、确认配置是否生效</span></a></h3><p>kubectl get sc</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get sc</span>
NAME                    PROVISIONER                                   RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
nfs-storage <span class="token punctuation">(</span>default<span class="token punctuation">)</span>   k8s-sigs.io/nfs-subdir-external-provisioner   Delete          Immediate           <span class="token boolean">false</span>                  2m31s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="e、metrics-server" tabindex="-1"><a class="header-anchor" href="#e、metrics-server"><span>e、metrics-server</span></a></h3><p><strong>vim metrics-server.yaml</strong></p><p><strong>kubectl apply -f metrics-server.yaml</strong></p><details class="hint-container details"><summary>点击查看代码</summary><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
    <span class="token key atrule">rbac.authorization.k8s.io/aggregate-to-admin</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">rbac.authorization.k8s.io/aggregate-to-edit</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">rbac.authorization.k8s.io/aggregate-to-view</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>aggregated<span class="token punctuation">-</span>metrics<span class="token punctuation">-</span>reader
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> metrics.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> nodes
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>metrics<span class="token punctuation">-</span>server
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> nodes
  <span class="token punctuation">-</span> nodes/stats
  <span class="token punctuation">-</span> namespaces
  <span class="token punctuation">-</span> configmaps
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server<span class="token punctuation">-</span>auth<span class="token punctuation">-</span>reader
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> extension<span class="token punctuation">-</span>apiserver<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>reader
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server<span class="token punctuation">:</span>system<span class="token punctuation">:</span>auth<span class="token punctuation">-</span>delegator
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>auth<span class="token punctuation">-</span>delegator
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>metrics<span class="token punctuation">-</span>server
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>metrics<span class="token punctuation">-</span>server
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> https
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> https
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>cert<span class="token punctuation">-</span>dir=/tmp
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>insecure<span class="token punctuation">-</span>tls
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>secure<span class="token punctuation">-</span>port=4443
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>preferred<span class="token punctuation">-</span>address<span class="token punctuation">-</span>types=InternalIP<span class="token punctuation">,</span>ExternalIP<span class="token punctuation">,</span>Hostname
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>use<span class="token punctuation">-</span>node<span class="token punctuation">-</span>status<span class="token punctuation">-</span>port
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf/metrics<span class="token punctuation">-</span>server<span class="token punctuation">:</span>v0.4.3
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">3</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /livez
            <span class="token key atrule">port</span><span class="token punctuation">:</span> https
            <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTPS
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">4443</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> https
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">3</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /readyz
            <span class="token key atrule">port</span><span class="token punctuation">:</span> https
            <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTPS
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">readOnlyRootFilesystem</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /tmp
          <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp<span class="token punctuation">-</span>dir
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
      <span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> system<span class="token punctuation">-</span>cluster<span class="token punctuation">-</span>critical
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp<span class="token punctuation">-</span>dir
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apiregistration.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> APIService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> v1beta1.metrics.k8s.io
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">group</span><span class="token punctuation">:</span> metrics.k8s.io
  <span class="token key atrule">groupPriorityMinimum</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">insecureSkipTLSVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">version</span><span class="token punctuation">:</span> v1beta1
  <span class="token key atrule">versionPriority</span><span class="token punctuation">:</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="pv-pvc" tabindex="-1"><a class="header-anchor" href="#pv-pvc"><span>PV&amp;PVC</span></a></h2><p><strong>PV</strong>：持久卷（Persistent Volume），将应用需要持久化的数据保存到指定位置</p><p><strong>PVC</strong>：持久卷申明（<strong>Persistent Volume Claim</strong>），申明需要使用的持久卷规格</p><h3 id="_1、创建pv池pv-yaml" tabindex="-1"><a class="header-anchor" href="#_1、创建pv池pv-yaml"><span>1、创建pv池pv.yaml</span></a></h3><p>静态供应</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment">#nfs主节点</span>
mkdir <span class="token punctuation">-</span>p /nfs/data/<span class="token punctuation">{</span><span class="token number">01</span><span class="token punctuation">,</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">03</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建PV</p><p><strong>vim pv.yaml</strong></p><p><strong>kubectl apply -f pv.yaml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv01<span class="token punctuation">-</span>10m
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 10Mi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/01
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.100.130
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv02<span class="token punctuation">-</span>1gi
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/02
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.100.130
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv03<span class="token punctuation">-</span>3gi
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 3Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/03
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.100.130
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、pvc创建与绑定" tabindex="-1"><a class="header-anchor" href="#_2、pvc创建与绑定"><span>2、PVC创建与绑定</span></a></h3><p>创建nginx的PVC</p><p><strong>nginx-pvc.yaml</strong></p><p><strong>kubectl apply -f pvc-nginx.yaml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pvc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 500Mi
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建pod绑定pvc" tabindex="-1"><a class="header-anchor" href="#_3、创建pod绑定pvc"><span>3、创建Pod绑定PVC</span></a></h3><p><strong>vim pvc-deploy.yaml</strong></p><p><strong>kubectl apply -f pvc-deploy.yaml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/jinfang/nginx<span class="token punctuation">:</span>1.21.6<span class="token punctuation">-</span>alpine
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/nginx/html
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
          <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
            <span class="token key atrule">claimName</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pvc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configmap" tabindex="-1"><a class="header-anchor" href="#configmap"><span>ConfigMap</span></a></h2><p>抽取应用配置，并且可以自动更新</p>`,37),G={href:"https://kubernetes.io/zh-cn/docs/concepts/configuration/configmap/",target:"_blank",rel:"noopener noreferrer"},I=t(`<p><strong>以 redis 示例</strong></p><h3 id="_1、把之前的配置文件创建为配置集" tabindex="-1"><a class="header-anchor" href="#_1、把之前的配置文件创建为配置集"><span>1、把之前的配置文件创建为配置集</span></a></h3><p>创建配置，redis保存到k8s的etcd；</p><p>语法：kubectl create configmap [NAME] [DATA]</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create configmap redis-conf --from-file<span class="token operator">=</span>redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim redis.yaml</p><p>kubectl apply -f redis.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>conf
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">data</span><span class="token punctuation">:</span>    <span class="token comment">#data是所有真正的数据，key：默认是文件名   value：配置文件的内容</span>
  <span class="token key atrule">redis.conf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    appendonly yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、创建pod" tabindex="-1"><a class="header-anchor" href="#_2、创建pod"><span>2、创建Pod</span></a></h3><p>redis-pod.yaml</p><p>kubectl apply -f redis-pod.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/jinfang/redis<span class="token punctuation">:</span>6.2.6.1
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis<span class="token punctuation">-</span>server
      <span class="token punctuation">-</span> <span class="token string">&quot;/redis-master/redis.conf&quot;</span>  <span class="token comment">#指的是redis容器内部的位置</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /data
      <span class="token key atrule">name</span><span class="token punctuation">:</span> data
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /redis<span class="token punctuation">-</span>master
      <span class="token key atrule">name</span><span class="token punctuation">:</span> config
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> data
      <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
      <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>conf
        <span class="token key atrule">items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> redis.conf
          <span class="token key atrule">path</span><span class="token punctuation">:</span> redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、检查默认配置" tabindex="-1"><a class="header-anchor" href="#_3、检查默认配置"><span>3、检查默认配置</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>kubectl exec <span class="token punctuation">-</span>it redis <span class="token punctuation">-</span><span class="token punctuation">-</span> redis<span class="token punctuation">-</span>cli

127.0.0.1<span class="token punctuation">:</span>6379<span class="token punctuation">&gt;</span> CONFIG GET appendonly
1) &quot;appendonly&quot;
2) &quot;yes&quot;
127.0.0.1<span class="token punctuation">:</span>6379<span class="token punctuation">&gt;</span>
127.0.0.1<span class="token punctuation">:</span>6379<span class="token punctuation">&gt;</span> CONFIG GET requirepass
1) &quot;requirepass&quot;
2) &quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、修改configmap" tabindex="-1"><a class="header-anchor" href="#_4、修改configmap"><span>4、修改ConfigMap</span></a></h3><p>redis.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>config
<span class="token key atrule">data</span><span class="token punctuation">:</span>  <span class="token comment">#data是所有真正的数据，key：默认是文件名   value：配置文件的内容</span>
  <span class="token key atrule">redis-config</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    maxmemory 2mb
    maxmemory-policy allkeys-lru </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、检查配置是否更新" tabindex="-1"><a class="header-anchor" href="#_5、检查配置是否更新"><span>5、检查配置是否更新</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>kubectl exec <span class="token punctuation">-</span>it redis <span class="token punctuation">-</span><span class="token punctuation">-</span> redis<span class="token punctuation">-</span>cli

127.0.0.1<span class="token punctuation">:</span>6379<span class="token punctuation">&gt;</span> CONFIG GET maxmemory
1) &quot;maxmemory&quot;
2) &quot;0&quot;
127.0.0.1<span class="token punctuation">:</span>6379<span class="token punctuation">&gt;</span> CONFIG GET maxmemory<span class="token punctuation">-</span>policy
1) &quot;maxmemory<span class="token punctuation">-</span>policy&quot;
2) &quot;noeviction&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>检查指定文件内容是否已经更新</p><p>修改了CM。Pod里面的配置文件会跟着变</p><p>配置值未更改，因为需要重新启动 Pod 才能从关联的 ConfigMap 中获取更新的值。</p><p>原因：我们的Pod部署的中间件自己本身没有热更新能力</p></blockquote><h2 id="secret" tabindex="-1"><a class="header-anchor" href="#secret"><span>secret</span></a></h2>`,21),A={href:"https://kubernetes.io/zh-cn/docs/concepts/configuration/secret/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-image",target:"_blank",rel:"noopener noreferrer"},O=t(`<p>命令格式</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>kubectl create secret docker<span class="token punctuation">-</span>registry jinfang<span class="token punctuation">-</span>docker \\
  <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>server=registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/k8sjf \\
  <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>username=xx \\
  <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>password=xx <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>email=iskong9@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>secret-pod.yaml</strong></p><p><strong>kubectl apply -f secret-pod.yaml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> private<span class="token punctuation">-</span>redis
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> private<span class="token punctuation">-</span>redis
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/jinfang/redis<span class="token punctuation">:</span>6.2.6.1
  <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jinfang<span class="token punctuation">-</span>docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function j(L,D){const a=l("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[n("a",r,[s("卷"),e(a)])]),n("p",null,[n("a",k,[s("持久卷的类型"),e(a)])]),d,n("ul",null,[n("li",null,[n("a",v,[m,e(a)]),s(" - 容器存储接口 (CSI)")]),n("li",null,[n("a",b,[y,e(a)]),s(" - Fibre Channel (FC) 存储")]),n("li",null,[n("a",g,[h,e(a)]),s(" - HostPath 卷 （仅供单节点测试使用；不适用于多节点集群；请尝试使用 "),f,s(" 卷作为替代）")]),n("li",null,[n("a",_,[q,e(a)]),s(" - iSCSI (SCSI over IP) 存储")]),n("li",null,[n("a",x,[P,e(a)]),s(" - 节点上挂载的本地存储设备")]),n("li",null,[n("a",C,[V,e(a)]),s(" - 网络文件系统 (NFS) 存储")])]),S,n("p",null,[n("a",z,[s("安装nfs"),e(a)])]),n("p",null,[n("a",M,[s("storageclass存储方法"),e(a)])]),n("p",null,[n("a",N,[s("nfs文件系统"),e(a)])]),n("p",null,[n("a",R,[s("参考文档"),e(a)])]),w,n("p",null,[n("a",G,[s("https://kubernetes.io/zh-cn/docs/concepts/configuration/configmap/"),e(a)])]),I,n("p",null,[n("a",A,[s("kubernetes.io/zh-cn/docs/concepts/configuration/secret"),e(a)])]),n("blockquote",null,[n("p",null,[s("Secret 对象类型用来保存敏感信息，例如密码、OAuth 令牌和 SSH 密钥。 将这些信息放在 secret 中比放在 "),n("a",T,[s("Pod"),e(a)]),s(" 的定义或者 "),n("a",E,[s("容器镜像"),e(a)]),s(" 中来说更加安全和灵活。")])]),O])}const H=p(o,[["render",j],["__file","datastorage.html.vue"]]),Z=JSON.parse('{"path":"/k8s/datastorage.html","title":"k8s 数据持久化存储","lang":"zh-CN","frontmatter":{"icon":"/icons/k8s/k8s_16x16.png","title":"k8s 数据持久化存储","category":["kubernetes"],"headerDepth":5,"date":"2022-08-24T00:00:00.000Z","order":7,"tag":["Linux","k8s"],"description":"k8s数据持久化存储：nfs（pv-pvc，ConfigMap，secret）、local、hostPath","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/k8s/datastorage.html"}],["meta",{"property":"og:title","content":"k8s 数据持久化存储"}],["meta",{"property":"og:description","content":"k8s数据持久化存储：nfs（pv-pvc，ConfigMap，secret）、local、hostPath"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-14T10:09:27.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-08-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-14T10:09:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k8s 数据持久化存储\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-14T10:09:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"NFS 文件系统","slug":"nfs-文件系统","link":"#nfs-文件系统","children":[{"level":3,"title":"a、安装nfs文件系统","slug":"a、安装nfs文件系统","link":"#a、安装nfs文件系统","children":[]},{"level":3,"title":"b、配置nfs-client（选做）","slug":"b、配置nfs-client-选做","link":"#b、配置nfs-client-选做","children":[]},{"level":3,"title":"c、配置默认存储StorageClass","slug":"c、配置默认存储storageclass","link":"#c、配置默认存储storageclass","children":[]},{"level":3,"title":"d、确认配置是否生效","slug":"d、确认配置是否生效","link":"#d、确认配置是否生效","children":[]},{"level":3,"title":"e、metrics-server","slug":"e、metrics-server","link":"#e、metrics-server","children":[]}]},{"level":2,"title":"PV&PVC","slug":"pv-pvc","link":"#pv-pvc","children":[{"level":3,"title":"1、创建pv池pv.yaml","slug":"_1、创建pv池pv-yaml","link":"#_1、创建pv池pv-yaml","children":[]},{"level":3,"title":"2、PVC创建与绑定","slug":"_2、pvc创建与绑定","link":"#_2、pvc创建与绑定","children":[]},{"level":3,"title":"3、创建Pod绑定PVC","slug":"_3、创建pod绑定pvc","link":"#_3、创建pod绑定pvc","children":[]}]},{"level":2,"title":"ConfigMap","slug":"configmap","link":"#configmap","children":[{"level":3,"title":"1、把之前的配置文件创建为配置集","slug":"_1、把之前的配置文件创建为配置集","link":"#_1、把之前的配置文件创建为配置集","children":[]},{"level":3,"title":"2、创建Pod","slug":"_2、创建pod","link":"#_2、创建pod","children":[]},{"level":3,"title":"3、检查默认配置","slug":"_3、检查默认配置","link":"#_3、检查默认配置","children":[]},{"level":3,"title":"4、修改ConfigMap","slug":"_4、修改configmap","link":"#_4、修改configmap","children":[]},{"level":3,"title":"5、检查配置是否更新","slug":"_5、检查配置是否更新","link":"#_5、检查配置是否更新","children":[]}]},{"level":2,"title":"secret","slug":"secret","link":"#secret","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1710410967000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":6.47,"words":1940},"filePathRelative":"k8s/datastorage.md","localizedDate":"2022年8月24日","excerpt":"<p>k8s数据持久化存储：nfs（pv-pvc，ConfigMap，secret）、local、hostPath</p>\\n","autoDesc":true}');export{H as comp,Z as data};
