class Videogame{ 
    constructor (title,characters,duration,brand){
        this.title = 'title'
        this.characters = 'characters'
        this.duration = 'duration'
        this.brand = 'brand'
    }
        start (){ 
    alert ('Time to have fun!')
        }
        stop(){
     alert ('Game over!')
        }
    pause(){

       alert('See you in a few!')
        }
    }
    resume(){

       alert('Back again!')
        }
    

    let mario = new Videogame('mario','toad, wario rosalina bowser jr princess daisy ','2 hours','Nintendo')