'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './pet-perdido.module.css';
import CustomButton from '../../src/components/CustomButton';
import ModalContato from '../../src/components/ModalContato/ModalContato';

export default function PETPerdido() {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <>
      <main className={styles.cartazPetPerdido}>
        <section className={styles.cartaz}>
          <div className={styles.cartazContainer}>

            <div className={styles.itemTextoCartaz}>
              <h1 className={styles.tituloProcura}>PROCURA-SE</h1>
              <h2 className={styles.subtituloAnimalInfo}>CHICO</h2>
              <p className={styles.descricao}>Desaparecido há 7 dias</p>
              <p className={styles.descricao}>Sexo: Macho</p>
              <p className={styles.descricao}>
                Cachorro filhote, dócil, medroso e possui manchas brancas na pelagem.
              </p>
              
              <Link href="/mapa" className={styles.wrapperBtn}>
                <div className={styles.btnLaranja}>
                  <CustomButton>
                    VER NO MAPA
                  </CustomButton>
                </div>
              </Link>
            </div>

            <div className={styles.itemImgCartaz}>
              <Image 
                className={styles.fotoAnimal} 
                src="/assets/chicopenicofoto.jpeg" 
                alt="Chico Foto" 
                width={380} 
                height={480} 
                priority
              />
            </div>

          </div>
        </section>

        <div className={styles.my5InfosGerais}>

          <div className={styles.containerInfos}>
            <h1 className={styles.tituloInfo}>INFORMAÇÕES GERAIS</h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>NOME</h2>
              <p className={styles.descricao}>Chico</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>ESPÉCIE</h2>
              <p className={styles.descricao}>Cachorro</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>RAÇA</h2>
              <p className={styles.descricao}>SRD (Sem raça definida)</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>PORTE</h2>
              <p className={styles.descricao}>Pequeno</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>COR/PELAGEM</h2>
              <p className={styles.descricao}>Preto</p>
            </div>
          </div>

          <div className={styles.item4TextoInfo}>
            <h1 className={styles.tituloInfo}>LOCAL E DATA</h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>DATA DO DESAPARECIMENTO</h2>
              <p className={styles.descricao}>dd/mm/aaaa</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>LOCAL ONDE FOI VISTO PELA ÚLTIMA VEZ</h2>
              <p className={styles.descricao}>Próximo à rua tal, Votorantim - São Paulo</p>
            </div>

            <h1 className={`${styles.tituloInfo} ${styles.mt4}`}>CONTATO DO TUTOR</h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>NOME</h2>
              <p className={styles.descricao}>Bianca</p>
            </div>

            <div className={styles.wrapperBtn}>
              <div className={styles.btnVerdeAgua}>
                <CustomButton onClick={() => setAbrirModal(true)}>
                  CONTATO
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contatoBemEstar}>
          <Link href="/contato" className={styles.wrapperBtnLargo}>
            <div className={styles.btnLaranja}>
              <CustomButton>
                CONTATO BEM-ESTAR ANIMAL
              </CustomButton>
            </div>
          </Link>
        </div>

      </main>

      <ModalContato
        exibir={abrirModal}
        aoFechar={() => setAbrirModal(false)}
      />
    </>
  );
}