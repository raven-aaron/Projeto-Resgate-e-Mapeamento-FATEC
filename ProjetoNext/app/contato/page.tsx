'use client';

import React, { useState } from 'react';
import styles from './contato.module.css';
import CustomButton from '../../src/components/CustomButton';
import ModalSucesso from '../../src/components/ModalSucesso/ModalSucesso';

export default function Contato() {
  const [mensagem, setMensagem] = useState('');
  const [exibirModal, setExibirModal] = useState(false);

  const manipularEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensagem.trim() !== '') {
      setExibirModal(true);
      setMensagem('');
    }
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.tituloPagina}>CONTATE-NOS</h1>

        <div className={styles.contatoWrapper}>
          
          <div className={styles.cardInformacoes}>
            <div className={styles.linhaContato}>
              <span className={`material-symbols-rounded ${styles.iconeContato}`}>mail</span>
              <p className={styles.textoContato}>bemestaranimal@votorantim.sp.gov.br</p>
            </div>

            <div className={styles.linhaContato}>
              <span className={`material-symbols-rounded ${styles.iconeContato}`}>call</span>
              <p className={styles.textoContato}>(15) 3243-5612</p>
            </div>

            <div className={styles.linhaContato}>
              <span className={`material-symbols-rounded ${styles.iconeContato}`}>location_on</span>
              <p className={styles.textoContato}>Rua Ângelo Delapasi, 117 - Parque Bela Vista - Votorantim/SP</p>
            </div>

            <div className={styles.mapaContainer}>
             <iframe 
  src="https://maps.google.com/maps?q=Rua%20%C3%82ngelo%20Delapasi%2C%20117%20Parque%20Bela%20Vista%20Votorantim%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
            </div>
          </div>

          <div className={styles.cardFormulario}>
            <h4 className={styles.tituloFormulario}>Formulário para Contatos</h4>
            
            <form onSubmit={manipularEnvio}>
              <label htmlFor="textareaContato" className={styles.labelCampo}>
                Mensagem
              </label>
              <textarea 
                id="textareaContato" 
                className={styles.textareaContato}
                placeholder="Digite Aqui..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>

              <div className={styles.wrapperBtn}>
                <CustomButton type="submit">Enviar Formulário</CustomButton>
              </div>
            </form>
          </div>

        </div>
      </main>

      <ModalSucesso 
        exibir={exibirModal} 
        aoFechar={() => setExibirModal(false)} 
        titulo="SUCESSO!"
        mensagem="Sua mensagem foi enviada com sucesso!"
      />
    </>
  );
}