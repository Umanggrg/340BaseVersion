// This is the client side request being made to the server.

function makeQueryRequest(endpoint, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const queryResults = xhr.response.toString().split("\n");
                callback(queryResults);
            } else {
                console.error('Error making request:', xhr.statusText);
            }
        }
    };
    xhr.send("");
}

function updateHTML(queryResults) {
    for (let i = 0; i < queryResults.length; i++) {
        const rowData = queryResults[i].split(",");
        document.getElementById("DestinationName00" + (i + 1)).innerHTML = "Destination Name: " + rowData[1];
        document.getElementById("Description00" + (i + 1)).innerHTML = "Description: " + rowData[2];
        document.getElementById("Defined_landmarks00" + (i + 1)).innerHTML = "Defined_landmarks: " + rowData[3];
        document.getElementById("TotalPrice00" + (i + 1)).innerHTML = "Total Price: " + rowData[4];
        document.getElementById("Season00" + (i + 1)).innerHTML = "Season: " + rowData[5];
        document.getElementById("Rating00" + (i + 1)).innerHTML = "Ratings: " + rowData[6];
    }
}

function getQueryResults() {
    makeQueryRequest('/getQueryResults', updateHTML);
}

function getsecondquery() {
    makeQueryRequest('/getsecondquery', updateHTML);
}

function getthirdquery() {
    makeQueryRequest('/getthirdquery', updateHTML);
}

function getfourthquery() {
    makeQueryRequest('/getfourthquery', updateHTML);
}

function getfifthquery() {
    makeQueryRequest('/getfifthquery', updateHTML);
}



function getQueryResults() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            queryResults = xhr.response
            // Creates a list of all the results from the Query
            queryResults = queryResults.toString().split("\n")

            for (let i = 0; i < queryResults.length; i++) {
                const rowData = queryResults[i].split(",");
                document.getElementById("DestinationName00" + (i + 1)).innerHTML = "Destination Name: " + rowData[1];
                document.getElementById("Description00" + (i + 1)).innerHTML = "Description: " + rowData[2];
                document.getElementById("Defined_landmarks00" + (i + 1)).innerHTML = "Defined_landmarks: " + rowData[3];
                document.getElementById("TotalPrice00" + (i + 1)).innerHTML = "Total Price: " + rowData[4];
                document.getElementById("Season00" + (i + 1)).innerHTML = "Season: " + rowData[5];
                document.getElementById("Rating00" + (i + 1)).innerHTML = "Ratings: " + rowData[6];
            }
            // document.getElementById("Rating003").innerHTML = "Ratings: " + firstQuery[6].toString()
        }

    };
    xhr.send("");
}
//
// function getsecondquery() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/getsecondquery', true);
//     // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // The results of the query are caught here and are posted as an alert.
//             queryResults = xhr.response
//             // Creates a list of all the results from the Query
//             queryResults = queryResults.toString().split("\n")
//             // Inserting the data the first resutl to HTML
//             for (let i = 0; i < queryResults.length; i++) {
//                 let rowData = queryResults[i].toString().split(",");
//                 document.getElementById("DestinationName00" + (i + 1)).innerHTML = "Destination Name: " + rowData[1].toString();
//                 document.getElementById("Description00" + (i + 1)).innerHTML = "Description: " + rowData[2].toString();
//                 document.getElementById("Defined_landmarks00" + (i + 1)).innerHTML = "Defined_landmarks: " + rowData[3].toString();
//                 document.getElementById("TotalPrice00" + (i + 1)).innerHTML = "Total Price: " + rowData[4].toString();
//                 document.getElementById("Season00" + (i + 1)).innerHTML = "Season: " + rowData[5].toString();
//                 document.getElementById("Rating00" + (i + 1)).innerHTML = "Ratings: " + rowData[6].toString();
//             }
//         };
//         xhr.send("");
//     }
// }

function getthirdquery() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getthirdquery', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            queryResults = xhr.response
            // Creates a list of all the results from the Query
            queryResults = queryResults.toString().split("\n")
            // Inserting the data the first resutl to HTML
            firstQuery = queryResults[0].toString().split(",")
            document.getElementById("countryName001").innerHTML = "Country Name: " + firstQuery[1].toString()
            document.getElementById("image001").src = firstQuery[2].toString()
            document.getElementById("countryRating001").innerHTML = "Rating: " + firstQuery[3].toString()
            document.getElementById("countryInformation001").innerHTML = "Information: " + firstQuery[4].toString()
        }
    };
    xhr.send("");
}

// function getQueryResults() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/getQueryResults', true);
//     // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // The results of the query are caught here and are posted as an alert.
//             alert(xhr.responseText);
//         }
//     };
//     xhr.send("");
// }