import"./index.24b17a62.js";import{d as p,b8 as d,ap as r,Z as u,_ as c,F as l,av as g}from"./runtime-core.esm-bundler.6c7eec45.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";function h(e){let t=0;return function(...n){const a=++t;return e.call(this,...n).then((...i)=>a!==t?new Promise(()=>{}):Promise.resolve(...i))}}function m(e){console.log("fetching",e);const t=(.4+Math.random()*2).toFixed(3);return fetch(`https://httpbin.org/delay/${t}?keywords=${e}`,{method:"GET",mode:"cors"}).then(()=>[`suggestions1 for ${e}`,`suggestions2 for ${e}`,`suggestions3 for ${e}`])}const _=h(m);var $=p({setup(){const e=d([]);return{suggestions:e,async onInput(t){const o=t.target.value,n=await _(o);e.value=n}}}});const v={id:"suggestions"},y=["value"];function I(e,t,o,n,a,i){return r(),u(l,null,[c("input",{onInput:t[0]||(t[0]=(...s)=>e.onInput&&e.onInput(...s)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),c("datalist",v,[(r(!0),u(l,null,g(e.suggestions,s=>(r(),u("option",{key:s,value:s},null,8,y))),128))])],64)}var A=f($,[["render",I]]);export{A as default};
