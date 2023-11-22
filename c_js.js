let counter = -1;
document.querySelector("#res").addEventListener("click", re());
document.querySelector("#inc").addEventListener("click", add());
document.querySelector("#dec").addEventListener("click", de());
function fu() {
  const paraElement = document.getElementById("para");
  paraElement.innerHTML = counter;
}
function re() {
  const paraElement = document.getElementById("para");
  counter = 0;
  paraElement.innerHTML = counter;
}
function add() {
  const paraElement = document.getElementById("para");
  counter = counter + 1;
  paraElement.innerHTML = counter;
  for (let i = counter; i > 0; i--) {
    setTimeout(() => {
      const paraElement = document.getElementById("para");
      paraElement.style.color = "blue";
      paraElement.innerHTML = counter - i;
      console.log(i);
    }, i * 1000);
  }
}
function de() {
  const paraElement = document.getElementById("para");
  counter = counter - 1;
  paraElement.innerHTML = counter;
  for (let i = counter; i >= 0; i--) {
    setTimeout(() => {
      const paraElement = document.getElementById("para");
      paraElement.style.color = "blue";
      paraElement.innerHTML = i;
    }, (counter - i) * 1000);
  }
}
