/**
    * @description      : 
    * @author           : al gm store
    * @group            : 
    * @created          : 11/03/2023 - 13:03:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/03/2023
    * - Author          : al gm store
    * - Modification    : 
**/
let enddate = "Dec 12 , 2023, 10:00:00 PM"
document.getElementById("end-date").innerHTML = enddate
const input = document.querySelectorAll("input")
clock = () => {
    const end = new Date(enddate);
    const now = new Date();
    const diff = Math.floor((end - now) / 1000);
    if (diff < 0) return;
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;

}
clock();
setInterval(() => {

    clock();
}, 1000);