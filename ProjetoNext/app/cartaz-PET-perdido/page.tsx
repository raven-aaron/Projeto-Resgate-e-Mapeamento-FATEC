'use client'

import { useState } from 'react';
import styles from './pet-perdido.module.css';
import CustomButton from '@/src/components/CustomButton';
import ModalContato from '@/src/components/ModalContato';

export default function PETPerdido() {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <>
      <main className={styles['cartaz-pet-perdido']}>

        <section className={styles['cartaz']}>
          <div className={styles['cartaz-container']}>

            <div className={styles['item-1-texto-cartaz']}>
              <h1 className={styles['titulo-procura']}>PROCURA-SE</h1>
              <h2 className={styles['subtitulo-animal-info']}>CHICO</h2> <br></br>
              <p className={styles['descricao']}>Desaparecido há 7 dias</p> <br></br>
              <p className={styles['descricao']}>Sexo: Macho</p> <br></br>
              <p className={styles['descricao']}>
                Cachorro filhote, dócil, medroso e possui manchas brancas na pelagem.
              </p> <br></br>
              <CustomButton type="button">VER NO MAPA</CustomButton>
            </div>

            <div className={styles['item-2-texto-cartaz']}>
            <img className={styles['foto-animal']} src="assets/chicopenicofoto.jpeg" alt="Chico Foto" />
            </div>

          </div>
        </section>

        <section className={styles['cartaz-fim']}>
          <div className={styles['infos']}>
          </div>
        </section>

        <div className={styles['my-5-infos-gerais']}>

          <div className={styles['container']}>
            <h1 className={styles['titulo-info']}>INFORMAÇÕES GERAIS</h1>

            <h2 className={styles['subtitulo-animal-info']}>NOME</h2>
            <p className={styles['descricao']}>Chico</p> <br></br>

            <h2 className={styles['subtitulo-animal-info']}>ESPÉCIE</h2>
            <p className={styles['descricao']}>Cachorro</p> <br></br>

            <h2 className={styles['subtitulo-animal-info']}>RAÇA</h2>
            <p className={styles['descricao']}>SRD</p> <br></br>

            <h2 className={styles['subtitulo-animal-info']}>PORTE</h2>
            <p className={styles['descricao']}>Pequeno</p> <br></br>

            <h2 className={styles['subtitulo-animal-info']}>COR/PELAGEM</h2>
            <p className={styles['descricao']}>Preto</p> <br></br>
          </div>

          <div className={styles['item-4-texto-info']}>
            <h1 className={styles['titulo-info']}>LOCAL E DATA</h1>

            <h2 className={styles['subtitulo-animal-info']}>DATA DO DESAPARECIMENTO</h2>
            <p className={styles['descricao']}>dd/mm/aaaa</p> <br></br>

            <h2 className={styles['subtitulo-animal-info']}>LOCAL ONDE FOI VISTO PELA ÚLTIMA VEZ</h2>
            <p className={styles['descricao']}>Próximo à rua tal, Votorantim - São Paulo</p> <br></br>

            <h1 className={`${styles['titulo-info']} ${styles['mt-4']}`}>CONTATO DO TUTOR</h1>

            <h2 className={styles['subtitulo-animal-info']}>NOME</h2>
            <p className={styles['descricao']}>Bianca</p>

            <CustomButton className="btn-verde" onClick={() => setAbrirModal(true)}>
              CONTATO
            </CustomButton>

    </div>
    </div>
            <div className={styles['contato-bem-estar']}>
              <button className="btn-custom">CONTATO BEM-ESTAR ANIMAL</button>

        </div>

      </main>

      <ModalContato
        exibir={abrirModal}
        aoFechar={() => setAbrirModal(false)}
      />
    </>
  );
}