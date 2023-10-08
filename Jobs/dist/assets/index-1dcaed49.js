(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const p=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}];function d(l){const o=document.querySelector(".job-list"),a=l.map(e=>`
    <li class="job-list__job ${e.new||e.featured?"updated":""}">
    <div class="logo">
      <img src="${e.logo}" alt="${e.company} logo" />
    </div>

    <div class="job-info">
      <div class="job-info__head">
        <p class="company">${e.company}</p>
        ${e.new?'<span class="new">New!</span>':""}
        ${e.featured?'<span class="featured">Featured</span>':""}
      </div>

      <a href="https://example.com/" 
      target="blank"
      class="job-info__position"
        >${e.position}</a
      >

      <div class="job-info__bottom">
        <span class="postedAt">${e.postedAt}</span>
        <span class="contract">${e.contract}</span>
        <span class="location">${e.location}</span>
      </div>
    </div>

    <div class="skills">
      <button class="skill" data-field="${e.role}">${e.role}</button>
      <button class="skill" data-field="${e.level}">${e.level}</button>
      ${e.languages.length?e.languages.map(t=>`<button class="skill" data-field="${t}">${t}</button>`).join(""):""}

      ${e.tools.length?e.tools.map(t=>`<button class="skill" data-field="${t}">${t}</button>`).join(""):""}
    </div>
  </li>
        `).join("");o.classList.add("hide"),setTimeout(()=>{o.innerHTML=a,o.classList.remove("hide")},100)}function f(l){const o=document.querySelector(".filter-container__filters"),a=l.map(e=>`
    <button type="button" class="filter" data-field="${e}">
        ${e}
        <span><img src="./images/icon-remove.svg" alt="Remove icon"/></span>
    </button>
    `).join("");o.innerHTML=a}function m(l){return p.filter(o=>l.every(a=>o.role===a||o.level===a||o.languages.includes(a)||o.tools.includes(a)))}(function(){const l=document.querySelector(".job-list"),o=document.querySelector(".filter-container__filters"),a=document.querySelector(".btn-clear");let e=[];d(p);function t(){const s=document.querySelector(".filter-container");s.style.display="flex"}function n(){const s=document.querySelector(".filter-container");s.style.display="none"}function i(s){const r=s.target.closest(".skill");if(!r)return;const{field:c}=r.dataset;if(e.includes(c))return;e.push(c);const u=m(e);d(u),e.length===1&&t(),f(e)}function v(s){const r=s.target.closest(".filter");if(!r)return;const{field:c}=r.dataset,g=e.indexOf(c);e.splice(g,1);const u=m(e);d(u),e.length===0&&n(),f(e)}function y(){e=[],n(),d(p)}l.addEventListener("click",i),o.addEventListener("click",v),a.addEventListener("click",y)})();
