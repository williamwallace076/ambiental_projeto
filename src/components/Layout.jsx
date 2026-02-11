// import Header from './Header';
// import BottomNav from './BottomNav';
// import NotificationMock from './NotificationMock';

// export default function Layout({ children }) {
//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center">
//       {/* Container simulando a tela do celular */}
//       <div className="w-full max-w-md bg-gray-50 h-screen flex flex-col shadow-2xl relative overflow-hidden">
//         <Header />
        
//         {/* Área de rolagem principal */}
//         <main className="flex-1 overflow-y-auto p-4 pb-20">
//           {children}
//         </main>

//         <BottomNav />
//       </div>
//       {/* MOCK DE NOTIFICAÇÕES (LADO DIREITO)
//         Só aparece em telas grandes (lg:flex), simulando o ecossistema 
//       */}
//       <div className="hidden xl:block">
//         <NotificationMock />
//         <p className="text-center text-gray-500 text-xs mt-4 ml-8 font-medium uppercase tracking-widest">
//           Simulação de Alertas Preditivos
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';
// import { Bell, BellOff } from 'lucide-react';
// import Header from './Header';
// import BottomNav from './BottomNav';
// import NotificationMock from './NotificationMock';

// export default function Layout({ children }) {
//   // Estado para controlar a visibilidade do Mock de Notificações
//   const [showMock, setShowMock] = useState(true);

//   return (
//     <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4 lg:p-10 font-sans relative transition-colors duration-500">
      
//       {/* Container Principal do App (Celular) */}
//       <div className="w-full max-w-md h-[800px] bg-white flex flex-col shadow-2xl relative overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 z-10">
      
        
//         {/* Header Fixo */}
//         <div className="sticky top-0 z-40">
//            <Header />
//         </div>
        
//         {/* Área de rolagem principal */}
//         <main className="flex-1 overflow-y-auto bg-gray-50 scrollbar-hide pb-[72px]">
//           {children}
//         </main>

//         {/* Menu Inferior Fixo */}
//         <div className="absolute bottom-0 w-full z-40">
//           <BottomNav />
//         </div>
//       </div>

//       {/* MOCK DE NOTIFICAÇÕES (LADO DIREITO) */}
//       {/* A classe 'hidden xl:block' garante que só apareça em telas grandes e se o state permitir */}
//       {showMock && (
//         <div className="hidden xl:block animate-fadeInRight">
//           <NotificationMock />
//           <p className="text-center text-gray-500 text-xs mt-4 ml-8 font-medium uppercase tracking-widest animate-pulse">
//             Simulação de Alertas Preditivos
//           </p>
//         </div>
//       )}

//       {/* BOTÃO FLUTUANTE DE CONTROLE (Toggle) */}
//       {/* Só aparece em telas XL (Desktop) para controlar a demo */}
//       <button
//         onClick={() => setShowMock(!showMock)}
//         className="hidden xl:flex fixed bottom-10 right-10 bg-gray-900 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 items-center gap-3 z-50 group"
//         title={showMock ? "Ocultar simulação" : "Mostrar simulação preditiva"}
//       >
//         {showMock ? (
//           <>
//             <BellOff className="w-6 h-6" />
//             <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-bold">
//               Ocultar Demo
//             </span>
//           </>
//         ) : (
//           <>
//             <Bell className="w-6 h-6 animate-bounce" />
//             <span className="max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-bold px-2">
//               Ver Notificações Preditivas
//             </span>
//           </>
//         )}
//       </button>

//     </div>
//   );
// }

// import { useState } from 'react';
// import { Bell, BellOff } from 'lucide-react';
// import Header from './Header';
// import BottomNav from './BottomNav';
// import NotificationMock from './NotificationMock';

// export default function Layout({ children }) {
//   // Estado para controlar a visibilidade do Mock de Notificações
//   const [showMock, setShowMock] = useState(true);

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 lg:p-8 font-sans relative">
      
//       {/* CONTAINER PRINCIPAL DO APP 
//         - Removido: Bordas grossas, notch, arredondamento excessivo.
//         - Adicionado: Visual clean, sombra suave, cantos leves (rounded-xl).
//       */}
//       <div className="w-full max-w-md h-[850px] bg-white flex flex-col shadow-2xl relative overflow-hidden rounded-xl border border-gray-200 z-10">
        
//         {/* Header Fixo no topo do container */}
//         <div className="sticky top-0 z-40 w-full">
//            <Header />
//         </div>
        
//         {/* Área de rolagem principal */}
//         <main className="flex-1 overflow-y-auto bg-gray-50 scrollbar-hide pb-[80px]">
//           {children}
//         </main>

//         {/* Menu Inferior Fixo na base do container */}
//         <div className="absolute bottom-0 w-full z-40 bg-white">
//           <BottomNav />
//         </div>
//       </div>

//       {/* MOCK DE NOTIFICAÇÕES (LADO DIREITO) */}
//       {/* Esse continua com cara de celular/painel para diferenciar do app principal */}
//       {showMock && (
//         <div className="hidden xl:block ml-10 animate-fadeInRight">
//           <NotificationMock />
//           <p className="text-center text-gray-400 text-[10px] mt-4 font-medium uppercase tracking-widest animate-pulse">
//             Simulação de Alertas Preditivos
//           </p>
//         </div>
//       )}

//       {/* BOTÃO FLUTUANTE DE CONTROLE (Toggle) */}
//       <button
//         onClick={() => setShowMock(!showMock)}
//         className="hidden xl:flex fixed bottom-8 right-8 bg-gray-900 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 items-center gap-3 z-50 group"
//         title={showMock ? "Ocultar simulação" : "Mostrar simulação preditiva"}
//       >
//         {showMock ? (
//           <>
//             <BellOff className="w-5 h-5" />
//             <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold">
//               Ocultar Demo
//             </span>
//           </>
//         ) : (
//           <>
//             <Bell className="w-5 h-5 animate-bounce" />
//             <span className="max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold px-2">
//               Ver Notificações
//             </span>
//           </>
//         )}
//       </button>

//     </div>
//   );
// }


import { useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import Header from './Header';
import BottomNav from './BottomNav';
import NotificationMock from './NotificationMock';

export default function Layout({ children }) {
  // Estado para controlar a visibilidade do Mock de Notificações
  const [showMock, setShowMock] = useState(true);

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