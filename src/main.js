import './style.css'

// ===================== INGREDIENTES REAIS =====================
// Só coisas de verdade, que existem na cozinha / no laboratório de feira de ciências.
const INGREDIENTES = [
  { id: 'vinagre',  emoji: '🍶', nome: 'Vinagre',     cor: '#f3e6a8' },
  { id: 'bicarb',   emoji: '🥄', nome: 'Bicarbonato', cor: '#f7f7f7' },
  { id: 'limao',    emoji: '🍋', nome: 'Limão',       cor: '#fff04a' },
  { id: 'coca',     emoji: '🥤', nome: 'Refri',       cor: '#5a2d12' },
  { id: 'mentos',   emoji: '🍬', nome: 'Mentos',      cor: '#eef3f7' },
  { id: 'leite',    emoji: '🥛', nome: 'Leite',       cor: '#fdfdf6' },
  { id: 'sabao',    emoji: '🧼', nome: 'Detergente',  cor: '#6ec6ff' },
  { id: 'agua',     emoji: '💧', nome: 'Água',        cor: '#4aa3ff' },
  { id: 'sal',      emoji: '🧂', nome: 'Sal',         cor: '#ffffff' },
  { id: 'acucar',   emoji: '🍚', nome: 'Açúcar',      cor: '#f0e6d2' },
  { id: 'fermento', emoji: '🍞', nome: 'Fermento',    cor: '#d9a05b' },
  { id: 'peroxido', emoji: '🧴', nome: 'Água Oxig.',  cor: '#dff2ff' },
  { id: 'gelo',     emoji: '🧊', nome: 'Gelo',        cor: '#bfe9ff' },
  { id: 'fogo',     emoji: '🔥', nome: 'Fogo',        cor: '#ff8c2e' },
  { id: 'repolho',  emoji: '🥬', nome: 'Repolho Roxo',cor: '#8e44ad' },
  { id: 'cha',      emoji: '🍵', nome: 'Chá',         cor: '#6b8e23' },
  { id: 'corante',  emoji: '🎨', nome: 'Corante',     cor: '#ff3b7f' },
  { id: 'oleo',     emoji: '🛢️', nome: 'Óleo',        cor: '#d4b106' },
  { id: 'ovo',      emoji: '🥚', nome: 'Ovo',         cor: '#f5e6c8' },
  { id: 'batata',   emoji: '🥔', nome: 'Batata',      cor: '#c9a45b' },
  { id: 'ferro',    emoji: '🔩', nome: 'Prego (Ferro)',cor: '#8a8a8a' },
  { id: 'cobre',    emoji: '🪙', nome: 'Moeda (Cobre)',cor: '#b87333' },
  { id: 'balao',    emoji: '🎈', nome: 'Balão',       cor: '#ff5e5e' },
  { id: 'amido',    emoji: '🌽', nome: 'Amido',       cor: '#ffe9a8' },
  { id: 'iodo',     emoji: '🟤', nome: 'Iodo',        cor: '#5a3d1e' },
  { id: 'maca',     emoji: '🍎', nome: 'Maçã',        cor: '#e74c3c' },
  { id: 'mel',      emoji: '🍯', nome: 'Mel',         cor: '#e0a800' },
  { id: 'pimenta',  emoji: '🌶️', nome: 'Pimenta',     cor: '#3a2a1a' },
  { id: 'passas',   emoji: '🍇', nome: 'Passas',      cor: '#5b2c6f' },
  { id: 'curcuma',  emoji: '🟡', nome: 'Cúrcuma',     cor: '#e8a200' },
  { id: 'vela',     emoji: '🕯️', nome: 'Vela',        cor: '#ffd27f' },
]
const ING = id => INGREDIENTES.find(x => x.id === id)

