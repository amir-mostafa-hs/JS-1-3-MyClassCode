setTimeout(() => {
  alert("Hello");
}, 2000);

let count = 0;
let jonedel = setInterval(() => {
  alert(" Halet chetore jane del");
  count++;
  if (count >= 3) {
    clearInterval(jonedel);
  }
}, 3000);
