// 1. Get the JSON file

async function fetchJSON() {
    try {
        const response = await fetch("../VideoGameCollection/data.json");
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    } catch(error) {
        console.error("Error fetching JSON: ", error);
    }
}

// 2. Fill up the table with the data

function populateTable(data) {
    const tableBody = document.getElementById("games-table").getElementsByTagName("tbody")[0];

    data.games.forEach(game => {
        const row = tableBody.insertRow();
        const cellID = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellYear = row.insertCell(2);
        const cellPublisher = row.insertCell(3);

        cellID.textContent = game.id;
        cellName.textContent = game.name;
        cellYear.textContent = game.year;
        cellPublisher.textContent = game.publisher;

    });
}

fetchJSON().then(populateTable);