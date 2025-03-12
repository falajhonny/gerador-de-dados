const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
export async function generateData(prompt) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
      }),
    });
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Limite de requisições atingido. Tente novamente mais tarde.");
      } else {
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
      }
    }
    const data = await response.json();
    if (!data.choices || !data.choices.length) {
      throw new Error("A API não retornou dados válidos.");
    }
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Erro ao gerar dados:', error);
    return `Erro: ${error.message}`;
  }
}

// console.log('apikey carreagda:', API_KEY)







