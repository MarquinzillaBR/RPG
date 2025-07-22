// Dados das Raças
const racas = {
    humano: {
        nome: 'Humano',
        atributos: { forca: 1, destreza: 1, constituicao: 1, inteligencia: 1, sabedoria: 1, carisma: 1 },
        hp: 0,
        descricao: 'Humanos são versáteis e adaptáveis, capazes de se destacar em qualquer área que escolherem. Sua diversidade é sua maior força.'
    },
    anao: {
        nome: 'Anão',
        atributos: { forca: 2, constituicao: 2, destreza: 0, inteligencia: 0, sabedoria: 1, carisma: -1 },
        hp: 2,
        descricao: 'Anões são resistentes e fortes, conhecidos por sua resistência física e habilidade com metais. São teimosos, mas leais até o fim.'
    },
    elfo: {
        nome: 'Elfo',
        atributos: { destreza: 2, inteligencia: 1, forca: 0, constituicao: 0, sabedoria: 0, carisma: 0 },
        hp: 0,
        descricao: 'Elfos são graciosos e ágeis, com sentidos apurados e uma conexão natural com a magia. Vivem por séculos e valorizam a arte e o conhecimento.'
    },
    orc: {
        nome: 'Orc',
        atributos: { forca: 3, constituicao: 1, destreza: 0, inteligencia: -1, sabedoria: 0, carisma: -1 },
        hp: 1,
        descricao: 'Orcs são guerreiros natos, conhecidos por sua força bruta e resistência. Embora muitas vezes mal compreendidos, valorizam a honra em batalha.'
    },
    halfling: {
        nome: 'Halfling',
        atributos: { destreza: 2, carisma: 1, forca: -1, constituicao: 0, inteligencia: 0, sabedoria: 0 },
        hp: 0,
        descricao: 'Pequenos e ágeis, os halflings são mestres em passar despercebidos. Sua sorte e habilidade os tornam excelentes sobreviventes.'
    }
};

// Dados das Classes
const classes = {
    guerreiro: {
        nome: 'Guerreiro',
        atributos: { forca: 2, constituicao: 2, destreza: 1, inteligencia: 0, sabedoria: 0, carisma: 0 },
        hp: 6,
        descricao: 'Mestres do combate corpo a corpo, os guerreiros são versáteis em batalha, capazes de usar uma variedade de armas e armaduras. Sua força e resistência os tornam excelentes tanques no grupo.'
    },
    mago: {
        nome: 'Mago',
        atributos: { inteligencia: 3, sabedoria: 1, forca: -1, constituicao: -1, destreza: 0, carisma: 0 },
        hp: 3,
        descricao: 'Estudiosos das artes arcanas, os magos desbloqueiam os segredos do universo para lançar feitiços poderosos. Frágeis fisicamente, mas com um intelecto afiado que pode mudar o curso das batalhas.'
    },
    ladino: {
        nome: 'Ladino',
        atributos: { destreza: 3, carisma: 1, forca: 0, constituicao: 0, inteligencia: 0, sabedoria: 0 },
        hp: 4,
        descricao: 'Especialistas em furtividade e ataques precisos, os ladinos são mestres em ataques furtivos. Sua agilidade e habilidades de ladinagem os tornam valiosos para o grupo tanto dentro quanto fora de combate.'
    },
    clérigo: {
        nome: 'Clérigo',
        atributos: { sabedoria: 3, carisma: 1, forca: 0, constituicao: 1, destreza: 0, inteligencia: 0 },
        hp: 5,
        descricao: 'Canalizadores do poder divino, os clérigos curam feridas, afastam mortos-vivos e invocam milagres. São o suporte essencial de qualquer grupo, equilibrando magia divina e capacidade de combate.'
    },
    bárbaro: {
        nome: 'Bárbaro',
        atributos: { forca: 3, constituicao: 2, destreza: 0, inteligencia: -1, sabedoria: 0, carisma: -1 },
        hp: 7,
        descricao: 'Guerreiros ferozes que entram em fúria na batalha, os bárbaros são tanques naturais com uma resistência impressionante. Sua força bruta e resistência os tornam temíveis oponentes em combate direto.'
    }
};

