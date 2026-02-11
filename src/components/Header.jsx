// import { User, Menu } from 'lucide-react';

// export default function Header() {
//   return (
//     <header className="bg-gray-400 text-white flex items-center justify-between px-4 py-3 shrink-0">
//       <User className="w-6 h-6" />
//       <h1 className="text-lg font-semibold">Ambiental software</h1>
//       <Menu className="w-6 h-6 cursor-pointer" />
//     </header>
//   );
// }

import { User, Menu, Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 shrink-0 flex items-center justify-between shadow-sm">
      {/* Perfil */}
      <div className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-emerald-50 transition-colors">
        <User className="w-5 h-5 text-gray-600 hover:text-emerald-600" />
      </div>

      {/* Logo / Título */}
      <div className="flex items-center gap-2">
        <Leaf className="w-5 h-5 text-emerald-500 fill-emerald-100" />
        <h1 className="text-lg font-bold text-emerald-600 tracking-tight">
          Eco<span className=" text-gray-800 font-extrabold">Watt</span>
        </h1>
      </div>

      {/* Menu Hambúrguer */}
      <div className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-emerald-50 transition-colors">
        <Menu className="w-5 h-5 text-gray-600 hover:text-emerald-600" />
      </div>
    </header>
  );
}