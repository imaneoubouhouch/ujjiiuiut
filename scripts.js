function showContactConfirmation() {
    // just CSS ( change div avec un div )
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
}

function redirectToPurchaseForm(motoName, motoPrice) {
    localStorage.setItem('motoName', motoName);
    localStorage.setItem('motoPrice', motoPrice);
    window.location.href = 'purchase.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // detection de page purchase html et prise de donné name et prix 
    if (window.location.pathname.endsWith('purchase.html')) {
        const motoName = localStorage.getItem('motoName');
        const motoPrice = localStorage.getItem('motoPrice');
             console.log("This is the values ",motoName)
        if (motoName && motoPrice) {
            document.getElementById('moto-name').value = motoName;
//document.getElementsByName
            document.getElementById('moto-price').value = motoPrice;
        }
        // apres soumission - > alert -> redirection vers index . html
        document.getElementById('purchase-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Here you can add your form submission logic, like an AJAX request.
            alert('Form submitted for ' + document.getElementById('moto-name').value);
            window.location.href = 'index.html';
        });
    }
});