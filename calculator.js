const inputAmount = document.getElementById('inputAmount');
const inputYears = document.getElementById('inputYears');
const inputRate = document.getElementById('inputRate');
const repaymentRadio = document.getElementById('repayment');
const interestOnlyRadio = document.getElementById('interest');
const calculateButton = document.getElementById('cal');
const calculatedAmount = document.querySelector('.calculated-amount h1');
const totalRepayment = document.querySelector('.total-repay h6');
const monthlyMsg=document.getElementById('monthly-msg');
const totalMsg=document.getElementById('total-msg');

var check2;

calculateButton.addEventListener('click', () => {
    if(inputAmount.value.trim()==''||inputYears.value.trim()==''||(!repaymentRadio.checked&&!interestOnlyRadio.checked)){
        check2=false;
    }else if(!inputAmount.value.trim()==''&&!inputYears.value.trim()==''&&!inputRate.value.trim()==''&&(repaymentRadio.checked||interestOnlyRadio.checked)){
        check2=true;
    }
    if(check2){
        calculateRepayments();
    }
});

function calculateRepayments(){
    var amount = parseFloat(inputAmount.value);
    var months = parseFloat(inputYears.value)*12;
    var rate = parseFloat(inputRate.value)/100/12
    if(repaymentRadio.checked){
        repayment( amount, months, rate)
    }else if(interestOnlyRadio.checked){
        interestOnly(amount, months, rate);
    }
}

function repayment(amount, months, rate){
    var monthly = (amount*rate*Math.pow(1+rate, months))/(Math.pow(1+rate, months)-1);
    var totalRepay = monthly * months;
    totalRepay = totalRepay.toFixed(2);
    monthly = monthly.toFixed(2);
    totalRepayment.textContent=totalRepay;
    calculatedAmount.textContent=monthly;
    monthlyMsg.textContent='Your monthly repayments';
    totalMsg.textContent="Total you'll repay over the term";
}

function interestOnly(amount, months, rate) {
    var monthlyInterest = amount*rate;
    var totalInterest = monthlyInterest * months;
    monthlyInterest = monthlyInterest.toFixed(2);
    totalInterest = totalInterest.toFixed(2);
    totalRepayment.textContent = totalInterest;
    calculatedAmount.textContent = monthlyInterest;
    monthlyMsg.textContent='Monthly interest';
    totalMsg.textContent="Total interest over the term";
}