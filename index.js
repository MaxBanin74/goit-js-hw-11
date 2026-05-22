import{a as u,S as d,i as c}from"./assets/vendor-GgwdjDaY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/";function p(r){const s={key:"55960662-5976d34f2ed07da81c3dd4b18",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:s})}const l=document.querySelector(".gallery"),i=document.querySelector(".loader"),y=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(){l&&(l.innerHTML="")}function h(r){const s=r.map(t=>`<li class="gallery-item">
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
        </li>`).join("");l&&(l.insertAdjacentHTML("beforeend",s),y.refresh())}function L(){i&&i.classList.toggle("hidden")}function b(){i&&i.classList.toggle("hidden")}const m={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},w=document.querySelector(".form");w.addEventListener("submit",v);function v(r){r.preventDefault(),g();const s=r.target.elements["search-text"].value.trim();if(!s){c.show({message:"Please enter query",...m});return}L(),p(s).then(t=>{const a=t.data.hits;if(!a.length){c.show({message:"Sorry, there are no images matching your search query. Please try again!",...m});return}h(a),r.target.reset()}).catch(t=>{c.show({message:"Server Pixabay is not avialible",...m})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
