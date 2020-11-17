async function copyToClipboard (typeColor, textToCopy) {

  if (navigator.clipboard) {
    let colorToCopy = null;

    if(typeColor === "deg"){
      colorToCopy = `background: ${textToCopy.split(",")[1].trim()};
      \nbackground: -webkit-${textToCopy};
      \nbackground: ${textToCopy};`
    } else {
      colorToCopy = `background: ${textToCopy};`;
    }
    
    await navigator.clipboard.writeText(colorToCopy);

    return 'Copiado 😎😎'
  }

  return 'No se pudo copiar 😔😔'
};

export default copyToClipboard;