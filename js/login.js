document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin)
        if (phoneNumber.length == 11) {
            if (convertedPin === 1234) {
                alert('Welcome To The New Home Page');
                window.location.href = "./main.html";
            }
            else {
                alert('pin thick nai')
            }
        }
        else {
            alert('number thick nai');
        }
    })
// 