// Combinações especiais de raça e classe
const combinacoesEspeciais = {
    'anao_guerreiro': {
        titulo: 'Anão Guerreiro',
        descricao: 'A combinação perfeita de resistência e habilidade marcial. Anões guerreiros são como muralhas vivas, praticamente indestrutíveis em combate. Sua determinação e treinamento os tornam adversários formidáveis, especialmente em combates prolongados.'
    },
    'elfo_mago': {
        titulo: 'Elfo Mago',
        descricao: 'A conexão natural dos elfos com a magia atinge seu ápice nesta combinação. Elfos magos são elegantes e letais, com uma compreensão profunda das artes arcanas que poucos podem igualar. Sua longevidade lhes dá tempo para dominar magias complexas.'
    },
    'halfling_ladino': {
        titulo: 'Halfling Ladino',
        descricao: 'A combinação definitiva de sorte e habilidade. Halflings ladrões são mestres em passar despercebidos e atacar quando menos se espera. Sua agilidade e astúcia os tornam praticamente impossíveis de se prever ou capturar.'
    },
    'orc_bárbaro': {
        titulo: 'Orc Bárbaro',
        descricao: 'Uma força da natureza em forma de personagem. Orcs bárbaros são a personificação da fúria em batalha, capazes de causar estragos inimagináveis. Sua resistência natural combinada com a fúria do bárbaro os torna praticamente imparáveis.'
    },
    'humano_clérigo': {
        titulo: 'Humano Clérigo',
        descricao: 'A versatilidade humana brilha nesta combinação. Humanos clérigos são líderes naturais, capazes de se adaptar a qualquer situação. Sua fé inabalável e determinação os tornam pilares de qualquer grupo de aventureiros.'
    }
};

