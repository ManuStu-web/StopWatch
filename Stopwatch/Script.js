const nums = document.getElementById("nums");
let timer=null;
let starttime=0;
let elapsedtime=0;
let isrunning =false;

function start()
{
    if(!isrunning)
    {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update,10);
        isrunning=true;
    }
}

function stop()
{
   if(isrunning)
   {
    clearInterval(timer);
    elapsedtime = Date.now() -starttime;
    isrunning =false;
   }
}

function reset()
{
   clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isrunning = false;
    nums.textContent="00:00:00:00";
}

function update()
{
   const currentTime =Date.now();
   elapsedtime = currentTime -starttime;

   let hours = Math.floor(elapsedtime / (1000*60*60));
   let Minutes = Math.floor(elapsedtime / (1000*60)%60);
   let sec = Math.floor(elapsedtime / 1000%60);
   let ms =Math.floor(elapsedtime %1000 /10);

   hours = String(hours).padStart(2,"0");
   Minutes = String(Minutes).padStart(2,"0");
   sec = String(sec).padStart(2,"0");
   ms = String(ms).padStart(2,"0");

   nums.textContent = `${hours}:${Minutes}:${sec}:${ms}`
}
