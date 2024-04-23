import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as t,c as r,b as n,e as a,d as s,a as l}from"./app-D1uezr0R.js";const c={},d=l('<p>Open-Falcon监控平台</p><h1 id="open-falcon监控平台" tabindex="-1"><a class="header-anchor" href="#open-falcon监控平台"><span>Open-Falcon监控平台</span></a></h1><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><h3 id="安装-redis" tabindex="-1"><a class="header-anchor" href="#安装-redis"><span>安装 redis</span></a></h3>',4),p={href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://note-jf.github.io/tools/docker/docker-install-mysql-redis-nginx-nacos-mq-es.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir -p /mydoc/redis/conf
touch /mydoc/redis/conf/redis.conf
#################linux
docker run -p 6491:6379 --name redis \\
--restart=always \\
-v /data/docker/redis/data:/data \\
-v /data/docker/redis/conf/redis.conf:/etc/redis/redis.conf \\
-d registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 4529e2c29cbb redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装mysql</span></a></h3>`,3),m={href:"https://note-jf.github.io/database/mysql/install.html",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html

[client]
default-character-set=utf8mb4

[mysqld]

#删除前导，以设置主要用于报表服务器的选项。
#对于事务和快速选择，服务器默认值更快。
#根据需要调整尺寸，实验以找到最佳值。
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
#默认
port=3306
#数据目录
datadir=/var/lib/mysql
#该条配置需在[client]段同时配置
socket=/var/lib/mysql/mysql.sock
#多客户访问同一数据库，该选项默认开启
symbolic-links=0
#默认
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
#打开时，和max_connections对比，取大数
open_files_limit=65535
#max_connections=1000
#开启慢查询日志相关，默认10秒，慢查询日志路径，记录没有使用索引的sql
slow_query_log=on
long_query_time=10
slow_query_log_file=/var/log/mysql/slow_query.log
log-queries-not-using-indexes=1
#InnoDB为独立表空间模式，每个数据库的每个表都会生成一个数据空间
default_storage_engine=InnoDB
innodb_file_per_table=on
#生产中要改，建议为操作系统内存的70%-80%，需重启服务生效
innodb_buffer_pool_size=1G
#忽略主机名解析，提高访问速度（注意配置文件中使用主机名将不能解析）
skip_name_resolve=on
#忽略表单大小写
lower_case_table_names=0
#设定默认字符为utf8mb4
character-set-server=utf8mb4
collation-server=utf8mb4_general_ci

#SQL_MODEL

sql_mode=&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单体安装-open-falcon" tabindex="-1"><a class="header-anchor" href="#单体安装-open-falcon"><span>单体安装 open-falcon</span></a></h2>`,2),f={href:"https://github.com/open-falcon/falcon-plus/releases",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/open-falcon/falcon-plus/releases/download/v0.3/open-falcon-v0.3.tar.gz",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/open-falcon/falcon-plus/releases/download/v0.2.1/open-falcon-v0.2.1.tar.gz",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>一、创建工作目录</p><p>export FALCON_HOME=/data/work</p><p>export WORKSPACE=$FALCON_HOME/open-falcon</p><p>mkdir -p $WORKSPACE</p><p>二、解压二进制包</p><p>cd /data/software</p><p>tar -xzvf open-falcon-v0.3.tar.gz -C $WORKSPACE</p><p>三、配置数据库账号和密码</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$WORKSPACE</span>

<span class="token function">grep</span> <span class="token parameter variable">-Ilr</span> <span class="token number">3306</span> ./ <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> -- <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/root:/root:root12/g&#39;</span>
<span class="token function">grep</span> <span class="token parameter variable">-Ilr</span> <span class="token number">6379</span> ./ <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> -- <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/127.0.0.1:6379/127.0.0.1:6491/g&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、启动</p><p>查看目录下包括Open-Falcon的所有组件，我们先默认全部启动，之后我们一个一个讲解如何分布式部署以及启动</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master open-falcon<span class="token punctuation">]</span><span class="token comment"># ls</span>
agent  aggregator  alarm  api  gateway  graph  hbs  judge  nodata  open-falcon  plugin  public  transfer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>./open-falcon start</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./open-falcon start
<span class="token punctuation">[</span>falcon-graph<span class="token punctuation">]</span> <span class="token number">15489</span>
<span class="token punctuation">[</span>falcon-hbs<span class="token punctuation">]</span> <span class="token number">15494</span>
<span class="token punctuation">[</span>falcon-judge<span class="token punctuation">]</span> <span class="token number">15521</span>
<span class="token punctuation">[</span>falcon-transfer<span class="token punctuation">]</span> <span class="token number">15531</span>
<span class="token punctuation">[</span>falcon-nodata<span class="token punctuation">]</span> <span class="token number">15534</span>
<span class="token punctuation">[</span>falcon-aggregator<span class="token punctuation">]</span> <span class="token number">15551</span>
<span class="token punctuation">[</span>falcon-agent<span class="token punctuation">]</span> <span class="token number">15554</span>
<span class="token punctuation">[</span>falcon-gateway<span class="token punctuation">]</span> <span class="token number">15569</span>
<span class="token punctuation">[</span>falcon-api<span class="token punctuation">]</span> <span class="token number">15576</span>
<span class="token punctuation">[</span>falcon-alarm<span class="token punctuation">]</span> <span class="token number">15586</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查所有模块的启动状况</li></ul><p>./open-falcon check</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./open-falcon check
        falcon-graph       DOWN               - 
          falcon-hbs       DOWN               - 
        falcon-judge         UP           <span class="token number">15521</span> 
     falcon-transfer         UP           <span class="token number">15531</span> 
       falcon-nodata       DOWN               - 
   falcon-aggregator       DOWN               - 
        falcon-agent         UP           <span class="token number">15554</span> 
      falcon-gateway         UP           <span class="token number">15569</span> 
          falcon-api       DOWN               - 
        falcon-alarm       DOWN               - 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五、更多命令行工具</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ./open-falcon [start|stop|restart|check|monitor|reload] module</span>
