import{_ as s,g as n,j as a,y as l}from"./app.c855f618.js";const C=JSON.parse('{"title":"\u6570\u636E\u6709\u5E8F\uFF0C\u76F8\u540C\u5143\u7D20\u4FDD\u7559 k \u4F4D\u6A21\u7248","description":"","frontmatter":{"title":"\u6570\u636E\u6709\u5E8F\uFF0C\u76F8\u540C\u5143\u7D20\u4FDD\u7559 `k` \u4F4D\u6A21\u7248","author":"Younglina","date":"2022-02-15","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u7B97\u6CD5\u6A21\u7248"]},"headers":[],"relativePath":"write/algorithms-temp/remove-duplicates.md","lastUpdated":1657193956000}'),p={name:"write/algorithms-temp/remove-duplicates.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/solution/gong-shui-san-xie-guan-yu-shan-chu-you-x-glnq/" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u3010\u5BAB\u6C34\u4E09\u53F6\u3011\u5173\u4E8E\u300C\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u91CD\u590D\u9879\u300D\u7684\u901A\u89E3</a></p></div><p><strong>\u8FD9\u662F\u4E00\u79CD\u9488\u5BF9\u300C\u6570\u636E\u6709\u5E8F\uFF0C\u76F8\u540C\u5143\u7D20\u4FDD\u7559 <code>k</code> \u4F4D\u300D\u95EE\u9898\u66F4\u52A0\u672C\u8D28\u7684\u89E3\u6CD5\uFF0C\u8BE5\u89E3\u6CD5\u662F\u4ECE\u6027\u8D28\u51FA\u53D1\u63D0\u70BC\u7684\uFF0C\u5229\u7528\u4E86\u300C\u6570\u7EC4\u6709\u5E8F &amp; \u4FDD\u7559\u903B\u8F91\u300D\u4E24\u5927\u4E3B\u8981\u6027\u8D28\u3002</strong></p><p>\u4F8B\u5982\uFF1A<a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/" target="_blank" rel="noopener noreferrer">80. \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879 II</a></p><p>\u4E3A\u4E86\u8BA9\u89E3\u6CD5\u66F4\u5177\u6709\u4E00\u822C\u6027\uFF0C\u6211\u4EEC\u5C06\u539F\u95EE\u9898\u7684\u300C\u4FDD\u7559 2 \u4F4D\u300D\u4FEE\u6539\u4E3A\u300C\u4FDD\u7559 k \u4F4D\u300D\u3002</p><p>\u5BF9\u4E8E\u6B64\u7C7B\u95EE\u9898\uFF0C\u6211\u4EEC\u5E94\u8BE5\u8FDB\u884C\u5982\u4E0B\u8003\u8651\uFF1A</p><ul><li>\u7531\u4E8E\u662F\u4FDD\u7559 k \u4E2A\u76F8\u540C\u6570\u5B57\uFF0C\u5BF9\u4E8E\u524D k \u4E2A\u6570\u5B57\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4FDD\u7559</li><li>\u5BF9\u4E8E\u540E\u9762\u7684\u4EFB\u610F\u6570\u5B57\uFF0C\u80FD\u591F\u4FDD\u7559\u7684\u524D\u63D0\u662F\uFF1A\u4E0E\u5F53\u524D\u5199\u5165\u7684\u4F4D\u7F6E\u524D\u9762\u7684\u7B2C k \u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\uFF0C\u4E0D\u76F8\u540C\u5219\u4FDD\u7559</li></ul><p>\u4E3E\u4E2A\u{1F330}\uFF0C\u6211\u4EEC\u4EE4 k=2\uFF0C\u5047\u8BBE\u6709\u5982\u4E0B\u6837\u4F8B.</p><p>[1,1,1,1,1,1,2,2,2,2,2,2,3]</p><ol><li>\u9996\u5148\u6211\u4EEC\u5148\u8BA9\u524D 2 \u4F4D\u76F4\u63A5\u4FDD\u7559\uFF0C\u5F97\u5230 1,1</li><li>\u5BF9\u540E\u9762\u7684\u6BCF\u4E00\u4F4D\u8FDB\u884C\u7EE7\u7EED\u904D\u5386\uFF0C\u80FD\u591F\u4FDD\u7559\u7684\u524D\u63D0\u662F\u4E0E\u5F53\u524D\u4F4D\u7F6E\u7684\u524D\u9762 k \u4E2A\u5143\u7D20\u4E0D\u540C\uFF08\u7B54\u6848\u4E2D\u7684\u7B2C\u4E00\u4E2A 1\uFF09\uFF0C\u56E0\u6B64\u6211\u4EEC\u4F1A\u8DF3\u8FC7\u5269\u4F59\u7684 1\uFF0C\u5C06\u7B2C\u4E00\u4E2A 2 \u8FFD\u52A0\uFF0C\u5F97\u5230 1,1,2</li><li>\u7EE7\u7EED\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u8FD9\u65F6\u5019\u662F\u548C\u7B54\u6848\u4E2D\u7684\u7B2C 2 \u4E2A 1 \u8FDB\u884C\u5BF9\u6BD4\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5F97\u5230 1,1,2,2</li><li>\u8FD9\u65F6\u5019\u548C\u7B54\u6848\u4E2D\u7684\u7B2C 1 \u4E2A 2 \u6BD4\u8F83\uFF0C\u53EA\u6709\u4E0E\u5176\u4E0D\u540C\u7684\u5143\u7D20\u80FD\u8FFD\u52A0\u5230\u7B54\u6848\uFF0C\u56E0\u6B64\u5269\u4F59\u7684 2 \u88AB\u8DF3\u8FC7\uFF0C3 \u88AB\u8FFD\u52A0\u5230\u7B54\u6848\uFF1A1,1,2,2,3.</li></ol><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> solution </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">u</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//k\u4E3A\u9700\u8981\u4FDD\u7559\u7684\u51E0\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">u</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">u</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">u</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">u</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,10),e=[o];function t(r,c,y,i,F,D){return n(),a("div",null,e)}var m=s(p,[["render",t]]);export{C as __pageData,m as default};
