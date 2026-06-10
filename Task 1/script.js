function predictPrice() {

    let sqft = parseFloat(document.getElementById("sqft").value);
    let bedrooms = parseInt(document.getElementById("bedrooms").value);
    let bathrooms = parseInt(document.getElementById("bathrooms").value);

    let price = (sqft * 150) +
                (bedrooms * 10000) +
                (bathrooms * 5000);

    document.getElementById("result").innerHTML =
        "Predicted House Price: ₹" + price.toLocaleString();
}