import { useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import Header from './Header';
import BottomNav from './BottomNav';
import NotificationMock from './NotificationMock';

export default function Layout({ children }) {
  // Estado para controlar a visibilidade do Mock de Notificações
  const [showMock, setShowMock] = useState(false);

  return (
    // Container Pai: Centraliza tudo na tela (App + Mock)
    <div className="bg-gray-100 min-h-screen flex justify-center items-center font-sans relative lg:gap-10">
      
      {/* APP CONTAINER PRINCIPAL 
        - Mobile: h-screen (ocupa a tela toda)
        - Desktop: h-[850px] (simula o tamanho do celular ao lado do mock)
        - Estrutura: Flex Column (Header -> Main -> Nav)
      */}
      <div className="w-full max-w-md bg-gray-50 h-screen lg:h-[850px] flex flex-col shadow-2xl relative overflow-hidden lg:rounded-[2rem] lg:border border-gray-200">
        
        {/* O Header entra no fluxo normal do Flex */}
        <Header />
        
        {/* Área de rolagem: flex-1 faz ocupar todo o espaço sobrando entre Header e Footer */}
        <main className="flex-1 overflow-y-auto p-4 pb-6 scrollbar-hide">
          {children}
        </main>

        {/* O BottomNav entra no fluxo normal, ficando sempre no pé do container */}
        <BottomNav />
      </div>

      {/* MOCK DE NOTIFICAÇÕES (LADO DIREITO) */}
      {/* Só aparece em telas grandes (xl) e se o estado permitir */}
      {showMock && (
        <div className="hidden xl:block animate-fadeInRight">
          <NotificationMock />
          <p className="text-center text-gray-400 text-[10px] mt-4 font-medium uppercase tracking-widest animate-pulse">
            Simulação de Alertas Preditivos
          </p>
        </div>
      )}

      {/* BOTÃO FLUTUANTE DE CONTROLE (Toggle) */}
      {/* Fixo na tela inteira, não dentro do app */}
      <button
        onClick={() => setShowMock(!showMock)}
        className="hidden xl:flex fixed bottom-10 right-10 bg-gray-900 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 items-center gap-3 z-50 group"
        title={showMock ? "Ocultar simulação" : "Mostrar simulação preditiva"}
      >
        {showMock ? (
          <>
            <BellOff className="w-5 h-5" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold">
              Ocultar Demo
            </span>
          </>
        ) : (
          <>
            <Bell className="w-5 h-5 animate-bounce" />
            <span className="max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold px-2">
              Ver Notificações
            </span>
          </>
        )}
      </button>

    </div>
  );
}