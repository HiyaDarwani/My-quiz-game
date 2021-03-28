class Contestant {
    constructor(){
      this.name = null;
     
     
    }
  
    getCount(){
      var contestantCountRef = database.ref('ContestantCount');
      contestantCountRef.on("value",(data)=>{
       contestantCountRef = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
  /* update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name
      });
    }*/
  
}