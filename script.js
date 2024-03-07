
function updateClock(){
 const now = new Date();
 let hours = now.getHours();
 const maridem = hours >=12?"PM":"AM";
  hours = hours %12||12;
 const min= now.getMinutes().toString().padStart(2,0);
 const sec = now.getSeconds().toString().padStart(2,0);
 const time =`${hours}:${min}:${sec} ${maridem}`;
 document.getElementById("clock").textContent=time;

}

setInterval(updateClock,1000)