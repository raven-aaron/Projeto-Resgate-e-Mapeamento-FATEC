'use client'
import { Modal } from 'react-bootstrap';
import React from 'react';

interface PropriedadesModal {
  exibir: boolean;
  aoFechar: () => void;
}

export default function ModalContato({ exibir, aoFechar }: PropriedadesModal) {
  return (
    <Modal show={exibir} onHide={aoFechar} centered>
      <Modal.Header closeButton style={{ border: 'none' }} />
      
      <Modal.Body className="text-center pb-5 px-4">
        <h1
          style={{
            color: 'var(--cor-verde-petroleo)',
            fontSize: '32px',
            fontWeight: 'bold'
          }}
        >
          CONTATO DO USUÁRIO
        </h1>

        <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '25px'}}>
          Telefone:
        </p>
        <p style={{fontSize: '25px'}}>(xx)xxxxxx</p>

        <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '25px' }}>
          E-mail:
        </p>
        <p style={{fontSize: '25px'}}>email@email.com</p>
      </Modal.Body>
    </Modal>
  );
}