const lsdate=" 18 February 2024  09:00 PM  ";

document.getElementById("lastDate").innerText=lsdate;
const inputs=document.querySelectorAll("input");


function cloc(){
    // js has a object date which tells the cuur date via refering with date in 1900 
    const enddate=new Date(lsdate);
    const now= new Date();
    const di=(enddate-now)/1000;//miliseconds to seconds
    // console.log(enddate)
    // console.log(now)
    inputs[0].value=Math.floor(di/3600/24);// Days
    inputs[1].value=Math.floor((di/3600)%24);//hours
    inputs[2].value=Math.floor((di/60)%60);//minutes
    inputs[3].value=Math.floor(di%60);//seconds 
    // we got diffrence in milli seconds  

    if(di<0){
        return ;
    }
}

setInterval(
    () =>{
        cloc();
    },1000
)