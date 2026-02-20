import React, { useState, useEffect } from 'react';
import { SERVER_INFO } from '../config-ip';

export default function ServerStatus() {
  const [data, setData] = useState({ online: false, players: 0, platform: null });
  const [loading, setLoading] = useState(true);

  const { javaIP, bedrockIP, bedrockPort } = SERVER_INFO;

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const timestamp = Date.now(); // Truco anti-caché

        const [javaRes, bedrockRes] = await Promise.all([
          fetch(`https://api.mcstatus.io/v2/status/java/${javaIP}?t=${timestamp}`).then((res) => res.json()),
          fetch(`https://api.mcstatus.io/v2/status/bedrock/${bedrockIP}:${bedrockPort}?t=${timestamp}`).then((res) =>
            res.json(),
          ),
        ]);

        const isJavaOnline = javaRes.online;
        const isBedrockOnline = bedrockRes.online;
        const isOnline = isJavaOnline || isBedrockOnline;

        let playerCount = 0;
        if (isJavaOnline) {
          playerCount = javaRes.players?.online || 0;
        } else if (isBedrockOnline) {
          playerCount = bedrockRes.players?.online || 0;
        }

        setData({
          online: isOnline,
          players: playerCount,
          platform: isJavaOnline && isBedrockOnline ? 'BOTH' : isJavaOnline ? 'JAVA' : 'BEDROCK',
        });
        setLoading(false);

        // --- LÓGICA DE TEMA Y TÍTULO ---
        // Actualizar UI Global y Título
        const html = document.documentElement;
        const siteName = 'Builtechraft SMP';

        // NUEVO: Verificamos la variable en memoria (Si no se ha tocado el botón, será undefined/false)
        const isManualOverride = window.isManualThemeOverride === true;

        if (isOnline) {
          // Solo cambia a modo claro si el usuario NO ha tomado el control manual
          if (!isManualOverride && !html.classList.contains('light')) {
            html.classList.add('light');
          }
          document.title = `ON | ${siteName}`;
        } else {
          // Solo quita el modo claro si el usuario NO ha tomado el control manual
          if (!isManualOverride) {
            html.classList.remove('light');
          }
          document.title = `OFF | ${siteName}`;
        }
      } catch (e) {
        console.error('API Error:', e);
        setLoading(false);

        // También respetamos el override aquí por si hay un error en la API
        const isManualOverride = sessionStorage.getItem('manual-theme-override') === 'true';
        if (!isManualOverride) {
          document.documentElement.classList.remove('light');
        }
        document.title = `OFF | Builtechraft SMP`;
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 20000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') fetchStatus();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const scrollToIPs = () => {
    document.getElementById('ips')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-4 w-full max-w-2xl mx-auto z-20 relative animate-fade-in-up">
      {/* TARJETA PRINCIPAL */}
      <div className="flex flex-col md:flex-row items-center gap-5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-2 pr-6 shadow-2xl transition-all duration-500 hover:border-btc-orange/30 group">
        {/* INDICADOR DE ESTADO */}
        <div className="flex items-center gap-3 bg-[#0c0c0e] border border-white/5 rounded-xl px-5 py-3 min-w-35 justify-center shadow-inner">
          <div className="relative flex items-center justify-center">
            {/* Punto Verde/Rojo según estado */}
            <div
              className={`w-3 h-3 rounded-full ${data.online ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'} relative z-10 transition-all duration-500`}
            ></div>
            {data.online && <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>}
          </div>

          <div className="flex flex-col leading-none text-left">
            <span className="font-bold text-white tracking-wide text-sm uppercase">
              {loading ? 'Check...' : data.online ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>

        {/* CONTADOR DE JUGADORES */}
        <div className="flex items-center gap-3 px-2 py-2 md:py-0 md:pl-2 min-w-30">
          <div className="bg-white/5 p-2 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-bold text-lg leading-none tabular-nums">
              {loading ? '-' : data.players}
            </span>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Jugadores</span>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="hidden md:block w-px h-8 bg-white/10 mx-2"></div>

        {/* BOTÓN DE ACCIÓN */}
        <button
          onClick={scrollToIPs}
          className="w-full md:w-auto font-bold px-6 py-3 rounded-xl transition-all duration-300 uppercase text-xs tracking-widest cursor-pointer flex items-center justify-center gap-2 group/btn bg-btc-orange text-white hover:bg-white hover:text-btc-orange shadow-lg shadow-btc-orange/10"
        >
          <span>Conectarse</span>
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
