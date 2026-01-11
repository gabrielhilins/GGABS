# 🚀 GGABS Tech & Design

Bem-vindo ao repositório oficial do site da **GGABS Tech & Design**. Este projeto é a vitrine digital da nossa agência, projetado para apresentar nossos serviços de tecnologia e design, exibir nosso portfólio e facilitar o contato com clientes.

![GGABS Preview](src/assets/img/Wordmark%20Branco.png)

## 📋 Sobre o Projeto

O site foi desenvolvido como uma Single Page Application (SPA) moderna, focada em performance, experiência do usuário (UX) e uma estética visual marcante ("Space/Tech Theme"). Ele serve como hub central para:
- Apresentar serviços de **Desenvolvimento Web** e **Design Gráfico**.
- Exibir projetos realizados (Portfólio).
- Captar leads através de formulários de orçamento.
- Centralizar links sociais (Página de Links).

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas e ferramentas do ecossistema React:

*   **Core:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   **Estilização:** [SCSS (Sass)](https://sass-lang.com/) com CSS Modules e Variáveis CSS.
*   **Roteamento:** [React Router DOM](https://reactrouter.com/).
*   **Animações:**
    *   [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) para animações de entrada.
    *   [GSAP](https://greensock.com/gsap/) para animações complexas (ex: fundo estrelado).
    *   [React Typed](https://github.com/ssbeefeater/react-typed) para efeitos de digitação.
*   **Componentes UI:**
    *   [Swiper](https://swiperjs.com/) para carrosséis (Portfólio).
    *   [React Icons](https://react-icons.github.io/react-icons/) para ícones vetoriais.

## ✨ Funcionalidades Principais

1.  **Home Page Interativa:** Hero section com animações e CTA claro.
2.  **Seção de Serviços Refatorada:** Layout em Zig-Zag responsivo com filtragem por categoria (Tech/Design).
3.  **Portfólio Dinâmico:** Carrossel de projetos ordenados por data (mais recentes primeiro), com badges de status e links externos.
4.  **Página de Links:** Uma página dedicada estilo "Linktree" para bio de redes sociais.
5.  **Solicitação de Orçamento:** Rota dedicada para captação de clientes.
6.  **Página 404 Personalizada:** Com tema espacial e vídeo de fundo (Among Us).
7.  **Responsividade:** Totalmente adaptado para Mobile, Tablet e Desktop.

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:

```
src/
├── assets/        # Imagens, ícones e vídeos
├── components/    # Componentes reutilizáveis (Botões, Cards, Backgrounds)
│   └── common/    # Componentes genéricos (SocialLinks, ProjectCard, ServiceCard)
├── data/          # Dados estáticos (Serviços, Portfólio, FAQ) para fácil atualização
├── layouts/       # Componentes estruturais (Header, Footer)
├── pages/         # Páginas da aplicação (Orçamento, Links, 404, Termos)
├── sections/      # Seções da Landing Page (Hero, Serviços, Portfólio, FAQ)
├── styles/        # Estilos globais e variáveis SCSS
└── App.jsx        # Configuração de rotas e estrutura principal
```

## 🎨 Design System
O projeto utiliza um sistema de design consistente definido em `src/styles/_Variaveis.scss`, incluindo:
*   **Cores Primárias:** Azul Profundo (`#111D3E`), Branco.
*   **Gradientes:** Tons de Ciano, Roxo e Azul.
*   **Tipografia:** Responsiva via `clamp()`.

---

Desenvolvido por **GGABS Tech & Design**.