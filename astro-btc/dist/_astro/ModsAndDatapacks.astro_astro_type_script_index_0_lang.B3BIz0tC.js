import{g as f}from"./sheetsClient.Bc1rSthu.js";document.addEventListener("DOMContentLoaded",async()=>{const c=document.getElementById("datapacks-list"),a=document.getElementById("mods-list"),i=document.getElementById("datapacks-section"),b=document.getElementById("mods-section"),l=document.getElementById("loading-mods"),g=e=>{const t=e?e.toLowerCase():"";return t.includes("mod")?{text:"text-blue-500",border:"border-blue-500/50",badge:"bg-blue-500/10 text-blue-400 border-blue-500/20"}:t.includes("plugin")?{text:"text-orange-500",border:"border-orange-500/50",badge:"bg-orange-500/10 text-orange-400 border-orange-500/20"}:t.includes("proxy")?{text:"text-emerald-500",border:"border-emerald-500/50",badge:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20"}:t.includes("datapack")?{text:"text-btc-yellow",border:"border-btc-yellow/50",badge:"bg-yellow-500/10 text-yellow-400 border-btc-yellow/20"}:{text:"text-zinc-400",border:"border-zinc-400/50",badge:"bg-zinc-800 text-zinc-300 border-zinc-700"}},x=e=>{const t=g(e.Type),o=e.Icon?`<img src="${e.Icon}" alt="${e.Name}" class="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover/card:scale-105" />`:'<div class="w-full h-full flex items-center justify-center text-zinc-500 text-4xl font-bold opacity-30">?</div>',s=85,d=e.Desc||"",n=d.length>s,r=n?d.substring(0,s).trim()+"...":d;return`
            <div class="mod-item snap-center shrink-0 w-60 flex flex-col bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:${t.border} transition-colors duration-300 shadow-lg group/card">
                
                <!-- Contenedor Superior: Imagen -->
                <div class="w-full h-32 bg-black/40 relative flex items-center justify-center border-b border-white/5 p-4">
                    ${o}
                </div>
                
                <!-- Contenedor Inferior: Textos y Link -->
                <div class="p-5 flex flex-col flex-grow">
                    
                    <h4 class="font-bold text-white text-sm m-0 mb-3 truncate">${e.Name}</h4>
                    
                    <span class="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${t.badge} border inline-block mb-3 self-start">${e.Type}</span>
                    
                    <p class="text-xs text-zinc-400 leading-relaxed m-0 flex-grow">
                        ${r}
                    </p>
                    
                    <a href="${e.Url}" target="_blank" rel="noopener noreferrer" class="mt-5 w-full text-center py-2.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white text-zinc-300">
                        ${n?"Leer más":"Ver enlace"}
                    </a>
                </div>
            </div>
        `},u=(e,t,o)=>{const s=document.getElementById(t),d=document.getElementById(o);if(!e||!s||!d)return;const n=()=>{const r=e.scrollWidth-e.clientWidth;s.disabled=e.scrollLeft<=5,d.disabled=e.scrollLeft>=r-5};e.addEventListener("scroll",n,{passive:!0}),n(),s.addEventListener("click",()=>{const r=e.querySelector(".mod-item"),m=r?r.offsetWidth+20:260;e.scrollBy({left:-(m*2),behavior:"smooth"})}),d.addEventListener("click",()=>{const r=e.querySelector(".mod-item"),m=r?r.offsetWidth+20:260;e.scrollBy({left:m*2,behavior:"smooth"})})};try{const{mods:e,datapacks:t}=await f();t.length>0&&c&&i&&(c.innerHTML=t.map(o=>x(o)).join(""),i.classList.remove("hidden"),i.classList.add("flex"),u(c,"dp-prev","dp-next")),e.length>0&&a&&b&&(a.innerHTML=e.map(o=>x(o)).join(""),b.classList.remove("hidden"),b.classList.add("flex"),u(a,"mod-prev","mod-next")),l&&(l.style.display="none")}catch(e){console.error("Error cargando mods:",e),l&&(l.innerHTML="<span class='text-red-400 font-bold'>Error al conectar con la base de datos.</span>")}});
