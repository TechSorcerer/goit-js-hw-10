import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as x,i as b}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),c=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");let m,f;x(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<new Date?(b.error({title:"Error",message:"Please choose a date in the future"}),e.disabled=!0):(e.disabled=!1,m=n)}}),e.addEventListener("click",()=>{e.disabled=!0,s.disabled=!0,C()});function C(){const t=m.getTime();f=setInterval(()=>{const n=new Date().getTime(),a=t-n;if(a<=0)clearInterval(f),c.textContent="00",i.textContent="00",u.textContent="00",l.textContent="00",e.disabled=!1,s.disabled=!1;else{const{days:h,hours:y,minutes:r,seconds:d}=S(a);c.textContent=o(h),i.textContent=o(y),u.textContent=o(r),l.textContent=o(d)}},1e3)}function o(t){return t<10?`0${t}`:t}function S(t){const r=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),D=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:d,minutes:D,seconds:p}}});
//# sourceMappingURL=commonHelpers.js.map
