export default async function handler(req, res) {
  try {
    // Simulando a resposta de uma API real (ex: Equatorial Pará / ANEEL)
    const tarifaAtualizada = {
      concessionaria: 'Equatorial Pará',
      estado: 'PA', 
      tarifaBase: 0.89, // Valor simulado R$/kWh
      bandeiraAtual: 'Amarela',
      adicionalBandeira: 0.01889, 
      dataAtualizacao: new Date().toISOString()
    };

    await new Promise(resolve => setTimeout(resolve, 800)); // Delay de rede
    res.status(200).json(tarifaAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar dados da tarifa' });
  }
}