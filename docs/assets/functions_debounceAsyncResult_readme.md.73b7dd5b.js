import{e as r,g as k,_ as D,o,c,d as C,F as u,h as F,b as l,w as A,a as i,r as d}from"./app.a14f3498.js";function g(n){let s=0;return function(...a){const e=++s;return n.call(this,...a).then((...E)=>e!==s?new Promise(()=>{}):Promise.resolve(...E))}}function B(n){console.log("fetching",n);const s=(.4+Math.random()*2).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${n}`,{method:"GET",mode:"cors"}).then(()=>[`suggestions1 for ${n}`,`suggestions2 for ${n}`,`suggestions3 for ${n}`])}const m=g(B);var h=r({setup(){const n=k([]);return{suggestions:n,async onInput(s){const t=s.target.value,a=await m(t);n.value=a}}}});const y={id:"suggestions"},f=["value"];function b(n,s,t,a,e,E){return o(),c(u,null,[C("input",{onInput:s[0]||(s[0]=(...p)=>n.onInput&&n.onInput(...p)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),C("datalist",y,[(o(!0),c(u,null,F(n.suggestions,p=>(o(),c("option",{key:p,value:p},null,8,f))),128))])],64)}var w=D(h,[["render",b]]);const v=i('<h2 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u7C7B\u4F3C <code>debounce</code> \u7684\u9AD8\u9636\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\uFF0C\u8FD9\u4E2A\u65B0\u51FD\u6570\u8FD4\u56DE\u6700\u540E\u4E00\u6B21\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1\u7ED3\u679C\uFF08\u6267\u884C\u9891\u7387\u8FC7\u9AD8\u65F6\u6216\u6267\u884C\u65F6\u95F4\u4E0D\u5747\u5300\uFF09\u3002</p><p>A debounce-like higher-order function that returns a new function that returns the result of the last asynchronous task executed (when execution is too frequent or when execution time is uneven).</p><p><code>debounceAsyncResult</code> \u548C <a href="./../debounceAsync/readme.html">debounceAsync</a> \u7684\u533A\u522B\u662F\uFF1A <code>debounceAsync</code> \u5904\u7406\u5F02\u6B65\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u673A\u3002 <code>debounceAsyncResult</code> \u5904\u7406\u5DF2\u7ECF\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1\u7684\u7ED3\u679C\u3002</p><p>The difference between <code>debounceAsyncResult</code> and <a href="./../debounceAsync/readme.html">debounceAsync</a> are: <code>debounceAsync</code> handles the timing of asynchronous task execution. <code>debounceAsyncResult</code> handles the result of an asynchronous task that has already been executed.</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><blockquote><p>\u4EE5\u4E0B Demo \u4EE5\u7F51\u7EDC\u8BF7\u6C42\u4E3A\u4F8B\uFF0C\u6253\u5F00 Devtool \u67E5\u770B\u6548\u679C\u3002</p><p>The following demo takes a network request as an example and opens Devtool to see the effect.</p></blockquote>',7),_=i(`<h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">debounceAsyncResult</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>p<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),I='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"../packages/debounceAsyncResult/readme.md","lastUpdated":1644658623411}',T={},S=Object.assign(T,{setup(n){const s=[{filePath:"/Users/zhaobowen/Codes/bowencool/async-utilities/packages/debounceAsyncResult/demo.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Cinput%0A%20%20%20%20%40input%3D%22onInput%22%0A%20%20%20%20type%3D%22text%22%0A%20%20%20%20placeholder%3D%22type%20something%20quickly%22%0A%20%20%20%20list%3D%22suggestions%22%0A%20%20%20%20style%3D%22width%3A%20300px%22%0A%20%20%2F%3E%0A%0A%20%20%3Cdatalist%20id%3D%22suggestions%22%3E%0A%20%20%20%20%3Coption%20v-for%3D%22s%20in%20suggestions%22%20%3Akey%3D%22s%22%20%3Avalue%3D%22s%22%3E%3C%2Foption%3E%0A%20%20%3C%2Fdatalist%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22tsx%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20debounceAsyncResult%20%7D%20from%20'..'%3B%0A%0Aexport%20type%20HTMLElementEvent%3CT%20extends%20HTMLElement%3E%20%3D%20Event%20%26%20%7B%0A%20%20target%3A%20T%3B%0A%20%20%2F%2F%20currentTarget%3A%20T%3B%0A%7D%3B%0A%0Afunction%20searchApi(keywords%3A%20string)%20%7B%0A%20%20console.log('fetching'%2C%20keywords)%3B%0A%20%20const%20delay%20%3D%20(0.4%20%2B%20Math.random()%20*%202).toFixed(3)%3B%0A%20%20return%20fetch(%60https%3A%2F%2Fhttpbin.org%2Fdelay%2F%24%7Bdelay%7D%3Fkeywords%3D%24%7Bkeywords%7D%60%2C%20%7B%0A%20%20%20%20method%3A%20'GET'%2C%0A%20%20%20%20mode%3A%20'cors'%2C%0A%20%20%7D).then(()%20%3D%3E%20%5B%0A%20%20%20%20%60suggestions1%20for%20%24%7Bkeywords%7D%60%2C%0A%20%20%20%20%60suggestions2%20for%20%24%7Bkeywords%7D%60%2C%0A%20%20%20%20%60suggestions3%20for%20%24%7Bkeywords%7D%60%2C%0A%20%20%5D)%3B%0A%7D%0Aconst%20debouncedSearchApi%20%3D%20debounceAsyncResult(searchApi)%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20suggestions%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20suggestions%2C%0A%20%20%20%20%20%20%2F%2F%20%E8%BF%99%E9%87%8C%E5%BA%94%E8%AF%A5%E7%94%A8%E4%B8%80%E6%AC%A1%20debounce%20%E6%88%96%20debounceAsync%2C%20%E4%BD%86%E6%98%AF%E4%B8%8E%E6%9C%AC%E4%B8%BB%E9%A2%98%E6%97%A0%E5%85%B3%EF%BC%8C%E6%89%80%E4%BB%A5%E7%9C%81%E7%95%A5%0A%20%20%20%20%20%20%2F%2F%20debounce%20or%20debounceAsync%20should%20be%20used%20here%2C%20but%20it%20is%20not%20relevant%20to%20this%20topic%2C%20so%20it%20is%20omitted%0A%20%20%20%20%20%20async%20onInput(e%3A%20HTMLElementEvent%3CHTMLInputElement%3E)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E6%B3%A8%E6%84%8F%E5%9C%A8%20%60await%20debouncedSearchApi%60%20%E4%B9%8B%E5%89%8D%E7%9A%84%E4%BB%A3%E7%A0%81%E4%BB%8D%E4%BC%9A%E6%89%A7%E8%A1%8C%0A%20%20%20%20%20%20%20%20%2F%2F%20Note%20that%20the%20code%20before%20%60await%20debouncedSearchApi%60%20will%20still%20execute%0A%20%20%20%20%20%20%20%20const%20keywords%20%3D%20e.target.value%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20%E4%BC%9A%E5%9C%A8%E9%80%82%E5%BD%93%E7%9A%84%E6%97%B6%E6%9C%BA%E5%9C%A8%E6%AD%A4%E5%A4%84%E5%8D%A1%E4%BD%8F%0A%20%20%20%20%20%20%20%20%2F%2F%20will%20get%20stuck%20here%20at%20the%20right%20time%0A%20%20%20%20%20%20%20%20const%20rez%20%3D%20await%20debouncedSearchApi(keywords)%3B%0A%0A%20%20%20%20%20%20%20%20suggestions.value%20%3D%20rez%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D)%3B%0A%3C%2Fscript%3E%0A",language:"vue",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Einput%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonInput%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etype%20something%20quickly%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Elist%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esuggestions%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20300px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edatalist%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esuggestions%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eoption%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Es%20in%20suggestions%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Es%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Es%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eoption%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Edatalist%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etsx%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20debounceAsyncResult%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20type%20HTMLElementEvent%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20constant%22%3ET%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eextends%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EHTMLElement%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20Event%20%3Cspan%20class%3D%22token%20operator%22%3E%26amp%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etarget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20constant%22%3ET%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20currentTarget%3A%20T%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EsearchApi%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ekeywords%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'fetching'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20keywords%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20delay%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0.4%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20Math%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Erandom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E*%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EtoFixed%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Efetch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Ehttps%3A%2F%2Fhttpbin.org%2Fdelay%2F%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Edelay%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%3Fkeywords%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emethod%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'GET'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'cors'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Ethen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Esuggestions1%20for%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Esuggestions2%20for%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Esuggestions3%20for%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20debouncedSearchApi%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdebounceAsyncResult%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EsearchApi%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20suggestions%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estring%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20suggestions%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E8%BF%99%E9%87%8C%E5%BA%94%E8%AF%A5%E7%94%A8%E4%B8%80%E6%AC%A1%20debounce%20%E6%88%96%20debounceAsync%2C%20%E4%BD%86%E6%98%AF%E4%B8%8E%E6%9C%AC%E4%B8%BB%E9%A2%98%E6%97%A0%E5%85%B3%EF%BC%8C%E6%89%80%E4%BB%A5%E7%9C%81%E7%95%A5%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20debounce%20or%20debounceAsync%20should%20be%20used%20here%2C%20but%20it%20is%20not%20relevant%20to%20this%20topic%2C%20so%20it%20is%20omitted%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EonInput%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20HTMLElementEvent%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EHTMLInputElement%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E6%B3%A8%E6%84%8F%E5%9C%A8%20%60await%20debouncedSearchApi%60%20%E4%B9%8B%E5%89%8D%E7%9A%84%E4%BB%A3%E7%A0%81%E4%BB%8D%E4%BC%9A%E6%89%A7%E8%A1%8C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20Note%20that%20the%20code%20before%20%60await%20debouncedSearchApi%60%20will%20still%20execute%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20keywords%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Etarget%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E4%BC%9A%E5%9C%A8%E9%80%82%E5%BD%93%E7%9A%84%E6%97%B6%E6%9C%BA%E5%9C%A8%E6%AD%A4%E5%A4%84%E5%8D%A1%E4%BD%8F%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20will%20get%20stuck%20here%20at%20the%20right%20time%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20rez%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eawait%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdebouncedSearchApi%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20suggestions%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20rez%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",name:"demo.vue"}];return(t,a)=>{const e=d("DemoContainer");return o(),c("div",null,[v,l(e,{files:s},{default:A(()=>[l(w)]),_:1}),_])}}});export{I as __pageData,S as default};
