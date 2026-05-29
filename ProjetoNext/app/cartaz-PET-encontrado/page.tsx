'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './pet-encontrado.module.css';
import CustomButton from '../../src/components/CustomButton';
import ModalContato from '../../src/components/ModalContato/ModalContato';

export default function PETEncontrado() {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <>
      <main className={styles.cartazPetEncontrado}>
        <section className={styles.cartaz}>
          <div className={styles.cartazContainer}>

            <div className={styles.itemTextoCartaz}>
              <h1 className={styles.tituloEncontrado}>ENCONTRADO</h1>
              <h2 className={styles.subtituloAnimalInfo}>TUCA</h2>
              <p className={styles.descricao}>Encontrado há 24 horas</p>
              <p className={styles.descricao}>Sexo: Macho</p>
              <p className={styles.descricao}>
                Gato dócil, assustado, machucado e possui pelagem cinza mesclada.
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
                src="/assets/tucafoto.jpg" 
                alt="Tuca Foto" 
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
              <p className={styles.descricao}>Tuca</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>ESPÉCIE</h2>
              <p className={styles.descricao}>Gato</p>
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
              <p className={styles.descricao}>Cinza mesclado</p>
            </div>
          </div>

          <div className={styles.item4TextoInfo}>
            <h1 className={styles.tituloInfo}>LOCAL E DATA</h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>DATA DO RESGATE</h2>
              <p className={styles.descricao}>dd/mm/aaaa</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>LOCAL ONDE FOI ENCONTRADO</h2>
              <p className={styles.descricao}>Próximo à rua tal, Votorantim - São Paulo</p>
            </div>

            <h1 className={`${styles.tituloInfo} ${styles.mt4}`}>CONTATO DO PROTETOR</h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>NOME</h2>
              <p className={styles.descricao}>Gabriel</p>
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