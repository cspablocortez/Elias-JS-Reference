
function format(e) {
    const inputElement = document.getElementById(e.id);
    const formattedNumberElement = document.getElementById('formatted-phone-number');
    const num = inputElement.value;
    formattedNumberElement.textContent = `(${num.substring(0, 3)})-${num.substring(4, 7)}-${num.substring(8, 12)}`;
}
