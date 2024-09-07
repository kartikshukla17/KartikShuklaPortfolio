document.addEventListener('DOMContentLoaded', function() {
    const greetings = document.querySelectorAll('.greeting');
    let current = 0;

    function typeGreeting(greetingText, callback) {
        let i = 0;
        const interval = setInterval(() => {
            greetings[current].textContent += greetingText.charAt(i);
            i++;
            if (i === greetingText.length) {
                clearInterval(interval);
                setTimeout(callback, 1000); // Wait for 1 second before clearing and showing the next greeting
            }
        }, 100); // Adjust typing speed here (100ms per character)
    }

    function showNextGreeting() {
        greetings.forEach((greet, index) => {
            greet.textContent = ''; // Clear previous text
            greet.style.display = 'none';
        });

        greetings[current].style.display = 'inline';
        typeGreeting(greetings[current].dataset.text, () => {
            current = (current + 1) % greetings.length;
            showNextGreeting();
        });
    }

    // Set the dataset.text to the original greeting text
    greetings.forEach(greet => {
        greet.dataset.text = greet.textContent;
    });

    showNextGreeting(); // Start the typing effect
});
