import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as d,c as r,b as e,e as n,d as a,a as s}from"./app-D1uezr0R.js";const o="/assets/true-image-20230301211748832-CIEfhKHp.png",c="/assets/true-image-20230301211951293-CKgwaQER.png",v="/assets/true-image-20230301212014921-D8MIzGIe.png",u="/assets/true-image-20230301212154794-CzffaKjp.png",p="/assets/true-image-20230301212245629-BhAtHpeh.png",m="/assets/true-image-20230301212757684-CfNZMDbV.png",b="/assets/true-image-2023030166-DjmjwGL9.png",h="/assets/true-image-2023030177-edDlCGch.png",g="/assets/true-image-20220119195308426-BSYiE3Md.png",f="/assets/true-image-20220119195510261-CkPfMEHo.png",C={},k=s('<p>IDEA管理</p><h2 id="常用的插件" tabindex="-1"><a class="header-anchor" href="#常用的插件"><span>常用的插件</span></a></h2><p>Alibaba Java、CamelCase、Chinese、codeGlance3、codota、GenerateAllSetter、gitee、Grep Console、mybatis-log、RestfulToolkit、Translation、vuejs、GsonFormatPlus、json parser</p><h2 id="jetbrains-全系列产品无限试用" tabindex="-1"><a class="header-anchor" href="#jetbrains-全系列产品无限试用"><span>JetBrains 全系列产品无限试用</span></a></h2><p>1、本激活方法适用于2021.2.2-、2020、2019、2018全系列版本；</p><p>2、本教程适用于 JetBrains 全系列产品，包括 Pycharm、IDEA、WebStorm、Phpstorm、Datagrip、RubyMine、CLion、AppCode 等。</p><h3 id="方式1-无限重置30天试用期教程-最高支持版本2021-2-2" tabindex="-1"><a class="header-anchor" href="#方式1-无限重置30天试用期教程-最高支持版本2021-2-2"><span>方式1：无限重置30天试用期教程（最高支持版本2021.2.2）</span></a></h3>',7),_={href:"https://www.exception.site/essay/idea-reset-eval",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.jetbrains.com/zh-cn/pycharm/download/other.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jetbrains.com/zh-cn/idea/download/other.html",target:"_blank",rel:"noopener noreferrer"},A=s('<p>安装后，点击开始试用</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择<code>ide-eval-resetter-2.3.5.zip</code>文件后，弹出下面框</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后重启程序</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>或者使用拖拽方式（将 <code>ide-eval-resetter-2.3.5.zip</code> 拖拽到pycharm主页里）</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="方式2-激活到2099年教程" tabindex="-1"><a class="header-anchor" href="#方式2-激活到2099年教程"><span>方式2：激活到2099年教程</span></a></h3>',12),T={href:"https://www.exception.site/essay/how-to-free-use-intellij-idea-2019-3",target:"_blank",rel:"noopener noreferrer"},E=s('<h3 id="关闭自动更新" tabindex="-1"><a class="header-anchor" href="#关闭自动更新"><span>关闭自动更新</span></a></h3><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="linux-创建-desktop-桌面文件" tabindex="-1"><a class="header-anchor" href="#linux-创建-desktop-桌面文件"><span>linux 创建 desktop 桌面文件</span></a></h2><ul><li>idea.desktop</li></ul><p>×最好创建在idea-IU/bin/目录里×</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Desktop Entry]
Encoding=UTF-8
Name=idea 2021.2.2
Comment=idea 2021.2.2
Exec=/data/home/yus/data/rj/idea-IU/bin/idea.sh
Icon=/data/home/yus/data/rj/idea-IU/bin/idea.png
Terminal=false
starttupNotify=true
Type=Application
Categories=Application;Development;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>构建快捷菜单方式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash

echo &quot;-----------开始构建快捷-------------&quot;
echo &quot;----------------------------------&quot;
echo
ln -s /data/home/yus/data/rj/idea-IU/bin/idea.desktop /usr/share/applications/idea.desktop
echo &quot;link idea.desktop to [/usr/share/applications]&quot;
echo &quot;查看：&quot;
ls -all /usr/share/applications/idea.desktop
sleep 3
echo
echo
# （/usr/local/share/applications）这个目录可能不存在，没关系的
ln -s /data/home/yus/data/rj/idea-IU/bin/idea.desktop /usr/local/share/applications/idea.desktop
echo &quot;link idea.desktop to [/usr/local/share/applications]&quot;
echo
echo &quot;查看：&quot;
ls -all /usr/local/share/applications/idea.desktop
echo
echo &quot;-----------------------------------&quot;1
sleep 9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash

echo &quot;----------------------------------------------------------&quot;
echo
rm -rf /usr/share/applications/idea.desktop
echo &quot;rm /usr/share/applications/idea.desktop&quot;
echo
sleep 3
echo
rm -rf /usr/local/share/applications/idea.desktop
echo &quot;rm /usr/local/share/applications/idea.desktop&quot;
echo
echo &quot;----------------------------------------------------------&quot;
sleep 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键"><span>常用快捷键</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Ctrl+空格: 代码提示
Ctrl+Alt+Space: 类名或接口名提示
Ctrl+P: 使用方法参数提示
Ctrl+Q: 显示注释文档
Ctrl+F12: 显示当前类中的成员变量和方法
Ctrl+H: 显示类结构图
Alt+1: 快速打开或隐藏工程面板
Ctrl+Alt+ left/right: 返回至上次浏览的位置
Alt+ left/right: 切换代码视图
F2 或Shift+F2: 高亮错误或警告快速定位
双击Shift: 查找项目中所有目录中的文件

Ctr+F: 在当前文件中查找指定内容
Ctrl+Shift+F: 在当前项目查找包含查找内容的文件
Ctrl+N: 查找类
Ctrl+Shift+N: 查找类和文件
Ctrl+E: 显示最近使用过的文件
Alt+F7: 查找函数或者变量或者类的所有引用到的地方
Ctrl+Shift+Alt+N: 查找类中的方法或变量
Ctrl+D: 复制当前行到下一行
Ctrl+X: 剪切当前行
Ctrl+C/Ctrl+V: 复制/粘贴
Ctrl+Z: 撤销

Ctrl+Shift+Z: 取消撤销
Shift+Enter: 另起一行
Ctrl+R: 当前文件替内容
Ctrl+Shift+R: 当前项目文件替换
Shift+F6: 重命名项目、类、方法、变量
Ctrl+K: 代码提交到SVN
Ctrl+T: 更新代码
Alt+Insert: 在类上自动生成构造器、getter/setter等等常用方法，在项目上创建新的类和文件
Ctrl+Alt+O: 优化导入的类和包
Ctrl+Shift+Space: 自动补全代码
Alt+Shift+C: 对比最近修改的代码

Ctrl+Shift+上键/下键: 代码向上/下移动
Ctrl+/ 或 Ctrl+Shift+/:注释
Ctrl+Alt+left/right: 返回至上次浏览的位置
Alt+Up/Down: 在方法间快速移动定位
Ctrl+W: 选中代码，连续按会有其他效果Alt+F3 ，逐个往下查找相同文本，并高亮显示
Ctrl+Up/Down: 光标跳转到第一行或最后一行下Ctrl+B 快速打开光标处的类或方法
Alt+Enter: 导入包,修正代码,实现接口方法,简化代码等等
Ctrl+Alt+L: 自动格式化代码
CTRL+ALT+I:  自动缩进 
CTRL+ALT+O:  优化导入的类和包 
ALT+INSERT:  生成代码(如GET,SET方法,构造函数等) 

CTRL+E: 最近更改的代码 
CTRL+SHIFT+SPACE: 自动补全代码 
CTRL+空格:  代码提示 
CTRL+ALT+SPACE:  类名或接口名提示 
CTRL+P:   方法参数提示 
CTRL+J:   自动代码 
CTRL+ALT+T:  把选中的代码放在 TRY{} IF{} ELSE{} 里
Ctrl+Shift+U： 大小写的快速切换

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="idea设置-java类文件注释模板" tabindex="-1"><a class="header-anchor" href="#idea设置-java类文件注释模板"><span>idea设置 java类文件注释模板</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 
  * <span class="token keyword">@author</span> jf
  * <span class="token keyword">@jdk-version</span>: 17
  * <span class="token keyword">@date</span>: $<span class="token punctuation">{</span>DATE<span class="token punctuation">}</span> $<span class="token punctuation">{</span>TIME<span class="token punctuation">}</span>
  * /
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同一个启动类-多环境-多port-运行" tabindex="-1"><a class="header-anchor" href="#同一个启动类-多环境-多port-运行"><span>同一个启动类：多环境+多port 运行</span></a></h2><figure><img src="`+g+'" alt="image-20220119195308426" tabindex="0" loading="lazy"><figcaption>image-20220119195308426</figcaption></figure><figure><img src="'+f+'" alt="image-20220119195510261" tabindex="0" loading="lazy"><figcaption>image-20220119195510261</figcaption></figure>',17);function j(I,S){const i=t("ExternalLinkIcon");return d(),r("div",null,[k,e("p",null,[e("a",_,[n("参考地址"),a(i)])]),e("p",null,[e("a",x,[n("PyCharm 下载地址"),a(i)])]),e("p",null,[e("a",y,[n("IDEA 下载地址"),a(i)])]),A,e("p",null,[e("a",T,[n("方式2：激活到2099年教程"),a(i)])]),E])}const q=l(C,[["render",j],["__file","idea.html.vue"]]),L=JSON.parse('{"path":"/tools/idea.html","title":"IDEA管理","lang":"zh-CN","frontmatter":{"icon":"intellijidea","title":"IDEA管理","category":["开发工具"],"headerDepth":5,"date":"2020-05-12T00:00:00.000Z","tag":["IDEA"],"description":"IDEA管理","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/tools/idea.html"}],["meta",{"property":"og:title","content":"IDEA管理"}],["meta",{"property":"og:description","content":"IDEA管理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"IDEA"}],["meta",{"property":"article:published_time","content":"2020-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IDEA管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"常用的插件","slug":"常用的插件","link":"#常用的插件","children":[]},{"level":2,"title":"JetBrains 全系列产品无限试用","slug":"jetbrains-全系列产品无限试用","link":"#jetbrains-全系列产品无限试用","children":[{"level":3,"title":"方式1：无限重置30天试用期教程（最高支持版本2021.2.2）","slug":"方式1-无限重置30天试用期教程-最高支持版本2021-2-2","link":"#方式1-无限重置30天试用期教程-最高支持版本2021-2-2","children":[]},{"level":3,"title":"方式2：激活到2099年教程","slug":"方式2-激活到2099年教程","link":"#方式2-激活到2099年教程","children":[]},{"level":3,"title":"关闭自动更新","slug":"关闭自动更新","link":"#关闭自动更新","children":[]}]},{"level":2,"title":"linux 创建 desktop 桌面文件","slug":"linux-创建-desktop-桌面文件","link":"#linux-创建-desktop-桌面文件","children":[]},{"level":2,"title":"常用快捷键","slug":"常用快捷键","link":"#常用快捷键","children":[]},{"level":2,"title":"idea设置 java类文件注释模板","slug":"idea设置-java类文件注释模板","link":"#idea设置-java类文件注释模板","children":[]},{"level":2,"title":"同一个启动类：多环境+多port 运行","slug":"同一个启动类-多环境-多port-运行","link":"#同一个启动类-多环境-多port-运行","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":3.57,"words":1071},"filePathRelative":"tools/idea.md","localizedDate":"2020年5月12日","excerpt":"<p>IDEA管理</p>\\n","autoDesc":true}');export{q as comp,L as data};
