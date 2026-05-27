'use client';

import React from 'react';
import Link from 'next/link';
import styles from './menuAdm.module.css';

export default function MenuAdm() {
  return (
    <main className={styles.mainAdmLayout}>
      <div className={styles.menuAdmContainer}>
        <div className={styles.menuTopo}></div>

        <h2 className={styles.menuTitulo}>MENU ADM</h2>

        <ul className={styles.menuLinks}>
          <li className={styles.sectionHeader}>
            <Link href="/menuAdm">Resgate e Mapeamento</Link>
          </li>
          <li>
            <Link href="/menuAdm/mapa-calor">Mapa térmico</Link>
          </li>
          <li>
            <Link href="/registro-pet-encontrado">Cadastro de Animal</Link>
          </li>
          <li>
            <Link href="/menuAdm/painel-estatisticas">Estatísticas</Link>
          </li>
          <li>
            <Link href="/menuAdm/solicitacoes-ADM">Solicitações</Link>
          </li>
          <li>
            <Link href="/menuAdm/animais-cadastrados">Animais cadastrados</Link>
          </li>
        </ul>
      </div>

      <div className={styles.conteudoAdm}>
        <h3 className={styles.textoInformativo}>
          Selecione uma opção no menu ao lado
        </h3>
      </div>
    </main>
  );
}