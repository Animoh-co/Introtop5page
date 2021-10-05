function preload(){

}

function setup(){
    Canvas =createCanvas(500, 600);
  Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";
}

function draw(){
    image(video, 50, 60, 300, 400);
    tint(tintcolor);
}

function applyfilter(){
    tintcolor = document.getElementById("fillcolortextin").value;
}

function take_snapshot(){
save("myimage.png");
}