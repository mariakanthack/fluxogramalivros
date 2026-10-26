// BANCO DE DADOS DE LIVROS
const BOOKS = [
    {
        id: "ano_um",
        title: "Ano Um",
        author: "Nora Roberts",
        genre: "Fantasia Distópica / Romance",
        desc: "Quando uma pandemia devasta a civilização, o poder da magia desperta nos sobreviventes. Uma jornada épica sobre reconstrução e esperança.",
        tags: ["fantasia", "distopia", "magia", "romance"]
    },
    {
        id: "uma_segunda_chance",
        title: "Uma Segunda Chance",
        author: "Colleen Hoover",
        genre: "Romance / Drama Emocional",
        desc: "Após uma tragédia e anos na prisão, Kenna tenta reconquistar a guarda de sua filha, enfrentando o perdão, o luto e um novo amor.",
        tags: ["romance", "drama", "emocional", "segunda-chance"]
    },
    {
        id: "a_empregada",
        title: "A Empregada",
        author: "Freida McFadden",
        genre: "Thriller Psicológico",
        desc: "Millie consegue um emprego de doméstica na casa da família Winchester, mas logo descobre que a perfeita fachada esconde segredos obscuros.",
        tags: ["suspense", "misterio", "reviravoltas", "domestico"]
    },
    {
        id: "nunca_minta",
        title: "Nunca Minta",
        author: "Freida McFadden",
        genre: "Thriller Psicológico / Mistério",
        desc: "Recém-casados ficam presos em uma mansão durante uma tempestade de neve e encontram fitas de sessões secretas de uma psiquiatra desaparecida.",
        tags: ["suspense", "isolamento", "segredos", "misterio"]
    },
    {
        id: "empregada_esta_de_olho",
        title: "A Empregada Está de Olho",
        author: "Freida McFadden",
        genre: "Thriller / Suspense",
        desc: "Continuando a saga de Millie, novos patrões significam novas regras e perigos ainda mais fatais. Até onde vai a lealdade de uma empregada?",
        tags: ["suspense", "misterio", "sequencia", "tenso"]
    },
    {
        id: "binding_13",
        title: "Binding 13",
        author: "Chloe Walsh",
        genre: "Romance Jovem Adulto / Esporte",
        desc: "Johnny é uma estrela do rúgbi e Shannon guarda segredos dolorosos. Uma história intensa sobre superação, família e proteção mútua.",
        tags: ["romance", "jovem-adulto", "esporte", "drama"]
    },
    {
        id: "keeping_13",
        title: "Keeping 13",
        author: "Chloe Walsh",
        genre: "Romance Jovem Adulto / Sequência",
        desc: "A continuação do romance entre Johnny e Shannon, aprofundando os sentimentos, os traumas e as batalhas que eles precisam enfrentar juntos.",
        tags: ["romance", "jovem-adulto", "emocional", "continuação"]
    },
    {
        id: "quarta_asa",
        title: "Quarta Asa",
        author: "Rebecca Yarros",
        genre: "Fantasia Épica / Romantasy",
        desc: "Violet precisa sobreviver no mortal Instituto Militar Basgiath para se tornar uma cavaleira de dragões em meio a uma guerra iminente.",
        tags: ["fantasia", "dragoes", "romantasy", "acao"]
    },
    {
        id: "jogos_vorazes",
        title: "Jogos Vorazes",
        author: "Suzanne Collins",
        genre: "Distopia / Ação",
        desc: "Em Panem, jovens são selecionados para lutar até a morte em uma arena transmitida ao vivo. Katniss Everdeen se voluntaria para salvar a irmã.",
        tags: ["distopia", "sobrevivencia", "acao", "classico-moderno"]
    },
    {
        id: "a_guarda_costas",
        title: "A Guarda-Costas",
        author: "Katherine Center",
        genre: "Comédia Romântica",
        desc: "Hannah é uma agente de proteção executiva contratada para proteger um astro de Hollywood, mas precisa se fingir de sua namorada.",
        tags: ["romance", "comedia", "falso-namoro", "leve"]
    },
    {
        id: "verity",
        title: "Verity",
        author: "Colleen Hoover",
        genre: "Thriller Romântico / Psicológico",
        desc: "Uma escritora contratada para terminar uma série encontra a autobiografia não publicada da autora original, cheia de confissões assustadoras.",
        tags: ["suspense", "chocante", "romance-sombrio", "misterio"]
    },
    {
        id: "ala_d",
        title: "Ala D",
        author: "Freida McFadden",
        genre: "Thriller Psicológico",
        desc: "Uma estudante de medicina faz um plantão noturno em uma unidade psiquiátrica trancada e cheia de segredos e pacientes perigosos.",
        tags: ["suspense", "hospitalar", "psicologico", "tenso"]
    },
    {
        id: "revolucao_dos_bichos",
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        genre: "Clássico / Sátira Política",
        desc: "Os animais de uma granja se rebelam contra os donos humanos, mas logo uma nova tirania emerge entre os próprios bichos.",
        tags: ["classico", "politica", "filosofia", "curto"]
    },
    {
        id: "metamorfose",
        title: "A Metamorfose",
        author: "Franz Kafka",
        genre: "Clássico / Existencialismo",
        desc: "Gregor Samsa acorda certa manhã transformado em um inseto gigante, desencadeando um drama sobre alienação, família e solidão.",
        tags: ["classico", "absurdo", "filosofia", "curto"]
    },
    {
        id: "dom_casmurro",
        title: "Dom Casmurro",
        author: "Machado de Assis",
        genre: "Clássico Nacional",
        desc: "Bento Santiago narra sua vida e seu amor por Capitu, atormentado pelo ciúme e pela dúvida sobre a fidelidade da amada.",
        tags: ["classico", "nacional", "psicológico", "duvida"]
    },
    {
        id: "chove_sobre_minha_infancia",
        title: "Chove Sobre Minha Infância",
        author: "Miguel Sanches Neto",
        genre: "Literatura Regional / Memórias",
        desc: "Um romance lírico e autobiográfico sobre o crescimento, as memórias do interior e as marcas da infância no Sul do Brasil.",
        tags: ["nacional", "regional", "memorias", "poetico"]
    },
    {
        id: "cartas_chilenas",
        title: "Cartas Chilenas",
        author: "Tomás Antônio Gonzaga",
        genre: "Clássico / Sátira Poética",
        desc: "Poemas satíricos que criticam a corrupção e os desmandos do governo colonial em Minas Gerais sob o pseudônimo de Critilo.",
        tags: ["classico", "nacional", "poesia", "satira"]
    },
    {
        id: "memorias_postumas",
        title: "Memórias Póstumas de Brás Cubas",
        author: "Machado de Assis",
        genre: "Clássico Nacional / Sátira",
        desc: "Um defunto autor narra sua vida com ironia, acidez e perspicácia, desconstruindo a sociedade brasileira do século XIX.",
        tags: ["classico", "nacional", "ironia", "filosofia"]
    }
];

