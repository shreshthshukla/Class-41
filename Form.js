class Form {
    constructor(){

        this.input = createInput("").attribute("placeholder","name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
        this.reset = createButton("Reset");

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html('Car Racing')
        title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        
        this.reset.position(displayWidth-100,20);

        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index=playerCount
            player.update();
            player.updateCount(playerCount)
            this.greeting.html('HELLO '+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
        this.reset.mousePressed(()=>{
         game.update(0);
         player.updateCount(0);
         Player.updateCarsatEnd(0);
        })
    }
}