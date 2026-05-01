'use client'

interface Props {
  onFechar: () => void;
}

export function FiltroAnimalComData({ onFechar }: Props) {
  return (
    <div className="modalFiltro">
      
      <div className="overlay" onClick={onFechar}></div>

      <div className="conteudoModal">
        <h4>FILTRO SOLICITAÇÕES</h4>

        <div className="grupoFiltro">
          <p>ESPÉCIE:</p>
          <div className="opcoesFiltro">
            <button className="opcao selecionado">Gato</button>
            <button className="opcao">Cachorro</button>
          </div>
        </div>

        <div className="grupoFiltro">
          <p>SITUAÇÃO:</p>
          <div className="opcoesFiltro">
            <button className="opcao">Encontrado</button>
            <button className="opcao selecionado">Perdido</button>
          </div>
        </div>

        <div className="grupoFiltro">
          <p>DATA:</p>
          <div className="opcoesData">
            <button className="opcaoData selecionado">
              Data mais recente <br /> ⬆
            </button>
            <button className="opcaoData">
              Data mais antiga <br /> ⬇
            </button>
          </div>
        </div>

        <button className="btnFiltrar" onClick={onFechar}>
          FILTRAR
        </button>
      </div>
    </div>
  );
}