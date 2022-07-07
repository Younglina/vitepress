import{_ as s,g as n,j as a,y as l}from"./app.c855f618.js";const A=JSON.parse('{"title":"\u6ED1\u52A8\u7A97\u53E3\u6A21\u7248","description":"","frontmatter":{"title":"\u6ED1\u52A8\u7A97\u53E3\u6A21\u7248","author":"Younglina","date":"2022-02-17","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u7B97\u6CD5\u6A21\u7248"]},"headers":[{"level":2,"title":"\u4F8B\u5982 1004.\u6700\u5927\u8FDE\u7EED1\u7684\u4E2A\u6570 III","slug":"\u4F8B\u5982-1004-\u6700\u5927\u8FDE\u7EED1\u7684\u4E2A\u6570-iii"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":3,"title":"\u793A\u4F8B 1\uFF1A","slug":"\u793A\u4F8B-1\uFF1A"},{"level":3,"title":"\u793A\u4F8B 2\uFF1A","slug":"\u793A\u4F8B-2\uFF1A"},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3"}],"relativePath":"write/algorithms-temp/sliding-window.md","lastUpdated":1657193956000}'),p={name:"write/algorithms-temp/sliding-window.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://leetcode-cn.com/problems/max-consecutive-ones-iii/solution/fen-xiang-hua-dong-chuang-kou-mo-ban-mia-f76z/" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u3010fuxuemingzhu\u3011\u5173\u4E8E\u300C\u6ED1\u52A8\u7A97\u53E3\u300D\u7684\u6A21\u7248</a></p></div><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> solution </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u6570\u7EC4/\u5B57\u7B26\u4E32\u957F\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u53CC\u6307\u9488\uFF0C\u8868\u793A\u5F53\u524D\u904D\u5386\u7684\u533A\u95F4[left, right]\uFF0C\u95ED\u533A\u95F4</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u7528\u4E8E\u7EDF\u8BA1 \u5B50\u6570\u7EC4/\u5B50\u533A\u95F4 \u662F\u5426\u6709\u6548\uFF0C\u6839\u636E\u9898\u76EE\u53EF\u80FD\u4F1A\u6539\u6210\u6C42\u548C/\u8BA1\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u4FDD\u5B58\u6700\u5927\u7684\u6EE1\u8DB3\u9898\u76EE\u8981\u6C42\u7684 \u5B50\u6570\u7EC4/\u5B50\u4E32 \u957F\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5F53\u53F3\u8FB9\u7684\u6307\u9488\u6CA1\u6709\u641C\u7D22\u5230 \u6570\u7EC4/\u5B57\u7B26\u4E32 \u7684\u7ED3\u5C3E</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">] </span><span style="color:#676E95;font-style:italic;">// \u589E\u52A0\u5F53\u524D\u53F3\u8FB9\u6307\u9488\u7684\u6570\u5B57/\u5B57\u7B26\u7684\u6C42\u548C/\u8BA1\u6570</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">\u533A\u95F4</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">]</span><span style="color:#A6ACCD;">\u4E0D\u7B26\u5408\u9898\u610F</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">// \u6B64\u65F6\u9700\u8981\u4E00\u76F4\u79FB\u52A8\u5DE6\u6307\u9488\uFF0C\u76F4\u81F3\u627E\u5230\u4E00\u4E2A\u7B26\u5408\u9898\u610F\u7684\u533A\u95F4</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;">] </span><span style="color:#676E95;font-style:italic;">// \u79FB\u52A8\u5DE6\u6307\u9488\u524D\u9700\u8981\u4ECEcounter\u4E2D\u51CF\u5C11left\u4F4D\u7F6E\u5B57\u7B26\u7684\u6C42\u548C/\u8BA1\u6570</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//  \u771F\u6B63\u7684\u79FB\u52A8\u5DE6\u6307\u9488\uFF0C\u6CE8\u610F\u4E0D\u80FD\u8DDF\u4E0A\u9762\u4E00\u884C\u4EE3\u7801\u5199\u53CD</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// \u9700\u8981\u66F4\u65B0\u7ED3\u679C</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//  \u79FB\u52A8\u53F3\u6307\u9488\uFF0C\u53BB\u63A2\u7D22\u65B0\u7684\u533A\u95F4</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6ED1\u52A8\u7A97\u53E3\u4E2D\u7528\u5230\u4E86\u5DE6\u53F3\u4E24\u4E2A\u6307\u9488\uFF0C\u5B83\u4EEC\u79FB\u52A8\u7684\u601D\u8DEF\u662F\uFF1A\u4EE5\u53F3\u6307\u9488\u4F5C\u4E3A\u9A71\u52A8\uFF0C\u62D6\u7740\u5DE6\u6307\u9488\u5411\u524D\u8D70\u3002\u53F3\u6307\u9488\u6BCF\u6B21\u53EA\u79FB\u52A8\u4E00\u6B65\uFF0C\u800C\u5DE6\u6307\u9488\u5728\u5185\u90E8 <code>while</code> \u5FAA\u73AF\u4E2D\u6BCF\u6B21\u53EF\u80FD\u79FB\u52A8\u591A\u6B65\u3002\u53F3\u6307\u9488\u662F\u4E3B\u52A8\u524D\u79FB\uFF0C\u63A2\u7D22\u672A\u77E5\u7684\u65B0\u533A\u57DF\uFF1B\u5DE6\u6307\u9488\u662F\u88AB\u8FEB\u79FB\u52A8\uFF0C\u8D1F\u8D23\u5BFB\u627E\u6EE1\u8DB3\u9898\u610F\u7684\u533A\u95F4\u3002</p><p>\u6A21\u677F\u7684\u6574\u4F53\u601D\u60F3\u662F\uFF1A</p><p>\u5B9A\u4E49\u4E24\u4E2A\u6307\u9488 <code>left</code> \u548C <code>right</code> \u5206\u522B\u6307\u5411\u533A\u95F4\u7684\u5F00\u5934\u548C\u7ED3\u5C3E\uFF0C\u6CE8\u610F\u662F\u95ED\u533A\u95F4\uFF1B\u5B9A\u4E49 <code>sums</code> \u7528\u6765\u7EDF\u8BA1\u8BE5\u533A\u95F4\u5185\u7684\u5404\u4E2A\u5B57\u7B26\u51FA\u73B0\u6B21\u6570\uFF1B \u7B2C\u4E00\u91CD <code>while</code> \u5FAA\u73AF\u662F\u4E3A\u4E86\u5224\u65AD <code>right</code> \u6307\u9488\u7684\u4F4D\u7F6E\u662F\u5426\u8D85\u51FA\u4E86\u6570\u7EC4\u8FB9\u754C\uFF1B\u5F53 <code>right</code> \u6BCF\u6B21\u5230\u4E86\u65B0\u4F4D\u7F6E\uFF0C\u9700\u8981\u589E\u52A0 <code>right</code> \u6307\u9488\u7684\u6C42\u548C/\u8BA1\u6570\uFF1B \u7B2C\u4E8C\u91CD <code>while</code> \u5FAA\u73AF\u662F\u8BA9 <code>left</code> \u6307\u9488\u5411\u53F3\u79FB\u52A8\u5230 <code>[left, right]</code> \u533A\u95F4\u7B26\u5408\u9898\u610F\u7684\u4F4D\u7F6E\uFF1B\u5F53 <code>left</code> \u6BCF\u6B21\u79FB\u52A8\u5230\u4E86\u65B0\u4F4D\u7F6E\uFF0C\u9700\u8981\u51CF\u5C11 <code>left</code> \u6307\u9488\u7684\u6C42\u548C/\u8BA1\u6570\uFF1B \u5728\u7B2C\u4E8C\u91CD <code>while</code> \u5FAA\u73AF\u4E4B\u540E\uFF0C\u6210\u529F\u627E\u5230\u4E86\u4E00\u4E2A\u7B26\u5408\u9898\u610F\u7684 <code>[left, right]</code> \u533A\u95F4\uFF0C\u9898\u76EE\u8981\u6C42\u6700\u5927\u7684\u533A\u95F4\u957F\u5EA6\uFF0C\u56E0\u6B64\u66F4\u65B0 <code>res</code> \u4E3A <code>max(res, \u5F53\u524D\u533A\u95F4\u7684\u957F\u5EA6)</code> \u3002 <code>right</code> \u6307\u9488\u6BCF\u6B21\u5411\u53F3\u79FB\u52A8\u4E00\u6B65\uFF0C\u5F00\u59CB\u63A2\u7D22\u65B0\u7684\u533A\u95F4\u3002 \u6A21\u677F\u4E2D\u7684 <code>sums</code> \u9700\u8981\u6839\u636E\u9898\u76EE\u610F\u601D\u5177\u4F53\u53BB\u4FEE\u6539\uFF0C\u672C\u9898\u662F\u6C42\u548C\u9898\u76EE\u56E0\u6B64\u628A <code>sums</code> \u5B9A\u4E49\u6210\u6574\u6570\u7528\u4E8E\u6C42\u548C\uFF1B\u5982\u679C\u662F\u8BA1\u6570\u9898\u76EE\uFF0C\u5C31\u9700\u8981\u6539\u6210\u5B57\u5178\u7528\u4E8E\u8BA1\u6570\u3002\u5F53\u5DE6\u53F3\u6307\u9488\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u66F4\u65B0 <code>sums</code> \u3002</p><p>\u53E6\u5916\u4E00\u4E2A\u9700\u8981\u6839\u636E\u9898\u76EE\u53BB\u4FEE\u6539\u7684\u662F\u5185\u5C42 <code>while</code> \u5FAA\u73AF\u7684\u5224\u65AD\u6761\u4EF6\uFF0C\u5373\uFF1A \u533A\u95F4 <code>[left, right]</code> \u4E0D\u7B26\u5408\u9898\u610F \u3002</p><h2 id="\u4F8B\u5982-1004-\u6700\u5927\u8FDE\u7EED1\u7684\u4E2A\u6570-iii" tabindex="-1">\u4F8B\u5982 1004.\u6700\u5927\u8FDE\u7EED1\u7684\u4E2A\u6570 III <a class="header-anchor" href="#\u4F8B\u5982-1004-\u6700\u5927\u8FDE\u7EED1\u7684\u4E2A\u6570-iii" aria-hidden="true">#</a></h2><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/max-consecutive-ones-iii/" target="_blank" rel="noopener noreferrer">1004.\u6700\u5927\u8FDE\u7EED1\u7684\u4E2A\u6570 III</a><br> \u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6570\u7EC4 <code>nums</code> \u548C\u4E00\u4E2A\u6574\u6570 <code>k</code> \uFF0C\u5982\u679C\u53EF\u4EE5\u7FFB\u8F6C\u6700\u591A<code>k</code> \u4E2A <code>0</code> \uFF0C\u5219\u8FD4\u56DE \u6570\u7EC4\u4E2D\u8FDE\u7EED <code>1</code> \u7684\u6700\u5927\u4E2A\u6570 \u3002</p><h3 id="\u793A\u4F8B-1\uFF1A" tabindex="-1">\u793A\u4F8B 1\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-1\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [1,1,1,0,0,0,1,1,1,1,0], K = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A[1,1,1,0,0,1,1,1,1,1,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7C97\u4F53\u6570\u5B57\u4ECE 0 \u7FFB\u8F6C\u5230 1\uFF0C\u6700\u957F\u7684\u5B50\u6570\u7EC4\u957F\u5EA6\u4E3A 6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u793A\u4F8B-2\uFF1A" tabindex="-1">\u793A\u4F8B 2\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-2\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A10</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7C97\u4F53\u6570\u5B57\u4ECE 0 \u7FFB\u8F6C\u5230 1\uFF0C\u6700\u957F\u7684\u5B50\u6570\u7EC4\u957F\u5EA6\u4E3A 10\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> longestOnes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,15),e=[o];function c(r,t,y,i,F,D){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{A as __pageData,d as default};
