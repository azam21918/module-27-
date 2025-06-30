 document.getElementById('btn-add-money').addEventListener('click', function (event) {
            event.preventDefault();
            // phone number ke dhorsi
            const phoneNumber = document.getElementById('phone-number').value;
            // add ammount ke dhorsi
            const addAmount = document.getElementById('add-amount').value;
            const convertedAddAmount = parseFloat(addAmount);
            // pin ke dhorsi
            const pin = document.getElementById('pin').value;
            const convertedPin = parseInt(pin);
            // ammount ke dhorsi
            const amount = document.getElementById('main-balance').innerText;
            const convertedAmount = parseInt(amount);
            if (phoneNumber.length == 11) {
                if (convertedPin === 1234) {
                    alert('Welcome To The Add Money Term');
                    const sum = convertedAmount + convertedAddAmount;
                    document.getElementById('main-balance').innerText = sum;
                }
            }
            else {
                alert('pin thick nai')
            }
        })
    