// ===================== REAÇÕES QUÍMICAS REAIS (45) =====================
// "req" = conjunto de ingredientes (sem ordem, sem repetir) que faz a reação.
// Todas acontecem de verdade! Cada uma traz uma curiosidade científica real.
const POCOES_ESPECIAIS = [
  { req: ['coca','mentos'], nome: 'KABUM (Gêiser)', emoji: '💥', cor: '#5a2d12',
    curiosidade: 'A superfície rugosa do Mentos cria milhares de pontos de nucleação: todo o gás carbônico do refri escapa de uma vez e dispara um gêiser. 🌋' },
  { req: ['vinagre','bicarb'], nome: 'Vulcão', emoji: '🌋', cor: '#e8d27a',
    curiosidade: 'Ácido (vinagre) + base (bicarbonato) reagem e liberam gás carbônico (CO₂), formando a espuma borbulhante do vulcão de feira de ciências.' },
  { req: ['limao','bicarb'], nome: 'Efervescente', emoji: '🫧', cor: '#fff04a',
    curiosidade: 'O ácido cítrico do limão reage com o bicarbonato e solta CO₂ — é a mesma reação de um comprimido efervescente na água.' },
  { req: ['coca','bicarb'], nome: 'Espuma de Refri', emoji: '🍺', cor: '#7a4a20',
    curiosidade: 'O refrigerante é ácido (ácido fosfórico e carbônico), então com bicarbonato também espuma e transborda, soltando ainda mais CO₂.' },
  { req: ['coca','sal'], nome: 'Mini Gêiser', emoji: '🌫️', cor: '#6a3a18',
    curiosidade: 'Os grãos de sal têm superfície irregular e criam pontos de nucleação, fazendo o gás do refri escapar mais rápido. Versão suave do Mentos!' },
  { req: ['vinagre','bicarb','sabao'], nome: 'Monstro de Espuma', emoji: '🫧', cor: '#bfe9c9',
    curiosidade: 'O detergente aprisiona o CO₂ do vinagre + bicarbonato em milhões de bolhinhas, criando uma montanha de espuma gigante.' },
  { req: ['vinagre','bicarb','corante'], nome: 'Vulcão Colorido', emoji: '🌈', cor: '#ff3b7f',
    curiosidade: 'A mesma reação ácido-base que solta CO₂, agora tingida pelo corante para a lava ficar bem chamativa.' },
  { req: ['vinagre','bicarb','balao'], nome: 'Balão que Enche Sozinho', emoji: '🎈', cor: '#ff5e5e',
    curiosidade: 'O CO₂ produzido pela reação não tem para onde ir e infla o balão na boca da garrafa — gás de verdade enchendo o balão!' },
  { req: ['leite','sabao'], nome: 'Leite Mágico', emoji: '🌀', cor: '#cfe9ff',
    curiosidade: 'O detergente quebra as moléculas de gordura do leite e diminui a tensão superficial, fazendo tudo rodopiar sem você mexer.' },
  { req: ['leite','sabao','corante'], nome: 'Redemoinho de Cores', emoji: '🎨', cor: '#ff3b7f',
    curiosidade: 'Com corante na superfície, ao tocar o detergente a tensão superficial se rompe e empurra as cores em redemoinhos. Lindo e real!' },
  { req: ['agua','sabao'], nome: 'Bolhas de Sabão', emoji: '🫧', cor: '#bfe9ff',
    curiosidade: 'O detergente reduz a tensão superficial da água, deixando ela formar uma película fininha que segura o ar: a bolha de sabão.' },
  { req: ['oleo','agua'], nome: 'Não Se Misturam', emoji: '🛢️', cor: '#d4b106',
    curiosidade: 'Água é polar e óleo é apolar — eles se repelem. Por isso o óleo, mais leve, fica boiando por cima sem nunca misturar.' },
  { req: ['oleo','agua','corante'], nome: 'Chuva de Cor', emoji: '🌧️', cor: '#3b7fff',
    curiosidade: 'O corante (à base de água) atravessa o óleo sem se misturar e só "explode" em cor ao chegar na camada de água embaixo.' },
  { req: ['oleo','agua','sal'], nome: 'Lâmpada de Lava', emoji: '🪔', cor: '#d4b106',
    curiosidade: 'O sal é denso e afunda levando gotas de óleo pro fundo; quando o sal dissolve, o óleo sobe de novo — igual a uma lâmpada de lava.' },
  { req: ['mel','agua','oleo'], nome: 'Torre de Densidade', emoji: '🗼', cor: '#e0a800',
    curiosidade: 'Mel, água e óleo têm densidades diferentes, então se separam em camadas que não se misturam — uma torre de líquidos!' },
  { req: ['sal','agua','ovo'], nome: 'Ovo Flutuante', emoji: '🥚', cor: '#cfe0ff',
    curiosidade: 'Dissolver sal deixa a água mais densa. Quando fica mais densa que o ovo, ele para de afundar e flutua — como no Mar Morto.' },
  { req: ['ovo','vinagre'], nome: 'Ovo de Borracha', emoji: '🥚', cor: '#f5e6c8',
    curiosidade: 'O vinagre dissolve a casca (carbonato de cálcio) soltando CO₂. Sobra só a membrana, e o ovo vira uma bola saltitante!' },
  { req: ['ovo','vinagre','corante'], nome: 'Ovo Translúcido', emoji: '🔮', cor: '#ff3b7f',
    curiosidade: 'Sem a casca, a membrana é semipermeável: o corante entra e deixa o ovo colorido e transparente. Dá pra ver a gema dentro!' },
  { req: ['repolho','limao'], nome: 'Indicador Rosa', emoji: '🟥', cor: '#e74c3c',
    curiosidade: 'O suco de repolho roxo é um indicador de pH natural: em ácido (limão) ele fica rosa/vermelho.' },
  { req: ['repolho','vinagre'], nome: 'Poção Vermelha', emoji: '🍷', cor: '#c0392b',
    curiosidade: 'Vinagre é ácido, então o indicador de repolho roxo vira vermelho. Quanto mais ácido, mais vermelho!' },
  { req: ['repolho','bicarb'], nome: 'Indicador Azul', emoji: '🟦', cor: '#2980b9',
    curiosidade: 'O bicarbonato é uma base, e o repolho roxo fica azul/verde em meio básico. Mudou de cor sem tinta nenhuma!' },
  { req: ['repolho','sabao'], nome: 'Poção Verde', emoji: '🟩', cor: '#27ae60',
    curiosidade: 'Detergente costuma ser bem básico, então o indicador de repolho roxo chega a virar verde — o extremo da escala.' },
  { req: ['cha','limao'], nome: 'Chá que Clareia', emoji: '🍵', cor: '#c9b07a',
    curiosidade: 'Os pigmentos do chá (taninos) clareiam em meio ácido. Por isso o chá fica mais claro quando você pinga limão.' },
  { req: ['amido','iodo'], nome: 'Teste do Amido', emoji: '🟦', cor: '#1f2d6b',
    curiosidade: 'O iodo reage com o amido formando um complexo azul-escuro quase preto. É o teste clássico para detectar amido.' },
  { req: ['batata','iodo'], nome: 'Batata Azul', emoji: '🥔', cor: '#1f2d6b',
    curiosidade: 'Batata é cheia de amido, então pingar iodo nela faz uma mancha azul-escura na hora. Amido detectado!' },
  { req: ['amido','agua'], nome: 'Gosma Oobleck', emoji: '🪣', cor: '#ffe9a8',
    curiosidade: 'Amido de milho + água vira um fluido não-newtoniano: endurece como sólido se você bate, mas escorre como líquido se solta.' },
  { req: ['peroxido','fermento','sabao'], nome: 'Pasta de Elefante', emoji: '🐘', cor: '#bfe9c9',
    curiosidade: 'O fermento acelera a decomposição da água oxigenada em água + oxigênio; o detergente segura o gás e cria uma espuma enorme e quente.' },
  { req: ['peroxido','fermento','sabao','corante'], nome: 'Pasta de Elefante Colorida', emoji: '🌈', cor: '#ff3b7f',
    curiosidade: 'A mesma espuma de oxigênio da Pasta de Elefante, agora tingida pelo corante para sair listrada e colorida.' },
  { req: ['peroxido','batata'], nome: 'Bolhas de Oxigênio', emoji: '🫧', cor: '#dff2ff',
    curiosidade: 'A batata tem a enzima catalase, que quebra a água oxigenada e libera bolhas de oxigênio puro. As células também fazem isso em você!' },
  { req: ['peroxido','fermento'], nome: 'Espuma de Oxigênio', emoji: '💨', cor: '#dff2ff',
    curiosidade: 'O fermento é um catalisador: ele faz a água oxigenada se decompor rapidinho em água e oxigênio, soltando espuma morna.' },
  { req: ['ferro','agua'], nome: 'Ferrugem', emoji: '🟧', cor: '#b7410e',
    curiosidade: 'O ferro reage com o oxigênio e a água formando óxido de ferro — a ferrugem. É uma oxidação lenta que come o metal.' },
  { req: ['ferro','agua','sal'], nome: 'Ferrugem Turbo', emoji: '🦠', cor: '#a83208',
    curiosidade: 'A água salgada conduz melhor as cargas elétricas e acelera a oxidação. Por isso carros enferrujam mais rápido perto do mar.' },
  { req: ['cobre','vinagre','sal'], nome: 'Moeda Brilhante', emoji: '✨', cor: '#b87333',
    curiosidade: 'O vinagre com sal forma um ácido fraco que dissolve o óxido escuro do cobre, deixando a moeda novinha e brilhante.' },
  { req: ['maca','limao'], nome: 'Maçã que Não Escurece', emoji: '🍏', cor: '#7ed957',
    curiosidade: 'O ácido e a vitamina C do limão bloqueiam a enzima que escurece a fruta. Por isso a maçã com limão não fica marrom.' },
  { req: ['maca','agua'], nome: 'Maçã que Escurece', emoji: '🍎', cor: '#9c6b2e',
    curiosidade: 'Cortada, a maçã reage com o oxigênio do ar (oxidação enzimática) e fica marrom. A água sozinha quase não impede isso.' },
  { req: ['leite','limao'], nome: 'Leite Talhado', emoji: '🧀', cor: '#f5f0d8',
    curiosidade: 'O ácido do limão faz a proteína do leite (caseína) se juntar e talhar. É assim que se faz ricota e vários queijos!' },
  { req: ['leite','vinagre'], nome: 'Plástico de Leite', emoji: '🧫', cor: '#efe9d0',
    curiosidade: 'O vinagre coagula a caseína do leite numa massa que endurece como plástico. Antigamente faziam botões assim (galalite)!' },
  { req: ['coca','leite'], nome: 'Refri Coalha', emoji: '🥛', cor: '#8a6a4a',
    curiosidade: 'O ácido fosfórico do refrigerante coagula as proteínas do leite, formando grumos que afundam. Experimento nojentinho e real!' },
  { req: ['gelo','sal'], nome: 'Super Gelo', emoji: '🧊', cor: '#bfe9ff',
    curiosidade: 'O sal abaixa o ponto de congelamento, então o gelo derrete e fica MAIS frio que 0 °C. Por isso jogam sal na neve das ruas.' },
  { req: ['gelo','sal','leite'], nome: 'Sorvete na Hora', emoji: '🍦', cor: '#fff0f5',
    curiosidade: 'A mistura gelo + sal fica tão fria que congela o leite ao redor: é o truque para fazer sorvete dentro de um saquinho.' },
  { req: ['fermento','acucar','agua'], nome: 'Fermentação', emoji: '🫧', cor: '#d9a05b',
    curiosidade: 'O fermento é um fungo vivo: ele come o açúcar e solta gás carbônico e álcool. É o que faz o pão crescer.' },
  { req: ['fermento','acucar','agua','balao'], nome: 'Balão da Levedura', emoji: '🎈', cor: '#d9a05b',
    curiosidade: 'O CO₂ que o fermento solta ao comer o açúcar sobe e enche o balão sozinho — prova de que tem um ser vivo trabalhando ali!' },
  { req: ['acucar','fogo'], nome: 'Caramelo', emoji: '🍯', cor: '#a0522d',
    curiosidade: 'Com o calor o açúcar derrete e suas moléculas se quebram e se reorganizam, ficando douradas e cheirosas: a caramelização.' },
  { req: ['acucar','bicarb','fogo'], nome: 'Cobra do Faraó', emoji: '🐍', cor: '#2b2b2b',
    curiosidade: 'Queimando açúcar com bicarbonato, o gás liberado incha o carbono que sobra e nasce uma cobra preta gigante e leve.' },
  { req: ['sal','agua'], nome: 'Cristais de Sal', emoji: '💎', cor: '#eafff8',
    curiosidade: 'Quando a água evapora, o sal dissolvido não tem mais onde ficar e se organiza em cristais cúbicos perfeitinhos.' },

  // ---- novas reações: iodo, indicadores naturais, oxigênio e mais ----
  { req: ['limao','iodo'], nome: 'Iodo Invisível', emoji: '🫥', cor: '#cfa86b',
    curiosidade: 'A vitamina C do limão "reduz" o iodo e transforma ele em iodeto, que é incolor. A cor marrom do iodo simplesmente desaparece!' },
  { req: ['amido','iodo','limao'], nome: 'Pisca-Pisca Azul', emoji: '✨', cor: '#1f2d6b',
    curiosidade: 'O amido + iodo fica azul, mas a vitamina C do limão vai consumindo o iodo aos poucos até a cor sumir. É o princípio da "reação-relógio".' },
  { req: ['pimenta','agua','sabao'], nome: 'Pimenta que Foge', emoji: '🌶️', cor: '#6e8b3d',
    curiosidade: 'A pimenta boia na tensão superficial da água. Ao tocar o detergente, a tensão se rompe e puxa a pimenta toda para as bordas — ela foge!' },
  { req: ['passas','coca'], nome: 'Passas Dançantes', emoji: '🍇', cor: '#5b2c6f',
    curiosidade: 'Bolhas de gás carbônico grudam nas passas e as levantam; lá em cima as bolhas estouram e elas afundam de novo — passas dançando sem parar!' },
  { req: ['curcuma','bicarb'], nome: 'Cúrcuma Camaleão', emoji: '🟥', cor: '#b7410e',
    curiosidade: 'A cúrcuma é um indicador de pH natural: amarela em meio neutro/ácido, ela vira vermelho-alaranjada no bicarbonato (base).' },
  { req: ['curcuma','sabao'], nome: 'Mancha Vermelha', emoji: '🟧', cor: '#c0392b',
    curiosidade: 'Detergente é básico, então a mancha amarela de cúrcuma fica vermelha. Por isso mancha de tempero "muda de cor" quando você passa sabão!' },
  { req: ['vela','fogo','agua'], nome: 'Água que Sobe', emoji: '🕯️', cor: '#9ecbff',
    curiosidade: 'Uma vela acesa dentro de um copo virado sobre a água consome o oxigênio e esquenta o ar; quando apaga, a pressão cai e a água sobe sozinha.' },
  { req: ['vela','fogo','vinagre','bicarb'], nome: 'Apagador Invisível', emoji: '💨', cor: '#cfd8dc',
    curiosidade: 'Vinagre + bicarbonato produzem CO₂, um gás mais pesado que o ar. Despejado sobre a vela (sem encostar), ele "afoga" a chama e apaga o fogo.' },
  { req: ['acucar','agua'], nome: 'Cristais de Açúcar', emoji: '🍭', cor: '#ffd9ec',
    curiosidade: 'Numa água bem doce e quente, ao esfriar o açúcar sobra e gruda num barbante formando cristais — é assim que se faz a bala "rock candy".' },
  { req: ['acucar','agua','corante'], nome: 'Arco-Íris de Açúcar', emoji: '🌈', cor: '#ff8ad1',
    curiosidade: 'Quanto mais açúcar, mais densa a água. Camadas com diferentes quantidades de açúcar se empilham sem misturar, formando um arco-íris.' },
  { req: ['batata','sal'], nome: 'Batata Murcha', emoji: '🥔', cor: '#b8923f',
    curiosidade: 'O sal puxa a água de dentro das células da batata por osmose. Ela perde água e fica molenga e murcha em poucas horas.' },
  { req: ['cobre','vinagre','sal','ferro'], nome: 'Prego de Cobre', emoji: '🔩', cor: '#b87333',
    curiosidade: 'O cobre dissolvido no vinagre com sal se deposita no prego de ferro (metal mais reativo) e cobre ele com uma casquinha cor de cobre.' },
]
const TOTAL_ESPECIAIS = POCOES_ESPECIAIS.length

