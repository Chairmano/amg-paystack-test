function payWithPaystack() {

    let email = document.getElementById("email").value;

    if (!email) {
        alert("Please enter your email address.");
        return;
    }

    let handler = PaystackPop.setup({

        key: 'pk_test_98e526f5664747e17ffcb837e8640fe3c4526afe',

        email: email,

        amount: 1000, // GHS 10.00

        currency: 'GHS',

        callback: function(response) {

            document.getElementById("result").innerHTML =
                "Payment Successful<br><br>Reference: " +
                response.reference;
        },

        onClose: function() {
            alert("Payment window closed.");
        }

    });

    handler.openIframe();
}