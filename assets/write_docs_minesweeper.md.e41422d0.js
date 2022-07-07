import{_ as s,g as n,j as a,y as e}from"./app.c855f618.js";const m=JSON.parse('{"title":"\u770Bantfu\u76F4\u64AD\u4E2D\uFF0C\u4E00\u4E9B\u5F00\u53D1\u5C0F\u6280\u5DE7","description":"","frontmatter":{"date":"2022-03-17","title":"\u770Bantfu\u76F4\u64AD\u4E2D\uFF0C\u4E00\u4E9B\u5F00\u53D1\u5C0F\u6280\u5DE7","author":"Younglina","categories":["\u6587\u6863"],"tags":["\u8BB0\u5F55"]},"headers":[{"level":2,"title":"vscode\u914D\u7F6E\u548C\u63D2\u4EF6","slug":"vscode\u914D\u7F6E\u548C\u63D2\u4EF6"},{"level":2,"title":"degit","slug":"degit"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"ni","slug":"ni"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5-1"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528-1"},{"level":2,"title":"\u57FA\u4E8Eon my zsh\u548Cni\u7684\u5FEB\u6377\u6307\u4EE4","slug":"\u57FA\u4E8Eon-my-zsh\u548Cni\u7684\u5FEB\u6377\u6307\u4EE4"},{"level":3,"title":"alias","slug":"alias"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528-2"}],"relativePath":"write/docs/minesweeper.md","lastUpdated":1657193956000}'),l={name:"write/docs/minesweeper.md"},p=e(`<h2 id="vscode\u914D\u7F6E\u548C\u63D2\u4EF6" tabindex="-1">vscode\u914D\u7F6E\u548C\u63D2\u4EF6 <a class="header-anchor" href="#vscode\u914D\u7F6E\u548C\u63D2\u4EF6" aria-hidden="true">#</a></h2><p><a href="https://github.com/antfu/vscode-settings" target="_blank" rel="noopener noreferrer">GitHub</a></p><h2 id="degit" tabindex="-1">degit <a class="header-anchor" href="#degit" aria-hidden="true">#</a></h2><p><code>degit</code>\u7C7B\u4F3C\u4E8E<code>git clone</code>\uFF0C\u5F53\u4F60\u8FD0\u884C<code>degit User/repo</code>\u65F6\uFF0C\u5B83\u4F1A\u5728<code>https://github.com/User/repo</code>\u4E0A<code>clone</code>\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C \u4E0E<code>git clone</code>\u4E0D\u540C\u7684\u5730\u65B9\u5728\u4E8E\uFF0C\u5B83\u4E0D\u4F1A\u4E0B\u8F7D\u6574\u4E2A<code>repo</code>\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u6240\u4EE5\u4F1A\u6BD4<code>git clone</code>\u5FEB\u5F88\u591A</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g degit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">degit antfu/vitesse-lite vue-minesweeper</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E0B\u8F7D\u4E0B\u6765\u7684\u662F\u4E00\u4E2A\u6CA1\u6709.git\u7684\u5305\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u8981\u5173\u8054\u5230\u81EA\u5DF1\u7684git\uFF0C\u5C31git init\u53BB\u5173\u8054</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="ni" tabindex="-1">ni <a class="header-anchor" href="#ni" aria-hidden="true">#</a></h2><p><a href="https://github.com/antfu/ni" target="_blank" rel="noopener noreferrer">ni</a> - use the right package manager\uFF0C\u5B83\u662Fantfu\u5199\u7684\u4E00\u4E2A\u5305\u7BA1\u7406\u5668\uFF0C \u8FD0\u884C\u5B83\u4E4B\u524D\uFF0C\u4F1A\u68C0\u6D4B\u4F60\u7684\u9879\u76EE\u4E2D\u662F\u5426\u5B58\u5728\u9501\u6587\u4EF6\uFF0C\u5982<code>pnpm-lock.yaml\u3001yarn.lock</code>\uFF0C\u5982\u679C\u5B58\u5728\u5219\u8FD0\u884C\u5BF9\u5E94\u7684\u5B89\u88C5\u547D\u4EE4</p><h3 id="\u5B89\u88C5-1" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g @antfu/ni</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528-1" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528-1" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ni</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53D1\u73B0\u9879\u76EE\u4E2D\u6709 \`pnpm-lock.yaml\`\uFF0C\u90A3\u4E48\u5B83\u5C31\u4F1A\u6267\u884C\`pnpm i\`</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53D1\u73B0\u9879\u76EE\u4E2D\u6709 \`yarn.lock\`\uFF0C\u90A3\u4E48\u5B83\u5C31\u4F1A\u6267\u884C\`yarn install\`</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6240\u4EE5\uFF0C\u4F7F\u7528\`ni\`\u4EE5\u540E\u5C31\u4E0D\u7528\u8003\u8651\u4ECE\`git\`\u4E0A\u9762clone\u4E0B\u6765\u7684\u9879\u76EE\u4F7F\u7528\u7684\u90A3\u4E2A\u5305\u7BA1\u7406\u5668\uFF0C\u76F4\u63A5\`ni\`\uFF0C\u5C31\u50CF\`Vue3\`\u4ECE\`yarn\`\u53D8\u5230\`pnpm only\`\u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ni axios</span></span>
<span class="line"><span style="color:#A6ACCD;"># npm i axios</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn add axios</span></span>
<span class="line"><span style="color:#A6ACCD;"># pnpm add axios</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">nr dev --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># npm run dev -- --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn run dev --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"># pnpm run dev -- --port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u57FA\u4E8Eon-my-zsh\u548Cni\u7684\u5FEB\u6377\u6307\u4EE4" tabindex="-1">\u57FA\u4E8Eon my zsh\u548Cni\u7684\u5FEB\u6377\u6307\u4EE4 <a class="header-anchor" href="#\u57FA\u4E8Eon-my-zsh\u548Cni\u7684\u5FEB\u6377\u6307\u4EE4" aria-hidden="true">#</a></h2><p>\u524D\u63D0\u662F\u5B89\u88C5\u4E86<code>oh my zsh</code>\u548C<code>ni</code>\uFF0C\u901A\u8FC7\u4FEE\u6539<code>.zshrc</code>\u6587\u4EF6\uFF0C\u589E\u52A0<code>alias</code></p><h3 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//nr \u5BF9\u5E94\u4E0A\u9762 ni \u7684\u7528\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">alias d=&quot;nr dev&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">alias s=&quot;nr start&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">alias b=&quot;nr build&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4F7F\u7528-2" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528-2" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u76F4\u63A5\u5728\u63A7\u5236\u53F0\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">d //\u5C31\u662F\u8FD0\u884C\u5982 npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;">s //\u5C31\u662F\u8FD0\u884C\u5982 npm run start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,20),r=[p];function i(c,o,t,d,u,h){return n(),a("div",null,r)}var A=s(l,[["render",i]]);export{m as __pageData,A as default};
