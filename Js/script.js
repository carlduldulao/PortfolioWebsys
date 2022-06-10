function openNav() {

  if(innerWidth <= 768){
    document.getElementById("myNav").style.width="100%";
    document.getElementById("myNav").style.maxWidth="500px";
  }
  else{
    document.getElementById("myNav").style.minWidth="500px";
  }
    
}
function closeNav(){
  
  if(innerWidth <= 768){
    document.getElementById("myNav").style.width = "0";
    document.getElementById("myNav").style.minWidth = "0";
  }
  else{
    document.getElementById("myNav").style.width = "0";
    document.getElementById("myNav").style.minWidth = "0";
  }
}


