import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as p,i as a}from"./assets/vendor-651d7991.js";const i=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]"),T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0],n=e.getTime()-new Date().getTime();u(n),e<new Date?(a.error({position:"topRight",message:"Please choose a date in the future"}),r.setAttribute("disabled",!0)):(r.removeAttribute("disabled"),c=e)}};p(i,T);let c=null;r.addEventListener("click",()=>{const t=c.getTime();i.value="",i.setAttribute("disabled",!0),r.setAttribute("disabled",!0);const e=setInterval(()=>{const n=Date.now();let s=t-n;const o=u(s);s<=0?(a.info({position:"topRight",message:"Time is up"}),clearInterval(e)):(y.textContent=`${o.days}`,S.textContent=`${o.hours}`,f.textContent=`${o.minutes}`,g.textContent=`${o.seconds}`)},1e3)});function u(t){const d=Math.floor(t/864e5).toString().padStart(2,"0"),m=Math.floor(t%864e5/36e5).toString().padStart(2,"0"),l=Math.floor(t%864e5%36e5/6e4).toString().padStart(2,"0"),h=Math.floor(t%864e5%36e5%6e4/1e3).toString().padStart(2,"0");return{days:d,hours:m,minutes:l,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
