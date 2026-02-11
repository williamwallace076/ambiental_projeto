//////////////////////tentativa que verifica a tarifa mensal automatica ////////////////


// import { useState, useEffect } from 'react';
// import Card from '../components/Card';
// import { Calculator as CalcIcon, RefreshCw } from 'lucide-react';

// // Dicionário de potência média (em Watts) para cálculo invisível
// const POTENCIA_APARELHOS = {
//   'Ar-condicionado (12000 BTUs)': 1400,
//   'Geladeira Frost Free': 300,
//   'Chuveiro Elétrico': 5500,
//   'Ventilador de Mesa': 100,
//   'Televisão (50 polegadas)': 150,
// };

// export default function Calculator() {
//   const [tarifaApi, setTarifaApi] = useState(null);
//   const [loadingTarifa, setLoadingTarifa] = useState(true);
  
//   // Estados do formulário
//   const [aparelho, setAparelho] = useState('');
//   const [horas, setHoras] = useState('');
//   const [dias, setDias] = useState('');
//   const [resultado, setResultado] = useState(null);

//   // Busca a tarifa real na montagem do componente
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

//   const calcularGasto = (e) => {
//     e.preventDefault();
//     if (!aparelho || !horas || !dias || !tarifaApi) return;

//     const potenciaWatts = POTENCIA_APARELHOS[aparelho];
    
//     // Cálculo: (Potência (W) * Horas * Dias) / 1000 = Consumo em kWh
//     const consumoKwh = (potenciaWatts * parseFloat(horas) * parseFloat(dias)) / 1000;
    
//     // Custo Total = Consumo * (Tarifa Base + Adicional da Bandeira)
//     const custoTarifa = tarifaApi.tarifaBase + tarifaApi.adicionalBandeira;
//     const custoTotal = consumoKwh * custoTarifa;

//     setResultado({
//       consumoKwh: consumoKwh.toFixed(2),
//       custoTotal: custoTotal.toFixed(2)
//     });
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-gray-800">Simulador de Gastos</h2>
      
//       <Card>
//         <form onSubmit={calcularGasto} className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Aparelho</label>
//             <select 
//               value={aparelho} 
//               onChange={(e) => setAparelho(e.target.value)}
//               className="border border-gray-400 rounded p-2 text-sm bg-white"
//               required
//             >
//               <option value="">Selecione um aparelho</option>
//               {Object.keys(POTENCIA_APARELHOS).map(item => (
//                 <option key={item} value={item}>{item}</option>
//               ))}
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Horas de uso por dia</label>
//             <input 
//               type="number" 
//               value={horas} 
//               onChange={(e) => setHoras(e.target.value)}
//               placeholder="Ex: 8" 
//               className="border border-gray-400 rounded p-2 text-sm bg-white" 
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Dias de uso por mês</label>
//             <input 
//               type="number" 
//               value={dias} 
//               onChange={(e) => setDias(e.target.value)}
//               placeholder="Ex: 30" 
//               className="border border-gray-400 rounded p-2 text-sm bg-white" 
//               required
//             />
//           </div>

//           {/* Dados dinâmicos da API */}
//           <div className="bg-gray-200 p-3 rounded border border-gray-300">
//             {loadingTarifa ? (
//               <div className="flex items-center text-sm text-gray-600 gap-2">
//                 <RefreshCw className="w-4 h-4 animate-spin" /> Conectando à concessionária...
//               </div>
//             ) : (
//               <div className="text-sm text-gray-800 space-y-1">
//                 <p><strong>Tarifa Base Atual:</strong> R$ {tarifaApi?.tarifaBase} / kWh</p>
//                 <p>
//                   <strong>Bandeira:</strong> {tarifaApi?.bandeiraAtual} 
//                   <span className="text-xs text-gray-500 ml-1">(+ R$ {tarifaApi?.adicionalBandeira} / kWh)</span>
//                 </p>
//               </div>
//             )}
//           </div>
          
//           <button 
//             type="submit" 
//             disabled={loadingTarifa}
//             className="w-full mt-4 flex items-center justify-center gap-2 bg-white border-2 border-gray-800 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
//           >
//             <CalcIcon className="w-5 h-5" />
//             Calcular gasto
//           </button>
//         </form>

//         {/* Exibição do Resultado */}
//         {resultado && (
//           <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-center">
//             <p className="text-sm text-green-800 mb-1">Consumo estimado: <strong>{resultado.consumoKwh} kWh</strong></p>
//             <p className="text-2xl font-bold text-green-900">R$ {resultado.custoTotal}</p>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// }


