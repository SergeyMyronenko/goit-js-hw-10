import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form");document.querySelector("button");o.addEventListener("submit",i=>{i.preventDefault();const t=o.elements.delay.value,m=o.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{m==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):r(`❌ Rejected promise in ${t}ms`)},t)}).then(e=>{s.success({position:"topRight",message:`${e}`})}).catch(e=>{s.error({position:"topRight",message:`${e}`})})});
//# sourceMappingURL=commonHelpers2.js.map
