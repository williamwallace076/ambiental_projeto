// import { useState, useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import Card from '../components/Card';
// import { Plus, Trash2, Zap, Info, RefreshCw, AlertTriangle } from 'lucide-react';

// const POTENCIA_APARELHOS = {
//   'Ar-condicionado (12000 BTUs)': 1400,
//   'Geladeira Frost Free': 300,
//   'Chuveiro Elétrico': 5500,
//   'Ventilador de Mesa': 100,
//   'Televisão (50 polegadas)': 150,
//   'Máquina de Lavar': 1000,
//   'Ferro de Passar': 1200,
//   'Computador Gamer': 400,
// };

// export default function Calculator() {
//   // Consumindo dados do Contexto (Tarifa vem da API Global agora)
//   const { equipamentos, addEquipamento, removeEquipamento, tarifaApi, loadingTarifa } = useContext(AppContext);
  
//   // Estados locais do formulário
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

//     // Limpa o form após adicionar
//     setAparelho(''); 
//     setHoras(''); 
//     setDias('');
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-gray-800">Simulador de Gastos</h2>

//       {/* SEÇÃO 1: INFORMATIVA (Tarifa Atual da Concessionária) */}
//       <Card className="bg-blue-50 border-blue-200">
//         <div className="flex items-center gap-2 mb-3">
//           <Info className="w-5 h-5 text-blue-700" />
//           <h3 className="font-bold text-blue-800">Tarifa Vigente (Concessionária)</h3>
//         </div>

//         {loadingTarifa ? (
//           <div className="flex items-center text-sm text-gray-600 gap-2 py-2">
//             <RefreshCw className="w-4 h-4 animate-spin" /> Atualizando dados da rede...
//           </div>
//         ) : tarifaApi ? (
//           <div className="space-y-3">
//             <div className="flex justify-between items-center bg-white p-3 rounded border border-blue-100">
//               <span className="text-sm text-gray-600">Valor do kWh (Base)</span>
//               <span className="font-bold text-gray-800">R$ {tarifaApi.tarifaBase.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between items-center bg-white p-3 rounded border border-blue-100">
//               <span className="text-sm text-gray-600">Bandeira Atual</span>
//               <div className="text-right">
//                 <span className={`font-bold block ${
//                   tarifaApi.bandeiraAtual.includes('Vermelha') ? 'text-red-600' : 
//                   tarifaApi.bandeiraAtual.includes('Amarela') ? 'text-yellow-600' : 'text-green-600'
//                 }`}>
//                   {tarifaApi.bandeiraAtual}
//                 </span>
//                 <span className="text-xs text-gray-500">
//                   + R$ {tarifaApi.adicionalBandeira} / kWh
//                 </span>
//               </div>
//             </div>

//             {/* Alerta contextual se a bandeira for cara */}
//             {(tarifaApi.bandeiraAtual.includes('Amarela') || tarifaApi.bandeiraAtual.includes('Vermelha')) && (
//               <div className="flex gap-2 items-start text-xs text-orange-800 bg-orange-100 p-2 rounded">
//                 <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
//                 <p>Cuidado: A tarifa está mais cara este mês. Otimize o uso dos aparelhos abaixo.</p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className="text-sm text-red-500">Erro ao carregar informações da tarifa.</p>
//         )}
//       </Card>
      
//       {/* SEÇÃO 2: FORMULÁRIO DE CADASTRO */}
//       <h2 className="text-lg font-bold text-black pt-2">Adicionar Aparelho</h2>
//       <Card>
//         <form onSubmit={handleAdd} className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Aparelho</label>
//             <select 
//               value={aparelho} 
//               onChange={(e) => setAparelho(e.target.value)} 
//               className="border border-gray-400 rounded p-2 text-sm bg-white text-black" 
//               required
//             >
//               <option value="">Selecione um aparelho</option>
//               {Object.keys(POTENCIA_APARELHOS).map(item => (
//                 <option key={item} value={item}>{item}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex gap-4">
//             <div className="flex flex-col w-1/2">
//               <label className="text-sm text-gray-700 mb-1">Horas/dia</label>
//               <input 
//                 type="number" 
//                 value={horas} 
//                 onChange={(e) => setHoras(e.target.value)} 
//                 placeholder="Ex: 8" 
//                 className="border border-gray-400 rounded p-2 text-sm bg-white text-black" 
//                 required 
//               />
//             </div>
//             <div className="flex flex-col w-1/2">
//               <label className="text-sm text-gray-700 mb-1">Dias/mês</label>
//               <input 
//                 type="number" 
//                 value={dias} 
//                 onChange={(e) => setDias(e.target.value)} 
//                 placeholder="Ex: 30" 
//                 className="border border-gray-400 rounded p-2 text-sm bg-white text-black" 
//                 required 
//               />
//             </div>
//           </div>
          
//           <button 
//             type="submit" 
//             className="w-full mt-2 flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition"
//           >
//             <Plus className="w-5 h-5" /> Adicionar ao Perfil
//           </button>
//         </form>
//       </Card>