// ///////////// versao que integra o dashboard adicionando dispositivos ///////////

// import { useState, useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import Card from '../components/Card';
// import { Plus, Trash2, Zap } from 'lucide-react';

// const POTENCIA_APARELHOS = {
//   'Ar-condicionado (12000 BTUs)': 1400,
//   'Geladeira Frost Free': 300,
//   'Chuveiro Elétrico': 5500,
//   'Ventilador de Mesa': 100,
//   'Televisão (50 polegadas)': 150,
// };

// export default function Calculator() {
//   const { equipamentos, addEquipamento, removeEquipamento, tarifaApi } = useContext(AppContext);
  
//   const [aparelho, setAparelho] = useState('');
//   const [horas, setHoras] = useState('');
//   const [dias, setDias] = useState('');

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!aparelho || !horas || !dias) return;

//     addEquipamento({
//       nome: aparelho,
//       potencia: POTENCIA_APARELHOS[aparelho],
//       horasDia: parseFloat(horas),
//       diasMes: parseFloat(dias)
//     });

//     // Limpa o form
//     setAparelho(''); setHoras(''); setDias('');
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-gray-800">Meus Equipamentos</h2>
      
//       <Card>
//         <form onSubmit={handleAdd} className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Aparelho</label>
//             <select value={aparelho} onChange={(e) => setAparelho(e.target.value)} className="border border-gray-400 rounded p-2 text-sm bg-white" required>
//               <option value="">Selecione um aparelho</option>
//               {Object.keys(POTENCIA_APARELHOS).map(item => (
//                 <option key={item} value={item}>{item}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex gap-4">
//             <div className="flex flex-col w-1/2">
//               <label className="text-sm text-gray-700 mb-1">Horas/dia</label>
//               <input type="number" value={horas} onChange={(e) => setHoras(e.target.value)} placeholder="Ex: 8" className="border border-gray-400 rounded p-2 text-sm bg-white" required />
//             </div>
//             <div className="flex flex-col w-1/2">
//               <label className="text-sm text-gray-700 mb-1">Dias/mês</label>
//               <input type="number" value={dias} onChange={(e) => setDias(e.target.value)} placeholder="Ex: 30" className="border border-gray-400 rounded p-2 text-sm bg-white" required />
//             </div>
//           </div>
          
//           <button type="submit" className="w-full mt-2 flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition">
//             <Plus className="w-5 h-5" /> Adicionar ao Perfil
//           </button>
//         </form>
//       </Card>

//       {/* Lista de equipamentos salvos */}
//       {equipamentos.length > 0 && (
//         <section>
//           <h3 className="font-semibold text-gray-800 mb-3">Aparelhos Registrados ({equipamentos.length})</h3>
//           <div className="space-y-3">
//             {equipamentos.map(eq => {
//               const consumoItem = ((eq.potencia * eq.horasDia * eq.diasMes) / 1000);
//               const custoItem = tarifaApi ? consumoItem * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira) : 0;

//               return (
//                 <div key={eq.id} className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center shadow-sm">
//                   <div>
//                     <h4 className="font-bold text-sm text-gray-800">{eq.nome}</h4>
//                     <p className="text-xs text-gray-500">{eq.horasDia}h/dia • {eq.diasMes} dias/mês</p>
//                     <p className="text-xs font-semibold text-green-700 mt-1 flex items-center gap-1">
//                       <Zap className="w-3 h-3" /> {consumoItem.toFixed(1)} kWh (R$ {custoItem.toFixed(2)})
//                     </p>
//                   </div>
//                   <button onClick={() => removeEquipamento(eq.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full transition">
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import { Plus, Trash2, Zap, Info, RefreshCw, AlertTriangle } from 'lucide-react';

const POTENCIA_APARELHOS = {
  'Ar-condicionado (12000 BTUs)': 1400,
  'Geladeira Frost Free': 300,
  'Chuveiro Elétrico': 5500,
  'Ventilador de Mesa': 100,
  'Televisão (50 polegadas)': 150,
  'Máquina de Lavar': 1000,
  'Ferro de Passar': 1200,
  'Computador Gamer': 400,
};