// nomes engraçados para misturas que não são especiais
const ADJ = ['Maluca','Borbulhante','Fedorenta','Brilhante','Misteriosa','Pegajosa','Saltitante','Mágica','Gosmenta','Cintilante']
const SUB = ['Surpresa','do Caos','Arco-Tosco','Bagunça','do Mago Atrapalhado','Esquisita','Maluquinha','Inventada']

// ===================== ESTADO =====================
let caldeirao = []   // ids dos ingredientes adicionados agora
let descobertas = JSON.parse(localStorage.getItem('potion_descobertas') || '[]')
let totalCriadas = Number(localStorage.getItem('potion_total') || 0)

const app = document.getElementById('app')

// ===================== TELA INICIAL =====================
function telaInicial() {
  app.innerHTML = `
    <div class="tela" id="menu">
      <div class="mago">🧙‍♂️</div>
      <h1>🧪 Potion Wizard</h1>
      <p>Bem-vindo ao laboratório do mago-cientista! Aqui <b>você é o inventor</b>.
      Todos os ingredientes são <b>de verdade</b> 🧂🍋🥤 — jogue no caldeirão,
      aperte <b>Misturar</b> e veja a química acontecer! 🔮</p>
      <p>Existem <b class="destaque">${TOTAL_ESPECIAIS} reações químicas reais</b> escondidas,
      cada uma com uma curiosidade científica de verdade! 🔬
      Comece com <b>Refri 🥤 + Mentos 🍬</b>... 💥</p>
      <button class="btn-grande" id="comecar">Começar a Inventar! 🪄</button>
    </div>
  `
  document.getElementById('comecar').onclick = montarTabuleiro
}

