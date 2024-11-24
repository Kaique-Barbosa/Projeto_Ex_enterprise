export function validarTelefone(telefone) {
  const telefoneFormatado = formatarTelefone(telefone);

  if (!telefoneFormatado) {
    return false;
  }

  const telefoneRegex = new RegExp(
    `\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}`
  );

  const match = telefoneFormatado.match(telefoneRegex);
  if (!match) {
    return false;
  }

  const ddd = telefoneFormatado.substring(1, 3);

  const dddsValidos = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24",
    "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43",
    "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62",
    "64", "63", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77",
    "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "93",
    "94", "92", "95", "96", "97", "98", "99"
  ];
  
  if (!dddsValidos.includes(ddd)) {
    return false;
  }

  return true;
}

export function formatarTelefone(telefone) {
  const somenteNumeros = telefone.replace(/\D/g, "");

  if (somenteNumeros.length === 11) {
    return somenteNumeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (somenteNumeros.length === 10) {
    return somenteNumeros.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  } else {
    return null;
  }
}

export function formatarTelefoneParaNumeros(telefone) {
  return telefone.replace(/\D/g, "");
}




