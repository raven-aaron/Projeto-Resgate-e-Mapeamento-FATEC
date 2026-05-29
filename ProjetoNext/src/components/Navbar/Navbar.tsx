'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [altoContraste, setAltoContraste] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${tamanhoFonte}px`;
  }, [tamanhoFonte]);

  useEffect(() => {
    if (altoContraste) {
      document.body.classList.add('alto-contraste');
    } else {
      document.body.classList.remove('alto-contraste');
    }
  }, [altoContraste]);

  const aumentarFonte = () => {
    if (tamanhoFonte < 24) {
      setTamanhoFonte(tamanhoFonte + 2);
    }
  };

  const diminuirFonte = () => {
    if (tamanhoFonte > 12) {
      setTamanhoFonte(tamanhoFonte - 2);
    }
  };

  const alternarContraste = () => {
    setAltoContraste(!altoContraste);
  };

  return (
    <header className={styles.headerGeral}>
      <div className={styles.barraAcessibilidade}>
        <div className={styles.containerFluid}>
          <div className={styles.flexAcessibilidade}>
            <button 
              className={`${styles.btnAcessibilidade} ${styles.btnContraste}`}
              onClick={alternarContraste}
            >
              <span className="material-symbols-rounded">fiber_manual_record</span>
            </button>
            <button className={styles.btnAcessibilidade} onClick={aumentarFonte}>A+</button>
            <button className={styles.btnAcessibilidade} onClick={diminuirFonte}>A-</button>
            <button className={styles.btnAcessibilidade}>
              <span className="material-symbols-rounded">hearing</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cabecalho}>
        <div className={styles.containerFluid}>
          <div className={styles.gridCabecalho}>
            <div className={styles.logoWrapper}>
              <Image src="/assets/logo_Bem-EstarAnimal_2.png" alt="Logo" width={173} height={80} className={styles.logo} />
            </div>
            
            <div className={styles.buscaWrapper}>
              <button className={styles.btnBuscar}>
                <span className="material-symbols-rounded">search</span>
              </button>
              <input type="text" className={styles.inputBusca} placeholder="O que você procura?" />
            </div>

            <div className={styles.prefeituraWrapper}>
              <Image src="/assets/logo_prefeituraVotorantim.png" alt="Prefeitura" width={120} height={60} className={styles.logoPrefeitura} />
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navegacao}>
        <div className={styles.containerFluid}>
          <div className={styles.flexNav}>
            <div className={styles.navEsquerda}>
              <button className={styles.btnMenu} onClick={onMenuClick}>
                <span className="material-symbols-rounded">pets</span>
                <span>Menu</span>
              </button>
              <div className={styles.barraNav}>
                <Link href="/adote" className={styles.linkNav}>Adote</Link>
                <Link href="/banco-de-racao" className={styles.linkNav}>Banco de Ração</Link>
                <Link href="/educacao" className={styles.linkNav}>Educação</Link>
                <Link href="/castracao" className={styles.linkNav}>Castração</Link>
                <Link href="/menuAdm" className={styles.linkNav}>Entrar</Link>
              </div>
            </div>

            <div className={styles.redesSociais}>
              <Link href="#" className={styles.iconeSocial}><span className="material-symbols-rounded">mail</span></Link>
              <Link href="#" className={styles.iconeSocial}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </Link>
              <Link href="#" className={styles.iconeSocial}><span className="material-symbols-rounded">photo_camera</span></Link>
              <Link href="#" className={styles.iconeSocial}><span className="material-symbols-rounded">live_tv</span></Link>
              <Link href="#" className={styles.iconeSocial}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}