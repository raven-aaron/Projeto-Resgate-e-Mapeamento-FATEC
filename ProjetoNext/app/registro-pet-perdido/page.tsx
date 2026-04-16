'use client'
import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import CustomInput from '@/src/components/CustomInput';
import CustomSelect from '@/src/components/CustomSelect';
import CustomButton from '@/src/components/CustomButton';

export default function RegistroPetPerdido() {
  const [formData, setFormData] = useState({
    nome: '',
    especie: '',
    idade: '',
    raca: '',
    localizacao: '',
    data: '',
    observacoes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const opcoesEspecie = [
    { value: 'cachorro', label: 'Cachorro' },
    { value: 'gato', label: 'Gato' }
  ];

  const opcoesRaca = [
    { value: 'srd', label: 'SRD (Sem Raça Definida)' },
    { value: 'beagle', label: 'Beagle' },
    { value: 'goldenRetriever', label: 'Golden Retriever' },
    { value: 'poodle', label: 'Poodle' }
  ];

  return (
    <Container className="py-5">
      <h2 className="tituloFormulario mb-4">REGISTRO PET PERDIDO 🐾</h2>
      
      <Form>
        <Row>
          <Col md={6}>
            <CustomInput 
              controlId="nomePet" 
              label="Nome" 
              name="nome"
              placeholder="Digite aqui..." 
              value={formData.nome}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6}>
            <CustomSelect 
              controlId="especie" 
              label="Espécie" 
              name="especie"
              options={opcoesEspecie}
              value={formData.especie}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <CustomInput 
              controlId="idade" 
              label="Idade" 
              name="idade"
              placeholder="Ex: 3 anos" 
              value={formData.idade}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6}>
            <CustomSelect 
              controlId="raca" 
              label="Raça" 
              name="raca"
              options={opcoesRaca}
              value={formData.raca}
              onChange={handleInputChange}
              disabled={formData.especie === 'gato'}
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <CustomInput 
              controlId="localizacao" 
              label="Localização" 
              name="localizacao"
              placeholder="Última vez visto em..." 
              value={formData.localizacao}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6}>
            <CustomInput 
              controlId="dataPerdido" 
              label="Data" 
              name="data"
              type="date"
              value={formData.data}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <div className="d-flex gap-3 mt-4">
          <CustomButton className="botao-cancelar">CANCELAR</CustomButton>
          <CustomButton type="submit" className="botao-salvar">SALVAR</CustomButton>
        </div>
      </Form>
    </Container>
  );
}