// AS 15 PERGUNTAS DO QUESTIONÁRIO
const QUESTIONS = [
    {
        q: "1. Qual é o seu objetivo principal ao abrir um livro hoje?",
        options: [
            { text: "Sentir fortes emoções ou se apaixonar", tag: "romance" },
            { text: "Ficar tenso com mistérios e reviravoltas", tag: "suspense" },
            { text: "Escapar para mundos mágicos ou universos distópicos", tag: "fantasia" },
            { text: "Refletir sobre a vida e ler alta literatura/clássicos", tag: "classico" }
        ]
    },
    {
        q: "2. Em qual cenário você prefere que a história se passe?",
        options: [
            { text: "Uma mansão isolada ou ambiente hospitalar fechado", tag: "suspense" },
            { text: "Academias de dragões ou mundos pós-apocalípticos", tag: "fantasia" },
            { text: "Escolas, universidades ou campos de esporte", tag: "jovem-adulto" },
            { text: "O Brasil histórico ou o interior do país", tag: "nacional" }
        ]
    },
    {
        q: "3. Que ritmo de leitura você procura no momento?",
        options: [
            { text: "Alucinante! Que não me deixe parar de virar as páginas", tag: "suspense" },
            { text: "Fluido, leve e que aqueça o coração", tag: "romance" },
            { text: "Denso, poético ou ironicamente filosófico", tag: "classico" },
            { text: "Uma leitura envolvente focada em crescimento de personagens", tag: "jovem-adulto" }
        ]
    },
    {
        q: "4. Qual tipo de protagonista te atrai mais?",
        options: [
            { text: "Uma pessoa comum com um passado sombrio ou segredos", tag: "suspense" },
            { text: "Uma jovem determinada lutando contra sistemas perigosos", tag: "distopia" },
            { text: "Personagens imperfeitos tentando superar traumas do passado", tag: "emocional" },
            { text: "Narradores irônicos ou observadores da sociedade", tag: "classico" }
        ]
    },
    {
        q: "5. Se a história tiver romance, como ele deve ser?",
        options: [
            { text: "Central, arrebatador e com muita química", tag: "romance" },
            { text: "Lento, protetor e focado no companheirismo (Found Family)", tag: "jovem-adulto" },
            { text: "Um romance sombrio envolto em obsessão e perigo", tag: "chocante" },
            { text: "Secundário ou nem precisa ter romance", tag: "classico" }
        ]
    },
    {
        q: "6. Qual elemento surpresa você mais gosta?",
        options: [
            { text: "Um 'plot twist' no final que mude tudo o que eu pensei", tag: "reviravoltas" },
            { text: "Batalhas épicas e revelações sobre poderes mágicos", tag: "magia" },
            { text: "Conflitos emocionais intensos e reencontros", tag: "segunda-chance" },
            { text: "Ironias ácidas e críticas à natureza humana", tag: "ironia" }
        ]
    },
    {
        q: "7. Que tamanho de livro você prefere para esta leitura?",
        options: [
            { text: "Curto e direto ao ponto (para ler rápido)", tag: "curto" },
            { text: "Médio, muito bem ritmado", tag: "suspense" },
            { text: "Um calhamaço épico para me afundar na história", tag: "fantasia" },
            { text: "Séries longas com mais de um volume", tag: "continuação" }
        ]
    },
    {
        q: "8. Qual o seu nível de tolerância para momentos tensos ou perturbadores?",
        options: [
            { text: "Quero choque! Mistério psicológico e ambientes claustrofóbicos", tag: "chocante" },
            { text: "Gosto de ação e perigo, mas sem horror psicológico extremo", tag: "acao" },
            { text: "Prefiro drama humano focado em sentimentos e superação", tag: "drama" },
            { text: "Zero tensão: quero uma leitura acolhedora ou divertida", tag: "leve" }
        ]
    },
    {
        q: "9. Se tivesse que escolher um tema central agora:",
        options: [
            { text: "Segredos de família e empregadas que veem demais", tag: "domestico" },
            { text: "Sobrevivência em uma sociedade opressora ou em crise", tag: "distopia" },
            { text: "Superação de traumas e o poder do perdão", tag: "emocional" },
            { text: "Retrato da sociedade brasileira e suas imperfeições", tag: "nacional" }
        ]
    },
    {
        q: "10. Qual estilo de narrativa você prefere?",
        options: [
            { text: "Primeira pessoa rápida e viciante", tag: "suspense" },
            { text: "Dupla perspectiva (POV dos dois protagonistas)", tag: "romance" },
            { text: "Narrativa póstuma, poética ou epistolar (cartas)", tag: "classico" },
            { text: "Visão em 3ª pessoa focada na ação do mundo", tag: "fantasia" }
        ]
    },
    {
        q: "11. O que você acha de histórias com tom político ou social?",
        options: [
            { text: "Adoro alegorias e sátiras sobre poder e corrupção", tag: "politica" },
            { text: "Prefiro quando a política serve de pano de fundo para ação/distopia", tag: "distopia" },
            { text: "Prefiro quando o foco é o drama íntimo das pessoas", tag: "drama" },
            { text: "Não me importo, contanto que o romance/suspense seja bom", tag: "romance" }
        ]
    },
    {
        q: "12. Qual destas tropes (clichês literários) mais te atrai?",
        options: [
            { text: "Enemies to Lovers (Inimigos que se apaixonam)", tag: "romantasy" },
            { text: "Fake Dating (Namoro de mentira)", tag: "falso-namoro" },
            { text: "O narrador não confiável (Ele pode estar mentindo?)", tag: "psicológico" },
            { text: "Atleta popular & garota quieta com passado difícil", tag: "esporte" }
        ]
    },
    {
        q: "13. Quanto à nacionalidade do autor/ambientação:",
        options: [
            { text: "Quero valorizar a literatura brasileira (Clássica ou Contemporânea)", tag: "nacional" },
            { text: "Prefiro os Bestsellers internacionais contemporâneos", tag: "suspense" },
            { text: "Tanto faz, quero apenas uma boa história", tag: "romance" },
            { text: "Prefiro clássicos universais da literatura", tag: "classico" }
        ]
    },
    {
        q: "14. Como você lida com finais abertos ou duvidosos?",
        options: [
            { text: "Adoro a dúvida eterna (ex: 'traiu ou não traiu?')", tag: "duvida" },
            { text: "Quero resoluções completas e finais felizes garantidos", tag: "romance" },
            { text: "Gosto de finais com reviravoltas chocantes que me deixem de queixo caído", tag: "reviravoltas" },
            { text: "Gosto de finais que me façam pensar criticamente sobre a sociedade", tag: "filosofia" }
        ]
    },
    {
        q: "15. Para fechar: Qual frase te dá mais vontade de ler?",
        options: [
            { text: "'O que acontece atrás das portas trancadas desta casa?'", tag: "domestico" },
            { text: "'Eu mataria por você. Eu morreria por você.'", tag: "romantasy" },
            { text: "'Nem tudo o que parece, é. E nem todos são quem dizem ser.'", tag: "suspense" },
            { text: "'O tempo tudo apaga, mas as memórias permanecem marcadas.'", tag: "memorias" }
        ]
    }
];

