import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as c,c as l,b as e,e as i,d as r,a}from"./app-D1uezr0R.js";const n="/assets/true-up-795f5e9b0d875063717b1ee6a08f2ff1c01-DVLhTFjQ.png",s={},p=e("p",null,"创建的几种定时任务组件（Quartz、xxl-job、PowerJob、SchudulerX 2.0）",-1),u=e("figure",null,[e("img",{src:n,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("h2",{id:"常用的表达式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用的表达式"},[e("span",null,"常用的表达式")])],-1),h={href:"http://cron.qqe2.com/",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>[秒 分钟 小时 天 月 星期 年]</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>秒（0~59，不能超过59，若取值为60的话，也会提示表达式不合格）
分钟（0~59）
小时（0~23）
天（1~31）
月（0~11）
星期（1~7 1=SUN 或 SUN，MON，TUE，WED，THU，FRI，SAT）
年份（1970－2199）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>*</code> 字符代表所有可能的值 (符号<code>*</code>在<code>/</code>前面（如：<code>*/10</code>）等价于0在<code>/</code>前面（如：<code>0/10</code>）)</li><li><code>/</code> 字符用来指定数值的增量</li></ul><blockquote><p>例如：</p><p>在子表达式（分钟）里的<code>0/15</code>表示从第0分钟开始，每15分钟</p><p>在子表达式（分钟）里的<code>3/20</code>表示从第3分钟开始，每20分钟（它和<code>3，23，43</code>）的含义一样</p></blockquote><ul><li><code>?</code> 字符仅被用于天（月）和天（星期）两个子表达式，表示不指定值（每月的某一天，或第周的某一天）</li></ul><blockquote><p>注： 当2个子表达式其中之一被指定了值以后，为了避免冲突，需要将另一个子表达式的值设为<code>?</code></p></blockquote><ul><li><code>L</code> 字符仅被用于天（月）和天（星期）两个子表达式，它是单词“last”的缩写，表示最后的，用在日期上表示每月最后几天，用在星期上表示每月最后一周的周几</li></ul><blockquote><p>注： 如果在“L”前有具体的内容，它就具有其他的含义了。例如：“6L”用在日期元素上，表示这个月的倒数第６天</p><p>注意：在使用“L”参数时，不要指定列表或范围，因为这会导致问题</p></blockquote><ul><li><code>W</code>字符代表着工作日(Mon-Fri / 周一 ~ 周五)，并且仅能用于日域中。它用来指定离指定日的最近的一个工作日。</li></ul><blockquote><p>例如：</p><p>日域中的 15W 意味着 &quot;离该月15号的最近一个工作日。&quot; 假如15号是星期六，那么 trigger 会在14号(星期五)触发，因为星期四比星期一离15号更近。如果15号是周日，则任务会在周一也就是16号触发。<br> 如果 是在日期域填写 <code>1W</code> 即使1号是周六，那么任务也只会在下周一，也就是3号触发，“W”字符指定的最近工作日是不能够跨月份的。字符“W”只能配合一个 单独的数值使用，不能够是一个数字段，如：1-15W是错误的。</p></blockquote><ul><li><code>L</code> 和<code>W</code>可以在日期域中联合使用，LW表示这个月最后一周的工作日。</li><li><code>#</code> 只允许在 星期域 中出现。这个字符用于指定本月的某某天。(格式： 星期中天数的编号1-7/月中的第几周1-5) 例如：“6#3”表示本月第三周的星期五（6表示星期五，3表示第三周）。“2#1”表示本月第一周的星期一。“4#5”表示第五周的星期三。</li><li><code>C</code>：代表“Calendar”的意思。它的意思是计划所关联的日期，如果日期没有被关联，则相当于日历中所有日期。例如: 5C在日期字段中就相当于日历5日以后的第一天。1C在星期字段中相当于星期日后的第一天。 （暂不理解）</li></ul><table><thead><tr><th>字段</th><th>允许值</th><th>允许的特殊字符</th><th>特殊字符说明</th></tr></thead><tbody><tr><td>秒</td><td>0-59</td><td>, - * /</td><td>&quot; , &quot; (逗号)：用来指定元素中的一个列表</td></tr><tr><td>分</td><td>0-59</td><td>, - * /</td><td>&quot; - ” 字符被用来指定一个范围(连续区间)</td></tr><tr><td>小时</td><td>0-23</td><td>, - * /</td><td>&quot; / &quot; 字符用于指定增量</td></tr><tr><td>日期(天)</td><td>1-31</td><td>, - * ? / L W C</td><td>&quot; * &quot; 字符代表所有可能的值</td></tr><tr><td>月份</td><td>1-12 或者 JAN-DEC</td><td>, - * /</td><td>L W C 参考上面解释</td></tr><tr><td>星期</td><td>1-7 或者 SUN-SAT</td><td>, - * ? / L C #</td><td></td></tr><tr><td>年（可选）</td><td>留空, 1970-2199</td><td>, - * /</td><td></td></tr></tbody></table><ul><li>0）<code>0/2 * * * * ?</code> 表示每2秒 执行任务</li><li>0）<code>0 0/2 * * * ?</code> 表示每2分钟 执行任务</li><li>1）<code>0 0 2 1 * ?</code> 表示在每月的1日的凌晨2点调整任务</li><li>2）<code>0 15 10 ? * MON-FRI</code> 表示周一到周五每天上午10:15执行作业</li><li>3）<code>0 15 10 ? 6L 2002-2006</code> 表示2002-2006年的每个月的最后一个星期五上午10:15执行作</li><li>4）<code>0 0 10,14,16 * * ?</code> 每天上午10点，下午2点，4点</li><li>5）<code>0 0/30 9-17 * * ?</code> 朝九晚五工作时间内每半小时</li><li>6）<code>0 0 12 ? * WED</code> 表示每个星期三中午12点</li><li>7）<code>0 0 12 * * ?</code> 每天中午12点触发</li><li>8）<code>0 15 10 ? * *</code> 每天上午10:15触发</li><li>9）<code>0 15 10 * * ?</code> 每天上午10:15触发</li><li>10）<code>0 15 10 * * ?</code> 每天上午10:15触发</li><li>11）<code>0 15 10 * * ? 2005</code> 2005年的每天上午10:15触发</li><li>12）<code>0 * 14 * * ?</code> 在每天下午2点到下午2:59期间的每1分钟触发</li><li>13）<code>0 0/5 14 * * ?</code> 在每天下午2点到下午2:55期间的每5分钟触发</li><li>14）<code>0 0/5 14,18 * * ?</code> 在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发</li><li>15）<code>0 0-5 14 * * ?</code> 在每天下午2点到下午2:05期间的每1分钟触发</li><li>16）<code>0 10,44 14 ? 3 WED</code> 每年三月的星期三的下午2:10和2:44触发</li><li>17）<code>0 15 10 ? * MON-FRI</code> 周一至周五的上午10:15触发</li><li>18）<code>0 15 10 15 * ?</code> 每月15日上午10:15触发</li><li>19）<code>0 15 10 L * ?</code> 每月最后一日的上午10:15触发</li><li>20）<code>0 15 10 ? * 6L</code> 每月的最后一个星期五上午10:15触发</li><li>21）<code>0 15 10 ? * 6L 2002-2005</code> 2002年至2005年的每月的最后一个星期五上午10:15触发</li><li>22）<code>0 15 10 ? * 6#3</code> 每月的第三个星期五上午10:15触发</li></ul>`,13);function g(_,v){const t=d("ExternalLinkIcon");return c(),l("div",null,[p,u,m,e("p",null,[e("a",h,[i("CRON表达式在线验证网址"),r(t)])]),b])}const k=o(s,[["render",g],["__file","timed-task.html.vue"]]),q=JSON.parse('{"path":"/java/timed-task.html","title":"常用的定时任务组件","lang":"zh-CN","frontmatter":{"icon":"java","title":"常用的定时任务组件","category":["Java"],"headerDepth":5,"date":"2020-01-01T00:00:00.000Z","tag":["定时任务"],"description":"创建的几种定时任务组件（Quartz、xxl-job、PowerJob、SchudulerX 2.0）","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/java/timed-task.html"}],["meta",{"property":"og:title","content":"常用的定时任务组件"}],["meta",{"property":"og:description","content":"创建的几种定时任务组件（Quartz、xxl-job、PowerJob、SchudulerX 2.0）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"定时任务"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用的定时任务组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"常用的表达式","slug":"常用的表达式","link":"#常用的表达式","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":4.83,"words":1448},"filePathRelative":"java/timed-task.md","localizedDate":"2020年1月1日","excerpt":"<p>创建的几种定时任务组件（Quartz、xxl-job、PowerJob、SchudulerX 2.0）</p>\\n","autoDesc":true}');export{k as comp,q as data};