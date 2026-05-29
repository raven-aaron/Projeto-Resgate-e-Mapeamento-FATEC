'use client';
import React from 'react';
import styles from './ModalContato.module.css';

interface PropriedadesModal {
  exibir: boolean;
  aoFechar: () => void;
}

export default function ModalContato({ exibir, aoFechar }: PropriedadesModal) {
  if (!exibir) return null;

  return (
    <div className={styles.overlay} onClick={aoFechar}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.btnClose} onClick={aoFechar}>
          &times;
        </button>
        <div className={styles.body}>
          <h1 className={styles.titulo}>CONTATO DO USUÁRIO</h1>

          <p className={styles.label}>Telefone:</p>
          <p className={styles.valor}>(xx)xxxxxx</p>

          <p className={styles.label}>E-mail:</p>
          <p className={styles.valor}>email@email.com</p>
        </div>
      </div>
    </div>
  );
}