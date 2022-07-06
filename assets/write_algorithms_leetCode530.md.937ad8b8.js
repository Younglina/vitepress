import{_ as s,c as n,o as a,a as l}from"./app.3d94c128.js";const A=JSON.parse('{"title":"530.\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u5C0F\u7EDD\u5BF9\u5DEE","description":"","frontmatter":{"title":"530.\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u5C0F\u7EDD\u5BF9\u5DEE","author":"Younglina","date":"2022-06-25","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u5237\u9898","\u6811","\u7B80\u5355"]},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":3,"title":"\u793A\u4F8B 1\uFF1A","slug":"\u793A\u4F8B-1\uFF1A"},{"level":3,"title":"\u793A\u4F8B 2\uFF1A","slug":"\u793A\u4F8B-2\uFF1A"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3"}],"relativePath":"write/algorithms/leetCode530.md","lastUpdated":null}'),e={name:"write/algorithms/leetCode530.md"},p=l(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><strong><a href="https://leetcode.cn/problems/minimum-absolute-difference-in-bst/" target="_blank" rel="noopener noreferrer">530.\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u5C0F\u7EDD\u5BF9\u5DEE</a></strong><br> \u7ED9\u4F60\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6839\u8282\u70B9 root \uFF0C\u8FD4\u56DE \u6811\u4E2D\u4EFB\u610F\u4E24\u4E0D\u540C\u8282\u70B9\u503C\u4E4B\u95F4\u7684\u6700\u5C0F\u5DEE\u503C \u3002<br> \u5DEE\u503C\u662F\u4E00\u4E2A\u6B63\u6570\uFF0C\u5176\u6570\u503C\u7B49\u4E8E\u4E24\u503C\u4E4B\u5DEE\u7684\u7EDD\u5BF9\u503C\u3002</p><h3 id="\u793A\u4F8B-1\uFF1A" tabindex="-1">\u793A\u4F8B 1\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-1\uFF1A" aria-hidden="true">#</a></h3><pre><code>     4  
    / \\   
   2   6  
   /\\  
  1  3  
</code></pre><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [4,2,6,1,3]  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A1  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u793A\u4F8B-2\uFF1A" tabindex="-1">\u793A\u4F8B 2\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-2\uFF1A" aria-hidden="true">#</a></h3><pre><code>     1  
    / \\   
   0  48  
        /\\  
    12  49  
</code></pre><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [1,0,48,null,null,12,49]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u6811\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u8303\u56F4\u662F [2, 104]<br> 0 &lt;= Node.val &lt;= 105</p></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u4E8C\u53C9\u641C\u7D22\u6811\u6709\u4E2A\u6027\u8D28\u4E3A\uFF0C\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u5E8F\u904D\u5386\u5F97\u5230\u7684\u503C\u5E8F\u5217\u662F\u9012\u589E\u6709\u5E8F\u7684\uFF0C\u800C\u5728\u6709\u5E8F\u6570\u5217\u4E2D\uFF0C\u6700\u5C0F\u4E4B\u5DEE\uFF0C\u4E00\u5B9A\u4E3A\u76F8\u90BB\u4E24\u4E2A\u5143\u7D20\u4E4B\u5DEE<br> \u6240\u4EE5\u9898\u610F\u53EF\u7406\u89E3\u4E3A\uFF0C\u5728\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u4E2D\u5E8F\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u6C42\u5F97\u6700\u5C0F\u7684\u76F8\u90BB\u4E24\u4E2A\u5143\u7D20\u4E4B\u5DEE\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u7EF4\u62A4\u4E00\u4E2A\u6700\u5C0F\u5DEE\u503C\uFF0C\u548C\u4E00\u4E2A\u524D\u9A71\u8282\u70B9\u5373\u53EF</p><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> getMinimumDifference </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">Infinity,</span><span style="color:#A6ACCD;">pre</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dfs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pre</span><span style="color:#89DDFF;">!=undefined</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">pre</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">pre</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,13),o=[p];function r(t,c,i,y,F,D){return a(),n("div",null,o)}var C=s(e,[["render",r]]);export{A as __pageData,C as default};
