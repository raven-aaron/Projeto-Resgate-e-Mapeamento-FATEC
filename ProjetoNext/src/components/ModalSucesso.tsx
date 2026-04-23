'use client'
import { Modal } from 'react-bootstrap';
import React from 'react';

interface PropriedadesModal {
  exibir: boolean;
  aoFechar: () => void;
}

export default function ModalSucesso({ exibir, aoFechar }: PropriedadesModal) {
  return (
    <Modal show={exibir} onHide={aoFechar} centered>
      <Modal.Header closeButton style={{ border: 'none' }}></Modal.Header>
      <Modal.Body className="text-center pb-5 px-4">
        <h1 style={{ color: 'var(--cor-vermelho)', fontSize: '32px', fontWeight: 'bold' }}>
          ATENÇÃO!
        </h1>
        <p style={{ fontSize: '16px', marginTop: '10px', color: 'var(--cor-escuro)' }}>
          O registro do seu pet foi enviado para o time administrativo.<br />
          Em breve o animal estará cadastrado e disponível no mapa da região.
        </p>
      </Modal.Body>
    </Modal>
  );
}