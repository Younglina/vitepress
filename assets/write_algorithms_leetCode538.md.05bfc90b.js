import{_ as s,c as n,o as a,a as l}from"./app.3d94c128.js";const A=JSON.parse('{"title":"538.\u628A\u4E8C\u53C9\u641C\u7D22\u6811\u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811","description":"","frontmatter":{"title":"538.\u628A\u4E8C\u53C9\u641C\u7D22\u6811\u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811","author":"Younglina","date":"2022-06-16","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u5237\u9898","\u6570","\u4E2D\u7B49"]},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":3,"title":"\u793A\u4F8B 1\uFF1A","slug":"\u793A\u4F8B-1\uFF1A"},{"level":3,"title":"\u793A\u4F8B 2\uFF1A","slug":"\u793A\u4F8B-2\uFF1A"},{"level":3,"title":"\u793A\u4F8B 3\uFF1A","slug":"\u793A\u4F8B-3\uFF1A"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3"}],"relativePath":"write/algorithms/leetCode538.md","lastUpdated":null}'),e={name:"write/algorithms/leetCode538.md"},p=l(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/convert-bst-to-greater-tree/" target="_blank" rel="noopener noreferrer">538.\u628A\u4E8C\u53C9\u641C\u7D22\u6811\u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811</a><br> \u7ED9\u51FA\u4E8C\u53C9 \u641C\u7D22 \u6811\u7684\u6839\u8282\u70B9\uFF0C\u8BE5\u6811\u7684\u8282\u70B9\u503C\u5404\u4E0D\u76F8\u540C\uFF0C\u8BF7\u4F60\u5C06\u5176\u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811\uFF08Greater Sum Tree\uFF09\uFF0C\u4F7F\u6BCF\u4E2A\u8282\u70B9 node\xA0\u7684\u65B0\u503C\u7B49\u4E8E\u539F\u6811\u4E2D\u5927\u4E8E\u6216\u7B49\u4E8E\xA0node.val\xA0\u7684\u503C\u4E4B\u548C\u3002<br> \u63D0\u9192\u4E00\u4E0B\uFF0C\u4E8C\u53C9\u641C\u7D22\u6811\u6EE1\u8DB3\u4E0B\u5217\u7EA6\u675F\u6761\u4EF6\uFF1A<br> \u8282\u70B9\u7684\u5DE6\u5B50\u6811\u4EC5\u5305\u542B\u952E \u5C0F\u4E8E \u8282\u70B9\u952E\u7684\u8282\u70B9\u3002<br> \u8282\u70B9\u7684\u53F3\u5B50\u6811\u4EC5\u5305\u542B\u952E \u5927\u4E8E \u8282\u70B9\u952E\u7684\u8282\u70B9\u3002<br> \u5DE6\u53F3\u5B50\u6811\u4E5F\u5FC5\u987B\u662F\u4E8C\u53C9\u641C\u7D22\u6811\u3002</p><h3 id="\u793A\u4F8B-1\uFF1A" tabindex="-1">\u793A\u4F8B 1\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-1\uFF1A" aria-hidden="true">#</a></h3><p><img src="https://raw.githubusercontent.com/Younglina/images/master/538.png" alt=""></p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1A[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u793A\u4F8B-2\uFF1A" tabindex="-1">\u793A\u4F8B 2\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-2\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [0,null,1]  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[1,null,1]  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u793A\u4F8B-3\uFF1A" tabindex="-1">\u793A\u4F8B 3\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-3\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [1,0,2]  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[3,3,2]  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u6811\u4E2D\u7684\u8282\u70B9\u6570\u4ECB\u4E8E 0 \u548C 104 \u4E4B\u95F4\u3002<br> \u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u4ECB\u4E8E -104 \u548C 104 \u4E4B\u95F4\u3002<br> \u6811\u4E2D\u7684\u6240\u6709\u503C \u4E92\u4E0D\u76F8\u540C \u3002<br> \u7ED9\u5B9A\u7684\u6811\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811\u3002</p></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u6839\u636E\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9A\u4E49\u53EF\u77E5\uFF0C\u5982\u679C\u5BF9\u6811\u8FDB\u884C\u6B63\u5E38\u7684\u4E2D\u5E8F\u904D\u5386\uFF0C\u90A3\u4E48\u7ED3\u679C\u5C31\u662F\u4E00\u4E2A\u5347\u5E8F\u7684\u6570\u7EC4\u3002<br> \u800C\u5982\u679C\u6539\u53D8\u4E2D\u5E8F\u904D\u5386\u4E2D\u5148\u5DE6\u540E\u53F3\u7684\u987A\u5E8F\uFF0C\u8FDB\u884C\u9006\u5E8F\u904D\u5386\uFF0C\u7136\u540E\u76F4\u63A5\u8FDB\u884C\u7D2F\u52A0\u5C31\u80FD\u5F97\u5230\u7ED3\u679C<br> \u5982\u4F8B\u4E00\u4E2D\uFF0C\u6B63\u5E38\u4E2D\u5E8F\u904D\u5386\u83B7\u53D6\u7684\u6570\u636E\u5148\u540E\u987A\u5E8F\u4E3A\uFF0C0,1,2,3,4,5,6,7,8<br> \u9006\u5E8F\u4E2D\u5E8F\u904D\u5386\u83B7\u53D6\u7684\u6570\u636E\u5148\u540E\u987A\u5E8F\u4E3A\uFF0C8,7,6,5,4,3,2,1,0</p><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> convertBST </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">func</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">func</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">func</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">func</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,14),o=[p];function r(t,c,i,y,u,d){return a(),n("div",null,o)}var D=s(e,[["render",r]]);export{A as __pageData,D as default};
