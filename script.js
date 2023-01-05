let inputEleAmount = document.getElementById("amount");
let inputEleDuration = document.getElementById("duration");
let inputEleInterest = document.getElementById("price");
let btnEle = document.getElementById("btn");
let abc = document.getElementById("abc");

btnEle.addEventListener("click", function () {

  let amount=inputEleAmount.value;
  let duration=inputEleDuration.value;
  let rate=inputEleInterest.value;

  const interest = (amount * (rate * 0.01))/duration;
  const total = ((amount / duration) + interest).toFixed(2);

  console.log(total);
  // btnEle.style.display="none";
  abc.innerHTML="EMI : (₹) " + total;
  "EMI : (₹)" + total
  }

  

);
