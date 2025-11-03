    // Like simples (ao clicar no botão de "like", ele alterna entre curtir e descurtir)
    document.querySelectorAll(".like").forEach((btn) => {
      // Seleciona todos os elementos com a classe "like" e adiciona um ouvinte de evento para cada botão
      btn.addEventListener("click", () => {
        // Ao clicar, alterna a classe "active" no botão
        btn.classList.toggle("active");
        // Se o botão estiver ativo, troca o ícone para coração preenchido, senão para coração vazio
        btn.innerHTML = btn.classList.contains("active")
          ? '<i class="bi bi-heart-fill"></i>' // Ícone de coração preenchido
          : '<i class="bi bi-heart"></i>'; // Ícone de coração vazio
      });
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        AOS.init({
            offset: 120,  // A animação será acionada quando o elemento estiver a 120px da área visível
            duration: 1000, // Duração da animação em milissegundos
            once: false,  // A animação ocorrerá toda vez que o elemento entrar na tela
            easing: 'ease-in-out',  // Efeito de suavização
            delay: 100  // Delay para iniciar a animação
        });
        // Reiniciar AOS ao navegar ou atualizar a página
        window.addEventListener('load', AOS.refresh);
    });

    // Filtro por categoria via data-attributes (para filtrar os itens da página com base na categoria clicada)
    const chips = document.querySelectorAll(".chip"); // Seleciona todos os botões de filtro (chips)
    const items = Array.from(document.querySelectorAll(".masonry-item")); // Converte a lista de itens para um array
    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        // Adiciona um ouvinte de evento de clique para cada chip (botão de filtro)
        chips.forEach((c) => c.classList.remove("active")); // Remove a classe "active" de todos os chips
        chip.classList.add("active"); // Adiciona a classe "active" ao chip clicado (destaque)
        const filtro = chip.dataset.filter; // Obtém o filtro associado ao chip clicado
        items.forEach((it) => {
          // Para cada item, verifica se ele deve ser mostrado ou não
          const show = filtro === "*" || it.dataset.cat === filtro; // Se o filtro for "*" ou a categoria do item for igual ao filtro
          it.style.display = show ? "" : "none"; // Exibe o item se o filtro combinar ou se for "*", caso contrário, oculta o item
        });
      })
    );

    // Ordenação simples (por preço ou data)
    const select = document.getElementById("ordenar"); // Seleciona o elemento de seleção de ordenação (como um dropdown)
    const masonry = document.getElementById("masonry-novidades"); // Seleciona o container de itens que será ordenado
    select.addEventListener("change", () => {
      // Adiciona um ouvinte de evento para quando o usuário mudar a seleção
      const v = select.value; // Obtém o valor selecionado (ex: "preco-asc", "preco-desc", "novo")
      const visibles = items.filter((it) => it.style.display !== "none"); // Filtra os itens visíveis (não ocultos)
      let sorted = visibles.slice(); // Cria uma cópia dos itens visíveis para ordenar
      if (v === "preco-asc") {
        // Se o valor selecionado for "preço crescente"
        sorted.sort((a, b) => +a.dataset.preco - +b.dataset.preco); // Ordena os itens pelo preço em ordem crescente
      } else if (v === "preco-desc") {
        // Se o valor selecionado for "preço decrescente"
        sorted.sort((a, b) => +b.dataset.preco - +a.dataset.preco); // Ordena os itens pelo preço em ordem decrescente
      } else if (v === "novo") {
        // Se o valor selecionado for "novo" (data de lançamento)
        sorted.sort(
          (a, b) => new Date(b.dataset.novo) - new Date(a.dataset.novo) // Ordena os itens pela data de lançamento (mais recente primeiro)
        );
      } else {
        // Se nenhuma opção de ordenação for selecionada, mantém a ordem original
        sorted = visibles;
      }
      // Reanexa os itens na ordem desejada dentro do container
      sorted.forEach((el) => masonry.appendChild(el));
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Garante que o código dentro será executado somente após o HTML ter sido completamente carregado e analisado
      AOS.init({
        // Inicializa a biblioteca AOS com as configurações personalizadas
        offset: 120, // A animação será acionada quando o elemento estiver a 120px da área visível (antes de entrar por completo)
        duration: 1000, // Duração da animação em milissegundos (1 segundo)
        once: false, // A animação ocorrerá toda vez que o elemento entrar/sair da tela (se 'true', anima só na primeira vez)
        easing: 'ease-in-out', // Efeito de suavização (como a animação acelera e desacelera)
        delay: 100 // Delay de 100ms para iniciar a animação após o elemento entrar na área visível
      });
      // Reiniciar AOS ao navegar ou atualizar a página
      window.addEventListener('load', AOS.refresh);
      // Garante que o AOS seja recalculado/reinicializado depois que *todos* os recursos (incluindo imagens) forem carregados, prevenindo problemas de posicionamento das animações
    });


