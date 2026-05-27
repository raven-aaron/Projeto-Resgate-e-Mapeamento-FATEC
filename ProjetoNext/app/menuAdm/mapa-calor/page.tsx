'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './mapa-calor.module.css';

export default function MapaCalor() {
  const [especieFiltro, setEspecieFiltro] = useState('todos');
  const [statusFiltro, setStatusFiltro] = useState('todos');

  const dadosOcorrencias = [
    { id: 1, especie: 'cachorro', status: 'perdido', bairro: 'Bairro Itapeva' },
    { id: 2, especie: 'gato', status: 'encontrado', bairro: 'Centro / Jardim Serrano' },
    { id: 3, especie: 'cachorro', status: 'encontrado', bairro: 'Bairro Itapeva' },
    { id: 4, especie: 'gato', status: 'perdido', bairro: 'Parque do Matão' },
    { id: 5, especie: 'cachorro', status: 'perdido', bairro: 'Vossoroca' },
    { id: 6, especie: 'gato', status: 'encontrado', bairro: 'Rio Acima' },
    { id: 7, especie: 'cachorro', status: 'encontrado', bairro: 'Bairro Itapeva' },
    { id: 8, especie: 'cachorro', status: 'perdido', bairro: 'Centro / Jardim Serrano' },
    { id: 9, especie: 'gato', status: 'perdido', bairro: 'Vossoroca' },
    { id: 10, especie: 'cachorro', status: 'encontrado', bairro: 'Rio Acima' },
    { id: 11, especie: 'gato', status: 'encontrado', bairro: 'Bairro Itapeva' },
    { id: 12, especie: 'cachorro', status: 'perdido', bairro: 'Parque do Matão' },
    { id: 13, especie: 'gato', status: 'perdido', bairro: 'Centro / Jardim Serrano' },
    { id: 14, especie: 'cachorro', status: 'encontrado', bairro: 'Vossoroca' },
    { id: 15, especie: 'gato', status: 'encontrado', bairro: 'Centro / Jardim Serrano' },
    { id: 16, especie: 'cachorro', status: 'perdido', bairro: 'Bairro Itapeva' },
    { id: 17, especie: 'gato', status: 'perdido', bairro: 'Bairro Itapeva' }
  ];

  const coordenadasBairros: Record<string, { x: string; y: string }> = {
    'Bairro Itapeva': { x: '34%', y: '30%' },
    'Parque do Matão': { x: '22%', y: '72%' },
    'Rio Acima': { x: '94%', y: '82%' },
    'Centro / Jardim Serrano': { x: '65%', y: '45%' },
    'Vossoroca': { x: '60%', y: '15%' }
  };

  const dadosFiltrados = dadosOcorrencias.filter((ocorrencia) => {
    const atendeEspecie = especieFiltro === 'todos' || ocorrencia.especie === especieFiltro;
    const atendeStatus = statusFiltro === 'todos' || ocorrencia.status === statusFiltro;
    return atendeEspecie && atendeStatus;
  });

  const contagemBairros = dadosFiltrados.reduce((acc, o) => {
    acc[o.bairro] = (acc[o.bairro] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const rankingBairros = Object.entries(contagemBairros).sort((a, b) => b[1] - a[1]);

  const zonaMaiorRisco = rankingBairros.length > 0 ? rankingBairros[0][0] : 'Nenhum registro';
  
  const totalPerdidos = dadosFiltrados.filter(o => o.status === 'perdido').length;
  const totalEncontrados = dadosFiltrados.filter(o => o.status === 'encontrado').length;
  
  const percentualEncontrados = dadosFiltrados.length > 0 
    ? Math.round((totalEncontrados / dadosFiltrados.length) * 100) 
    : 0;

  return (
    <main className={styles.main}>
      <h1 className={styles.tituloPagina}>MAPA TÉRMICO</h1>

      <div className={styles.containerFiltros}>
        <div className={styles.grupoFiltro}>
          <label htmlFor="especie">Espécie</label>
          <select id="especie" value={especieFiltro} onChange={(e) => setEspecieFiltro(e.target.value)}>
            <option value="todos">Todas as espécies</option>
            <option value="cachorro">Cachorros</option>
            <option value="gato">Gatos</option>
          </select>
        </div>

        <div className={styles.grupoFiltro}>
          <label htmlFor="status">Status</label>
          <select id="status" value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)}>
            <option value="todos">Todos os status</option>
            <option value="perdido">Perdidos</option>
            <option value="encontrado">Encontrados</option>
          </select>
        </div>
      </div>

      <div className={styles.conteudoPainel}>
        
        <div className={styles.cardMapa}>
          <h3 className={styles.tituloPainel}>Zonas de Perda em Votorantim</h3>
          <p className={styles.subtituloPainel}>
            Análise territorial das áreas de concentração com base nos filtros ativos
          </p>
          
          <div className={styles.wrapperMapaVisual}>
            <Image 
              src="/assets/mapa-termico.png" 
              alt="Mapa base de Votorantim-SP" 
              fill 
              className={styles.imagemFundoMapa}
              priority
            />

            {rankingBairros.map(([bairro, qtd], indice) => {
              const posicao = coordenadasBairros[bairro];
              if (!posicao) return null;

              let classeMancha = styles.nivelBaixo;
              let classeBg = styles.bgVerdeAgua;

              if (indice === 0) {
                classeMancha = styles.nivelAlto;
                classeBg = styles.bgVermelho;
              } else if (indice === 1) {
                classeMancha = styles.nivelMedio;
                classeBg = styles.bgLaranja;
              }

              return (
                <React.Fragment key={bairro}>
                  <div 
                    className={`${styles.manchaCalor} ${classeMancha}`} 
                    style={{ left: posicao.x, top: posicao.y, transform: 'translate(-50%, -50%)' }}
                  ></div>

                  <div 
                    className={styles.marcadorBairro} 
                    style={{ left: posicao.x, top: posicao.y }}
                  >
                    <div className={`${styles.pontoMarcador} ${classeBg}`}></div>
                    <span className={styles.nomeMarcador}>{bairro}</span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className={styles.cardLateralInfo}>
          
          <div className={styles.painelResumo}>
            <h3 className={styles.tituloPainel}>Alertas Críticos</h3>
            <div className={styles.gridInsights}>
              <div className={`${styles.cardInsight} ${styles.bordaVermelho}`}>
                <p className={styles.tituloInsight}>Área de Maior Risco</p>
                <p className={styles.valorInsight}>{zonaMaiorRisco}</p>
              </div>
              
              <div className={`${styles.cardInsight} ${styles.bordaLaranja}`}>
                <p className={styles.tituloInsight}>Total de Perdidos</p>
                <p className={styles.valorInsight}>{totalPerdidos} animais</p>
              </div>

              <div className={`${styles.cardInsight} ${styles.bordaVerdeAgua}`}>
                <p className={styles.tituloInsight}>Pets Encontrados na Área</p>
                <p className={styles.valorInsight}>{percentualEncontrados}% do total</p>
              </div>
            </div>
          </div>

          <div className={styles.painelResumo}>
            <h3 className={styles.tituloPainel}>Densidade por Bairro</h3>
            <div className={styles.listaRanking}>
              {rankingBairros.length > 0 ? (
                rankingBairros.map(([bairro, qtd], indice) => {
                  let classeBg = styles.bgVerdeAgua;
                  if (indice === 0) classeBg = styles.bgVermelho;
                  if (indice === 1) classeBg = styles.bgLaranja;

                  return (
                    <div key={bairro} className={styles.itemRanking}>
                      <span className={styles.nomeRanking}>{bairro}</span>
                      <span className={`${styles.badgeOcorrencias} ${classeBg}`}>
                        {qtd} {qtd === 1 ? 'caso' : 'casos'}
                      </span>
                    </div>
                  );
                })
              ) : (
                <p style={{ color: '#64748b', fontSize: '0.9em', textAlign: 'center' }}>
                  Nenhuma ocorrência registrada para os filtros ativos.
                </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}