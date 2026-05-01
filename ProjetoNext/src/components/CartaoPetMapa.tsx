import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/mapa/mapa.module.css';

interface PetProps {
  id: string;
  nome: string;
  status: string;
  imagem: string;
  posicaoTop: string;
  posicaoLeft: string;
}

export function CartaoPetMapa({ pet }: { pet: PetProps }) {
  const isPerdido = pet.status === "perdido";

  return (
    <div
      className={styles['pin-card']}
      style={{ top: pet.posicaoTop, left: pet.posicaoLeft }}
    >
      <div className={styles['card-mapa-interno']}>
        <h5 className={`${styles['titulo-card-mapa']} ${isPerdido ? styles['status-perdido'] : styles['status-encontrado']}`}>
          {isPerdido ? "PROCURA-SE" : "ENCONTRADO"}
        </h5>
        
        <Image 
          src={pet.imagem} 
          alt={pet.nome} 
          width={55} 
          height={55} 
          className={styles['foto-card-mapa']} 
        />
        
        {isPerdido && (
          <p className={styles['texto-card-mapa']}>Nome: {pet.nome}</p>
        )}
        
        <p className={`${styles['texto-card-mapa']} ${isPerdido ? styles['status-perdido'] : styles['status-encontrado']}`}>
          Status: {isPerdido ? "Perdido" : "Encontrado"}
        </p>
        
        <Link href={`/cartaz/${pet.id}`} className={styles['btn-card-mapa']}>
          Ver informações
        </Link>
      </div>
    </div>
  );
}