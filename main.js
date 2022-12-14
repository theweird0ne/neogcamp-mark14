var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  if(!ip || !qty || !curr){
	  alert("Please fill up all the given fields")
  }else{
	  calculateProfitAndLoss(ip, qty, curr);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial*quantity)) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%`
    );

    outputBox.style.color = 'red';
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial*quantity)) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage.toFixed(2)}%`
    );
    outputBox.style.color = 'green';
  } else {
    showOutput(`No pain no gain and no gain no pain`);
    outputBox.style.color = 'black';
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}