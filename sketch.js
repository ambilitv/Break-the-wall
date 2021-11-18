var girl;
var wall1, wall2, wall3, wall4;
var ball;
var score,timer;
score=0;
timer=1000;
var coin, coinImage, coin1, coin2, coin3, coin4, coin5;
var monster;
var wallBreak
function preload(){
girlImage= loadImage("Images/girlImage.png");
wallImage= loadImage("Images/wallImage.png");
hammerImage= loadImage("Images/hammer.png");
wallBreak=loadImage("Images/wallBreak.png"); 
coinImage=loadImage("Images/coinBWG.png");
monsterImage=loadImage("Images/monster.png");


}


function setup(){

createCanvas(900,700);
girl=createSprite(300,100, 10,20);
girl.addImage(girlImage);
girl.scale=.1;
wall1= createSprite(650,500, 80, 10);
wall1.addImage(wallImage);
wall1.scale=.1;
wall2= createSprite(650,200, 80, 10);
wall2.addImage(wallImage);
wall2.scale=.1;
wall3= createSprite(200, 600, 10,80);
wall3.addImage(wallImage);
wall3.scale=.1;
wall4= createSprite(200, 200, 10,80);
wall4.addImage(wallImage);
wall4.scale=.1;
wall5= createSprite(200, 350, 10,80);
wall5.addImage(wallImage);
wall5.scale=.1;
wall6= createSprite(200, 450, 10,80);
wall6.addImage(wallImage);
wall6.scale=.1;
wall6= createSprite(10, 200, 10,80);
wall6.addImage(wallImage);
wall6.scale=.1;
hammer=createSprite(350, 550, 20, 20);
hammer.addImage(hammerImage); 
hammer.scale=.05;
hammer.setCollider("rectangle",0,0,1100,700);
hammer.debug=true;

coin1=createSprite(20,300,20,20);
coin1.addImage(coinImage);
coin1.scale=.05;
coin2=createSprite(25,600,20,20);
coin2.addImage(coinImage);
coin2.scale=.05;

coin3=createSprite(850,300,20,20);
coin3.addImage(coinImage);
coin3.scale=.05;

coin4=createSprite(875,800,20,20);
coin4.addImage(coinImage);
coin4.scale=.05;

coin5=createSprite(400,300,20,20);
coin5.addImage(coinImage);
coin5.scale=.05;

monster=createSprite(850,200,20,15);
monster.addImage(monsterImage);
monster.scale=.25;
monster.velocityY=2;

//wall1.addImage(WallBreak);
}

function draw(){
background("yellow");
drawSprites();
timer=timer-1;
if (keyDown("UP")){
girl.y= girl.y-2;
}

if (keyDown("Down")){
    girl.y= girl.y+2
}

if (keyDown("Left")){
    girl.x= girl.x-2
}

if (keyDown("Right")){
    girl.x= girl.x+2
}
textSize(20);
text("score: "+score,800,50);
text("Timer: "+timer,50,50);


girl.collide(wall1);
girl.collide(wall2);
girl.collide(wall3);
girl.collide(wall4);

edges= createEdgeSprites();
girl.bounceOff(edges);
monster.bounceOff(edges)

if (girl.isTouching(hammer)){
    hammer.x=girl.x;
    hammer.y=girl.y;
}

if (hammer.isTouching(wall1)){
    console.log("test")
    wall1.addImage(wallBreak)
    wall1.destroy();
}
if (girl.isTouching(monster)||timer<=0){
    
    swal(
        {
          title: `Game Over!!!`,
          text: "Thanks for playing!!",
          imageUrl:
            "https://www.pinclipart.com/picdir/big/556-5565281_money-3221936-clipart-treasure-clip-art-png-download.png",
          imageSize: "150x150",
          confirmButtonText: "Play Again"
        },
        function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        }
      );

    girl.destroy();
}

if(score>400){
    swal(
        {
          title: `You Won!!!`,
          text: "Thanks for playing!!",
          imageUrl:
            "https://www.pinclipart.com/picdir/big/556-5565281_money-3221936-clipart-treasure-clip-art-png-download.png",
          imageSize: "150x150",
          confirmButtonText: "Play Again"
        },
        function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        }
      );
}
}
