import React, { useState, useEffect } from 'react';

export default function ServerStatus() {
  const [data, setData] = useState({ online: false, players: 0 });
  const [loading, setLoading] = useState(true);

  const IP = 'rock-partition.gl.joinmc.link';

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.mcstatus.io/v2/status/java/${IP}`);
        const result = await res.json();
        setData({
          online: result.online,
          players: result.players?.online || 0,
        });
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToIPs = () => {
    document.getElementById('ips')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Quitamos el margen superior excesivo (mt-8 -> mt-4)
    <div className="flex flex-col items-center gap-6 mt-4 w-full max-w-2xl mx-auto z-20 relative">
      {/* (Frase "Libertad creativa..." eliminada aquí) */}

      {/* Bloque Unificado: Estado + Jugadores */}
      <div className="flex flex-col md:flex-row items-center gap-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 pr-6 shadow-2xl">
        {/* Indicador Visual Estado */}
        <div className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-3 border border-white/5">
          <div
            className={`w-3 h-3 rounded-full ${data.online ? 'bg-green-500 shadow-[0_0_12px_#22c55e]' : 'bg-red-500'} animate-pulse`}
          ></div>
          <span className="font-bold text-white tracking-wide text-sm">
            {loading ? '...' : data.online ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>

        {/* Contador Jugadores */}
        <div className="flex items-center gap-2 px-2 py-2 md:py-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-5">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="text-gray-300 font-mono text-sm">
            <strong className="text-white text-lg">{loading ? '-' : data.players}</strong> Jugadores
          </span>
        </div>

        {/* Botón de Acción */}
        <button
          onClick={scrollToIPs}
          className="w-full md:w-auto md:ml-2 bg-btc-gold hover:bg-white text-black font-bold px-6 py-3 md:py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-white/20 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
        >
          Conectarse
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
