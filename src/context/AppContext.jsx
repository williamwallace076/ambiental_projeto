// import { createContext, useState, useEffect } from 'react';

// export const AppContext = createContext();

// export function AppProvider({ children }) {
//   // Estado para armazenar os equipamentos do usuário
//   const [equipamentos, setEquipamentos] = useState([]);
//   const [tarifaApi, setTarifaApi] = useState(null);
//   const [loadingTarifa, setLoadingTarifa] = useState(true);
//   // NOVOS ESTADOS: Gamificação e Missões
//   const [ecoPontos, setEcoPontos] = useState(0);
//   const [cofrinho, setCofrinho] = useState(0); // Valor real economizado em R$
//   const [missoes, setMissoes] = useState([
//     {
//       id: 1,
//       titulo: 'Desafio do Ventilador',
//       descricao: 'Desligue 1 ventilador por 2 horas hoje.',
//       pontos: 50,
//       kwhPoupado: 0.2, // Estimativa de economia em kWh
//       concluida: false
//     },
//     {
//       id: 2,
//       titulo: 'Modo Econômico',
//       descricao: 'Mantenha o Ar-condicionado em 24ºC durante a noite.',
//       pontos: 100,
//       kwhPoupado: 1.5,
//       concluida: false
//     }
//   ]);

//   // Busca a tarifa na nossa rota de API ao iniciar o app
//   useEffect(() => {
//     async function fetchTarifa() {
//       try {
//         const res = await fetch('/api/tarifa');
//         const data = await res.json();
//         setTarifaApi(data);
//       } catch (error) {
//         console.error("Erro ao carregar tarifas:", error);
//       } finally {
//         setLoadingTarifa(false);
//       }
//     }
//     fetchTarifa();
//   }, []);

//   // Funções para gerenciar o perfil de equipamentos
//   const addEquipamento = (eq) => {
//     setEquipamentos([...equipamentos, { ...eq, id: Date.now() }]);
//   };

//   const removeEquipamento = (id) => {
//     setEquipamentos(equipamentos.filter(e => e.id !== id));
//   };

//   // Função para completar a missão
//   const concluirMissao = (id) => {
//     const missao = missoes.find(m => m.id === id);
//     if (!missao || missao.concluida || !tarifaApi) return;

//     // Atualiza a missão para concluída
//     setMissoes(missoes.map(m => m.id === id ? { ...m, concluida: true } : m));
    
//     // Adiciona os pontos
//     setEcoPontos(prev => prev + missao.pontos);

//     // Calcula a economia em Reais e joga pro cofrinho
//     const valorEconomizado = missao.kwhPoupado * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira);
//     setCofrinho(prev => prev + valorEconomizado);
//   };


//   // Cálculos globais dinâmicos
//   const consumoTotalKwh = equipamentos.reduce((acc, eq) => {
//     return acc + ((eq.potencia * eq.horasDia * eq.diasMes) / 1000);
//   }, 0);

//   const custoTotal = tarifaApi 
//     ? consumoTotalKwh * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira) 
//     : 0;

//   return (
//     <AppContext.Provider value={{ 
//       equipamentos, 
//       addEquipamento, 
//       removeEquipamento, 
//       tarifaApi, 
//       loadingTarifa,
//       consumoTotalKwh, 
//       custoTotal,
//       missoes,
//       concluirMissao,
//       ecoPontos,
//       cofrinho
//     }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Estados de Equipamentos e Tarifa
  const [equipamentos, setEquipamentos] = useState([]);
  const [tarifaApi, setTarifaApi] = useState(null);
  const [loadingTarifa, setLoadingTarifa] = useState(true);

  // Estados de Gamificação e Economia
  const [ecoPontos, setEcoPontos] = useState(0);
  const [cofrinho, setCofrinho] = useState(0); // Economia Financeira (R$)
  const [kwhSaved, setKwhSaved] = useState(0); // Economia Energética (kWh)

  // Lista de Missões
  const [missoes, setMissoes] = useState([
    {
      id: 1,
      titulo: 'Desafio do Ventilador',
      descricao: 'Desligue 1 ventilador por 2 horas hoje.',
      pontos: 50,
      kwhPoupado: 0.2, // Economia estimada
      concluida: false
    },
    {
      id: 2,
      titulo: 'Modo Econômico',
      descricao: 'Mantenha o Ar-condicionado em 24ºC durante a noite.',
      pontos: 100,
      kwhPoupado: 1.5,
      concluida: false
    },
    {
      id: 3,
      titulo: 'Luz Natural',
      descricao: 'Abra as janelas e não use luz artificial até as 18h.',
      pontos: 30,
      kwhPoupado: 0.1,
      concluida: false
    }
  ]);

  // Busca tarifa (Mock API)
  useEffect(() => {
    async function fetchTarifa() {
      try {
        const res = await fetch('/api/tarifa');
        const data = await res.json();
        setTarifaApi(data);
      } catch (error) {
        console.error("Erro ao carregar:", error);
      } finally {
        setLoadingTarifa(false);
      }
    }
    fetchTarifa();
  }, []);

  // Helpers de Equipamentos
  const addEquipamento = (eq) => setEquipamentos([...equipamentos, { ...eq, id: Date.now() }]);
  const removeEquipamento = (id) => setEquipamentos(equipamentos.filter(e => e.id !== id));

  // Função Concluir Missão (Atualiza kWh e R$)
  const concluirMissao = (id) => {
    const missao = missoes.find(m => m.id === id);
    if (!missao || missao.concluida || !tarifaApi) return;

    setMissoes(missoes.map(m => m.id === id ? { ...m, concluida: true } : m));
    setEcoPontos(prev => prev + missao.pontos);
    
    // Atualiza economia física (kWh)
    setKwhSaved(prev => prev + missao.kwhPoupado);

    // Atualiza economia financeira (R$)
    const valorEconomizado = missao.kwhPoupado * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira);
    setCofrinho(prev => prev + valorEconomizado);
  };

  // Cálculos Totais do Inventário
  const consumoTotalKwh = equipamentos.reduce((acc, eq) => acc + ((eq.potencia * eq.horasDia * eq.diasMes) / 1000), 0);
  const custoTotal = tarifaApi ? consumoTotalKwh * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira) : 0;

  return (
    <AppContext.Provider value={{ 
      equipamentos, addEquipamento, removeEquipamento, 
      tarifaApi, loadingTarifa, consumoTotalKwh, custoTotal,
      missoes, concluirMissao, ecoPontos, cofrinho, kwhSaved
    }}>
      {children}
    </AppContext.Provider>
  );
}