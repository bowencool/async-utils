import{c as t,b as p,w as o,a as n,r as e,o as E,d as C}from"./app.a14f3498.js";const c=n('<h2 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal" target="_blank" rel="noopener noreferrer">AbortSignal</a>\u4E2D\u6B62\u5F02\u6B65\u4EFB\u52A1\u6216\u5728\u8D85\u65F6\u65F6\u81EA\u52A8\u4E2D\u6B62\u3002</p><p>A higher-order function that can abort asynchronous tasks by <a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal" target="_blank" rel="noopener noreferrer">AbortSignal</a> or automatically abort on timeout.</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',4),l=C("iframe",{src:"/async-utilities/-demos/Demo1008.html"},null,-1),r=n(`<h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">abortableAsync</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>p<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  opt<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,2),A='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"../packages/abortableAsync/readme.md","lastUpdated":1644659276505}',u={},B=Object.assign(u,{setup(k){const s=[{filePath:"/Users/zhaobowen/Codes/bowencool/async-utilities/packages/abortableAsync/demo.vue",codeStr:"%3Cscript%20lang%3D%22tsx%22%3E%0A%20%20import%20%7B%20computed%2C%20defineComponent%2C%20reactive%20%7D%20from%20'vue'%3B%0A%20%20import%20%7B%20AbortError%2C%20TimeoutError%20%7D%20from%20'.'%3B%0A%20%20import%20%7B%20abortableAsync%20%7D%20from%20'..'%3B%0A%0A%20%20function%20someAsyncTask(delay%20%3D%201000)%3A%20Promise%3Cstring%3E%20%7B%0A%20%20%20%20return%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(%60The%20task%20will%20be%20completed%20in%20%24%7Bdelay%7Dms%60)%3B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20resolve(%60The%20result%20in%20%24%7Bdelay%7Dms%60)%2C%20delay)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup()%20%7B%0A%20%20%20%20%20%20let%20controller%3A%20AbortController%3B%0A%0A%20%20%20%20%20%20const%20state%20%3D%20reactive(%7B%0A%20%20%20%20%20%20%20%20loading%3A%20false%2C%0A%20%20%20%20%20%20%20%20error%3A%20null%2C%0A%20%20%20%20%20%20%20%20data%3A%20''%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3Efetch%E3%80%81xhr%20%E5%8E%9F%E7%94%9F%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%8F%96%E6%B6%88%EF%BC%8C%E6%89%80%E4%BB%A5%E8%BF%99%E9%87%8C%E5%B0%B1%E4%B8%8D%E7%94%A8%20HTTP%20%E5%81%9A%E7%A4%BA%E4%BE%8B%E4%BA%86%3C%2Fp%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3D%7Basync%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(state.loading)%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20controller.abort()%20%E5%8F%AA%E8%83%BD%E8%A7%A6%E5%8F%91%E4%B8%80%E6%AC%A1%20abort%20%E4%BA%8B%E4%BB%B6%EF%BC%8C%E6%89%80%E4%BB%A5%E8%BF%99%E9%87%8C%E6%AF%8F%E6%AC%A1%E9%83%BD%E6%96%B0%E5%BB%BA%E7%9A%84%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controller%20%3D%20new%20AbortController()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state.loading%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state.error%20%3D%20null%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state.data%20%3D%20await%20abortableAsync(someAsyncTask%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20timeout%3A%202000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20signal%3A%20controller.signal%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)(1900%20%2B%20Math.floor(Math.random()%20*%20200))%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20catch%20(error%3A%20any)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(error.name%2C%20error.message%2C%20error%20instanceof%20TimeoutError%2C%20error%20instanceof%20AbortError)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state.error%20%3D%20error%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state.data%20%3D%20''%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20finally%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state.loading%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20disabled%3D%7Bstate.loading%20%3F%20true%20%3A%20undefined%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bstate.loading%20%3F%20'loading...'%20%3A%20'start'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bstate.loading%20%26%26%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controller.abort()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stop%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpre%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7BJSON.stringify(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(k%2C%20v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(v%20instanceof%20Error)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20v.message%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fpre%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%0A",language:"vue",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etsx%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20computed%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20reactive%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20AbortError%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20TimeoutError%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20abortableAsync%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EsomeAsyncTask%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Edelay%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1000%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20Promise%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estring%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EPromise%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eresolve%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3EThe%20task%20will%20be%20completed%20in%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Edelay%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Ems%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eresolve%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3EThe%20result%20in%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Edelay%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Ems%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20delay%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Econtroller%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20AbortController%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20state%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Ereactive%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eloading%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eerror%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3Efetch%E3%80%81xhr%20%E5%8E%9F%E7%94%9F%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%8F%96%E6%B6%88%EF%BC%8C%E6%89%80%E4%BB%A5%E8%BF%99%E9%87%8C%E5%B0%B1%E4%B8%8D%E7%94%A8%20%3Cspan%20class%3D%22token%20constant%22%3EHTTP%3C%2Fspan%3E%20%E5%81%9A%E7%A4%BA%E4%BE%8B%E4%BA%86%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ep%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ebutton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Estate%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eloading%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20controller.abort()%20%E5%8F%AA%E8%83%BD%E8%A7%A6%E5%8F%91%E4%B8%80%E6%AC%A1%20abort%20%E4%BA%8B%E4%BB%B6%EF%BC%8C%E6%89%80%E4%BB%A5%E8%BF%99%E9%87%8C%E6%AF%8F%E6%AC%A1%E9%83%BD%E6%96%B0%E5%BB%BA%E7%9A%84%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controller%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EAbortController%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Etry%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eloading%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eerror%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Edata%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eawait%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EabortableAsync%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EsomeAsyncTask%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etimeout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2000%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Esignal%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20controller%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Esignal%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E1900%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20Math%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Efloor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EMath%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Erandom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E*%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E200%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ecatch%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eerror%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eerror%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ename%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20error%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Emessage%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20error%20%3Cspan%20class%3D%22token%20keyword%22%3Einstanceof%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3ETimeoutError%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20error%20%3Cspan%20class%3D%22token%20keyword%22%3Einstanceof%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EAbortError%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eerror%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20error%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Edata%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efinally%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eloading%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20disabled%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Estate%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eloading%20%3Cspan%20class%3D%22token%20operator%22%3E%3F%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eundefined%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Estate%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eloading%20%3Cspan%20class%3D%22token%20operator%22%3E%3F%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'loading...'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'start'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Estate%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eloading%20%3Cspan%20class%3D%22token%20operator%22%3E%26amp%3B%26amp%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ebutton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controller%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Eabort%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stop%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Epre%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20constant%22%3EJSON%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Estringify%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ek%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20v%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ev%20%3Cspan%20class%3D%22token%20keyword%22%3Einstanceof%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EError%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20v%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Emessage%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20v%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Epre%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",name:"demo.vue"}];return(D,i)=>{const a=e("DemoContainer");return E(),t("div",null,[c,p(a,{files:s,iframe:""},{default:o(()=>[l]),_:1}),r])}}});export{A as __pageData,B as default};