// ===================== TABULEIRO =====================
function montarTabuleiro() {
  caldeirao = []
  app.innerHTML = `
    <div class="topo">
      <div class="titulo">🧪 Potion Wizard</div>
      <div class="placar">
        <div class="caixa">🔮 <span id="contDesc">${descobertas.length}</span>/${TOTAL_ESPECIAIS}</div>
        <div class="caixa">🧪 <span id="contTotal">${totalCriadas}</span></div>
        <button class="btn-livro" id="btnLivro">📖 Livro</button>
      </div>
    </div>

    <div class="dica">🔬 Combine até 4 ingredientes reais e aperte <b>Misturar!</b> Descubra as reações químicas! ⚗️</div>

    <div class="jogo">
      <div class="caldeirao-area">
        <div class="gosma" id="gosma"></div>
        <div class="caldeirao" id="caldeirao">🍲</div>
        <div class="dentro" id="dentro"></div>
      </div>

      <div style="width:100%">
        <div class="prateleira" id="prateleira"></div>
        <div class="botoes">
          <button class="btn-limpar" id="btnLimpar">🧹 Esvaziar</button>
          <button class="btn-misturar" id="btnMisturar">✨ Misturar!</button>
        </div>
      </div>
    </div>
  `
  document.getElementById('btnLimpar').onclick = esvaziar
  document.getElementById('btnMisturar').onclick = misturar
  document.getElementById('btnLivro').onclick = abrirLivro
  desenharPrateleira()
  atualizarDentro()
}

