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
        const isOnline = result.online;

        setData({
          online: isOnline,
          players: result.players?.online || 0,
        });
        setLoading(false);

        const html = document.documentElement;
        if (isOnline) {
          if (!html.classList.contains('light')) {
            html.classList.add('light');
          }
        } else {
          html.classList.remove('light');
        }
      } catch (e) {
        console.error('Error conectando a API:', e);
        setLoading(false);
        document.documentElement.classList.remove('light');
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
    <div className="flex flex-col items-center gap-6 mt-4 w-full max-w-2xl mx-auto z-20 relative">
      {/* TARJETA: Fondo negro con opacidad, sin bordes ni blur */}
      <div className="flex flex-col md:flex-row items-center gap-5 bg-black/60 rounded-2xl p-2 pr-6 shadow-2xl transition-all duration-500">
        {/* ESTADO: Gris casi negro más opaco */}
        <div className="flex items-center gap-3 bg-[#0c0c0e]/95 rounded-xl px-5 py-3">
          <div
            className={`w-3 h-3 rounded-full ${data.online ? 'bg-green-500 shadow-[0_0_12px_#22c55e]' : 'bg-red-500 shadow-[0_0_12px_#ef4444]'} ${data.online ? 'animate-pulse' : ''}`}
          ></div>
          <span className="font-bold text-white tracking-wide text-sm uppercase">
            {loading ? '...' : data.online ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* JUGADORES */}
        <div className="flex items-center gap-2 px-2 py-2 md:py-0 md:pl-2">
          <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="text-zinc-400 font-mono text-sm">
            <strong className="text-white text-lg">{loading ? '-' : data.players}</strong> Jugadores
          </span>
        </div>

        {/* BOTÓN: Amarillo (#fbbf24) -> Hover Blanco con texto Amarillo */}
        <button
          onClick={scrollToIPs}
          className="w-full md:w-auto md:ml-4 bg-btc-yellow text-black font-bold px-8 py-2.5 rounded-xl transition-all duration-300 hover:bg-white hover:text-black uppercase text-xs tracking-widest cursor-pointer shadow-lg shadow-btc-yellow/10"
        >
          Conectarse
        </button>
      </div>
    </div>
  );
}
