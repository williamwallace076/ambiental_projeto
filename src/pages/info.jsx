import { Info, AlertTriangle, TrendingUp, Lightbulb, Plug, FileText, CheckCircle2 } from 'lucide-react';
import Card from '../components/Card';

export default function InfoPage() {
  return (
    <div className="space-y-6 pb-6">
      {/* Cabeçalho da Página */}
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-emerald-100 p-2 rounded-lg">
          <Info className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Saiba mais</h2>
      </div>

      {/* Card 1: O que são Tarifas */}
      <Card className="border-l-4 border-l-blue-500">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-gray-800 p-1.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-gray-800">O que são Tarifas de Energia?</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed text-justify">
          As tarifas de energia elétrica são os valores cobrados pela distribuidora para entregar a energia até sua casa ou empresa. Elas são reguladas pela ANEEL (Agência Nacional de Energia Elétrica) e incluem custos de geração, transmissão e distribuição.
        </p>
      </Card>

      {/* Card 2: Bandeiras Tarifárias */}
      <Card className="border-l-4 border-l-amber-500">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-gray-800" />
          <h3 className="font-bold text-gray-800">Bandeiras Tarifárias</h3>
        </div>
        <div className="space-y-4">
          {[
            { color: 'bg-green-500', name: 'Verde', desc: 'Condições favoráveis. Sem custo adicional.' },
            { color: 'bg-yellow-400', name: 'Amarela', desc: 'Condições menos favoráveis. Custo adicional moderado.' },
            { color: 'bg-red-500', name: 'Vermelha (Patamar 1)', desc: 'Condições desfavoráveis. Custo adicional elevado.' },
            { color: 'bg-red-900', name: 'Vermelha (Patamar 2)', desc: 'Condições críticas. Custo adicional muito elevado.' }
          ].map((flag) => (
            <div key={flag.name} className="flex gap-3 items-start">
              <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${flag.color} shadow-sm`}></div>
              <div>
                <span className="text-sm font-bold block text-gray-800">{flag.name}</span>
                <span className="text-xs text-gray-500 block">{flag.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Card 3: Componentes da Tarifa (Novo) */}
      <Card className="border-l-4 border-l-purple-500">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-gray-800" />
          <h3 className="font-bold text-gray-800">Componentes da Tarifa</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <h4 className="font-bold text-sm text-purple-700 mb-1">TUSD - Tarifa de Uso do Sistema de Distribuição</h4>
            <p className="text-xs text-gray-600">
              Cobre os custos de distribuição da energia (fios, postes, transformadores) até a sua unidade consumidora.
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <h4 className="font-bold text-sm text-purple-700 mb-1">TE - Tarifa de Energia</h4>
            <p className="text-xs text-gray-600">
              Cobre os custos efetivos da geração e transmissão da energia elétrica que você consome.
            </p>
          </div>
        </div>
      </Card>

      {/* Card 4: Dicas de Economia (Novo) */}
      <Card className="bg-emerald-50 border border-emerald-200">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-emerald-700" />
          <h3 className="font-bold text-emerald-900">Dicas de Economia</h3>
        </div>
        <ul className="space-y-3">
          {[
            'Desligue aparelhos da tomada quando não estiver usando (evite o modo stand-by).',
            'Substitua lâmpadas antigas por modelos LED mais eficientes.',
            'Use o ar-condicionado de forma consciente (23ºC ou 24ºC), mantendo portas fechadas.',
            'Concentre o uso de eletrodomésticos pesados (ferro, chuveiro) fora do horário de pico (18h às 21h).',
            'Mantenha a geladeira longe de fontes de calor (fogão/sol) e com a borracha em bom estado.'
          ].map((dica, index) => (
            <li key={index} className="flex gap-3 items-start text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{dica}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}