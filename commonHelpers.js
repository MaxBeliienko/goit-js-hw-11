import{S as m,i as u}from"./assets/vendor-7659544d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o={form:document.querySelector(".search-form"),input:document.querySelector(".form-input"),btn:document.querySelector(".form-btn"),gallery:document.querySelector(".gallery")};function d(r){const s="https://pixabay.com/api/?key="+"42331479-49dc52f8d5778d01c5913f31a"+"&q="+r+"&image_type=photo&orientation=horizontal&safesearch=true";return o.gallery.classList.add("loader"),fetch(s).then(i=>i.json())}function f(r){return r.hits.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:n,downloads:c})=>`<li class="gallery-item">
    <a href="${i}"><img src="${s}" alt="${e}"/>
    <ul class="item-data-list">
    <li class="data-list-item">
    <h3 class="data-item-header">Likes</h3>
    <p class="data-item-text">${t}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Views</h3>
    <p class="data-item-text">${l}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Comments</h3>
    <p class="data-item-text">${n}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Downloads</h3>
    <p class="data-item-text">${c}</p>
    </li>
    </ul>
    </a>
    </li>`).join("")}function p(r){const a=f(r);o.gallery.innerHTML=a,new m(".gallery a").refresh()}function h(r){r.preventDefault();const a=r.target.elements.form_input.value.trim();a!==""&&d(a).then(s=>{s.hits.length===0?u.show({message:"Sorry, there are no images matching your search query. Please try again!"}):p(s)}).catch().finally(o.gallery.classList.remove("loader")),r.target.reset()}o.form.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