function desenharPrateleira() {
  const p = document.getElementById('prateleira')
  p.innerHTML = INGREDIENTES.map(ing => `
    <div class="ingrediente" data-id="${ing.id}">
      <span class="emoji">${ing.emoji}</span>
      <span class="nome">${ing.nome}</span>
    </div>
  `).join('')
  p.querySelectorAll('.ingrediente').forEach(el => {
    el.onclick = (e) => adicionar(el.dataset.id, e.currentTarget)
  })
}

// ===================== ADICIONAR / ESVAZIAR =====================
function adicionar(id, elemento) {
  if (caldeirao.length >= 4) {
    flash('🪣 Caldeirão cheio!', '#ff8c2e')
    tremerCaldeirao()
    return
  }
  caldeirao.push(id)
  voarParaCaldeirao(elemento)
  bolhas()
  pintarPelosIngredientes()
  setTimeout(atualizarDentro, 250)
}

function esvaziar() {
  if (caldeirao.length === 0) return
  caldeirao = []
  document.documentElement.style.setProperty('--liquido', '#b06ee0')
  atualizarDentro()
  tremerCaldeirao()
}

function atualizarDentro() {
  const d = document.getElementById('dentro')
  if (!d) return
  d.innerHTML = caldeirao.map(id => `<span>${ING(id).emoji}</span>`).join('')
}