//       {/* SEÇÃO 3: LISTA DE EQUIPAMENTOS */}
//       {equipamentos.length > 0 && (
//         <section>
//           <div className="flex justify-between items-end mb-3">
//             <h3 className="font-semibold text-gray-800">Aparelhos Registrados ({equipamentos.length})</h3>
//             <span className="text-xs text-gray-500">Custo base no valor atual</span>
//           </div>
          
//           <div className="space-y-3">
//             {equipamentos.map(eq => {
//               // Cálculos individuais
//               const consumoItem = ((eq.potencia * eq.horasDia * eq.diasMes) / 1000);
//               const custoItem = tarifaApi 
//                 ? consumoItem * (tarifaApi.tarifaBase + tarifaApi.adicionalBandeira) 
//                 : 0;

//               return (
//                 <div key={eq.id} className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center shadow-sm">
//                   <div>
//                     <h4 className="font-bold text-sm text-gray-800">{eq.nome}</h4>
//                     <p className="text-xs text-gray-500">{eq.horasDia}h/dia • {eq.diasMes} dias/mês</p>
//                     <p className="text-xs font-semibold text-green-700 mt-1 flex items-center gap-1">
//                       <Zap className="w-3 h-3" /> {consumoItem.toFixed(1)} kWh (R$ {custoItem.toFixed(2)})
//                     </p>
//                   </div>
//                   <button 
//                     onClick={() => removeEquipamento(eq.id)} 
//                     className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
//                   >
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
import { Plus, Trash2, Zap, Info, RefreshCw, AlertTriangle, TrendingUp, Check } from 'lucide-react';

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

// Dados simulados para comparação (Valores de acréscimo R$/kWh)
const CENARIOS_BANDEIRAS = [
  { nome: 'Verde', add: 0.00, color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' },
  { nome: 'Amarela', add: 0.01889, color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  { nome: 'Vermelha P1', add: 0.04463, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
  { nome: 'Vermelha P2', add: 0.07877, color: 'text-red-900', bg: 'bg-red-100', border: 'border-red-300' }
];

export default function Calculator() {
  // Trazemos também o consumoTotalKwh para fazer a projeção nos cenários
  const { 
    equipamentos, 
    addEquipamento, 
    removeEquipamento, 
    tarifaApi, 
    loadingTarifa,
    consumoTotalKwh 
  } = useContext(AppContext);
  
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

    setAparelho(''); setHoras(''); setDias('');
  };

  return (
    <div className="space-y-6 pb-6">
      <h2 className="text-xl font-bold text-gray-800">Simulador de Gastos</h2>

      {/* SEÇÃO 1: INFORMATIVA E COMPARATIVA */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-blue-700" />
          <h3 className="font-bold text-blue-800">Comparativo de Tarifas</h3>
        </div>

        {loadingTarifa ? (
          <div className="flex items-center text-sm text-gray-600 gap-2 py-2">
            <RefreshCw className="w-4 h-4 animate-spin" /> Atualizando dados da rede...
          </div>
        ) : tarifaApi ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-1 rounded">
                   <Zap className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">Tarifa Base (TE + TUSD = R$ {tarifaApi.tarifaBase.toFixed(2)} / kWh)</span>
              </div>

            {/* Lista Comparativa de Bandeiras */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Simulação com seus aparelhos ({consumoTotalKwh.toFixed(1)} kWh/mês)
              </p>
              
              {CENARIOS_BANDEIRAS.map((cenario) => {
                // Verifica se esta é a bandeira ativa vinda da API
                // Usamos 'includes' para casar "Vermelha P1" com "Vermelha" da API se necessário
                const isVigente = tarifaApi.bandeiraAtual.includes(cenario.nome.split(' ')[0]);
                
                // Cálculo do custo total neste cenário
                const custoCenario = consumoTotalKwh * (tarifaApi.tarifaBase + cenario.add);

                return (
                  <div 
                    key={cenario.nome}
                    className={`flex justify-between items-center p-1 rounded-lg border transition-all ${
                      isVigente 
                        ? `${cenario.bg} ${cenario.border} ring-1 ring-offset-1 ring-emerald-400 shadow-md` 
                        : 'bg-white border-gray-100 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1">
                        <span className={`text-sm font-bold ${cenario.color}`}>
                          Bandeira {cenario.nome}
                        </span>
                        {isVigente && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-200 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Vigente
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        Adicional: + R$ {cenario.add.toFixed(3)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className={`block font-bold ${isVigente ? 'text-lg text-gray-900' : 'text-sm text-gray-600'}`}>
                        R$ {custoCenario.toFixed(2)}
                      </span>
                      {isVigente && (
                         <span className="text-[10px] text-gray-500">Estimativa mensal</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          <p className="text-sm text-red-500">Erro ao carregar informações da tarifa.</p>
        )}
      </Card>
      
      {/* SEÇÃO 2: FORMULÁRIO DE CADASTRO */}
      <h2 className="text-lg font-bold text-gray-800 pt-2">Adicionar Aparelho</h2>
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
                max={24}
                min={1}
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
                max={31}
                min={1}
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
            <span className="text-xs text-gray-500">Custo base atual</span>
          </div>
          
          <div className="space-y-3">
            {equipamentos.map(eq => {
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