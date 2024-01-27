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

const formatCitation = () => {
    const mlaInput = document.getElementById("mla-input");

    const citation = mlaInput.value.split(".");

    console.log(citation);

    let formattedCitation = {
        "author": "",
        "sourceTitle": "",
        "containerTitle": "",
        "otherContributors": [],
        "version": "",
        "number": "",
        "publisher": "",
        "publicationDate": "",
        "location": "",
        "url": ""
    };

    reverseAuthor = citation[0].split(",");
    formattedCitation.author = reverseAuthor[1] + " " + reverseAuthor[0];
    formattedCitation.sourceTitle = citation[1];
    
    console.log(formattedCitation.author);
    console.log(formattedCitation.sourceTitle.replace(/\s+/g, ''));

    // Return all the values

    // traverse object?

    const mlaOutput = document.getElementById("mla-output");

}