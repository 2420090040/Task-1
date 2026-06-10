function segmentCustomer() {

    let income = parseInt(document.getElementById("income").value);
    let score = parseInt(document.getElementById("score").value);

    let cluster = "";

    if(income >= 80000 && score >= 70){
        cluster = "Premium Customer";
    }
    else if(income >= 50000 && score >= 40){
        cluster = "Regular Customer";
    }
    else{
        cluster = "Budget Customer";
    }

    document.getElementById("result").innerHTML =
        "Customer Segment: " + cluster;
}