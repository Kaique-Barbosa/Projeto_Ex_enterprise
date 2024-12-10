export function formatRG(rg) {
  return rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
}

export function validateRG(rg) {
  rg = rg.replace(/[^\w]+/g, ""); // Remove caracteres não alfanuméricos

  // Verifica se tem entre 7 e 14 caracteres (média comum nos estados)
  if (rg.length < 7 || rg.length > 14) {
    return false;
  }

  // Certifica-se de que contém apenas números ou letras
  if (!/^[\w]+$/.test(rg)) {
    return false;
  }

  return true; // RG válido
}