// ===================== MISTURAR =====================
function misturar() {
  if (caldeirao.length === 0) {
    flash('🤔 Coloque algo primeiro!', '#ffd166')
    tremerCaldeirao()
    return
  }

  const pocao = descobrirPocao(caldeirao)
  totalCriadas++
  localStorage.setItem('potion_total', String(totalCriadas))
  document.getElementById('contTotal').textContent = totalCriadas

  // efeito visual
  document.documentElement.style.setProperty('--liquido', pocao.cor)
  pularCaldeirao()
  festaBolhas(pocao.cor)
  if (pocao.especial) explodir(pocao)

  let novidade = false
  if (pocao.especial && !descobertas.includes(pocao.nome)) {
    descobertas.push(pocao.nome)
    localStorage.setItem('potion_descobertas', JSON.stringify(descobertas))
    document.getElementById('contDesc').textContent = descobertas.length
    novidade = true
  }

  mostrarResultado(pocao, novidade)
  caldeirao = []
}

function descobrirPocao(ingredientes) {
  const set = [...new Set(ingredientes)].sort().join(',')
  // procura combinação especial (compara conjuntos sem repetição)
  for (const p of POCOES_ESPECIAIS) {
    if ([...p.req].sort().join(',') === set) {
      return { ...p, especial: true }
    }
  }
  // mistura "inventada": cor média + nome aleatório (estável pela combinação)
  const cor = corMedia(ingredientes)
  const seed = set.length
  const nome = `Poção ${ADJ[seed % ADJ.length]} ${SUB[(seed * 3) % SUB.length]}`
  return { nome, emoji: '🧪', cor, especial: false }
}

