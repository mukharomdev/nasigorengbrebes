(()=>{"use strict";var e=document.querySelector("[data-navbar]"),t=document.querySelectorAll("[data-nav-link]"),a=document.querySelector("[data-menu-toggle-btn]");a.addEventListener("click",(function(){e.classList.toggle("active"),this.classList.toggle("active")}));for(var c=0;c<t.length;c++)t[c].addEventListener("click",(function(){e.classList.toggle("active"),a.classList.toggle("active")}));var n=document.querySelector("[data-header]"),o=document.querySelector("[data-back-top-btn]");window.addEventListener("scroll",(function(){window.scrollY>=100?(n.classList.add("active"),o.classList.add("active")):(n.classList.remove("active"),o.classList.remove("active"))}));for(var r=document.querySelector("[data-search-btn]"),s=document.querySelector("[data-search-container]"),l=[r,document.querySelector("[data-search-submit-btn]"),document.querySelector("[data-search-close-btn]")],i=0;i<l.length;i++)l[i].addEventListener("click",(function(){s.classList.toggle("active"),document.body.classList.toggle("active")}));var d=document.querySelector("[data-delivery-boy]"),u=-80,v=0;window.addEventListener("scroll",(function(){var e=d.getBoundingClientRect().top;if(e<500&&e>-250){var t=window.scrollY;v<t?u+=1:u-=1,v=t,d.style.transform="translateX(".concat(u,"px)")}}))})();