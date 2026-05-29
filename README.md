# Projeto desenvolvido por :
Bianca Diebe   
Gabriel Tiago Santos Leme   
Maria Eduarda Camargo da Silva   
Maurício Fernandes de Oliveira Almeida   
Raven Aaron Albuquerque Prestes Batista


# Sistema de Resgate e Mapeamento de Animais

Plataforma web de gestão municipal desenvolvida para centralizar, mapear e facilitar o resgate de animais perdidos e encontrados. O sistema utiliza cruzamento de dados geoespaciais e características fenotípicas para otimizar o reencontro entre tutores e seus pets, além de gerar inteligência de dados para apoiar decisões estratégicas relacionadas ao bem-estar animal.

Projeto Integrador (PI) do curso de Desenvolvimento de Software Multiplataforma (DSM) da FATEC Votorantim, desenvolvido em parceria com o Departamento de Proteção e Bem-Estar Animal.

---

## Visão Geral

O sistema foi projetado para atuar como uma plataforma centralizada de comunicação entre população e gestão pública, reduzindo a fragmentação causada pelo uso de canais descentralizados, como redes sociais, e fornecendo ferramentas analíticas para políticas públicas.

### Principais Objetivos

- Centralizar registros de animais perdidos e encontrados
- Facilitar o reencontro entre tutores e animais
- Identificar padrões geográficos relacionados ao abandono
- Apoiar a tomada de decisão da gestão pública
- Disponibilizar um canal oficial entre cidadãos e prefeitura

---

## O Problema

O crescimento urbano e populacional ampliou os desafios relacionados à gestão da fauna doméstica. A inexistência de sistemas centralizados dificulta o registro, monitoramento e recuperação de animais perdidos, além de limitar a capacidade da administração pública de identificar regiões críticas relacionadas ao abandono.

---

## A Solução

A aplicação foi arquitetada em dois módulos principais:

### Módulo Público (Cidadão)

Destinado à interação direta com a população, permitindo:

- Cadastro de ocorrências de animais perdidos ou encontrados
- Consulta por filtros fenotípicos
- Busca por espécie, porte e coloração
- Registro simplificado de informações relevantes

### Módulo Administrativo (Gestão Pública)

Painel restrito voltado à análise e gerenciamento operacional:

- Consolidação de ocorrências registradas
- Monitoramento geográfico de regiões críticas
- Identificação de zonas de risco (*hotspots*)
- Apoio à alocação estratégica de recursos públicos

---

## Arquitetura e Tecnologias

A solução foi desenvolvida utilizando tecnologias modernas focadas em escalabilidade, componentização e manutenção.

### Frontend

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Biblioteca UI:** React
- **Estilização:** CSS Modules
- **Componentes:** React-Bootstrap

### Características Técnicas

- Componentização reutilizável
- Tipagem estática para maior previsibilidade
- Encapsulamento de estilos
- Interface responsiva
- Estrutura orientada à escalabilidade

---

## Funcionalidades

### Usuário Público

- Registro de animais perdidos
- Registro de animais encontrados
- Busca com filtros personalizados
- Consulta de ocorrências

### Administração

- Dashboard administrativo
- Visualização geográfica de ocorrências
- Monitoramento de áreas críticas
- Gestão centralizada de registros

---

## Impacto e Sustentabilidade

O projeto está alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.

### ODS 11 — Cidades e Comunidades Sustentáveis

Contribui para gestão urbana mais eficiente por meio da organização e centralização das ocorrências relacionadas à fauna doméstica.

### ODS 15 — Vida Terrestre

Promove proteção animal, redução do abandono e valorização do bem-estar dos animais domésticos.

---

## Como Executar Localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

Clone o repositório:

```bash
git clone https://github.com/raven-aaron/Projeto-Resgate-e-Mapeamento-FATEC.git