// ===================== RESULTADO (pop-up) =====================
function mostrarResultado(pocao, novidade) {
  const tela = document.createElement('div')
  tela.className = 'tela resultado'
  tela.innerHTML = `
    <div class="frasco" style="--c:${pocao.cor}">${pocao.especial ? pocao.emoji : '🧪'}</div>
    ${novidade ? '<div class="badge">✨ NOVA DESCOBERTA! ✨</div>' : ''}
    ${pocao.especial ? '<div class="badge real">🔬 REAÇÃO QUÍMICA REAL!</div>' : ''}
    <h1 style="font-size:34px">${pocao.emoji} ${pocao.nome}</h1>
    <p>${pocao.especial
      ? 'Isso acontece de verdade no mundo real! 🤯'
      : 'Hmm... essas coisas não reagem entre si. Tente outra combinação para achar uma reação real! 🔍'}</p>
    ${pocao.curiosidade ? `<div class="curiosidade">🧠 <b>Você sabia?</b><br>${pocao.curiosidade}</div>` : ''}
    <button class="btn-grande" id="ok">Fazer outra! 🔁</button>
  `
  app.appendChild(tela)
  document.getElementById('ok').onclick = () => {
    tela.remove()
    document.documentElement.style.setProperty('--liquido', '#b06ee0')
    atualizarDentro()
  }
}

// ===================== LIVRO DE POÇÕES =====================
function abrirLivro() {
  const tela = document.createElement('div')
  tela.className = 'tela livro'
  const itens = POCOES_ESPECIAIS.map(p => {
    const achou = descobertas.includes(p.nome)
    return `<div class="livro-item ${achou ? '' : 'oculto'} real">
      <div class="livro-emoji">${achou ? p.emoji : '❓'}</div>
      <div class="livro-nome">${achou ? p.nome : '? ? ?'}</div>
      <div class="livro-ing">${achou
        ? p.req.map(id => ING(id).emoji).join(' + ')
        : 'Combinação secreta'}</div>
      ${achou && p.curiosidade ? `<div class="livro-curio">${p.curiosidade}</div>` : ''}
    </div>`
  }).join('')
  tela.innerHTML = `
    <h1 style="font-size:34px">📖 Livro de Poções</h1>
    <p class="destaque">${descobertas.length} de ${TOTAL_ESPECIAIS} descobertas</p>
    <div class="livro-grade">${itens}</div>
    <button class="btn-grande" id="fechar">Voltar 🔙</button>
  `
  app.appendChild(tela)
  document.getElementById('fechar').onclick = () => tela.remove()
}

