// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

circles = [];

function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1) + min);
}

for(let i =0; i<10 ;i++){
  let circleObject = {};
  circleObject.x = getRandomInt(0,width);
  circleObject.y = getRandomInt(0,height);
  circleObject.radius = 30;
  circleObject.color = "blue";
  circleObject.speedX = 6;
  circleObject.speedY = 7;

  circleObject.draw = function(){
    context.beginPath();
    context.lineWidth = "50";
    context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fillStyle = circleObject.color;
    context.fill();

  }
  circleObject.update = function(){
    circleObject.x = circleObject.x + circleObject.speedX;
    circleObject.y = circleObject.y + circleObject.speedY;
    circleObject.color = "rgb("+getRandomInt(0,245)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+")";
    circleObject.radius = getRandomInt(1,255);
    if(circleObject.y > height - circleObject.radius){
      circleObject.speedY = - circleObject.speedY
    }

    if(circleObject.y < 0){
      circleObject.speedY =  -circleObject.speedY
    }

    if(circleObject.x > width - circleObject.radius){
      circleObject.speedX = - circleObject.speedX;
    }

    if(circleObject.x < 0){
      circleObject.speedX =  -circleObject.speedX
    }


    
  }

  circles.push(circleObject);

}

function anime(){
  for(let i = 0;i<circles.length;i++){
    circles[i].draw();
    circles[i].update();
  }
}

setInterval(anime,10)








