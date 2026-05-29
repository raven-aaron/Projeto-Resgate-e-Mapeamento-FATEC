'use client';

import React, { useState } from 'react';
import styles from './painel-estatisticas.module.css';

export default function PainelEstatisticas() {
  const [periodoFiltro, setPeriodoFiltro] = useState('todos');
  const [especieFiltro, setEspecieFiltro] = useState('todos');
  const [statusFiltro, setStatusFiltro] = useState('todos');

  const dadosOcorrencias = [
    { id: 1, especie: 'cachorro', status: 'perdido', bairro: 'Pq. Bela Vista', data: '2026-04-28' },
    { id: 2, especie: 'gato', status: 'encontrado', bairro: 'Jd. Serrano', data: '2026-04-29' },
    { id: 3, especie: 'cachorro', status: 'encontrado', bairro: 'Pq. Bela Vista', data: '2026-04-10' },
    { id: 4, especie: 'gato', status: 'perdido', bairro: 'Jd. Archila', data: '2026-05-01' },
    { id: 5, especie: 'cachorro', status: 'perdido', bairro: 'Vossoroca', data: '2026-04-20' },
    { id: 6, especie: 'gato', status: 'encontrado', bairro: 'Rio Acima', data: '2026-04-22' },
    { id: 7, especie: 'cachorro', status: 'encontrado', bairro: 'Pq. Bela Vista', data: '2026-04-25' },
    { id: 8, especie: 'cachorro', status: 'perdido', bairro: 'Jd. Serrano', data: '2026-04-12' },
    { id: 9, especie: 'gato', status: 'perdido', bairro: 'Vossoroca', data: '2026-04-15' },
    { id: 10, especie: 'cachorro', status: 'encontrado', bairro: 'Rio Acima', data: '2026-04-05' },
    { id: 11, especie: 'gato', status: 'encontrado', bairro: 'Pq. Bela Vista', data: '2026-04-30' },
    { id: 12, especie: 'cachorro', status: 'perdido', bairro: 'Jd. Archila', data: '2026-05-02' },
    { id: 13, especie: 'gato', status: 'perdido', bairro: 'Jd. Serrano', data: '2026-04-08' },
    { id: 14, especie: 'cachorro', status: 'encontrado', bairro: 'Vossoroca', data: '2026-04-18' },
    { id: 15, especie: 'gato', status: 'encontrado', bairro: 'Jd. Serrano', data: '2026-04-26' }
  ];

  const filtrarPorData = (dataStr: string) => {
    if (periodoFiltro === 'todos') return true;
    const dataRegistro = new Date(dataStr);
    const dataBase = new Date('2026-05-03');
    const diferencaDias = (dataBase.getTime() - dataRegistro.getTime()) / (1000 * 60 * 60 * 24);
    
    if (periodoFiltro === '7dias') return diferencaDias <= 7;
    if (periodoFiltro === '30dias') return diferencaDias <= 30;
    return true;
  };

  const dadosFiltrados = dadosOcorrencias.filter((ocorrencia) => {
    const atendeEspecie = especieFiltro === 'todos' || ocorrencia.especie === especieFiltro;
    const atendeStatus = statusFiltro === 'todos' || ocorrencia.status === statusFiltro;
    const atendeData = filtrarPorData(ocorrencia.data);
    return atendeEspecie && atendeStatus && atendeData;
  });

  const totalOcorrencias = dadosFiltrados.length;

  const totalCachorros = dadosFiltrados.filter(o => o.especie === 'cachorro').length;
  const totalGatos = dadosFiltrados.filter(o => o.especie === 'gato').length;

  const percCachorros = totalOcorrencias > 0 ? Math.round((totalCachorros / totalOcorrencias) * 100) : 0;
  const percGatos = totalOcorrencias > 0 ? Math.round((totalGatos / totalOcorrencias) * 100) : 0;

  const totalPerdidos = dadosFiltrados.filter(o => o.status === 'perdido').length;
  const totalEncontrados = dadosFiltrados.filter(o => o.status === 'encontrado').length;

  const percPerdidos = totalOcorrencias > 0 ? Math.round((totalPerdidos / totalOcorrencias) * 100) : 0;
  const percEncontrados = totalOcorrencias > 0 ? Math.round((totalEncontrados / totalOcorrencias) * 100) : 0;

  const contagemBairros = dadosFiltrados.reduce((acc, o) => {
    acc[o.bairro] = (acc[o.bairro] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const rankingBairros = Object.entries(contagemBairros)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maiorBairro = rankingBairros.length > 0 ? rankingBairros[0][1] : 1;

  return (
    <main className={styles.main}>
      <h1 className={styles.tituloPagina}>PAINEL DE ESTATÍSTICAS</h1>

      <div className={styles.containerFiltros}>
        <div className={styles.grupoFiltro}>
          <label htmlFor="periodo">Período</label>
          <select id="periodo" value={periodoFiltro} onChange={(e) => setPeriodoFiltro(e.target.value)}>
            <option value="todos">Todos os registros</option>
            <option value="7dias">Últimos 7 dias</option>
            <option value="30dias">Últimos 30 dias</option>
          </select>
        </div>

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

      <div className={styles.gridKpis}>
        <div className={styles.cardKpi}>
          <p className={styles.valorKpi}>{totalOcorrencias}</p>
          <h3 className={styles.tituloKpi}>Total de Casos</h3>
        </div>
        <div className={styles.cardKpi}>
          <p className={styles.valorKpi}>{totalPerdidos}</p>
          <h3 className={styles.tituloKpi}>Perdidos Ativos</h3>
        </div>
        <div className={styles.cardKpi}>
          <p className={styles.valorKpi}>{totalEncontrados}</p>
          <h3 className={styles.tituloKpi}>Resgatados/Acolhidos</h3>
        </div>
      </div>

      <div className={styles.containerGraficos}>
        <div className={styles.cardGrafico}>
          <h3 className={styles.tituloGrafico}>Distribuição por Espécie</h3>
          
          <div className={styles.linhaGrafico}>
            <div className={styles.infoLinha}>
              <span>Cachorros</span>
              <span>{percCachorros}% ({totalCachorros})</span>
            </div>
            <div className={styles.barraCompleta}>
              <div className={`${styles.barraProgresso} ${styles.corLaranja}`} style={{ width: `${percCachorros}%` }}></div>
            </div>
          </div>

          <div className={styles.linhaGrafico}>
            <div className={styles.infoLinha}>
              <span>Gatos</span>
              <span>{percGatos}% ({totalGatos})</span>
            </div>
            <div className={styles.barraCompleta}>
              <div className={`${styles.barraProgresso} ${styles.corVerdeAgua}`} style={{ width: `${percGatos}%` }}></div>
            </div>
          </div>
        </div>

        <div className={styles.cardGrafico}>
          <h3 className={styles.tituloGrafico}>Casos por Região (Votorantim)</h3>
          <div className={styles.listaBairros}>
            {rankingBairros.length > 0 ? (
              rankingBairros.map(([bairro, qtd]) => {
                const percLargura = Math.round((qtd / maiorBairro) * 100);
                return (
                  <div key={bairro} className={styles.itemBairro}>
                    <span className={styles.nomeBairro} title={bairro}>{bairro}</span>
                    <div className={styles.barraCompleta}>
                      <div className={`${styles.barraProgresso} ${styles.corVermelho}`} style={{ width: `${percLargura}%` }}></div>
                    </div>
                    <span className={styles.quantidadeBairro}>{qtd}</span>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: 'center', color: '#64748b' }}>Nenhum caso na região</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}