// ===================== CORES =====================
function hex(c) {
  const n = c.replace('#', '')
  return [parseInt(n.slice(0,2),16), parseInt(n.slice(2,4),16), parseInt(n.slice(4,6),16)]
}
function corMedia(ids) {
  let r = 0, g = 0, b = 0
  ids.forEach(id => { const [x,y,z] = hex(ING(id).cor); r+=x; g+=y; b+=z })
  const n = ids.length
  return `rgb(${Math.round(r/n)},${Math.round(g/n)},${Math.round(b/n)})`
}
function pintarPelosIngredientes() {
  if (caldeirao.length) {
    document.documentElement.style.setProperty('--liquido', corMedia(caldeirao))
  }
}

// ===================== EFEITOS VISUAIS =====================
function tremerCaldeirao() {
  const c = document.getElementById('caldeirao')
  if (!c) return
  c.classList.remove('tremer'); void c.offsetWidth; c.classList.add('tremer')
}
function pularCaldeirao() {
  const c = document.getElementById('caldeirao')
  if (!c) return
  c.classList.remove('pular'); void c.offsetWidth; c.classList.add('pular')
}
function bolhas() {
  const area = document.querySelector('.caldeirao-area')
  if (!area) return
  for (let i = 0; i < 4; i++) {
    const b = document.createElement('div')
    b.className = 'bolha'
    b.style.left = (35 + Math.random() * 60) + 'px'
    b.style.animationDelay = (i * 0.1) + 's'
    area.appendChild(b)
    setTimeout(() => b.remove(), 1500)
  }
}
function festaBolhas(cor) {
  const area = document.querySelector('.caldeirao-area')
  if (!area) return
  for (let i = 0; i < 16; i++) {
    const b = document.createElement('div')
    b.className = 'bolha'
    b.style.left = (10 + Math.random() * 110) + 'px'
    b.style.background = cor
    b.style.animationDelay = (Math.random() * 0.5) + 's'
    area.appendChild(b)
    setTimeout(() => b.remove(), 1600)
  }
}
function explodir(pocao) {
  const area = document.querySelector('.caldeirao-area')
  if (!area) return
  tremerCaldeirao()
  // jato de partículas saindo do caldeirão (gêiser/espuma)
  const pecas = ['💥','✨',pocao.emoji,'💨','🫧','⭐']
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div')
    p.className = 'particula'
    p.textContent = pecas[i % pecas.length]
    const ang = (Math.random() - 0.5) * 140       // espalha para os lados
    const dist = 90 + Math.random() * 140
    p.style.setProperty('--dx', Math.sin(ang * Math.PI / 180) * dist + 'px')
    p.style.setProperty('--dy', -(60 + Math.random() * dist) + 'px')
    p.style.left = '50%'
    p.style.top = '30px'
    p.style.animationDelay = (Math.random() * 0.15) + 's'
    area.appendChild(p)
    setTimeout(() => p.remove(), 1100)
  }
}

function voarParaCaldeirao(elemento) {
  const caldeirao = document.getElementById('caldeirao')
  if (!caldeirao) return
  const r1 = elemento.getBoundingClientRect()
  const r2 = caldeirao.getBoundingClientRect()
  const emoji = elemento.querySelector('.emoji').textContent
  const v = document.createElement('div')
  v.className = 'voando'
  v.textContent = emoji
  v.style.left = r1.left + 'px'
  v.style.top = r1.top + 'px'
  document.body.appendChild(v)
  requestAnimationFrame(() => {
    v.style.left = (r2.left + r2.width / 2 - 22) + 'px'
    v.style.top = (r2.top + 20) + 'px'
    v.style.transform = 'scale(0.3) rotate(360deg)'
    v.style.opacity = '0.2'
  })
  setTimeout(() => v.remove(), 520)
}
function flash(texto, cor) {
  const f = document.createElement('div')
  f.className = 'flash mostrar'
  f.textContent = texto
  f.style.color = cor
  document.body.appendChild(f)
  setTimeout(() => f.remove(), 1200)
}

// ===================== START =====================
telaInicial()
