import axios from "axios";

export async function buscarEnderecoPorCep(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
}

export async function validateCEP(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

export function formatCEP(cep) {
  return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
}

export function formatCEPtoNumber(cep) {
  return cep.replace(/\D/g, "");
}
