// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
alert("WELCOME TO WINGATE INN!");

var userInput = prompt("Please enter your name:", "Brent Doe");
if (userInput !== null) {
    alert("Hello, " + userInput + "!");
} else {
    alert("Invalid");
}
