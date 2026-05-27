'use client';

import { useState } from 'react';
import styles from './registro.module.css';

export default function RegistroUsuarioPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    console.log('Payload de registro:', {
        nome: formData.nome,
        telefone: formData.telefone,
        email: formData.email,
        senha: formData.senha
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.titulo}>
          REGISTRO DE USUÁRIO
          <span className="material-symbols-rounded">pets</span>
        </h2>
        <p className={styles.subtitulo}>Insira seus dados para continuar:</p>

        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="telefone">Número de telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="(XX)XXXXX-XXXX"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=""
              value={formData.senha}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder=""
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles['btn-registrar']}>
            REGISTRAR
            <span className="material-symbols-rounded">arrow_forward</span>
          </button>
        </form>

        <div className={styles['links-auxiliares']}>
          <a href="/login" className={styles['link-principal']}>
            JÁ TENHO UMA CONTA (LOGIN)
          </a>
          <a href="/recuperar-senha" className={styles['link-secundario']}>
            Esqueci minha senha
          </a>
        </div>
      </div>
    </main>
  );
}