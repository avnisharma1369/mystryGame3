
var splashScreen,play,next,bgimg
var gameState="wait"
var playbutton,musicbutton,mutebutton,nextbutton,bgSound

function preload() {
    splashScreen = loadImage("splash.gif")
    bgimg = loadImage("bgImg2.png")

    bgSound=loadSound("backgroundmusic.mp3")
  
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton=createImg("play.png")
    playbutton.position(width/2-200,height-200)
    playbutton.size(150,150)

    musicbutton = createImg("music.png")
    musicbutton.position(playbutton.x+200,height-200)
    musicbutton.size(160,150)
    musicbutton.mouseClicked(mute)

    // musicbutton.hide()

    mutebutton = createImg("mute.png")
    mutebutton.position(playbutton.x+200,height-200)
    mutebutton.size(160,150)
    mutebutton.mouseClicked(mute)

    mutebutton.hide()

    

}

function draw(){

    if(gameState=="wait"){
    background(splashScreen)
}

playbutton.mousePressed(()=>{
    gameState="about"
})


if(gameState=="about"){
popabout()
playbutton.hide()
musicbutton.hide()
}


if(gameState=="level1"){
    background(bgimg)
}

}

function popabout(){
    swal({
       title: "Zombie Survival!!",
       text:"Let the Zobmie collect .. self help Items!!",
       imageUrl:"skull.png",
       imageSize:"200x200",
       confirmButtonText:"START ", 
        confirmButtonColor:"green"
    
    },
    function(){
       gameState="level1"
    })
    
    
    }

    function mute() {
        if (bgSound.isPlaying()) {
            bgSound.stop();
            musicbutton.show();
            mutebutton.hide();
            console.log("mute")
        }
        else {
            mutebutton.show()
            musicbutton.hide();
            bgSound.play();
            console.log("unmute")
        }
    }