const dino = document.querySelector('.dino'),
      cactus = document.querySelector('.cactus'),
      hiScore = document.createElement('div');
      
      
let counter = 0,
    levelNumber = 1,
    level = 1;
      
hiScore.classList.add('score');
hiScore.innerHTML = `HI SCORE: 0`;
document.querySelector('.game').appendChild(hiScore);

window.addEventListener('keydown', (event)=> {

    switch(true) {

        case (event.code == 'Space' && cactus.style.animationPlayState != 'paused'):
            jump();
            hiScore.innerHTML = `HISCORE: ${counter}`
            break;
        case (event.code == 'Enter'):
            paused();
            break;
    }

    if(counter != 0 && counter % 5 == 0 && parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) < 140) {
        levelNumber++;
        level++;
        alert(`LEVEL ${level}`);
        if(levelNumber > 5) {
            levelNumber = 1;
        }
    }


})      

function paused () {
    if(cactus.style.animationPlayState != 'paused'  && document.querySelector('.game').style.animationPlayState != 'paused') {

        cactus.style.animationPlayState = 'paused';
        document.querySelector('.game').style.animationPlayState = 'paused'
        let pause = document.createElement('h2');
        pause.classList.add('pause');
        pause.innerHTML = `PAUSE`;
        document.querySelector('.game').appendChild(pause);

    } else {

        cactus.style.animationPlayState = 'running';
        document.querySelector('.game').style.animationPlayState = 'running'
        document.querySelector('.pause').remove();

    }

}

function jump () {
    
    if(!dino.classList.contains('jump')) {
        dino.classList.add('jump');
    } 

    if(parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) < 150 && parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) > 100) {
        counter++;
    }
    
        setTimeout(()=>{
            dino.classList.remove('jump')
        }, 400)
    
} 

function changeLevel() {
    switch(true) {

        case (levelNumber == 1):
            document.querySelector('.game').style.backgroundImage = 'url(./image/desert.jpg)';
            cactus.style.backgroundImage = 'url(./image/cact.png)';
            break;
        case (levelNumber == 2):
            document.querySelector('.game').style.backgroundImage = 'url(./image/winter.jpg)';
            cactus.style.backgroundImage = 'url(./image/bear.png)';
            break;
        case (levelNumber == 3):
            document.querySelector('.game').style.backgroundImage = 'url(./image/forest.png)';
            cactus.style.backgroundImage = 'url(./image/fox.png)';
            break;
        case (levelNumber == 4):
            document.querySelector('.game').style.backgroundImage = 'url(./image/autumn.jpg)';
            cactus.style.backgroundImage = 'url(./image/squirrel.png)';
            break;   
        case (levelNumber == 5):
            document.querySelector('.game').style.backgroundImage = 'url(./image/forestSum.png)';
            cactus.style.backgroundImage = 'url(./image/croc.png)';
            break;             
    }

} 

let isDead  = setInterval(()=>{
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")),
        cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); 
    
     if(dinoTop > 210 && cactusLeft > 50 && cactusLeft < 100) {

         alert(`GAME OVER!!!! Your score is: ${counter}`);
         cactus.style.left = '570px'
         counter = 0;
         hiScore.innerHTML = 'HISCORE: 0';
         levelNumber = 1;
         level = 1;
     } 
     changeLevel();
},10)

