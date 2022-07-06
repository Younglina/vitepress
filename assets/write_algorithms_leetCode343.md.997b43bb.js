import{_ as s,c as n,o as a,a as l}from"./app.3d94c128.js";const C=JSON.parse('{"title":"343.\u6574\u6570\u62C6\u5206","description":"","frontmatter":{"title":"343.\u6574\u6570\u62C6\u5206","author":"Younglina","date":"2022-04-14","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u5237\u9898","\u52A8\u6001\u89C4\u5212","\u9012\u5F52","\u4E2D\u7B49"]},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":3,"title":"\u793A\u4F8B 1\uFF1A","slug":"\u793A\u4F8B-1\uFF1A"},{"level":3,"title":"\u793A\u4F8B 2\uFF1A","slug":"\u793A\u4F8B-2\uFF1A"},{"level":2,"title":"\u601D\u8DEF1 \u52A8\u6001\u89C4\u5212","slug":"\u601D\u8DEF1-\u52A8\u6001\u89C4\u5212"},{"level":2,"title":"\u9898\u89E31","slug":"\u9898\u89E31"},{"level":2,"title":"\u601D\u8DEF2 \u9012\u5F52","slug":"\u601D\u8DEF2-\u9012\u5F52"},{"level":2,"title":"\u9898\u89E32","slug":"\u9898\u89E32"}],"relativePath":"write/algorithms/leetCode343.md","lastUpdated":null}'),p={name:"write/algorithms/leetCode343.md"},e=l(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><strong><a href="https://leetcode-cn.com/problems/integer-break/submissions/" target="_blank" rel="noopener noreferrer">343.\u6574\u6570\u62C6\u5206</a></strong><br> \u7ED9\u5B9A\u4E00\u4E2A\u6B63\u6574\u6570 <code>n</code> \uFF0C\u5C06\u5176\u62C6\u5206\u4E3A <code>k</code> \u4E2A \u6B63\u6574\u6570 \u7684\u548C<code>\uFF08 k &gt;= 2 \uFF09</code>\uFF0C\u5E76\u4F7F\u8FD9\u4E9B\u6574\u6570\u7684\u4E58\u79EF\u6700\u5927\u5316\u3002<br> \u8FD4\u56DE <em>\u4F60\u53EF\u4EE5\u83B7\u5F97\u7684\u6700\u5927\u4E58\u79EF</em> \u3002</p><h3 id="\u793A\u4F8B-1\uFF1A" tabindex="-1">\u793A\u4F8B 1\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-1\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165: n = 2  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA: 1  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA: 2 = 1 + 1, 1 \xD7 1 = 1\u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u793A\u4F8B-2\uFF1A" tabindex="-1">\u793A\u4F8B 2\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-2\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165: n = 10  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA: 36  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA: 10 = 3 + 3 + 4, 3 \xD7 3 \xD7 4 = 36\u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>2 &lt;= n &lt;= 58</p></div><h2 id="\u601D\u8DEF1-\u52A8\u6001\u89C4\u5212" tabindex="-1">\u601D\u8DEF1 \u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u601D\u8DEF1-\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h2><div class="path-table"><table><thead><tr><th>2</th><th>3</th></tr></thead><tbody><tr><td>[1,1]=1</td><td>\u4E0D\u62C6\u5206\uFF1Aj=1,i=2,1*2 <br> \u62C6\u5206\uFF1Aj=1,dp[2]=1,1*1</td></tr></tbody></table></div><p><code>dp[n]</code>\uFF1A\u6700\u5927\u4E58\u79EF<br><code>i</code>: \u88AB\u62C6\u5206\u7684\u6570\u5B57\uFF0C\u4ECE3\u5F00\u59CB\uFF0C\u56E0\u4E3A<code>n&gt;=2</code><br><code>j</code>: \u62C6\u5206\u7684\u6B21\u6570\uFF0C\u4ECE1\u5F00\u59CB</p><ol><li>\u786E\u5B9A<code>dp[n]</code>\u4E3A\u62C6\u5206\u6570\u5B57<code>n</code><strong>\u53EF\u4EE5\u83B7\u5F97\u7684\u6700\u5927\u4E58\u79EF</strong>\uFF0C\u8FD9\u4E2A\u4E00\u5B9A\u8981\u60F3\u660E\u767D</li><li>\u83B7\u53D6<code>dp[n]</code>\u6709\u4E24\u79CD\u8DEF\u5F84\uFF0C<code>j</code>\u662F\u62C6\u5206\u51FA\u7684\u7B2C\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u5219\u5269\u4E0B\u7684\u90E8\u5206\u662F <code>n-j</code>\uFF0C<code>n\u2212j</code> \u53EF\u4EE5\u4E0D\u7EE7\u7EED\u62C6\u5206\uFF0C\u6216\u8005\u7EE7\u7EED\u62C6\u5206\u6210\u81F3\u5C11\u4E24\u4E2A\u6B63\u6574\u6570\u7684\u548C</li></ol><ul><li>\u5C06 <code>i</code> \u62C6\u5206\u6210 <code>j</code> \u548C <code>i-j</code> \u7684\u548C\uFF0C\u4E14 <code>i-j</code> \u4E0D\u518D\u62C6\u5206\u6210\u591A\u4E2A\u6B63\u6574\u6570\uFF0C\u6B64\u65F6\u7684\u4E58\u79EF\u662F <code>j*(i\u2212j) </code></li><li>\u5C06 <code>i</code> \u62C6\u5206\u6210 <code>j</code> \u548C <code>i-j</code> \u7684\u548C\uFF0C\u4E14 <code>i-j</code> \u7EE7\u7EED\u62C6\u5206\u6210\u591A\u4E2A\u6B63\u6574\u6570\uFF0C\u6B64\u65F6\u7684\u4E58\u79EF\u662F <code>j*dp[i\u2212j] </code><br> \u4E3A\u4EC0\u4E48\u4E0D\u9700\u8981<code>dp[j]</code>\uFF0C<code>j</code>\u662F\u4ECE<code>1</code>\u5F00\u59CB\u904D\u5386\u7684\uFF0C\u6240\u4EE5<code>j</code>\u5176\u5B9E\u5DF2\u7ECF\u80CC\u5730\u91CC\u62C6\u5206\u8FC7\u4E86<br><code>j * (i - j)</code> \u662F\u5355\u7EAF\u7684\u628A\u6574\u6570\u62C6\u5206\u4E3A\u4E24\u4E2A\u6570\u76F8\u4E58\uFF0C\u800C<code>j * dp[i - j]</code>\u662F\u62C6\u5206\u6210\u4E24\u4E2A\u4EE5\u53CA\u4E24\u4E2A\u4EE5\u4E0A\u7684\u4E2A\u6570\u76F8\u4E58\u3002<br> \u6240\u4EE5\u53EF\u4EE5\u63A8\u51FA\u9012\u63A8\u516C\u5F0F\u4E3A: <code>dp[i] = Math.max(dp[i], j*(i-j), j*dp[i-j])</code></li></ul><ol start="3"><li>\u521D\u59CB\u5316<code>dp</code>\uFF0C<code>0,1</code>\u90FD\u662F\u65E0\u610F\u4E49\u7684\uFF0C<code>dp[2]=1</code>\uFF0C\u5916\u5C42\u76F4\u63A5\u4ECE<code>3</code>\u5F00\u59CB\u904D\u5386\uFF0C\u5185\u5C42\u4ECE<code>1</code>\u5F00\u59CB\u904D\u5386\uFF0C\u628A<code>dp[i]</code>\u3001<code>j*(i-j)</code>\u548C<code>j*dp[i-j]</code>\u53D6\u6700\u5927\u503C\uFF0C\u66F4\u65B0<code>dp[i]</code></li></ol><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">n=10</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  0, 0, 0, 0,  0,  0,   0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 0, 0, 0,  0,  0,   0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 6, 0, 0,  0,  0,   0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 6, 9, 0,  0,  0,   0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 6, 9, 12, 0,  0,   0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 6, 9, 12, 18, 0,   0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 6, 9, 12, 18, 27,  0]</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 0,  1,  2,  4, 6, 9, 12, 18, 27,  36]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u9898\u89E31" tabindex="-1">\u9898\u89E31 <a class="header-anchor" href="#\u9898\u89E31" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> integerBreak </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u601D\u8DEF2-\u9012\u5F52" tabindex="-1">\u601D\u8DEF2 \u9012\u5F52 <a class="header-anchor" href="#\u601D\u8DEF2-\u9012\u5F52" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u6570\u5B57<code>n</code>\uFF0C\u5B83\u53EF\u4EE5\u62C6\u5206\u6210<code>1\u5230n-1</code>\uFF0C<code>n-1</code>\u53EF\u4EE5\u9009\u62E9\u62C6\u6216\u8005\u4E0D\u62C6\uFF0C\u5982\u679C\u62C6\u5206\uFF0C\u5373\u9012\u5F52\u62C6\u5206<code>n-1</code><br> \u4E0D\u62C6\u7684\u4E58\u79EF\u4E3A<code>i*(n-i)</code>\uFF0C\u62C6\u7684\u4E3A<code>i*dfs(n-1)</code>\uFF0C\u53D6\u6700\u5927\u503C\u5373\u53EF</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7759603b2d37489dbd40e1dc453063fd~tplv-k3u1fbpfcp-watermark.image?" alt="343.png"></p><h2 id="\u9898\u89E32" tabindex="-1">\u9898\u89E32 <a class="header-anchor" href="#\u9898\u89E32" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> integerBreak </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [] </span><span style="color:#676E95;font-style:italic;">// \u8BB0\u5F55\u5DF2\u62C6\u5206\u7684\u6570\u5B57\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dfs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,21),o=[e];function c(r,t,y,i,F,d){return a(),n("div",null,o)}var A=s(p,[["render",c]]);export{C as __pageData,A as default};
