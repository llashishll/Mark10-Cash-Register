const billAmount = document.querySelector("#bill-amount");
const cashReceived = document.querySelector("#cash-received")
const btn1 = document.querySelector("#btn")
const outputBox = document.querySelector("#output")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const notesDenomination = [2000, 500, 100, 20, 10, 5, 1]

btn1.addEventListener("click", returnAmount)

function returnAmount() {

    if (billAmount.value > 0) {

        if (Number(cashReceived.value) >= Number(billAmount.value)) {

            var changeAmount = Number(cashReceived.value) - Number(billAmount.value);

            outputBox.innerText = "Amount to be returned : " + changeAmount
            calculateChange(changeAmount);


        } else {
            outputBox.innerText = "Received cash should be at least equal to the Bill Amount"


        }
    } else {
        outputBox.innerText = "Enter valid bill amount"
    }

    function calculateChange(changeAmount) {

        for (let i = 0; i < notesDenomination.length; i++) {

            var numberOfNotes = Math.trunc(changeAmount / notesDenomination[i]);

            changeAmount = changeAmount % notesDenomination[i];

            noOfNotes[i].innerText = numberOfNotes;


        }
    }


}