const weatherForm = document.querySelector('form')
const region = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')
msg1.textContent = 'Waiting for your input'
msg2.textContent = ''
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = region.value;


    msg1.textContent = 'Loading...';
    msg2.textContent = '';
    if (!address) {
        msg1.textContent = 'Please enter a location';
        return;
    }
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(address)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error;
            }
            else {
                msg1.textContent=data.location
                msg2.textContent=data.forecast
            }
        })
    })
})