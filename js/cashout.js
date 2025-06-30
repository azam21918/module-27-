 document.getElementById('btn-cash-out').addEventListener('click', function (event) {
            event.preventDefault();
            // phone number ke dhorsi
            const phoneNumber = document.getElementById('phone-number').value;
            // add ammount ke dhorsi
            const cashOutAmount = document.getElementById('cash-out-amount').value;
            const convertedCashOutAmount = parseFloat(cashOutAmount);
            // pin ke dhorsi
            const pin = document.getElementById('pin').value;
            const convertedPin = parseInt(pin);
            // ammount ke dhorsi
            const amount = document.getElementById('main-balance').innerText;
            const convertedAmount = parseInt(amount);
            if (phoneNumber.length == 11) {
                if (convertedPin === 1234) {
                    alert('Welcome To The Cash Out Term');
                    const diff = convertedAmount - convertedCashOutAmount;
                    document.getElementById('main-balance').innerText = diff;
                }
            }
            else {
                alert('pin thick nai')
            }
        })
    