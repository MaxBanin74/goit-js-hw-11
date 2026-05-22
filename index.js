import{a as u,S as d,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="https://pixabay.com/api/";function p(r){const o={key:"55960662-5976d34f2ed07da81c3dd4b18",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:o})}const l=document.querySelector(".gallery"),i=document.querySelector(".loader"),y=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(){l&&(l.innerHTML="")}function h(r){const o=r.map(t=>`<li class="gallery-item">
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
        </li>`).join("");l&&(l.insertAdjacentHTML("beforeend",o),y.refresh())}function L(){i&&i.classList.remove("hidden")}function b(){i&&i.classList.add("hidden")}const m={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},v=document.querySelector(".form");v.addEventListener("submit",w);function w(r){r.preventDefault(),g();const o=r.target.elements["search-text"];if(!o.value.trim()){o.value="";return}L(),p(o.value).then(t=>{const a=t.data.hits;if(!a.length){c.show({message:"Sorry, there are no images matching your search query. Please try again!",...m});return}h(a),r.target.reset()}).catch(t=>{console.error(t),c.show({message:"Server Pixabay is not avialible",...m})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
