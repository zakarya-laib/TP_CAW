onload = (event) =>{var start = true;
document.getElementById('start').addEventListener("mouseover", function s(){   
    var obstacles = document.getElementsByClassName("boundary"); 
    var alert_once=true;
    var colored=false;
    if(start==true) {  
         for (let obstacle of obstacles) {   
        obstacle.addEventListener("mouseover",function fail(){
            start=false;
          if(colored==false){obstacle.style.backgroundColor = "red"; colored=true}
            if(alert_once==true){
              alert("you lose !");
              alert_once=false;
            }       
        })    
        if(obstacle.style.backgroundColor != "red"){  
            document.getElementById('end').addEventListener("mouseover",function succ(){
              start=false;
              if(colored==false){for(let obstacle of obstacles){obstacle.style.backgroundColor = "green"; colored=true}}
              if(alert_once==true){
                  alert("you win !");
                  alert_once=false;
                }
        })} 
      
    }  }
})}