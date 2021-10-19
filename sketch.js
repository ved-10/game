var play,about,playimg,aboutimg,back,backImg,aboutbg;
var soundimg,nosoundimg;
var logo,logoimg;
var time=100;
var gameState="wait"
var bg1,bg2;
var wallGroup,wall2Group,wls,wlss
var score;

function preload(){
    aboutimg=loadImage("buttons23/about1.png")
    nosoundoimg=loadImage("buttons23/nosound1.png")
    soundimg=loadImage("buttons23/sound1.png")

    playimg=loadImage("buttons23/play1.png")
    logoimg=loadImage("load/Logo.gif")

    bg1=loadImage("maps/bgl1.png")
    bg2=loadImage("maps/bgl2.png")
    aboutbg=loadImage("load/about.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)

play=createSprite(100,100,20,20)
play.addImage(playimg)


about=createSprite(100,200,20,20)
about.addImage(aboutimg)

sound=createSprite(100,300,20,20)
sound.addImage(soundimg)

nosound=createSprite(100,400,20,20)
nosound.addImage(nosoundoimg)

back=createSprite(windowWidth/2,windowHeight-50,30,20)
back.visible=false
back.addImage(aboutimg)

plr=createSprite(200,200,20,50)
plr.visible=false

eny=createSprite(120,370,100,100)
eny.visible=false

enyhit=createSprite(eny.position.x+300,eny.position.y,500,50)
 enyhit.visible=false
wallGroup = new Group();
bulletGroup = new Group()
enyBulletGroup = new Group();
wall2Group = new Group();
}

function draw(){

if (gameState==="wait"){

    background(logoimg)}
    background.lifetime = 10

if(mousePressedOver(play)){
    gameState="play"
    plr.visible=true
}
if(mousePressedOver(about)){
    gameState="about"
  
}

if(gameState==="about"){
    background(aboutbg)
    play.visible=false
    about.visible=false
    sound.visible=false
    nosound.visible=false
    back.visible=true

    if(mousePressedOver(back)){
        gameState="wait"
        play.visible=true
        about.visible=true
        sound.visible=true 
        nosound.visible=true
        back.visible=false
    }
   
}


if (gameState==="play"){
    background(bg1)
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true
    eny.visible=true
    enyhit.visible=false
    if(frameCount % 25 ==0){ 

        time--;
      }
      fill(0)
      textSize(20)
text("Time Left : "+time, 100,50)
   time.lifetine=10 

    

var wall1=createSprite(5,windowHeight/2,5,windowHeight)
//wall1.visible=false
var wall2=createSprite(windowWidth,310,5,700)
//wall2.visible=false
var wall3=createSprite(windowWidth/2,10,windowWidth,5)
//wall3.visible=false
var wall4=createSprite(windowWidth/2,638,windowWidth,5)
//wall4.visible=false
var wall5=createSprite(250,223,500,10)
//wall5.visible=false
var wall6=createSprite(120,555,200,10)
//wall6.visible=
var wall7=createSprite(1100,400,200,10) 
var wall7=createSprite(600,400,300,20)
//wall7.visible=false

wls=[wall1,wall2,wall3,wall4,wall5,wall6,wall7]


for(var i = 0;i<7;i++){
  wallGroup.add(wls[i]);
}

var exit =createSprite(displayWidth-50,displayHeight/2+200,10,100) 

plrMovement();
spawnplrBullet();
spawnenyBullet();

if(bulletGroup.isTouching(eny)){
    eny.destroy()
    enyhit.destroy()
    bulletGroup.destroyEach()
    enyBulletGroup.destroyEach()
        
}
     
if(enyBulletGroup.isTouching(plr)){
    plr.destroy()
    bulletGroup.destroyEach()
    enyBulletGroup.destroyEach()
}

if(plr.isTouching(exit)){
     gameState="play2"
     plr.x = windowWidth/4
    plr.y= windowHeight/2+200
 }

}


if(gameState==="play2"){
    background(bg2)
    wallGroup.destroyEach();
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true
    

    var wall8 = createSprite(windowWidth/2,5,windowWidth,5)
    var wall9 = createSprite(5,windowHeight/2,5,windowHeight)
    var wall10 = createSprite(windowWidth/2+670,windowHeight/2,5,windowHeight) 
    var wall11 = createSprite(10,windowHeight/6-10,2310,15)
    var wall12 = createSprite(10,windowHeight/4+30,350,15)
    var wall13 = createSprite(40,windowHeight/2-35,800,15)
    var wall14 = createSprite(100,windowHeight/2+63,984,15)
    var wall15 = createSprite(100,490,180,15)
    var wall16 = createSprite(100,617,900,15)
    var wall17 = createSprite(970,587,895,15)
    var wall18 = createSprite(1300,490,500,15)
    var wall19 = createSprite(613,490,550,15)
    var wall20 = createSprite(920,390,260,15)
    var wall21 = createSprite(1300,390,200,15)
    var wall22 = createSprite(920,195,950,15)
    var wall23 = createSprite(900,295,550,15)

    wlss=[wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23]
    for(var i = 0;i<15;i++){
        wall2Group.add(wlss[i]);
      }
    plrMovement2();


}




    drawSprites()    
}



function spawnplrBullet(){

var bullet =createSprite(plr.position.x,plr.position.y,10,1)
bullet.visible=false
   if(keyDown("q") && keyDown("RIGHT_ARROW") || keyDown("q") && keyDown("d")){
    bullet.visible=true
    bullet.velocityX = 10
    plr.x=plr.x+0
    }

    if(keyDown("q") && keyDown("LEFT_ARROW") || keyDown("q") && keyDown("a")){
        bullet.visible=true
        bullet.velocityX = -10
        }

        bullet.lifetime = 100 ; 
        bulletGroup.add(bullet)
        bullet.lifetime = 50
    
}

function spawnenyBullet(){
    var enyBullet = createSprite(eny.position.x,eny.position.y,10,1)
enyBullet.visible=false
/*if(enyhit.isTouching(plr)){
    enyBullet.visible=true;
    enyBullet.velocityX = 50
}*/

enyBullet.lifetime=100;
enyBulletGroup.add(enyBullet)
}

function plrMovement(){
    plr.velocityY = 15
plr.collide(wallGroup)
//plr.collide(wall2Group)

if(keyDown("LEFT_ARROW")||keyDown("a")){
    plr.x=plr.x-6
}

if(keyDown("RIGHT_ARROW")||keyDown("d")){
    plr.x=plr.x+6
}

if(keyDown("UP_ARROW")||keyDown("w") && plr.y >= 100) {
    plr.velocityY = -16;
}

}



function plrMovement2(){
    plr.velocityY = 15

plr.collide(wall2Group)

if(keyDown("LEFT_ARROW")||keyDown("a")){
    plr.x=plr.x-6
}

if(keyDown("RIGHT_ARROW")||keyDown("d")){
    plr.x=plr.x+6
}

if(keyDown("UP_ARROW")||keyDown("w") && plr.y >= 100) {
    plr.velocityY = -16;
}

}