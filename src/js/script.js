const link = document.getElementById("conteudo");
const btnGerar = document.getElementById("btn-gerar");
const btnLimpar = document.getElementById("btn-limpar");
const qrCode = document.getElementById("qrcode");

function gerarQRCode() {
  qrCode.innerHTML = "";
  new QRCode(qrCode, { text: link.value, width: 128, height: 128 });
}

function limparLink() {
  qrCode.innerHTML = "";
  link.value = "";
}

btnLimpar.addEventListener("click", limparLink);
btnGerar.addEventListener("click", gerarQRCode);