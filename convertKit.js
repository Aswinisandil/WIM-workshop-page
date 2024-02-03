
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the email input value
    const email = document.querySelector('.inp').value.trim();

    if (email === "") {
        document.querySelector("#msg").innerHTML = "Enter your emailID";
    } else {
        // Replace 'YOUR_API_KEY' with your actual ConvertKit API key
        const apiKey = '4RVHEx4WhpQhzH91b-sdIA';
        const formId = '5506615';
        window.location.href = "https://pages.razorpay.com/pl_NBQVDcOZiZh2K4/view";
        fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe?api_key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                fields: {
                    utmSource: document.getElementById('utmSource').value.trim(),
                },
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response from ConvertKit API
            // Handle success or redirect as needed
            document.querySelector("#msg").innerHTML = "Subscription successful!";
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error or display an error message
            document.querySelector("#msg").innerHTML = "Error occurred during subscription.";
        });
    }
});