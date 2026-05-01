'use client'
import CustomButton from '@/src/components/CustomButton';
import { FiltroAnimalComData } from '@/src/components/FiltroAnimalComData'; 
import styles from './solicitacoes-ADM.module.css';
import Link from 'next/dist/client/link';
import { useState } from 'react';

export default function SolicitacoesAdm() {
  const [filtroAberto, setFiltroAberto] = useState(false);

  return (
    <>

      <main className={styles.main}>
        <h1 className={styles.tituloPagina}>SOLICITAÇÕES</h1>

        <div className={styles.topoPagina}>

      <button 
        className={styles.botaoFiltro}
        onClick={() => setFiltroAberto(true)}
        >
        <span className="material-symbols-rounded">filter_alt</span>
        </button>
      </div>

        <div className={styles.gridCartoes}>

          <div className={styles.cartaoSolicitacao}>
            <div className={styles.infoCartao}>
              <h3 className={styles.statusPerdido}>PROCURA-SE</h3>
              <p className={styles.nomePet}>Nome: Chico</p>
              <p className={styles.dataRegistro}>Perdido há 10 horas</p>
              <Link href="/detalhes/chico">
              </Link>
              <div>
                <CustomButton className="btn-verde">SAIBA MAIS</CustomButton>
              </div>
              <CustomButton className="btn-custom">ACEITAR</CustomButton>
              <CustomButton className="botao-cancelar">NEGAR</CustomButton>
            </div>
            <div className={styles.fotoPet}>
              <img src="/assets/chicopenicofoto.jpeg" alt="Pet Chico" />
            </div>
          </div>

          <div className={styles.cartaoSolicitacao}>
            <div className={styles.infoCartao}>
              <h3 className={styles.statusPerdido}>PROCURA-SE</h3>
              <p className={styles.nomePet}>Nome: Amélia</p>
              <p className={styles.dataRegistro}>Perdido há 24 horas</p>
              <Link href="/detalhes/amelia">
              </Link>
              <div>
                <CustomButton className="btn-verde">SAIBA MAIS</CustomButton>
              </div>
              <CustomButton className="btn-custom">ACEITAR</CustomButton>
              <CustomButton className="botao-cancelar">NEGAR</CustomButton>
            </div>
            <div className={styles.fotoPet}>
              <img src="/assets/princesa.jpg" alt="Pet Amélia" />
            </div>
          </div>

          <div className={styles.cartaoSolicitacao}>
            <div className={styles.infoCartao}>
              <h3 className={styles.statusEncontrado}>ENCONTRADO</h3>
              <p className={styles.dataRegistro}>Encontrado há 3 dias</p>
              <Link href="/detalhes/laranjinha">
              </Link>
              <div>
                <CustomButton className="btn-verde">SAIBA MAIS</CustomButton>
              </div>
              <CustomButton className="btn-custom">ACEITAR</CustomButton>
              <CustomButton className="botao-cancelar">NEGAR</CustomButton>
            </div>
            <div className={styles.fotoPet}>
              <img src="/assets/laranjinha.jpg" alt="Pet Barney" />
            </div>
          </div>

          <div className={styles.cartaoSolicitacao}>
            <div className={styles.infoCartao}>
              <h3 className={styles.statusEncontrado}>ENCONTRADO</h3>
              <p className={styles.dataRegistro}>Encontrado há 24 horas</p>
              <Link href="/detalhes/tuca">
              </Link>
              <div>
                <CustomButton className="btn-verde">SAIBA MAIS</CustomButton>
              </div>
              <CustomButton className="btn-custom">ACEITAR</CustomButton>
              <CustomButton className="botao-cancelar">NEGAR</CustomButton>
            </div>
            <div className={styles.fotoPet}>
              <img src="/assets/tucafoto.jpg" alt="Pet Tuca" />
            </div>
          </div>

          <div className={styles.cartaoSolicitacao}>
            <div className={styles.infoCartao}>
              <h3 className={styles.statusPerdido}>PROCURA-SE</h3>
              <p className={styles.nomePet}>Nome: Alabama</p>
              <p className={styles.dataRegistro}>Perdido há 5 horas</p>
              <Link href="/detalhes/alabama">
              </Link>
              <div>
                <CustomButton className="btn-verde">SAIBA MAIS</CustomButton>
              </div>
              <CustomButton className="btn-custom">ACEITAR</CustomButton>
              <CustomButton className="botao-cancelar">NEGAR</CustomButton>
            </div>
            <div className={styles.fotoPet}>
              <img src="/assets/alabamafoto.jpg" alt="Pet Thor" />
            </div>
          </div>

          <div className={styles.cartaoSolicitacao}>
            <div className={styles.infoCartao}>
              <h3 className={styles.statusEncontrado}>ENCONTRADO</h3>
              <p className={styles.dataRegistro}>Encontrado há 10 dias</p>
              <Link href="/detalhes/fofinho">
              </Link>
              <div>
                <CustomButton className="btn-verde">SAIBA MAIS</CustomButton>
              </div>
              <CustomButton className="btn-custom">ACEITAR</CustomButton>
              <CustomButton className="botao-cancelar">NEGAR</CustomButton>
            </div>
            <div className={styles.fotoPet}>
              <img src="/assets/Fofinho.jpg" alt="Pet Fofinho" />
            </div>
          </div>

        </div>

        <div className={styles.navegacaoPaginas}>
          <a href="#">⬅</a>
          <a href="#" className={styles.atual}>1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">⮕</a>
        </div>
      </main>

      {filtroAberto && (
  <FiltroAnimalComData onFechar={() => setFiltroAberto(false)} />
)}
    </>
  );
}