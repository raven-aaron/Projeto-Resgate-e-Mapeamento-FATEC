'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import { useParams, useRouter } from 'next/navigation';
import styles from './detalhes-adm.module.css';
import CustomButton from '../../../../src/components/CustomButton';

export default function DetalhesPetAdm() {
  const params = useParams();
  const router = useRouter();
  const [exibirModalExcluir, setExibirModalExcluir] = useState(false);
  const [motivoExclusao, setMotivoExclusao] = useState('');

  const petId = typeof params?.id === 'string' ? params.id : '';

  // 12 Pets Reais - Animais "Encontrados" estão com nome vazio ("")
  const dadosPets: Record<string, { nome: string; especie: string; raca: string; status: string; idade: string; sexo: string; porte: string; cor: string; local: string; obs: string; foto: string }> = {
    'theo': { nome: 'THEO', especie: 'Gato', raca: 'SRD', status: 'Perdido', idade: '2 anos', sexo: 'Macho', porte: 'Médio', cor: 'Cinza Listrado', local: 'Parque Bela Vista', obs: 'Theo sumiu na noite de terça 05/05/2026. Ele é dócil e possui coleira de identificação.', foto: '/assets/theo.jpg' },
    'gato-laranja': { nome: '', especie: 'Gato', raca: 'SRD', status: 'Encontrado', idade: 'Aprox. 1 ano', sexo: 'Macho', porte: 'Pequeno', cor: 'Laranja', local: 'Centro', obs: 'Encontrado com uma coleira azul sem identificação.', foto: '/assets/laranjinha.jpg' },
    'caramelo': { nome: 'CARAMELO', especie: 'Cachorro', raca: 'SRD', status: 'Perdido', idade: '3 anos', sexo: 'Macho', porte: 'Pequeno', cor: 'Caramelo', local: 'Vila Nova', obs: 'Visto pela última vez perto da padaria central. Ele atende pelo nome.', foto: '/assets/caramelo.jpg' },
    'fofinho': { nome: '', especie: 'Cachorro', raca: 'Golden retriever', status: 'Encontrado', idade: 'Aprox. 2 anos', sexo: 'Fêmea', porte: 'Grande', cor: 'Dourado claro', local: 'Bairro: Protestantes', obs: 'Encontrado dentro da Fatec Votorantim, dócil e com coleira', foto: '/assets/Fofinho.jpg' },
    'chico1': { nome: 'CHICO', especie: 'Cachorro', raca: 'SRD', status: 'Perdido', idade: 'Aprox. 1 ano', sexo: 'Macho', porte: 'Médio', cor: 'Preto', local: 'Bairro: Centro', obs: 'Dócil e com coleira. Possui manchas brancas no peito.', foto: '/assets/chicopenicofoto.jpeg' },
    'tuca1': { nome: '', especie: 'Gato', raca: 'SRD', status: 'Encontrado', idade: 'Aprox. 3 anos', sexo: 'Macho', porte: 'Médio', cor: 'Cinza', local: 'Bairro: Centro', obs: 'Gata dócil, encontrada na frente de um estabelecimento comercial.', foto: '/assets/tucafoto.jpg' },
    'suzy': { nome: 'SUZY', especie: 'Cachorro', raca: 'Pinscher', status: 'Perdido', idade: '4 anos', sexo: 'Fêmea', porte: 'pequno', cor: 'Preto e Marrom', local: 'Jardim Paulista', obs: 'Suzy é muito dócil, desapareceu perto do mercado do bairro e usava coleira vermelha.', foto: '/assets/Suzy.jpg' },
    'apolo': { nome: '', especie: 'Cachorro', raca: 'SRD', status: 'Encontrado', idade: '2 anos', sexo: 'Macho', porte: 'Grande', cor: 'Preto e Marrom Claro', local: 'Centro', obs: 'Foi encontrado caminhando próximo à praça central. Está bem cuidado, mas sem identificação.', foto: '/assets/Apolo.jpg' },
    'daniel': { nome: 'DANIEL', especie: 'Gato', raca: 'SRD', status: 'Perdido', idade: '1 ano', sexo: 'Macho', porte: 'Pequeno', cor: 'Laranja e Branco', local: 'Vila Garcia', obs: 'Gato assustado, não costuma ir para a rua. Fugiu durante uma mudança de residência.', foto: '/assets/Daniel.jpg' },
    'jade': { nome: '', especie: 'Cachorro', raca: 'Beagle', status: 'Encontrado', idade: '3 anos', sexo: 'Fêmea', porte: 'Médio', cor: 'Tricolor', local: 'Parque Jataí', obs: 'Foi encontrada miando no portão de uma residência na avenida principal.', foto: '/assets/Jade.jpg' },
    'ohara': { nome: 'OHARA', especie: 'Gato', raca: 'SRD', status: 'Perdido', idade: '5 anos', sexo: 'Fêmea', porte: 'Médio', cor: 'Cinza escuro e Branca', local: 'Rio Acima', obs: 'Sumiu durante um temporal, tem muito medo do barulho de trovões. Precisa de medicamentos.', foto: '/assets/Ohara.jpg' },
    'snow': { nome: '', especie: 'Gato', raca: 'SRD', status: 'Encontrado', idade: 'Filhote', sexo: 'Macho', porte: 'Pequeno', cor: 'Branco', local: 'Vila Nova', obs: 'Encontrado dentro do motor de um carro. Já foi examinado pelo veterinário.', foto: '/assets/Snow-Snow.jpg' }
  };

  const pet = dadosPets[petId] || dadosPets['theo'];

  const handleExcluir = () => {
    setExibirModalExcluir(false);
    router.push('/menuAdm/animais-cadastrados');
  };

  return (
    <main className={styles.main}>
      <div className={styles.containerFicha}>
        <div className={styles.cardDetalhes}>
          
          <div className={styles.colunaFoto}>
            <span 
              className={styles.badgeStatus}
              style={{ backgroundColor: pet.status === 'Perdido' ? 'var(--cor-vermelho)' : 'var(--cor-verde-agua)' }}
            >
              {pet.status}
            </span>
            <Image src={pet.foto} alt={pet.nome || 'Pet'} fill className={styles.fotoPet} priority />
          </div>

          <div className={styles.colunaInfo}>
            <h1 className={styles.nomePet}>{pet.nome}</h1>
            <p className={styles.idPet}>ID Registro: #{petId.toUpperCase()}</p>

            <div className={styles.gridInfo}>
              <div className={styles.itemInfo}><label>Espécie / Raça</label><p>{pet.especie} / {pet.raca}</p></div>
              <div className={styles.itemInfo}><label>Idade</label><p>{pet.idade}</p></div>
              <div className={styles.itemInfo}><label>Sexo</label><p>{pet.sexo}</p></div>
              <div className={styles.itemInfo}><label>Porte</label><p>{pet.porte}</p></div>
              <div className={styles.itemInfo}><label>Cor / Pelagem</label><p>{pet.cor}</p></div>
              <div className={styles.itemInfo}><label>Localização</label><p>{pet.local}</p></div>
            </div>

            <div className={styles.areaObservacoes}>
              <h4>Observações do Administrador</h4>
              <p>{pet.obs}</p>
            </div>

            <div className={styles.containerAcoes}>
              <div className={`${styles.btnAcao} ${styles.btnEditar}`}><CustomButton type="button">EDITAR FICHA</CustomButton></div>
              <div className={`${styles.btnAcao} ${styles.btnExcluir}`}><CustomButton type="button" onClick={() => setExibirModalExcluir(true)}>OCULTAR REGISTRO</CustomButton></div>
            </div>
          </div>

        </div>
      </div>

      <Modal show={exibirModalExcluir} onHide={() => setExibirModalExcluir(false)} centered>
        <Modal.Header closeButton style={{ border: 'none' }}></Modal.Header>
        <Modal.Body style={{ padding: '40px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--cor-vermelho)', fontWeight: '900' }}>BAIXA NO REGISTRO</h2>
          <p style={{ fontWeight: '600', color: '#475569' }}>
            Para ocultar o registro de <strong>{pet.nome || 'este pet'}</strong>, informe o motivo da baixa para as estatísticas:
          </p>

          <select className={styles.selectMotivo} value={motivoExclusao} onChange={(e) => setMotivoExclusao(e.target.value)}>
            <option value="">Selecione o motivo...</option>
            <option value="encontrado">Encontrado pelo Tutor</option>
            <option value="adotado">Adotado por nova família</option>
            <option value="falecimento">Falecimento do Pet</option>
            <option value="erro">Erro ou Duplicidade no cadastro</option>
          </select>

          <div className="d-flex gap-3 mt-4">
            <div className={`${styles.btnAcao} ${styles.btnEditar}`}><CustomButton type="button" onClick={() => setExibirModalExcluir(false)}>VOLTAR</CustomButton></div>
            <div className={`${styles.btnAcao} ${styles.btnExcluir}`}><CustomButton type="button" onClick={handleExcluir}>OCULTAR REGISTRO</CustomButton></div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}