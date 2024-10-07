document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'flight.html';
        });
    }

    const flightForm = document.getElementById('flightForm');
    if (flightForm) {
        flightForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'datetime.html';
        });
    }

    const datetimeForm = document.getElementById('datetimeForm');
    if (datetimeForm) {
        datetimeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'payment.html';
        });
    }

    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Payment Submitted!');
        });
    }
});