export default function Calculator() {
  // Consumindo dados do Contexto (Tarifa vem da API Global agora)
  const { equipamentos, addEquipamento, removeEquipamento, tarifaApi, loadingTarifa } = useContext(AppContext);
  
  // Estados locais do formulário
  const [aparelho, setAparelho] = useState('');
  const [horas, setHoras] = useState('');
  const [dias, setDias] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!aparelho || !horas || !dias) return;

    addEquipamento({
      nome: aparelho,
      potencia: POTENCIA_APARELHOS[aparelho],
      horasDia: parseFloat(horas),
      diasMes: parseFloat(dias)
    });

    // Limpa o form após adicionar
    setAparelho(''); 
    setHoras(''); 
    setDias('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Simulador de Gastos</h2>

      {/* SEÇÃO 1: INFORMATIVA (Tarifa Atual da Concessionária) */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-blue-700" />
          <h3 className="font-bold text-blue-800">Tarifa Vigente (Concessionária)</h3>
        </div>

        {loadingTarifa ? (
          <div className="flex items-center text-sm text-gray-600 gap-2 py-2">
            <RefreshCw className="w-4 h-4 animate-spin" /> Atualizando dados da rede...
          </div>
        ) : tarifaApi ? (
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded border border-blue-100">
              <span className="text-sm text-gray-600">Valor do kWh (Base)</span>
              <span className="font-bold text-gray-800">R$ {tarifaApi.tarifaBase.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center bg-white p-3 rounded border border-blue-100">
              <span className="text-sm text-gray-600">Bandeira Atual</span>
              <div className="text-right">
                <span className={`font-bold block ${
                  tarifaApi.bandeiraAtual.includes('Vermelha') ? 'text-red-600' : 
                  tarifaApi.bandeiraAtual.includes('Amarela') ? 'text-yellow-600' : 'text-green-600'
                }`}>
                  {tarifaApi.bandeiraAtual}
                </span>
                <span className="text-xs text-gray-500">
                  + R$ {tarifaApi.adicionalBandeira} / kWh
                </span>
              </div>
            </div>

            {/* Alerta contextual se a bandeira for cara */}
            {(tarifaApi.bandeiraAtual.includes('Amarela') || tarifaApi.bandeiraAtual.includes('Vermelha')) && (
              <div className="flex gap-2 items-start text-xs text-orange-800 bg-orange-100 p-2 rounded">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                <p>Cuidado: A tarifa está mais cara este mês. Otimize o uso dos aparelhos abaixo.</p>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-red-500">Erro ao carregar informações da tarifa.</p>
        )}
      </Card>
      
      {/* SEÇÃO 2: FORMULÁRIO DE CADASTRO */}
      <h2 className="text-lg font-bold text-black pt-2">Adicionar Aparelho</h2>
      <Card>
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Aparelho</label>
            <select 
              value={aparelho} 
              onChange={(e) => setAparelho(e.target.value)} 
              className="border border-gray-400 rounded p-2 text-sm bg-white text-black" 
              required
            >
              <option value="">Selecione um aparelho</option>
              {Object.keys(POTENCIA_APARELHOS).map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-700 mb-1">Horas/dia</label>
              <input 
                type="number" 
                value={horas} 
                onChange={(e) => setHoras(e.target.value)} 
                placeholder="Ex: 8" 
                className="border border-gray-400 rounded p-2 text-sm bg-white text-black" 
                required 
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-700 mb-1">Dias/mês</label>
              <input 
                type="number" 
                value={dias} 
                onChange={(e) => setDias(e.target.value)} 
                placeholder="Ex: 30" 
                className="border border-gray-400 rounded p-2 text-sm bg-white text-black" 
                required 
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full mt-2 flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <Plus className="w-5 h-5" /> Adicionar ao Perfil
          </button>
        </form>
      </Card>

      {/* SEÇÃO 3: LISTA DE EQUIPAMENTOS */}
      {equipamentos.length > 0 && (
        <section>
          <div className="flex justify-between items-end mb-3">
            <h3 className="font-semibold text-gray-800">Aparelhos Registrados ({equipamentos.length})</h3>
            <span className="text-xs text-gray-500">Custo base no valor atual</span>
          </div>
          
          <div className="space-y-3">
            {equipamentos.map(eq => {
              // Cálculos individuais
              const consumoItem = ((eq.potencia * eq.horasDia * eq.diasMes) / 1000);
              const custoItem = tarifaApi 
                ? consumoItem * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira) 
                : 0;

              return (
                <div key={eq.id} className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center shadow-sm">
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">{eq.nome}</h4>
                    <p className="text-xs text-gray-500">{eq.horasDia}h/dia • {eq.diasMes} dias/mês</p>
                    <p className="text-xs font-semibold text-green-700 mt-1 flex items-center gap-1">
                      <Zap className="w-3 h-3" /> {consumoItem.toFixed(1)} kWh (R$ {custoItem.toFixed(2)})
                    </p>
                  </div>
                  <button 
                    onClick={() => removeEquipamento(eq.id)} 
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}