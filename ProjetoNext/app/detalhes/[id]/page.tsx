'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './detalhes.module.css';
import CustomButton from '../../../src/components/CustomButton';
import ModalContato from '../../../src/components/ModalContato/ModalContato';

export default function DetalhesPetPublico() {
  const params = useParams();
  const [abrirModal, setAbrirModal] = useState(false);

  const petId = typeof params?.id === 'string' ? params.id.toLowerCase().trim() : '';

  const dadosPets: Record<string, {
    id: string;
    status: string;
    nome: string | null;
    especie: string;
    raca: string;
    porte: string;
    cor: string;
    sexo: string;
    idadeOuTempo: string;
    descricao: string;
    foto: string;
    dataEvento: string;
    local: string;
    tutor: string;
  }> = {
    '1': {
      id: '1',
      status: 'encontrado',
      nome: '',
      especie: 'Gato',
      raca: 'SRD (Sem raça definida)',
      porte: 'Médio',
      cor: 'Tigrado Escuro',
      sexo: 'Macho',
      idadeOuTempo: 'Encontrada há 4 dias',
      descricao: 'Muito dócil, encontrada miando no portão de uma casa.',
      foto: '/assets/tucafoto.jpg',
      dataEvento: '22/04/2026',
      local: 'Parque Jataí, Votorantim - SP',
      tutor: 'Carlos '
    },
    '2': {
      id: '2',
      status: 'encontrado',
      nome: '',
      especie: 'Cachorro',
      raca: 'Golden retriever',
      porte: 'Grande',
      cor: 'Dourado claro',
      sexo: 'Fêmea',
      idadeOuTempo: 'Encontrado há 1 dia',
      descricao: 'Encontrado no final da tarde. Possui coleira com nome Mary.',
      foto: '/assets/Fofinho.jpg',
      dataEvento: '27/04/2026',
      local: 'Parque Bela Vista, Votorantim - SP',
      tutor: 'Raven'
    },
    '5': {
      id: '5',
      status: 'perdido',
      nome: 'CHICO',
      especie: 'Cachorro',
      raca: 'SRD (Sem raça definida)',
      porte: 'Pequeno',
      cor: 'Preto',
      sexo: 'Macho',
      idadeOuTempo: 'Desaparecido há 7 dias',
      descricao: 'Cachorro filhote, dócil, medroso e possui manchas brancas na pelagem.',
      foto: '/assets/chicopenicofoto.jpeg',
      dataEvento: '09/01/2026',
      local: 'Próximo ao Tauste, Votorantim - SP',
      tutor: 'Bianca'
    },
    '4': {
      id: '4',
      status: 'perdido',
      nome: 'Alabama',
      especie: 'Cachorro',
      raca: 'Labrador',
      porte: 'Grande',
      cor: 'Branco e Bege',
      sexo: 'Fêmea',
      idadeOuTempo: 'Desaparecido há 2 dias',
      descricao: 'Porte grande, precisa de medicação contínua. Muito amigável.',
      foto: '/assets/alabamafoto.jpg',
      dataEvento: '01/05/2026',
      local: 'Vila Dominguinho, Votorantim - SP',
      tutor: 'Daniel'
    },
    '3': {
      id: '3',
      status: 'perdido',
      nome: 'Caramelo',
      especie: 'Cachorro',
      raca: 'SRD (Sem raça definida)',
      porte: 'Médio',
      cor: 'Caramelo',
      sexo: 'Macho',
      idadeOuTempo: 'Desaparecido há 5 dias',
      descricao: 'Cachorro muito brincalhão e dócil. Costuma atender pelo próprio nome.',
      foto: '/assets/caramelo.jpg',
      dataEvento: '30/02/2026',
      local: 'Vila Nova, Votorantim - SP',
      tutor: 'Maurício'
    }
  };

  const pet = dadosPets[petId] || dadosPets['3'];
  const isPerdido = pet.status === 'perdido';

  return (
    <>
      <main className={styles.cartazPetPerdido}>
        <section className={styles.cartaz}>
          <div className={styles.cartazContainer}>

            <div className={styles.itemTextoCartaz}>
              <h1 className={isPerdido ? styles.tituloProcura : styles.tituloEncontrado}>
                {isPerdido ? 'PROCURA-SE' : 'ENCONTRADO'}
              </h1>
              <h2 className={styles.subtituloAnimalInfo}>{pet.nome || ''}</h2>
              <p className={styles.descricao}>{pet.idadeOuTempo}</p>
              <p className={styles.descricao}>Sexo: {pet.sexo}</p>
              <p className={styles.descricao}>
                {pet.descricao}
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
                src={pet.foto} 
                alt={`${pet.nome || 'Pet'} Foto`} 
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
              <p className={styles.descricao}>{pet.nome || 'Pet sem nome'}</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>ESPÉCIE</h2>
              <p className={styles.descricao}>{pet.especie}</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>RAÇA</h2>
              <p className={styles.descricao}>{pet.raca}</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>PORTE</h2>
              <p className={styles.descricao}>{pet.porte}</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>COR/PELAGEM</h2>
              <p className={styles.descricao}>{pet.cor}</p>
            </div>
          </div>

          <div className={styles.item4TextoInfo}>
            <h1 className={styles.tituloInfo}>LOCAL E DATA</h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>
                {isPerdido ? 'DATA DO DESAPARECIMENTO' : 'DATA EM QUE FOI ENCONTRADO'}
              </h2>
              <p className={styles.descricao}>{pet.dataEvento}</p>
            </div>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>
                {isPerdido ? 'LOCAL ONDE FOI VISTO PELA ÚLTIMA VEZ' : 'LOCAL ONDE FOI ENCONTRADO'}
              </h2>
              <p className={styles.descricao}>{pet.local}</p>
            </div>

            <h1 className={`${styles.tituloInfo} ${styles.mt4}`}>
              {isPerdido ? 'CONTATO DO TUTOR' : 'CONTATO DO PROTETOR'}
            </h1>

            <div>
              <h2 className={styles.subtituloAnimalInfo}>NOME</h2>
              <p className={styles.descricao}>{pet.tutor}</p>
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