function recognizeGesture() {

    let file =
        document.getElementById("gestureImage").files[0];

    if(!file){
        alert("Please upload a hand gesture image");
        return;
    }

    let gestures = [
        "Thumbs Up 👍",
        "Victory ✌",
        "Open Palm ✋",
        "Fist ✊",
        "Okay 👌"
    ];

    let prediction =
        gestures[Math.floor(Math.random() * gestures.length)];

    document.getElementById("result").innerHTML =
        "Detected Gesture: " + prediction;
}