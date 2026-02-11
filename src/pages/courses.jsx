import { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { 
  BookOpen, ChevronDown, ChevronUp, PlayCircle, 
  ThermometerSun, Lightbulb, Power, Clock, CheckCircle2 
} from 'lucide-react';

export default function Courses() {
  const { ecoPontos } = useContext(AppContext);
  const [openModule, setOpenModule] = useState(1);
  
  // Controle do Carrossel Automático
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Ideias de cards rápidos (Carrossel)
  const quickTips = [
    {
      id: 1,
      icon: ThermometerSun,
      title: 'O clima a seu favor',
      desc: 'Como usar a ventilação natural no calor da nossa região para poupar o ar-condicionado.',
      color: 'bg-orange-100 text-orange-700',
      iconColor: 'text-orange-500'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'O Poder do LED',
      desc: 'Substituir lâmpadas antigas pode reduzir sua conta de iluminação em até 80%.',
      color: 'bg-yellow-100 text-yellow-700',
      iconColor: 'text-yellow-500'
    },
    {
      id: 3,
      icon: Power,
      title: 'Vampiros de Energia',
      desc: 'Aparelhos em Standby (luz vermelha acesa) continuam consumindo. Tire da tomada!',
      color: 'bg-red-100 text-red-700',
      iconColor: 'text-red-500'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Horário de Pico',
      desc: 'Evite usar chuveiro elétrico e ferro de passar entre 18h e 21h para aliviar a rede.',
      color: 'bg-blue-100 text-blue-700',
      iconColor: 'text-blue-500'
    }
  ];

  // Módulos Completos (Sanfona)
  const modules = [
    { 
      id: 1, 
      title: 'Introdução à Eficiência', 
      desc: 'Conceitos básicos de consumo',
      reward: 100,
      classes: ['Leitura de Medidores', 'Calculando o kWh', 'Mitos e Verdades'], 
      done: [0, 1] 
    },
    { 
      id: 2, 
      title: 'Eletrodomésticos', 
      desc: 'Como otimizar o uso diário',
      reward: 150,
      classes: ['Geladeira Longe do Fogão', 'Manutenção do Ar-Condicionado', 'Máquina de Lavar'], 
      done: [] 
    },
    { 
      id: 3, 
      title: 'Sustentabilidade em Casa', 
      desc: 'Hábitos que salvam o planeta',
      reward: 200,
      classes: ['Descarte de Eletrônicos', 'Reaproveitamento de Água', 'Energia Solar Básica'], 
      done: [] 
    },
  ];

  // Lógica de Scroll Automático
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    // Configura o intervalo de 3.5 segundos
    const interval = setInterval(() => {
      if (scrollContainer && !isPaused) {
        // Largura do card (240px) + gap (16px/1rem) = ~256px
        const scrollAmount = 260; 
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Se chegou no final, volta para o início (loop), senão rola para a direita
        if (scrollContainer.scrollLeft >= maxScroll - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]); // Recria o timer se o estado de pausa mudar

  // Função de clique no card
  const handleOpenTip = (title) => {
    // Aqui você pode abrir um modal futuramente. Por enquanto usamos alert.
    alert(`Abrindo artigo: "${title}"`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Aprendizado</h2>
        <span className="text-sm font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {ecoPontos} pts
        </span>
      </div>

      {/* Carrossel de Pílulas Rápidas */}
      <section 
        // Pausa o scroll automático quando o usuário passa o mouse ou toca
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
          Pílulas Rápidas
        </h3>
        
        <div 
          ref={scrollRef} // Referência para controlar o scroll via código
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {quickTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div 
                key={tip.id} 
                onClick={() => handleOpenTip(tip.title)}
                className={`w-[320px] snap-center shrink-0 rounded-xl p-4 border border-gray-200 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow ${tip.color}`}
              >
                <div>
                  <div className={`p-2 bg-white rounded-lg inline-block mb-3 shadow-sm ${tip.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-1 leading-tight">{tip.title}</h4>
                  <p className="text-xs opacity-90 leading-relaxed mb-4">
                    {tip.desc}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide hover:opacity-70 transition">
                  <PlayCircle className="w-4 h-4" /> Ler artigo
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Módulos Completos Accordion */}
      <section>
        <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider mt-4">
          Trilhas de Conhecimento
        </h3>
        <div className="space-y-3">
          {modules.map((mod) => (
            <div key={mod.id} className="border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm">
              {/* Accordion Header */}
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition"
                onClick={() => setOpenModule(openModule === mod.id ? null : mod.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg mt-1 text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{mod.title}</h4>
                    <p className="text-xs text-gray-500">{mod.desc}</p>
                    <span className="inline-block mt-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      +{mod.reward} pts ao concluir
                    </span>
                  </div>
                </div>
                {openModule === mod.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {/* Accordion Body */}
              {openModule === mod.id && (
                <div className="p-4 space-y-4 border-t border-gray-100 bg-gray-50">
                  {mod.classes.map((aula, idx) => {
                    const isDone = mod.done.includes(idx);
                    return (
                      <div key={idx} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <button className="focus:outline-none">
                            <CheckCircle2 
                              className={`w-6 h-6 transition-colors ${
                                isDone ? 'text-green-500 fill-green-100' : 'text-gray-300 group-hover:text-gray-400'
                              }`} 
                            />
                          </button>
                          <span className={`text-sm font-medium ${isDone ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                            {aula}
                          </span>
                        </div>
                        {!isDone && (
                          <button className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition">
                            Iniciar
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}