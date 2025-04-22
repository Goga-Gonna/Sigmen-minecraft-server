document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copy-ip");
  const ipText = "Sigmen.aternos.me:58079";

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(ipText).then(() => {
      copyBtn.textContent = "Скопировано!";
      setTimeout(() => {
        copyBtn.textContent = "Скопировать IP";
      }, 2000);
    }).catch(err => {
      console.error("Ошибка копирования:", err);
    });
  });
});

function redirectToDonate() {
  window.open("https://sigmen.trademc.org", "_blank");
}
