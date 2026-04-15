document.addEventListener('DOMContentLoaded', function() {
    
    const btnAumentarFonte = document.getElementById('aumentarFonte');
    const btnDiminuirFonte = document.getElementById('diminuirFonte');
    
    let tamanhoFonte = 16; 
    
    if (btnAumentarFonte) {
        btnAumentarFonte.addEventListener('click', function() {
            tamanhoFonte += 2;
            if (tamanhoFonte > 24) tamanhoFonte = 24;
            document.body.style.fontSize = tamanhoFonte + 'px';
        });
    }
    
    if (btnDiminuirFonte) {
        btnDiminuirFonte.addEventListener('click', function() {
            tamanhoFonte -= 2;
            if (tamanhoFonte < 12) tamanhoFonte = 12;
            document.body.style.fontSize = tamanhoFonte + 'px';
        });
    }
    
    const btnFiltroDaltonismo = document.getElementById('btnFiltroDaltonismo');
    const filtroDaltonismoBox = document.getElementById('filtroDaltonismo');
    
    if (btnFiltroDaltonismo && filtroDaltonismoBox) {
        const toggleFiltro = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const isAberto = filtroDaltonismoBox.classList.contains('aberto');
            
            if (isAberto) {
                filtroDaltonismoBox.classList.remove('aberto');
                btnFiltroDaltonismo.setAttribute('aria-expanded', 'false');
            } else {
                filtroDaltonismoBox.classList.add('aberto');
                btnFiltroDaltonismo.setAttribute('aria-expanded', 'true');
            }
        };
        
        btnFiltroDaltonismo.addEventListener('click', toggleFiltro);
        btnFiltroDaltonismo.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });
        
        document.addEventListener('click', function(e) {
            if (filtroDaltonismoBox && !filtroDaltonismoBox.contains(e.target) && !btnFiltroDaltonismo.contains(e.target)) {
                filtroDaltonismoBox.classList.remove('aberto');
                btnFiltroDaltonismo.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    const filtroSelect = document.querySelector('.filtro-select');
    if (filtroSelect) {
        filtroSelect.addEventListener('change', function() {
            const tipoFiltro = this.value;
            document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
            
            if (tipoFiltro !== 'Cores Padrão') {
                document.body.classList.add(tipoFiltro.toLowerCase());
            }
        });
    }
    
    const btnMenu = document.getElementById('btnMenu');
    const menuLateral = document.getElementById('menuLateral');
    const overlayMenu = document.getElementById('overlayMenu');
    const btnFecharMenu = document.getElementById('fecharMenu');

    const abrirMenu = () => {
        if (!menuLateral || !overlayMenu || !btnMenu) return;
        menuLateral.classList.add('aberto');
        overlayMenu.classList.add('ativo');
        menuLateral.setAttribute('aria-hidden', 'false');
        btnMenu.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const fecharMenu = () => {
        if (!menuLateral || !overlayMenu || !btnMenu) return;
        menuLateral.classList.remove('aberto');
        overlayMenu.classList.remove('ativo');
        menuLateral.setAttribute('aria-hidden', 'true');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    btnMenu?.addEventListener('click', abrirMenu);
    btnFecharMenu?.addEventListener('click', fecharMenu);
    overlayMenu?.addEventListener('click', fecharMenu);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharMenu();
    });

    const inputBusca = document.querySelector('.cabecalho input[type="text"]');
    if (inputBusca) {
        inputBusca.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const termo = this.value.trim();
                if (termo) {
                    console.log('Buscando por:', termo);
                }
            }
        });
    }
});