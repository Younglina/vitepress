import{_ as s,c as n,o as a,a as l}from"./app.3d94c128.js";const C=JSON.parse('{"title":"890.\u67E5\u627E\u548C\u66FF\u6362\u6A21\u5F0F","description":"","frontmatter":{"title":"890.\u67E5\u627E\u548C\u66FF\u6362\u6A21\u5F0F","author":"Younglina","date":"2022-06-12","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u5237\u9898","\u56DE\u6EAF","\u4E2D\u7B49"]},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":3,"title":"\u793A\u4F8B 1\uFF1A","slug":"\u793A\u4F8B-1\uFF1A"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3"}],"relativePath":"write/algorithms/leetCode890.md","lastUpdated":null}'),p={name:"write/algorithms/leetCode890.md"},o=l(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/find-and-replace-pattern/" target="_blank" rel="noopener noreferrer">890.\u67E5\u627E\u548C\u66FF\u6362\u6A21\u5F0F</a><br> \u4F60\u6709\u4E00\u4E2A\u5355\u8BCD\u5217\u8868\xA0words\xA0\u548C\u4E00\u4E2A\u6A21\u5F0F\xA0\xA0pattern\uFF0C\u4F60\u60F3\u77E5\u9053 words \u4E2D\u7684\u54EA\u4E9B\u5355\u8BCD\u4E0E\u6A21\u5F0F\u5339\u914D\u3002<br> \u5982\u679C\u5B58\u5728\u5B57\u6BCD\u7684\u6392\u5217 p\xA0\uFF0C\u4F7F\u5F97\u5C06\u6A21\u5F0F\u4E2D\u7684\u6BCF\u4E2A\u5B57\u6BCD x \u66FF\u6362\u4E3A p(x) \u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u5F97\u5230\u4E86\u6240\u9700\u7684\u5355\u8BCD\uFF0C\u90A3\u4E48\u5355\u8BCD\u4E0E\u6A21\u5F0F\u662F\u5339\u914D\u7684\u3002<br> \uFF08\u56DE\u60F3\u4E00\u4E0B\uFF0C\u5B57\u6BCD\u7684\u6392\u5217\u662F\u4ECE\u5B57\u6BCD\u5230\u5B57\u6BCD\u7684\u53CC\u5C04\uFF1A\u6BCF\u4E2A\u5B57\u6BCD\u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u5B57\u6BCD\uFF0C\u6CA1\u6709\u4E24\u4E2A\u5B57\u6BCD\u6620\u5C04\u5230\u540C\u4E00\u4E2A\u5B57\u6BCD\u3002\uFF09<br> \u8FD4\u56DE words \u4E2D\u4E0E\u7ED9\u5B9A\u6A21\u5F0F\u5339\u914D\u7684\u5355\u8BCD\u5217\u8868\u3002<br> \u4F60\u53EF\u4EE5\u6309\u4EFB\u4F55\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002</p><h3 id="\u793A\u4F8B-1\uFF1A" tabindex="-1">\u793A\u4F8B 1\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-1\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Awords = [&quot;abc&quot;,&quot;deq&quot;,&quot;mee&quot;,&quot;aqq&quot;,&quot;dkd&quot;,&quot;ccc&quot;], pattern = &quot;abb&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[&quot;mee&quot;,&quot;aqq&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A  </span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;mee&quot; \u4E0E\u6A21\u5F0F\u5339\u914D\uFF0C\u56E0\u4E3A\u5B58\u5728\u6392\u5217 {a -&gt; m, b -&gt; e, ...}\u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;ccc&quot; \u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D\uFF0C\u56E0\u4E3A {a -&gt; c, b -&gt; c, ...} \u4E0D\u662F\u6392\u5217\u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u56E0\u4E3A a \u548C b \u6620\u5C04\u5230\u540C\u4E00\u4E2A\u5B57\u6BCD\u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>1 &lt;= words.length &lt;= 50<br> 1 &lt;= pattern.length = words[i].length &lt;= 20</p></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u628A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u5B57\uFF0C\u6765\u6A21\u62DF\u6392\u5217\uFF0C\u7136\u540E\u6BD4\u8F83\u662F\u5426\u76F8\u7B49\u3002<br> \u5982<code>&#39;abb&#39;=&gt;&#39;122&#39;,&#39;abc&#39;=&gt;&#39;123&#39;</code></p><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> findAndReplacePattern </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">words</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pattern</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">word</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">={},</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">word</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pa</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">toNum</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pattern</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">words</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">toNum</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;">pa</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,9),e=[o];function r(t,c,y,F,i,D){return a(),n("div",null,e)}var u=s(p,[["render",r]]);export{C as __pageData,u as default};
