'use client';

import { useState } from 'react';
import { listaPets } from '../../src/data/pets';
import { CartaoPetMapa } from '../../src/components/CartaoPetMapa';
import { FiltroMapa } from '../../src/components/FiltroMapa';
import styles from './mapa.module.css';

export default function MapaPage() {
  const [modalFiltroAberto, setModalFiltroAberto] = useState(false);

  return (
    <main>
      <section className={styles['secao-mapa']}>
        <div className={styles['fundo-mapa']}></div>

        <button 
          className={styles['icone-funil-mapa']} 
          onClick={() => setModalFiltroAberto(true)}
        >
          <span className="material-symbols-rounded" style={{ fontSize: '1.5em' }}>
            filter_alt
          </span>
        </button>

        {listaPets.map((pet) => (
          <CartaoPetMapa key={pet.id} pet={pet} />
        ))}
      </section>

      {modalFiltroAberto && (
        <FiltroMapa onFechar={() => setModalFiltroAberto(false)} />
      )}
    </main>
  );
}