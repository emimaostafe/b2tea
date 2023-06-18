var tableContainer = document.getElementById("tableContainer");

for (var i = 0; i < 10; i++) {
    var tableDiv = document.createElement("div");
    tableDiv.className = "table";

    var tableShapeDiv = document.createElement("div");
    tableShapeDiv.className = "table-shape";

    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // Table
    var aElement = document.createElementNS("http://www.w3.org/2000/svg", "a");
    //trebuie colorate mesele in functie de disponibilitatea lor.
    var circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleElement.setAttribute("id", "round-table");
    circleElement.setAttribute("r", "45");
    circleElement.setAttribute("cx", "90");
    circleElement.setAttribute("cy", "90");

    var textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", "45%");
    textElement.setAttribute("y", "53%");
    textElement.setAttribute("text-anchor", "middle");
    textElement.setAttribute("font-size", "20");
    textElement.setAttribute("fill", "white");
    textElement.textContent = "Table " + (i + 1);

    aElement.appendChild(circleElement);
    aElement.appendChild(textElement);
    svgElement.appendChild(aElement);

    // Seats
    for (var j = 0; j < 4; j++) {
        var seatElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        seatElement.setAttribute("id", "seat");
        seatElement.setAttribute("cx", j % 2 === 0 ? "45" : "135");
        seatElement.setAttribute("cy", j < 2 ? "45" : "135");
        seatElement.setAttribute("r", "15");

        svgElement.appendChild(seatElement);
    }

    tableShapeDiv.appendChild(svgElement);
    tableDiv.appendChild(tableShapeDiv);
    tableContainer.appendChild(tableDiv);
}
