document.getElementById("calculateBtn").addEventListener("click", ()=>{
    document.getElementById("errorText").textContent = ``;
    let loanAmount = document.getElementById("amount").value;
    let intrest = document.getElementById("interest").value;
    let years = document.getElementById("years").value;
    console.log(loanAmount.textContent)
    if(loanAmount === "" || intrest === "" || years === ""){
        document.getElementById("errorText").textContent = `Invalid Inputs`;
        return;
    }

    else{
        loanAmount = parseInt(loanAmount);
        intrest = parseFloat(intrest);
        years = parseInt(years);
        
        let r = (intrest)/(12*100);
        let n = years * 12;

        const EMI = loanAmount * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
        const totalPayment = EMI * n;
        const totalInterest = totalPayment - loanAmount;

        let EMIplace = document.getElementById("monthly");
        let Paymentplace = document.getElementById("total");
        let Interestplace = document.getElementById("totalInterest");

        // EMIplace.textContent = `$${Math.floor(EMI)}`;
        // Paymentplace.textContent = `$${Math.floor(totalPayment)}`;
        // Interestplace.textContent = `$${Math.floor(totalInterest)}`;

        animation(EMIplace, 0, Math.floor(EMI), 1000);
        animation(Paymentplace, 0, Math.floor(totalPayment), 1000);
        animation(Interestplace, 0, Math.floor(totalInterest), 1000);
    }
})

function animation(element, start, end, duration){
    const startTime = performance.now();
    let progress = 0;
    function update(currTime){
        const elapsed = currTime - startTime;
        progress= Math.min(elapsed/duration, 1);
        const current = start + (end - start) * progress;
        element.textContent = `$${current}.00`;

        if(progress < 1){
            requestAnimationFrame(update);
        }
    }

    
    requestAnimationFrame(update);
}