// import { useRouter } from 'next/router';
// import { Home, Calculator, Brain, List, Info } from 'lucide-react';
// import Link from 'next/link';

// export default function BottomNav() {
//   const router = useRouter();

//   const navItems = [
//     { path: '/', icon: Home },
//     { path: '/calculator', icon: Calculator },
//     { path: '/mission', icon: Brain },
//     { path: '/courses', icon: List },
//     { path: '/info', icon: Info },
//   ];

//   return (
//     <nav className="bg-gray-200 border-t border-gray-300 flex justify-around items-center h-16 shrink-0 pb-safe">
//       {navItems.map((item) => {
//         const Icon = item.icon;
//         const isActive = router.pathname === item.path;
//         return (
//           <Link href={item.path} key={item.path}>
//             <div className={`p-2 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>
//               <Icon className="w-6 h-6" />
//             </div>
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }

import { useRouter } from 'next/router';
import { Home, Calculator, Brain, List, Info } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  const router = useRouter();

  const navItems = [
    { path: '/', icon: Home, label: 'Início' },
    { path: '/calculator', icon: Calculator, label: 'Calc' },
    { path: '/mission', icon: Brain, label: 'Missão' },
    { path: '/courses', icon: List, label: 'Aulas' },
    { path: '/info', icon: Info, label: 'Info' },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 flex justify-around items-center h-[72px] shrink-0 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = router.pathname === item.path;
        
        return (
          <Link href={item.path} key={item.path} className="w-full h-full flex items-center justify-center">
            <div className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
              isActive ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-600'
            }`}>
              {/* Ícone com indicador de ativo */}
              <div className={`relative p-1 rounded-xl transition-all ${isActive ? 'bg-emerald-50 translate-y-[-2px]' : ''}`}>
                <Icon className={`w-6 h-6 ${isActive ? 'fill-emerald-100' : ''}`} />
              </div>
              
              {/* Label pequena */}
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}