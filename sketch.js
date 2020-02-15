var canavs;
var database;

var drawing = []

function setup() {
    canvas = createCanvas(600, 600);
    canvas.parent('canvascontainer');
    database = firebase.database()
    background("black")
    var clearCanvasButton = select('#clearCanvasbutton');

    //clearCanvasButton.mousePressed(clearDrawing)

}

var pixels = []

function mouseDragged() {

    var point = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}

function draw() {
    readData()
    //clearDrawing();
    beginShape();
    stroke(255);
    strokeWeight(2);
    noFill();
    //title.html("Canvas");
    //title.position(20,20,20,20);
    for (var i = 0; i < pixels.length; i++) {
        vertex(pixels[i].x, pixels[i].y);
        endShape();
    }

}

function readData() {
    database.ref('drawing/').on('value', (data) => {
        pixels = data.val().d
    })
}


function clearDrawing() {
    pixels = [];
    var CCANVAS = database.ref('drawing');
    CCANVAS.remove()
}
function mousePressed(clc){
  background("black")
 // pixels.remove();
 // drawing =  []
 canvas= [];
  /*mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2-30,displayHeight/2-40);
 }); */
}