import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as h}from"./assets/vendor-651d7991.js";const y=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]"),T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0],n=e.getTime()-new Date().getTime();i(n),e<new Date?(h.error({position:"topRight",message:"Please choose a date in the future"}),s.setAttribute("disabled",!0)):(s.removeAttribute("disabled"),a=e)}},D=l(y,T);let a=D;s.addEventListener("click",()=>{const t=a.getTime(),e=setInterval(()=>{const n=new Date().getTime();let r=t-n;const o=i(r);r<=0?clearInterval(e):(S.textContent=`${o.days}`,f.textContent=`${o.hours}`,p.textContent=`${o.minutes}`,g.textContent=`${o.seconds}`)},1e3)});function i(t){const c=Math.floor(t/864e5).toString().padStart(2,"0"),u=Math.floor(t%864e5/36e5).toString().padStart(2,"0"),d=Math.floor(t%864e5%36e5/6e4).toString().padStart(2,"0"),m=Math.floor(t%864e5%36e5%6e4/1e3).toString().padStart(2,"0");return{days:c,hours:u,minutes:d,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
