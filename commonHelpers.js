import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as p,i as x}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),c=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");let m;p(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<new Date?(x.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):(t.disabled=!1,userSelectedDate=n)}}),t.addEventListener("click",()=>{t.disabled=!0,s.disabled=!0,y()});function y(){const e=userSelectedDate.getTime();m=setInterval(()=>{const n=new Date().getTime(),a=e-n;if(a<=0)clearInterval(m),c.textContent="00",i.textContent="00",u.textContent="00",l.textContent="00",t.disabled=!1,s.disabled=!1;else{const{days:f,hours:h,minutes:r,seconds:d}=S(a);c.textContent=o(f),i.textContent=o(h),u.textContent=o(r),l.textContent=o(d)}},1e3)}function o(e){return e<10?`0${e}`:e}function S(e){const r=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),C=Math.floor(e%864e5%36e5/6e4),D=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:d,minutes:C,seconds:D}}});
//# sourceMappingURL=commonHelpers.js.map