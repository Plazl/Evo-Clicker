     var hasClickers = false;

     var x = 0;

     var y = 0;

     var z = 0;
    
     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     

     
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   
 //click adder
function addClicks(amount) {

 clicks = clicks + amount * multiplier;
     
  }
//upgrade menu
     function upgradeMenu() {
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
           var y = document.getElementById("main1");
  if (y.style.display === "none") {
    y.style.display = "block";     
  } else {
    y.style.display = "none";

  }
          var z = document.getElementById("upgradestab");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";

  }  
}
//multiplier
function buyMult() {

if (clicks >= multiplierCost) {


    var clicks = clicks - multiplierCost;
    var multiplierCost = multiplierCost * 1.5;
    var multiplier = multiplier + amount; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("multiplier").innerHTML = multiplier
 
     
  }

}
//clicker
function buyClicker() {

if (clicks >= clickerCost) {


    var clicks = clicks - clickerCost;
    var clickerCost = clickerCost * 1.5;
    var clickers = clickers + amount; 
    var hasClickers = true;
    var t = t - 0.5;
    document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  
 
          
    
 
        
  }

}



     setInterval(updater, 100);
     function updater() {
      if (clicks >= 1e34) { 
           
      var formattedClicks = clicks.toExponential(2);
         }
      document.getElementById("clicks").innerHTML = formattedClicks;
     }
  
   





