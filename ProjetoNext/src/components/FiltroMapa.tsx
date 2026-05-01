import styles from '../../app/mapa/mapa.module.css';

interface FiltroMapaProps {
  onFechar: () => void;
}

export function FiltroMapa({ onFechar }: FiltroMapaProps) {
  return (
    <div className={styles['modal-filtro']}>
      <div className={styles['fechar-overlay']} onClick={onFechar}></div>
      
      <div className={styles['conteudo-modal']}>
        <h4>FILTRO DE MAPA</h4>
        
        <div style={{ marginTop: '20px' }}>
          <p className={styles['texto-card-mapa']} style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            ESPÉCIE
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            <label style={{ fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="radio" name="especie" defaultChecked style={{ accentColor: 'var(--cor-verde-agua)' }} /> Todos
            </label>
            <label style={{ fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="radio" name="especie" style={{ accentColor: 'var(--cor-verde-agua)' }} /> Cachorros
            </label>
            <label style={{ fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="radio" name="especie" style={{ accentColor: 'var(--cor-verde-agua)' }} /> Gatos
            </label>
          </div>

          <p className={styles['texto-card-mapa']} style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            STATUS
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="radio" name="status" defaultChecked style={{ accentColor: 'var(--cor-verde-agua)' }} /> Todos
            </label>
            <label style={{ fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="radio" name="status" style={{ accentColor: 'var(--cor-alerta)' }} /> Perdidos
            </label>
            <label style={{ fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="radio" name="status" style={{ accentColor: 'var(--cor-verde-agua)' }} /> Encontrados
            </label>
          </div>
        </div>

        <button 
          className={styles['btn-card-mapa']}
          onClick={onFechar}
          style={{ width: '100%', marginTop: '30px', border: 'none', cursor: 'pointer' }}
        >
          APLICAR FILTROS
        </button>
      </div>
    </div>
  );
}