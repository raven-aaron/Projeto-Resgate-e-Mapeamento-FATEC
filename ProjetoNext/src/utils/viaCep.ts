import axios from 'axios';

export const buscarEnderecoPorCep = async (cep: string) => {
  const cepLimpo = cep.replace(/\D/g, '');
  
  if (cepLimpo.length !== 8) {
    return null;
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    
    if (response.data.erro) {
      return null;
    }
    
    return response.data;
  } catch (error) {
    return null;
  }
};