import{d as n,e as s,f as a,o as p,c as t,b as o,a as e}from"./app.547dde95.js";function l(n,{useSamePromise:s=!1}={}){let a=!1,p=null;return function(...t){if(a)return s&&p?p:new Promise((()=>{}));{const s=n.call(this,...t).then(((...n)=>(a=!1,p=null,Promise.resolve(...n)))).catch(((...n)=>(a=!1,p=null,Promise.reject(...n))));return p=s,a=!0,s}}}const c=l((function(n){return console.log("submiting",n),fetch("https://httpbin.org/delay/1.5",{body:JSON.stringify(n),method:"POST",mode:"cors"})}));var r=n({setup:()=>()=>s("fieldset",null,[s("legend",null,[a("提交场景")]),s("ul",null,[s("li",null,[a("背景：为防止用户重复提交，我们通常需要维护一个 loading 变量，当 loading 数量多起来就难搞了（我也想偷懒）。")]),s("li",null,[a("需求：不需要写 loading，也可以去重")]),s("li",null,[a("原文：https://github.com/bowencool/blog/issues/3")])]),s("button",{onClick:async()=>{await c({msg:"some data to be sent"}),console.log("submit completed")}},[a("submit(click me quickly)")])])});const u=l((function(n){console.log("fetching",n);const s=(.4+2*Math.random()).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${n}`,{method:"GET",mode:"cors"}).then((()=>({data:`result for ${n}`})))}),{useSamePromise:!0});var i=n({setup:()=>()=>s("fieldset",null,[s("legend",null,[a("查询场景")]),s("ul",null,[s("li",null,[a("背景：多个地方需要同一份数据，往往调用（请求）多次。")]),s("li",null,[a("需求：执行（请求）一次，返回同一个结果给多个调用方。")])]),s("button",{onClick:async()=>{const n=await u("abc");console.log("fetched",n)}},[a("Get something same(useSamePromise)")])])});const k=o("h1",{id:"intro",tabindex:"-1"},[a("Intro "),o("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#")],-1),b=o("p",null,"短时间内触发多次，取第一次（仅执行一次）的执行结果。",-1),m=o("p",null,"换句话说，上一个 Promise 结束之前，不会重复执行，直接返回正在 pending 的 Promise。",-1),d=o("h1",{id:"demo",tabindex:"-1"},[a("Demo "),o("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),g=o("blockquote",null,[o("p",null,"demo 以网络请求为例，请打开 Devtool -> Network 查看效果")],-1),h=e('<details><summary>查看代码</summary><div class="language-vue line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> throttleAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">submitApi</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token operator">:</span> object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;submiting&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://httpbin.org/delay/1.5&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> throttledSubmitApi <span class="token operator">=</span> <span class="token function">throttleAsync</span><span class="token punctuation">(</span>submitApi<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>fieldset<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>legend<span class="token operator">&gt;</span>提交场景<span class="token operator">&lt;</span><span class="token operator">/</span>legend<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\n            背景：为防止用户重复提交，我们通常需要维护一个 loading 变量，当\n            loading 数量多起来就难搞了（我也想偷懒）。\n          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>需求：不需要写 loading，也可以去重<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>原文：https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>bowencool<span class="token operator">/</span>blog<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">await</span> <span class="token function">throttledSubmitApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              msg<span class="token operator">:</span> <span class="token string">&#39;some data to be sent&#39;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;submit completed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">&gt;</span>\n          <span class="token function">submit</span><span class="token punctuation">(</span>click me quickly<span class="token punctuation">)</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">&gt;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></details>',1),f=e('<details><summary>查看代码</summary><div class="language-vue line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> throttleAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getApi</span><span class="token punctuation">(</span><span class="token parameter">keywords<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching&#39;</span><span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> delay <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0.4</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://httpbin.org/delay/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>delay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?keywords=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keywords<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">result for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keywords<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> throttledGetApi <span class="token operator">=</span> <span class="token function">throttleAsync</span><span class="token punctuation">(</span>getApi<span class="token punctuation">,</span> <span class="token punctuation">{</span> useSamePromise<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>fieldset<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>legend<span class="token operator">&gt;</span>查询场景<span class="token operator">&lt;</span><span class="token operator">/</span>legend<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>背景：多个地方需要同一份数据，往往调用（请求）多次。<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>需求：执行（请求）一次，返回同一个结果给多个调用方。<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> rez <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">throttledGetApi</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetched&#39;</span><span class="token punctuation">,</span> rez<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">&gt;</span>\n          Get something <span class="token function">same</span><span class="token punctuation">(</span>useSamePromise<span class="token punctuation">)</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">&gt;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></details>',1),y='{"title":"Intro","description":"","frontmatter":{},"relativePath":"functions/throttleAsync/readme.md","lastUpdated":1631440667436}',v={};const w=Object.assign(v,{setup:function(n){return(n,a)=>(p(),t("div",null,[k,b,m,d,g,s(r),h,s(i),f]))}});export{y as __pageData,w as default};
