function classifyImage() {

    let file =
        document.getElementById("imageInput").files[0];

    if(!file){
        alert("Please upload an image");
        return;
    }

    let randomPrediction =
        Math.random() > 0.5 ? "Dog" : "Cat";

    document.getElementById("result").innerHTML =
        "Prediction: " + randomPrediction;
}