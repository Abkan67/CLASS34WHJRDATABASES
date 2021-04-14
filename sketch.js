var ball;
var position;
var database;
var databasereference;
function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball = createSprite(0,0,20,20);
    databasereference = database.ref('Ball/Position');
    databasereference.on("value", readposition, showerror);
    ball.shapeColor = "red";
}
function draw(){
    background("white");
    if (keyDown(UP_ARROW)) {
        writePosition(0,-1)
    }
    if (keyDown(DOWN_ARROW)) {
        writePosition(0,1)
    }
    if(keyDown(LEFT_ARROW)) {
        writePosition(-1,0)
    }
    if(keyDown(RIGHT_ARROW)) {
        writePosition(1,0)
    }
    drawSprites();
}

function writePosition(mx,my) {
    databasereference.set({'x':position.x+mx, 'y':position.y+my})
}
function readposition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function showerror(error) {
    console.log("error in writing to the database");

}