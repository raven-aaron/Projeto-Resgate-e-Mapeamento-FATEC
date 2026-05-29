'use client';

import { useState } from 'react';
import styles from './recuperar-senha.module.css';

export default function RecuperarSenhaPage() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.titulo}>
          RECUPERAR SENHA
          <span className="material-symbols-rounded">pets</span>
        </h2>

        {!enviado ? (
          <>
            <p className={styles.subtitulo}>Insira seus dados para continuar:</p>
            <form onSubmit={handleSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo..." value={formData.nome} onChange={handleChange} required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="email@exemplo.com" value={formData.email} onChange={handleChange} required />
              </div>
              <button type="submit" className={styles['btn-recuperar']}>
                RECUPERAR SENHA
                <span className="material-symbols-rounded">arrow_forward</span>
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '3rem', color: 'var(--cor-verde-agua)' }}>check_circle</span>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>E-mail de recuperação enviado com sucesso!</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Verifique sua caixa de entrada em instantes.</p>
            <a href="/login" className={styles['btn-recuperar']} style={{ textDecoration: 'none', marginTop: '20px' }}>VOLTAR PARA LOGIN</a>
          </div>
        )}
      </div>
    </main>
  );
}