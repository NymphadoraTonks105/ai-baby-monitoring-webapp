objects=[];
img = "";
status = "";

function preload(){

}


function setup() {
  canvas = createCanvas(440, 440);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(440,440);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting...";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects=results;
}


function draw() {
  image(video, 0, 0, 440, 440);
  
if(status !=""){
objectDetector.detect(video,gotResult);
  for(i = 0; i<objects.length; i++){

document.getElementById("status").innerHTML = "Status : Detected";
document.getElementById("message").innerHTML = "person found";

fill("#fadadd");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
noFill();
stroke("#FFD1DC");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

  }
}
  
}
if (text="person") {
  document.getElementById("message").innerHTML = "person found";
} else {
  document.getElementById("message").innerHTML = "person not found";
}
