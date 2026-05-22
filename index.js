import{a as d,S as f,i as c}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",u={key:"55960662-5976d34f2ed07da81c3dd4b18",image_type:"photo",orientation:"horizontal",safesearch:"true"};function g(s){return u.q=s,d.get(p,{params:u})}const l=document.querySelector(".gallery"),i=document.querySelector(".loader"),y=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(){l&&(l.innerHTML="")}function L(s){const r=s.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}"
            />
            </a>
            <ul class="comment-list">
                <li class="comment-item">
                    <p class=comment-title>Likes</p>
                    <p class=comment-value>${t.likes}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Views</p>
                    <p class=comment-value>${t.views}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Comments</p>
                    <p class=comment-value>${t.comments}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Downloads</p>
                    <p class=comment-value>${t.downloads}</p>
                </li>
            </ul>
        </li>`).join("");l&&(l.insertAdjacentHTML("beforeend",r),y.refresh())}function b(){i&&i.classList.toggle("hidden")}function w(){i&&i.classList.toggle("hidden")}const m={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},S=document.querySelector(".form");S.addEventListener("submit",q);function q(s){s.preventDefault(),h();const r=s.target.elements["search-text"].value.trim();if(!r){c.show({message:"Please enter query",...m});return}b(),g(r).then(t=>{const a=t.data.hits;if(!a.length){c.show({message:"Sorry, there are no images matching your search query. Please try again!",...m});return}L(a)}).catch(t=>{c.show({message:t,...m})}).finally(()=>{w()}),s.target.reset()}
//# sourceMappingURL=index.js.map