./open-falcon start graph
./open-falcon start hbs
./open-falcon start judge
./open-falcon start transfer
./open-falcon start nodata
./open-falcon start aggregator
./open-falcon start agent
./open-falcon start gateway
./open-falcon start api
./open-falcon start alarm

./open-falcon check
        falcon-graph         UP           <span class="token number">35697</span> 
          falcon-hbs         UP           <span class="token number">35711</span> 
        falcon-judge         UP           <span class="token number">35719</span> 
     falcon-transfer         UP           <span class="token number">35728</span> 
       falcon-nodata         UP           <span class="token number">35740</span> 
   falcon-aggregator       DOWN               - 
        falcon-agent         UP           <span class="token number">38715</span> 
      falcon-gateway         UP           <span class="token number">40052</span> 
          falcon-api       DOWN               - 
        falcon-alarm       DOWN               - 

For debugging , You can check <span class="token variable">$WorkDir</span>/<span class="token variable">$moduleName</span>/log/logs/xxx.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分布式安装-open-falcon" tabindex="-1"><a class="header-anchor" href="#分布式安装-open-falcon"><span>分布式安装 open-falcon</span></a></h2>`,20);function _(y,x){const e=o("ExternalLinkIcon");return t(),r("div",null,[d,n("p",null,[n("a",p,[a("https://redis.io/download/"),s(e)])]),n("p",null,[n("a",u,[a("docker安装教程"),s(e)])]),v,n("p",null,[n("a",m,[a("tar方式-参考地址"),s(e)])]),b,n("p",null,[n("a",f,[a("下载"),s(e)])]),n("p",null,[n("a",g,[a("https://github.com/open-falcon/falcon-plus/releases/download/v0.3/open-falcon-v0.3.tar.gz"),s(e)])]),n("p",null,[n("a",h,[a("https://github.com/open-falcon/falcon-plus/releases/download/v0.2.1/open-falcon-v0.2.1.tar.gz"),s(e)])]),k])}const q=i(c,[["render",_],["__file","open-falcon.html.vue"]]),E=JSON.parse('{"path":"/linux/monitoringtools/open-falcon.html","title":"Open-Falcon监控平台","lang":"zh-CN","frontmatter":{"icon":"edit","title":"Open-Falcon监控平台","category":["运维监控工具"],"headerDepth":5,"date":"2022-10-03T00:00:00.000Z","tag":["Open-Falcon"],"description":"Open-Falcon监控平台","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/monitoringtools/open-falcon.html"}],["meta",{"property":"og:title","content":"Open-Falcon监控平台"}],["meta",{"property":"og:description","content":"Open-Falcon监控平台"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Open-Falcon"}],["meta",{"property":"article:published_time","content":"2022-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Open-Falcon监控平台\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"安装 redis","slug":"安装-redis","link":"#安装-redis","children":[]},{"level":3,"title":"安装mysql","slug":"安装mysql","link":"#安装mysql","children":[]}]},{"level":2,"title":"单体安装 open-falcon","slug":"单体安装-open-falcon","link":"#单体安装-open-falcon","children":[]},{"level":2,"title":"分布式安装 open-falcon","slug":"分布式安装-open-falcon","link":"#分布式安装-open-falcon","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"linux/monitoringtools/open-falcon.md","localizedDate":"2022年10月3日","excerpt":"<p>Open-Falcon监控平台</p>\\n","autoDesc":true}');export{q as comp,E as data};
