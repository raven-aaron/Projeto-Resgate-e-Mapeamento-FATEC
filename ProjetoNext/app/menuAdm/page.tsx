'use client'
import React, { useState } from 'react';
import styles from './menuAdm.module.css';

export default function MenuAdm() {

  return (
    <>
      <main className={styles["main-adm-layout"]}>
        <div className={styles["menu-adm-container"]}>
          <div className={styles["menu-topo"]}>
          </div>

          <h2 className={styles["menu-titulo"]}>MENU ADM</h2>

          <ul className={styles["menu-links"]}>
            <li className={styles["section-header"]}><a href="#">Resgate e Mapeamento</a></li>
            <li><a href="/adm/mapa-calor">Mapa térmico</a></li>
            <li><a href="/registro-pet-encontrado">Cadastro de Animal</a></li>
            <li><a href="/adm/painel-estatisticas">Estatísticas</a></li>
            <li><a href="/adm/solicitacoes">Solicitações</a></li>
            <li><a href="/adm/animais-cadastrados">Animais cadastrados</a></li>
          </ul>
        </div>

        <div className={styles["conteudo-adm"]}>
          <h3 style={{ color: 'var(--cor-cinza)', textAlign: 'center', marginTop: '100px' }}>
            Selecione uma opção no menu ao lado
          </h3>
        </div>
      </main>
    </>
  );
}