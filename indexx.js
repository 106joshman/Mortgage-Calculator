
// Mortgage calculator for ENTERPRISE ASSET LEASING LIMITED
function loanAmount() {
    // initializing the value inputed as loan to be given
    var loan = document.getElementById("lAmount").value;

    // to select preffered month duration
    var getSelectedValue = document.querySelector('input[name="month"]:checked');

    // to calculate the interest rate on loan collected
    var int = (4.25 / 100);

    const interest = document.getElementById("rate").innerHTML = (loan * int).toFixed(2);

    // for the six month tenure
    if (getSelectedValue != null) {
        
        var first = document.getElementById("six").value;
        
        // to calculate principal value for six month
        const fCalc = document.getElementById('principal').innerHTML = (loan / first).toFixed(2);

        // monthly payment value
        document.getElementById('show').innerHTML = '₦ ' + ((loan * int) + (loan / first)).toFixed(2);
    } 
    else if (getSelectedValue != null) {

        var second = document.getElementById("nine").value;

        // to calculate principal value for nine month
        document.getElementById('principal').innerHTML = (loan / second).toFixed(2);

        // monthly payment value
        document.getElementById('show').innerHTML = '₦ ' + ((loan * int) + (loan / second)).toFixed(2);
    }
    else if (getSelectedValue != null) {

        var third = document.getElementById("twelve").value;

        // to calculate principal value for twelve month
        document.getElementById('principal').innerHTML = (loan / third).toFixed(2);

        // monthly payment value
        document.getElementById('show').innerHTML = '₦ ' + ((loan * int) + (loan / third)).toFixed(2);
    }
}


// all codes written out by Ejembi joshua
// github @joshman106
// mail me @ ejembijoshman@gmail.com
// tel +234-816-641-1129 
                            // the end