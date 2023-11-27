let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Os dados populacionais fornecem informações sobre a situação social e econômica de uma área, incluindo dados sobre natalidade, mortalidade e migração. Sobre a taxa de fecundidade é correto afirmar que indica o número",
    alternativaA : "de nascidos vivos, subtraindo-se os dados de mortalidade infantil.",
    alternativaB : "de nascidos vivos sobre o total da população de um território.",
    alternativaC : "médio de filhos que uma dada população teria ao longo dos anos.",
    alternativaD : "médio de filhos que uma mulher teria ao final de sua idade reprodutiva",
    correta      : "médio de filhos que uma mulher teria ao final de sua idade reprodutiva",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "A taxa de mortalidade começou a diminuir na Europa no século XIX, mas apenas após a Segunda Guerra Mundial esse declínio se estendeu aos países subdesenvolvidos. Essa rápida queda da taxa de mortalidade",
    alternativaA : "foi acompanhada na mesma intensidade pela diminuição das taxas de natalidade e de fecundidade.",
    alternativaB : "promoveu um forte crescimento populacional que os neomalthusianos denominaram explosão demográfica.",
    alternativaC : "deu início à transição demográfica adotada pela maior parte dos países africanos e asiáticos.",
    alternativaD : "deu início à estabilização da população mundial que passou a crescer menos desde os anos de 1960.",
    correta      : "foi acompanhada na mesma intensidade pela diminuição das taxas de natalidade e de fecundidade.",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Sobre a População Brasileira é correto afirmar.",
    alternativaA : "Apresenta alto grau de movimentação interna, sendo o Centro-Oeste a região de maior repulsão populacional.",
    alternativaB : "A taxa de fecundidade da população brasileira vem aumentando significativamente no país.",
    alternativaC : "A população absoluta do Brasil e sua grande extensão territorial permitem-nos classificar o país como muito povoado, porém pouco populoso.",
    alternativaD : "A partir de meados da década de 1960, a população urbana passa a ser mais numerosa que a população rural, em razão da industrialização que se acentua desde o final da década de 1950, provocando migrações do campo para a cidade.",
    correta      : "A partir de meados da década de 1960, a população urbana passa a ser mais numerosa que a população rural, em razão da industrialização que se acentua desde o final da década de 1950, provocando migrações do campo para a cidade.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A estrutura demográfica brasileira caracteriza-se por:",
    alternativaA : "Aumento da expectativa de vida, diminuição das taxas de fecundidade e de mortalidade e aumento da população com idade superior a 60 anos",
    alternativaB : "Aumento da fecundidade, redução da expectativa de vida e aumento das imigrações, indicando crescimento da população adulta.",
    alternativaC : "Aumentos das emigrações, indicando a falta de perspectivas de vida e decréscimo na quantidade de população jovem e adulta.",
    alternativaD : "Aumento da natalidade e da expectativa de vida, indicando crescimento demográfico significativo da população de 0 a 5 anos.",
    correta      : "Aumento da expectativa de vida, diminuição das taxas de fecundidade e de mortalidade e aumento da população com idade superior a 60 anos",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Embora o Brasil esteja colocado entre os países mais populosos do mundo, quando se relaciona sua população total com a área do país, obtém-se um número relativamente baixo. A essa relação de população x área, damos o nome de:",
    alternativaA : "Taxa de crescimento.",
    alternativaB : "Densidade demográfica.",
    alternativaC : "Taxa de natalidade.",
    alternativaD : "Índice de desenvolvimento.",
    correta      : "Densidade demográfica.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Sobre a o termo POPULAÇÃO, a alternativa verdadeira é:",
    alternativaA : "A população relativa é o número total de habitantes de um local.",
    alternativaB : "Densidade demográfica é a divisão da população relativa pela área do local.",
    alternativaC : "Pode-se chamar uma área ou região de muito povoada quando ela possui uma grande população absoluta.",
    alternativaD : "As áreas onde a população absoluta é grande são chamadas de áreas de grande concentração populacional.",
    correta      : "As áreas onde a população absoluta é grande são chamadas de áreas de grande concentração populacional.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Entende-se por crescimento vegetativo ou natural a:",
    alternativaA : "saída de pessoas de um país.",
    alternativaB : "o número de óbitos.",
    alternativaC : "relação entre as taxas de natalidade e mortalidade.",
    alternativaD : "entrada de pessoas em um país.",
    correta      : "relação entre as taxas de natalidade e mortalidade.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "A Suíça possui uma área de 41.293 Km2, uma população absoluta estimada em 7 milhões de habitantes, uma renda per capita de 33.150 dólares e uma densidade demográfica de 143 hab/Km2. A partir destes dados você conclui que o país é:",
    alternativaA : "populoso e povoado.",
    alternativaB : "povoado.",
    alternativaC : "superpovoado.",
    alternativaD : "opuloso e superpovoado.",
    correta      : "povoado.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A população que, nos meses de dezembro a fevereiro, dirige-se ao litoral para veranear, pratica o que se denomina de:",
    alternativaA : "movimento sazonal periódico.",
    alternativaB : "migrações internas forçadas.",
    alternativaC : "migrações pendulares.",
    alternativaD : "migrações espontâneas.",
    correta      : "movimento sazonal periódico.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Israel possui 22.000 Km2 e uma população de 5.500.000 habitantes e uma renda per capita de 13.220 dólares. Calcule a densidade demográfica.",
    alternativaA : "25hab/Km2",
    alternativaB : "150 hab/Km2",
    alternativaC : "250hab/Km2",
    alternativaD : "2.500 hab/Km2",
    correta      : "250hab/Km2",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
