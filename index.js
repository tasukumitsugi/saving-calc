document.querySelector("button").addEventListener("click", () => {
  const result = document.getElementById("result");
  result.innerHTML = "";

  let setBusd = document.getElementById("busd").value;
  const days = document.getElementById("days").value;
  
  let busd = parseFloat(setBusd);
  for (let i = 0; i < days; i++) {
    const reward = (busd * 0.1) / 365;
    busd = busd + reward;
    result.insertAdjacentHTML("beforeend", `<p>${i + 1}: ${busd} (${reward})</p>`);
    // console.log("reward", reward);
    // console.log(i, busd);
  }
});
