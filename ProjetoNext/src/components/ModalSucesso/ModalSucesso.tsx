'use client';

import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './ModalSucesso.module.css';

interface ModalSucessoProps {
  exibir: boolean;
  aoFechar: () => void;
  titulo?: string;
  mensagem?: string;
}

export default function ModalSucesso({ 
  exibir, 
  aoFechar, 
  titulo = "ATENÇÃO!", 
  mensagem = "O registro do seu pet foi enviado para o time administrativo. Em breve o animal estará cadastrado e disponível no mapa da região." 
}: ModalSucessoProps) {
  return (
    <Modal show={exibir} onHide={aoFechar} centered>
      <Modal.Header closeButton className={styles.modalHeader}>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <h2 className={styles.tituloAlerta}>{titulo}</h2>
        <p className={styles.textoAlerta}>{mensagem}</p>
      </Modal.Body>
    </Modal>
  );
}