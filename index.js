import{S as u,a as p,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a=document.querySelector(".gallery");function f(){a&&(a.innerHTML="")}function d(r){const t=r.map(s=>`<li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
            <img
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
            />
            </a>
            <ul class="comment-list">
                <li class="comment-item">
                    <p class=comment-title>Likes</p>
                    <p class=comment-value>${s.likes}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Views</p>
                    <p class=comment-value>${s.views}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Comments</p>
                    <p class=comment-value>${s.comments}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Downloads</p>
                    <p class=comment-value>${s.downloads}</p>
                </li>
            </ul>
        </li>`).join("");a&&(a.insertAdjacentHTML("beforeend",t),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}))}function g(){a.classList.toggle("loader")}function y(){a.classList.toggle("loader")}const n={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},h="https://pixabay.com/api/",m={key:"55960662-5976d34f2ed07da81c3dd4b18",image_type:"photo",orientation:"horizontal",safesearch:"true"};function L(r){g(),m.q=r,p.get(h,{params:m}).then(t=>{const s=t.data.hits;if(!s.length){i.show({message:"Sorry, there are no images matching your search query. Please try again!",...n});return}d(s)}).catch(t=>{i.show({message:t,...n})}).finally(()=>{y()})}const b=document.querySelector(".form");b.addEventListener("submit",w);function w(r){r.preventDefault(),f();const t=r.target.elements["search-text"].value.trim();if(!t){i.show({message:"Please enter query",...n});return}L(t),r.target.reset()}
//# sourceMappingURL=index.js.map
