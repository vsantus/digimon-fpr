# 🚀 Digimon App — Teste Front-end

Este projeto foi desenvolvido como teste técnico para a vaga de Front-end na **FPR Soluções**. A aplicação utiliza a [API Digimon](https://digimon-api.vercel.app/) para exibir informações sobre os Digimons.

---

## 💻 Tecnologias Utilizadas

* **React** — Biblioteca para construção de interfaces de usuário.
* **Sass (SCSS)** — Pré-processador CSS para organização e reaproveitamento de estilos.
* **React Router DOM** — Gerenciamento de rotas e navegação entre páginas.
* **API Digimon** — Fonte de dados dos Digimons.
* **Lucide React** — Biblioteca de ícones para compor a interface.

---

## 🏠 Página Inicial

* Campo de busca para pesquisar Digimons pelo nome.
* Exibição de um ícone superior que muda dinamicamente com o Digimon selecionado.
* Botão para visualizar todos os Digimons (redireciona para a listagem completa).
* Botão de seleção de tema (vários temas disponíveis e persistentes).
* Layout responsivo.

---

## 📄 Página de Todos os Digimons

* Listagem paginada (12 Digimons por página).
* Filtro por nome e nível (In Training, Rookie, Champion, Ultimate, Mega).
* Seleção de Digimon como favorito (modal de confirmação).
* Atualização do ícone superior com o favorito escolhido.
* Navegação entre páginas com botões de próximo e anterior.

---

## ⭐ Funcionalidades Extras

* Modal de confirmação ao selecionar um Digimon favorito.
* Tema persistente entre as páginas.
* Atualização global do Digimon favorito usando Context API.

---

## ⚙️ Como Executar

1️⃣ Clone o repositório:

```bash
git clone https://github.com/vsantus/digimon-fpr.git
```

2️⃣ Acesse o diretório do projeto:

```bash
cd digimon-fpr
```

3️⃣ Instale as dependências:

```bash
npm install
```

4️⃣ Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5️⃣ Acesse em [http://localhost:4000](http://localhost:4000) ou a porta configurada no seu ambiente.

---

## 📝 Notas

* Todas as funcionalidades principais foram concluídas: busca, seleção de Digimon favorito, filtros, modal de confirmação e troca de tema.
* O layout está responsivo, adaptado para desktop (ex.: 1366px) e mobile.
* Caso queira contribuir ou sugerir melhorias, fique à vontade para abrir issues ou pull requests.

---

Desenvolvido por [Vinicius Santos](https://www.linkedin.com/in/vsantus/).

---
