onload = (event) =>{
    
    document.getElementById('start').addEventListener("mouseover", function s(){ 
        var obstacles = document.getElementsByClassName("boundary");
       var colored=false;
for (const obstacle of obstacles) {
    obstacle.addEventListener("mouseover", () => {
       if(colored==false) {obstacle.style.backgroundColor = "red";colored=true}
        
    })


}})}