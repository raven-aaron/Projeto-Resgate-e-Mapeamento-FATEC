'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './animais-cadastrados.module.css';
import CustomButton from '../../../src/components/CustomButton';

export default function AnimaisCadastrados() {
  const [filtroAberto, setFiltroAberto] = useState(false);
  const [especieFiltro, setEspecieFiltro] = useState('todos');
  const [statusFiltro, setStatusFiltro] = useState('todos');

  const [especieTemp, setEspecieTemp] = useState('todos');
  const [statusTemp, setStatusTemp] = useState('todos');

  const dadosAnimais = [
    { id: 'tuca', status: 'encontrado', especie: 'gato', nome: null, foto: '/assets/tucafoto.jpg' },
    { id: 'chico', status: 'perdido', especie: 'cachorro', nome: 'Chico', foto: '/assets/chicopenicofoto.jpeg' },
    { id: 'theo', status: 'perdido', especie: 'gato', nome: 'Theo', foto: '/assets/theo.jpg' },
    { id: 'laranjinha', status: 'encontrado', especie: 'gato', nome: null, foto: '/assets/laranjinha.jpg' },
    { id: 'caramelo', status: 'perdido', especie: 'cachorro', nome: 'Caramelo', foto: '/assets/caramelo.jpg' },
    { id: 'fofinho', status: 'encontrado', especie: 'cachorro', nome: null, foto: '/assets/Fofinho.jpg' }
  ];

  const animaisFiltrados = dadosAnimais.filter((animal) => {
    const atendeEspecie = especieFiltro === 'todos' || animal.especie === especieFiltro;
    const atendeStatus = statusFiltro === 'todos' || animal.status === statusFiltro;
    return atendeEspecie && atendeStatus;
  });

  const abrirModal = () => {
    setEspecieTemp(especieFiltro);
    setStatusTemp(statusFiltro);
    setFiltroAberto(true);
  };

  const aplicarFiltros = (e: React.FormEvent) => {
    e.preventDefault();
    setEspecieFiltro(especieTemp);
    setStatusFiltro(statusTemp);
    setFiltroAberto(false);
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.tituloPagina}>ANIMAIS CADASTRADOS</h1>

        <div className={styles.topoPagina}>
          <button className={styles.botaoFiltro} onClick={abrirModal}>
            <span className="material-symbols-rounded">filter_alt</span>
            Filtro Animal
          </button>
        </div>

        <div className={styles.gridCartoes}>
          {animaisFiltrados.map((animal) => {
            let linkHref = `/detalhes/${animal.id}`;
            if (animal.id === 'chico') linkHref = '/cartaz-PET-perdido';
            if (animal.id === 'tuca') linkHref = '/cartaz-PET-encontrado';
            if (animal.id === 'theo') linkHref = '/menuAdm/animais-cadastrados/theo';
            if (animal.id === 'laranjinha') linkHref = '/menuAdm/animais-cadastrados/gato-laranja';
            if (animal.id === 'caramelo') linkHref = '/menuAdm/animais-cadastrados/caramelo';
            if (animal.id === 'fofinho') linkHref = '/menuAdm/animais-cadastrados/fofinho';

            return (
              <div key={animal.id} className={styles.cartaoAnimal}>
                <div className={styles.fotoAnimal}>
                  <Image 
                    src={animal.foto} 
                    alt={`Pet ${animal.nome || 'Encontrado'}`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 350px"
                    priority={animal.id === 'tuca' || animal.id === 'chico'}
                  />
                </div>
                
                <div className={styles.infoAnimal}>
                  {animal.status === 'perdido' && animal.nome && (
                    <h3 className={styles.nomePet}>{animal.nome}</h3>
                  )}

                  <p className={styles.especiePet}>
                    Espécie: {animal.especie === 'gato' ? 'Gato' : 'Cachorro'}
                  </p>
                  
                  <p className={styles.labelStatus}>
                    Status:{' '}
                    <span className={animal.status === 'perdido' ? styles.statusPerdido : styles.statusEncontrado}>
                      {animal.status === 'perdido' ? 'Perdido' : 'Encontrado'}
                    </span>
                  </p>

                  <div className={styles.wrapperBtn}>
                    <Link href={linkHref}>
                      <CustomButton>SAIBA MAIS</CustomButton>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.navegacaoPaginas}>
          <Link href="#">⬅</Link>
          <Link href="#" className={styles.atual}>1</Link>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <Link href="#">4</Link>
          <Link href="#">5</Link>
          <Link href="#">⮕</Link>
        </div>
      </main>

      {filtroAberto && (
        <div className={styles.overlayFiltro} onClick={() => setFiltroAberto(false)}>
          <div className={styles.modalFiltro} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.tituloFiltro}>FILTRO DE MAPA</h2>
            
            <form onSubmit={aplicarFiltros}>
              <div className={styles.secaoFiltro}>
                <h3 className={styles.subtituloFiltro}>ESPÉCIE</h3>
                <label className={styles.opcaoFiltro}>
                  <input 
                    type="radio" 
                    value="todos" 
                    checked={especieTemp === 'todos'} 
                    onChange={(e) => setEspecieTemp(e.target.value)} 
                  />
                  Todos
                </label>
                <label className={styles.opcaoFiltro}>
                  <input 
                    type="radio" 
                    value="cachorro" 
                    checked={especieTemp === 'cachorro'} 
                    onChange={(e) => setEspecieTemp(e.target.value)} 
                  />
                  Cachorros
                </label>
                <label className={styles.opcaoFiltro}>
                  <input 
                    type="radio" 
                    value="gato" 
                    checked={especieTemp === 'gato'} 
                    onChange={(e) => setEspecieTemp(e.target.value)} 
                  />
                  Gatos
                </label>
              </div>

              <div className={styles.secaoFiltro}>
                <h3 className={styles.subtituloFiltro}>STATUS</h3>
                <label className={styles.opcaoFiltro}>
                  <input 
                    type="radio" 
                    value="todos" 
                    checked={statusTemp === 'todos'} 
                    onChange={(e) => setStatusTemp(e.target.value)} 
                  />
                  Todos
                </label>
                <label className={styles.opcaoFiltro}>
                  <input 
                    type="radio" 
                    value="perdido" 
                    checked={statusTemp === 'perdido'} 
                    onChange={(e) => setStatusTemp(e.target.value)} 
                  />
                  Perdidos
                </label>
                <label className={styles.opcaoFiltro}>
                  <input 
                    type="radio" 
                    value="encontrado" 
                    checked={statusTemp === 'encontrado'} 
                    onChange={(e) => setStatusTemp(e.target.value)} 
                  />
                  Encontrados
                </label>
              </div>

              <div className={styles.btnAplicarFiltro}>
                <CustomButton type="submit">APLICAR FILTROS</CustomButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}