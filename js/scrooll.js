// init variables
let indexPage = 0

let divs = [
  document.getElementById("amazonia"),
  document.getElementById("caatinga"),
  document.getElementById("cerrado"),
  document.getElementById("pampa"),
  document.getElementById("atlantica"),
  document.getElementById("pantanal")
]


function reloadDivIndex() {
  divs[indexPage].scrollIntoView({behavior: "smooth"})
}

function reloadLet() {
  if (indexPage < 0) {
    indexPage = 0
  } 
  if (indexPage > 5) {
    indexPage = 5
  }
}

// evente of wheel
document.addEventListener("wheel", (Event) => {
  if (Event.deltaY > 0) {
    indexPage ++
  } else {
    indexPage --
  }
  reloadLet()
  reloadDivIndex()
})