import{_ as s,c as n,o as a,a as l}from"./app.3d94c128.js";const A=JSON.parse('{"title":"494.\u76EE\u6807\u548C","description":"","frontmatter":{"title":"494.\u76EE\u6807\u548C","author":"Younglina","date":"2022-04-26","showAccessNumber":true,"categories":["\u7B97\u6CD5"],"tags":["\u5237\u9898","\u52A8\u6001\u89C4\u5212","\u4E2D\u7B49"]},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":3,"title":"\u793A\u4F8B 1\uFF1A","slug":"\u793A\u4F8B-1\uFF1A"},{"level":3,"title":"\u793A\u4F8B 2\uFF1A","slug":"\u793A\u4F8B-2\uFF1A"},{"level":3,"title":"\u52A8\u6001\u89C4\u5212\u601D\u8DEF","slug":"\u52A8\u6001\u89C4\u5212\u601D\u8DEF"},{"level":3,"title":"\u9898\u89E3","slug":"\u9898\u89E3"},{"level":3,"title":"\u4F18\u5316","slug":"\u4F18\u5316"}],"relativePath":"write/algorithms/leetCode494.md","lastUpdated":null}'),p={name:"write/algorithms/leetCode494.md"},o=l(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><strong><a href="https://leetcode-cn.com/problems/rotate-function/" target="_blank" rel="noopener noreferrer">494.\u76EE\u6807\u548C</a></strong><br> \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 <code>nums</code> \u548C\u4E00\u4E2A\u6574\u6570 <code>target</code> \u3002<br> \u5411\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u6574\u6570\u524D\u6DFB\u52A0\xA0<code>&#39;+&#39;</code> \u6216 <code>&#39;-&#39;</code> \uFF0C\u7136\u540E\u4E32\u8054\u8D77\u6240\u6709\u6574\u6570\uFF0C\u53EF\u4EE5\u6784\u9020\u4E00\u4E2A \u8868\u8FBE\u5F0F \uFF1A<br> \u4F8B\u5982\uFF0C<code>nums = [2, 1]</code> \uFF0C\u53EF\u4EE5\u5728 <code>2</code> \u4E4B\u524D\u6DFB\u52A0 <code>&#39;+&#39;</code> \uFF0C\u5728 <code>1</code> \u4E4B\u524D\u6DFB\u52A0 <code>&#39;-&#39;</code> \uFF0C\u7136\u540E\u4E32\u8054\u8D77\u6765\u5F97\u5230\u8868\u8FBE\u5F0F <code>&quot;+2-1&quot;</code> \u3002<br> \u8FD4\u56DE\u53EF\u4EE5\u901A\u8FC7\u4E0A\u8FF0\u65B9\u6CD5\u6784\u9020\u7684\u3001\u8FD0\u7B97\u7ED3\u679C\u7B49\u4E8E <code>target</code> \u7684\u4E0D\u540C \u8868\u8FBE\u5F0F \u7684\u6570\u76EE\u3002</p><h3 id="\u793A\u4F8B-1\uFF1A" tabindex="-1">\u793A\u4F8B 1\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-1\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [1,1,1,1,1], target = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A5  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u4E00\u5171\u6709 5 \u79CD\u65B9\u6CD5\u8BA9\u6700\u7EC8\u76EE\u6807\u548C\u4E3A 3 \u3002  </span></span>
<span class="line"><span style="color:#A6ACCD;">-1 + 1 + 1 + 1 + 1 = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;">+1 - 1 + 1 + 1 + 1 = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;">+1 + 1 - 1 + 1 + 1 = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;">+1 + 1 + 1 - 1 + 1 = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;">+1 + 1 + 1 + 1 - 1 = 3  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u793A\u4F8B-2\uFF1A" tabindex="-1">\u793A\u4F8B 2\uFF1A <a class="header-anchor" href="#\u793A\u4F8B-2\uFF1A" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [1], target = 1  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A1  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>1 &lt;= nums.length &lt;= 20<br> 0 &lt;= nums[i] &lt;= 1000<br> 0 &lt;= sum(nums[i]) &lt;= 1000<br> -1000 &lt;= target &lt;= 1000</p></div><h3 id="\u52A8\u6001\u89C4\u5212\u601D\u8DEF" tabindex="-1">\u52A8\u6001\u89C4\u5212\u601D\u8DEF <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212\u601D\u8DEF" aria-hidden="true">#</a></h3><p>\u9898\u610F\u4E3A\uFF0C\u6709<code>+</code>\u4E32\u8054\u7684\u6574\u6570\u548C\u4E3A<code>p</code>, \u6709<code>-</code>\u4E32\u8054\u7684\u6574\u6570\u548C\u4E3A<code>m</code>, \u5982nums=[1,1,1,1,1], target=3,sum=5,\u4E2D\u7684 <code>-1 + 1 + 1 + 1 + 1</code><br> p\u4E3A4\u4E2A<code>+</code>\u7684\u6574\u6570\u548C,m\u4E3A1\u4E2A<code>-</code>\u7684\u6574\u6570\u548C\uFF0C\u5373 <code>p=4,m=1</code>,\u53EF\u77E5</p><ul><li>p+m=sum</li><li>p-m=target p=(sum+target)/2, m=(sum-target)/2<br> \u6240\u4EE5\u9898\u610F\u53EF\u8F6C\u6362\u4E3A\uFF0C\u4ECE\u6570\u7EC4<code>nums</code>\u4E2D\uFF0C\u662F\u5426\u53EF\u4EE5\u9009\u51FA\u4E00\u4E9B\u6570\u5B57\uFF08\u53EA\u80FD\u9009\u4E00\u6B21\uFF09\uFF0C\u4F7F\u5F97\u9009\u51FA\u7684\u6570\u5B57\u548C\u4E3A<code>p</code>\u6216\u7740<code>m</code>\uFF0C\u53EF\u4EE5\u770B\u51FA\u8FD9\u5C31\u662F<code>01\u80CC\u5305</code><br><code>dp[i][j]</code>\u5C31\u662F\u4ECE\u524D<code>i</code>\u4E2A\u6570\u5B57\u4E2D\u9009\u51FA\u4E00\u4E9B\u6570\u5B57\uFF0C\u4F7F\u5176\u548C\u4E3A<code>j</code>\u7684\u65B9\u6848\u6570\u76EE\uFF0C\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u4E3A\uFF1A</li><li>\u4E0D\u9009\u7B2Ci\u4E2A\u6570\u5B57\u65F6\uFF0C\u524Di-1\u4E2A\u6570\u5B57\u548C\u4E3Aj\u7684\u65B9\u6848\u6570 dp[i][j] = dp[i-1][j]</li><li>\u9009\u7B2Ci\u4E2A\u6570\u5B57\u65F6\uFF0C\u524Di-1\u4E2A\u7684\u65B9\u6848\u6570\uFF0C\u52A0\u4E0A\u524Di-1\u4E2A\u6570\u5B57\u548C\u4E3Aj-nums[i]\u7684\u65B9\u6848\u6570\uFF0Cdp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i]] \u8FB9\u754C\u60C5\u51B5\uFF1A<br> \u5F53<code>i=0</code>\u65F6\uFF0C\u8868\u793A\u4ECE<code>0</code>\u4E2A\u6570\u5B57\u4E2D\u9009\u53D6\u548C\u4E3A<code>j</code>\u7684\u65B9\u6848\u6570\uFF0C\u5F53<code>j=0</code>\u65F6\uFF0C\u5219<code>dp[0][0]=1</code>,\u5F53<code>j&gt;0</code>\u65F6\uFF0C<code>dp[0][j]=0</code><br> \u6240\u4EE5\u5916\u5C42\u5FAA\u73AF\u4ECE<code>i=1</code>\u5F00\u59CB\uFF0C\u800C\u7B2C<code>i</code>\u4E2A\u6570\u5B57\u5BF9\u5E94\u7684\u662F<code>nums[i-1]</code></li></ul><h3 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> findTargetSumWays </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u6570\u7EC4\u603B\u548C\u6BD4target\u5C0F\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u65B9\u6848</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">%</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">!==</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u6570\u7EC4\u603B\u548C+target\u9700\u8981\u88AB2\u6574\u9664\uFF0C\u4E0D\u7136bag\u4E0D\u662F\u6574\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#F07178;">(</span><span style="color:#FFCB6B;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#FFCB6B;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bag</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">bag</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#676E95;font-style:italic;">// j&lt;nums[i-1]\u65F6\uFF0C\u65E0\u6CD5\u518D\u9009\u53D6\u5F53\u524Dnums[i-1]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">bag</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u4F18\u5316" tabindex="-1">\u4F18\u5316 <a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a></h3><p>\u6BCF\u4E00\u884Cdp\u7684\u503C\uFF0C\u90FD\u53EA\u4E0E\u4E0A\u65B9\u548C\u5DE6\u4E0A\u65B9\u6709\u5173<br> dp[i][j] = dp[i-1][j] \u4E0A\u65B9\u72B6\u6001\u503C<br> dp[i][j] = dp[i-1][j]+dp[i-1][j-nums[i-1]] \u4E0A\u65B9+\u5DE6\u4E0A\u65B9\u72B6\u6001\u503C<br> \u53EF\u4F18\u5316\u4E3A\u4E00\u7EF4\u6570\u7EC4 dp[j] = dp[j-1] \u4E0A\u65B9 dp[j] = dp[j-1]+dp[j-nums[i-1]] \u4E0A\u65B9+\u5DE6\u4E0A\u65B9\u72B6\u6001\u503C<br> \u6B64\u65F6\u5185\u90E8\u5FAA\u73AF\u9700\u8981\u5012\u53D9\u904D\u5386\uFF0C\u4ECE\u5C0F\u5230\u5927\u8BA1\u7B97\u7684\u8BDD\uFF0C\u90A3\u4E48 <code>dp[j\u2212nums[i-1]]</code> \u4F1A\u5148\u4E8E <code>dp[j]</code> \u88AB\u66F4\u65B0\uFF0C\u5F53\u8BA1\u7B97 <code>dp[j]</code> \u7684\u65F6\u5019\uFF0C<code>dp[j\u2212nums[i-1]]</code>\u5DF2\u7ECF\u662F\u88AB\u66F4\u65B0\u8FC7\u7684\u72B6\u6001\uFF0C\u800C\u4E0D\u518D\u662F\u4E0A\u4E00\u884C\u7684\u72B6\u6001\u503C\u4E86\u3002</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> findTargetSumWays </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">%</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">!==</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bag</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">bag</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u5C0F\u4E8Enums[i]\u7684\u5728\u4E0A\u4E00\u8F6E\u5DF2\u7ECF\u8BA1\u7B97</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">bag</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,15),e=[o];function c(r,t,y,F,D,C){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{A as __pageData,d as default};
