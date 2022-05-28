function onDownload() {
  const fe = document.querySelector('input[name="selector-fe"]:checked').value;
  const be = document.querySelector('input[name="selector-be"]:checked').value;
  window.open("https://frozen-cabbage-backend.herokuapp.com/templates/download?backend="+be, "_blank");
  window.open("https://frozen-cabbage-backend.herokuapp.com/templates/download?frontend="+fe, "_blank");
}