// ESTADO DA APLICAÇÃO
let currentQuestionIndex = 0;
let userAnswers = [];

// AGUARDA O CARREGAMENTO COMPLETO DO DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // ELEMENTOS DOM
    const welcomeScreen = document.getElementById('welcomeScreen');
    const quizScreen = document.getElementById('quizScreen');
    const resultScreen = document.getElementById('resultScreen');

    const startBtn = document.getElementById('startBtn');
    const prevBtn = document.getElementById('prevBtn');
    const resetAppBtn = document.getElementById('resetAppBtn');
    const restartBtn = document.getElementById('restartBtn');

    const questionCounter = document.getElementById('questionCounter');
    const percentCounter = document.getElementById('percentCounter');
    const progressBar = document.getElementById('progressBar');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');

    const bookTitle = document.getElementById('bookTitle');
    const bookAuthor = document.getElementById('bookAuthor');
    const bookGenre = document.getElementById('bookGenre');
    const bookDesc = document.getElementById('bookDesc');

    const flowchartNodes = document.getElementById('flowchartNodes');

    // REGISTRO DE EVENTOS DOS BOTÕES
    if (startBtn) startBtn.addEventListener('click', startQuiz);
    if (prevBtn) prevBtn.addEventListener('click', goToPreviousQuestion);
    if (resetAppBtn) resetAppBtn.addEventListener('click', resetQuiz);
    if (restartBtn) restartBtn.addEventListener('click', resetQuiz);

    function startQuiz() {
        welcomeScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');
        if (resetAppBtn) resetAppBtn.style.display = 'block';
        
        currentQuestionIndex = 0;
        userAnswers = [];
        renderQuestion();
    }

    function resetQuiz() {
        welcomeScreen.classList.add('active');
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        if (resetAppBtn) resetAppBtn.style.display = 'none';
    }

    function renderQuestion() {
        const qData = QUESTIONS[currentQuestionIndex];
        if (!qData) return;
        
        const progress = Math.round((currentQuestionIndex / QUESTIONS.length) * 100);
        if (questionCounter) questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${QUESTIONS.length}`;
        if (percentCounter) percentCounter.innerText = `${progress}%`;
        if (progressBar) progressBar.style.width = `${progress}%`;

        if (questionText) questionText.innerText = qData.q;
        
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            qData.options.forEach((opt) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerHTML = `
                    <span>${escapeHtml(opt.text)}</span>
                    <i class="fa-solid fa-circle-check"></i>
                `;
                btn.addEventListener('click', () => handleOptionSelect(opt));
                optionsContainer.appendChild(btn);
            });
        }

        if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
    }

    function handleOptionSelect(option) {
        userAnswers[currentQuestionIndex] = {
            questionIndex: currentQuestionIndex,
            questionText: QUESTIONS[currentQuestionIndex].q,
            answerText: option.text,
            tag: option.tag
        };

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            finishQuiz();
        }
    }

    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    }

    function finishQuiz() {
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');

        const tagCounts = {};
        userAnswers.forEach(ans => {
            if (ans && ans.tag) {
                tagCounts[ans.tag] = (tagCounts[ans.tag] || 0) + 1;
            }
        });

        let bestBook = BOOKS[0];
        let maxScore = -1;

        BOOKS.forEach(book => {
            let score = 0;
            book.tags.forEach(tag => {
                if (tagCounts[tag]) {
                    score += tagCounts[tag] * 2;
                }
            });
            
            if (score > maxScore) {
                maxScore = score;
                bestBook = book;
            }
        });

        if (bookTitle) bookTitle.innerText = bestBook.title;
        if (bookAuthor) bookAuthor.innerText = bestBook.author;
        if (bookGenre) bookGenre.innerText = bestBook.genre;
        if (bookDesc) bookDesc.innerText = bestBook.desc;

        renderVisualFlowchart(bestBook);
    }

    function renderVisualFlowchart(finalBook) {
        if (!flowchartNodes) return;
        flowchartNodes.innerHTML = '';

        userAnswers.forEach((ans, idx) => {
            if (!ans) return;
            const node = document.createElement('div');
            node.className = 'flow-node';
            node.innerHTML = `
                <div class="node-number">${idx + 1}</div>
                <div class="node-content">
                    <div class="node-question">Etapa ${idx + 1}</div>
                    <div class="node-answer">${escapeHtml(ans.answerText)}</div>
                </div>
            `;
            flowchartNodes.appendChild(node);
        });

        const finalNode = document.createElement('div');
        finalNode.className = 'flow-node';
        finalNode.innerHTML = `
            <div class="node-number" style="background: var(--pastel-purple-dark); color: #fff;"><i class="fa-solid fa-flag-checkered"></i></div>
            <div class="node-content" style="border-color: var(--pastel-purple-dark);">
                <div class="node-question" style="color: #6b21a8; font-weight:700;">RECOMENDAÇÃO FINAL</div>
                <div class="node-answer" style="font-size:1rem;">📖 ${escapeHtml(finalBook.title)}</div>
            </div>
        `;
        flowchartNodes.appendChild(finalNode);
    }

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.innerText = text;
        return div.innerHTML;
    }
});