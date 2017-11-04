//--------------------------------------//
//----------------SETUP-----------------//
//--------------------------------------//

//....global variables.....

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
// reason for getContext is you can use
//WebGl which is 3d drawings in the browser
// or 2d. We are specifying 2d.
var mouseX = innerWidth/2;
var mouseY = innerHeight/2;
//var timeSpent = 0;
//var randomBack = 'rgb(255 , 0 , 0)';

//....functions......

function resizeCanvas(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}

function updateMouseXY(e){
  mouseX = e.x;
  mouseY = e.y;
}


///////....events.....////////

window.addEventListener('resize', resizeCanvas );
resizeCanvas();

window.addEventListener('mousemove', draw);
window.addEventListener('mousemove', holdOff);


//--------------------------------------//
//-----------------DRAW-----------------//
//--------------------------------------//




function flipHorizontally(img,x,y){
    // move to x + img's width
    ctx.translate(x+img.width,y);

    // scaleX by -1; this "trick" flips horizontally
    ctx.scale(-1,1);

    // draw the img
    // no need for x,y since we've already translated
    ctx.drawImage(img,0,0);

    // always clean up -- reset transformations to default
    ctx.setTransform(1,0,0,1,0,0);
}


function holdOff(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {


  // create new image object to use as pattern
  var img = new Image();
  img.src = 'https://i.ytimg.com/vi/dgXVyWSxGcI/hqdefault.jpg';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setTimeout(holdOff, 100);
    requestAnimationFrame(draw);
  };


}

holdOff();
