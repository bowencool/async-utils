import{t as a}from"./index.3783d7b3.js";import"./index.24b17a62.js";import{d as r,c as e,F as c,a as o}from"./runtime-core.esm-bundler.6c7eec45.js";function n(t){console.log("fetching",t);const s=(.4+Math.random()*2).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${t}`,{method:"GET",mode:"cors"}).then(()=>({data:`result for ${t}`}))}const i=a(n),m=a(n,{useSamePromise:!0});var u=r({setup(){return()=>e(c,null,[e("button",{onClick:async()=>{const t=await i("abc");console.log("fetched",t)}},[o("Get something same")]),e("button",{onClick:async()=>{const t=await m("abc");console.log("fetched",t)}},[o("Get something same(useSamePromise)")])])}});export{u as default};
