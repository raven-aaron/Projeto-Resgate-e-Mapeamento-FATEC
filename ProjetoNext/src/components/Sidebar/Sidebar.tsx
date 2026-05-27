'use client';

import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} 
        onClick={onClose} 
      />
      
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <header className={styles.headerMenu}>
          <div className={styles.badgeMenu}>
            <span className="material-symbols-rounded">pets</span>
            <span>MENU</span>
          </div>
          <button className={styles.btnClose} onClick={onClose}>&times;</button>
        </header>

        <div className={styles.conteudo}>
          <h2 className={styles.tituloMenu}>NAVEGAÇÃO</h2>
          <ul className={styles.listaMenu}>
            <li className={styles.itemMenu}>
              <Link href="/" className={styles.linkMenu} onClick={onClose}>Página Inicial</Link>
            </li>
            <li className={styles.itemMenu}>
              <Link href="/registro-pet-perdido" className={styles.linkMenu} onClick={onClose}>Perdi meu Pet</Link>
            </li>
            <li className={styles.itemMenu}>
              <Link href="/registro-pet-encontrado" className={styles.linkMenu} onClick={onClose}>Encontrei um Pet</Link>
            </li>
            <li className={styles.itemMenu}>
              <Link href="/mapa" className={styles.linkMenu} onClick={onClose}>Mapa</Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}