<div align="center">

# Meteora Artigos de Vestuário

Landing page responsiva para uma loja virtual de moda, desenvolvida para demonstrar a aplicação do Bootstrap 5 em um design escuro e vibrante, com filtros de produtos, carrossel e animações de rolagem.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

[![Ver projeto](https://img.shields.io/badge/Ver_projeto-3642B5?style=for-the-badge&logo=googlechrome&logoColor=white)](https://otavio-2507.github.io/Meteora-Artigos-de-Vestuario/)
[![Código](https://img.shields.io/badge/C%C3%B3digo-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/OTAVIO-2507/Meteora-Artigos-de-Vestuario)

<br>

[![Prévia do projeto](assets/img/preview.jpg)](https://otavio-2507.github.io/Meteora-Artigos-de-Vestuario/)

</div>

## Visão geral

O Meteora simula a vitrine completa de um e-commerce de moda: navegação fixa, carrossel de banners, grade de categorias, listagem de produtos com filtros e ordenação dinâmica, e página adicional de lojas físicas. O foco do estudo foi dominar o sistema de grid, os componentes prontos e a abordagem mobile-first do Bootstrap 5, complementados por JavaScript próprio para a camada de interatividade.

## Funcionalidades

- Layout responsivo mobile-first para celular, tablet e desktop
- Carrossel de banners e navbar colapsável com componentes do Bootstrap
- Filtros por categoria e ordenação dinâmica de produtos em JavaScript
- Grade de produtos em layout adaptado estilo masonry
- Animações de entrada ao rolar a página com a biblioteca AOS
- Páginas complementares de lojas físicas, novidades e promoções

## Decisões de projeto

Algumas escolhas que não são óbvias pelo código:

**Filtro e ordenação se compõem em vez de competir.** A ordenação não trabalha sobre a lista inteira: ela recolhe antes só os itens visíveis (`it.style.display !== "none"`) e reordena esse recorte. Assim, filtrar por categoria e depois ordenar por preço produz o resultado esperado, em vez de a segunda ação desfazer a primeira.

**Categoria e preço moram no HTML, não em JavaScript.** `data-cat` e `data-preco` ficam nos próprios cards, então filtrar e ordenar é ler atributo do DOM — não existe um array paralelo de produtos que possa sair de sincronia com o que está na tela.

**O like troca o ícone, não a cor.** Alternar entre `bi-heart` e `bi-heart-fill` distingue os dois estados pela forma, e não só pelo preenchimento — o que sobrevive a tela em preto e branco e a quem não separa bem os matizes.

## Tecnologias

| Tecnologia | Aplicação no projeto |
| --- | --- |
| Bootstrap 5.3 | Grid, navbar, carrossel, cards e utilitários responsivos |
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilos personalizados, variáveis e gradientes |
| JavaScript (ES6+) | Filtros, ordenação e interações de produtos |
| AOS | Animações de entrada ao rolar |
| Bootstrap Icons | Iconografia da interface |

## Como executar

```bash
git clone https://github.com/OTAVIO-2507/Meteora-Artigos-de-Vestuario.git
cd Meteora-Artigos-de-Vestuario
```

Abra o arquivo `index.html` no navegador. As dependências são carregadas via CDN.

## Estrutura do projeto

```
Meteora-Artigos-de-Vestuario/
├── index.html              Página principal da loja
├── Lojas.html              Lojas físicas
├── novidades.html          Novidades
├── promocoes.html          Promoções
└── assets/
    ├── style/estilos.css   Estilos personalizados
    ├── javascript/         Filtros, ordenação e interações
    └── ...                 Banners, categorias e produtos
```

