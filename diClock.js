 setInterval(myFun, 1000);

 function myFun(){
    let date=new Date();
    let time= date.toLocaleTimeString();
    // toLocalTimeString()= this will set your time as per your current computer
    document.getElementById('time').innerHTML=time;
}