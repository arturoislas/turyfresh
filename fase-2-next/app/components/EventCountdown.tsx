'use client'

import { useState, useEffect } from 'react'

const EVENTO = {
  nombre: 'MALAONDA FEST',
  venue: 'prrts Hifi',
  ciudad: 'Querétaro, Qro.',
  fecha: new Date(2026, 8, 20, 20, 0, 0),
}

function calcularTiempo(fechaEvento: Date) {
  const ahora = new Date()
  const diff = fechaEvento.getTime() - ahora.getTime()

  if (diff <= 0) return null

  return {
    dias:  Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    segs:  Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function EventCountdown() {
  const [tiempo, setTiempo] = useState(calcularTiempo(EVENTO.fecha))

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo(EVENTO.fecha))
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="w-full flex flex-col gap-3 mb-3">

      <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#666]">
        Próximo evento
      </p>

      <div className="bg-[#141414] border border-[#222] rounded-xl p-5 flex flex-col gap-4">

        <div>
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl text-white tracking-widest">
            {EVENTO.nombre}
          </h2>
          <p className="text-sm text-[#666] font-light mt-1">
            {EVENTO.venue} · {EVENTO.ciudad}
          </p>
          <p className="text-xs text-[#c8f542] font-medium tracking-widest mt-1">
            20 · Sep · 2026
          </p>
        </div>

        {tiempo ? (
          <div className="flex items-center gap-2">
            {[
              { valor: tiempo.dias,  unidad: 'días' },
              { valor: tiempo.horas, unidad: 'hrs' },
              { valor: tiempo.mins,  unidad: 'min' },
              { valor: tiempo.segs,  unidad: 'seg' },
            ].map(({ valor, unidad }) => (
              <div key={unidad} className="flex-1 flex flex-col items-center">
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-white tracking-wider leading-none">
                  {String(valor).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-[#666] uppercase tracking-widest mt-1">
                  {unidad}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-[family-name:var(--font-bebas)] text-2xl text-[#666] tracking-widest">
            YA FUE
          </p>
        )}

      </div>
    </section>
  )
}