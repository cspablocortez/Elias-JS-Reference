const formatNumber = (number) => {
    const phoneOutput = document.getElementById("phone-output");

    const areaCode   = number.slice(0, 3);
    const middlePart = number.slice(3, 6);
    const lastPart   = number.slice(6, 9);

    const formattedNumber = number.length === 10 ? `(${areaCode})-${middlePart}-${lastPart}` : "Invalid input";
    phoneOutput.textContent = formattedNumber;
}