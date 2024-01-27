const formatNumber = () => {
    const phoneInput = document.getElementById("phone-input");
    const number = phoneInput.value;
    
    const areaCode   = number.slice(0, 3);
    const middlePart = number.slice(3, 6);
    const lastPart   = number.slice(6, 10);
    
    const formattedNumber = number.length === 10 ? `(${areaCode})-${middlePart}-${lastPart}` : "";
    
    const phoneOutput = document.getElementById("phone-output");
    phoneOutput.textContent = formattedNumber;
}