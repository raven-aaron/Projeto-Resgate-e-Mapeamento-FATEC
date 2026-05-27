'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './solicitacoes-ADM.module.css';
import CustomButton from '../../../src/components/CustomButton';

export default function SolicitacoesAdm() {
  const [filtroAberto, setFiltroAberto] = useState(false);
  const [especieFiltro, setEspecieFiltro] = useState('todos');
  const [statusFiltro, setStatusFiltro] = useState('todos');

  const [especieTemp, setEspecieTemp] = useState('todos');
  const [statusTemp, setStatusTemp] = useState('todos');

  const dadosSolicitacoes = [
    { id: 'chico', status: 'perdido', especie: 'cachorro', nome: 'Chico', tempo: 'Perdido há 10 horas', machucado: false, foto: '/assets/chicopenicofoto.jpeg' },
    { id: 'tuca', status: 'encontrado', especie: 'gato', nome: null, tempo: 'Encontrado há 24 horas', machucado: true, foto: '/assets/tucafoto.jpg' },
    { id: 'laranjinha', status: 'encontrado', especie: 'gato', nome: null, tempo: 'Encontrado há 3 dias', machucado: false, foto: '/assets/laranjinha.jpg' },
    { id: 'princesa', status: 'perdido', especie: 'cachorro', nome: 'Amélia', tempo: 'Perdido há 24 horas', machucado: false, foto: '/assets/princesa.jpg' },
    { id: 'thor', status: 'perdido', especie: 'cachorro', nome: 'Alabama', tempo: 'Perdido há 5 horas', machucado: false, foto: '/assets/alabamafoto.jpg' },
    { id: 'alabama', status: 'encontrado', especie: 'cachorro', nome: null, tempo: 'Encontrado há 10 dias', machucado: false, foto: '/assets/Fofinho.jpg' }
  ];

  const cartoesFiltrados = dadosSolicitacoes.filter((solicitacao) => {
    const atendeEspecie = especieFiltro === 'todos' || solicitacao.especie === especieFiltro;
    const atendeStatus = statusFiltro === 'todos' || solicitacao.status === statusFiltro;
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
        <h1 className={styles.tituloPagina}>SOLICITAÇÕES</h1>

        <div className={styles.topoPagina}>
          <button className={styles.botaoFiltro} onClick={abrirModal}>
            <span className="material-symbols-rounded">filter_alt</span>
          </button>
        </div>

        <div className={styles.gridCartoes}>
          {cartoesFiltrados.map((solicitacao) => {
            let linkHref = `/detalhes/${solicitacao.id}`;
            if (solicitacao.id === 'chico') linkHref = '/cartaz-PET-perdido';
            if (solicitacao.id === 'tuca') linkHref = '/cartaz-PET-encontrado';

            return (
              <div key={solicitacao.id} className={styles.cartaoSolicitacao}>
                <div className={styles.infoCartao}>
                  <h3 className={solicitacao.status === 'perdido' ? styles.statusPerdido : styles.statusEncontrado}>
                    {solicitacao.status === 'perdido' ? 'PROCURA-SE' : 'ENCONTRADO'}
                  </h3>
                  
                  {solicitacao.nome && <p className={styles.nomePet}>Nome: {solicitacao.nome}</p>}
                  
                  <p className={`${styles.dataRegistro} ${!solicitacao.machucado ? styles.mb15 : ''}`}>
                    {solicitacao.tempo}
                  </p>

                  {solicitacao.machucado && <p className={styles.machucado}>Machucado</p>}

                  <div className={styles.botoesAcao}>
                    <Link href={linkHref}>
                      <div className={`${styles.wrapperBtn} ${styles.btnSaibaMais}`}>
                        <CustomButton>SAIBA MAIS</CustomButton>
                      </div>
                    </Link>
                    <div className={`${styles.wrapperBtn} ${styles.btnAceitar}`}>
                      <CustomButton>ACEITAR</CustomButton>
                    </div>
                    <div className={`${styles.wrapperBtn} ${styles.btnNegar}`}>
                      <CustomButton>NEGAR</CustomButton>
                    </div>
                  </div>
                </div>
                <div className={styles.fotoPet}>
                  <Image 
                    src={solicitacao.foto} 
                    alt={`Pet ${solicitacao.nome || 'Encontrado'}`} 
                    width={170} 
                    height={170} 
                    priority={solicitacao.id === 'chico'}
                  />
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
            <h2 className={styles.tituloFiltro}>FILTRO</h2>
            
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