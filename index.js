import{S as p,a as f,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const a=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(){a&&(a.innerHTML="")}function h(r){const t=r.map(o=>`<li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
            <img
                class="gallery-image"
                src="${o.webformatURL}"
                alt="${o.tags}"
            />
            </a>
            <ul class="comment-list">
                <li class="comment-item">
                    <p class=comment-title>Likes</p>
                    <p class=comment-value>${o.likes}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Views</p>
                    <p class=comment-value>${o.views}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Comments</p>
                    <p class=comment-value>${o.comments}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Downloads</p>
                    <p class=comment-value>${o.downloads}</p>
                </li>
            </ul>
        </li>`).join("");a&&(a.insertAdjacentHTML("beforeend",t),g.refresh())}function L(){u.classList.toggle("loader")}function d(){u.classList.toggle("loader")}const n={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},b="https://pixabay.com/api/",m={key:"55960662-5976d34f2ed07da81c3dd4b18",image_type:"photo",orientation:"horizontal",safesearch:"true"};function w(r){L(),m.q=r,f.get(b,{params:m}).then(t=>{const o=t.data.hits;if(!o.length){i.show({message:"Sorry, there are no images matching your search query. Please try again!",...n});return}h(o)}).catch(t=>{i.show({message:t,...n})}).finally(()=>{d()})}d();const S=document.querySelector(".form");S.addEventListener("submit",q);function q(r){r.preventDefault(),y();const t=r.target.elements["search-text"].value.trim();if(!t){i.show({message:"Please enter query",...n});return}w(t),r.target.reset()}
//# sourceMappingURL=index.js.map
