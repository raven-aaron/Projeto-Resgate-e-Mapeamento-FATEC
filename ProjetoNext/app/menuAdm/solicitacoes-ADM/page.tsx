'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Modal, Form } from 'react-bootstrap';
import styles from './solicitacoes-ADM.module.css';
import CustomButton from '../../../src/components/CustomButton';

export default function SolicitacoesAdm() {
  const [modalNegar, setModalNegar] = useState(false);
  const [modalAceitar, setModalAceitar] = useState(false);
  const [modalFeedback, setModalFeedback] = useState(false);
  const [mensagemFeedback, setMensagemFeedback] = useState('');
  const [motivoNegacao, setMotivoNegacao] = useState('');

  const dadosSolicitacoes = [
    { id: 'chico', status: 'perdido', especie: 'cachorro', nome: 'Chico', tempo: 'Perdido há 10 horas', foto: '/assets/chicopenicofoto.jpeg' },
    { id: 'tuca', status: 'encontrado', especie: 'gato', nome: null, tempo: 'Encontrado há 24 horas', foto: '/assets/tucafoto.jpg' },
    { id: 'laranjinha', status: 'encontrado', especie: 'gato', nome: null, tempo: 'Encontrado há 3 dias', foto: '/assets/laranjinha.jpg' },
    { id: 'caramelo', status: 'perdido', especie: 'cachorro', nome: 'Caramelo', tempo: 'Perdido há 24 horas', foto: '/assets/caramelo.jpg' },
    { id: 'alabama', status: 'perdido', especie: 'cachorro', nome: 'Alabama', tempo: 'Perdido há 5 horas', foto: '/assets/alabamafoto.jpg' },
    { id: '2', status: 'encontrado', especie: 'cachorro', nome: null, tempo: 'Encontrado há 10 dias', foto: '/assets/Fofinho.jpg' }
  ];

  const motivos = ['Falta de informações', 'Anúncio falso', 'Anúncio duplicado', 'Conteúdo inadequado', 'Outro'];

  const getLink = (id: string) => {
    const rotas: Record<string, string> = {
      'chico': '/cartaz-PET-perdido', 'tuca': '/cartaz-PET-encontrado', 'caramelo': '/detalhes/caramelo',
      'alabama': '/detalhes/4', 'laranjinha': '/detalhes/laranjinha', 'fofinho': '/detalhes/fofinho'
    };
    return rotas[id] || `/detalhes/${id}`;
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.tituloPagina}>SOLICITAÇÕES</h1>
        <div className={styles.gridCartoes}>
          {dadosSolicitacoes.map((s) => (
            <div key={s.id} className={styles.cartaoSolicitacao}>
              <div className={styles.infoCartao}>
                <h3 className={s.status === 'perdido' ? styles.statusPerdido : styles.statusEncontrado}>{s.status === 'perdido' ? 'PROCURA-SE' : 'ENCONTRADO'}</h3>
                {s.nome && <p className={styles.nomePet}>Nome: {s.nome}</p>}
                <p className={styles.dataRegistro}>{s.tempo}</p>
                <div className={styles.botoesAcao}>
                  <Link href={getLink(s.id)} className={styles.wrapperBtn}>
                    <div className={`${styles.wrapperBtn} ${styles.btnSaibaMais}`}><CustomButton>SAIBA MAIS</CustomButton></div>
                  </Link>
                  <div className={`${styles.wrapperBtn} ${styles.btnAceitar}`}>
                    <CustomButton onClick={() => setModalAceitar(true)}>ACEITAR</CustomButton>
                  </div>
                  <div className={`${styles.wrapperBtn} ${styles.btnNegar}`}>
                    <CustomButton onClick={() => setModalNegar(true)}>NEGAR</CustomButton>
                  </div>
                </div>
              </div>
              <div className={styles.fotoPet}><Image src={s.foto} alt="Pet" width={170} height={170} /></div>
            </div>
          ))}
        </div>
      </main>

      <Modal show={modalAceitar} onHide={() => setModalAceitar(false)} centered>
        <Modal.Body className="text-center">
          <p>Confirma que as informações foram verificadas?</p>
          <div className={styles.btnAceitar}><CustomButton onClick={() => { setModalAceitar(false); setMensagemFeedback('Aceito com sucesso!'); setModalFeedback(true); }}>CONFIRMAR</CustomButton></div>
        </Modal.Body>
      </Modal>

      <Modal show={modalNegar} onHide={() => setModalNegar(false)} centered>
        <Modal.Body>
          <h5 className="mb-3">Selecione o motivo:</h5>
          {motivos.map((m) => <Form.Check key={m} type="radio" label={m} name="motivo" onChange={() => setMotivoNegacao(m)} />)}
          <div className="mt-4 text-center">
            <div className={styles.btnNegar}><CustomButton onClick={() => { setModalNegar(false); setMensagemFeedback('Motivo enviado para o usuário.'); setModalFeedback(true); }}>ENVIAR</CustomButton></div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={modalFeedback} onHide={() => setModalFeedback(false)} centered>
        <Modal.Body className="text-center p-4">
          <h5 className="mb-4">{mensagemFeedback}</h5>
          <div className={styles.btnOk}><CustomButton onClick={() => setModalFeedback(false)}>OK</CustomButton></div>
        </Modal.Body>
      </Modal>
    </>
  );
}