// Atributos base
const atributosBase = {
    forca: 8,
    destreza: 8,
    constituicao: 8,
    inteligencia: 8,
    sabedoria: 8,
    carisma: 8
};

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Menu Principal
    const menuPrincipalDiv = document.getElementById('menu-principal');
    const btnNovoPersonagem = document.getElementById('btn-novo-personagem');
    const btnCarregarPersonagem = document.getElementById('btn-carregar-personagem');
    const btnBatalha = document.getElementById('btn-batalha');

    // Elementos da Lista de Fichas
    const listaFichasDiv = document.getElementById('lista-fichas');
    const listaPersonagensUl = document.getElementById('lista-personagens');
    const btnVoltarMenuLista = document.getElementById('btn-voltar-menu');

    // Elementos da Ficha de Personagem
    const fichaPersonagemDiv = document.getElementById('ficha-personagem');
    const nomeInput = document.getElementById('nome');
    const racaInput = document.getElementById('raca');
    const classeInput = document.getElementById('classe');
    const nivelInput = document.getElementById('nivel');
    const forcaInput = document.getElementById('forca');
    const destrezaInput = document.getElementById('destreza');
    const constituicaoInput = document.getElementById('constituicao');
    const inteligenciaInput = document.getElementById('inteligencia');
    const sabedoriaInput = document.getElementById('sabedoria');
    const carismaInput = document.getElementById('carisma');
    const hpAtualInput = document.getElementById('hpAtual');
    const hpMaximoInput = document.getElementById('hpMaximo');
    const inventarioTextarea = document.getElementById('inventario');
    const salvarBtn = document.getElementById('salvarFicha');
    const excluirBtn = document.getElementById('excluirFicha');
    const voltarAoMenuFichaBtn = document.getElementById('voltarAoMenuFicha');

    // Constantes
    const KEY_STORAGE_PREFIX = 'rpgFicha_';
    let currentFichaId = null;

    // --- Funções de Gerenciamento de Telas ---
    function mostrarTela(tela) {
        // Esconde todas as telas
        menuPrincipalDiv.classList.add('hidden');
        listaFichasDiv.classList.add('hidden');
        fichaPersonagemDiv.classList.add('hidden');

        // Mostra apenas a tela solicitada
        if (tela === 'menu') {
            menuPrincipalDiv.classList.remove('hidden');
        } else if (tela === 'lista') {
            carregarListaDeFichas();
            listaFichasDiv.classList.remove('hidden');
        } else if (tela === 'ficha') {
            fichaPersonagemDiv.classList.remove('hidden');
        }
    }

    // --- Funções da Ficha de Personagem ---
    function limparCamposFicha() {
        // Limpa os campos de entrada
        document.querySelectorAll('input[type="text"], input[type="number"], textarea').forEach(input => {
            input.value = '';
        });
        
        // Reseta os seletores de raça e classe
        document.getElementById('raca').selectedIndex = 0;
        document.getElementById('classe').selectedIndex = 0;
        
        // Esconde a seção de explicação
        document.getElementById('secao-explicacao').style.display = 'none';
        
        // Define valores padrão
        nivelInput.value = '1';
        
        // Define atributos base
        forcaInput.value = atributosBase.forca;
        destrezaInput.value = atributosBase.destreza;
        constituicaoInput.value = atributosBase.constituicao;
        inteligenciaInput.value = atributosBase.inteligencia;
        sabedoriaInput.value = atributosBase.sabedoria;
        carismaInput.value = atributosBase.carisma;
        
        // Define HP base
        hpAtualInput.value = '10';
        hpMaximoInput.value = '10';
        
        // Limpa o ID atual
        currentFichaId = null;
        
        // Mostra mensagem
        mostrarNotificacao('Ficha limpa com sucesso!');
    }

    function carregarFichaNosCampos(fichaData) {
        if (!fichaData) return;
        
        // Define os valores básicos
        nomeInput.value = fichaData.nome || '';
        nivelInput.value = fichaData.nivel || 1;
        
        // Define raça e classe
        if (fichaData.raca) {
            document.getElementById('raca').value = fichaData.raca;
        } else {
            document.getElementById('raca').selectedIndex = 0;
        }
        
        if (fichaData.classe) {
            document.getElementById('classe').value = fichaData.classe;
        } else {
            document.getElementById('classe').selectedIndex = 0;
        }
        
        // Atualiza atributos baseados na raça e classe
        if (fichaData.raca && fichaData.classe) {
            atualizarAtributos();
        }
        
        // Se houver valores salvos, sobrescreve os calculados
        if (fichaData.atributos) {
            forcaInput.value = fichaData.atributos.forca || 10;
            destrezaInput.value = fichaData.atributos.destreza || 10;
            constituicaoInput.value = fichaData.atributos.constituicao || 10;
            inteligenciaInput.value = fichaData.atributos.inteligencia || 10;
            sabedoriaInput.value = fichaData.atributos.sabedoria || 10;
            carismaInput.value = fichaData.atributos.carisma || 10;
        }
        
        // Define pontos de vida
        if (fichaData.hp) {
            hpAtualInput.value = fichaData.hp.atual || 10;
            hpMaximoInput.value = fichaData.hp.maximo || 10;
        } else {
            hpAtualInput.value = 10;
            hpMaximoInput.value = 10;
        }
        
        inventarioTextarea.value = fichaData.inventario || '';
        currentFichaId = fichaData.id;
    }

    function salvarFicha() {
        const racaSelecionada = document.getElementById('raca').value;
        const classeSelecionada = document.getElementById('classe').value;
        
        if (!nomeInput.value.trim()) {
            mostrarNotificacao('Por favor, preencha o nome do personagem', 'erro');
            return;
        }
        
        if (!racaSelecionada) {
            mostrarNotificacao('Por favor, selecione uma raça', 'erro');
            return;
        }
        
        if (!classeSelecionada) {
            mostrarNotificacao('Por favor, selecione uma classe', 'erro');
            return;
        }
        
        const fichaData = {
            id: currentFichaId || Date.now().toString(),
            nome: nomeInput.value.trim(),
            raca: racaSelecionada,
            classe: classeSelecionada,
            nivel: parseInt(nivelInput.value) || 1,
            atributos: {
                forca: parseInt(forcaInput.value) || 10,
                destreza: parseInt(destrezaInput.value) || 10,
                constituicao: parseInt(constituicaoInput.value) || 10,
                inteligencia: parseInt(inteligenciaInput.value) || 10,
                sabedoria: parseInt(sabedoriaInput.value) || 10,
                carisma: parseInt(carismaInput.value) || 10,
            },
            hp: {
                atual: parseInt(hpAtualInput.value) || 10,
                maximo: parseInt(hpMaximoInput.value) || 10,
            },
            inventario: inventarioTextarea.value,
            atualizadoEm: new Date().toISOString()
        };

        if (!fichaData.nome) {
            alert('Por favor, insira um nome para o personagem.');
            return;
        }

        // Salva a ficha no localStorage
        localStorage.setItem(KEY_STORAGE_PREFIX + fichaData.id, JSON.stringify(fichaData));
        
        // Atualiza o ID atual se for uma nova ficha
        if (!currentFichaId) {
            currentFichaId = fichaData.id;
        }
        
        mostrarNotificacao('Ficha salva com sucesso!');
        mostrarTela('lista');
    }

    function excluirFicha() {
        if (!currentFichaId) return;
        
        if (confirm('Tem certeza que deseja excluir esta ficha? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem(KEY_STORAGE_PREFIX + currentFichaId);
            mostrarNotificacao('Ficha excluída com sucesso!');
            limparCamposFicha();
            mostrarTela('lista');
        }
    }

    // --- Funções da Lista de Fichas ---
    function carregarListaDeFichas() {
        listaPersonagensUl.innerHTML = '';
        const fichas = [];
        
        // Coleta todas as fichas do localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(KEY_STORAGE_PREFIX)) {
                try {
                    const ficha = JSON.parse(localStorage.getItem(key));
                    if (ficha && ficha.id) {
                        fichas.push(ficha);
                    }
                } catch (e) {
                    console.error('Erro ao carregar ficha:', key, e);
                }
            }
        }

        // Ordena as fichas por data de atualização (mais recentes primeiro)
        fichas.sort((a, b) => {
            return new Date(b.atualizadoEm || 0) - new Date(a.atualizadoEm || 0);
        });

        // Exibe as fichas na lista
        if (fichas.length === 0) {
            const item = document.createElement('li');
            item.textContent = 'Nenhuma ficha encontrada.';
            item.className = 'sem-fichas';
            listaPersonagensUl.appendChild(item);
            return;
        }

        fichas.forEach(ficha => {
            const item = document.createElement('li');
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'ficha-info';
            
            const nomeSpan = document.createElement('span');
            nomeSpan.className = 'ficha-nome';
            nomeSpan.textContent = ficha.nome || 'Personagem sem nome';
            
            const detalhesSpan = document.createElement('span');
            detalhesSpan.className = 'ficha-detalhes';
            detalhesSpan.textContent = `Nível ${ficha.nivel || 1} ${ficha.raca || ''} ${ficha.classe || ''}`.trim();
            
            infoDiv.appendChild(nomeSpan);
            infoDiv.appendChild(document.createElement('br'));
            infoDiv.appendChild(detalhesSpan);
            
            const botoesDiv = document.createElement('div');
            botoesDiv.className = 'ficha-botoes';
            
            const btnEditar = document.createElement('button');
            btnEditar.className = 'carregar-ficha-btn';
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = (e) => {
                e.stopPropagation();
                carregarFichaNosCampos(ficha);
                mostrarTela('ficha');
            };
            
            const btnExcluir = document.createElement('button');
            btnExcluir.className = 'excluir-ficha-lista-btn';
            btnExcluir.textContent = 'Excluir';
            btnExcluir.onclick = (e) => {
                e.stopPropagation();
                if (confirm(`Tem certeza que deseja excluir a ficha "${ficha.nome || 'sem nome'}"?`)) {
                    localStorage.removeItem(KEY_STORAGE_PREFIX + ficha.id);
                    carregarListaDeFichas();
                    mostrarNotificacao('Ficha excluída com sucesso!');
                }
            };
            
            botoesDiv.appendChild(btnEditar);
            botoesDiv.appendChild(btnExcluir);
            
            item.appendChild(infoDiv);
            item.appendChild(botoesDiv);
            
            // Permite clicar em qualquer lugar do item para editar
            item.onclick = () => {
                carregarFichaNosCampos(ficha);
                mostrarTela('ficha');
            };
            
            listaPersonagensUl.appendChild(item);
        });
    }

    // --- Funções Auxiliares ---
    function mostrarNotificacao(mensagem, tipo = 'sucesso') {
        // Remove notificações existentes
        const notificacaoExistente = document.querySelector('.notificacao');
        if (notificacaoExistente) {
            notificacaoExistente.remove();
        }
        
        // Cria a notificação
        const notificacao = document.createElement('div');
        notificacao.className = `notificacao ${tipo}`;
        notificacao.textContent = mensagem;
        
        // Adiciona ao corpo do documento
        document.body.appendChild(notificacao);
        
        // Remove após 3 segundos
        setTimeout(() => {
            notificacao.classList.add('saindo');
            setTimeout(() => notificacao.remove(), 300);
        }, 3000);
    }
    
    // Validação para HP Atual não ser maior que HP Máximo
    hpAtualInput.addEventListener('change', () => {
        const max = parseInt(hpMaximoInput.value) || 0;
        const atual = parseInt(hpAtualInput.value) || 0;
        
        if (atual > max) {
            hpAtualInput.value = max;
            mostrarNotificacao('HP Atual não pode ser maior que HP Máximo', 'erro');
        }
    });

    // Função para atualizar a explicação com base na raça e classe selecionadas
    function atualizarExplicacao() {
        const racaSelecionada = document.getElementById('raca').value;
        const classeSelecionada = document.getElementById('classe').value;
        const secaoExplicacao = document.getElementById('secao-explicacao');
        const conteudoExplicacao = document.getElementById('explicacao-conteudo');
        
        // Se não tiver raça e classe selecionadas, esconde a seção
        if (!racaSelecionada || !classeSelecionada) {
            secaoExplicacao.style.display = 'none';
            return;
        }
        
        // Verifica se há uma combinação especial
        const combinacaoEspecial = combinacoesEspeciais[`${racaSelecionada}_${classeSelecionada}`];
        
        let html = '';
        
        if (combinacaoEspecial) {
            // Mostra a combinação especial
            html += `<h3>${combinacaoEspecial.titulo}</h3>`;
            html += `<p>${combinacaoEspecial.descricao}</p>`;
        } else {
            // Mostra a raça e classe separadamente
            const raca = racas[racaSelecionada];
            const classe = classes[classeSelecionada];
            
            html += `<h3>${raca.nome} ${classe.nome}</h3>`;
            html += `<p><strong>${raca.nome}:</strong> ${raca.descricao}</p>`;
            html += `<p><strong>${classe.nome}:</strong> ${classe.descricao}</p>`;
        }
        
        // Atualiza o conteúdo e mostra a seção
        conteudoExplicacao.innerHTML = html;
        secaoExplicacao.style.display = 'block';
    }
    
    // Função para calcular e atualizar os atributos baseado na raça e classe
    function atualizarAtributos() {
        const racaSelecionada = document.getElementById('raca').value;
        const classeSelecionada = document.getElementById('classe').value;
        
        // Se não tiver raça e classe selecionadas, não faz nada
        if (!racaSelecionada || !classeSelecionada) return;
        
        // Obtém os modificadores de raça e classe
        const modRaca = racas[racaSelecionada].atributos;
        const modClasse = classes[classeSelecionada].atributos;
        
        // Calcula os atributos finais
        const atributosFinais = {
            forca: atributosBase.forca + (modRaca.forca || 0) + (modClasse.forca || 0),
            destreza: atributosBase.destreza + (modRaca.destreza || 0) + (modClasse.destreza || 0),
            constituicao: atributosBase.constituicao + (modRaca.constituicao || 0) + (modClasse.constituicao || 0),
            inteligencia: atributosBase.inteligencia + (modRaca.inteligencia || 0) + (modClasse.inteligencia || 0),
            sabedoria: atributosBase.sabedoria + (modRaca.sabedoria || 0) + (modClasse.sabedoria || 0),
            carisma: atributosBase.carisma + (modRaca.carisma || 0) + (modClasse.carisma || 0)
        };
        
        // Atualiza os campos de atributos
        forcaInput.value = atributosFinais.forca;
        destrezaInput.value = atributosFinais.destreza;
        constituicaoInput.value = atributosFinais.constituicao;
        inteligenciaInput.value = atributosFinais.inteligencia;
        sabedoriaInput.value = atributosFinais.sabedoria;
        carismaInput.value = atributosFinais.carisma;
        
        // Calcula e atualiza os pontos de vida
        const hpBase = 10; // HP base
        const modRacaHP = racas[racaSelecionada].hp || 0;
        const modClasseHP = classes[classeSelecionada].hp || 0;
        const hpTotal = hpBase + modRacaHP + modClasseHP;
        
        hpMaximoInput.value = hpTotal;
        hpAtualInput.value = hpTotal;
        
        // Atualiza a explicação
        atualizarExplicacao();
    }
    
    // Adiciona os event listeners
    btnNovoPersonagem.addEventListener('click', () => {
        limparCamposFicha();
        mostrarTela('ficha');
    });
    
    btnCarregarPersonagem.addEventListener('click', () => {
        carregarListaDeFichas();
        mostrarTela('lista');
    });
    
    btnVoltarMenuLista.addEventListener('click', () => mostrarTela('menu'));
    voltarAoMenuFichaBtn.addEventListener('click', () => mostrarTela('menu'));
    
    // Adiciona listeners para mudanças de raça e classe
    const racaSelect = document.getElementById('raca');
    const classeSelect = document.getElementById('classe');
    
    racaSelect.addEventListener('change', () => {
        atualizarAtributos();
        // Se não tiver classe selecionada, atualiza apenas a explicação
        if (!classeSelect.value) atualizarExplicacao();
    });
    
    classeSelect.addEventListener('change', () => {
        atualizarAtributos();
        // Se não tiver raça selecionada, atualiza apenas a explicação
        if (!racaSelect.value) atualizarExplicacao();
    });
    
    salvarBtn.addEventListener('click', salvarFicha);
    excluirBtn.addEventListener('click', excluirFicha);
    
    // --- Sistema de Inventário ---
    const modalItem = document.getElementById('modal-item');
    const formItem = document.getElementById('form-item');
    const btnAdicionarItem = document.getElementById('btn-adicionar-item');
    const btnCancelarItem = document.getElementById('btn-cancelar-item');
    const listaItens = document.getElementById('lista-itens');
    
    let itensInventario = [];
    let itemEditandoId = null;
    
    // Função para abrir o modal de item
    function abrirModalItem(item = null) {
        const tituloModal = document.getElementById('modal-titulo');
        
        if (item) {
            // Modo edição
            tituloModal.textContent = 'Editar Item';
            document.getElementById('item-id').value = item.id;
            document.getElementById('item-nome').value = item.nome;
            document.getElementById('item-descricao').value = item.descricao || '';
            document.getElementById('item-dano').value = item.dano || '';
            document.getElementById('item-cura').value = item.cura || '';
            document.getElementById('item-tipo').value = item.tipo || 'ativo';
            document.getElementById('item-efeito').value = item.efeito || '';
            itemEditandoId = item.id;
        } else {
            // Modo adição
            tituloModal.textContent = 'Adicionar Item';
            formItem.reset();
            document.getElementById('item-tipo').value = 'ativo';
            itemEditandoId = null;
        }
        
        modalItem.style.display = 'block';
    }
    
    // Função para fechar o modal
    function fecharModalItem() {
        modalItem.style.display = 'none';
        formItem.reset();
        itemEditandoId = null;
    }
    
    // Função para salvar item (adicionar ou atualizar)
    function salvarItem(event) {
        event.preventDefault();
        
        const item = {
            id: itemEditandoId || Date.now().toString(),
            nome: document.getElementById('item-nome').value.trim(),
            descricao: document.getElementById('item-descricao').value.trim(),
            dano: document.getElementById('item-dano').value.trim(),
            cura: document.getElementById('item-cura').value.trim(),
            tipo: document.getElementById('item-tipo').value,
            efeito: document.getElementById('item-efeito').value.trim()
        };
        
        // Validação básica
        if (!item.nome) {
            mostrarNotificacao('O nome do item é obrigatório', 'erro');
            return;
        }
        
        if (itemEditandoId) {
            // Atualizar item existente
            const index = itensInventario.findIndex(i => i.id === itemEditandoId);
            if (index !== -1) {
                itensInventario[index] = item;
                mostrarNotificacao('Item atualizado com sucesso!');
            }
        } else {
            // Adicionar novo item
            itensInventario.push(item);
            mostrarNotificacao('Item adicionado ao inventário!');
        }
        
        // Atualiza a exibição e fecha o modal
        renderizarItens();
        fecharModalItem();
    }
    
    // Função para renderizar a lista de itens
    function renderizarItens() {
        listaItens.innerHTML = '';
        
        if (itensInventario.length === 0) {
            listaItens.innerHTML = '<p class="sem-itens">Nenhum item no inventário. Clique em "Adicionar Item" para começar.</p>';
            return;
        }
        
        itensInventario.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item-inventario';
            itemElement.innerHTML = `
                <div class="item-cabecalho">
                    <h3 class="item-nome">${item.nome}</h3>
                    <span class="item-tipo">${item.tipo === 'ativo' ? 'Ativo' : 'Passivo'}</span>
                </div>
                ${item.descricao ? `<div class="item-descricao">${item.descricao}</div>` : ''}
                <div class="item-detalhes">
                    ${item.dano ? `<span><strong>Dano:</strong> ${item.dano}</span>` : ''}
                    ${item.cura ? `<span><strong>Cura:</strong> ${item.cura}</span>` : ''}
                </div>
                ${item.efeito ? `<div class="item-efeito"><strong>Efeito:</strong> ${item.efeito}</div>` : ''}
            `;
            
            // Adiciona botões de ação
            const botoesAcao = document.createElement('div');
            botoesAcao.className = 'item-acoes';
            botoesAcao.innerHTML = `
                <button class="btn-editar" data-id="${item.id}">Editar</button>
                <button class="btn-remover" data-id="${item.id}">Remover</button>
            `;
            itemElement.appendChild(botoesAcao);
            
            // Adiciona evento de clique para editar
            const btnEditar = botoesAcao.querySelector('.btn-editar');
            btnEditar.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemParaEditar = itensInventario.find(i => i.id === item.id);
                if (itemParaEditar) {
                    abrirModalItem(itemParaEditar);
                }
            });
            
            // Adiciona evento de clique para remover
            const btnRemover = botoesAcao.querySelector('.btn-remover');
            btnRemover.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('Tem certeza que deseja remover este item?')) {
                    itensInventario = itensInventario.filter(i => i.id !== item.id);
                    renderizarItens();
                    mostrarNotificacao('Item removido com sucesso!');
                }
            });
            
            listaItens.appendChild(itemElement);
        });
    }
    
    // Event Listeners para o inventário
    btnAdicionarItem.addEventListener('click', () => abrirModalItem());
    
    document.querySelector('.fechar-modal').addEventListener('click', fecharModalItem);
    
    btnCancelarItem.addEventListener('click', fecharModalItem);
    
    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modalItem) {
            fecharModalItem();
        }
    });
    
    formItem.addEventListener('submit', salvarItem);
    
    // Inicializa a lista de itens
    renderizarItens();
    
    // Tenta carregar a ficha salva ao iniciar
    // carregarFicha();
});
