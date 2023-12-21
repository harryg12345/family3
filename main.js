Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="snap" src="' + pic + '">';
    })
}
img_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j7d6WXycy/",faceloaded)
function faceloaded() {
    console.log("face succsefully loaded")
}
function check(){
    img = document.getElementById("snap");
    img_model.classify(img, getResult)
}
function getResult(e,r){
    if(e){
        console.error(e);
    }
    else {
        console.log(r)
        document.getElementById("family_result").innerHTML = r[0].label;
        document.getElementById("family_accuracy").innerHTML = r[0].confidence.toFixed(2)
    }
}