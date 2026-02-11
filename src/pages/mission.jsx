import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import { 
  CheckCircle, Fan, Trophy, ChevronLeft, ChevronRight, 
  Droplets, ThermometerSnowflake, Sun 
} from 'lucide-react';

export default function Mission() {
  const { missoes, concluirMissao, ecoPontos } = useContext(AppContext);
  const [currentTip, setCurrentTip] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Mock de Dicas para o Slide
  const dicas = [
    {
      id: 1,
      titulo: "O calor vai custar caro",
      subtitulo: "Alerta de bandeira amarela ativado.",
      acao: "Dica: Use ventiladores de sala até às 22h.",
      icon: Fan,
      theme: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        title: "text-orange-800",
        sub: "text-orange-600",
        iconColor: "text-orange-800"
      }
    },
    {
      id: 2,
      titulo: "Banhos Longos?",
      subtitulo: "O chuveiro é o vilão do horário de pico.",
      acao: "Dica: Reduza o banho para 5 minutos hoje.",
      icon: Droplets,
      theme: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        title: "text-blue-800",
        sub: "text-blue-600",
        iconColor: "text-blue-800"
      }
    },
    {
      id: 3,
      titulo: "Geladeira Eficiente",
      subtitulo: "Borracha gasta deixa o frio escapar.",
      acao: "Dica: Faça o teste da folha de papel na porta.",
      icon: ThermometerSnowflake,
      theme: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        title: "text-cyan-800",
        sub: "text-cyan-600",
        iconColor: "text-cyan-800"
      }
    },
    {
      id: 4,
      titulo: "Luz Natural",
      subtitulo: "O sol está forte lá fora, aproveite.",
      acao: "Dica: Abra as cortinas e apague as lâmpadas.",
      icon: Sun,
      theme: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        title: "text-yellow-800",
        sub: "text-yellow-600",
        iconColor: "text-yellow-600"
      }
    }
  ];

  // Funções de Navegação Manual
  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % dicas.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev === 0 ? dicas.length - 1 : prev - 1));
  };

  // Efeito de Auto-Play (Pausa se o mouse estiver em cima)
  useEffect(() => {
    if (isPaused) return; // Se estiver pausado, não faz nada

    const interval = setInterval(() => {
      nextTip();
    }, 3500); // 3.5 segundos por slide

    return () => clearInterval(interval); // Limpa o timer ao desmontar ou mudar estado
  }, [isPaused]); // Recria o efeito apenas quando o estado de pausa muda

  const DicaAtual = dicas[currentTip];
  const IconeAtual = DicaAtual.icon;

  return (
    <div className="space-y-6">
      {/* Placar do Usuário */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-sm font-semibold opacity-90">Seu Nível Atual</h2>
          <p className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-300" /> {ecoPontos} EcoPontos
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs bg-white text-green-700 px-2 py-1 rounded-full font-bold">
            Iniciante
          </span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800">Missões Diárias</h2>
      
      <div className="space-y-3">
        {missoes.map((missao) => (
          <div 
            key={missao.id} 
            className={`rounded-lg p-4 border transition-all ${
              missao.concluida 
                ? 'bg-gray-100 border-gray-300 opacity-70' 
                : 'bg-gray-800 border-gray-800 text-white shadow-lg'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-bold ${missao.concluida ? 'text-gray-600' : 'text-white'}`}>
                {missao.titulo}
              </h3>
              <span className={`text-xs font-bold px-2 py-1 rounded ${missao.concluida ? 'bg-gray-300 text-gray-500' : 'bg-green-500 text-white'}`}>
                +{missao.pontos} pts
              </span>
            </div>
            
            <p className={`text-sm mb-4 ${missao.concluida ? 'text-gray-500' : 'text-gray-300'}`}>
              {missao.descricao}
            </p>

            <button 
              onClick={() => concluirMissao(missao.id)}
              disabled={missao.concluida}
              className={`w-full py-2 rounded font-semibold flex items-center justify-center gap-2 transition ${
                missao.concluida 
                  ? 'bg-transparent text-green-600 border border-green-600 cursor-not-allowed'
                  : 'bg-white text-gray-800 hover:bg-gray-200'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              {missao.concluida ? 'Missão Cumprida!' : 'Marcar como Concluída'}
            </button>
          </div>
        ))}
      </div>

      {/* Dicas Slide com Auto-Play e Pausa */}
      <h2 className="text-xl font-bold text-gray-800 pt-4">Dicas da Semana</h2>
      
      <div 
        className="flex flex-col items-center"
        // Eventos para pausar o carrossel
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)} // Suporte Mobile
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between gap-2 w-full">
          <button 
            onClick={prevTip}
            className="p-2 rounded-full hover:bg-gray-200 transition text-gray-500 focus:outline-none"
            aria-label="Dica Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <Card className={`flex-1 text-center p-6 border transition-all duration-500 ease-in-out ${DicaAtual.theme.bg} border-gray-300`}>
            <div className="animate-fadeIn"> {/* Container para animação suave se configurado no CSS */}
              <h3 className={`text-xl font-bold mb-2 leading-tight ${DicaAtual.theme.title}`}>
                {DicaAtual.titulo}
              </h3>
              <p className={`text-sm mb-6 ${DicaAtual.theme.sub}`}>
                {DicaAtual.subtitulo}
              </p>
              
              <div className={`bg-white border rounded-lg p-4 shadow-sm ${DicaAtual.theme.border} flex items-center justify-center flex-col gap-2`}>
                <p className="font-semibold text-gray-800">
                  {DicaAtual.acao}
                </p>
                <IconeAtual className={`w-8 h-8 ${DicaAtual.theme.iconColor}`} />
              </div>
            </div>
          </Card>

          <button 
            onClick={nextTip}
            className="p-2 rounded-full hover:bg-gray-200 transition text-gray-500 focus:outline-none"
            aria-label="Próxima Dica"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Indicador de pontos (bolinhas) */}
        <div className="flex justify-center gap-2 mt-4 pb-2">
          {dicas.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTip(idx)} // Permite clicar na bolinha para ir direto
              className={`rounded-full transition-all duration-300 ${
                idx === currentTip ? 'bg-gray-800 w-6 h-2' : 'bg-gray-300 w-2 h-2'
              }`}
              aria-label={`Ir para dica ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}