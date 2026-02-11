import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../context/AppContext';
import { 
  Zap, 
  CircleDollarSign, 
  CheckSquare, 
  Thermometer, 
  AlertTriangle, 
  BookOpen, 
  ChevronRight,
  Leaf,       
  Tv,
  CheckCircle2,
  List        
} from 'lucide-react';
import Card from '../components/Card';

export default function Home() {
  const router = useRouter();
  const { consumoTotalKwh, custoTotal, cofrinho, kwhSaved } = useContext(AppContext);
  
  // Estado para Temperatura (API Real)
  const [temperatura, setTemperatura] = useState(null);
  const [loadingClima, setLoadingClima] = useState(true);

  // Dados mockados das Trilhas para exibição rápida
  const trilhasRapidas = [
    { 
      id: 1, 
      titulo: 'Eficiência Energética', 
      desc: 'Conceitos básicos de consumo', 
      icon: BookOpen, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50' 
    },
    { 
      id: 2, 
      titulo: 'Eletrodomésticos', 
      desc: 'Otimize o uso diário', 
      icon: Tv, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50' 
    },
    { 
      id: 3, 
      titulo: 'Sustentabilidade', 
      desc: 'Hábitos que salvam o planeta', 
      icon: Leaf, 
      color: 'text-green-600', 
      bg: 'bg-green-50' 
    }
  ];

  // Busca Clima de Belém (Open-Meteo API)
  useEffect(() => {
    async function fetchClima() {
      try {
        // Coordenadas de Belém, PA
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-1.4558&longitude=-48.4902&current=temperature_2m&timezone=America%2FSao_Paulo');
        const data = await res.json();
        setTemperatura(data.current.temperature_2m);
      } catch (error) {
        console.error("Erro ao buscar clima", error);
        setTemperatura('--');
      } finally {
        setLoadingClima(false);
      }
    }
    fetchClima();
  }, []);

  return (
    <div className="space-y-8 pb-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Bom dia, <span className="text-emerald-600">Usuário!</span>
          </h2>
          <p className="text-sm text-gray-500">Sua jornada sustentável hoje.</p>
        </div>
      </div>

      {/* DASHBOARD PRINCIPAL (GRID 4 CARDS) */}
      <section>
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
          Painel de Controle
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          
          {/* CARD 1: ENERGIA (kWh) */}
          <Card className="flex flex-col justify-between h-32 border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-gray-500 uppercase">Energia</span>
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-emerald-700">{kwhSaved.toFixed(1)}</span>
                <span className="text-sm text-gray-400 font-medium mb-1">/ {consumoTotalKwh.toFixed(1)}</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">kWh (Poupado / Estimado)</span>
            </div>
          </Card>

          {/* CARD 2: FINANCEIRO (R$) */}
          <Card className="flex flex-col justify-between h-32 border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-gray-500 uppercase">Economia</span>
              <CircleDollarSign className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-emerald-700">R${cofrinho.toFixed(0)}</span>
                <span className="text-sm text-gray-400 font-medium mb-1">/ R${custoTotal.toFixed(0)}</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">Reais (Poupado / Estimado)</span>
            </div>
          </Card>

          {/* CARD 3: EDUCAÇÃO (Módulos) */}
          <Card 
            onClick={() => router.push('/courses')}
            className="flex flex-col justify-between h-32 cursor-pointer active:scale-95 transition-transform border-l-4 border-l-blue-400"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-gray-500 uppercase">Aprendizado</span>
              <CheckSquare className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-800">2</span>
              <p className="text-[10px] text-gray-400 font-medium mt-1">Módulos concluídos</p>
            </div>
          </Card>

          {/* CARD 4: CLIMA (API Real) */}
          <Card className="flex flex-col justify-between h-32 border-l-4 border-l-orange-400">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-gray-500 uppercase">Belém, PA</span>
              <Thermometer className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              {loadingClima ? (
                <span className="text-sm text-gray-400">Carregando...</span>
              ) : (
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-gray-800">{temperatura}°</span>
                  <span className="text-sm text-gray-400 mt-2">C</span>
                </div>
              )}
              <p className="text-[10px] text-gray-400 font-medium mt-1">Temperatura Externa</p>
            </div>
          </Card>

        </div>
      </section>

      {/* Alerta de Consumo */}
      <section>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-900">Alerta de Calor</h4>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              Com {temperatura}°C lá fora, seu ar-condicionado gastará <strong>20% mais</strong> energia hoje. Mantenha portas fechadas.
            </p>
          </div>
        </div>
      </section>

      {/* Missão Rápida */}
      {/* MISSÃO DO DIA (ATUALIZADO COM 2 BOTÕES) */}
      <section>
        <h3 className="font-bold text-gray-800 mb-3">Missão do Dia</h3>
        <div className="bg-gray-800 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          
          <p className="text-sm font-medium mb-5 relative z-10 leading-relaxed text-gray-200">
            "Identifique e desligue aparelhos em 'stand-by' (luzinha vermelha acesa) na sala."
          </p>
          
          {/* Container dos Botões */}
          <div className="flex gap-3 relative z-10">
            <button 
              onClick={() => router.push('/mission')}
              className="flex-1 bg-emerald-600 text-white text-xs font-bold py-3 rounded-lg hover:bg-emerald-700 transition shadow-md border border-emerald-500 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Aceitar Missão
            </button>
            
            <button 
              onClick={() => router.push('/mission')}
              className="flex-1 bg-transparent border border-gray-600 text-gray-300 text-xs font-bold py-3 rounded-lg hover:bg-gray-700 hover:text-white transition flex items-center justify-center gap-2"
            >
              <List className="w-4 h-4" />
              Ver todas
            </button>
          </div>
        </div>
      </section>

      {/* Atalho Educação */}
      {/* SEÇÃO ATUALIZADA: 3 TRILHAS RÁPIDAS */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Trilhas Rápidas</h3>
          <span onClick={() => router.push('/courses')} className="text-xs font-bold text-emerald-600 cursor-pointer hover:underline">Ver todas</span>
        </div>
        
        <div className="space-y-3">
          {trilhasRapidas.map((trilha) => {
            const Icone = trilha.icon;
            return (
              <div 
                key={trilha.id}
                onClick={() => router.push('/courses')}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`${trilha.bg} p-2.5 rounded-lg ${trilha.color} group-hover:bg-opacity-80 transition-colors`}>
                    <Icone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 group-hover:text-emerald-700 transition-colors">
                      {trilha.titulo}
                    </h4>
                    <p className="text-xs text-gray-500">{trilha.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}