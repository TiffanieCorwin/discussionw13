


/*const billingAddressInput = document.getElementById('billingAddress');
        const homeAddressInput = document.getElementById('homeAddress');
        const sameAddressCheckbox = document.getElementById('sameAddress');

        // Add an event listener to the checkbox
        sameAddressCheckbox.addEventListener('change', function () {
            if (this.checked) {
                // Copy the value from billing address to home address
                homeAddressInput.value = billingAddressInput.value;
            } else {
                // Clear the home address field
                homeAddressInput.value = '';
            }
        }); */

document.querySelector("#sameAdress").addEventListener("click",function(){
    let bill = document.querySelector(#bill);
    let home = document.querySelector(#home);

    if (this.checked) {
        home.value = bill.value;
        home.disabled = true;
    }
    else{
        home.value = "";
        home.disabled = false;
    }
    }
)