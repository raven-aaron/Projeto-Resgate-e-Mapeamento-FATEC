'use client';

import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './registro-pet-encontrado.module.css';
import CustomInput from '../../src/components/CustomInput';
import CustomSelect from '../../src/components/CustomSelect';
import CustomButton from '../../src/components/CustomButton';
import UploadFotoPet from '../../src/components/UploadFotoPet';
import ModalSucesso from '../../src/components/ModalSucesso/ModalSucesso';
import { buscarEnderecoPorCep } from '../../src/utils/viaCep';

export default function RegistroPetEncontrado() {
  const [exibirModal, setExibirModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      especie: '',
      idade: '',
      sexo: '',
      tamanho: '',
      cor: '',
      raca: '',
      cep: '',
      localizacao: '',
      data: '',
      observacoes: '',
      fotos: null as FileList | null
    },
    validationSchema: Yup.object({
      especie: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório').min(8, 'CEP inválido'),
    }),
    onSubmit: () => {
      setExibirModal(true);
    }
  });

  const handleBlurCep = async (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const endereco = await buscarEnderecoPorCep(value);
    if (endereco) {
      const enderecoCompleto = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
      formik.setFieldValue('localizacao', enderecoCompleto);
    }
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
      
      <Form onSubmit={formik.handleSubmit}>
        <CustomSelect 
          controlId="especie" 
          label="Espécie" 
          name="especie"
          options={opcoesEspecie}
          value={formik.values.especie}
          onChange={formik.handleChange}
        />

        <CustomInput 
          controlId="idade" 
          label="Idade aparente" 
          name="idade"
          placeholder="Ex: Aproximadamente 3 anos" 
          value={formik.values.idade}
          onChange={formik.handleChange}
        />

        <CustomSelect 
          controlId="sexo" 
          label="Sexo" 
          name="sexo"
          options={opcoesSexo}
          value={formik.values.sexo}
          onChange={formik.handleChange}
        />

        <CustomSelect 
          controlId="tamanho" 
          label="Porte" 
          name="tamanho"
          options={opcoesTamanho}
          value={formik.values.tamanho}
          onChange={formik.handleChange}
        />

        <CustomInput 
          controlId="cor" 
          label="Cor/Pelagem" 
          name="cor"
          placeholder="Ex: Marrom, Preto e Branco, Pelo longo" 
          value={formik.values.cor}
          onChange={formik.handleChange}
        />

        <CustomSelect 
          controlId="raca" 
          label="Raça" 
          name="raca"
          options={opcoesRaca}
          value={formik.values.raca}
          onChange={formik.handleChange}
          disabled={formik.values.especie === 'gato'}
        />

        <CustomInput 
          controlId="cep" 
          label="CEP" 
          name="cep"
          placeholder="Digite o CEP" 
          value={formik.values.cep}
          onChange={formik.handleChange}
          onBlur={handleBlurCep}
        />

        <CustomInput 
          controlId="localEncontro" 
          label="Local onde o animal foi encontrado" 
          name="localizacao"
          placeholder="Digite endereço ou ponto de referência" 
          value={formik.values.localizacao}
          onChange={formik.handleChange}
        />

        <CustomInput 
          controlId="dataEncontrado" 
          label="Data em que o animal foi encontrado" 
          name="data"
          type="date"
          value={formik.values.data}
          onChange={formik.handleChange}
        />

        <UploadFotoPet 
          controlId="petFoto" 
          label="Foto do pet" 
          aoMudar={(arquivos) => formik.setFieldValue('fotos', arquivos)}
        />

        <Form.Group className="mb-4 mt-3" controlId="observacoes">
          <Form.Label style={{ fontWeight: 'bold' }}>Observações adicionais (coleira, comportamento, etc.)</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            name="observacoes"
            placeholder="Digite aqui..."
            value={formik.values.observacoes}
            onChange={formik.handleChange}
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