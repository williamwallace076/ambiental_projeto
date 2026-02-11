# 🍃 Ambiental Software - App de Educação e Eficiência Energética

Um mini aplicativo gamificado desenvolvido para conscientizar usuários sobre o consumo de energia elétrica. O app permite o cálculo de gastos de eletrodomésticos com base em tarifas reais (simuladas via API), além de oferecer módulos educativos e um sistema de "EcoPontos" com cofrinho virtual.

## 🛠️ Stack Tecnológica

* **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
* **Biblioteca UI:** [React](https://reactjs.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Gerenciamento de Estado:** Context API (Nativo do React)

## 📂 Estrutura de Diretórios

O projeto foi arquitetado para máxima reutilização de componentes e separação de responsabilidades:

\`\`\`text
projeto_ambiental/
├── components/
│   ├── BottomNav.jsx    # Menu de navegação inferior
│   ├── Card.jsx         # Wrapper base para os blocos de conteúdo
│   ├── Header.jsx       # Cabeçalho global do app
│   └── Layout.jsx       # Layout base simulando a tela mobile
├── context/
│   └── AppContext.jsx   # Estado global (Equipamentos, Gamificação, Tarifa)
├── pages/
│   ├── api/
│   │   └── tarifa.js    # Rota mockada simulando a API da concessionária
│   ├── _app.js          # Entrypoint configurado com Layout e Provider
│   ├── calculator.jsx   # Gestão de aparelhos e cálculo de consumo
│   ├── courses.jsx      # Trilhas de conhecimento e pílulas em carrossel
│   ├── index.jsx        # Dashboard principal (Visão Geral e Cofrinho)
│   ├── info.jsx         # FAQ e dados sobre bandeiras tarifárias
│   └── mission.jsx      # Missões diárias e gamificação
\`\`\`

## 🚀 Como rodar o projeto localmente

### 1. Inicialize o projeto Next.js
Crie o projeto base. Quando o terminal perguntar se deseja usar o **App Router**, selecione **No** (para usarmos a pasta `pages/`). Responda **Yes** para Tailwind CSS.

\`\`\`bash
npx create-next-app@latest app_ambiental
cd app_ambiental
\`\`\`

### 2. Instale as dependências adicionais
A única dependência externa além do escopo padrão do Next.js são os ícones.

\`\`\`bash
npm install lucide-react
\`\`\`

### 3. Configuração do Tailwind CSS
Verifique se o seu arquivo `tailwind.config.js` está apontando para as pastas corretas para que o Next.js compile as classes:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`


### 4. Inicie o servidor de desenvolvimento
\`\`\`bash
npm run dev
\`\`\`

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000). Para a melhor experiência de visualização, abra o DevTools do navegador (F12) e ative o **Modo Mobile** (Ctrl+Shift+M), já que o layout foi otimizado para telas de celular.

## 🧠 Lógica de Negócio Destacada

* **Cálculo de Consumo:** `(Potência (W) * Horas * Dias) / 1000 = kWh`
* **Integração de Tarifa:** Utiliza uma Rota de API (`/api/tarifa.js`) para simular a busca de valores de tarifa base e bandeiras tarifárias em tempo real.
* **Gamificação:** Sistema de conclusão de missões via Context API que converte `kWh` poupado em Reais (`R$`) no painel de "Cofrinho" do Dashboard.