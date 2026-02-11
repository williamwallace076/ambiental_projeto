# ⚡ EcoWatt - Eficiência Energética e Educação Ambiental

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

O **EcoWatt** é uma aplicação web progressiva (PWA) focada em **educação ambiental** e **eficiência energética**. Desenvolvido com uma abordagem *mobile-first*, o app ajuda usuários a monitorarem o consumo de seus eletrodomésticos, entenderem as tarifas de energia (baseado no sistema de bandeiras tarifárias) e adotarem hábitos sustentáveis através de gamificação.

## 📱 Funcionalidades Principais

* **Calculadora de Consumo Inteligente:** Cadastro de inventário de eletrodomésticos com cálculo automático de kWh e custo em Reais (R$).
* **Integração Tarifária (Simulada):** Sistema que consulta tarifas base e bandeiras (Verde, Amarela, Vermelha) via API interna, simulando dados de concessionárias reais.
* **Monitoramento Climático:** Integração com a **Open-Meteo API** para fornecer alertas contextuais baseados na temperatura real de Belém/PA (ex: alertas de uso excessivo de ar-condicionado em dias quentes).
* **Gamificação (EcoPontos):** Sistema de missões diárias (ex: "Desligar stand-by") que recompensa o usuário com pontos e calcula a economia financeira gerada para um "Cofrinho Virtual".
* **Trilhas de Aprendizado:** Módulos educativos interativos sobre sustentabilidade e eficiência.
* **Modo Demo Preditivo (Desktop):** Uma simulação visual de notificações proativas de um Assistente IA, demonstrando o potencial futuro do app.

## 🛠️ Stack Tecnológica

* **Frontend:** Next.js (Pages Router), React Hooks.
* **Estilização:** Tailwind CSS (Design System personalizado com paleta Emerald/Gray).
* **Ícones:** Lucide React.
* **Estado Global:** React Context API (Gerenciamento de inventário, gamificação e tarifas).
* **APIs Externas:** Open-Meteo (Clima).

## 📂 Estrutura do Projeto

```text
src/
├── components/       # Componentes reutilizáveis (Header, Cards, Nav, Mockup)
├── context/          # AppContext (Lógica de negócios e estado global)
├── pages/
│   ├── api/          # API Routes (Simulação de Backend de Tarifas)
│   ├── calculator    # Gestão de dispositivos e cálculo
│   ├── mission       # Missões gamificadas
│   ├── courses       # Módulos educativos
│   ├── info          # Informações sobre bandeiras e dicas
│   └── index.jsx     # Dashboard Principal
└── styles/           # Configurações globais do Tailwind

## Roadmap e Futuro (Visão Preditiva)

O EcoWatt foi desenhado para evoluir para um Assistente Preditivo de Energia. As próximas etapas de desenvolvimento estarão disponiveis em breve. 
