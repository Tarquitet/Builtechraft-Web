import{b as x}from"./sheetsClient.Bc1rSthu.js";document.addEventListener("DOMContentLoaded",async()=>{const o=document.getElementById("roadmap-container"),l=document.getElementById("roadmap-section"),i=document.getElementById("roadmap-filters");if(!o||!l||!i)return;const c=document.getElementById("rm-prev"),b=document.getElementById("rm-next"),u=n=>{const s=n?.toLowerCase().trim()||"";return s.includes("progreso")?{text:"text-btc-orange",bg:"bg-btc-orange/10",border:"border-btc-orange/30",icon:"⚡"}:s.includes("planeado")?{text:"text-blue-400",bg:"bg-blue-400/10",border:"border-blue-400/30",icon:"📌"}:s.includes("prueba")?{text:"text-purple-400",bg:"bg-purple-400/10",border:"border-purple-400/30",icon:"🔬"}:{text:"text-emerald-400",bg:"bg-emerald-400/10",border:"border-emerald-400/30",icon:"✅"}};try{const n=await x();if(!n||n.length===0)return;o.innerHTML=n.map(e=>{const t=e.Estado||"Pendiente",r=u(t);return`
                <div class="roadmap-card snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] bg-[#111] border border-white/5 rounded-2xl p-6 transition-transform hover:scale-[1.02] flex flex-col group" data-status="${t}">
                    <div class="mb-5">
                        <span class="text-[10px] font-bold uppercase tracking-widest ${r.text} ${r.bg} border ${r.border} px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 whitespace-nowrap">
                            ${r.icon} ${t}
                        </span>
                    </div>
                    <h3 class="px-1 font-bold text-white text-xl mb-3 leading-tight group-hover:text-white transition-colors">
                        ${e.Titulo}
                    </h3>
                    <p class="px-1 text-zinc-400 text-sm leading-relaxed flex-grow">
                        ${e.Descripcion}
                    </p>
                </div>
            `}).join("");const s=o.querySelectorAll(".roadmap-card"),p=[...new Set(n.map(e=>e.Estado||"Pendiente"))];i.innerHTML=p.map(e=>`
            <button class="rm-filter-btn px-5 py-2.5 bg-black/40 text-zinc-400 hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest border border-white/5 hover:border-white/20 transition-all" data-filter="${e}">
                ${e}
            </button>
        `).join("");const m=(e,t)=>{const r=i.querySelector(".bg-white\\/10");r&&(r.classList.remove("bg-white/10","text-white","border-white/20","shadow-md"),r.classList.add("bg-black/40","text-zinc-400","border-white/5")),t.classList.remove("bg-black/40","text-zinc-400","border-white/5"),t.classList.add("bg-white/10","text-white","border-white/20","shadow-md"),s.forEach(a=>{const d=a;d.style.display=d.getAttribute("data-status")===e?"":"none"}),o.scrollLeft=0};if(i.addEventListener("click",e=>{const t=e.target.closest(".rm-filter-btn");t&&m(t.getAttribute("data-filter"),t)}),p.length>0&&m(p[0],i.firstElementChild),c&&b){const e=()=>{const r=o.scrollWidth-o.clientWidth;c.disabled=o.scrollLeft<=5,b.disabled=o.scrollLeft>=r-5};o.addEventListener("scroll",e,{passive:!0});const t=r=>{const a=Array.from(s).find(g=>g.style.display!=="none"),d=a?a.offsetWidth+24:300;o.scrollBy({left:d*r,behavior:"smooth"})};c.addEventListener("click",()=>t(-1)),b.addEventListener("click",()=>t(1))}l.classList.remove("hidden"),l.classList.add("flex")}catch(n){console.error("Error cargando el Roadmap:",n)}});
