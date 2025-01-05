// atualizar a posição da div
function reloadBg(item, event) {
  const x = event.clientX;
  const y = event.clientY;

  // Cálculo
  const percentX = (x / window.innerWidth) * 100;
  const percentY = (y / window.innerHeight) * 100;

  item.style.backgroundPosition = `${percentX}% ${percentY}%`;
}

// inicializador da função
function initBgDetect() {
  const bgs = document.querySelectorAll(".box");

  bgs.forEach(div => {
    div.addEventListener("mousemove", (event) => reloadBg(div, event));
  });
}

// event listener
document.addEventListener("DOMContentLoaded", initBgDetect);