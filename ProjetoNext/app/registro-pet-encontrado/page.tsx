'use client'
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import styles from './registro-pet-encontrado.module.css';
import CustomInput from '../../src/components/CustomInput';
import CustomSelect from '../../src/components/CustomSelect';
import CustomButton from '../../src/components/CustomButton';
import UploadFotoPet from '../../src/components/UploadFotoPet';
import ModalSucesso from '../../src/components/ModalSucesso/ModalSucesso';

export default function RegistroPetEncontrado() {
  const [exibirModal, setExibirModal] = useState(false);
  const [formData, setFormData] = useState({
    especie: '',
    idade: '',
    sexo: '',
    tamanho: '',
    cor: '',
    raca: '',
    localizacao: '',
    data: '',
    observacoes: '',
    fotos: null as FileList | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const manipularFotos = (arquivos: FileList | null) => {
    setFormData(prev => ({ ...prev, fotos: arquivos }));
  };

  const manipularSubmissao = (e: React.FormEvent) => {
    e.preventDefault();
    setExibirModal(true);
  };

  const opcoesEspecie = [
    { value: 'cachorro', label: 'Cachorro' },
    { value: 'gato', label: 'Gato' }
  ];

  const opcoesSexo = [
    { value: 'macho', label: 'Macho' },
    { value: 'femea', label: 'Fêmea' }
  ];

  const opcoesTamanho = [
    { value: 'pequeno', label: 'Pequeno' },
    { value: 'medio', label: 'Médio' },
    { value: 'grande', label: 'Grande' }
  ];

  const opcoesRaca = [
    { value: 'srd', label: 'SRD (Sem Raça Definida)' },
    { value: 'beagle', label: 'Beagle' },
    { value: 'borderCollie', label: 'Border Collie' },
    { value: 'boxer', label: 'Boxer' },
    { value: 'bulldogFrances', label: 'Bulldog Francês' },
    { value: 'chowChow', label: 'Chow Chow' },
    { value: 'cockerSpaniel', label: 'Cocker Spaniel' },
    { value: 'salsicha', label: 'Salsicha' },
    { value: 'goldenRetriever', label: 'Golden Retriever' },
    { value: 'huskySiberiano', label: 'Husky Siberiano' },
    { value: 'labrador', label: 'Labrador' },
    { value: 'lhasa', label: 'Lhasa' },
    { value: 'maltes', label: 'Maltês' },
    { value: 'pastorAlemao', label: 'Pastor Alemão' },
    { value: 'sheltie', label: 'Sheltie' },
    { value: 'pequines', label: 'Pequinês' },
    { value: 'pinscher', label: 'Pinscher' },
    { value: 'pitbull', label: 'Pitbull / American Staffordshire Terrier' },
    { value: 'spitz', label: 'Spitz Alemão' },
    { value: 'poodle', label: 'Poodle' },
    { value: 'pug', label: 'Pug' },
    { value: 'rottweiler', label: 'Rottweiler' },
    { value: 'shihTzu', label: 'Shih-tzu' },
    { value: 'yorkshire', label: 'Yorkshire Terrier' }
  ];

  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <h2 className={`${styles.tituloFormulario} mb-4`}>REGISTRO PET ENCONTRADO 🐾</h2>
      
      <Form onSubmit={manipularSubmissao}>
        <CustomSelect 
          controlId="especie" 
          label="Espécie" 
          name="especie"
          options={opcoesEspecie}
          value={formData.especie}
          onChange={handleInputChange}
        />

        <CustomInput 
          controlId="idade" 
          label="Idade aparente" 
          name="idade"
          placeholder="Ex: Aproximadamente 3 anos" 
          value={formData.idade}
          onChange={handleInputChange}
        />

        <CustomSelect 
          controlId="sexo" 
          label="Sexo" 
          name="sexo"
          options={opcoesSexo}
          value={formData.sexo}
          onChange={handleInputChange}
        />

        <CustomSelect 
          controlId="tamanho" 
          label="Porte" 
          name="tamanho"
          options={opcoesTamanho}
          value={formData.tamanho}
          onChange={handleInputChange}
        />

        <CustomInput 
          controlId="cor" 
          label="Cor/Pelagem" 
          name="cor"
          placeholder="Ex: Marrom, Preto e Branco, Pelo longo" 
          value={formData.cor}
          onChange={handleInputChange}
        />

        <CustomSelect 
          controlId="raca" 
          label="Raça" 
          name="raca"
          options={opcoesRaca}
          value={formData.raca}
          onChange={handleInputChange}
          disabled={formData.especie === 'gato'}
        />

        <CustomInput 
          controlId="localEncontro" 
          label="Local onde o animal foi encontrado" 
          name="localizacao"
          placeholder="Digite endereço ou ponto de referência" 
          value={formData.localizacao}
          onChange={handleInputChange}
        />

        <CustomInput 
          controlId="dataEncontrado" 
          label="Data em que o animal foi encontrado" 
          name="data"
          type="date"
          value={formData.data}
          onChange={handleInputChange}
        />

        <UploadFotoPet 
          controlId="petFoto" 
          label="Foto do pet" 
          aoMudar={manipularFotos}
        />

        <Form.Group className="mb-4 mt-3" controlId="observacoes">
          <Form.Label style={{ fontWeight: 'bold' }}>Observações adicionais (coleira, comportamento, etc.)</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            name="observacoes"
            placeholder="Digite aqui..."
            value={formData.observacoes}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div className={styles.containerBotoes}>
          <div className={`${styles.wrapperBtn} ${styles.btnCancelar}`}>
            <CustomButton type="reset">CANCELAR</CustomButton>
          </div>
          <div className={`${styles.wrapperBtn} ${styles.btnSalvar}`}>
            <CustomButton type="submit">SALVAR</CustomButton>
          </div>
        </div>
      </Form>

      <ModalSucesso 
        exibir={exibirModal} 
        aoFechar={() => setExibirModal(false)} 
      />
    </Container>
  );
}