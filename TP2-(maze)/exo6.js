onload = (event) => {
    /*exo6*/
    var start = true;
document.getElementById('start').addEventListener("mouseover", function s(){   
    var obstacles = document.getElementsByClassName("boundary"); 
    var alert_once=true;
    var colored=false;
  
    if(start==true)
   { 
    document.getElementById('maze').addEventListener("mouseleave", function cheater(){    
        start=false;   
        if(colored==false){for (let obstacle of obstacles) {  
          obstacle.style.backgroundColor = "red";colored=true}}
        if(alert_once==true){
         document.getElementById("status").innerHTML = "you lose (Cheater)!";
          alert_once=false;
        }       
        })
       for (let obstacle of obstacles) {   
        obstacle.addEventListener("mouseover",function fail(){
            start=false;
          if(colored==false){obstacle.style.backgroundColor = "red"; colored=true}
            if(alert_once==true){
             document.getElementById("status").innerHTML = "you lose !";
              alert_once=false;
            }       
        })    
        if(obstacle.style.backgroundColor != "red"){  
            document.getElementById('end').addEventListener("mouseover",function succ(){
              if(colored==false){for(let obstacle of obstacles){obstacle.style.backgroundColor = "green"; colored=true}}
              start=false;
              if(alert_once==true){
                document.getElementById("status").innerHTML = "you win !";
                  alert_once=false;
                }
        })} 
      
    } } 
/*reset game*/
    document.getElementById('start').addEventListener("click", function s(){ 
        var obstacles = document.getElementsByClassName("boundary"); 
        document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";
        for (let obstacle of obstacles) {   
            obstacle.style.backgroundColor = "#eeeeee" ; 
          }  
          document.getElementById('maze').addEventListener("mouseleave", function cheater(){    
            start=false;   
            if(colored==false){for (let obstacle of obstacles) {  
              obstacle.style.backgroundColor = "red";colored=true}}
            if(alert_once==true){
             document.getElementById("status").innerHTML = "you lose (Cheater)!";
              alert_once=false;
            }       
            })
              for (let obstacle of obstacles) {   
               obstacle.addEventListener("mouseover",function fail(){
               
                 if(colored==false){obstacle.style.backgroundColor = "red"; colored=true}
                   if(alert_once==true){
                    document.getElementById("status").innerHTML = "you lose !";
                     alert_once=false;
                   }       
               })    
               if(obstacle.style.backgroundColor != "red"){  
                   document.getElementById('end').addEventListener("mouseover",function succ(){
                     if(colored==false){for(let obstacle of obstacles){obstacle.style.backgroundColor = "green"; colored=true}}
                 
                     if(alert_once==true){
                        document.getElementById("status").innerHTML = "you win !";
                         alert_once=false;
                       }
               })} 
             
           } 
     })
})}