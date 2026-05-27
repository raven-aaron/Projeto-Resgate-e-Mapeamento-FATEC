'use client'
import React from 'react';

export default function Cabecalho() {
  return (
    <>
      <div className="barra-acessibilidade bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center gap-2 py-2">
            <button className="btn-acessibilidade btn-contraste" aria-label="Contraste">
              <span className="material-symbols-rounded">fiber_manual_record</span>
            </button>
            <button className="btn-acessibilidade btn-vermelho" id="aumentarFonte">A+</button>
            <button className="btn-acessibilidade btn-vermelho" id="diminuirFonte">A-</button>
            <button className="btn-acessibilidade" aria-label="Modo audiodescrição">
              <span className="material-symbols-rounded">hearing</span>
            </button>
          </div>
        </div>
      </div>

      <header className="cabecalho">
        <div className="container-fluid">
          <div className="row align-items-center py-4">
            <div className="col-md-3">
              <img src="/assets/logo_Bem-EstarAnimal_2.png" alt="Departamento do Bem-Estar Animal" className="logo" />
            </div>
            <div className="col-md-4">
              <div className="d-flex gap-2 align-items-center">
                <button className="btn btn-buscar" aria-label="Buscar">
                  <span className="material-symbols-rounded">search</span>
                </button>
                <input type="text" className="form-control" placeholder="O que você procura?" />
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">
              <img src="/assets/logo_prefeituraVotorantim.png" alt="Prefeitura Municipal de Votorantim" className="logo-prefeitura" />
            </div>
          </div>
        </div>
      </header>

      <nav className="navegacao">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between py-2 gap-3">
            <div className="d-flex align-items-center gap-0 flex-wrap">
              <button className="btn btn-menu" type="button" id="btnMenu" aria-expanded="false">
                <span className="material-symbols-rounded">pets</span>
                <span>Menu</span>
              </button>
              <div className="barra-nav">
                <a href="#" className="link-nav">Adote</a>
                <a href="#" className="link-nav">Banco de Ração</a>
                <a href="#" className="link-nav">Educação</a>
                <a href="#" className="link-nav">Castração</a>
                <a href="#" className="link-nav">Entrar</a>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a href="#" className="icone-social" aria-label="E-mail"><span className="material-symbols-rounded">mail</span></a>
              <a href="#" className="icone-social" aria-label="Instagram"><span className="material-symbols-rounded">photo_camera</span></a>
              <a href="#" className="icone-social" aria-label="YouTube"><span className="material-symbols-rounded">live_tv</span></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}