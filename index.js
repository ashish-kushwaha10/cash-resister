const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  let cashValue = Number(cashGiven.value);
  let billValue = Number(billAmount.value);
  if ( billValue > 0) {
    if ( cashValue>= billValue) {
      const amountToBeReturned = cashValue - billValue
      calculateChange(amountToBeReturned);
    } else {
      showMessage("cash value should be greater than bill amount");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for(let i=0; i<availableNotes.length; i++){
    let notesCount= Math.trunc(amountToBeReturned/availableNotes[i])
    amountToBeReturned = amountToBeReturned%availableNotes[i]
    noOfNotes[i].innerText=notesCount
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}