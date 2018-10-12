let w = window.innerWidth
let h = window.innerHeight


function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}








class Drop{
  constructor(){
    this.x = randomInteger(0, w)
    this.y = randomInteger(0, -h)
    this.yspeed = randomInteger(1,3)
    this.w = randomInteger(0,4)
    this.h = randomInteger(0,7)
    this.opacity = 1

    this.colors = [[0,222,0],[222,0,0],[0,0,222]]
    this.colorindex = 0
    this.color = this.colors[this.colorindex]
  }
  changecolor(){
    if(++this.colorindex > 2){
      this.colorindex = 0
    }

    this.color = this.colors[this.colorindex]
  }
  move(){
    if (this.y > h) {
      this.y = -170
      this.changecolor()
    }
    this.y += this.yspeed
  }
}

class Drops{
  constructor(amount){
    this.body = []
    for(let i = 0; i < amount; i++){
      this.body[i] = new Drop()
    }
  }
  run(){
    for(let drop of this.body){
      drop.move()
    }
  }
}













class Character{
  constructor(){
    this.character = document.createElement('img')
    this.character.setAttribute('id', 'character')
    this.character.src = './character.gif'
    document.body.appendChild(this.character)

    this.left = -100
  }

move(){
  document.body.removeChild(this.character)
  if( this.left >=  (w + 100) ){
    this.left = -100
  }
  //
  if(this.left <= 0){
    this.character.style.transform = 'scale(1)'
    this.character.style.bottom = '0px'
  }
  if(this.left == 300){
    this.character.style.transform = 'scale(2)'
    this.character.style.bottom = '40px'
  }
  if(this.left == 600){
    this.character.style.transform = 'scale(4)'
    this.character.style.bottom = '120px'
  }
  if(this.left == 900){
    this.character.style.transform = 'scale(8)'
    this.character.style.bottom = '280px'
  }
  if(this.left == 1200){
    this.character.style.transform = 'scale(16)'
    this.character.style.bottom = '320px'
  }
  //

  this.left += 2
  this.character.style.left = this.left + 'px'
  document.body.appendChild(this.character)
}


}




let drops = new Drops(347)


let time = 0


let character = new Character()

function setup(){
  createCanvas(w, 670)
}

function draw(){
  background(0, 0, 0)

  drops.run()
  for(drop of drops.body){
    stroke(String(drop.color[0]),String(drop.color[1]),String(drop.color[2]))
    rect(drop.x, drop.y, drop.w, drop.h)
  }

  character.move()
  ++time
  }






this.character = document.createElement('img')
this.character.setAttribute('id', 'p5')
this.character.setAttribute('style', 'position:absolute')
this.character.src = './p5js.png'
this.character.style.height = '120px'
this.character.style.width = '120px'
document.body.appendChild(this.character)
