class Player{
    constructor(){
   
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;

    }
    getCount(){
        var playerCountref = database.ref('playerCount')
        playerCountref.on('value',(data)=>{
            playerCount = data.val();
        })  
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    update(){
        var playerIndex = 'players/player'+this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            rank: this.rank
        })
    }
    getCarsatEnd(){
       var finishedPlayerRef = database.ref("carsatEnd")
       finishedPlayerRef.on("value",(data)=>{
            finishedPlayer = data.val();
        })
    }
    static updateCarsatEnd(){
        database.ref('/').update({
            finishedPlayer: finishedPlayer+1
        })
        this.rank+=1;
    }
    static getPlayerinfo(){
        var playerinforef = database.ref('players')
        playerinforef.on('value',(data)=>{
        allPlayers = data.val();
        })
    }
}