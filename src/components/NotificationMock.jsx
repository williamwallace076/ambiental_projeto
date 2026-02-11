import { CloudRain, Zap, TrendingUp, Sparkles, Bell } from 'lucide-react';

export default function NotificationMock() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });

  return (
    <div className="hidden lg:flex flex-col w-80 h-[800px] ml-8 p-4 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden font-sans">
      {/* Detalhe da Câmera (Notch) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>
      
      {/* Background com Blur simulando Wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-gray-900 to-blue-900 opacity-60 z-0"></div>

      {/* Conteúdo da Tela Bloqueada */}
      <div className="relative z-10 flex flex-col h-full pt-12">
        
        {/* Relógio e Data */}
        <div className="text-center mb-8 text-white">
          <div className="text-6xl font-thin tracking-tighter">19:41</div>
          <div className="text-sm font-medium opacity-80 capitalize">{currentDate}</div>
        </div>

        {/* Lista de Notificações Preditivas */}
        <div className="space-y-3 px-1">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 pl-2">
            Agora
          </h3>

          {/* Notificação 1: Preditiva Climática (Belém) */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/5 shadow-lg transform hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 p-1 rounded text-white">
                  <CloudRain className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-gray-200">EcoWatt • Clima</span>
              </div>
              <span className="text-[10px] text-gray-400">há 2 min</span>
            </div>
            <h4 className="text-sm font-semibold text-white mb-0.5">Tempestade em Belém ⛈️</h4>
            <p className="text-xs text-gray-300 leading-snug">
              Previsão de raios nos próximos 30min. <strong>Ação recomendada:</strong> Tire computadores e roteadores da tomada agora.
            </p>
          </div>

          {/* Notificação 2: Alerta de Tarifa (Pico) */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/5 shadow-lg transform hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <div className="bg-amber-500 p-1 rounded text-white">
                  <Zap className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-gray-200">EcoWatt • Tarifa</span>
              </div>
              <span className="text-[10px] text-gray-400">agora</span>
            </div>
            <h4 className="text-sm font-semibold text-white mb-0.5">Horário de Ponta Ativo ⚠️</h4>
            <p className="text-xs text-gray-300 leading-snug">
              A energia está <strong>40% mais cara</strong> até às 21h. Evite usar o chuveiro elétrico agora para economizar R$ 15,00.
            </p>
          </div>

          {/* Notificação 3: Agente Inteligente (AI) */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/5 shadow-lg transform hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 p-1 rounded text-white">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-gray-200">EcoWatt • Sugestão</span>
              </div>
              <span className="text-[10px] text-gray-400">há 1h</span>
            </div>
            <h4 className="text-sm font-semibold text-white mb-0.5">Padrão Detectado 🤖</h4>
            <p className="text-xs text-gray-300 leading-snug">
              Você costuma ligar o AC agora. Com 26°C lá fora, usar apenas o <strong>Ventilador</strong> hoje economizará 2kWh. Topa?
            </p>
            <div className="mt-2 flex gap-2">
              <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold py-1 px-3 rounded-full transition">
                Sim, ativar modo Eco
              </button>
            </div>
          </div>
        </div>

        {/* Botão Inferior (Lanterna/Câmera) */}
        <div className="mt-auto mb-6 flex justify-between px-8">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
          </div>
           <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Bell className="w-4 h-4 text-white opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}