const endDate = "26 September 2023 8:00:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if( diff < 0) return;
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);// DAYS = (diff / 3600 / 24)
      //convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24; // HOURS = (diff / 3600) % 24
      //convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60; //MINUTES = (diff / 60) % 60
    //convert into seconds
    inputs[3].value = Math.floor(diff) % 60;// SECONDS = (diff) % 60
}
clock()

/*
1 day = 24 hours
1 hr = 60 minutes
60 minutes = 3600 seconds
*/

setInterval(
    () =>{
        clock()
    },
    1000
)