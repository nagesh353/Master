function mobile()
{
    var num=document.getElementById("i1").value
    var res=num.length
    if(res==10)
    {
        document.getElementById("i1").style.outlineColor="green"
        //active button
        document.getElementById("d1").removeAttribute("disabled")
        document.getElementById("s1").style.color="green"
    }
    else{
        document.getElementById("i1").style.outlineColor="red"
       // document.getElementById("s1").style.color="red"
      // document.getElementById("s1").innerHTML="*enter correct mobileno"
       document.getElementById("d1").setAttribute("disabled",true)
      // document.getElementById("d1").


    }
    
}
function Green()
{
    document.getElementById("s1").innerHTML="OTP generated Succesfully"
}